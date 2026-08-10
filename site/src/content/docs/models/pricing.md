---
title: Billing Models
description: Understand how AI coding workflows consume seats, usage, requests, compute, and contracted capacity.
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: prices, quotas, plan names, included models, overage rules, and enterprise terms. Verify the exact account and feature in current official sources before buying or standardizing.
:::

Use this page after choosing a workflow and access boundary. It explains durable billing mechanisms, not current prices.

## Identify the Meter

### Subscription

A recurring seat or account fee buys access to a defined product tier.

Works well when human use is frequent and predictable. Check model access, feature-specific limits, throttling, overages, and whether background or agent work uses a separate meter. “Unlimited” is a plan term to verify, not an engineering guarantee.

### Usage

The provider charges for measured consumption such as model input, output, cached context, tool calls, or other units.

Works well for automation and cost attribution. Long context, repeated tool output, retries, and parallel agents can multiply consumption. Add task budgets and stop conditions when a workflow can loop without immediate human attention.

### Request or credit

The product counts messages, premium requests, agent turns, or credits rather than exposing raw model usage.

Works well for bounded interactive work. The risk is an unstable abstraction: one visible task may consume several weighted requests, and the meaning of a request can change by model or feature. Test the intended task rather than estimating from chat count.

### Compute or self-hosting

The organization pays for hardware, cloud compute, storage, networking, and operation of its own inference or agent infrastructure.

Works well when deployment control or sustained internal volume justifies the operational burden. Include utilization, maintenance, upgrades, observability, sandboxing, and staff time. Self-hosted inference is not free inference.

### Enterprise contract

A negotiated agreement can combine seats, usage, support, identity controls, audit features, data terms, and service commitments.

Works well when procurement and governance requirements dominate. Verify which product surfaces and models the agreement covers, how overages work, and whether security or data controls are contractual or merely configurable features.

## Map Billing to the Workflow

Before comparing prices, record:

1. **Workflow:** completion, attended editing, long-running agent, review automation, or another defined path.
2. **Unit of work:** for example, one bounded bug fix or one review run.
3. **Expected exposure:** context size, tool output, retries, parallel work, and background duration.
4. **Required controls:** usage cap, approval point, alert, timeout, or automatic stop.
5. **Owner:** who reviews usage and can disable or narrow the workflow.

Do not use generated lines of code or prompt count as value measures. Compare the billing record with task completion, verification results, review time, rework, and defects.

## Run a Small Cost Check

Use several representative tasks before standardizing:

- start from the same repository state and acceptance evidence
- record every billing meter the product exposes
- include failed attempts and reviewer time
- test the stop control rather than assuming it works
- note which data is estimated, delayed, or unavailable

A low-cost demonstration does not predict an unattended or repository-wide workflow. Re-run the check when the model, feature, account tier, or agent authority changes materially.

## Questions for Procurement and Operations

- Which events consume the meter?
- Are different models or features weighted differently?
- What resets, rolls over, expires, or incurs overage?
- Can administrators set limits and receive timely alerts?
- Can usage be attributed to a team, repository, or workflow?
- What happens when a limit is reached: stop, throttle, downgrade, or charge more?
- Which identity, audit, privacy, and support controls require a different contract?

Use the [Privacy Review Framework](/ai-coding-primer/security/privacy-comparison/) for data and contract review. A favorable billing mechanism does not establish an acceptable data boundary.

## Where to Verify Live Terms

Check the official product or API pricing page, account administration documentation, enterprise agreement, and your own pilot usage records. Record the source and review date with any team decision.

## Next Steps

- [Choose a Workflow and Stack](/ai-coding-primer/learn/beginner/choose-your-tool/) — choose the workflow and access model first
- [Capability Patterns](/ai-coding-primer/models/capabilities/) — test the least costly capability class that meets the task requirements
- [Fast-Changing Information](/ai-coding-primer/reference/fast-changing-info/) — maintain volatile prices, quotas, and plan details
