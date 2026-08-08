---
title: Amazon Q Developer
description: AWS coding assistant for editor, command-line, cloud, and migration workflows.
sidebar:
  order: 3
---

:::note[Freshness metadata]
Reviewed: August 2026. Volatile fields: quotas, transformation support, data handling, and enterprise controls. Verify the [Amazon Q Developer documentation](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html).
:::

[Amazon Q Developer](https://aws.amazon.com/q/developer/) provides coding assistance through supported editors, command-line tools, AWS consoles, and code-transformation workflows.

## Workflow Fit

Amazon Q is most relevant when work depends on AWS services, IAM policy, AWS account governance, or supported migration workflows.

Capability areas include:

- repository-aware coding assistance
- AWS service guidance
- supported code transformations
- security analysis and remediation suggestions
- organization controls through AWS identity and account systems

Exact availability differs by surface, region, account, and plan.

## Access and Governance

Before rollout, verify:

- identity path and organization assignment
- supported regions and development environments
- quotas and transformation limits
- administrator and audit controls
- contract terms for data use, retention, and intellectual-property protection

Use the [current service tiers documentation](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/q-tiers.html); do not preserve plan tables in repository documentation.

## Data Boundaries

AWS documents data-protection and content-sharing controls separately for different Amazon Q surfaces. Review the [data protection guidance](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/data-protection.html) and the settings for the exact client and account type in use.

Do not infer that editor chat, general command-line use, and code transformation have identical handling.

## Code Transformation

AWS's current command-line transformation workflow uses the `qct` tool. Follow the [official transformation documentation](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/transform-CLI.html) instead of relying on old `q scan` or `q fix` examples.

Treat transformed code as a migration proposal:

1. inspect the transformation scope
2. run tests before and after
3. review dependency and runtime changes
4. preserve a rollback path
5. verify behavior in the target environment

## Adoption Check

1. Pick one AWS-heavy task with clear acceptance evidence.
2. Configure identity and organization policy first.
3. Confirm data handling for the chosen surface.
4. Review generated IAM and infrastructure code for least privilege.
5. Measure review and rework before broader adoption.
