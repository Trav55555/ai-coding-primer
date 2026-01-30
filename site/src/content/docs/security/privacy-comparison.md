---
title: Privacy Comparison
description: Detailed privacy analysis of AI coding tools.
sidebar:
  order: 2
---

Privacy characteristics of major AI coding tools.

## Comparison Matrix

| Tool | Open Source | Privacy Mode | Training | Retention | Jurisdiction |
|------|-------------|--------------|----------|-----------|--------------|
| **Cursor** | No | Yes | Opt-out | 30d* | US |
| **Zed** | Yes | Yes (BYOK) | Never | None | US |
| **Windsurf** | No | Yes (ZDR) | Never | Zero | US/EU |
| **Copilot** | No | Yes | Opt-out | Varies | US |
| **Continue.dev** | Yes | 100% local | Never | None | None |
| **Claude Code** | No | Enterprise | ON** | 30d-5y | US |
| **Aider** | Yes | BYOK | Depends | Depends | None |

*Non-Business plans  
**Consumer accounts since August 2024

## Truly Private Options

For maximum privacy, use local models:

| Setup | Privacy | Quality |
|-------|---------|---------|
| Continue.dev + Ollama | Maximum | 85-90% |
| Zed + Ollama | Maximum | 85-90% |
| OpenCode + Ollama | Maximum | 85-90% |

No data leaves your machine. Trade-off: requires 24GB+ VRAM for best models.

## Hidden Gotchas

| Tool | Gotcha |
|------|--------|
| **Cursor** | 30-day retention even with Privacy Mode (non-Business) |
| **Claude Code** | Training ON by default for consumer accounts |
| **Anthropic** | Must opt-out within 30 days or data used for training |
| **Azure OpenAI** | 30-day abuse monitoring (waivable) |

## By Use Case

### Personal Projects
Any tool is fine. Enable privacy mode if available.

### Client Work (NDA)
- **Safe**: Continue.dev + local, Zed + BYOK
- **Acceptable**: Cursor Teams, Windsurf Enterprise
- **Avoid**: Claude Code (consumer), any tool with training enabled

### Enterprise/Regulated
- **Required**: Cursor Enterprise, Windsurf Enterprise, or self-hosted
- **Verify**: DPA, subprocessors, audit logs, SSO/SCIM

## Jurisdiction Notes

| Location | Risks |
|----------|-------|
| **US** | CLOUD Act, FISA 702 |
| **EU** | Generally stricter protections |
| **China** | PIPL, data localization requirements |

For EU companies: Consider Schrems II implications with US tools.

## Next Steps

- [Enterprise Guide](/ai-coding-primer/security/enterprise/) — compliance deep dive
- [Privacy Deep Dive](/ai-coding-primer/security/deep-dive/) — technical details
