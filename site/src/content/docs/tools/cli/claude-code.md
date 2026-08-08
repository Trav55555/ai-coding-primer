---
title: Claude Code
description: Anthropic's coding agent for terminal and editor workflows.
sidebar:
  order: 1
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: account eligibility, model availability, retention, and enterprise controls. Verify the [current Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code/overview).
:::

Claude Code is Anthropic's coding agent for terminal, editor, and automation workflows.

## Workflow Fit

Claude Code can inspect repositories, edit files, run commands, use subagents, and connect to external tools. It fits workflows that need a hosted coding agent with explicit repository instructions and permission controls.

## Access Model

Anthropic's current setup documentation supports paid Claude subscriptions, Claude Console accounts, and selected cloud-provider paths. Eligibility changes, so check [setup and authentication](https://docs.anthropic.com/en/docs/claude-code/setup) before rollout.

Use Anthropic's official installer or package path from that page rather than copying an old installation command from a third-party guide.

## Data Boundaries

Consumer and commercial accounts have different data-use terms.

- Consumer users can control whether their Claude and Claude Code data may be used for model improvement.
- Anthropic says commercial usage under Team, Enterprise, API, and supported cloud-provider terms is not used to train generative models by default.
- Retention depends on account type, privacy settings, features, and contractual arrangements.

Read [Claude Code data usage](https://docs.anthropic.com/en/docs/claude-code/data-usage) and [security guidance](https://docs.anthropic.com/en/docs/claude-code/security) for current details. Do not compress these distinctions into a single “privacy mode” value.

## Repository Instructions

Claude Code reads project guidance from `CLAUDE.md` files.

```markdown
# Project context

## Commands
- npm test
- npm run lint

## Boundaries
- Do not alter database migrations without approval.
- Keep authentication tokens in secure cookies.
```

Keep instructions task-relevant. Tests, permission settings, and review remain authoritative.

## Adoption Check

1. Choose the account or cloud-provider path.
2. Review data-use and retention terms for that path.
3. Configure permissions before opening a sensitive repository.
4. Start with a bounded task and explicit stop point.
5. Inspect commands, diff, tests, and unresolved risks before merging.
