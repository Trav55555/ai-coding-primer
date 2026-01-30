---
title: Quick Security Checklist
description: Essential security steps for AI coding tools.
sidebar:
  order: 1
---

Before using any AI coding tool with real code, complete this checklist.

## Before You Start

- [ ] **Enable privacy/ghost mode** if available
- [ ] **Create exclusion rules** for sensitive files
- [ ] **Disable telemetry** where possible
- [ ] **Use unique API keys** (not production keys)
- [ ] **Review privacy policy** for training/retention
- [ ] **Verify jurisdiction** is acceptable

## File Exclusions

Create `.cursorignore`, `.aiderignore`, or equivalent:

```
# Secrets
.env*
*.pem
*.key
secrets/
credentials/

# Client code
clients/*/

# Sensitive data
data/production/
```

## Tool-Specific Settings

### Cursor
1. Settings → Privacy Mode → Enable
2. Create `.cursorignore` file
3. Settings → Telemetry → Disable

### Zed
1. Use BYOK (your own API keys)
2. Settings → Telemetry → Opt-out

### Continue.dev
1. Use local models (Ollama)
2. No cloud = no data leaves machine

### Claude Code
1. Enterprise plan for privacy mode
2. Consumer plans have training ON by default

## Red Flags

| Warning Sign | Risk |
|--------------|------|
| No privacy policy | Unknown data handling |
| Training "enabled by default" | Your code used for training |
| No exclusion mechanism | Can't protect sensitive files |
| China jurisdiction | Different legal protections |

## Quick Privacy Ranking

| Tool | Privacy Level |
|------|---------------|
| Continue.dev + Ollama | Maximum (local) |
| Zed + BYOK | High (your API terms) |
| Cursor Teams | High (zero retention) |
| Cursor Pro | Medium (30-day retention) |
| Claude Code (consumer) | Low (training ON) |

## Next Steps

- [Privacy Comparison](/ai-coding-primer/security/privacy-comparison/) — detailed tool comparison
- [Enterprise Guide](/ai-coding-primer/security/enterprise/) — compliance requirements
