---
title: Fast-Changing Information
description: Where to put tool, model, pricing, benchmark, and privacy details that expire quickly.
---

Some AI coding information expires quickly. Keep it out of the core learning path.

The primer's durable pages should teach workflows, verification, context control, learning discipline, security boundaries, and the history behind those practices. Start with the [Development Practices Timeline](/ai-coding-primer/reference/development-practices-timeline/) for the durable historical frame. This page points to reference material that needs more frequent review.

:::caution[Check live sources]
Use these pages for decision shape, vocabulary, and what to verify. Do not treat static snapshots as current vendor truth.
:::

## What Expires Quickly

| Information type | Why it expires | Where it belongs |
|---|---|---|
| Exact prices | vendors change plans, discounts, bundles, and token rates | [Billing Models](/ai-coding-primer/models/pricing/) plus official pricing pages |
| Model rankings | benchmarks move after every model release | [Benchmarks That Matter](/ai-coding-primer/models/benchmarks/) plus live leaderboards |
| Tool capabilities | IDEs and CLIs ship features weekly | tool reference pages plus official docs |
| Privacy posture | data-retention and enterprise terms vary by plan | [Privacy Review Framework](/ai-coding-primer/security/privacy-comparison/) plus vendor policy docs |
| Quotas and rate limits | request caps and fair-use rules change often | official plan docs |
| Enterprise controls | SSO, audit, admin, and policy features vary by tier | official enterprise docs and procurement review |

## Review Rule

If a claim would be embarrassing when stale, keep it here or in a reference page.

Examples:

- "Tool X supports feature Y"
- "Model A leads benchmark B"
- "Plan C costs $N"
- "Provider D retains prompts for N days"
- "Product E includes SSO on tier F"

Durable pages can still mention the concept, but should not depend on the exact current value.

## How to Use Fast-Changing Pages

1. Start with a durable workflow page.
2. Identify the live facts you need to verify.
3. Check the relevant reference page for what questions to ask.
4. Confirm the exact numbers and terms in official docs before buying or standardizing.

## Live Sources to Prefer

- official vendor pricing and enterprise docs
- official model provider docs
- live benchmark leaderboards such as SWE-bench, LiveCodeBench, and Aider
- security advisories and vendor trust centers
- your organization's procurement, legal, and security review

## Maintenance Cadence

Review monthly or trim aggressively:

- benchmark score examples
- model names and capability claims
- pricing and billing examples
- tool feature claims
- privacy and retention comparisons
- MCP, plugin, and extension trust guidance

## Monthly Reference Sweep Checklist

Use this as a small maintenance pass, not a market-research project.

1. **Find perishable pages.** Check pages with `Reviewed:` metadata and pages under tools, models, privacy, benchmarks, templates, and fast-changing reference.
2. **Search for stale-value pressure.** Grep for exact prices, score tables, plan names, quotas, and ranking language.
3. **Check live sources only for claims you keep.** Official docs, trust centers, leaderboards, changelogs, and vendor policy pages are the source of truth.
4. **Remove precision you cannot maintain.** Replace exact scores, prices, quotas, or date-sensitive feature claims with decision criteria and live-source links.
5. **Update the reviewed date only when reviewed.** Do not bump metadata as a cosmetic change.
6. **Run the build and inspect changed pages.** Confirm the update did not pull reference material back into the core learning path.

Useful local checks:

```bash
grep -RIn "Reviewed:" site/src/content/docs/{tools,models,security,reference,templates}
grep -RIn "\$[0-9]\|per million\|best value\|budget pick\|leader" site/src/content/docs
npm run build
```

Exit criteria:

- exact values are either verified, removed, or clearly marked as examples
- vendor pages still read as appendix material
- durable workflow pages do not depend on current market facts
- the site builds cleanly

If a page cannot be maintained on that cadence, remove exact values and link to live sources instead.
