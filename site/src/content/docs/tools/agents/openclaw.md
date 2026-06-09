---
title: OpenClaw (formerly ClawdBot/Moltbot)
description: Multi-channel personal AI assistant gateway with messaging integrations, skills, plugins, and local control-plane patterns.
sidebar:
  order: 1
---

:::note[Freshness metadata]
Reviewed: June 2026. Volatile fields: supported messaging channels, installer behavior, plugin ecosystem, sandbox options, cloud deployments, and security controls. Verify the current OpenClaw docs and package metadata before installing or standardizing on this reference.
:::

OpenClaw is an open-source personal AI assistant platform. It is the current name for the project that previously used names including ClawdBot and Moltbot.

Use the current name when documenting new work, but include the older names when searching for project history or migration notes.

## Overview

| | |
|---|---|
| **Type** | Agent platform / messaging gateway |
| **Open Source** | Yes |
| **Best For** | Multi-channel assistants, chat-native automation, local gateway workflows |
| **Not Primarily** | A coding-only terminal CLI |

## What It Is

OpenClaw is designed around a gateway/control-plane model. Instead of starting only from a terminal prompt, the agent can be reached through messaging channels and companion surfaces.

The project documentation describes integrations and workflows around channels such as Telegram, Slack, Discord, Matrix, Signal, WhatsApp, iMessage, Feishu, WeChat, QQ, and related gateways. Exact channel support changes, so check the current docs before relying on a specific integration.

## Key Features

- **Messaging gateway** - routes requests from chat platforms and devices to an AI assistant process
- **Pairing and allowlists** - controls which accounts or channels may trigger the assistant
- **Skills and plugins** - extends behavior through reusable procedures and integrations
- **Local control plane** - keeps the assistant oriented around user-controlled configuration and runtime choices
- **Operational tooling** - includes diagnostic commands such as `openclaw doctor` for setup checks
- **Sandbox options** - can be paired with Docker, SSH, OpenShell, or similar isolation layers for risky work

## Naming and Lineage

If you are looking for ClawdBot, look for OpenClaw first. The project's own materials describe the naming path as:

```text
Warelay -> Clawdbot -> Moltbot -> OpenClaw
```

Older blog posts, repositories, package names, or comments may still use the older names.

## Workflow Fit

OpenClaw fits when the main requirement is an assistant that can operate across channels and devices.

Use it when you need:

- a chat-accessible personal assistant
- multi-channel routing for messages and tasks
- a gateway that can connect assistants, plugins, and user devices
- explicit control over which channels can trigger work

For ordinary code editing in a repository, a terminal coding agent may be simpler. If OpenClaw invokes a coding agent or shell task, the security boundary comes from the invoked runtime and sandbox, not from the chat interface alone.

## Installation and Package Risk

The npm package is named `openclaw`. Package metadata reviewed in June 2026 showed npm lifecycle scripts, including a postinstall step for bundled plugins.

That does not make the package malicious, but it changes the install risk. Do not treat `npx openclaw` or an unreviewed global install as a harmless documentation command on sensitive machines.

Safer intake pattern:

1. review the repository, installer, and package metadata
2. pin the version or commit you intend to use
3. install in a low-risk environment first
4. inspect generated config and plugin directories
5. run diagnostics before connecting real messaging accounts

## Security Notes

OpenClaw's risk profile is different from a local coding CLI because it can expose an agent through messaging surfaces.

Pay attention to:

- **inbound prompt injection** from DMs, group chats, forwarded messages, and bot commands
- **channel authorization** through pairing, allowlists, and account scoping
- **gateway exposure** if a webhook or public endpoint is reachable from the internet
- **plugin provenance** for skills, plugins, and bundled integrations
- **credential scope** for messaging tokens, API keys, browser sessions, and local files
- **sandboxing** for shell commands, coding tasks, or tools that can read private data and communicate externally

For team use, treat OpenClaw like an agent gateway. It needs an owner, logs, rotation procedures for tokens, and a fast disable path.

## Where It Fits in the Primer

OpenClaw belongs with broader agent platforms, not only CLI coding tools. It is relevant to engineering teams when they are evaluating always-on assistants, chat-triggered automations, or agents that bridge personal devices and development environments.

## Sources

- [OpenClaw GitHub repository](https://github.com/openclaw/openclaw)
- [OpenClaw website](https://openclaw.ai)
- [OpenClaw npm package](https://www.npmjs.com/package/openclaw)
- [Cloudflare moltworker](https://github.com/cloudflare/moltworker) - experimental Cloudflare Workers/Sandbox deployment path
