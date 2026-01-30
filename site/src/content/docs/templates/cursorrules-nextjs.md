---
title: "Next.js .cursorrules"
description: .cursorrules template for Next.js projects in Cursor.
sidebar:
  order: 16
---

A minimal `.cursorrules` template for Next.js projects in Cursor IDE.

## Template (26 lines)

```markdown
# Next.js Project Rules

## Tech Stack
- Next.js 15 (App Router)
- TypeScript with strict mode
- Tailwind CSS
- Prisma for database

## Commands
- `npm run dev` - Development
- `npm test` - Tests
- `npm run lint` - Linting
- `npm run build` - Production build

## Code Style
- Server Components by default
- 'use client' only when needed
- Server Actions for mutations
- Named exports only

## Gotchas
- [Add your project-specific gotchas]

## File Patterns
- Pages: `app/[route]/page.tsx`
- Layouts: `app/[route]/layout.tsx`
- API: `app/api/[route]/route.ts`
- Components: `components/[Name].tsx`
- Actions: `lib/actions/[name].ts`
```

## Usage

1. Copy the template above
2. Save as `.cursorrules` in your project root
3. Review and update the **Tech Stack** to match your project
4. Add your project-specific gotchas
