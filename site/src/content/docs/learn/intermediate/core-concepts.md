---
title: Core Concepts
description: Essential terminology for AI-assisted development.
sidebar:
  order: 1
---

Before diving deeper, let's establish shared vocabulary.

## Key Terms

| Term | What It Means |
|------|---------------|
| **Model** | The AI itself (e.g., GPT-5.2, Claude Sonnet 4.5). Determines capability and quality |
| **Provider** | Company hosting the model's API (e.g., OpenAI, Anthropic). Determines pricing and terms |
| **Agentic** | AI that acts autonomously: reads files, runs commands, iterates on errors |
| **Context Window** | How much text the AI can "see" at once (measured in tokens). More ≠ better |
| **BYOK** | Bring Your Own Key. Use your own API keys instead of a subscription |
| **MCP** | Model Context Protocol. A standard for connecting AI tools to external services |

## Context Concepts

| Term | What It Means |
|------|---------------|
| **Context Engineering** | Building systems to provide the right information and tools to the model |
| **Context Rot** | When too much irrelevant context makes the AI "dumber" |
| **40% Rule** | Keep context below 40% of window capacity to maintain quality |
| **Subagent** | A separate AI instance launched for investigation, keeping main context clean |

## Workflow Concepts

| Term | What It Means |
|------|---------------|
| **Composer/Agent Mode** | Multi-file editing mode (vs. single-file autocomplete) |
| **Prompt** | Your instruction to the AI. Quality of prompt = quality of output |
| **Verification** | Having the AI check its own work (tests, linter, type checker) |
| **Close the Loop** | Design workflow so the agent can verify its own output |

## The 40% Rule

> "As context usage grows, model quality degrades. Empirically, this begins around 40% of the context window." — Dex Horthy

| Context Window | 40% Threshold | Practical Limit |
|----------------|---------------|-----------------|
| 128k tokens | ~51k tokens | ~40 files |
| 200k tokens | ~80k tokens | ~65 files |
| 1M tokens | ~400k tokens | ~325 files |

**Stay under 40%.** Beyond this, you're in the "Dumb Zone" where quality measurably degrades.

## Models vs Providers

**Models** determine capability — how smart the AI is, how fast it responds.

**Providers** determine terms — pricing, privacy policy, legal jurisdiction.

The same model can be available through multiple providers:
- Claude Sonnet 4.5 is available via Anthropic, AWS Bedrock, and Google Vertex
- GPT-5.2 is available via OpenAI and Azure OpenAI

This matters for enterprise (data residency, compliance) and cost optimization.

## Next Steps

- [Understand the Five Levels](/ai-coding-primer/learn/intermediate/five-levels/) — where you are and where to aim
- [Learn Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) — the key skill
