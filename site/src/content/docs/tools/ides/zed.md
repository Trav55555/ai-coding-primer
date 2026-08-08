---
title: Zed
description: Open-source native editor with first-party and external agent workflows.
sidebar:
  order: 2
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: supported models, providers, agents, retention, and organization controls. Verify the [current Zed AI documentation](https://zed.dev/docs/ai/overview).
:::

[Zed](https://zed.dev) is an open-source native editor with collaboration, first-party agent features, external agents, and provider configuration.

## Workflow Fit

Zed fits developers who want a fast native editor and the option to use Zed-hosted models, provider API keys, local models, or external agents.

## Data Boundary

The boundary changes with the selected path:

- Zed-hosted model requests follow Zed's service and provider arrangements.
- Bring-your-own-key requests follow the selected provider's terms.
- Local models remain local only if configuration and tools do not introduce external calls.
- External agents and terminal threads follow their own processes, permissions, and data policies.

Read [AI privacy and security](https://zed.dev/docs/ai/privacy-and-security) and [business privacy](https://zed.dev/docs/business/privacy). Do not summarize every path as “no retention” or “full privacy.”

## Agent Controls

Zed documents first-party and external workflows under [Agents](https://zed.dev/docs/ai/agents). Before enabling them:

1. identify which process runs commands
2. review filesystem and network permissions
3. confirm whether organization controls cover BYOK and external agents
4. require repository checks and diff review

## Adoption Check

Choose the editor for its complete workflow, not a static model list. Pilot the exact provider and agent path the team would deploy.
