---
title: Privacy Deep Dive
description: Technical details on AI tool privacy and data handling.
sidebar:
  order: 4
---

:::note[Freshness metadata]
Reviewed: May 2026. Volatile fields: model availability, benchmark position, pricing, privacy terms, and provider feature support. Verify live docs and leaderboards before making current decisions.
:::


Detailed technical analysis of privacy implications.

## What Gets Sent

When you use AI coding tools, they typically send:

- Current file content
- Recent file history
- Codebase embeddings (if indexed)
- File paths and structure
- Your prompts
- Git diff (sometimes)
- Terminal output (sometimes)

## Jurisdiction Risk

| Jurisdiction | Legal Framework | Risk Level |
|--------------|-----------------|------------|
| **US** | CLOUD Act, FISA 702 | Government can compel disclosure |
| **EU** | GDPR | Stronger user protections |
| **China** | PIPL, Cybersecurity Law | Data localization requirements |

### US CLOUD Act
Allows US government to compel disclosure of data stored by US companies **anywhere globally**, potentially without user notification.

### Implications
- Data stored by US company = subject to US law
- Applies even if servers are in EU
- Enterprise agreements may provide some protection

## Verification Methods

### What You CAN Verify
- Network destinations (where data goes)
- Payload contents (what's sent)
- Local file access (what's read)

### What You CANNOT Verify
- Server-side retention (must trust vendor)
- Training exclusion (must trust vendor)
- Government access (no visibility)

### Tools for Verification

```bash
# Monitor outbound connections
sudo lsof -i -n | grep cursor

# Use mitmproxy for traffic inspection
mitmproxy --mode regular

# Check request headers for privacy or zero-retention indicators
# Header names vary by product and change over time
```

## API Key Security

| Practice | Recommendation |
|----------|----------------|
| **Storage** | System keychain, not env files |
| **Rotation** | Quarterly minimum |
| **Scope** | Separate keys for AI vs production |
| **Git** | Pre-commit hooks with gitleaks |

### Secure Key Storage

```bash
# macOS Keychain
security add-generic-password -a "$USER" -s "openai-api-key" -w "sk-..."
export OPENAI_API_KEY=$(security find-generic-password -s "openai-api-key" -w)

# Linux (GNOME Keyring)
secret-tool store --label="OpenAI" service openai username apikey
export OPENAI_API_KEY=$(secret-tool lookup service openai username apikey)
```

## Threat Models

### Low Risk (Personal Projects)
- Use any tool with privacy mode
- Basic exclusions for secrets

### Medium Risk (Client Work)
- Use tools with zero retention
- Comprehensive exclusions
- Review before each session

### High Risk (Regulated Industry)
- Self-hosted or local only
- Air-gapped where possible
- Formal security review

## Security Patterns to Know

| Pattern | Lesson |
|---|---|
| Plan-specific training or retention defaults | Check current defaults before approving a tool |
| Package hallucination and slopsquatting | Verify dependencies before installing AI-suggested packages |
| Prompt injection demonstrations and incidents | Limit agent permissions and network access |

## Minimizing Exposure

1. **Enable privacy mode** immediately
2. **Create comprehensive exclusions**
3. **Use BYOK** where possible
4. **Prefer local models** for sensitive work
5. **Review diffs** before committing
6. **Rotate keys** regularly
