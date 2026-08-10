---
title: Agent Platform Boundaries
description: Decide when broader agent platforms, gateways, memory systems, skills, and scheduled automation need stronger boundaries than ordinary coding assistants.
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: supported integrations, execution backends, installer behavior, package metadata, security controls, messaging channels, and hosted deployment options. Verify official project documentation before installing or standardizing on any agent platform.
:::

Use this page when a tool is more than an editor extension or terminal coding assistant.

The reader job is to decide whether a broader agent platform is appropriate, and if so, where to draw boundaries around data, authority, triggers, memory, skills, and external effects.

An agent platform can be useful when the workflow needs persistent assistants, chat or device gateways, scheduled tasks, reusable skills, memory, multiple execution backends, or coordination across tools. Those same features make the security and operations surface larger than a single repository edit.

## Vendor Statements Versus Editorial Guidance

The named projects below are examples of platform shapes. Their exact features change.

| Project | Vendor or project statement reviewed August 2026 | Official source to check |
|---|---|---|
| Hermes Agent | Nous Research describes Hermes Agent as an open-source Python agent platform with memory, skills, session search, scheduled jobs, toolsets, MCP support, gateway integrations, and multiple execution backends. | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent), [Hermes Agent docs](https://hermes-agent.nousresearch.com), and [hermes-agent on PyPI](https://pypi.org/project/hermes-agent/) |
| OpenClaw | OpenClaw project materials describe an open-source personal AI assistant platform with messaging gateways, pairing or allowlists, skills or plugins, local control-plane patterns, diagnostics, and sandbox options. | [OpenClaw repository](https://github.com/openclaw/openclaw), [OpenClaw website](https://openclaw.ai), and [openclaw on npm](https://www.npmjs.com/package/openclaw) |

The durable guidance is not that either project is better or worse. The durable guidance is that memory, skills, gateways, scheduled execution, plugins, and multiple backends add boundaries you must inspect before granting authority.

Project identity is part of that review. The canonical Hermes project is `NousResearch/hermes-agent` and its documented Python package path; do not assume a similarly named package in another registry is equivalent. Older OpenClaw references may use names such as ClawdBot or Moltbot. For either project, verify the repository owner, package metadata, lifecycle scripts, and install path before execution.

## First Decision: Is This Actually Needed?

Use a narrow editor, extension, or terminal agent when the job is:

- edit code in one repository
- explain an unfamiliar code path
- run tests and report failures
- make a bounded bug fix or refactor under human review

Consider an agent platform only when the workflow requires one or more of these properties:

- the assistant must be reachable through chat, mobile, webhook, or multiple devices
- work needs to run on a schedule or continue when the developer is absent
- persistent memory is central to the workflow
- reusable skills or plugins are part of the operating model
- the agent needs to coordinate multiple tools or execution environments
- the team can own logs, credentials, disable paths, and review procedures

If the task does not need those properties, the smaller tool is usually easier to verify and audit.

## Boundary Checklist

Before installing or approving an agent platform, write down the answers.

### 1. Trigger boundary

- Which inputs can start work: CLI prompt, TUI, chat DM, group chat, webhook, cron, email, browser, or API call?
- Which senders, rooms, repositories, or devices are allowed?
- Can forwarded messages, public issues, web pages, or logs inject instructions?
- Is there rate limiting, approval, and a fast disable path?

### 2. Data boundary

- Which repositories, home directories, documents, chat histories, and browser sessions can the platform read?
- Where are prompts, logs, transcripts, embeddings, memory files, indexes, and tool traces stored?
- Can data from one client, repository, or personal context be retrieved in another session?
- Which vendor, model provider, or hosted backend receives the data?

### 3. Authority boundary

- Can the platform write files, run shell commands, install packages, open browsers, send messages, deploy, spend money, or call administrative APIs?
- Which actions require human approval every time?
- Are approvals visible enough for the reviewer to understand the data and external effect?
- What identity does the agent use when it acts?

### 4. Persistence boundary

- What memory is saved, and who reviews it?
- Can the agent create, modify, delete, or import skills and plugins?
- Are memories, skills, and plugin versions pinned or auditable?
- How are poisoned, stale, or confidential memories removed?

### 5. Execution boundary

- Does work run locally, in Docker, over SSH, in a hosted sandbox, in a serverless worker, or through another remote backend?
- Which credentials and environment variables are inherited?
- Is network egress limited to approved destinations?
- Are filesystem mounts, package installs, and browser profiles scoped to the task?

### 6. Operations boundary

- Who owns the deployment?
- Where are logs kept, and how long are they retained?
- How are tokens rotated and revoked?
- How are scheduled jobs expired?
- What is the incident process if the platform sends a message, changes code, or exposes data incorrectly?

## Decision Procedure

1. **State the concrete job.** Example: "run a daily dependency triage and draft a pull request," not "deploy an agent platform."
2. **Check whether a narrower workflow works.** Use [Stack Evaluation Criteria](/ai-coding-primer/tools/comparison/) before accepting platform complexity.
3. **Map triggers, data, authority, persistence, execution, and operations.** If one area is unknown, do not grant broad access.
4. **Start in the lowest-risk environment.** Use test repositories, synthetic data, no production credentials, and no public inbound triggers.
5. **Pin and inspect the supply chain.** Review repository, installer, package metadata, optional extras, plugins, skills, MCP servers, and lifecycle scripts.
6. **Limit authority before testing capability.** It is easier to expand a constrained pilot than to investigate an overpowered one.
7. **Require observable evidence.** Keep diffs, command logs, tool traces, messages sent, jobs scheduled, and credentials used.
8. **Add expiry.** Scheduled jobs, memory permissions, tokens, and broad approvals should have owners and review dates.
9. **Run an incident drill.** Disable triggers, revoke credentials, remove memory, and restore from a clean configuration before production use.
10. **Promote only if the workflow needs the platform.** Capability alone is not a reason to keep a larger boundary.

## Common Failure Modes

- **Chat interface hides tool authority.** A message that looks harmless may cause shell commands, file reads, API calls, or outgoing messages.
- **Memory crosses contexts.** Useful personalization can become leakage between clients, repositories, or personal and work accounts.
- **Skills become unreviewed code.** A self-modified skill or plugin can change behavior after the original approval.
- **Scheduled work outlives its owner.** Cron jobs and background agents need expiry, logs, and a kill switch.
- **MCP or plugin sprawl expands egress.** Each server or plugin can add credentials, network destinations, and supply-chain risk.
- **Sandbox labels overpromise.** Docker, SSH, hosted sandboxes, and serverless deployments protect different things. Check mounts, secrets, network, and logs.

## Minimal Approval Record

Use this record for a pilot or team exception.

```text
Workflow job:
Platform and version or commit:
Official docs reviewed on:
Allowed triggers:
Allowed repositories and data classes:
Agent identity:
Allowed commands and tools:
Network destinations:
Memory and skill policy:
Scheduled jobs and expiry:
Credentials and rotation plan:
Logs and owner:
Actions requiring approval:
Rollback and kill switch:
Review date:
```

If the record cannot be completed, keep the platform out of sensitive work.

## Limitations

This page is not a current feature matrix for Hermes Agent, OpenClaw, or any other platform. It does not verify that an installer is safe, that a package name is canonical, that a security control works as documented, or that a hosted backend meets your legal requirements.

Vendor security features can reduce risk, but they do not choose the correct authority boundary for your organization. Treat platform adoption as a workflow and operations decision, not a product checkbox.

## Canonical Follow-Up Pages

- [Quick Security Checklist](/ai-coding-primer/security/checklist/) for basic data, credential, and permission controls
- [Team Threat Model](/ai-coding-primer/team/security-risks/) for prompt injection, excessive agency, supply chain, persistent state, and incident ownership
- [Technical Security and Data Paths](/ai-coding-primer/security/deep-dive/) for deeper inspection and containment work
- [Stack Evaluation Criteria](/ai-coding-primer/tools/comparison/) for deciding whether an agent platform is necessary
- [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/) for using narrower workflows when they fit
- [Fast-Changing Information](/ai-coding-primer/reference/fast-changing-info/) for freshness rules on vendor claims
