---
title: Hermes Agent
description: Nous Research agent platform with persistent memory, skills, scheduled tasks, gateways, and multiple execution backends.
sidebar:
  order: 2
---

:::note[Freshness metadata]
Reviewed: June 2026. Volatile fields: package version, optional integrations, provider support, messaging gateways, execution backends, security controls, and installer behavior. Verify the current Nous Research Hermes Agent docs before installing or standardizing on this reference.
:::

Hermes Agent is an open-source Python agent platform from Nous Research. It should not be confused with the Hermes model family or with unofficial packages that use similar names.

## Overview

| | |
|---|---|
| **Type** | Agent platform / CLI / TUI / gateway |
| **Open Source** | Yes |
| **Best For** | Persistent memory, reusable skills, scheduled automation, broad tool workflows |
| **Canonical Project** | `NousResearch/hermes-agent` and the Python/PyPI package path |

## What It Is

Hermes Agent is designed around a self-improving workflow: the agent can use experience from prior sessions, maintain memory, create or update skills, and run recurring work.

That makes it broader than a repository-local coding assistant. It can be used from a CLI or TUI, through gateway integrations, with MCP tools, and through different execution backends.

## Key Features

- **Persistent memory** - uses bounded memory files such as `MEMORY.md` and `USER.md` under the Hermes home directory
- **Skills** - supports reusable skills and can create, modify, or delete them during use
- **Session search** - indexes past sessions for retrieval
- **Cron jobs** - can run scheduled tasks
- **Toolsets** - groups capabilities for different work modes
- **MCP support** - can connect to Model Context Protocol servers
- **Messaging gateways** - supports chat or assistant surfaces beyond the local terminal, depending on installed extras
- **Multiple execution backends** - documentation describes local execution plus isolation or remote backends such as Docker, SSH, Singularity, Modal, and Daytona

## Installation Notes

The canonical project is Python-based. Package metadata reviewed in June 2026 identified `hermes-agent` on PyPI as the relevant package path.

There is also an npm package named `hermes-agent` that presents itself as a bridge. Do not treat that npm package as the canonical install path unless you have separately reviewed and chosen it.

For real projects:

1. review the official repository and installer before running it
2. prefer pinned versions or commits
3. install optional extras only when needed
4. separate Hermes home directories for unrelated clients or workspaces
5. run first in a sandbox when tools have filesystem or network access

## Memory and Skill Boundaries

Hermes' memory and skills are part of its value, but they are also part of the security boundary.

Review these behaviors before team rollout:

- what gets written to persistent memory
- whether memory can contain secrets, client names, or private repository facts
- when the agent is allowed to create or change skills
- how skill changes are reviewed, pinned, or rolled back
- whether session search can retrieve data from unrelated work

A useful policy is to treat memory writes and skill edits like code changes: review them, keep them scoped, and make rollback possible.

## Security Model

Hermes documentation describes multiple security layers, including user authorization, dangerous-command approval, container isolation, MCP credential filtering, context-file scanning, cross-session isolation, and input sanitization.

Those controls reduce risk, but they do not remove the need to decide what the agent is allowed to touch.

Pay attention to:

- **approval mode** - disabling approvals or using YOLO-style modes changes the risk substantially
- **execution backend** - local execution, Docker, SSH, and hosted sandboxes expose different data and credential surfaces
- **MCP credentials** - MCP servers can become high-permission side channels
- **scheduled jobs** - cron tasks need logs, ownership, and expiry review
- **messaging gateways** - inbound messages must be treated as untrusted input
- **optional dependencies** - broad extras can add network, browser, voice, vision, and provider integrations

## Workflow Fit

Hermes fits workflows where persistence and recurrence matter:

- personal or team assistants that remember preferences and prior sessions
- recurring research or monitoring tasks
- skill-driven workflows where the agent improves reusable procedures over time
- environments where execution can be isolated with containers or remote backends

It is probably more machinery than needed for a one-off local code edit. For that, a narrower terminal coding agent may be easier to audit.

## Where It Fits in the Primer

Hermes belongs with broader agent platforms. It is relevant when a team is evaluating autonomous or semi-autonomous agents, scheduled work, persistent memory, and self-modifying skills.

## Sources

- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
- [Hermes Agent documentation](https://hermes-agent.nousresearch.com)
- [hermes-agent on PyPI](https://pypi.org/project/hermes-agent/)
