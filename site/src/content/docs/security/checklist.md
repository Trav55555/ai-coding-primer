---
title: Quick Security Checklist
description: Set data, credential, permission, and external-action boundaries before using an AI coding tool.
sidebar:
  order: 1
---

Before using an AI coding tool with real code, decide what data and authority the task requires.

## Classify the Work

Ask:

- Is the repository public, internal, confidential, regulated, or covered by a client agreement?
- Can prompts, code, logs, screenshots, or embeddings leave the environment?
- Does the task need network access, credentials, or external services?
- Which account, organization policy, and contract apply to the selected feature?

If you cannot answer these questions, do not use sensitive code yet.

## Data-Use Check

- [ ] Review current training, retention, abuse-monitoring, and subprocessor terms.
- [ ] Check the exact account, model, and feature; background agents may differ from local chat.
- [ ] Disable optional telemetry where policy requires it.
- [ ] Confirm where repository indexes, prompts, logs, and tool traces are stored.
- [ ] Verify cross-border and sector requirements with qualified legal or security reviewers.

A setting called “privacy mode” or “zero retention” is not enough by itself. Determine which data and product surfaces it covers.

## Permission Check

Give the tool only the authority the task needs:

- workspace files rather than the entire home directory
- targeted commands rather than unrestricted shell access
- no package installation unless approved
- no network access unless required
- no deployment, messaging, billing, or destructive actions without confirmation

For a first session, use one repository, one file, no credentials, and no external side effects.

## Credential Check

- [ ] Remove production credentials from the environment.
- [ ] Use short-lived, scoped credentials when access is necessary.
- [ ] Check inherited shell variables, cloud profiles, browser sessions, and package-registry tokens.
- [ ] Rotate any credential exposed to an unapproved service or log.

Do not paste secrets into prompts. Do not assume redaction will catch every secret format.

## File Exclusions

Ignore or exclusion files can reduce accidental context:

```text
.env*
*.pem
*.key
secrets/
data/production/
```

They are not access controls. Agent surfaces may interpret them differently, and shell commands may bypass them. Test the selected tool's behavior and enforce sensitive boundaries outside the prompt when possible.

## Deployment Shape

| Setup | Boundary to verify |
|---|---|
| Local model and local tools | telemetry, updates, external tools, and logs remain local |
| Inspectable client with provider key | client logs plus provider training, retention, and subprocessors |
| Enterprise hosted service | contract, identity, policy, audit, retention, and model-provider path |
| Consumer hosted service | account defaults, feature-specific data use, and limited administration |

These are questions, not privacy rankings. The correct choice depends on the workload and complete data path.

## Stop Conditions

Do not continue when:

- the repository classification conflicts with vendor or organization terms
- required credentials are broader than the task
- the tool needs unexplained filesystem or network access
- you cannot identify how to revoke access or undo an external action

## Next Step

With security boundaries defined, [Choose a Workflow and Stack →](/ai-coding-primer/learn/beginner/choose-your-tool/).

For deeper review, use [Privacy Comparison](/ai-coding-primer/security/privacy-comparison/) and [Privacy Deep Dive](/ai-coding-primer/security/deep-dive/).
