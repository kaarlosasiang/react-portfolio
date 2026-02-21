"use client";

import * as React from "react";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { streamChat, type ChatMessage } from "@/lib/chatbot-service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  isError?: boolean;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Hi there! 👋 I'm Kaarlo's assistant. Feel free to ask me anything about his work, skills, or projects.",
  },
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const bottomRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [fabScope, animateFab] = useAnimate();

  // Wiggle the FAB every 8s to catch attention (only when chat is closed)
  React.useEffect(() => {
    if (isOpen) return;
    const interval = setInterval(() => {
      animateFab(fabScope.current, {
        rotate: [0, -14, 14, -10, 10, -6, 6, 0],
      }, { duration: 0.7, ease: "easeInOut" });
    }, 8000);
    return () => clearInterval(interval);
  }, [isOpen, animateFab, fabScope]);

  // Scroll to bottom when new messages arrive
  React.useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Focus input when panel opens
  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Optimistically insert an empty assistant message to stream into
    const assistantId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", content: "" },
    ]);

    // Build the conversation history for the API (exclude the empty assistant placeholder)
    const history: ChatMessage[] = [...messages, userMsg].map((m) => ({
      role: m.role,
      content: m.content,
    }));

    await streamChat(
      history,
      (delta) => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: m.content + delta } : m,
          ),
        );
      },
      () => {
        setIsLoading(false);
      },
      (error) => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: error, isError: true } : m,
          ),
        );
      },
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            style={{ originX: 1, originY: 1 }}
            className="mb-3 flex w-100 max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-primary px-4 py-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/20 relative">
                <div className="size-3 bg-green-500 absolute rounded-full -top-1 right-0"></div>
                <img
                  src="/chatbot-img.jpg"
                  alt="Kaarlo's Assistant"
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-primary-foreground leading-none">
                  Kaarlo's Assistant
                </p>
                <p className="mt-0.5 text-xs text-primary-foreground/70">
                  Ask me anything
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Messages */}
            <ScrollArea className="h-90 px-4 py-3">
              <div className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex gap-2",
                      msg.role === "user" ? "flex-row-reverse" : "flex-row",
                    )}
                  >
                    {msg.role === "assistant" && (
                      <Avatar className="size-7 shrink-0">
                        <AvatarImage src="/chatbot-img.jpg" />
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                          K
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed",
                        msg.role === "user"
                          ? "rounded-tr-sm bg-primary text-primary-foreground"
                          : msg.isError
                            ? "rounded-tl-sm bg-destructive/10 text-destructive"
                            : "rounded-tl-sm bg-muted text-foreground",
                      )}
                    >
                      {/* Typing indicator while streaming first chunk */}
                      {msg.role === "assistant" &&
                      msg.content === "" &&
                      isLoading ? (
                        <span className="flex items-center gap-1 py-0.5">
                          <span className="size-1.5 animate-bounce rounded-full bg-foreground/40 [animation-delay:0ms]" />
                          <span className="size-1.5 animate-bounce rounded-full bg-foreground/40 [animation-delay:150ms]" />
                          <span className="size-1.5 animate-bounce rounded-full bg-foreground/40 [animation-delay:300ms]" />
                        </span>
                      ) : (
                        msg.content
                      )}
                    </div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="flex items-center gap-2 border-t bg-background px-3 py-3">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message…"
                className="h-9 flex-1 rounded-full text-sm"
                disabled={isLoading}
              />
              <Button
                size="icon"
                className="size-9 shrink-0 rounded-full"
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
              >
                <Send className="size-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        ref={fabScope}
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="size-7" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="size-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
