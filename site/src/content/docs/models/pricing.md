---
title: Billing Models
description: Subscription, usage-based, and request-based billing models for AI coding tools.
sidebar:
  order: 3
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: model availability, benchmark position, pricing, privacy terms, and provider feature support. Verify live docs and leaderboards before making current decisions.
:::


Do not choose an AI coding setup from a stale price table. Choose by billing model first, then verify current prices in official docs.

Pricing changes quickly, but the common billing shapes are stable enough to understand.

:::note[Fast-changing reference]
Exact prices, quotas, and plan names expire quickly. This page explains the billing models and gives example product categories. Always check official pricing pages before buying or standardizing.
:::

## The Main Billing Models

| Billing model | What you pay for | Common examples | Best fit | Main risk |
|---|---|---|---|---|
| Subscription | seat or user per month | AI IDE plans, GitHub Copilot-style seats, Claude/ChatGPT-style pro plans | predictable individual or team usage | hidden caps, fair-use limits, tier changes |
| Per token | model input/output usage | OpenAI API, Anthropic API, Google AI API, OpenRouter, Bedrock, Vertex | automation, custom tools, measured agent loops | runaway cost from long context or repeated retries |
| Per message / request | each chat, premium request, or agent turn | IDE chat quotas, premium model requests, hosted agent messages | casual or bounded interactive use | quota anxiety, unclear equivalence between “message” and actual compute |
| Compute / hosting | your own inference or sandbox infrastructure | local GPU, vLLM server, cloud GPU, self-hosted coding agent runner | privacy, control, high-volume internal use | ops burden and utilization waste |
| Enterprise contract | negotiated bundle | managed seats, security controls, audit, SSO, data terms | regulated teams and large rollouts | opaque pricing and procurement drag |

## Subscription Billing

Subscription pricing is the easiest to understand: you pay a recurring fee for access.

Common examples:

- AI IDE subscriptions
- editor assistant seats
- team plans for coding assistants
- consumer pro plans that include coding-capable models

Good for:

- individuals who want predictable monthly cost
- teams that need easy seat management
- workflows where usage is frequent but not heavily automated

Watch for:

- included model tiers
- premium request caps
- rate limits
- whether agentic usage is included or metered separately
- data retention and training defaults by plan

A subscription is not the same as unlimited compute. Treat “unlimited” as a product promise to verify, not an engineering guarantee.

## Per-Token Billing

Per-token billing charges for model input and output. This is common for APIs and custom automation.

Common examples:

- direct model provider APIs
- model aggregators
- cloud-platform model access
- internal tools built on hosted model APIs

Good for:

- custom agent harnesses
- CI or review automation
- batch analysis
- product features that call models programmatically
- teams that want cost attribution by project or workflow

Watch for:

- long-context prompts that silently multiply cost
- tool outputs pasted back into context
- repeated failed agent loops
- expensive reasoning or multimodal models
- separate charges for input, output, caching, embeddings, or tools

Practical rule: if the agent can read huge files, loop for a long time, or retry without approval, add a budget guardrail.

## Per-Message or Per-Request Billing

Some products expose billing or quotas as messages, premium requests, or agent turns instead of raw tokens.

This model is getting less clean over time. A “message” can map to very different amounts of compute depending on model, context size, tool calls, images, and agent steps.

Some vendors are moving away from simple message counting toward premium-request pools, usage credits, or hybrid models.

Common examples:

- IDE chat quotas
- premium model request allowances
- hosted coding-agent turns
- plans where standard models feel unlimited but frontier models consume credits

Good for:

- interactive use
- casual coding help
- bounded code review or explanation sessions
- users who do not want to think in tokens

Watch for:

- disappearing quota semantics: “message,” “request,” and “credit” may change meaning
- different cost weights for different models
- agent mode consuming many requests for one visible task
- resets by day, week, or month
- throttling after heavy usage

If a workflow depends on long-running agents, per-message pricing can be hard to reason about. Test real tasks before committing.

## Compute or Self-Hosted Billing

Self-hosted and local setups do not make inference free. They move cost from vendor bills to infrastructure and operations.

Common examples:

- local GPU workstation
- internal inference server
- cloud GPU running an open model
- private coding-agent sandbox infrastructure

Good for:

- sensitive code
- strong data-boundary requirements
- repeatable high-volume internal workloads
- teams with existing infrastructure expertise

Watch for:

- GPU utilization
- model quality tradeoffs
- maintenance and upgrades
- sandboxing and network controls
- hidden labor cost

## Enterprise Contracts

Enterprise pricing is often a negotiated bundle of seats, usage, support, security controls, and legal terms.

Good for:

- SSO and identity control
- admin policy management
- audit logs
- data-processing agreements
- procurement-approved rollout

Watch for:

- which models are included
- retention and training terms
- whether logs include prompts, completions, tool calls, or file contents
- admin visibility into usage
- how overages are handled

## Choosing Between Billing Models

Ask these questions before comparing prices:

1. Is usage mostly human-interactive or automated?
2. Do you need predictable monthly spend or granular usage attribution?
3. Can the agent run long loops or read large contexts?
4. Do you need enterprise identity, audit, or data controls?
5. What happens when usage spikes?

## Where to Check Live Data

- official product pricing pages
- official API pricing pages
- cloud marketplace pricing pages
- enterprise documentation and trust centers
- your own pilot usage logs

## Bottom Line

Subscriptions buy predictability. Per-token billing buys precision. Per-message billing buys simplicity but can hide complexity. Enterprise contracts buy controls. Self-hosting buys boundaries at the cost of operations.

Pick the billing model that matches the workflow, then verify the live numbers.
