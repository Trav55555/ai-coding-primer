---
title: "Next.js Template"
description: CLAUDE.md template for Next.js App Router projects.
sidebar:
  order: 7
---

A minimal CLAUDE.md template for Next.js 15 projects using App Router.

## Template (27 lines)

```markdown
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
```

## Usage

1. Copy the template above
2. Save as `CLAUDE.md` or `AGENTS.md` in your project root
3. Replace `[One sentence describing your project]` with your description
4. Add your project-specific gotchas

## App Router Gotchas

Common issues with Next.js App Router:

```markdown
## Gotchas
- Server Components by default - add 'use client' only for interactivity
- Server Actions go in `/lib/actions/`, not inline
- Use `next/navigation` not `next/router`
- Dynamic routes: `app/posts/[id]/page.tsx`
- Layouts persist across navigation - don't put ephemeral state there
```
