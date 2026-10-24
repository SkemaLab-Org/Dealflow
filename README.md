# Dealflow

The operating system for venture deal flow. Source, track, and close deals in one place: a shared pipeline, automated enrichment, and diligence workflows that keep every opportunity moving.

This repository contains the Dealflow marketing site and landing experience.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, React Server Components)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/turbopack`
- TypeScript, ESLint (`eslint-config-next`)
- Package manager: [pnpm](https://pnpm.io) 10

## Getting started

Requires Node.js 20.9+ (developed on Node 25).

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server with Turbopack |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Landing page composition
  globals.css       # Tailwind entrypoint and design tokens
components/
  landing/          # Landing page sections (hero, features, pricing, footer, ...)
public/             # Static assets
```

Landing sections are composed in `app/page.tsx`; each section lives in its own file under `components/landing/`.
