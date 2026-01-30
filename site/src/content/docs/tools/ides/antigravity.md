---
title: Antigravity
description: Google's free agentic IDE with Gemini integration.
sidebar:
  order: 4
---

[Antigravity](https://antigravity.google) is Google's free VS Code fork with deep Gemini integration.

## Overview

| | |
|---|---|
| **Type** | IDE (VS Code fork) |
| **Open Source** | No |
| **Best For** | Free tier, Gemini models, visual/UI work |

## Key Features

- **Agent Manager** — Orchestrates multiple agents
- **Browser Automation** — Built-in Playwright-like control
- **Terminal Control** — Full shell access
- **Artifacts System** — Previews, diagrams, prototypes
- **Gemini Native** — Optimized for Gemini models

## Pricing

| Plan | Price | Notes |
|------|-------|-------|
| Free | $0 | Full features (preview) |
| Pro | TBD | Coming 2026 |

:::note[Preview Status]
Antigravity is in public preview (launched Nov 2025). Pricing may change.
:::

## Privacy

| Setting | Value |
|---------|-------|
| Privacy Mode | Yes (GCP terms) |
| Training | GCP data policies |
| Jurisdiction | US |

## Models Available

- Gemini 3 Pro (default)
- Gemini 3 Flash
- Gemini Deep Think
- Claude Sonnet 4.5 / Opus 4.5
- GPT-OSS-120B (open-source variant)

:::tip[Gemini Advantage]
Gemini 3 Pro has 1M token context and excels at visual/UI work. Free tier includes generous Gemini access.
:::

## Getting Started

1. Download from [antigravity.google](https://antigravity.google)
2. Sign in with Google account
3. Grant agent permissions (review carefully)
4. Start with simple tasks to learn agent behavior

## Agent Manager

Antigravity can run multiple agents in parallel:

```
You: "Research auth patterns AND build the login UI"
Agent Manager:
├── Agent 1: Researching auth patterns...
└── Agent 2: Building login component...
```

## Security Warning

:::caution[Permission Model]
Agents get real write/execute permissions. Use Secure Mode for untrusted projects. Review agent actions before approving.
:::

## Tips

- Use Gemini 3 Pro for large codebase understanding (1M context)
- Enable Secure Mode for cloned/untrusted repos
- Leverage artifacts for UI prototyping
- Free tier is generous — good for learning
