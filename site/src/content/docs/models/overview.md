---
title: Models vs Providers
description: Understanding the difference between AI models and API providers.
sidebar:
  order: 1
---

**Models** determine capability — how smart the AI is, how fast it responds, what it can do.

**Providers** determine terms — pricing, privacy policy, legal jurisdiction, availability.

## Models

Models are the AI systems themselves:

| Model | Maker | Strength |
|-------|-------|----------|
| Claude Opus 4.5 | Anthropic | Best agentic, complex tasks |
| Claude Sonnet 4.5 | Anthropic | Best coding quality/speed |
| GPT-5.2 | OpenAI | General capability |
| Gemini 3 Pro | Google | Long context (1M), best for visual/UI |
| Grok 4.1 | xAI | Longest context (2M tokens) |
| DeepSeek V3.2 | DeepSeek | Best value |

:::tip[Visual/UI Tasks]
**Gemini 3 Pro** excels at understanding screenshots, mockups, and design files. Use it for implementing UI from designs, debugging visual issues, or working with component libraries.
:::

## Providers

The same model can be available through multiple providers:

| Model | Direct Provider | Also Available Via |
|-------|-----------------|-------------------|
| Claude Sonnet 4.5 | Anthropic | AWS Bedrock, Google Vertex |
| GPT-5.2 | OpenAI | Azure OpenAI |
| Gemini 3 Pro | Google | Vertex AI |

## Why This Matters

### For Privacy
Different providers have different data policies:
- Anthropic direct: US jurisdiction, 30-day retention
- AWS Bedrock: Your AWS account, your retention settings

### For Enterprise
- Azure OpenAI: EU data residency available
- AWS Bedrock: Private endpoints, VPC integration

### For Cost
- Direct providers: Standard pricing
- Aggregators like OpenRouter: Sometimes cheaper, fallback routing

## Aggregators

One API key for multiple providers:

| Aggregator | Models | Why Use It |
|------------|--------|------------|
| **OpenRouter** | 200+ | Compare easily, fallback routing |
| **AWS Bedrock** | Claude, Llama, Mistral | Enterprise, private endpoints |
| **Azure OpenAI** | GPT, DALL-E | EU regions, compliance |

## Next Steps

- [Capabilities Matrix](/ai-coding-primer/models/capabilities/) — compare what models can do
- [Pricing Guide](/ai-coding-primer/models/pricing/) — cost comparison
