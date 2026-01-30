---
title: Project Context Files
description: Best practices for CLAUDE.md, .cursorrules, and AGENTS.md files.
sidebar:
  order: 1
---

AI tools read markdown files in your project root to understand context, conventions, and gotchas. Getting these right is the difference between an AI that "gets" your project and one that fights you.

## Which File to Use

| Tool | Context File | Notes |
|------|--------------|-------|
| Claude Code | `CLAUDE.md` | Official convention |
| Cursor | `.cursorrules` | Or `.cursor/rules/*.mdc` |
| Zed | `AGENTS.md` | Also reads `CLAUDE.md` |
| Continue.dev | `AGENTS.md` | Also reads `CLAUDE.md` |
| Copilot | `.github/copilot-instructions.md` | GitHub convention |
| Any tool | `AGENTS.md` | Widely recognized fallback |

## The Golden Rule: Shorter is Better

> "Overly verbose files can lead to Claude ignoring instructions if deemed irrelevant. Aim for under 300 lines." — Anthropic

**Target lengths:**
- **Ideal:** Under 100 lines
- **Maximum:** Under 300 lines
- **If longer:** Split into multiple files

**For each line, ask:** "Would removing this cause the AI to make mistakes?" If not, cut it.

## What to Include (and What to Skip)

### Include

| Category | Examples |
|----------|----------|
| **Gotchas** | "Use `date-fns`, not moment" / "Auth tokens in cookies, not localStorage" |
| **Commands** | `npm run dev`, `npm test`, build commands |
| **Non-obvious architecture** | "Database schema in `/prisma/`, not `/db/`" |
| **Project-specific conventions** | "Named exports only" / "No class components" |

### Skip (the AI can infer these)

| Category | Why Skip |
|----------|----------|
| **Language basics** | AI knows TypeScript, Python, etc. |
| **Framework docs** | AI knows React, Express, FastAPI |
| **Obvious patterns** | If it's in the code, AI will see it |
| **Vocabulary definitions** | Don't explain what "component" means |
| **Architectural patterns** | Don't explain MVC, Clean Architecture |

## Progressive Disclosure Pattern

**Don't embed everything. Tell the AI where to look.**

```markdown
## Architecture
See `/docs/architecture.md` for detailed system design.

## API Conventions  
See `/docs/api-conventions.md` for request/response patterns.

## Database
Schema in `/prisma/schema.prisma`. Migrations in `/prisma/migrations/`.
```

This keeps your context file short while giving the AI access to detailed information when needed.

## Modular Hierarchy

For larger projects, use a hierarchy of context files:

```
project/
├── CLAUDE.md              # Project-wide: commands, gotchas, conventions
├── src/
│   ├── api/
│   │   └── CLAUDE.md      # API-specific: auth patterns, error handling
│   └── components/
│       └── CLAUDE.md      # Component-specific: styling, state patterns
└── docs/
    ├── architecture.md    # Detailed docs (linked, not embedded)
    └── api-conventions.md
```

**Personal + Project files:**
- `~/.claude/CLAUDE.md` — Your personal preferences (editor, style)
- `./CLAUDE.md` — Project-specific context

## Template Structure

```markdown
# Project Context

## What This Is
[One sentence describing the project]

## Commands
- `[command]` - [what it does]

## Gotchas
- [Thing the AI gets wrong and how to fix it]

## Code Style
- [Non-obvious preference]
```

That's it. Start minimal, add only what causes mistakes.

## Anti-Patterns

| Anti-Pattern | Why It Fails |
|--------------|--------------|
| **Embedding full documentation** | AI ignores long files; use links instead |
| **Explaining language basics** | AI already knows; wastes context |
| **Duplicating README content** | AI can read README; don't repeat |
| **Listing every file/folder** | AI can explore; describe only non-obvious structure |
| **Verbose style guides** | Keep to 3-5 key rules; AI infers the rest |

## Example: Minimal TypeScript/React

```markdown
# Project Rules

## Commands
- `npm run dev` - Start dev server
- `npm test` - Run tests
- `npm run lint` - Lint and typecheck

## Gotchas
- Auth tokens in cookies, not localStorage
- Use `date-fns`, not moment
- Database schema in `/prisma/schema.prisma`

## Code Style
- Named exports only
- Prefer arrow functions for components
```

**22 lines.** Everything else, the AI can infer from the code.

## Example: Minimal Python

```markdown
# Project Context

## Commands
- `uv run uvicorn app.main:app --reload` - Dev server
- `uv run pytest` - Run tests
- `uv run alembic upgrade head` - Migrations

## Gotchas
- Model artifacts in `/models/` - don't commit (use DVC)
- Legacy `/v1/score` uses old schema - don't modify

## Code Style
- Type hints on all functions
- Async for I/O, sync for CPU-bound
```

**16 lines.** Focused on what the AI would get wrong without guidance.

## Living Document

Your context file should evolve:

1. **Start minimal** — 10-20 lines
2. **Add when AI makes mistakes** — "It keeps suggesting moment instead of date-fns" → add gotcha
3. **Remove when redundant** — If AI consistently gets something right, you don't need to tell it
4. **Version control** — Track changes, revert if something breaks

## Downloadable Templates

Ready-to-use templates for common stacks:

- [Node.js/Express](/ai-coding-primer/templates/claude-md-nodejs/)
- [Python/FastAPI](/ai-coding-primer/templates/claude-md-python/)
- [TypeScript/React](/ai-coding-primer/templates/claude-md-typescript-react/)
- [Go](/ai-coding-primer/templates/claude-md-go/)
- [Rust](/ai-coding-primer/templates/claude-md-rust/)
