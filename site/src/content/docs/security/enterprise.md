---
title: Enterprise Guide
description: AI coding tools for enterprise and compliance requirements.
sidebar:
  order: 3
---

Guidance for deploying AI coding tools in enterprise environments.

## Recommended Enterprise Tools

| Tool | Price | Key Features |
|------|-------|--------------|
| **Cursor Teams** | $40/user/mo | Zero retention, SOC 2, SSO |
| **Windsurf Enterprise** | Custom | EU hosting, FedRAMP, self-hosted |
| **Copilot Business** | $19/user/mo | IP indemnity, policy controls |
| **Copilot Enterprise** | $39/user/mo | Codebase indexing, SCIM |

## By Compliance Requirement

### SOC 2
- Cursor Teams/Enterprise
- Windsurf Enterprise
- GitHub Copilot Business/Enterprise

### HIPAA
- Windsurf Enterprise (with BAA)
- Self-hosted solutions

### FedRAMP
- Windsurf FedRAMP
- AWS GovCloud options

### GDPR
- Windsurf EU Cloud
- Azure OpenAI (EU regions)
- Self-hosted solutions

## Pre-Deployment Checklist

- [ ] **DPA signed** before any data processing
- [ ] **Subprocessor list** reviewed and acceptable
- [ ] **Audit logging** enabled and integrated
- [ ] **SSO/SCIM** configured for user management
- [ ] **Content exclusions** configured for sensitive repos
- [ ] **Security review** of vendor completed
- [ ] **Exit strategy** documented

## Legal Documents Required

| Document | Purpose |
|----------|---------|
| **DPA** | Data processing terms |
| **Subprocessor List** | Who else sees your data |
| **Privacy Policy** | General data handling |
| **SOC 2 Report** | Security audit results |
| **Penetration Test** | Security testing results |

## Self-Hosted Options

For maximum control:

| Solution | What You Get |
|----------|--------------|
| **Tabnine Enterprise** | On-prem AI coding |
| **Continue.dev + vLLM** | Open source stack |
| **Ollama + custom UI** | DIY solution |

Trade-off: Higher setup cost, ongoing maintenance.

## Cost Comparison

| Tool | Per User/Month | Notes |
|------|----------------|-------|
| Copilot Business | $19 | Good value |
| Cursor Teams | $40 | Best UX |
| Windsurf Enterprise | Custom | Most flexibility |
| Self-hosted | $0 + infra | Highest control |
