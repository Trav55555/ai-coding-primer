# Project Context

## What This Is
[One sentence describing your project]

## Tech Stack
Next.js 15 + TypeScript + Tailwind CSS + Prisma

## Commands
- `npm run dev` - Start dev server
- `npm test` - Run tests
- `npm run lint` - ESLint + Prettier
- `npm run build` - Production build
- `npx prisma db push` - Sync schema

## Architecture
- `/app/` - App Router pages and layouts
- `/app/api/` - API route handlers
- `/components/` - React components
- `/lib/` - Utilities, server actions, db client
- `/prisma/` - Database schema

## Gotchas
- [Add project-specific gotchas here]
- Example: Use Server Components by default
- Example: Add 'use client' only when needed for interactivity

## Code Style
- Server Components by default
- Server Actions for mutations (in `/lib/actions/`)
- Named exports, not default exports
- Tailwind for styling
