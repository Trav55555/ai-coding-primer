---
title: Codex CLI
description: OpenAI's open-source local coding-agent client.
sidebar:
  order: 5
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: account eligibility, models, sandbox behavior, and approval settings. Verify the [current Codex CLI documentation](https://developers.openai.com/codex/cli).
:::

[Codex CLI](https://github.com/openai/codex) is OpenAI's open-source coding-agent client for local terminal workflows.

## Workflow Fit

Codex CLI can inspect a repository, edit files, run commands, and work under configurable sandbox and approval policies. It fits teams that want a terminal workflow and can define clear local permission boundaries.

## Access Model

Local Codex clients support ChatGPT sign-in and API-key authentication. Cloud workflows may have different authentication requirements. Check the [current authentication documentation](https://developers.openai.com/codex/auth) rather than assuming every subscription includes the same access.

## Sandbox and Approvals

Sandbox mode controls what commands can access. Approval policy controls when the agent must stop for confirmation. They are separate controls.

For example, OpenAI documents a workspace-write configuration with on-request approvals:

```bash
codex --sandbox workspace-write --ask-for-approval on-request
```

The safest useful setting depends on the repository and task. Read [agent approvals and security](https://developers.openai.com/codex/agent-approvals-security) before allowing network access or writes outside the workspace.

## Model Selection

Model availability changes by account, client release, and deployment path. Use the client's current model list and release documentation. Do not choose a workflow from an old model name or benchmark snapshot.

## Adoption Check

1. Install from the official [Codex repository](https://github.com/openai/codex) or documentation.
2. Choose ChatGPT or API authentication deliberately.
3. Start read-only or workspace-scoped.
4. Grant network or broader filesystem access only when the task requires it.
5. Review commands, diff, tests, and approvals before merging.
