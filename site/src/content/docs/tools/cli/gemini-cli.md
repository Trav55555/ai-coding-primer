---
title: Gemini CLI
description: Google's free terminal agent with generous limits.
sidebar:
  order: 4
---

[Gemini CLI](https://github.com/google/gemini-cli) is Google's open-source terminal coding agent.

## Overview

| | |
|---|---|
| **Type** | CLI |
| **Open Source** | Yes |
| **Best For** | Free tier, large context, Google ecosystem |

## Key Features

- **Generous Free Tier** — 60 req/min, 1000 req/day
- **1M Context** — Gemini's massive context window
- **Agentic** — File editing, terminal commands
- **Google Integration** — Works with Google Cloud
- **Multimodal** — Image understanding

## Installation

```bash
npm install -g @google/gemini-cli
```

## Pricing

| Tier | Limits | Cost |
|------|--------|------|
| Free | 60 req/min, 1000/day | $0 |
| Paid | Higher limits | Gemini API rates |

:::tip[Free Tier]
The free tier is extremely generous for individual developers. No credit card required.
:::

## Privacy

| Setting | Value |
|---------|-------|
| Open Source | Yes (client) |
| Training | GCP terms apply |
| Jurisdiction | US (Google) |

## Models Available

- Gemini 3 Pro (1M context)
- Gemini 3 Flash (fast, cheap)
- Gemini Deep Think (reasoning)

## Getting Started

```bash
# Authenticate with Google
gemini auth login

# Or use API key
export GOOGLE_API_KEY=...

# Start in your project
cd your-project
gemini
```

## Key Commands

| Command | Action |
|---------|--------|
| `/help` | Show commands |
| `/clear` | Reset context |
| `/model <name>` | Switch model |
| `/image <path>` | Add image to context |

## Use Cases

### Large Codebase Analysis

Gemini's 1M context window makes it ideal for understanding large codebases:

```
gemini "Analyze this entire codebase and explain the architecture"
```

### Visual/UI Work

Gemini excels at visual tasks:

```
gemini /image screenshot.png "Improve the UI of this page"
```

### Multimodal Debugging

```
gemini /image error-screenshot.png "What's causing this error?"
```

## Tips

- Use Gemini 3 Pro for large codebase understanding
- Use Gemini Flash for quick, cheap iterations
- Leverage multimodal for UI/visual tasks
- Free tier is enough for most individual use
