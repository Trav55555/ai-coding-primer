---
title: Cody (Sourcegraph)
description: Enterprise Sourcegraph coding assistant for code-search and multi-repository workflows.
sidebar:
  order: 6
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: enterprise availability, clients, model providers, and deployment support. Verify the [current Cody documentation](https://sourcegraph.com/docs/cody).
:::

Cody is Sourcegraph's enterprise coding assistant built around Sourcegraph code search and code intelligence.

:::caution[Enterprise status]
Sourcegraph ended Cody Free and Pro and removed Cody from Enterprise Starter in July 2025. Cody Enterprise remains supported. See the [official plan-change notice](https://sourcegraph.com/changelog/cody-plan-changes) and [Cody FAQ](https://sourcegraph.com/docs/cody/faq).
:::

## Workflow Fit

Cody is relevant to organizations already using Sourcegraph for large or multi-repository codebases. Its value comes from connecting coding assistance to indexed code intelligence, not from a static model list.

## Deployment and Data Boundary

Cody Enterprise can be used with Sourcegraph Cloud or self-hosted Sourcegraph Enterprise. Model-provider, retention, jurisdiction, and network boundaries depend on that deployment and its completion configuration.

Review:

- [enabling Cody Enterprise](https://sourcegraph.com/docs/cody/clients/enable-cody-enterprise)
- [enterprise features](https://sourcegraph.com/docs/cody/enterprise/features)
- current model-provider and completion configuration

Do not infer “self-hosted Sourcegraph” means every model request stays inside your infrastructure.

## Adoption Check

1. Confirm that Cody Enterprise is part of the intended Sourcegraph deployment.
2. Map which repositories and code intelligence it can access.
3. Review the configured model-provider boundary.
4. Pilot one cross-repository investigation.
5. Compare retrieved context, review time, and false connections against normal code search.
