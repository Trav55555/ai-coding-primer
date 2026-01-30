---
title: "TypeScript .cursorrules"
description: .cursorrules template for TypeScript projects in Cursor.
sidebar:
  order: 10
---

A minimal `.cursorrules` template for TypeScript projects in Cursor IDE.

## Template (27 lines)

```markdown
# TypeScript Project Rules

## Tech Stack
- TypeScript with strict mode
- [Framework: React/Next.js/Express/etc.]
- [Testing: Vitest/Jest]

## Commands
- `npm run dev` - Development
- `npm test` - Tests
- `npm run lint` - Linting
- `npm run typecheck` - Type checking

## Code Style
- Use named exports
- Consistent function style (declarations or arrows)
- All functions must have explicit return types
- No `any` types - use `unknown` and narrow

## Gotchas
- [Add your project-specific gotchas]

## File Patterns
- Components: `src/components/[Name]/[Name].tsx`
- Hooks: `src/hooks/use[Name].ts`
- Types: `src/types/[name].ts`
```

## Usage

1. Copy the template above
2. Save as `.cursorrules` in your project root
3. Replace `[Framework]` and `[Testing]` placeholders
4. Add your project-specific gotchas

## Cursor-Specific Features

Cursor also supports `.cursor/rules/*.mdc` for modular rules:

```
.cursor/
└── rules/
    ├── general.mdc      # Project-wide rules
    ├── frontend.mdc     # React/UI rules
    └── api.mdc          # Backend rules
```
