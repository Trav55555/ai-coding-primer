---
title: Models vs Providers
description: Understanding the difference between AI models and API providers.
sidebar:
  order: 1
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: model availability, benchmark position, pricing, privacy terms, and provider feature support. Verify live docs and leaderboards before making current decisions.
:::


**Models** determine capability: how smart the AI is, how fast it responds, and what kinds of work it can do.

**Providers** determine operating constraints: privacy policy, legal jurisdiction, availability, and access model.

## Models

Models are the AI systems themselves. In practice, it helps more to think in capability classes than in winner lists.

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

The same model family can be available through multiple providers.

Examples include direct provider access, cloud-platform access, and aggregator access. Exact model availability changes quickly, so verify current provider docs before deciding.

## Why This Matters

### For Privacy
Different providers have different data policies, retention defaults, subprocessors, and abuse-monitoring practices.

### For Enterprise
Cloud platforms may offer data residency, private networking, audit logs, policy controls, and procurement paths that direct consumer tools do not.

### For Workflow
- Direct providers: best when you want the vendor's native tooling and latest releases
- Aggregators: useful when you want one key, fallback routing, or easy model switching
- Cloud platforms: useful when procurement, networking, or compliance requirements matter more than raw convenience

## Aggregators & Cloud Platforms

| Platform type | Why use it |
|---|---|
| Aggregator | one key, fallback routing, easy model switching |
| Open-model host | hosted open-weight models, fine-tuning, deployment flexibility |
| Cloud platform | procurement, private networking, data controls, compliance features |
| Direct provider | native tooling, newest releases, simpler debugging path |

## Open Weight Models

"Open weight" means the model weights are publicly available, so you can download and run them yourself. That is not the same thing as open source, which would also include training code and data.

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

- [Capabilities Matrix](/ai-coding-primer/models/capabilities/): compare what models can do
- [Selection Guide](/ai-coding-primer/models/selection-guide/): choose by workflow, privacy, and capability
