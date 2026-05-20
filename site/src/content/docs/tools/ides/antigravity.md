---
title: Antigravity
description: Google's preview agentic IDE with Gemini integration.
sidebar:
  order: 4
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: exact feature support, pricing, quotas, privacy terms, and enterprise controls. Verify live vendor docs before choosing or standardizing on this reference.
:::


[Antigravity](https://antigravity.google) is Google's preview VS Code fork with deep Gemini integration.

## Overview

| | |
|---|---|
| **Type** | IDE (VS Code fork) |
| **Open Source** | No |
| **Best For** | Gemini-native workflows, visual/UI work |

## Key Features

- **Agent Manager** — Orchestrates multiple agents
- **Browser Automation** — Built-in Playwright-like control
- **Terminal Control** — Full shell access
- **Artifacts System** — Previews, diagrams, prototypes
- **Gemini Native** — Optimized for Gemini models

## Access Model

Antigravity is a preview product. Access details and plan structure may change quickly, so focus on whether the workflow fits rather than assuming the current launch posture will persist.

:::note[Preview Status]
Antigravity is in public preview (launched Nov 2025). Product and policy details may still change.
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
Gemini 3 Pro offers large context (up to 1M tokens, though practical limits are lower) and excels at visual/UI work.
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

- Use Gemini 3 Pro for larger context needs
- Enable Secure Mode for cloned/untrusted repos
- Leverage artifacts for UI prototyping
- Good fit when you want to experiment with Gemini-native agent workflows
