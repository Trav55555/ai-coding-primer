---
title: Devin Desktop (formerly Windsurf)
description: The transitioned Windsurf desktop editor, with Cascade and Devin agent workflows.
sidebar:
  order: 3
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: product naming, agent modes, models, data handling, deployment options, and enterprise controls. Verify the [current product documentation](https://docs.devin.ai/desktop/getting-started).
:::

[Devin Desktop](https://devin.ai/desktop) is the current name for the desktop product previously documented as Windsurf. Older Windsurf documentation and feature names such as Cascade remain relevant to parts of the product, while current onboarding describes Devin Desktop and Devin Local. Treat the transition as active rather than assuming old feature or account descriptions still apply.

## Workflow Fit

This workflow fits developers who want an integrated editor where local and hosted agents can inspect a repository, propose multi-step changes, execute tools, and present results for review.

Confirm which agent mode is active. Cascade, Devin Local, background work, and deployment features can have different authority and data paths.

## Data and Deployment Boundary

Do not rely on old claims about retention, regional hosting, certifications, or self-hosting without checking current contract and security documentation.

Different features can have different boundaries. For example, the App Deploys documentation says project code is uploaded for managed preview deployment and served from a public preview URL. Treat deployment, background execution, model requests, and local editing as separate data flows.

Before use, verify:

- selected agent, model, and provider handling
- retention and training terms
- repository indexing and remote-execution behavior
- deployment destination and public exposure
- enterprise identity, role, and audit controls

## Review Loop

For a bounded agent task:

1. state behavior, non-goals, and acceptance evidence
2. identify the active agent mode and execution location
3. restrict credentials and external services
4. inspect proposed commands
5. run repository checks
6. review the final diff and every deployment action

## Adoption Check

Pilot the exact feature path the team intends to use. Do not infer privacy, execution, or compliance properties from the desktop product as a whole.
