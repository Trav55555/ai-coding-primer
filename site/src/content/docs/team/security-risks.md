---
title: Team Threat Model
description: Choose permissions, isolation, and review controls for AI-assisted engineering workflows.
---

A team threat model should start with the workflow's data and authority, not the product name. Use this page to decide which workflows are acceptable, which controls they require, and which should remain prohibited.

For technical inspection and containment procedures, use [Technical Security and Data Paths](/ai-coding-primer/security/deep-dive/). For policy and rollout structure, use [Governance and Rollout](/ai-coding-primer/team/governance/).

## Four Questions

For each workflow, record:

1. **Sensitive data:** Which code, credentials, logs, customer data, or internal documents can it read?
2. **Untrusted input:** Can it read cloned repositories, web pages, tickets, messages, dependency documentation, or user content?
3. **Authority:** Can it write files, run commands, install packages, call tools, or change external systems?
4. **Egress and effects:** Can it communicate externally, publish changes, deploy, send messages, or create costs?

Simon Willison calls the combination of private data, untrusted content, and external communication the [“lethal trifecta”](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/). Treat it as a useful practitioner threat model, not a formal guarantee that removing one element eliminates risk.

## Classify the Workflow

| Workflow | Main exposure | Minimum team control |
|---|---|---|
| Suggestion or chat without tools | prompts and pasted context | approved data classes and account terms |
| Repository-aware local edit | code, filesystem writes, local commands | project-scoped access, diff review, relevant checks |
| Networked coding agent | untrusted remote content plus local authority | sandbox, egress policy, approval for installs and external calls |
| Background or scheduled agent | persistent state, unattended actions, ambient credentials | isolated identity, short-lived credentials, trigger policy, audit trail, kill switch |
| Messaging or webhook-connected agent | untrusted inbound triggers and external effects | sender allowlist, channel separation, action approvals, rate and spend limits |

A convenient workflow is not acceptable when the team cannot describe its identity, data path, and rollback.

## Threats the Policy Must Cover

### Prompt injection and untrusted context

Instructions can appear in repositories, web pages, issues, logs, or tool output. OWASP classifies direct and indirect prompt injection as a leading risk and recommends least privilege and control over model access to backend systems.

Team rule: untrusted content must not be able to silently expand tool authority. Require confirmation for consequential actions and separate reading from acting where practical.

### Excessive agency

OWASP describes excessive agency as damage caused by excessive functionality, permissions, or autonomy. A strong model does not compensate for an overpowered account.

Team rule: grant the narrowest file, command, credential, and network access that completes the task. Broad access should be exceptional, logged, and time-bounded.

### Software and agent supply chain

Packages, MCP servers, extensions, skills, model providers, and installer scripts add executable or data-processing dependencies.

Team rule: require provenance, review, version pinning, controlled installation, and rollback. Treat a new MCP server or skill as a dependency change, not a prompt preference.

### Persistent and autonomous state

Long-running agents can reuse stale approvals, accumulate poisoned memory, or act from public triggers while no reviewer is present.

Team rule: isolate client and personal contexts, review persistent state writes, use dedicated service identities, and provide a tested disable path.

## Minimum Policy Baseline

This page owns the policy decision: which controls a workflow requires. [Technical Security and Data Paths](/ai-coding-primer/security/deep-dive/) owns inspection and containment procedures.

A practical baseline for team use:

- define allowed data classes and account types
- keep production and personal credentials out of normal agent sessions
- deny network access unless the workflow needs it
- require approval for package installation, credential access, deployment, messaging, destructive commands, and cross-repository writes
- require human review of consequential diffs
- log enough tool and external actions to reconstruct an incident
- test rollback and credential revocation
- review new tools, extensions, MCP servers, and skills as supply-chain changes

Human approval is not sufficient when reviewers approve requests habitually or cannot see the relevant context. Pair approval with constrained authority and useful evidence.

## Decision Record

For each approved workflow, record:

```text
Workflow:
Allowed repositories and data classes:
Agent identity:
Allowed files and commands:
Network destinations:
Actions requiring approval:
Required checks and review:
Logs retained:
Rollback and kill switch:
Owner and review date:
```

If a field is unknown, the workflow is not ready for broad rollout.

## Incident-Response Ownership

Before approving a workflow, assign the incident owner and connect it to the organization's existing response process. When misuse or compromise is suspected:

1. Activate that process and stop unattended triggers.
2. Use the containment and evidence checklist in [Technical Security and Data Paths](/ai-coding-primer/security/deep-dive/).
3. Notify affected data, repository, security, and service owners.
4. Record which policy or technical control failed before restoring the workflow.

## Sources and Next Steps

- [OWASP LLM01: Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- [OWASP LLM03: Supply Chain](https://genai.owasp.org/llmrisk/llm032025-supply-chain/)
- [OWASP LLM06: Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/)
- [OpenSSF Principles for Package Repository Security](https://repos.openssf.org/principles-for-package-repository-security.html)
- [Technical Security and Data Paths](/ai-coding-primer/security/deep-dive/)
- [Governance and Rollout](/ai-coding-primer/team/governance/)
