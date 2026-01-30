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
| **$0** | Continue.dev + Ollama (local) |
| **$10-20** | Zed Pro or Cursor Pro |
| **$20-50** | Claude API (BYOK) |
| **$50-100** | Mix models by task |
| **$100+** | Claude Max or Cursor Ultra |

## Decision Tree

```
Need best quality?
├── Yes → Claude Opus 4.5 (80.9% SWE-bench)
└── No, need speed?
    ├── Yes → Gemini 3 Flash (200 tok/s)
    └── No, need long context?
        ├── Yes → Grok 4.1 (2M advertised, ~500k practical)
        └── No, need budget?
            ├── Yes → DeepSeek V3.2 ($0.27/M input)
            └── No, need local/private?
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

**Top tier (Jan 2026):** Codex 5.2 and Claude Opus 4.5 are the current leaders for complex development tasks.

**Best starting point:** Claude Sonnet 4.5 (via Cursor, Zed, or Claude Code) — best balance of quality, speed, and cost.

Once you understand your usage patterns, optimize:
- Upgrade to Codex 5.2 or Opus 4.5 for complex agentic work
- Add Gemini 3 Flash for fast completions
- Switch to DeepSeek V3.2 for budget tasks
- Use Qwen3 Coder 32B for sensitive/local code

## Sources

| Benchmark | What It Measures | Link |
|-----------|------------------|------|
| **SWE-bench** | Real GitHub issue resolution | [swebench.com](https://swebench.com) |
| **Aider Polyglot** | Multi-language code editing | [aider.chat/docs/leaderboards](https://aider.chat/docs/leaderboards/) |
| **Artificial Analysis** | Speed, price, quality | [artificialanalysis.ai](https://artificialanalysis.ai) |
| **LLM Stats** | Aggregated benchmarks | [llm-stats.com](https://llm-stats.com) |

*Last verified: January 2026*
