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

Use these as examples, not evergreen vendor facts. Exact setting names and plan behavior change frequently.

### Integrated IDEs
1. Enable privacy or zero-retention mode if available.
2. Create the tool's exclusion file for secrets and sensitive paths.
3. Disable telemetry where possible.
4. Verify whether consumer and business tiers have different retention or training defaults.

### BYOK or Local Workflows
1. Use your own API keys when provider terms matter.
2. Use local models when code cannot leave your environment.
3. Remember that BYOK changes provider terms, not necessarily every tool-side log.

## Red Flags

| Warning Sign | Risk |
|--------------|------|
| No privacy policy | Unknown data handling |
| Training "enabled by default" | Your code used for training |
| No exclusion mechanism | Can't protect sensitive files |
| China jurisdiction | Different legal protections |

## Quick Privacy Tiers

| Setup | Typical privacy posture |
|---|---|
| Local model, local tool execution | strongest boundary, highest operations burden |
| BYOK through an inspectable client | depends on provider terms and client logs |
| Enterprise managed hosted tool | depends on contract, admin controls, retention, and subprocessors |
| Consumer hosted tool | highest uncertainty; verify training and retention defaults |

## Next Steps

- [Privacy Comparison](/ai-coding-primer/security/privacy-comparison/) — detailed tool comparison
- [Privacy Deep Dive](/ai-coding-primer/security/deep-dive/) — technical details
