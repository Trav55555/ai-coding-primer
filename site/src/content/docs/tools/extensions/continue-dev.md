---
title: Continue.dev
description: Open-source editor tooling for configurable coding-assistant workflows.
sidebar:
  order: 1
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: editor support, model providers, configuration, telemetry, and hosted services. Verify the [current Continue documentation](https://docs.continue.dev/).
:::

[Continue](https://continue.dev) provides open-source coding-assistant tooling for supported editors and configurable model providers.

## Workflow Fit

Continue fits teams that want to keep their existing editor while choosing hosted, gateway, or local model infrastructure.

Common workflow areas include:

- inline completion
- chat and repository context
- configurable model roles
- local or hosted provider endpoints
- project-level rules and configuration

## Data Boundary

A local model can reduce external inference traffic, but it does not make the whole workflow local automatically. Review:

- extension telemetry
- model and embedding endpoints
- repository indexing
- connected tools and services
- logs and configuration storage

“Bring your own key” means provider terms still apply. A local endpoint stays local only when all configured supporting services do too.

## Configuration Check

Use the [current configuration documentation](https://docs.continue.dev/customize/overview) rather than copying old model identifiers or editor shortcuts.

1. Assign a provider to each required role.
2. Keep credentials out of committed configuration.
3. Test context retrieval on a representative repository question.
4. Disable unused external integrations.
5. Inspect network traffic when a fully local boundary is required.

## Adoption Check

Compare the configured Continue workflow against the team's existing editor and verification loop. Provider flexibility is useful only if the resulting configuration remains understandable and maintainable.
