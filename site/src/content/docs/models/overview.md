---
title: Models vs Providers
description: Understanding the difference between AI models and API providers.
sidebar:
  order: 1
---

**Models** determine capability — how smart the AI is, how fast it responds, what it can do.

**Providers** determine operating constraints — privacy policy, legal jurisdiction, availability, and access model.

## Models

Models are the AI systems themselves. In practice, what matters most is the capability class, not memorizing a winner list.

| Model class | What it is best at |
|-------------|--------------------|
| frontier reasoning models | complex agentic work, debugging, and multi-file changes |
| strong general-purpose coding models | everyday implementation and review loops |
| multimodal models | screenshots, mockups, diagrams, and visual/UI work |
| long-context models | large investigations when context is still selective |
| hosted open-weight models | more control without going fully local |

:::tip[Visual/UI Tasks]
Use a strong multimodal model for screenshots, mockups, and design files. That is usually the right fit for implementing UI from designs, debugging visual issues, or working from component libraries.
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

### For Workflow
- Direct providers: best when you want the vendor's native tooling and latest releases
- Aggregators: useful when you want one key, fallback routing, or easy model switching
- Cloud platforms: useful when procurement, networking, or compliance requirements matter more than raw convenience

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
| **DeepSeek V3.2** | 671B MoE | Strong open-weight coding model |
| **Qwen 3** | 235B | Strong multilingual, tool use |
| **Kimi K2.5** | 1T MoE | Moonshot's flagship, massive scale |
| **GLM 4.7** | 320B | Zhipu's latest, strong reasoning |
| **Mistral Large** | 123B | EU-based, good reasoning |

### Why Care?

**Self-hosting**: Run on your own hardware. Zero data leaves your network and provider boundaries stay under your control.

**No vendor lock-in**: Switch providers freely. Model weights are yours.

**Fine-tuning**: Train on your codebase for domain-specific improvements.

**Offline**: Works without internet. Air-gapped environments.

### The Tradeoff

Open weight models lag ~6-12 months behind frontier closed models (Claude, GPT). For most coding tasks, this gap is negligible. For cutting-edge agentic workflows, closed models still lead.

### Running Locally

| Tool type | What it does |
|-----------|--------------|
| local runner | one-command local inference for individuals |
| desktop runtime | GUI-based local model management |
| serving stack | production-grade local or self-hosted inference |

Pair with the editor or terminal workflow you already use. Note: "free" local models still require capable hardware (16GB+ RAM, GPU with 8GB+ VRAM recommended).

## Next Steps

- [Capabilities Matrix](/ai-coding-primer/models/capabilities/) — compare what models can do
- [Selection Guide](/ai-coding-primer/models/selection-guide/) — choose by workflow, privacy, and capability
