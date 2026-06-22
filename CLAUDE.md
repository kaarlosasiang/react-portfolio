# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Astro dev server at localhost:4321
npm run build     # Production build to dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

No test suite is configured.

## Environment

Requires a `.env` file with:
```
PUBLIC_OPENROUTER_API_KEY=<your_key>
```

The `PUBLIC_` prefix is required for Astro to expose the variable client-side. The chatbot silently degrades when the key is missing or set to the placeholder value.

## Architecture

**Astro + React Islands**: Pages are `.astro` files that statically generate HTML. Interactive components are React files hydrated selectively with `client:load`, `client:idle`, or `client:visible` directives. JavaScript is kept minimal.

**Routing**: File-based via Astro. Dynamic project pages live at `/src/pages/project/[title].astro` and use `getStaticPaths()` pulling data from `src/lib/projects-data.ts`.

**Layout**: `src/layouts/BaseLayout.astro` is the single layout — it includes the navigation dock, chatbot widget, dark mode initialization, and global styles.

**Data layer**: All content is TypeScript/JSON in `src/lib/`:
- `portfolio-data.ts` — experience, certifications, tech skills
- `projects-data.ts` — project metadata and details
- `chatbot-knowledge.json` — knowledge base injected into the AI system prompt

**Chatbot** (`src/lib/chatbot-service.ts`): Calls the OpenRouter API with streaming (SSE). Uses a model fallback chain: primary model → Cohere North Mini → OpenAI OSS → OpenRouter free tier. Conversation state lives entirely in `ChatbotWidget` component props/state — no global store.

**Styling**: Tailwind CSS v4 with OKLch CSS variables for theming. Dark mode is toggled via a `dark` class on `<html>`, persisted in `localStorage`. Use the `cn()` utility from `src/lib/utils.ts` to merge Tailwind classes.

**UI components**: `src/components/ui/` contains shadcn/ui primitives (style: `new-york`). Shared page-level components are in `src/components/common/`.

**Path alias**: `@/*` resolves to `src/*` (configured in `tsconfig.json`).

**Deployment**: Vercel adapter is configured in `astro.config.mjs`.
