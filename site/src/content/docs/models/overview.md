---
title: Models vs Providers
description: Understanding the difference between AI models and API providers.
sidebar:
  order: 1
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: model availability, benchmark position, pricing, privacy terms, and provider feature support. Verify live docs and leaderboards before making current decisions.
:::

**Models** determine model-side capability: reasoning behavior, supported inputs, latency, and task fit.

**Providers** determine operating constraints: privacy policy, legal jurisdiction, availability, access model, quotas, and enterprise controls.

## Models

Models are the AI systems themselves. For a durable decision, group them by capability class instead of relying on a current winner list.

| Model class | Typical fit |
|---|---|
| frontier reasoning models | complex agentic work, debugging, and multi-file changes |
| general-purpose coding models | everyday implementation and review loops |
| multimodal models | screenshots, mockups, diagrams, and visual/UI work |
| long-context models | large investigations when context is still selective |
| hosted open-weight models | more deployment control without fully local operations |

:::tip[Visual/UI tasks]
For screenshots, mockups, design files, or visual debugging, use a model and tool path that support image input. Verify current multimodal support in the tool you plan to use.
:::

## Providers

The same model family can be available through multiple providers.

Provider options include direct model-provider access, cloud-platform access, and aggregator access. Exact model availability changes quickly, so verify current provider docs before deciding.

## Decision Factors

### Privacy

Different providers have different data policies, retention defaults, subprocessors, abuse-monitoring practices, and training exclusions.

### Enterprise controls

Cloud platforms may offer data residency, private networking, audit logs, policy controls, and procurement paths that direct consumer tools do not.

### Workflow fit

- Direct providers: native tooling and early access to new releases
- Aggregators: one key, fallback routing, or model switching
- Cloud platforms: procurement, networking, compliance, and data-control requirements

## Aggregators and Cloud Platforms

| Platform type | Primary reason to use it |
|---|---|
| Aggregator | one key, fallback routing, model switching |
| Open-model host | hosted open-weight models, fine-tuning, deployment flexibility |
| Cloud platform | procurement, private networking, data controls, compliance features |
| Direct provider | native tooling, current releases, simpler provider support path |

## Open-Weight Models

"Open weight" means model weights are publicly available. It does not necessarily mean open source; open source would also require training code, data, and licensing terms that permit source-level reuse.

Open-weight choices change quickly. Instead of relying on a static list, check current leaderboards and provider docs for:

- license terms
- parameter size and hardware requirements
- coding and reasoning benchmark results
- tool-use support
- local and hosted availability
- fine-tuning support
- jurisdiction and provider boundary

### Operational implications

| Requirement | Why open-weight models may fit |
|---|---|
| Self-hosting | code and prompts can remain inside your infrastructure |
| Provider control | you can choose a host or run locally when hardware allows |
| Fine-tuning | some models support domain-specific training or adaptation |
| Offline use | local deployment can support disconnected or air-gapped environments |

### Tradeoff

Open-weight models may trail the strongest closed frontier models on some agentic coding tasks. The size of that gap changes with each release. For current decisions, check live benchmarks and run a small pilot on your own workflow.

### Running Locally

| Tool type | What it does |
|---|---|
| local runner | one-command local inference for individuals |
| desktop runtime | GUI-based local model management |
| serving stack | production-grade local or self-hosted inference |

Local models still require capable hardware. Treat hardware requirements as part of the operating cost.

## Next Steps

- [Capability Patterns](/ai-coding-primer/models/capabilities/): compare and evaluate capability classes for the task
