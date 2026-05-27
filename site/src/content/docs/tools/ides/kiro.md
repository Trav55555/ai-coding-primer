---
title: Kiro
description: AWS's spec-driven agentic IDE.
sidebar:
  order: 5
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: exact feature support, pricing, quotas, privacy terms, and enterprise controls. Verify live vendor docs before choosing or standardizing on this reference.
:::


[Kiro](https://kiro.dev) is Amazon's agentic IDE focused on spec-driven development.

## Overview

| | |
|---|---|
| **Type** | IDE (VS Code compatible) |
| **Open Source** | No |
| **Best For** | Spec-first workflows, AWS integration |

## Key Features

- **Spec-Driven Development** — Write specs, generate code
- **Automated Tests** — Generated from specs
- **Automated Docs** — Kept in sync with code
- **Q Developer CLI** — AWS tooling integration
- **MCP Support** — External tool connections

## Access Model

Kiro is a preview product. The exact access model will evolve, but its real differentiator is the spec-first workflow, not the launch-stage commercial details.

:::note[Preview Status]
Kiro is in preview, so availability and policy details may change with general release.
:::

## Privacy

| Setting | Value |
|---------|-------|
| Privacy Mode | Yes (AWS terms) |
| Training | AWS data policies |
| Jurisdiction | US |

## Models Available

- Claude Sonnet 4.5 (default)
- Claude Opus 4.5
- AWS Titan (internal)

## The Spec-Driven Workflow

Kiro's key differentiator is spec-first development:

```markdown
# Feature: User Authentication

## Requirements
- Email/password login
- JWT tokens with 24h expiry
- Rate limiting: 5 attempts per minute

## Acceptance Criteria
- [ ] User can register with email
- [ ] User can login and receive JWT
- [ ] Failed logins are rate limited
```

Then:
```
You: "Implement this spec"
Kiro:
1. Generates implementation plan
2. Writes code matching spec
3. Generates tests for acceptance criteria
4. Updates documentation
```

## Getting Started

1. Download from [kiro.dev](https://kiro.dev)
2. Sign in with AWS Builder ID
3. Create a spec file for your feature
4. Let Kiro generate implementation

## AWS Integration

Kiro integrates with AWS services:

- **Q Developer CLI** — AWS-specific assistance
- **CodeWhisperer** — Inline completions
- **Bedrock** — Model access
- **CloudWatch** — Observability

## Tips

- Write detailed specs before asking Kiro to implement
- Use acceptance criteria for automatic test generation
- Leverage AWS integration if you're in the AWS ecosystem
- Specs become living documentation
