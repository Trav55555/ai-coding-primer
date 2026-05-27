---
title: Selection Guide
description: How to choose the right model for your workflow.
sidebar:
  order: 4
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: model availability, benchmark position, pricing, privacy terms, and provider feature support. Verify live docs and leaderboards before making current decisions.
:::


Quick guide to choosing the right model without turning the decision into a pricing spreadsheet. Benchmarks move quickly; workflow fit lasts longer.

## Start with the Workflow

| Workflow | Start With | Why |
|----------|------------|-----|
| **Long-running agentic coding** | frontier reasoning models with reliable tool use | Strong reasoning and tool use matter more than raw speed |
| **Complex architecture or debugging** | Highest-reasoning model you trust operationally | Deep work benefits from slower, more careful models |
| **Visual/UI work** | strong multimodal models | Screenshot and layout understanding matter here |
| **Fast completions and quick edits** | low-latency models | Low latency keeps editing flow intact |
| **Huge repos or large investigations** | Long-context models, used selectively | Context window size helps only when paired with good context hygiene |
| **Local/private workflows** | Strong open-weight coding models | Best when data control matters more than frontier performance |

## Questions That Matter More Than Price

1. **Does this task need depth or speed?**
2. **Do I need multimodal input such as screenshots or diagrams?**
3. **Is the code sensitive enough that provider and jurisdiction matter?**
4. **Will I be running a long agent loop or making one quick edit?**
5. **Do I need local execution or is hosted inference acceptable?**

:::tip[BYOK Users]
An aggregator gateway can make experimentation easier by giving you one API surface for many models. Useful when you want to compare providers without managing a different integration for each one.
:::

## Decision Tree

```
What matters most?
│
├─► Quality (hard problems, complex refactors)
│   ├─► Need deepest reasoning → Frontier reasoning model
│   └─► Need balance → Strong all-rounder model
│
├─► Speed (completions, quick iterations)
│   └─► Low-latency model
│
├─► Context (huge codebases)
│   └─► Long-context model + selective context loading
│
├─► Privacy (no cloud)
│   └─► Strong open-weight model + local serving stack
│
└─► "Just pick for me"
    └─► Strong general-purpose coding model with reliable tool use
```

## Model Combinations

Many developers use multiple models:

| Role | Use For |
|------|---------|
| **Heavy hitter** | Complex changes, architecture, debugging |
| **Fast model** | Tab completions, quick edits, iterative loops |
| **Local/private model** | Sensitive code or offline work |

This keeps the workflow responsive without forcing one model to do every job.

## Switching Costs

Switching difficulty depends more on tool architecture than on the model itself:

- some tools expose a model picker in the UI
- some rely on config files or CLI flags
- some are tied to one provider family

If model switching matters to you, prefer tools that make provider changes explicit and reversible.

## Practical Heuristics

- Use your best reasoning model for tasks that would take a human hours.
- Use faster models for autocomplete, drafts, and tight feedback loops.
- Treat long context as a capability, not a permission slip to dump everything in.
- Prefer local models when privacy constraints are the dominant requirement.
- Re-check live benchmarks before making strong model claims in team docs or policies.

## Local Models

For privacy, offline work, or air-gapped environments. Always an option, but most developers start with hosted APIs.

| Model size class | Hardware Needed | When to Use |
|------------------|-----------------|-------------|
| **Large coding model** (roughly 30B+) | 24GB+ VRAM | best local quality if you have the hardware |
| **Mid-size coding model** (roughly 14B-16B) | 16GB+ VRAM | good balance of quality and practicality |
| **Small coding model** (roughly 7B-8B) | 8GB+ VRAM | lighter hardware and experimentation |

Run with a local serving stack or desktop runtime. Pair with whatever editor or terminal workflow already fits your environment.

:::note[Hardware not included]
"Free" local models still require capable hardware. Most laptops can only run smaller models acceptably.
:::

## Sources

| Benchmark | What It Measures | Link |
|-----------|------------------|------|
| **SWE-bench** | Real GitHub issue resolution | [swebench.com](https://swebench.com) |
| **Aider Polyglot** | Multi-language code editing | [aider.chat/docs/leaderboards](https://aider.chat/docs/leaderboards/) |
| **Artificial Analysis** | Speed, quality, model changes over time | [artificialanalysis.ai](https://artificialanalysis.ai) |
| **LLM Stats** | Aggregated benchmarks | [llm-stats.com](https://llm-stats.com) |

*Use live benchmark trackers for current details. Data moves quickly.*
