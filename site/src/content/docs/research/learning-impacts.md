---
title: Learning Impacts
description: What current coding and education studies can and cannot establish about AI-assisted learning.
---

AI assistance can produce different learning outcomes depending on the task, the learner, and how the system structures the interaction. Current evidence does not support a universal claim that AI either improves or harms learning.

:::note[Freshness and evidence]
Reviewed: August 2026. This page separates peer-reviewed research from vendor-led and preprint evidence. The studies use different learners, subjects, interventions, and outcome measures; their effect sizes should not be combined.
:::

## Coding Assistance Can Reduce Immediate Mastery in One Learning Setting

**Early / uncertain evidence — Anthropic, January 2026:** Anthropic ran a randomized controlled trial with 52 mostly junior software engineers. Participants used Python regularly but were unfamiliar with Trio, the library taught in the task. One group had an AI assistant; the other coded without it.

The AI-assisted group averaged 50% on an immediate quiz, compared with 67% for the control group. The largest gap was in debugging questions. The AI group finished about two minutes faster, but that difference was not statistically significant.

This study establishes a result for a small, short task with an unfamiliar Python library and an immediate quiz. It does not measure long-term retention, experienced agentic-tool use, or normal production work. Anthropic led the study, and the linked paper is a preprint.

The researchers also grouped AI interaction styles. Participants who asked conceptual or explanation questions tended to score better than participants who delegated generation or debugging. That analysis was qualitative and observational inside the experiment; it does not establish that a particular prompt style caused the difference.

Source: [Anthropic, “How AI assistance impacts the formation of coding skills”](https://www.anthropic.com/research/AI-assistance-coding-skills).

## Structured Tutors Can Improve Short-Term Learning in Specific Settings

**Research-backed — Kestin et al., Scientific Reports, June 2025:** A crossover randomized trial included 194 eligible students in an introductory Harvard physics course. Each student experienced one carefully designed AI-tutored lesson and one in-class active-learning lesson across two topics.

Students had higher post-test scores after the AI-tutored condition. The AI system was not a general chatbot: instructors supplied expert-written activities, step-by-step answers, videos, question-specific prompts, and a platform that enforced lesson sequence. The study measured two lessons and immediate post-tests. It does not show that unstructured chatbot use, other subjects, or long-term independent learning will produce the same result.

Source: [Kestin et al., “AI tutoring outperforms in-class active learning”](https://www.nature.com/articles/s41598-025-97652-6).

**Early / uncertain evidence — Tutor CoPilot, 2024–2025 working paper:** The paper describes a field experiment involving 900 tutors and 1,800 K–12 students; its primary session analysis covered 4,136 tutoring sessions. Tutors received real-time AI suggestions during math tutoring. Access to Tutor CoPilot increased the unconditional exit-ticket pass rate from 62% to 66%. For students of lower-rated tutors, the reported rate increased from 56% to 65%.

This was assistance for human tutors, not an autonomous tutor or a coding tool. The subgroup result comes from a heterogeneity analysis, and the authors report that suggestions could be inappropriate for the student's grade level. The study supports evaluating human-plus-AI instructional design; it does not justify replacing instructors or letting learners delegate the work.

Source: [Wang et al., “Tutor CoPilot”](https://arxiv.org/abs/2410.03017).

## What the Evidence Supports

The studies support narrower decisions:

- Treat task completion and learning as separate outcomes.
- Do not infer comprehension from a working artifact.
- When learning is the goal, keep the learner responsible for recall, explanation, and debugging.
- Structured tutoring can help, but a purpose-built tutor is not equivalent to an unrestricted assistant.
- Test understanding without the tool; immediate performance with assistance cannot show independent mastery.

They do not establish an ideal prompt, a universal AI-free practice schedule, or a single effect across coding and education.

## Practical Check

After using AI on unfamiliar code, close the conversation and answer these questions without assistance:

1. What behavior does the code implement?
2. Which assumptions could make it fail?
3. How would you reproduce and diagnose one failure?
4. Can you make a small variation without asking for regenerated code?

If not, treat the task as completed but the material as not yet learned.

For a learning procedure, use [Learning with AI](/ai-coding-primer/learn/intermediate/learning-with-ai/).
