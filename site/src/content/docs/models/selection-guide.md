---
title: Selection Guide
description: How to choose the right model for your task.
sidebar:
  order: 4
---

Quick guide to choosing the right model. Data from SWE-bench, Aider Polyglot, and Artificial Analysis (January 2026).

## By Task

| Task | Recommended | Why | Source |
|------|-------------|-----|--------|
| **Agentic coding** | Codex 5.2, Opus 4.5 | Current top performers for dev tasks | [OpenAI](https://openai.com), [Anthropic](https://anthropic.com) |
| **Complex architecture** | Claude Opus 4.5 | 80.9% SWE-bench, deepest reasoning | [SWE-bench](https://swebench.com) |
| **Visual/UI work** | Gemini 3 Pro | Best multimodal, screenshot understanding | [Google AI](https://ai.google.dev) |
| **Quick completions** | Gemini 3 Flash | 200 tok/s, 78% SWE-bench | [Artificial Analysis](https://artificialanalysis.ai) |
| **Complex debugging** | Claude Opus 4.5 | Extended thinking, deep analysis | [Anthropic](https://anthropic.com) |
| **Large codebase** | Grok 4.1 | 2M context (practical ~500k) | [xAI](https://x.ai) |
| **Code-optimized** | Codex 5 | 78% SWE-bench, 400k context | [OpenAI](https://openai.com) |
| **Budget projects** | DeepSeek V3.2 | 73% SWE-bench at $0.27/$1.10 per M | [DeepSeek](https://deepseek.com) |
| **Privacy/local** | Qwen3 Coder 32B | Best open weights for consumer GPUs | [Qwen](https://github.com/QwenLM) |

## By Budget

| Monthly Budget | Recommendation |
|----------------|----------------|
| **$0** | Gemini CLI free tier or Cursor free tier |
| **$10-20** | Zed Pro or Cursor Pro |
| **$20-50** | OpenRouter BYOK (mix models by task) |
| **$50-100** | Native APIs (OpenAI, Anthropic) + fast model |
| **$100+** | Cursor Business or Claude Max |

:::tip[BYOK Users]
[OpenRouter](https://openrouter.ai) gives you one API key for 200+ models. Great for experimenting and mixing models without managing multiple accounts.
:::

## Decision Tree

```
What matters most?
│
├─► Quality (hard problems, complex refactors)
│   ├─► Budget okay → Codex 5.2 or Claude Opus 4.5
│   └─► Cost-conscious → Claude Sonnet 4.5 or GPT-5.2
│
├─► Speed (completions, quick iterations)
│   └─► Gemini 3 Flash or Claude 4.5 Haiku
│
├─► Cost (minimize spend)
│   ├─► Good quality → DeepSeek V3.2 ($0.27/M)
│   └─► Free tier → Gemini CLI or Cursor free
│
├─► Context (huge codebases)
│   └─► Grok 4.1 (2M) or Gemini 3 Pro (1M)
│
├─► Privacy (no cloud)
│   └─► Qwen3 Coder 32B + Ollama
│
└─► "Just pick for me"
    └─► Claude Sonnet 4.5 or GPT-5.2 (best all-rounders)
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

## Model Tiers (Jan 2026)

### Heavy Hitters
For complex architecture, long agentic sessions, and hard problems.

| Model | SWE-bench | Price (in/out) | When to Use |
|-------|-----------|----------------|-------------|
| **Codex 5.2** | ~81% | $1.75/$14 | Complex agentic, multi-file refactors |
| **Claude Opus 4.5** | 80.9% | $5/$25 | Deep reasoning, architecture decisions |

### All-Rounders
Daily drivers for most development work.

| Model | SWE-bench | Price (in/out) | When to Use |
|-------|-----------|----------------|-------------|
| **GPT-5.2** | 80.0% | $1.75/$14 | Best value for general coding |
| **Claude Sonnet 4.5** | 77.2% | $3/$15 | Good balance, strong tool use |
| **Gemini 3 Pro** | 76.2% | $2/$12 | Large context, visual/UI work |

### Fast & Lightweight
Speed-critical tasks, completions, quick iterations.

| Model | Speed | Price (in/out) | When to Use |
|-------|-------|----------------|-------------|
| **Gemini 3 Flash** | 200 tok/s | $0.50/$3 | Tab completions, quick edits |
| **GLM 4.7 Flash** | 180 tok/s | $0.40/$2 | Fast + strong reasoning |
| **Claude 4.5 Haiku** | 150 tok/s | $1/$5 | Fast Claude, good quality |
| **MiniMax 2.1** | 160 tok/s | $0.30/$1.50 | Budget speed |

### Budget
Maximize value when cost is the primary constraint.

| Model | SWE-bench | Price (in/out) | When to Use |
|-------|-----------|----------------|-------------|
| **DeepSeek V3.2** | 73% | $0.27/$1.10 | Best quality per dollar |

### Local Models
For privacy, offline work, or air-gapped environments. Always an option, but most developers start with hosted APIs.

| Model | Size | Hardware Needed | When to Use |
|-------|------|-----------------|-------------|
| **Qwen3 Coder 32B** | 32B | 24GB+ VRAM | Best local coding quality |
| **DeepSeek Coder V2** | 16B | 16GB+ VRAM | Good balance |
| **Qwen3 Coder 8B** | 8B | 8GB+ VRAM | Lighter hardware |

Run with [Ollama](https://ollama.com) or [LM Studio](https://lmstudio.ai). Pair with [Continue.dev](https://continue.dev) for IDE integration.

### How to Mix

Most developers use 2-3 models via OpenRouter or native provider APIs:
1. **Heavy hitter** for complex tasks (Codex 5.2 or Opus 4.5)
2. **All-rounder** as daily driver (GPT-5.2 or Sonnet 4.5)
3. **Fast model** for completions (Gemini Flash or Haiku)

Swap the all-rounder for **DeepSeek V3.2** if budget is tight — 73% SWE-bench at 1/10th the cost.

## Sources

| Benchmark | What It Measures | Link |
|-----------|------------------|------|
| **SWE-bench** | Real GitHub issue resolution | [swebench.com](https://swebench.com) |
| **Aider Polyglot** | Multi-language code editing | [aider.chat/docs/leaderboards](https://aider.chat/docs/leaderboards/) |
| **Artificial Analysis** | Speed, price, quality | [artificialanalysis.ai](https://artificialanalysis.ai) |
| **LLM Stats** | Aggregated benchmarks | [llm-stats.com](https://llm-stats.com) |

*Last verified: January 2026*
