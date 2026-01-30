---
title: Codex CLI
description: OpenAI's open-source terminal agent.
sidebar:
  order: 5
---

[Codex CLI](https://github.com/openai/codex-cli) is OpenAI's open-source terminal coding agent.

## Overview

| | |
|---|---|
| **Type** | CLI |
| **Open Source** | Yes (April 2025) |
| **Best For** | OpenAI models, ChatGPT subscribers |

## Key Features

- **Agentic** — File editing, terminal commands
- **Multi-file** — Understands project structure
- **Sandbox Mode** — Isolated execution
- **ChatGPT Integration** — Works with existing subscription

## Installation

```bash
npm install -g @openai/codex
```

## Pricing

| Option | Cost |
|--------|------|
| Codex CLI | Free (open source) |
| API | OpenAI rates or ChatGPT subscription |

Works with:
- ChatGPT Plus/Pro/Business/Enterprise
- OpenAI API directly

## Privacy

| Setting | Value |
|---------|-------|
| Open Source | Yes (client) |
| Training | OpenAI terms |
| Jurisdiction | US (OpenAI) |

## Models Available

- GPT-5.2
- Codex 5 (400k context, code-optimized)

## Getting Started

```bash
# With API key
export OPENAI_API_KEY=sk-...
codex

# Or authenticate with ChatGPT
codex auth
```

## Sandbox Mode

Codex CLI includes a sandbox for safer execution:

```bash
# Run with sandboxed terminal
codex --sandbox

# Sandbox restricts:
# - Network access (configurable)
# - File system access (project only)
# - Process execution (limited)
```

## Key Commands

| Command | Action |
|---------|--------|
| `/help` | Show commands |
| `/clear` | Reset context |
| `/sandbox` | Toggle sandbox mode |
| `/model <name>` | Switch model |

## SWE-bench Performance

Codex CLI with Codex 5 achieves 74.9% on SWE-bench verified, one of the highest scores for agentic coding.

| Model | SWE-bench |
|-------|-----------|
| Codex 5 | 74.9% |
| GPT-5.2 | 72.1% |

## Tips

- Use Codex 5 for coding tasks (optimized)
- Enable sandbox for untrusted projects
- ChatGPT subscription works — no separate API key needed
