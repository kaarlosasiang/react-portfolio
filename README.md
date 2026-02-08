# Portfolio - Kaarlo Sasiang

A modern, performant portfolio website built with [Astro](https://astro.build) and React.

## 🚀 Tech Stack

- **Framework:** Astro 5.x with React islands
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI primitives
- **Animations:** Motion (Motion One)
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono (via Fontsource)
- **Build:** Static Site Generation (SSG)

## 🏗️ Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── common/      # Shared components (headers, cards, etc.)
│   │   ├── ui/          # UI primitives (buttons, badges, etc.)
│   │   └── providers/   # Context providers
│   ├── layouts/         # Page layouts
│   ├── lib/             # Utilities and data
│   ├── pages/           # File-based routing
│   │   ├── index.astro  # Home page
│   │   └── project/     # Dynamic project pages
│   └── styles/          # Global styles
└── astro.config.mjs     # Astro configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start dev server (usually at http://localhost:4321)
pnpm run dev
```

### Build

```bash
# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## ✨ Features

- **Island Architecture:** Interactive components hydrate only when needed
- **Dark Mode:** Built-in theme switching with smooth transitions
- **Responsive Design:** Mobile-first, fully responsive layout
- **SEO Optimized:** Static generation for better SEO
- **Fast Performance:** Minimal JavaScript, maximum speed
- **Type Safe:** Full TypeScript support

## 🎨 Customization

### Updating Content

- **Portfolio Data:** Edit `src/lib/portfolio-data.ts`
- **Projects:** Edit `src/lib/projects-data.ts`
- **Theme Colors:** Modify CSS variables in `src/styles/global.css`

### Component Hydration Strategy

Components use Astro's client directives:
- `client:load` - Hydrate immediately (critical UI)
- `client:idle` - Hydrate when browser is idle
- `client:visible` - Hydrate when scrolled into view

## 📦 Deployment

This project is configured for static deployment and works great with:

- **Vercel** (recommended)
- **Netlify**
- **Cloudflare Pages**
- Any static hosting service

The build outputs to `dist/` directory.

## 🔧 Migration Notes

This project was migrated from Next.js to Astro while:
- Preserving all UI components (Radix UI as React islands)
- Maintaining Tailwind CSS v4
- Keeping the existing design system
- Improving performance through partial hydration

## 📝 License

MIT

