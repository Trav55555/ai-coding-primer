---
title: Privacy Comparison
description: Detailed privacy analysis of AI coding tools.
sidebar:
  order: 2
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: exact feature support, pricing, quotas, privacy terms, and enterprise controls. Verify live vendor docs before choosing or standardizing on this reference.
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

## More Controlled Deployment Options

Local or self-hosted setups can keep model inference inside controlled infrastructure. They are not automatically private: extensions, telemetry, embeddings, tool servers, logs, and update systems may still communicate externally.

Continue, Zed, OpenCode, and Aider can participate in local-model workflows. Verify the complete data path rather than inferring it from the client.

The trade-off is capability and operations. Local setups require suitable hardware, model maintenance, egress controls, and realistic evaluation of model quality.

## Hidden Gotchas to Verify

Do not rely on old privacy screenshots or blog posts. Verify these details in current vendor docs and contracts:

- whether privacy mode covers prompts, completions, file contents, embeddings, screenshots, and tool traces
- whether consumer and business plans have different retention or training defaults
- whether abuse-monitoring logs are retained, and whether enterprise waivers exist
- whether subprocessors or model providers differ by selected model
- whether BYOK changes data handling or only billing

## By Use Case

### Personal Projects

Classify the repository and connected accounts before choosing a tool. Review data-use settings and never expose credentials.

### Client Work (NDA)
Prefer approved enterprise, BYOK, local, or self-hosted workflows.

Avoid any setup where training, retention, or subprocessors conflict with the client agreement.

### Enterprise/Regulated
Require procurement and security review.

Verify DPA, subprocessors, audit logs, SSO/SCIM, retention, training use, and incident-response commitments.

## Jurisdiction and Transfer Review

Jurisdiction is a legal and procurement question, not a country ranking. Ask:

- Which legal entity provides the service?
- Where are prompts, code, logs, backups, and support data processed or stored?
- Which subprocessors and model providers can receive them?
- What transfer mechanism and data-processing agreement apply?
- Which government-access, localization, sector, or client-contract rules apply to this workload?

Have qualified legal and security reviewers evaluate current terms for regulated or cross-border work.

## Next Steps

- [Privacy Deep Dive](/ai-coding-primer/security/deep-dive/) — technical details
- [Security Risks](/ai-coding-primer/team/security-risks/) — threats and mitigations
