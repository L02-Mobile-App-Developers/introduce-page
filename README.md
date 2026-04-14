# Landing Page

Landing page built with Next.js (App Router), TypeScript, Tailwind CSS, and reusable UI components.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI primitives

## Prerequisites

- Node.js 20+
- pnpm (recommended)

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Run development server:

```bash
pnpm dev
```

3. Open in browser:

```text
http://localhost:3000
```

## Available Scripts

- `pnpm dev`: Start local development server.
- `pnpm build`: Build production bundle.
- `pnpm start`: Start app in production mode.
- `pnpm lint`: Run lint checks.

## Project Structure

```text
app/                # App Router pages and global layout
components/         # Page sections and reusable UI components
components/ui/      # Base UI primitives
hooks/              # Custom React hooks
lib/                # Shared helpers and utilities
public/             # Static assets
styles/             # Global style files
```

## Notes

- Environment variables should be stored in `.env.local`.
- Build and local artifacts are ignored via `.gitignore`.
- Project is ready to deploy on Vercel.