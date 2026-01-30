---
title: "TypeScript/React Template"
description: CLAUDE.md template for TypeScript + React + Vite projects.
sidebar:
  order: 3
---

A minimal CLAUDE.md template for TypeScript frontend projects using React and Vite.

## Template (33 lines)

```markdown
# Project Context

## What This Is
[One sentence describing your project]

## Tech Stack
TypeScript + React 18 + Vite + TailwindCSS

## Commands
- `npm run dev` - Start dev server
- `npm test` - Run Vitest tests
- `npm run lint` - ESLint + Prettier
- `npm run typecheck` - TypeScript compiler
- `npm run build` - Production build

## Architecture
- `/src/components/` - React components
- `/src/hooks/` - Custom React hooks
- `/src/pages/` - Page components / routes
- `/src/lib/` - Utilities and helpers
- `/src/types/` - TypeScript type definitions

## Gotchas
- [Add project-specific gotchas here]
- Example: Auth tokens in cookies, not localStorage
- Example: Use `date-fns`, not moment

## Code Style
- Use named exports, not default exports
- Consistent component style (function declarations or arrow functions)
- TailwindCSS for styling (no CSS modules)
- React hooks only (no class components)
```

## Usage

1. Copy the template above
2. Save as `CLAUDE.md`, `AGENTS.md`, or `.cursorrules` in your project root
3. Replace `[One sentence describing your project]` with your description
4. Replace the example gotchas with your project's actual gotchas

## Customization Tips

**Add gotchas when the AI:**
- Suggests the wrong state management library
- Uses class components instead of hooks
- Suggests CSS modules when you use Tailwind
- Forgets about your routing library conventions

**Remove sections if:**
- You don't use Tailwind (update Code Style instead)
- Your project doesn't have custom hooks
- The architecture is obvious from the folder structure

## Alternative: Next.js

For Next.js projects, update the architecture section:

```markdown
## Architecture
- `/app/` - App Router pages and layouts
- `/components/` - React components
- `/lib/` - Utilities and server actions
- `/public/` - Static assets

## Gotchas
- Use Server Components by default
- Add 'use client' only when needed
- Server Actions in `/lib/actions/`
```
