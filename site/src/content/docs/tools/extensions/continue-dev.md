---
title: Continue.dev
description: Open source AI extension for VS Code and JetBrains.
sidebar:
  order: 1
---

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
- **100% Local Option** — No data leaves your machine
- **BYOK** — Any OpenAI-compatible endpoint

## Pricing

**Free** — Full features with your own keys or local models.

## Privacy

| Setting | Value |
|---------|-------|
| Local Mode | 100% local possible |
| Training | Never |
| Retention | None |
| Jurisdiction | None (local) |

This is the **most private option** — nothing leaves your machine.

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

## 100% Local Setup

```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Pull a coding model
ollama pull qwen3-coder:32b

# Configure Continue to use localhost:11434
```

## Tips

- Use `Cmd+L` to open chat
- Local models require 8GB+ VRAM (24GB+ for best results)
- Combine with cloud models for complex tasks
