---
title: Gemini CLI
description: Historical Google terminal-agent reference after the transition to Antigravity CLI.
sidebar:
  order: 4
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: service status, supported account paths, migration behavior, and model availability. Verify the [Gemini CLI repository](https://github.com/google-gemini/gemini-cli) and Google's migration notices.
:::

Gemini CLI is Google's open-source terminal-agent project. In 2026, Google began moving its individual terminal experience to Antigravity CLI.

:::caution[Transition status]
Google's official repository announcement says Gemini CLI stopped serving requests for free-tier, Google AI Pro, and Google AI Ultra individual accounts on June 18, 2026. Enterprise users with Gemini Code Assist licenses and API-key authentication were unaffected at that time.

Read the [transition announcement](https://github.com/google-gemini/gemini-cli/discussions/27274) and [service-status update](https://github.com/google-gemini/gemini-cli/discussions/28017) before relying on this page.
:::

## What the Workflow Provided

Gemini CLI combined repository access, file editing, command execution, multimodal input, and Google model access in a terminal workflow. The repository remains useful for understanding that client and for enterprise or API-key paths that Google still supports.

Do not assume that an old authentication command, allowance, model name, or context limit still applies. Use the project's current README and documentation for any supported continuation path.

## What to Choose Now

- **Individual account:** start with [Antigravity](/ai-coding-primer/tools/ides/antigravity/) and verify Google's current CLI instructions.
- **Enterprise Gemini Code Assist:** verify entitlement and migration policy with current Google documentation.
- **API-key workflow:** confirm that the repository still supports the required authentication and model before adopting it.

## Migration Check

1. Identify whether the workflow uses an individual account, enterprise license, or API key.
2. Read Google's current transition notice.
3. Export any local instructions or policies that need to move.
4. Recreate permissions with least privilege in the supported replacement.
5. Run a bounded repository task and verify edits, commands, and data handling.

Do not standardize a new team workflow on Gemini CLI solely because an older install command still works.
