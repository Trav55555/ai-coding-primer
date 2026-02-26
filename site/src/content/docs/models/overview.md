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
| Claude Opus 4.6 | Anthropic | Best agentic, complex tasks |
| Claude Sonnet 4.6 | Anthropic | Best coding quality/speed |
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
| Claude Sonnet 4.6 | Anthropic | AWS Bedrock, Google Vertex |
| GPT-5.2 | OpenAI | Azure OpenAI |
| Llama 4 | Meta (weights only) | AWS Bedrock, Azure, Together AI |
| Mistral Large | Mistral | AWS Bedrock, Azure, Google Vertex |

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

## Aggregators & Cloud Platforms

| Platform | Type | Models | Why Use It |
|----------|------|--------|------------|
| **OpenRouter** | Aggregator | 200+ | One key for all models, fallback routing |
| **Together AI** | Aggregator | 100+ | Open models, fine-tuning |
| **AWS Bedrock** | Cloud | Claude, Llama, Mistral | Enterprise, VPC integration |
| **Azure OpenAI** | Cloud | GPT, DALL-E | EU regions, compliance |
| **Google Vertex** | Cloud | Gemini, Claude | GCP integration |

## Open Weight Models

"Open weight" means the model weights are publicly available — you can download and run them yourself. This is different from open source (weights + training code + data).

| Model | Params | Why It Matters |
|-------|--------|----------------|
| **Llama 4** | 405B | Meta's flagship, runs locally or hosted |
| **DeepSeek V3.2** | 671B MoE | Best quality/cost ratio |
| **Qwen 3** | 235B | Strong multilingual, tool use |
| **Kimi K2.5** | 1T MoE | Moonshot's flagship, massive scale |
| **GLM 4.7** | 320B | Zhipu's latest, strong reasoning |
| **Mistral Large** | 123B | EU-based, good reasoning |

### Why Care?

**Self-hosting**: Run on your own hardware. Zero data leaves your network. No API costs after hardware.

**No vendor lock-in**: Switch providers freely. Model weights are yours.

**Fine-tuning**: Train on your codebase for domain-specific improvements.

**Offline**: Works without internet. Air-gapped environments.

### The Tradeoff

Open weight models lag ~6-12 months behind frontier closed models (Claude, GPT). For most coding tasks, this gap is negligible. For cutting-edge agentic workflows, closed models still lead.

### Running Locally

| Tool | What It Does |
|------|--------------|
| [Ollama](https://ollama.com) | One-command local inference |
| [LM Studio](https://lmstudio.ai) | GUI for local models |
| [vLLM](https://github.com/vllm-project/vllm) | Production-grade serving |

Pair with [Continue.dev](https://continue.dev) for a fully local AI coding setup. Note: "free" local models require capable hardware (16GB+ RAM, GPU with 8GB+ VRAM recommended).

## Next Steps

- [Capabilities Matrix](/ai-coding-primer/models/capabilities/) — compare what models can do
- [Pricing Guide](/ai-coding-primer/models/pricing/) — cost comparison
