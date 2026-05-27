---
title: Privacy Comparison
description: Detailed privacy analysis of AI coding tools.
sidebar:
  order: 2
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: exact feature support, pricing, quotas, privacy terms, and enterprise controls. Verify live vendor docs before choosing or standardizing on this reference.
:::


Privacy characteristics of major AI coding tools change by plan, provider, and enterprise contract.

Use this page for the decision shape. Verify exact retention, training, jurisdiction, and subprocessors in live vendor docs before approving a tool.

## Comparison Questions

| Question | Why it matters |
|---|---|
| Is the client open source or inspectable? | Affects auditability, not necessarily privacy by itself |
| Can it run with local or BYOK models? | Changes where code and prompts are processed |
| Are prompts or file contents used for training? | Determines whether code can become training data |
| How long are prompts, completions, logs, and tool traces retained? | Retention is often plan-specific |
| Which legal entity and jurisdiction process the data? | Matters for regulated and cross-border work |
| Are enterprise controls available? | SSO, audit logs, policy controls, and DPAs usually live on higher tiers |

## More Private Options

For maximum privacy, prefer local or self-hosted setups where code, prompts, and tool outputs stay inside your controlled environment.

Examples include local-model workflows with Continue.dev, Zed, OpenCode, or Aider.

The trade-off is capability and operations. Local setups require capable hardware, model maintenance, and a realistic understanding of current model quality.

## Hidden Gotchas to Verify

Do not rely on old privacy screenshots or blog posts. Verify these details in current vendor docs and contracts:

- whether privacy mode covers prompts, completions, file contents, embeddings, screenshots, and tool traces
- whether consumer and business plans have different retention or training defaults
- whether abuse-monitoring logs are retained, and whether enterprise waivers exist
- whether subprocessors or model providers differ by selected model
- whether BYOK changes data handling or only billing

## By Use Case

### Personal Projects
Most tools are viable. Enable privacy mode if available and avoid pasting secrets.

### Client Work (NDA)
Prefer approved enterprise, BYOK, local, or self-hosted workflows.

Avoid any setup where training, retention, or subprocessors conflict with the client agreement.

### Enterprise/Regulated
Require procurement and security review.

Verify DPA, subprocessors, audit logs, SSO/SCIM, retention, training use, and incident-response commitments.

## Jurisdiction Notes

| Location | Risks |
|----------|-------|
| **US** | CLOUD Act, FISA 702 |
| **EU** | Generally stricter protections |
| **China** | PIPL, data localization requirements |

For EU companies: Consider Schrems II implications with US tools.

## Next Steps

- [Privacy Deep Dive](/ai-coding-primer/security/deep-dive/) — technical details
- [Security Risks](/ai-coding-primer/team/security-risks/) — threats and mitigations
