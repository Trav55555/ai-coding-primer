---
title: Tabnine
description: Coding assistant with hosted, private, and air-gapped enterprise deployment options.
sidebar:
  order: 4
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: deployment requirements, supported features, telemetry, and enterprise controls. Verify the [current Tabnine documentation](https://docs.tabnine.com/).
:::

[Tabnine](https://www.tabnine.com/) provides code completion, chat, and enterprise deployment options.

## Workflow Fit

Tabnine is most relevant when deployment boundaries matter as much as model capability. Its documented options include hosted service, private installation, and fully air-gapped deployment.

## Deployment Boundary

Do not treat “self-hosted” and “air-gapped” as synonyms.

- A private installation can still send operational metrics or logs outside the environment, depending on configuration.
- A fully air-gapped installation is designed to keep service traffic inside the controlled network.
- Optional features may introduce additional endpoints or data requirements.

Review [deployment options](https://docs.tabnine.com/main/welcome/readme/architecture/deployment-options) and [privacy documentation](https://docs.tabnine.com/main/welcome/readme/privacy) for the exact architecture.

## Evaluation Check

1. Define the required network and data boundary.
2. List which completion, chat, attribution, and administration features must work inside it.
3. Inspect telemetry and log destinations.
4. Test installation and updates under the real network policy.
5. Evaluate suggestion quality on representative code before accepting infrastructure cost.

A private deployment improves control only when its egress, model, logs, updates, and administrator access are all understood.
