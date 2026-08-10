---
title: Pi Coding Agent
description: Minimal terminal coding harness with programmable extensions, skills, packages, and provider paths.
sidebar:
  order: 6
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: providers, models, project-trust behavior, package handling, telemetry, commands, and installation. Verify the [current Pi documentation](https://pi.dev/docs/latest) before choosing or standardizing.
:::

[Pi Coding Agent](https://pi.dev) is an open-source terminal coding harness from Earendil Works. Its small core is intended to be shaped with TypeScript extensions, skills, prompt templates, themes, and Pi packages.

## Workflow Fit

Pi fits teams that need to program the harness itself. Extensions can add tools, commands, UI, permission gates, compaction behavior, or project-specific workflows. Interactive, print/JSON, RPC, and SDK modes support both attended use and integration into other systems.

This flexibility also creates work. Plan mode, subagent orchestration, MCP integration, permission prompts, background supervision, and task-state systems are not fixed core workflows. They can be implemented with extensions, packages, shell tools, or external orchestration, but the team then owns those controls.

## Provider Boundary

Pi supports multiple API-key and subscription paths and can switch models during a session. The current provider list changes, so use the live provider documentation rather than preserving it here.

Pi is the client and harness, not necessarily the model host. Prompts, repository content, and tool results follow the selected provider and any extension or package services. Review each path separately.

## Project Trust Is Not a Sandbox

Pi asks for a trust decision before loading project settings, project resources, project-local extensions, and project package resources. Trusted extensions and packages execute with the user's authority.

Project context files are a separate boundary. Current Pi documentation says `AGENTS.md` or `CLAUDE.md` files can load before a project trust decision. Treat instructions in a cloned repository as untrusted input even when executable project resources remain disabled.

For higher-risk work, put the enforcement boundary outside the agent:

- use a container, virtual machine, or another reviewed sandbox
- mount sensitive files read-only or not at all
- keep network access explicit
- review and pin third-party packages
- grant only the credentials required for the task

## Extension and Package Risk

Extensions are arbitrary TypeScript. Skills can instruct the model to run commands. Packages can bundle extensions, skills, prompts, and themes and may install dependencies.

Before adopting a package:

1. inspect its source and manifest
2. inspect referenced scripts and dependencies
3. pin a reviewed version or commit
4. test it without production credentials
5. record who owns updates and removal

Pi's official npm documentation provides an installation path that disables lifecycle scripts:

```bash
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

Use current official installation documentation rather than copying commands from third-party package lists.

## Local State and Network Activity

Sessions are stored locally by default, but local session storage does not make the whole workflow local. Provider calls, package services, extensions, update checks, and optional telemetry can create network paths.

Current Pi documentation distinguishes version checks from install/update telemetry and provides separate controls, including offline mode. Verify those settings in the version being deployed and test the resulting network boundary.

## Safe First Workflow

1. Start in a non-sensitive repository with a clean Git state.
2. Use built-in tools before adding packages or extensions.
3. Choose one reviewed provider and inspect its data terms.
4. Keep writes and commands scoped to the task.
5. Run repository checks and inspect the diff.
6. Add custom gates or external isolation before granting broader authority.

## Sources

- [Pi documentation](https://pi.dev/docs/latest)
- [Pi npm package](https://www.npmjs.com/package/@earendil-works/pi-coding-agent)
