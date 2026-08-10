---
title: Technical Security and Data Paths
description: Inspect what an AI coding workflow can read, where data can go, which actions it can take, and how to contain failures.
sidebar:
  order: 3
---

Use this page to inspect one concrete workflow. It does not certify a product or replace legal, procurement, or incident-response review.

:::note[Freshness metadata]
Reviewed: August 2026. Tool behavior, provider terms, sandbox implementations, and operating-system controls change. Verify the exact client, account, model, and feature in use.
:::

## Map the Complete Data Path

Draw the workflow before evaluating a privacy setting:

```text
repository and prompt
  -> client and local logs
  -> model or gateway
  -> tools, MCP servers, and subprocessors
  -> generated files and command output
  -> remote services and external actions
  -> histories, caches, traces, and backups
```

Inventory four things:

| Area | Examples |
|---|---|
| Data | source, secrets, tickets, logs, screenshots, embeddings, tool results |
| Untrusted input | cloned files, web pages, issues, dependency docs, database rows |
| Authority | file writes, shell, browser, package manager, cloud API, deployment |
| Persistence and egress | chat history, logs, memory, network calls, commits, messages |

A local client may still send context to a hosted model. A self-hosted model may still use hosted embeddings, telemetry, or tools. Verify the complete path.

## Verify Local Behavior

### Inspect file access with test data

Use a disposable repository. Place unique canary strings in an allowed file and a file the tool should exclude. Ask the tool what it can see, then inspect logs and tool calls.

Do not use a real secret as a canary. A successful test shows one observed behavior for one version and configuration; it does not prove every command or agent surface honors the exclusion.

### Inspect processes and network destinations

Operating-system tools can show which processes open files or connections. Examples include `lsof`, `ss`, platform firewalls, container logs, and proxy logs.

These observations can establish that a connection occurred and where it went. Encrypted traffic usually prevents direct inspection of payload contents, and local monitoring cannot establish provider-side retention, training, deletion, or government access.

### Inspect tool and action logs

Capture, where available:

- files read and written
- commands and exit codes
- network destinations
- MCP or plugin calls
- approvals and who granted them
- external mutations such as branches, deployments, messages, or database writes

The log must be sufficient to reconstruct a failure without becoming an uncontrolled store of secrets.

## Prompt Injection Is an Authority Problem

Untrusted text can contain instructions intended to redirect an agent. It can arrive through files, web pages, issues, logs, or tool output. A stronger system prompt does not make this class of attack disappear.

OWASP's prompt-injection guidance recommends least privilege and constrained access to backend systems. Apply that literally:

- separate reading untrusted material from consequential actions
- deny external communication unless required
- use dedicated, scoped credentials
- require confirmation for installs, secret access, deployment, messaging, and destructive operations
- make tool output visible to the reviewer

Classifiers and model-level defenses can add layers, but vendors describe prompt-injection defense as a layered mitigation problem, not a solved boundary.

## Treat Agent Extensions as Supply Chain

A package, MCP server, extension, skill, or installer can execute code or receive repository context.

Before adding one:

1. identify the canonical source and maintainer
2. inspect package metadata, scripts, permissions, and transitive dependencies
3. pin the approved version or commit
4. install in an isolated environment first
5. observe filesystem and network behavior
6. define update and rollback procedures

Do not install a package merely because an agent suggested a plausible name. OpenSSF recommends repository controls for typosquatting and malicious packages; teams still need their own dependency review and lockfile controls.

Treat unpinned `npx` or `npm exec` installers as remote code execution. Review source before executing third-party skill installers.

## Contain Long-Running and Connected Agents

Background, scheduled, browser, messaging, and webhook-connected agents need stricter controls than an attended local edit:

- dedicated service identity rather than ambient personal credentials
- short-lived, scoped tokens
- explicit sender and trigger allowlists
- isolated workspaces for clients and repositories
- reviewed persistent-memory writes
- per-task sandbox or disposable environment
- action, rate, and spend limits
- tested kill switch

A schedule or public trigger should never inherit broad shell, browser, cloud, or messaging authority by default.

## Design Defense in Depth

| Layer | Control | Risk it can reduce |
|---|---|---|
| Data | classification, exclusions, secret removal | unnecessary disclosure |
| Identity | dedicated scoped credentials | account-wide compromise |
| Execution | workspace restriction, container or VM, no root | host and cross-project damage paths |
| Network | deny by default, destination allowlist | some exfiltration paths and unreviewed downloads |
| Action | approvals for consequential effects | silent deployment or mutation |
| Verification | tests, static checks, diff and behavior review | undetected bad changes reaching production |
| Observation | tool, command, network, and change logs | inability to investigate |
| Recovery | revocation, rollback, snapshots, kill switch | prolonged or irreversible impact |

No layer is sufficient alone. For example, human approval helps only when the reviewer sees the action, understands its context, and can refuse it without blocking normal work.

## What You Can and Cannot Establish

### You can observe locally

- files a monitored process reads or writes
- commands and child processes
- network destinations
- tool calls and approvals exposed by the harness
- resulting diffs and external changes you can query

### You usually need provider evidence or contract terms for

- server-side retention and deletion
- training use
- subprocessor handling
- support or abuse-monitoring access
- backup lifecycle
- legal disclosure and notification terms

Use [Privacy Review Framework](/ai-coding-primer/security/privacy-comparison/) for those questions.

## If You Suspect Compromise

1. Stop the agent and disable triggers without erasing logs.
2. Isolate the environment from the network.
3. Preserve relevant process, tool, network, and repository evidence.
4. Revoke every credential within the workflow's reach.
5. Audit file and external-system changes.
6. Restore from a known state and fix the control that failed.
7. Follow the organization's notification and incident process.

## Sources

- [OWASP LLM01: Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- [OWASP LLM03: Supply Chain](https://genai.owasp.org/llmrisk/llm032025-supply-chain/)
- [OWASP LLM06: Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/)
- [Anthropic: Mitigating prompt injection in browser use](https://www.anthropic.com/research/prompt-injection-defenses)
- [OpenSSF Principles for Package Repository Security](https://repos.openssf.org/principles-for-package-repository-security.html)
- [Team Threat Model](/ai-coding-primer/team/security-risks/)
