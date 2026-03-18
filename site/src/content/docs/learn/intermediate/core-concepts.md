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
| **Skill** | A reusable instruction set, playbook, or convention that helps an agent perform a class of tasks more reliably |

## Context Concepts

| Term | What It Means |
|------|---------------|
| **Context Engineering** | Building systems to provide the right information and tools to the model |
| **Context Rot** | When too much irrelevant context makes the AI "dumber" |
| **Context Budget** | A practical limit for how much context to load before quality starts to degrade |
| **Subagent** | A separate AI instance launched for investigation, keeping main context clean |

## Workflow Concepts

| Term | What It Means |
|------|---------------|
| **Composer/Agent Mode** | Multi-file editing mode (vs. single-file autocomplete) |
| **Prompt** | Your instruction to the AI. Quality of prompt = quality of output |
| **Verification** | Having the AI check its own work (tests, linter, type checker) |
| **Close the Loop** | Design workflow so the agent can verify its own output |

## Context Budget

There is no strong primary-source basis for a universal `40%` threshold. Treat hard percentages as heuristics, not laws.

The safer idea is simpler: quality drops before the window is full, especially when context is noisy. Use selective retrieval, compaction, and project context files instead of stuffing everything into one prompt.

If you want a working rule, think in ranges rather than one magic number. The practical target depends on the model, the task, and how clean the context is.

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
- [MCP Deep Dive](/ai-coding-primer/learn/advanced/mcp-deep-dive/) — the connectivity layer
- [Skills Deep Dive](/ai-coding-primer/learn/advanced/skills/) — reusable instructions and playbooks
