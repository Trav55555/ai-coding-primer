---
title: Tabnine
description: AI code completion with self-hosted enterprise option.
sidebar:
  order: 4
---

[Tabnine](https://www.tabnine.com/) is an AI code completion tool with strong privacy options including full self-hosting.

## Overview

| | |
|---|---|
| **Type** | Extension |
| **Open Source** | No (self-hosted option) |
| **Best For** | Privacy-focused teams, air-gapped environments |

## Key Features

- **Self-Hosted** — Run entirely on your infrastructure
- **Personalized Models** — Learns your codebase patterns
- **Multi-IDE** — VS Code, JetBrains, Vim, Emacs, more
- **Whole-Line Completion** — Context-aware suggestions
- **Chat** — Conversational coding assistance

## Pricing

| Plan | Price | Notes |
|------|-------|-------|
| Basic | Free | Limited completions |
| Pro | $12/user/mo | Full features, cloud |
| Enterprise | Custom | Self-hosted, SSO, audit |

## Privacy

| Setting | Value |
|---------|-------|
| Training | Only on your code (opt-in) |
| Self-Hosted | Full on-prem option |
| Air-Gapped | Supported |
| Jurisdiction | Your infrastructure |

:::tip[Maximum Privacy]
Tabnine Enterprise can run completely on your infrastructure with no external network calls. Ideal for regulated industries.
:::

## Models

- Tabnine proprietary models
- Custom models trained on your codebase (Enterprise)
- Protected model (never trained on public code)

## Installation

**VS Code:**
```
Extensions → Search "Tabnine"
Install → Create account or connect to enterprise server
```

**JetBrains:**
```
Settings → Plugins → Marketplace → Tabnine
```

## Self-Hosted Deployment

For Enterprise customers:

```yaml
# Docker deployment
docker run -d \
  --name tabnine-server \
  -p 8080:8080 \
  -v /path/to/models:/models \
  tabnine/enterprise:latest
```

Supports:
- Docker / Kubernetes
- AWS / Azure / GCP
- Air-gapped networks
- Custom model training

## Personalization

Tabnine learns from your codebase:

1. **Team Patterns** — Suggests code matching team style
2. **Project Context** — Understands your architecture
3. **Private Training** — Models stay on your servers

## Tips

- Enable "Team Learning" for consistent suggestions
- Self-hosted is ~80-90% quality of cloud models
- Use for air-gapped/regulated environments
- Works well alongside other AI tools
