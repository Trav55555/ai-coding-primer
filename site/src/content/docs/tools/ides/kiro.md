---
title: Kiro
description: AWS agentic IDE and CLI with spec-driven workflows.
sidebar:
  order: 5
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: models, credits, data handling, and enterprise controls. Verify the [current Kiro documentation](https://kiro.dev/docs/).
:::

[Kiro](https://kiro.dev) is an AWS agentic development environment with IDE and command-line workflows. Kiro is generally available; older descriptions of it as a preview product are stale.

## Workflow Fit

Kiro emphasizes spec-driven development: requirements, design decisions, implementation tasks, and acceptance checks can be recorded before an agent changes code.

That structure is useful when the spec remains a reviewable engineering artifact. Generated requirements or tests still need human validation.

## Spec-Driven Workflow

```markdown
# Feature: Session expiry

## Behavior
- Expire inactive sessions after the configured interval.
- Preserve active sessions.

## Non-goals
- Do not change login or token formats.

## Acceptance evidence
- Unit tests cover active and expired sessions.
- Existing authentication integration tests pass.
```

Then review the proposed design and task breakdown before implementation.

## Access and Data Boundaries

Kiro subscriptions can cover multiple product surfaces, including IDE and CLI workflows. Models and credit use change frequently; use the [live model documentation](https://kiro.dev/docs/models/) and pricing page rather than a static list.

Kiro's data-protection terms differ between individual and enterprise use. Its documentation describes telemetry and content-collection controls, storage location, and cross-region processing caveats. Review [privacy and security](https://kiro.dev/docs/privacy-and-security/) for the exact account and product surface.

## Permission Boundary

Before enabling broad agent execution:

1. review command-approval and trusted-command settings
2. protect sensitive paths from unattended writes
3. constrain credentials and cloud permissions
4. require acceptance checks and diff review
5. confirm organization model policy

## Adoption Check

Use one feature where a written specification helps resolve ambiguity. Compare the resulting review and rework with a normal bounded-agent workflow; do not keep the extra ceremony if it adds no useful control.
