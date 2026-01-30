---
title: Claude Code
description: Anthropic's official terminal agent.
sidebar:
  order: 1
---

[Claude Code](https://claude.ai/code) is Anthropic's agentic coding tool for the terminal.

## Overview

| | |
|---|---|
| **Type** | CLI |
| **Open Source** | No |
| **Best For** | Agentic workflows, MCP |

## Key Features

- **Agentic Coding** — Reads, writes, executes autonomously
- **Multi-file Editing** — Understands project structure
- **Terminal Commands** — Runs build, test, lint
- **MCP Support** — External tool integration
- **CLAUDE.md** — Project context files

## Installation

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

## Pricing

Requires Claude subscription:
- **Pro** — $20/mo
- **Max** — $100/mo (more usage)
- **Teams/Enterprise** — Contact sales

## Privacy

| Setting | Value |
|---------|-------|
| Privacy Mode | Enterprise only |
| Training | ON by default (consumer) |
| Retention | 30 days or 5 years |
| Jurisdiction | US |

:::caution[Privacy Warning]
Consumer accounts (Free/Pro/Max) have training ON by default since August 2024. Enterprise accounts can disable this.
:::

## Getting Started

1. Install Claude Code
2. Authenticate with Claude account
3. Create `CLAUDE.md` in your project root
4. Run `claude` in your project directory

## CLAUDE.md Example

```markdown
# Project Context

## Commands
- `npm run dev` - Start dev server
- `npm test` - Run tests

## Gotchas
- Auth tokens in cookies, not localStorage
```

## Tips

- Use `/clear` to reset context
- Create CLAUDE.md for project-specific context
- Use subagents for research: "Use subagents to investigate X"
