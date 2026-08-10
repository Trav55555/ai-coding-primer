---
title: Privacy Review Framework
description: Review one AI coding workflow for privacy, procurement, and contractual fit before approval.
sidebar:
  order: 2
---

:::note[Freshness metadata]
Reviewed: August 2026. Provider terms, account defaults, retention settings, enterprise controls, subprocessors, and regional processing paths change. Verify the exact workflow against current primary sources before approval.
:::

Use this framework to review one AI coding workflow before a team uses it with real code or work data. The output is an approval record, not a product ranking.

This page does not provide legal conclusions. For regulated, client, cross-border, employment, or contract-bound work, involve qualified legal, procurement, privacy, and security reviewers.

Related controls:

- [Quick Security Checklist](/ai-coding-primer/security/checklist/)
- [Technical Security and Data Paths](/ai-coding-primer/security/deep-dive/)
- [Team Threat Model](/ai-coding-primer/team/security-risks/)
- [Governance and Rollout](/ai-coding-primer/team/governance/)

## Review One Exact Workflow

Do not approve a tool name in the abstract. Approve a specific workflow.

Record:

```text
Workflow name:
Task type:
Repository or data class:
Client or project constraints:
User account, organization, and plan:
Client application and version:
Feature or mode:
Model or model provider path:
Extensions, plugins, MCP servers, or connected tools:
Network access and external services:
Credentials or identities available to the workflow:
Human approvals required:
```

Small differences can change the review. A local editor feature, a hosted chat, a background agent, a browser-connected agent, and a command-line tool may have different data paths even when sold under the same product name.

## Classify the Data

Classify every data type the workflow can read, generate, store, or transmit.

| Data type | Review question |
|---|---|
| Source code | Is it public, internal, confidential, client-owned, regulated, or export-controlled? |
| Prompts and instructions | Can they reveal architecture, vulnerabilities, roadmap, customers, or incidents? |
| Files and repository indexes | Are embeddings, indexes, snapshots, or search caches created? Where are they stored? |
| Logs and command output | Can they include secrets, customer data, stack traces, tokens, paths, or incident details? |
| Screenshots and browser content | Can the tool capture private systems, tickets, dashboards, email, or customer records? |
| Tool traces and approvals | Are file reads, tool calls, commands, and reviewer decisions retained? |
| Generated code and summaries | Do outputs include derived confidential information or copied licensed material? |
| Credentials and identities | Which tokens, shell variables, cloud profiles, browser sessions, or service accounts are reachable? |

If the team cannot classify the data, keep the workflow out of sensitive repositories until classification is complete.

## Map Processing Parties and Regions

Draw the data path before relying on any privacy setting.

```text
user and repository
  -> client application and local storage
  -> hosted service, gateway, or model provider
  -> subprocessors, support systems, abuse-monitoring systems, and logs
  -> connected tools, extensions, or external actions
  -> backups, exports, deletion systems, and audit records
```

For each step, record:

- the legal entity or service operator
- the data categories received
- where the data is processed, stored, backed up, or accessed from
- whether support, abuse monitoring, analytics, or telemetry can access it
- which subprocessors or model providers may receive it
- which contract, data-processing agreement, transfer mechanism, or customer terms apply
- how the organization can disable, restrict, export, delete, or audit the data

Treat region and transfer questions as review inputs. Do not infer acceptability from a country name alone.

## Verify Current Primary Terms

Use current primary sources: product terms, privacy notice, data-processing agreement, subprocessor list, trust-center documents, enterprise contract, admin documentation, and support commitments. Archive or link the exact sources used in the review record.

Verify these points for the exact account, feature, and model path:

| Topic | What to verify |
|---|---|
| Training use | Whether prompts, code, completions, files, embeddings, screenshots, feedback, or tool traces can be used to train or improve models or services. |
| Retention | How long prompts, completions, uploaded files, repository indexes, logs, traces, abuse-monitoring records, and backups are retained. |
| Abuse monitoring and support access | What content may be reviewed by automated systems or humans, for what purpose, and whether enterprise controls or exceptions exist. |
| Logs and telemetry | Which local and hosted logs are created, whether optional telemetry can be disabled, and whether logs contain sensitive content. |
| Subprocessors and model providers | Which parties may process data, whether they vary by feature or selected model, and how changes are announced. |
| Deletion and export | What users and administrators can delete, what remains in backups or audit records, and what timelines apply. |
| Security incidents | Notification commitments, customer responsibilities, evidence available to customers, and escalation paths. |
| Enterprise controls | SSO, SCIM, role-based access, policy controls, retention settings, audit logs, data residency options, admin exports, and model or feature restrictions. |
| Contract and transfer needs | Whether the workflow requires a data-processing agreement, sector addendum, client approval, regional transfer assessment, procurement review, or other contractual step. |

Do not rely on labels such as “privacy mode,” “zero retention,” “enterprise,” or “local” without checking what data and features the label covers.

## Do Not Infer Privacy From Deployment Labels

“Local,” “self-hosted,” “enterprise,” and “BYOK” describe only part of a data path. Telemetry, gateways, model providers, embeddings, logs, connected tools, support access, and backups may cross the assumed boundary. Use [Technical Security and Data Paths](/ai-coding-primer/security/deep-dive/) to inspect observable behavior, and use current provider evidence and contracts for server-side behavior that local testing cannot establish.

## Decide Required Controls

Tie the approval to controls, not trust in a product.

Possible controls include:

- approved repositories and data classes only
- project-scoped file access
- no secrets, customer data, production logs, or regulated data unless explicitly approved
- disabled optional telemetry where policy requires it
- approved account type and organization policy
- SSO and managed identity for team use
- allowed model or region list
- network destination allowlist
- no package installation, browser automation, MCP servers, or external actions without approval
- short-lived, scoped credentials
- audit logs and retention settings
- human review for consequential diffs and external actions
- incident owner, revocation path, and deletion request process
- fixed review cadence for terms and subprocessors

If a necessary control or contractual requirement is unavailable or unverifiable, reject the workflow for the affected data class. Use conditional approval only for a bounded condition with an owner and due date that must be satisfied before use.

## Approval Record Template

Create a dated record for each reviewed workflow.

```md
# AI Coding Privacy Review Record

Reviewed on:
Next review:
Decision: approve / conditionally approve / reject
Decision owner and required reviewers:

## Scope
Workflow, task, repository, and data class:
Account, plan, client, feature, and version:
Model/provider path and connected tools:
Data allowed and prohibited:
Credentials or identities reachable:

## Processing and terms
Processing parties, regions, and subprocessors:
Training, retention, monitoring, logging, deletion, and incident findings:
Contract, transfer, and enterprise-control requirements:
Primary sources and access dates:

## Conditions and controls
Required identity, data, permission, network, logging, and review controls:
Open condition, owner, and due date:
Revocation, deletion, and incident path:

## Rationale
Why this exact workflow is approved, conditional, or rejected:
```

A review record should be specific enough that another reviewer can reproduce the decision from the listed sources. If the sources, terms, account type, feature, model path, or data class changes, repeat the review.

## Stop Conditions

Reject or pause the workflow when:

- the data class conflicts with current terms, contract requirements, or organization policy
- training, retention, deletion, monitoring, or subprocessor behavior cannot be determined for the exact feature
- the team cannot identify all processing parties or relevant regions for sensitive work
- required legal, procurement, privacy, or security review has not happened
- credentials or external actions exceed the task's need
- audit, revocation, incident, or deletion paths are missing for team use
- the vendor or deployment path changes materially and the approval record is stale

## Next Step

After the privacy review, use [Team Threat Model](/ai-coding-primer/team/security-risks/) and [Governance and Rollout](/ai-coding-primer/team/governance/) to decide whether the workflow fits team policy and repository risk.
