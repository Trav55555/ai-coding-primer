---
title: Project Context Files
description: How to write CLAUDE.md, .cursorrules, and AGENTS.md files.
sidebar:
  order: 1
---

AI coding tools can read project instruction files to learn local commands, conventions, and constraints. These files should be short and specific.

## Which File to Use

| Tool | Context file | Notes |
|---|---|---|
| Claude Code | `CLAUDE.md` | official convention |
| Cursor | `.cursorrules` | or `.cursor/rules/*.mdc` |
| Zed | `AGENTS.md` | also reads `CLAUDE.md` |
| Continue.dev | `AGENTS.md` | also reads `CLAUDE.md` |
| Copilot | `.github/copilot-instructions.md` | GitHub convention |
| Any tool | `AGENTS.md` | widely recognized fallback |

## Length Rule

> "Overly verbose files can lead to Claude ignoring instructions if deemed irrelevant. Aim for under 300 lines." — Anthropic

Suggested length:

- **Preferred:** under 100 lines
- **Upper bound:** under 300 lines
- **If longer:** split into smaller linked files

For each line, ask whether removing it would likely cause an implementation mistake. If not, remove it.

## What to Include

| Category | Examples |
|---|---|
| **Gotchas** | `Use date-fns, not moment`; `Auth tokens live in cookies, not localStorage` |
| **Commands** | `npm run dev`, `npm test`, build commands |
| **Non-obvious architecture** | `Database schema is in /prisma/, not /db/` |
| **Project-specific conventions** | `Named exports only`; `No class components` |
| **Safety boundaries** | `Do not edit generated files`; `Do not run networked commands without approval` |

## What to Skip

| Category | Reason to skip |
|---|---|
| **Language basics** | the model already has general language knowledge |
| **Framework docs** | link to docs instead of copying them |
| **Obvious patterns** | the agent can inspect the code |
| **Vocabulary definitions** | avoid generic definitions that do not change implementation |
| **Full architecture documents** | link to them and summarize only the relevant gotcha |

## Progressive Disclosure Pattern

Do not embed every supporting document. Link to the document the agent should inspect when needed.

```markdown
## Architecture
See `/docs/architecture.md` for detailed system design.

## API Conventions
See `/docs/api-conventions.md` for request/response patterns.

## Database
Schema in `/prisma/schema.prisma`. Migrations in `/prisma/migrations/`.
```

This keeps the context file short while preserving a path to details.

## Modular Hierarchy

For larger projects, use context files near the code they govern:

```text
project/
├── CLAUDE.md              # project-wide: commands, gotchas, conventions
├── src/
│   ├── api/
│   │   └── CLAUDE.md      # API-specific: auth patterns, error handling
│   └── components/
│       └── CLAUDE.md      # component-specific: styling, state patterns
└── docs/
    ├── architecture.md    # detailed docs, linked rather than embedded
    └── api-conventions.md
```

Personal and project files serve different purposes:

- `~/.claude/CLAUDE.md`: personal preferences
- `./CLAUDE.md`: project-specific context

## Template Structure

```markdown
# Project Context

## What This Is
[One sentence describing the project]

## Commands
- `[command]` - [what it does]

## Gotchas
- [Thing the AI gets wrong and how to avoid it]

## Code Style
- [Non-obvious preference]
```

Start small. Add only the rules that prevent repeated mistakes.

## Anti-Patterns

| Anti-pattern | Problem |
|---|---|
| **Embedding full documentation** | long files reduce instruction relevance; link instead |
| **Explaining language basics** | consumes context without changing behavior |
| **Duplicating README content** | the agent can read the README when needed |
| **Listing every file or folder** | the agent can explore; describe only non-obvious structure |
| **Verbose style guides** | keep only the rules that affect common edits |

## Example: Minimal Project Context

```markdown
# Project Context

## Commands
- `[focused test command]` - Verify the affected behavior
- `[broader check command]` - Run before treating the change as complete

## Boundaries
- Edit `[source path]`; do not edit generated output in `[generated path]`
- Ask before package installs, networked commands, or data migrations

## Gotchas
- `[legacy path]` follows an older contract; preserve it unless the task includes migration
```

This example is short because most project information is already visible in code and tests. Applied frontend, backend, hypermedia, and editor-rule patterns belong in the examples below.

## Maintenance

Update context files when repeated behavior shows a missing rule:

1. **Start minimal:** 10 to 20 lines.
2. **Add a rule after repeated mistakes:** for example, `Use date-fns, not moment`.
3. **Remove redundant rules:** if the tool infers something reliably, stop spending context on it.
4. **Version control changes:** revert context edits that make output worse.

## Adapt an Example

Choose by the boundary the agent must preserve, not by framework name:

- [Frontend Context File](/ai-coding-primer/templates/frontend-context-file/) — browser, routing, and server/client boundaries
- [Backend Context Files](/ai-coding-primer/templates/backend-context-files/) — service, data, migration, and operational boundaries
- [Hypermedia Context File](/ai-coding-primer/templates/hypermedia-context-file/) — server-rendered HTML and fragment-response boundaries
- [Editor Project Rules](/ai-coding-primer/templates/editor-project-rules/) — path- or task-scoped instructions in a perishable editor format
