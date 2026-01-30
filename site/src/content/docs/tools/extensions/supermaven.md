---
title: Supermaven
description: Ultra-fast AI code completion with 1M token context.
sidebar:
  order: 5
---

[Supermaven](https://supermaven.com/) is an AI code completion tool optimized for speed and large context.

## Overview

| | |
|---|---|
| **Type** | Extension |
| **Open Source** | No |
| **Best For** | Speed-focused developers, large codebases |

## Key Features

- **1M Token Context** — Entire codebase in memory
- **Ultra-Fast** — Sub-10ms latency
- **Inline Edits** — Multi-line completions
- **Chat** — Conversational assistance
- **Repository Understanding** — Deep codebase awareness

## Pricing

| Plan | Price | Notes |
|------|-------|-------|
| Free | $0 | Basic completions |
| Pro | $10/mo | Full features, 1M context |
| Team | $20/user/mo | Team management, SSO |

## Privacy

| Setting | Value |
|---------|-------|
| Training | OFF by default |
| Retention | Minimal (performance only) |
| Jurisdiction | US |

## Speed Comparison

| Tool | Latency |
|------|---------|
| **Supermaven** | ~5-10ms |
| Copilot | ~50-100ms |
| Cursor | ~100-200ms |

:::tip[Speed Advantage]
Supermaven's custom model architecture prioritizes latency. Feels like enhanced autocomplete, not AI generation.
:::

## Installation

**VS Code:**
```
Extensions → Search "Supermaven"
Install → Sign in
```

**Neovim:**
```lua
-- Using lazy.nvim
{ "supermaven-inc/supermaven-nvim" }
```

## 1M Token Context

Unlike tools that chunk and retrieve, Supermaven keeps your entire codebase in context:

```
Traditional: Search → Retrieve chunks → Generate
Supermaven:  Full codebase loaded → Instant generation
```

Benefits:
- No retrieval latency
- Better cross-file understanding
- More consistent suggestions

## Use Cases

### Speed-Critical Workflows

When latency matters:
- Rapid prototyping
- Live coding / streaming
- Pair programming

### Large Monorepos

When context matters:
- Enterprise codebases
- Microservice architectures
- Complex dependencies

## Tips

- Best for pure code completion (not chat-heavy workflows)
- Pairs well with agentic tools (use Supermaven for speed, Claude Code for complex tasks)
- Free tier is usable for evaluation
- Pro is excellent value at $10/mo
