---
title: Cody (Sourcegraph)
description: AI coding assistant with enterprise code search.
sidebar:
  order: 6
---

[Cody](https://sourcegraph.com/cody) is Sourcegraph's AI coding assistant, built on their code intelligence platform.

## Overview

| | |
|---|---|
| **Type** | Extension |
| **Open Source** | Partially (client) |
| **Best For** | Large codebases, enterprise code search |

## Key Features

- **Code Graph** — Deep understanding of code relationships
- **Multi-Repo** — Search across all your repositories
- **Context Selection** — Manual + automatic context
- **Multiple Models** — Claude, GPT, Gemini, local
- **Self-Hosted** — Sourcegraph Enterprise

## Pricing

| Plan | Price | Notes |
|------|-------|-------|
| Free | $0 | Limited usage |
| Enterprise Search | $49/user/mo | Public Sourcegraph pricing emphasis |
| Enterprise | Custom | Self-hosted, SSO, audit |

Sourcegraph's public pricing is enterprise-led. A simple standalone "Cody Pro" table is not clearly published as of Feb 25, 2026.

## Privacy

| Setting | Value |
|---------|-------|
| Training | Never on your code |
| Self-Hosted | Full Sourcegraph Enterprise |
| BYOK | Supported (Pro+) |
| Jurisdiction | Your choice with self-hosted |

## Models

Choose your model:
- Claude Sonnet 4.5 / Opus 4.5
- GPT-5.2
- Gemini 3 Pro
- Ollama (local models)
- Custom (Enterprise)

## Installation

**VS Code:**
```
Extensions → Search "Cody"
Install → Sign in with Sourcegraph
```

**JetBrains:**
```
Settings → Plugins → Marketplace → Cody
```

## Code Graph Intelligence

Cody leverages Sourcegraph's code intelligence:

```
You: "How is authentication handled?"

Cody (with Code Graph):
1. Finds auth-related symbols across repos
2. Traces function call paths
3. Identifies configuration files
4. Shows related tests

vs. Basic RAG:
1. Keyword search for "auth"
2. Returns potentially unrelated files
```

## Context Control

Manually control what Cody sees:

```
@file:src/auth/login.ts
@repo:backend-api
@symbol:AuthService

How does login validation work?
```

## Multi-Repository Search

For enterprise codebases:

```
You: "Find all usages of the PaymentService across our microservices"

Cody:
→ Searches all connected repositories
→ Shows usage patterns
→ Identifies inconsistencies
→ Suggests refactoring
```

## Self-Hosted Setup

Sourcegraph Enterprise includes Cody:

```bash
# Docker deployment
docker run -d \
  --name sourcegraph \
  -p 7080:7080 \
  sourcegraph/server:latest
```

## Tips

- Best value when you already use Sourcegraph
- Code Graph makes context selection much smarter
- BYOK option for data-sensitive organizations
- Multi-repo search is unique advantage
