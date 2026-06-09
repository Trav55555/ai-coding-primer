---
title: Amazon Q Developer
description: AWS AI coding assistant with cloud, CLI, and enterprise workflow integrations.
sidebar:
  order: 3
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: exact feature support, pricing, quotas, privacy terms, and enterprise controls. Verify live vendor docs before choosing or standardizing on this reference.
:::

[Amazon Q Developer](https://aws.amazon.com/q/developer/) is AWS's AI coding assistant, available through editor integrations and CLI workflows.

## Overview

| | |
|---|---|
| **Type** | Extension + CLI |
| **Open Source** | No |
| **Workflow fit** | AWS-heavy development, enterprise governance, cloud-service workflows |

## Capability Areas

- **Large context support** — useful for repository and documentation-heavy tasks; verify current limits in AWS docs
- **AWS integration** — service-aware help for AWS workflows
- **Code transformation** — Java upgrade and porting workflows where supported
- **Security scanning** — vulnerability detection and remediation workflows where supported
- **CLI support** — `q` command for terminal workflows

## Access Model

Amazon Q has individual and enterprise-oriented access paths. The durable decision is whether the team needs AWS-native workflows, Bedrock alignment, and centralized AWS governance.

Verify current plan terms, quotas, and enterprise controls in AWS docs before standardizing.

## Privacy

| Setting | Value |
|---|---|
| Training | verify current plan and organization settings |
| Data storage | governed by AWS service terms and selected configuration |
| Self-hosted | use Bedrock or AWS-managed deployment paths where available |
| Jurisdiction | depends on AWS region, account setup, and service terms |

:::note[Contract-sensitive terms]
IP indemnity, retention, training exclusions, and enterprise controls are contract- and plan-dependent. Verify them in current AWS documentation and procurement review.
:::

## Models

Model availability changes. Check current AWS and Amazon Q documentation for supported models, Bedrock integration, custom model options, and regional availability.

## Installation

**Editor extension:**

```text
Install the Amazon Q extension for your editor.
Sign in with the required AWS or Builder ID account.
Verify organization policy before using it on company repositories.
```

**CLI:**

```bash
# Example macOS install path; verify current AWS docs first
brew install amazon-q
```

## Code Transformation

Code transformation workflows can assist with upgrades and migrations, such as supported Java or .NET migrations.

Use these workflows with normal migration controls:

1. inspect the generated migration plan
2. run tests before and after transformation
3. review dependency and runtime changes
4. keep rollback path available
5. verify behavior in the target runtime

## Security Scanning

Example command shape:

```bash
# Scan for vulnerabilities
q scan --path ./src

# Attempt supported security fixes
q fix --security
```

Treat auto-fixes as proposed diffs. Review them and run project-specific tests before merging.

## AWS Service Integration

Amazon Q can help produce AWS-oriented examples such as CloudFormation, CDK, IAM, and service configuration snippets.

Verify generated infrastructure code against:

- least-privilege IAM requirements
- account and region constraints
- organization policy
- security review
- deployment tests

## Tips

- Use with AWS Toolkit when AWS service context is required.
- Verify current access terms separately if you depend on usage limits.
- Treat code transformation output as a migration proposal, not a completed migration.
- Review security fixes and infrastructure snippets before applying them.
