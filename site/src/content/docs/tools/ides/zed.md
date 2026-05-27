---
title: Zed
description: Fast, open source editor with AI.
sidebar:
  order: 2
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: exact feature support, pricing, quotas, privacy terms, and enterprise controls. Verify live vendor docs before choosing or standardizing on this reference.
:::


[Zed](https://zed.dev) is a Rust-based, GPU-accelerated editor with built-in AI.

## Overview

| | |
|---|---|
| **Type** | IDE (native Rust) |
| **Open Source** | Yes (GPL-3.0) |
| **Best For** | Speed, open source, BYOK |

## Key Features

- **Agent Panel** — Agentic coding
- **Edit Prediction** — Zeta model for completions
- **ACP/MCP Support** — External tool integration
- **Multiplayer** — Real-time collaboration
- **BYOK** — Bring your own API keys

## Access Model

Zed supports both hosted AI and BYOK workflows. That makes it useful for developers who want a native editor today without locking themselves into one provider model later.

## Privacy

| Setting | Value |
|---------|-------|
| Privacy Mode | Opt-in telemetry |
| Training | Never (with BYOK) |
| Retention | None (with BYOK) |
| Jurisdiction | US (mitigated by BYOK) |

## Models Available

**Hosted:**
- Claude Sonnet 4.5 / Opus 4.5
- GPT-5.2
- Gemini 3 Pro
- Grok 4.1

**BYOK / Local:**
- Ollama (Qwen3 Coder, DeepSeek V3.2)
- LM Studio
- Any OpenAI-compatible endpoint

## Getting Started

1. Download from [zed.dev](https://zed.dev)
2. Sign in (optional, required for hosted AI)
3. Configure BYOK in settings if using own keys
4. Create `AGENTS.md` in your project root

## Tips

- Use `Cmd+Shift+A` for Agent Panel
- BYOK gives you full privacy control
- Open source = auditable client code
