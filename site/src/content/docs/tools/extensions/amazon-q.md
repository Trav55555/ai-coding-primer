---
title: Amazon Q Developer
description: AWS's AI coding assistant with deep cloud integration.
sidebar:
  order: 3
---

[Amazon Q Developer](https://aws.amazon.com/q/developer/) is AWS's AI coding assistant, available as a VS Code/JetBrains extension and CLI.

## Overview

| | |
|---|---|
| **Type** | Extension + CLI |
| **Open Source** | No |
| **Best For** | AWS users, enterprise, large context |

## Key Features

- **200k Context** — One of the largest context windows
- **AWS Integration** — Native cloud service support
- **Code Transformation** — Automated Java upgrades, .NET porting
- **Security Scanning** — Built-in vulnerability detection
- **CLI Support** — `q` command for terminal

## Pricing

| Plan | Price | Notes |
|------|-------|-------|
| Free | $0 | 50 chat/mo, security scans |
| Pro | $19/user/mo | Unlimited, admin controls |
| Enterprise | Custom | SSO, audit logs, private models |

## Privacy

| Setting | Value |
|---------|-------|
| Training | OFF (code not used) |
| Data Storage | AWS security standards |
| Self-hosted | Via Bedrock |
| Jurisdiction | US (AWS) |

:::tip[IP Indemnity]
Pro and Enterprise plans include IP indemnity coverage.
:::

## Models

- Claude Sonnet 4.5 / Opus 4.5 (via Bedrock)
- Amazon Titan
- Custom fine-tuned models (Enterprise)

## Installation

**VS Code:**
```
Extensions → Search "Amazon Q"
Install → Sign in with AWS Builder ID
```

**CLI:**
```bash
# Install Q CLI
brew install amazon-q  # macOS
# or download from AWS
```

## Key Features

### Code Transformation

Automated upgrades and migrations:

```
Q: "Upgrade this Java 8 project to Java 17"
→ Analyzes dependencies
→ Updates syntax
→ Fixes deprecated APIs
→ Generates migration report
```

### Security Scanning

```bash
# Scan for vulnerabilities
q scan --path ./src

# Auto-fix security issues
q fix --security
```

### AWS Service Integration

```
Q: "How do I set up an S3 bucket with versioning?"
→ Generates CloudFormation/CDK code
→ Includes IAM policies
→ Follows AWS best practices
```

## Tips

- Use with AWS Toolkit extension for full integration
- Free tier is generous for individual developers
- Code transformation saves days on Java upgrades
- Security scanning catches issues before PR
