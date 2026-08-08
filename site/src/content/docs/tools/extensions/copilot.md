---
title: GitHub Copilot
description: GitHub coding assistant with editor, command-line, and repository workflows.
sidebar:
  order: 1
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: supported models, quotas, data handling, and enterprise controls. Verify [GitHub's current Copilot documentation](https://docs.github.com/en/copilot) before standardizing on this reference.
:::

[GitHub Copilot](https://github.com/features/copilot) provides coding assistance in supported editors, on GitHub, and through command-line and agent workflows.

## Workflow Fit

Copilot is a practical choice when a team already works in GitHub and supported editors and wants coding assistance tied to repository access and organization policy.

Current surfaces include:

- inline completion
- chat and multi-file editing
- repository-aware agent workflows
- command-line workflows
- organization and enterprise policy controls

Exact features differ by editor, account, policy, and rollout. Check the [feature documentation](https://docs.github.com/en/copilot/get-started/features) for the surface you intend to use.

## Access and Governance

Individual access emphasizes personal workflow. Organization and enterprise access adds centralized assignment and policy controls. Before rollout, verify:

- which features and models administrators can allow
- whether agents can create branches, pull requests, or execute workflows
- repository and content-exclusion policy
- billing and usage limits
- audit and review requirements

GitHub documents current controls under [Copilot policies](https://docs.github.com/en/copilot/concepts/policies).

## Data Boundaries

Do not infer data handling from the product name or subscription tier alone. It can depend on the selected model, feature, account type, and organization policy.

GitHub's [model-hosting documentation](https://docs.github.com/en/copilot/reference/ai-models/model-hosting) describes provider arrangements and training or retention boundaries. Recheck it during procurement and whenever enabling a new model or agent surface.

## Repository Instructions

Copilot supports repository instructions in `.github/copilot-instructions.md`. Support varies by environment and feature; use GitHub's [custom-instructions support matrix](https://docs.github.com/en/copilot/reference/custom-instructions-support).

```markdown
# Repository instructions

## Commands
- npm test
- npm run typecheck

## Boundaries
- Keep authentication tokens in secure cookies.
- Do not change public API schemas without approval.
```

Keep instructions short and test whether they improve representative tasks. They do not replace tests, policy checks, or review.

## Adoption Check

1. Select one supported editor or agent workflow.
2. Apply repository and organization policy before granting broad access.
3. Test with a bounded task and inspect the diff and executed commands.
4. Confirm data handling for the selected feature and model.
5. Measure review and rework before expanding use.
