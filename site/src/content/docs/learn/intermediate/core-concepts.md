---
title: Core Concepts
description: Essential terminology for AI-assisted development.
sidebar:
  order: 1
---

This page defines terms used throughout the primer.

## Key Terms

| Term | Meaning |
|---|---|
| **Model** | The AI system that generates text, code, plans, or tool calls. Model choice affects reasoning ability, latency, cost, and supported inputs. |
| **Provider** | The service or platform that hosts model access. Provider choice affects pricing, privacy terms, jurisdiction, quotas, and enterprise controls. |
| **Agentic** | A workflow where the AI can take actions such as reading files, editing code, running commands, and iterating on errors. |
| **Context window** | The amount of text and tool output the model can consider at once, measured in tokens. More context is not automatically better. |
| **BYOK** | Bring Your Own Key. A setup where you provide model-provider credentials instead of using a bundled subscription. |
| **MCP** | Model Context Protocol. A protocol for connecting AI tools to external services and data sources. |
| **Skill** | A reusable instruction set, procedure, or convention that helps an agent perform a class of tasks consistently. |

## Context Terms

| Term | Meaning |
|---|---|
| **Context engineering** | Designing what information, tools, and instructions the model receives for a task. |
| **Context rot** | Degraded output caused by irrelevant, stale, contradictory, or excessive context. |
| **Context budget** | A practical limit on how much information to load before attention and output quality degrade. |
| **Subagent** | A separate AI session or agent used for investigation, summarization, or isolated work. |

## Workflow Terms

| Term | Meaning |
|---|---|
| **Composer / agent mode** | A multi-file editing mode, distinct from single-line or single-file autocomplete. |
| **Prompt** | The instruction, question, or task description given to the AI. |
| **Verification** | A check that can falsify or confirm the result, such as a test, type check, lint command, build, screenshot, or expected output. |
| **Close the loop** | Design the workflow so the agent can run or observe verification results and revise based on them. |

## Context Budget

There is no strong primary-source basis for a universal context threshold such as `40%`. Treat hard percentages as heuristics, not laws.

The more defensible claim is narrower: output quality can degrade before the context window is full, especially when context is noisy. Use selective retrieval, compaction, and project context files instead of putting everything into one prompt.

A practical context budget depends on:

- model behavior
- task complexity
- relevance of loaded files
- length and quality of tool output
- amount of stale conversation history

## Models vs Providers

A model and a provider are separate decisions.

**Model choice** affects:

- reasoning ability
- code-generation quality
- supported modalities
- latency
- cost profile

**Provider choice** affects:

- data-retention terms
- training exclusions
- legal jurisdiction
- enterprise controls
- quota and billing model

The same model may be available through multiple providers. For example, a model can be offered directly by its creator and also through cloud platforms such as AWS, Azure, or Google Cloud.

This distinction matters for enterprise use because privacy, compliance, and procurement depend on provider terms, not only on model capability.

## Next Steps

- [Choose an Autonomy Mode](/ai-coding-primer/learn/intermediate/five-levels/) — optional task-risk and authority lens
- [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/) — choosing task context
- [MCP Deep Dive](/ai-coding-primer/learn/advanced/mcp-deep-dive/) — external tool connectivity
- [Skills Deep Dive](/ai-coding-primer/learn/advanced/skills/) — reusable instructions and procedures
