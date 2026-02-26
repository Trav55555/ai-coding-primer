---
title: Zed
description: Fast, open source editor with AI.
sidebar:
  order: 2
---

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

## Pricing

| Plan | Price | Notes |
|------|-------|-------|
| Personal | **$0 forever** | No hosted AI, 2,000 accepted edit predictions |
| Pro | $10/mo | Unlimited predictions, $5 tokens included |
| Enterprise | Contact | SSO, analytics |

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
