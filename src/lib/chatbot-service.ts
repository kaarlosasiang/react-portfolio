/// <reference types="astro/client" />

import knowledge from "./chatbot-knowledge.json";

const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

// Ordered fallback chain — tries each model in sequence on rate-limit/quota errors
const MODELS = [
  "meta-llama/llama-3.3-70b-instruct:free",
  "openrouter/free",
];

const FALLBACK_STATUS_CODES = new Set([429, 503, 529]);

function buildSystemPrompt(): string {
  return `You are a personal assistant embedded in ${knowledge.person.name}'s portfolio website. You know Kaarlo well — his background, skills, projects, and career. Speak naturally and confidently, as if you personally know him.

${JSON.stringify(knowledge, null, 2)}

Rules:
- NEVER say phrases like "based on the information provided", "according to my data", "from the knowledge base", "the information I have", or any similar meta-references. Just answer directly and confidently.
- Do not fabricate details that aren't in your knowledge above.
- Be concise, warm, and direct. 1 short paragraph is usually enough unless a detailed breakdown is asked for. But keep it short always.
- Have some humor and personality! Kaarlo is friendly and approachable, so reflect that in your tone.
- Make your best effort to answer all questions, even if the answer isn't explicitly in the knowledge. Use inference and reasoning based on what you know about Kaarlo.
- You can use emojis based on the context
- If asked something outside Kaarlo's professional background, politely steer back to the topic.
- For contact, point to GitHub (${knowledge.person.contact.github}) or the contact section on this portfolio.
- Current context: early 2026.`;
}

export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export async function streamChat(
  messages: ChatMessage[],
  onChunk: (delta: string) => void,
  onDone: () => void,
  onError: (error: string) => void
): Promise<void> {
  const apiKey = import.meta.env.PUBLIC_OPENROUTER_API_KEY;

  if (!apiKey || apiKey === "your_openrouter_api_key_here") {
    onError("OpenRouter API key is not configured. Please add PUBLIC_OPENROUTER_API_KEY to your .env file.");
    onDone();
    return;
  }

  const systemPrompt = buildSystemPrompt();
  let response: Response | null = null;
  let lastError = "";

  for (const model of MODELS) {
    try {
      response = await fetch(OPENROUTER_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": window.location.origin,
          "X-Title": "Kaarlo Sasiang Portfolio",
        },
        body: JSON.stringify({
          model,
          stream: true,
          messages: [
            { role: "system", content: systemPrompt },
            ...messages,
          ],
        }),
      });
    } catch {
      onError("Network error — please check your connection and try again.");
      onDone();
      return;
    }

    if (response.ok) break; // success — use this model

    if (FALLBACK_STATUS_CODES.has(response.status)) {
      // Rate-limited or overloaded — try next model
      lastError = `${model} returned ${response.status}`;
      response = null;
      continue;
    }

    // Non-retryable error
    const text = await response.text().catch(() => "");
    onError(`API error (${response.status}): ${text || response.statusText}`);
    onDone();
    return;
  }

  if (!response) {
    onError(`All models are currently unavailable. Last error: ${lastError}`);
    onDone();
    return;
  }

  const reader = response.body?.getReader();
  if (!reader) {
    onError("Failed to read streaming response.");
    onDone();
    return;
  }

  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed === "data: [DONE]") continue;
        if (!trimmed.startsWith("data: ")) continue;

        try {
          const json = JSON.parse(trimmed.slice(6));
          const delta: string = json.choices?.[0]?.delta?.content ?? "";
          if (delta) onChunk(delta);
        } catch {
          // malformed SSE chunk — skip
        }
      }
    }
  } finally {
    reader.releaseLock();
    onDone();
  }
}
