---
title: Code Quality & Security
description: Findings on defects, vulnerabilities, and verification risk.
---

AI-assisted code can increase output volume and review burden at the same time.

## Key Findings

- **Sonar survey (2026):** Developers reported a verification bottleneck as AI-assisted output increased.
- **Veracode 2025 report:** 45% of tested AI-generated code samples failed security checks under their methodology.
- **Academic/preprint signal:** Some agentic trajectories include insecure actions, reinforcing the need for guardrails.

## Caveats

- Vendor reports often test specific prompts and language sets
- Security failure rates are sensitive to task framing
- Preprints should be treated as early evidence, not settled consensus

## Practical Implications

- Keep verification-first workflows non-negotiable
- Require human review for all AI-authored diffs
- Add security scanning to the default AI coding loop

## Sources

- Sonar survey summary: https://www.sonarsource.com/blog/state-of-code-developer-survey-report-the-current-reality-of-ai-coding/
- Veracode report summary: https://www.veracode.com/blog/genai-code-security-report/
- Preprint reference: https://arxiv.org/abs/2507.09329
