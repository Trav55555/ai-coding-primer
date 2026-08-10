---
title: Core Concepts
description: Shared glossary for AI-assisted development terms used in the primer.
sidebar:
  order: 1
---

This glossary defines terms used across the core curriculum. Follow the links for procedures and longer explanations.

## Systems and Access

- **Model** — The AI system that generates text, code, plans, or tool calls. See [Models vs Providers](/ai-coding-primer/models/overview/).
- **Provider** — The service or platform that supplies model access and sets operating terms such as privacy, jurisdiction, quotas, and billing. See [Models vs Providers](/ai-coding-primer/models/overview/).
- **AI coding tool** — An editor, extension, terminal agent, or hosted environment that connects a model to code-editing workflows. See [Choose a Workflow and Stack](/ai-coding-primer/learn/beginner/choose-your-tool/).
- **BYOK** — Bring Your Own Key: a setup where you provide model-provider credentials instead of using a bundled subscription. See [Billing Models](/ai-coding-primer/models/pricing/).
- **Credential** — A secret, token, key, cookie, or account session that grants access to a system. Prefer no credentials for first tasks. See [Quick Security Checklist](/ai-coding-primer/security/checklist/).
- **Network access** — Permission for the tool or its commands to reach external systems. Require approval unless the task explicitly needs it. See the [Setup Checklist](/ai-coding-primer/learn/beginner/setup-checklist/).

## Workflow and Evidence

- **Agentic workflow** — A workflow where the AI can read files, edit code, run commands, observe results, and continue. The [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/) defines the canonical procedure.
- **Autonomy** — How much the tool can do without another decision from a person.
- **Authority** — What the tool is allowed to read, change, execute, or access. Bound autonomy and authority by task risk. See [Choose an Autonomy Mode](/ai-coding-primer/learn/intermediate/five-levels/).
- **Prompt** — The instruction, question, or task description given to the AI.
- **Verification** — Evidence that checks the result, such as a test, type check, lint command, build, screenshot, manual reproduction, or diff review.
- **Baseline** — The known state before a task: current diff, existing failures, relevant checks, and allowed scope. Establish it with the [Setup Checklist](/ai-coding-primer/learn/beginner/setup-checklist/).
- **Diff** — The exact set of file changes under review. Inspect it for scope growth and unintended edits.
- **Permission boundary** — The files, commands, services, and actions the tool may use without further approval.

## Context and Extensions

- **Context** — The task instructions, files, tool output, rules, and conversation history the model can use for a response.
- **Context window** — The maximum amount of context the model can consider at once. A larger window does not make irrelevant context useful. See [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/).
- **Project context file** — A repository-scoped instruction file, such as `AGENTS.md`, `CLAUDE.md`, or tool-specific project rules, that records local commands, gotchas, and boundaries. See [Project Context Files](/ai-coding-primer/learn/advanced/project-context-files/).
- **MCP** — Model Context Protocol, a way to expose external tools and data sources to AI applications. It can grant access; it does not define a safe workflow. See [MCP Deep Dive](/ai-coding-primer/learn/advanced/mcp-deep-dive/).
- **Skill** — A reusable instruction set or procedure for recurring agent work. See [Skills Deep Dive](/ai-coding-primer/learn/advanced/skills/).
- **Subagent** — A separate AI session or agent assigned to scoped research, review, or isolated work. See [Subagent Architectures](/ai-coding-primer/learn/advanced/subagents/).
- **Harness** — The files, checks, saved state, permissions, and approval rules that keep long-running agent work recoverable. See [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/).

## Next Steps

- If you are new, [choose a workflow and stack](/ai-coding-primer/learn/beginner/choose-your-tool/), then establish a baseline with the [Setup Checklist](/ai-coding-primer/learn/beginner/setup-checklist/).
- For consequential repository work, use the [Agentic Development Loop](/ai-coding-primer/learn/intermediate/agentic-development-loop/).
- When context becomes the limiting factor, use [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/).
