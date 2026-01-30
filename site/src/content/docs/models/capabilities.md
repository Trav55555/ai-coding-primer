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
| **Codex 5.2** | TBD | Early reports of strong agentic performance |
| **Gemini 3 Flash** | 78.0% | Speed + quality |
| **Claude Sonnet 4.5** | 77.0% | Agentic coding, balanced |
| **Gemini 3 Pro** | 76.2% | Long context |
| **Grok 4.1** | 72.0% | 2M context |
| **DeepSeek V3.2** | 68.0% | Budget coding |
| **Qwen3 Coder 32B** | 58.0% | Local/private |

**SWE-bench**: Real GitHub issue resolution (higher = better)  
**Aider Polyglot**: Multi-language code editing benchmark

:::tip[Watch: Codex 5.2]
Early reports from developers suggest Codex 5.2 delivers strong agentic coding performance. Official benchmarks pending, but worth testing if you have OpenAI API access.
:::

## Context Windows

| Model | Advertised | Practical Limit | Notes |
|-------|------------|-----------------|-------|
| Grok 4.1 | 2M tokens | ~500k reliable | Quality degrades at scale |
| Gemini 3 Pro/Flash | 1M tokens | ~200k reliable | 128k default on free tier |
| Codex 5 | 400k tokens | ~300k reliable | |
| GPT-5.2 | 256k tokens | ~150k reliable | |
| Claude Sonnet 4.5 | 200k tokens | ~80k reliable | 40% rule applies |
| DeepSeek V3.2 | 128k tokens | ~80k reliable | |

:::note[Context Reality]
Advertised context ≠ practical context. Models can technically accept large inputs, but retrieval quality and coherence degrade well before the limit. The "40% rule" suggests staying under 40% of the window for reliable results.
:::

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

## Recommendations

| Use Case | Best Model | Why |
|----------|------------|-----|
| **Agentic coding** | Claude Sonnet 4.5 | Best at multi-step, tool use |
| **Complex architecture** | Claude Opus 4.5 | Deepest reasoning |
| **Visual/UI tasks** | Gemini 3 Pro | Best multimodal, image understanding |
| **Fast completions** | Gemini 3 Flash | Speed + quality |
| **Large context** | Grok 4.1, Gemini 3 Pro | Larger projects (with caveats) |
| **Code-optimized** | Codex 5 | Built for code, 400k context |
| **Budget** | DeepSeek V3.2 | 90% quality at 10% cost |
| **Local/private** | Qwen3 Coder 32B | Best open-weights coding |

## Learn More

- [Benchmarks That Matter](/ai-coding-primer/models/benchmarks/) — What each benchmark tests and why
- [Selection Guide](/ai-coding-primer/models/selection-guide/) — How to choose the right model

*Last verified: January 2026*
