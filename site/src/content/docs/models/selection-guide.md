---
title: Selection Guide
description: How to choose the right model for your task.
sidebar:
  order: 4
---

Quick guide to choosing the right model.

## By Task

| Task | Recommended | Why |
|------|-------------|-----|
| **Agentic coding** | Claude Sonnet 4.5 | Best at multi-step, tool use |
| **Complex architecture** | Claude Opus 4.5 | Deepest reasoning |
| **Visual/UI work** | Gemini 3 Pro | Best multimodal, understands screenshots/designs |
| **Quick completions** | Gemini 3 Flash | Fast, good quality |
| **Complex debugging** | Claude Opus 4.5 | Deep reasoning |
| **Large codebase** | Grok 4.1, Gemini 3 Pro | 2M/1M context |
| **Code-optimized** | Codex 5 | Built for code, 400k context |
| **Budget projects** | DeepSeek V3.2 | Best value |
| **Privacy/local** | Qwen3 Coder 32B | Best open weights |

## By Budget

| Monthly Budget | Recommendation |
|----------------|----------------|
| **$0** | Continue.dev + Ollama (local) |
| **$10-20** | Zed Pro or Cursor Pro |
| **$20-50** | Claude API (BYOK) |
| **$50-100** | Mix models by task |
| **$100+** | Claude Max or Cursor Ultra |

## Decision Tree

```
Need best quality?
├── Yes → Claude Opus 4.5 (complex) or GPT-5.2 (general)
└── No, need speed?
    ├── Yes → Gemini 3 Flash
    └── No, need long context?
        ├── Yes → Grok 4.1 (2M) or Gemini 3 Pro (1M)
        └── No, need budget?
            ├── Yes → DeepSeek V3.2
            └── No, need local?
                └── Yes → Qwen3 Coder 32B + Ollama
```

## Model Combinations

Many developers use multiple models:

| Model | Use For |
|-------|---------|
| Claude Sonnet 4.5 | Complex changes, architecture |
| Gemini 3 Flash | Tab completions, quick edits |
| DeepSeek V3.2 | Budget tasks, exploration |

This optimizes cost while maintaining quality where it matters.

## Switching Costs

Most tools support multiple models. Easy to switch:

- Cursor: Settings → Models
- Zed: Settings → AI
- Continue.dev: `.continue/config.json`
- Claude Code: N/A (Claude only)
- Aider: `--model` flag

## Recommendation

**Start with Claude Sonnet 4.5** (via Cursor, Zed, or Claude Code).

It's the best all-around coding model. Once you understand your usage patterns, optimize:
- Add a fast model for completions (Gemini 3 Flash)
- Switch to budget model for non-critical work (DeepSeek V3.2)
- Use local models for sensitive code (Qwen3 Coder 32B)
