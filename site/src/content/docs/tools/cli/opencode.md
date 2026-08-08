---
title: OpenCode
description: Open-source terminal coding agent with configurable providers.
sidebar:
  order: 3
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: provider integrations, configuration, installation, and hosted services. Verify the [current OpenCode documentation](https://opencode.ai/docs/).
:::

[OpenCode](https://opencode.ai) is an open-source terminal coding agent that can connect to hosted or local model providers.

## Workflow Fit

OpenCode fits developers who want a terminal agent with provider choice, session management, tool integration, and configurable project instructions.

## Provider Boundary

“Bring your own key” does not mean that no data leaves the machine. Prompts, repository context, and tool results go wherever the selected provider and configured tools send them.

Before use, verify:

- provider data-use and retention terms
- where credentials are stored
- enabled tools and external integrations
- local session and log storage
- network and filesystem permissions

OpenCode documents provider configuration and credential storage under [Providers](https://opencode.ai/docs/providers/).

## Configuration

Use the current [`opencode.json` configuration reference](https://opencode.ai/docs/config/) rather than copying old model identifiers or MCP command examples.

Keep credentials out of committed files. Treat every configured tool server as an additional security and data boundary.

## Adoption Check

1. Install through the [official documentation](https://opencode.ai/docs/).
2. Connect one reviewed provider or local runtime.
3. Start with workspace-scoped permissions.
4. Add external tools only when a task requires them.
5. Inspect commands, diff, tests, and stored session data before broader use.
