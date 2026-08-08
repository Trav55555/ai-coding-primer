---
title: Antigravity
description: Google's agentic IDE and command-line environment.
sidebar:
  order: 4
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: product status, models, account access, and security controls. Verify [Google's current Antigravity documentation](https://antigravity.google/docs/).
:::

[Antigravity](https://antigravity.google) is Google's agentic development environment across IDE and command-line workflows.

In 2026, Google also began moving individual Gemini CLI users to Antigravity CLI. See the [Gemini CLI transition notice](https://github.com/google-gemini/gemini-cli/discussions/27274).

## Workflow Fit

Antigravity supports repository editing, command execution, browser interaction, artifacts, and parallel agent work. It is relevant when a workflow needs Google-hosted agent capabilities across terminal, editor, and browser surfaces.

Do not infer current model support or account eligibility from an older launch announcement. Check the live product documentation.

## Permission Controls

Google documents security presets, scoped permissions, workspace boundaries, and command-line sandbox settings. Review:

- [features and security presets](https://antigravity.google/docs/features?app=antigravity-ide)
- [CLI settings](https://antigravity.google/docs/cli/settings?app=antigravity-ide)
- [CLI sandbox](https://antigravity.google/docs/cli-sandbox)
- [browser isolation](https://antigravity.google/docs/ide/browser?app=antigravity)

Treat browser and terminal access as separate authority grants.

## Safe First Workflow

1. Open a non-sensitive repository.
2. Keep writes scoped to the workspace.
3. Require approval for commands that install packages or affect external systems.
4. Restrict browser domains when browser automation is enabled.
5. Run repository checks and inspect the diff.
6. Review telemetry and account data terms before using company code.

## Migration Check

Teams moving from Gemini CLI should re-evaluate authentication, local instructions, sandbox settings, and model availability rather than assuming configuration transfers unchanged.
