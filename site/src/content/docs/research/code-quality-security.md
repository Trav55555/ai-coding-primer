---
title: Code Quality & Security
description: Findings on defects, vulnerabilities, and verification risk.
---

Artificial intelligence (AI)-assisted code still needs normal engineering controls: review, tests, security checks, and ownership by the person or team that commits it. The evidence below is useful, but it should not be read as a causal proof that AI assistance alone creates a specific defect rate.

## Key Findings

- **Vendor survey evidence — Sonar 2026:** Sonar reports survey responses from 1,100+ professional developers. Respondents self-reported that 42% of committed code was AI-assisted or AI-generated. The survey also reports that 96% do not fully trust AI-generated code, 48% always verify it before commit, and 38% find that it takes more review effort. Treat this as perception and self-report evidence about review burden, not as measured defect causality.
- **Vendor benchmark evidence — Veracode 2025:** Veracode tested 100+ models across Java, Python, C#, and JavaScript and reports that 45% of generated code samples failed its security tests. This is methodology-bound evidence: the result depends on the prompt set, languages, model selection, and test harness.
- **Early / uncertain evidence — arXiv:2507.09329 v2:** The preprint analyzed 12,000+ agent actions across five models and 93 setup tasks, reporting that 21% of trajectories contained insecure actions. Use this as early evidence about possible agent behavior under the paper's threat model, not as a production incident rate.

## Caveats

- Vendor surveys measure reported practice and perception; they do not establish that AI assistance caused a specific quality outcome.
- Vendor benchmarks can be useful, but their failure rates are sensitive to prompts, languages, model versions, and scoring rules.
- Preprints should be treated as early evidence until methods and findings are independently tested.
- Security results from generated samples or controlled tasks do not replace review of your own codebase, dependencies, secrets handling, and deployment path.

## Practical Implications

- Require a human owner for every AI-authored diff. The owner should be able to explain the change and its tests.
- Keep verification in the default loop: unit tests, typechecks, linters, build steps, and focused manual review.
- Add security scanning where it fits the stack: dependency checks, SAST, secret scanning, unsafe API checks, and framework-specific rules.
- Review prompts and agent permissions for security boundaries. Do not give an agent write access, network access, credentials, or deployment rights unless the task needs them.
- Track review load during rollout. If AI-assisted changes increase diff volume, allocate review time rather than assuming the extra code is cheaper to merge.

## Next Steps

- [Governance and Rollout](/ai-coding-primer/team/governance/) - turn these findings into review policy and rollout rules
- [Team Threat Model](/ai-coding-primer/team/security-risks/) - understand the failure modes behind the guardrails

## Sources

- Sonar survey summary: https://www.sonarsource.com/blog/state-of-code-developer-survey-report-the-current-reality-of-ai-coding/
- Veracode report summary: https://www.veracode.com/blog/genai-code-security-report/
- Preprint reference: https://arxiv.org/abs/2507.09329
