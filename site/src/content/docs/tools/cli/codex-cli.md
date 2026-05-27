---
title: Codex CLI
description: OpenAI's open-source terminal agent.
sidebar:
  order: 5
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: exact feature support, pricing, quotas, privacy terms, and enterprise controls. Verify live vendor docs before choosing or standardizing on this reference.
:::


[Codex CLI](https://github.com/openai/codex) is OpenAI's open-source terminal coding agent.

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

## Access Model

The Codex CLI client is open source. Usage depends on your OpenAI account access, either through API usage or eligible ChatGPT plans.

Works with:
- ChatGPT account access
- OpenAI API directly

As of Feb 25, 2026, the `openai/codex` repository is active and regularly released.

## Privacy

| Setting | Value |
|---------|-------|
| Open Source | Yes (client) |
| Training | OpenAI terms |
| Jurisdiction | US (OpenAI) |

## Models Available

Model availability changes quickly. In practice, Codex CLI uses current GPT-5/Codex model families based on account access.

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

## Benchmark Signal

Codex CLI is designed around OpenAI's coding models and agent workflows.

For current SWE-bench or coding benchmark performance, check live leaderboards instead of relying on a static snapshot.

See [Benchmarks That Matter](/ai-coding-primer/models/benchmarks/) for how to interpret those scores.

## Tips

- Use Codex 5 for coding tasks (optimized)
- Enable sandbox for untrusted projects
- ChatGPT subscription works — no separate API key needed
