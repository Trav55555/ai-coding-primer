---
title: Pi Coding Agent
description: Minimal, extensible terminal coding harness with skills, extensions, packages, and multiple provider paths.
sidebar:
  order: 6
---

:::note[Freshness metadata]
Reviewed: June 2026. Volatile fields: exact provider list, model support, package ecosystem, telemetry controls, pricing, quotas, and subscription terms. Verify live Pi docs before choosing or standardizing on this reference.
:::

[Pi Coding Agent](https://pi.dev) is a minimal terminal coding harness from Earendil Works. It is designed to be shaped with TypeScript extensions, skills, prompt templates, themes, and Pi packages.

## Overview

| | |
|---|---|
| **Type** | CLI / SDK / RPC harness |
| **Open Source** | Yes |
| **Best For** | Extensible workflows, custom tools, skills, package-based customization |
| **Not Primarily** | A preconfigured all-in-one assistant platform |

## What It Is

Pi starts from a small core: model chat, file tools, precise editing, bash execution, session state, and provider configuration. Most opinionated workflow behavior is added around that core.

This is the main distinction from larger vendor tools. Pi is a programmable harness. If you want plan mode, custom permission gates, review workflows, subagent orchestration, or project-specific UI behavior, Pi expects those patterns to come from extensions, skills, packages, shell tools, or local project files.

## Key Features

- **Minimal core** - starts with file, edit, write, search, and bash-style tools
- **Extensions** - TypeScript extensions can add tools, commands, UI, gates, and workflow behavior
- **Skills** - supports the Agent Skills pattern with progressive disclosure
- **Packages** - bundles extensions, skills, prompts, and themes through Pi packages
- **Prompt templates and themes** - lets teams standardize prompts and terminal presentation
- **Multiple modes** - interactive, print, JSON, RPC, and SDK usage
- **Session tree** - branch, fork, clone, compact, and export sessions

## What Is Deliberately Not Built In

Pi keeps the core small. Some workflows that other tools ship as built-ins are expected to be composed externally or through extensions.

Examples include:

- MCP-style integrations
- subagent orchestration
- plan-mode enforcement
- permission popups beyond what an extension implements
- background bash supervision
- todo/task-state systems

This is not necessarily a weakness. It is a design tradeoff: less default machinery, more responsibility for the user or team to assemble the workflow they need.

## Installation

```bash
npm install -g @earendil-works/pi-coding-agent
```

For a more conservative npm install path, Pi's documentation also describes installing with lifecycle scripts disabled:

```bash
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

Avoid installing third-party Pi packages casually. Extensions and Pi packages can execute code with your user permissions.

## Access Model

Pi can authenticate through subscriptions or API keys.

Subscription paths include Claude Pro/Max, ChatGPT Plus/Pro through Codex, and GitHub Copilot.

API-key paths include Anthropic, OpenAI, Azure OpenAI, Google Gemini, Google Vertex, Amazon Bedrock, Mistral, Groq, Cerebras, OpenRouter, Vercel AI Gateway, xAI, Hugging Face, Fireworks, Together AI, and others.

Check the current provider docs before relying on a specific model or account type.

## Privacy

| Setting | Value |
|---------|-------|
| Open Source | Yes |
| Training | Depends on selected provider |
| Data Storage | Local sessions by default; provider traffic depends on model choice |
| Jurisdiction | Your selected provider and any installed package services |

:::caution[Package and extension risk]
Pi is intentionally extensible. Extensibility changes the security model.

Extensions run arbitrary TypeScript. Skills can instruct the model to run commands. Packages may bundle both. Review source before installing third-party Pi packages.
:::

## Project Trust and Sandboxing

Pi's project-trust model controls whether project-local inputs such as context files, settings, skills, extensions, and packages are loaded. Treat a cloned repository's local agent files as code and instructions from that repository, not as neutral documentation.

Project trust is not a sandbox. If a trusted project loads an extension or package, that code can run with your user permissions. If the agent can run shell commands, it can affect the environment you gave it.

For higher-risk work, put the boundary outside Pi:

- use Docker, a VM, OpenShell, Gondolin, or another sandbox
- mount sensitive files read-only or not at all
- keep network access explicit
- review third-party extensions and packages before loading them
- prefer pinned packages for team workflows

## Getting Started

```bash
# Set an API key for your chosen provider
export ANTHROPIC_API_KEY=sk-ant-...

# Start in your project
cd your-project
pi
```

Or use interactive login:

```text
/login
```

## Key Commands

| Command | Action |
|---------|--------|
| `/login` | Authenticate with a provider |
| `/model` | Switch model |
| `/settings` | Configure thinking level, theme, transport, and behavior |
| `/resume` | Resume a previous session |
| `/tree` | Navigate the session tree |
| `/fork` | Create a new session from a previous point |
| `/compact` | Summarize older context |
| `/export` | Export a session to HTML |
| `/reload` | Reload extensions, skills, prompts, and context files |

## Workflow Fit

Pi fits workflows where the agent harness itself needs to be programmable.

Use it when the project needs custom permission gates, project-specific tools, shared skills, custom compaction, or a workflow that differs from the defaults in larger vendor tools.

It is less plug-and-play than tools that bake in plan mode, MCP, subagents, and permission prompts. Pi expects you to add those patterns with extensions, packages, tmux, or project files.

## Context and Project Files

Pi loads `AGENTS.md` or `CLAUDE.md` from global and project locations. Use these files for project conventions, common commands, and agent instructions.

Pi also supports prompt templates and skills for reusable workflows.

## MCP and Subagents

Pi does not ship with MCP or subagents as core defaults. The philosophy is to keep the core small and add those workflows through extensions, packages, shell tools, or tmux orchestration.

If your team requires built-in MCP or built-in permission prompts, compare Pi against OpenCode, Claude Code, Codex CLI, and broader agent platforms before standardizing.

## Tips

- Start with built-in tools before adding packages
- Keep `AGENTS.md` short and operational
- Use `/compact` and `/tree` for long-running work
- Pin and review third-party packages before team rollout
- Prefer project-local settings for team-shared workflow configuration
- Use containers or custom extension gates for high-risk command execution

## Sources

- [Pi documentation](https://pi.dev)
- [Pi npm package](https://www.npmjs.com/package/@earendil-works/pi-coding-agent)
