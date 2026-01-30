---
title: Pricing Guide
description: API pricing for AI models used in coding.
sidebar:
  order: 3
---

Pricing per million tokens, updated January 2026.

## Quick Comparison

| Model | Input | Output | Speed |
|-------|-------|--------|-------|
| **Claude Opus 4.5** | $5.00 | $25.00 | 45 tok/s |
| **Grok 4.1** | $3.00 | $15.00 | 120 tok/s |
| **Claude Sonnet 4.5** | $3.00 | $15.00 | 80 tok/s |
| **Gemini 3 Pro** | $2.00 | $12.00 | 85 tok/s |
| **GPT-5.2** | $1.75 | $14.00 | 101 tok/s |
| **Codex 5** | $1.25 | $10.00 | 90 tok/s |
| **Gemini 3 Flash** | $0.50 | $3.00 | 200 tok/s |
| **DeepSeek V3.2** | $0.27 | $1.10 | 60 tok/s |

## Cost Tiers

### Budget (< $3/M output)
- DeepSeek V3.2: $1.10/M output
- Gemini 3 Flash: $3.00/M output

### Balanced ($3-15/M output)
- Codex 5: $10.00/M output
- Gemini 3 Pro: $12.00/M output
- GPT-5.2: $14.00/M output
- Claude Sonnet 4.5: $15.00/M output
- Grok 4.1: $15.00/M output

### Premium (> $15/M output)
- Claude Opus 4.5: $25.00/M output

## Real-World Costs

Typical coding session costs:

| Activity | Tokens | Model | Cost |
|----------|--------|-------|------|
| Small refactor | ~10k | Claude Sonnet 4.5 | ~$0.15 |
| Feature implementation | ~50k | Claude Sonnet 4.5 | ~$0.75 |
| Large exploration | ~200k | Claude Sonnet 4.5 | ~$3.00 |

## Caching

Prompt caching reduces costs for repeated context:

| Model | Cached Input Price |
|-------|-------------------|
| Claude Sonnet 4.5 | $0.30 (90% off) |
| GPT-5.2 | $0.175 (90% off) |
| Gemini 3 Pro | $0.50 (75% off) |
| DeepSeek V3.2 | $0.028 (90% off) |

## Subscription vs API

| Tool | Subscription | API (BYOK) |
|------|--------------|------------|
| Cursor Pro | $20/mo flat | Variable |
| Claude Max | $100/mo flat | Variable |
| Zed Pro | $10/mo + $5 credits | Your API costs |

**Rule of thumb**: If you use < $50/mo in API, BYOK is cheaper. Heavy users benefit from subscriptions.

## Pricing Trackers

- [OpenRouter Models](https://openrouter.ai/models) — Side-by-side
- [LLM PriceCheck](https://llmpricecheck.com) — Calculator
- [Artificial Analysis](https://artificialanalysis.ai) — Trends

## Sources

Official pricing pages:

| Provider | Link |
|----------|------|
| Anthropic (Claude) | [anthropic.com/pricing](https://www.anthropic.com/pricing) |
| OpenAI (GPT, Codex) | [openai.com/api/pricing](https://openai.com/api/pricing) |
| Google (Gemini) | [ai.google.dev/pricing](https://ai.google.dev/pricing) |
| DeepSeek | [platform.deepseek.com](https://platform.deepseek.com) |
| xAI (Grok) | [x.ai/api](https://x.ai/api) |

*Prices change frequently. Verify on official sites before committing to a model.*

*Last verified: January 2026*
