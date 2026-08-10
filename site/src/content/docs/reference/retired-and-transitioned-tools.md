---
title: Retired and Transitioned Tools
description: How to evaluate old AI coding tool pages, migration notices, and successor products without treating stale vendor material as current guidance.
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: product status, account eligibility, successor product names, migration windows, supported authentication paths, plugin availability, and pricing. Verify official vendor sources before relying on a retired or transitioned tool.
:::

Use this page when a blog post, README, install command, teammate note, or old primer page points to an AI coding tool that may have been renamed, sunset, merged, or replaced.

The reader job is simple: decide whether to keep, migrate, archive, or reject a workflow that depends on a tool whose status is no longer stable.

This page is not a catalog of dead products. It preserves the migration lessons from retired tools while keeping current vendor truth in official sources.

## Separate Three Questions

1. **What did the old workflow do?** Completion, chat, terminal agent, background agent, messaging gateway, model access, or repository indexing.
2. **What does the vendor currently say?** Sunset notice, migration path, enterprise exception, API-key continuation, or renamed project.
3. **What should the reader do now?** Recreate the workflow with least privilege, verify data handling, and run a small acceptance test before standardizing.

Do not let a working installer answer all three questions. A package can still install after the service, account path, or intended migration has changed.

## Current Vendor Statements to Verify

These examples are snapshots, not durable recommendations.

| Tool or product | Vendor statement reviewed August 2026 | Official source to check |
|---|---|---|
| Gemini CLI | Google's repository announcement said Gemini CLI stopped serving requests for free-tier, Google AI Pro, and Google AI Ultra individual accounts on June 18, 2026; enterprise Gemini Code Assist and API-key paths were described as unaffected at that time. | [Gemini CLI transition announcement](https://github.com/google-gemini/gemini-cli/discussions/27274) and [service-status update](https://github.com/google-gemini/gemini-cli/discussions/28017) |
| Supermaven | Supermaven's official announcement said the standalone product was sunset in November 2025 and directed users toward Cursor. | [Supermaven sunset announcement](https://supermaven.com/blog/sunsetting-supermaven) |

Treat this table as a reading aid. The official source, current account, contract, and product documentation decide the live status.

## Decision Procedure

Use this checklist before keeping or replacing a retired-tool workflow.

1. **Identify the dependency.** Name the exact CLI, extension, package, hosted service, model path, account type, and version if known.
2. **Find the official status.** Prefer the vendor repository, docs, changelog, trust center, migration notice, or package registry over third-party posts.
3. **Classify the old workflow.** Was it completion-first, IDE-integrated, terminal-agent, broader agent platform, or provider-access glue?
4. **Record the data path.** List code, prompts, repository indexes, logs, screenshots, credentials, and telemetry that the old tool could access.
5. **Record authority.** List file writes, shell commands, package installs, browser actions, messaging, deployment, scheduled jobs, and external API calls.
6. **Choose the smallest successor.** Replace the workflow capability, not the brand. A retired completion tool does not require adopting an autonomous agent if inline suggestions were the only useful part.
7. **Recreate policy boundaries.** Reapply ignore files, workspace scoping, account controls, approvals, network limits, and credential rules in the successor tool.
8. **Run a bounded pilot.** Use one repository, one task, no production credentials, and an explicit verification signal.
9. **Archive the old path.** Remove stale setup docs, global packages, extensions, tokens, scheduled jobs, and bookmarks that make accidental reuse likely.
10. **Set a review date.** If the replacement depends on fast-changing vendor behavior, mark it as reference material and review it on the cadence in [Fast-Changing Information](/ai-coding-primer/reference/fast-changing-info/).

## Migration Lessons That Last

- **Migrate workflows, not product names.** Preserve the task shape: completion latency, repo-aware editing, terminal automation, model access, or background operation.
- **Recheck authority after migration.** A successor product may add broader filesystem, command, cloud, messaging, or memory access than the retired tool had.
- **Do not inherit old trust decisions.** Acquisition, rebranding, account migration, and package changes can alter data handling and support paths.
- **Keep reversibility.** Prefer exportable instructions, ordinary Git diffs, scoped credentials, and documented setup over opaque product state.
- **Avoid stale precision.** Old context limits, quotas, prices, model names, and feature claims are reference clues, not current facts.

## When to Keep Historical Pages

Keep a short historical reference when it teaches a durable distinction or prevents confusion during migration.

Good reasons:

- the tool was common enough that readers still encounter old setup instructions
- the product illustrates a workflow class, such as completion-first tooling versus autonomous agents
- the migration affects security, account, data-retention, or authority boundaries
- official transition notices are easy to link and verify

Poor reasons:

- preserving a complete vendor feature list
- maintaining old prices, quotas, benchmark claims, or plan names
- ranking the retired product against current tools
- filling a market map

## Limitations

This page does not establish current product availability. It does not replace vendor migration notices, contracts, procurement review, or security review. It also does not say that a vendor-directed successor is the correct workflow choice for your team.

If the tool can read private code, retain prompts, run commands, install packages, trigger external systems, or expose a messaging gateway, use the security pages below before adopting the replacement.

## Continue the Review

- [Workflow and Stack Criteria](/ai-coding-primer/tools/comparison/) for choosing the lightest workflow shape that fits the job
- [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/) for matching the replacement to bug fixes, features, refactors, or exploration
- [Quick Security Checklist](/ai-coding-primer/security/checklist/) for data, credential, and permission boundaries
- [Team Threat Model](/ai-coding-primer/team/security-risks/) for authority, egress, unattended work, and incident ownership
- [Privacy Comparison](/ai-coding-primer/security/privacy-comparison/) for live vendor data-handling checks
- [Fast-Changing Information](/ai-coding-primer/reference/fast-changing-info/) for maintenance rules on stale vendor facts
