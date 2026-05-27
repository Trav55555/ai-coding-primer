---
title: Continue.dev
description: Open source AI extension for VS Code and JetBrains.
sidebar:
  order: 1
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: exact feature support, pricing, quotas, privacy terms, and enterprise controls. Verify live vendor docs before choosing or standardizing on this reference.
:::


[Continue.dev](https://continue.dev) is an open source extension that adds AI to your existing editor.

## Overview

| | |
|---|---|
| **Type** | Extension |
| **Platforms** | VS Code, JetBrains |
| **Open Source** | Yes (Apache 2.0) |
| **Best For** | Local models, existing editor |

## Key Features

- **Tab Completions** — Inline suggestions
- **Chat** — Conversational coding
- **Local Model Support** — Ollama, LM Studio
- **Local Model Option** — Keep model inference on your own machine or infrastructure
- **BYOK** — Any OpenAI-compatible endpoint

## Access Model

Continue.dev is open source. You can run it with your own provider keys or pair it with a local model stack, which makes it one of the clearest choices for teams that want explicit infrastructure control.

## Privacy

Continue can be configured for local-model workflows, which gives teams a clearer boundary than hosted tools.

Verify telemetry, extension settings, model endpoints, and any connected cloud services before treating a setup as fully local.

## Model Options

**Local (Ollama):**
- DeepSeek V3.2
- Qwen3 Coder 32B
- Llama 4

**Cloud (BYOK):**
- Any OpenAI-compatible API
- Anthropic, OpenAI, Google, xAI, etc.

## Getting Started

1. Install from VS Code marketplace or JetBrains
2. Install [Ollama](https://ollama.com) for local models
3. Run `ollama pull deepseek-coder-v2` or similar
4. Configure Continue to use local model

## Local Setup

Install Ollama or another local model runtime using its official installation instructions.

Then pull a coding model and configure Continue to use your local endpoint, such as `localhost:11434` for Ollama.

## Tips

- Use `Cmd+L` to open chat
- Local models require 8GB+ VRAM (24GB+ for best results)
- Combine with cloud models for complex tasks
