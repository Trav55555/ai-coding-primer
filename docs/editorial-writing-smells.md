---
id: ai-coding-primer-editorial-writing-smells
tags:
  - project
  - editorial
  - writing
  - quality
type: editorial-guide
status: proposed
created: '2026-08-07'
---

# Editorial Writing Smells

## Purpose

Use this checklist when editing the primer. It is not an AI detector. It identifies prose that sounds finished before it has said anything useful.

The immediate source is Sam Kriss's essay [“If you let AI do your writing, I will kill you”](https://samkriss.substack.com/p/if-you-let-ai-do-your-writing-i-will). The essay is polemical, and its claims about particular writers are not evidence for this project. Its close reading of empty prose is useful.

## The central smell: language standing in for observation

Weak prose often supplies the shape of an insight without the substance. It names a transformation, announces stakes, or offers a metaphor, but withholds the fact, example, mechanism, price, or decision the reader needs.

A catering company says it creates “meaningful experiences” but does not say what it cooks or what it costs. Technical writing can fail in the same way. “Agentic engineering transforms the developer into an orchestrator” sounds consequential, but it does not tell the reader what to do differently on Monday morning.

Ask:

- What happened?
- Who did what?
- What changed in the workflow?
- What evidence supports this?
- What should the reader do next?

If a paragraph cannot answer one of those questions, cut it or make it concrete.

## Smells to catch

### 1. The empty reversal

Pattern:

> It is not X. It is Y.

The construction creates emphasis cheaply. Keep it only when the distinction resolves a real ambiguity. Otherwise state the positive claim and show the consequence.

Weak:

> Agentic coding is not code generation. It is a new operating model.

Better:

> A coding agent can search the repository, edit several files, run tests, and retry. The developer must therefore define the task boundary and the checks that stop the loop.

### 2. The slogan before the example

Bold labels such as “harness engineering,” “measurable back pressure,” or “front-loaded leverage” can become substitutes for explanation.

Use this order:

1. concrete case
2. observed pattern
3. name, if the name helps later discussion

Do not make readers decode a taxonomy before they understand the problem.

### 3. The immaculate list

Seven parallel “shifts,” three “pillars,” or five “keys” can signal that the writer optimized the shape of the answer. Lists are useful when the items are genuinely comparable. They become suspicious when every item has the same cadence and abstraction level.

Test each item:

- Does it earn its place?
- Is it distinct from the neighboring item?
- Is the number meaningful, or merely tidy?

### 4. The repeated paragraph mold

A report that repeats `Evidence → Implication → Boundary` eight times may be easy to scan, but it soon sounds machine-stamped. Preserve evidence and caveats while varying the prose. Put qualifications next to the claim they qualify.

### 5. Abstract nouns doing the work

Watch for sentences where “practice,” “maturity,” “capability,” “currentness,” “reliability,” or “governance” acts without a named person or system.

Weak:

> Organizational capability enables reliable adoption.

Better:

> Teams with fast tests, repeatable environments, and enforced review can give agents more room to act without losing the ability to detect a bad change.

### 6. Metaphor without a mechanism

Words such as “amplifier,” “control system,” “inheritance,” “layer,” and “feedback loop” can clarify a mechanism. They can also create a glow around an ordinary point.

After a metaphor, state the mechanism in literal language. If the literal version is stronger, keep only that.

### 7. Inflated consequence

Avoid “fundamental,” “transformative,” “revolutionary,” “inevitable,” and “the future of” unless the evidence establishes that scale. Prefer the observed change and its limits.

### 8. Vague source laundering

“Research shows,” “the literature suggests,” and “practitioners agree” conceal disagreement and source quality.

Name the source, setting, and result:

> METR studied 16 experienced open-source developers working on 246 tasks. With the early-2025 tools in the study, they took 19% longer.

Then give the limitation.

### 9. Caveat texture

A paragraph can accumulate “may,” “can,” “often,” and “in some settings” without becoming more honest. A useful caveat identifies the boundary:

- sample
- task type
- measurement method
- date/tool generation
- missing comparison

### 10. Restatement disguised as synthesis

If the introduction, numbered list, historical interpretation, implications, and conclusion all repeat the same thesis, the document is padding itself.

Each section should add one of:

- evidence
- mechanism
- counterexample
- decision
- procedure

### 11. The frictionless timeline

A timeline can imply that one practice cleanly replaced another and that the present was inevitable. Software practices overlap, recur, and often fail in implementation.

For each era, name:

- the problem practitioners were trying to solve
- the practice they tried
- what endured
- what remained unresolved

### 12. The ceremonial conclusion

Avoid ending with a compressed slogan that merely restates the title. End with a decision, an open question, or the next action.

## Project-specific checks

Before publishing a primer page, ask:

- Does the opening answer a reader question within the first two paragraphs?
- Is there a concrete workflow, example, command, or decision rule?
- Are named concepts introduced after the reader sees the problem?
- Does every table help a decision, or is it decorating a taxonomy?
- Are research findings tied to sample, setting, date, and limitation?
- Does the page say where the guidance fails?
- Have we removed repeated thesis statements?
- Could a sentence appear unchanged on a consultancy landing page? If so, rewrite it.
- Could the prose describe any technology? If so, add the missing specifics.
- Can the maintainer explain every sentence without relying on its tone?

## Editing pass

1. Underline concrete nouns, actors, actions, and observable outcomes.
2. Circle slogans, abstractions, metaphors, and antitheses.
3. Replace a circled phrase with evidence or an example where possible.
4. Delete sections that only restate the thesis.
5. Read aloud for repeated cadence and templated paragraph shapes.
6. Run the writing-quality linter for mechanical issues.
7. Perform a final source and meaning check; a clean lint result does not establish truth or usefulness.

## House rule

Use AI to search, compare, outline, or challenge prose if useful. The named author or maintainer remains responsible for every claim and sentence. Do not publish language that nobody chose, checked, and can defend.
