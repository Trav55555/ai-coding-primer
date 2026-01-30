---
title: Capabilities Matrix
description: Comparing AI model capabilities for coding.
sidebar:
  order: 2
---

Model capabilities for coding tasks, updated January 2026.

## Coding Benchmarks

| Model | SWE-bench | Best For |
|-------|-----------|----------|
| **Claude Opus 4.5** | 80.9% | Complex agentic, architecture |
| **GPT-5.2** | 80.0% | General coding |
| **Codex 5** | 78.0% | Code-optimized tasks |
| **Gemini 3 Flash** | 78.0% | Speed + quality |
| **Claude Sonnet 4.5** | 77.0% | Agentic coding, balanced |
| **Gemini 3 Pro** | 76.2% | Long context |
| **Grok 4.1** | 72.0% | 2M context |
| **o3** | 71.7% | Complex reasoning |
| **DeepSeek V3.2** | 68.0% | Budget coding |
| **Qwen3 Coder 32B** | 58.0% | Local/private |

**SWE-bench**: Real GitHub issue resolution (higher = better)  
**Aider Polyglot**: Multi-language code editing benchmark

## Context Windows

| Model | Context | Practical Use |
|-------|---------|---------------|
| Grok 4.1 | 2M tokens | Entire codebase |
| Gemini 3 Pro/Flash | 1M tokens | Large projects |
| Codex 5 | 400k tokens | ~130 files |
| GPT-5.2 | 256k tokens | ~80 files |
| Claude Sonnet 4.5 | 200k tokens | ~65 files |
| DeepSeek V3.2 | 128k tokens | ~40 files |

## Speed

| Model | Tokens/sec | Latency Feel |
|-------|------------|--------------|
| Gemini 3 Flash | 200 | Instant |
| Grok 4.1 | 120 | Fast |
| GPT-5.2 | 101 | Fast |
| Codex 5 | 90 | Fast |
| Claude Sonnet 4.5 | 80 | Fast |
| DeepSeek V3.2 | 60 | Moderate |
| Claude Opus 4.5 | 45 | Moderate |
| o3 | 30 | Slow (thinking) |

## Recommendations

| Use Case | Best Model | Why |
|----------|------------|-----|
| **Agentic coding** | Claude Sonnet 4.5 | Best at multi-step, tool use |
| **Complex architecture** | Claude Opus 4.5 | Deepest reasoning |
| **Complex reasoning** | o3 | Deep thinking for hard problems |
| **Visual/UI tasks** | Gemini 3 Pro | Best multimodal, image understanding |
| **Fast completions** | Gemini 3 Flash | Speed + quality |
| **Long context** | Grok 4.1 (2M), Gemini 3 (1M) | Entire codebase |
| **Code-optimized** | Codex 5 | Built for code, 400k context |
| **Budget** | DeepSeek V3.2 | 90% quality at 10% cost |
| **Local/private** | Qwen3 Coder 32B | Best open-weights coding |

## Benchmark Resources

- [SWE-bench](https://swebench.com) — Real issue resolution
- [Aider Leaderboard](https://aider.chat/docs/leaderboards) — Code editing
- [Artificial Analysis](https://artificialanalysis.ai) — Speed, price, quality
- [Chatbot Arena](https://lmarena.ai) — Human preference

*Last verified: January 2026*
