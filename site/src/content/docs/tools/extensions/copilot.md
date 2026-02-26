---
title: GitHub Copilot
description: GitHub's AI pair programmer extension.
sidebar:
  order: 1
---

[GitHub Copilot](https://github.com/features/copilot) is GitHub's AI coding assistant, available as an extension for VS Code, JetBrains, and other editors.

## Overview

| | |
|---|---|
| **Type** | Extension |
| **Open Source** | No |
| **Best For** | Existing VS Code/JetBrains users, enterprise |

## Key Features

- **Inline Completions** — Tab to accept suggestions
- **Chat** — Conversational coding assistance
- **Copilot Edits** — Multi-file editing
- **Workspace Agent** — `@workspace` for codebase context
- **CLI Integration** — Terminal command suggestions

## Pricing

| Plan | Price | Notes |
|------|-------|-------|
| Free | $0 | 50 chat/mo, 2000 completions/mo |
| Pro | $10/mo | Unlimited |
| Pro+ | $39/mo | Higher premium request allowance |
| Business | $19/user/mo | Policy controls, IP indemnity |
| Enterprise | $39/user/mo | Codebase indexing, SCIM |

## Privacy

| Setting | Value |
|---------|-------|
| Training | OFF for Business/Enterprise |
| Telemetry | Configurable |
| Code Storage | Not retained (Business+) |
| Jurisdiction | US (Microsoft) |

:::tip[IP Indemnity]
Business and Enterprise plans include IP indemnity — Microsoft covers legal costs if Copilot output causes IP issues.
:::

## Models Available

Model availability is plan-dependent and changes frequently. Common options include:

- GPT-5.x family (including Codex variants)
- Claude Sonnet/Opus 4.6
- Gemini 3 Pro

## Installation

**VS Code:**
```
1. Extensions → Search "GitHub Copilot"
2. Install
3. Sign in with GitHub
```

**JetBrains:**
```
1. Settings → Plugins → Search "GitHub Copilot"
2. Install
3. Sign in with GitHub
```

## Context Files

Copilot uses `.github/copilot-instructions.md`:

```markdown
# Copilot Instructions

## Code Style
- Use TypeScript strict mode
- Prefer named exports

## Gotchas
- Auth tokens in cookies, not localStorage
```

## Workspace Agent

Use `@workspace` to give Copilot codebase context:

```
@workspace How is authentication implemented?
@workspace Find all API endpoints
@workspace Explain the data flow for user creation
```

## Tips

- Use `@workspace` for codebase-aware questions
- Create `.github/copilot-instructions.md` for project context
- Tab accepts suggestions, Esc dismisses
- `Ctrl+Enter` shows multiple suggestions
