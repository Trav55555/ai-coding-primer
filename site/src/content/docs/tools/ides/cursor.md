---
title: Cursor
description: VS Code-based editor with integrated coding-agent workflows.
sidebar:
  order: 1
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: models, quotas, retention, and enterprise controls. Verify [Cursor's current documentation](https://docs.cursor.com/).
:::

[Cursor](https://cursor.com) is a VS Code-based editor with completion, chat, multi-file editing, and agent workflows.

## Workflow Fit

Cursor fits developers who want coding assistance integrated into an editor rather than operated mainly from a separate terminal client.

Current workflow areas include:

- inline completion
- repository-aware chat and editing
- local agent execution
- remote background agents
- project and user rules

## Data Boundaries

Cursor's data handling depends on Privacy Mode, workspace policy, selected model, and feature.

Cursor says standard model requests under Privacy Mode use zero-data-retention arrangements. Background agents are different: they run in remote environments and require temporary retention while a task runs. They also have network access.

Before using sensitive code, read [Cursor's data-use documentation](https://cursor.com/data-use) and [background-agent documentation](https://docs.cursor.com/background-agent). Verify subprocessors and enterprise controls through the vendor's current trust materials.

## Project Rules

Current project rules live under `.cursor/rules`. Older `.cursorrules` examples should not be treated as the current default.

Use rules for concise repository constraints:

```markdown
---
description: Repository checks and boundaries
alwaysApply: true
---

- Run npm test before reporting completion.
- Do not change public API schemas without approval.
```

Check the [rules documentation](https://docs.cursor.com/context/rules) because formats and feature support can change.

## Background-Agent Boundary

A background agent is not merely a longer local chat. Treat it as remote execution:

1. inspect repository and secret access
2. restrict branch and deployment permissions
3. review network assumptions
4. require tests and a diff
5. verify retention and deletion behavior

## Adoption Check

Start with a local, bounded edit. Enable background execution only after the team has reviewed remote permissions, data handling, and recovery procedures.
