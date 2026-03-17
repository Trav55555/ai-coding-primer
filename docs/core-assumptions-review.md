---
id: ai-coding-primer-core-assumptions-review
tags:
  - project
  - ai-coding
  - critique
  - content-strategy
  - information-architecture
type: review
status: active
created: '2026-03-15'
---

# Core Assumptions Review

## Bottom Line

The project's strongest assumption is that **durable value in AI coding education comes from workflows, verification, context management, and judgment rather than from tool shopping**. That assumption is directionally right and increasingly well-supported.

Its weakest assumption is that one documentation product can successfully be **both**:

- a durable learning system
- a current market guide to tools and models

Those two jobs age at different speeds and want different information architectures.

## What the Project Currently Assumes

### 1. The audience is one funnel

The project assumes beginners, experienced developers, and tech leads can all move through one shared guide with the same navigation spine.

**Why this is reasonable:**
- There is a clear beginner → intermediate → advanced progression.
- The workflow-first material is useful across skill levels.

**Why this is fragile:**
- Beginners need safety rails and simpler choices.
- Experienced developers need sharper tradeoff analysis and less onboarding.
- Team leads care about governance, rollout, and verification policy more than tool setup.

**If I started from scratch:**
- I would treat these as three entry points, not one funnel.
- I would keep one shared knowledge base underneath, but expose three top-level journeys:
  - learn AI coding
  - choose a workflow and stack
  - adopt AI coding safely as a team

### 2. Workflow guidance is the product; tools are supporting reference

The project now assumes workflows are the durable center and tool/model pages are supporting material.

**This is the strongest assumption in the project.**

It matches:
- the maintenance reality that pricing and model specifics drift fast
- the research signal that verification, review, context, and learning habits matter more than brand choice
- the lived reality that most users fail from poor workflow, not from picking the "wrong" tool

**If I started from scratch:**
- I would make workflows the homepage, not a section.
- I would treat tool pages as short compatibility/reference notes.
- I would stop pretending most readers need a broad survey of the tool landscape.

### 3. The right unit of teaching is the page

The docs assume a reader will understand AI coding by reading discrete topic pages: context engineering, effective patterns, workflow archetypes, tool comparison, model selection.

**Why this works:**
- It is easy to browse and maintain.
- It maps naturally onto Starlight navigation.

**Why this underperforms:**
- AI coding is primarily procedural, not encyclopedic.
- Readers often need decision sequences and worked examples more than concept pages.
- Topic pages duplicate each other because the same ideas recur across workflows, tools, and safety guidance.

**If I started from scratch:**
- I would organize around a smaller number of end-to-end scenarios:
  - fix a bug
  - add a feature
  - refactor safely
  - evaluate a tool for a team
  - work in a sensitive/private environment
- Then I would attach concept pages as support, not as the main unit.

### 4. "Intermediate" is the real heart of the product

The project implicitly assumes the biggest value sits in the intermediate layer: effective patterns, context engineering, common mistakes, learning with AI, and workflow archetypes.

That is true.

**What this reveals:**
- Beginner content mostly helps users get oriented.
- Advanced content is promising but still comparatively thin.
- The real product-market fit is in helping developers move from naive prompting to disciplined AI-assisted work.

**If I started from scratch:**
- I would build the entire site around this transition.
- The central question would be:
  - "How do you move from casual AI use to reliable engineering workflows?"

### 5. Evidence should support the guide, not dominate it

The project assumes research is useful but should live in a separate section, with the practical guide remaining readable and opinionated.

**This assumption is mostly correct.**

If research dominates the core pages, the site becomes academic and hard to use. If research is fully separated, the main guide becomes trust-me advice.

**The right model is hybrid:**
- practical pages should make claims
- each major claim should signal whether it is:
  - research-backed
  - practitioner-backed
  - synthesis / judgment call

**If I started from scratch:**
- I would make this evidence labeling system part of the design from day one.
- I would not rely on a separate research section to carry all epistemic weight.

### 6. Static documentation can keep up with a fast-moving market

This used to be a stronger assumption in the project, and remnants still exist.

It is the assumption that a static docs site can meaningfully track:
- tools
- models
- providers
- enterprise packaging
- capabilities
- privacy posture
- workflow fit

all at once.

**This is the most dangerous product assumption.**

Even after removing most pricing, the market-reference layer still wants frequent revision.

**If I started from scratch:**
- I would split the product into two layers:
  - **Durable primer**: workflows, safety, verification, learning, context
  - **Living index**: tools/models/providers, intentionally thinner, reviewed on cadence
- Or I would remove most market-reference content entirely and keep only a short workflow-based chooser.

### 7. The five-levels model is a useful scaffold

The project assumes the five levels help readers orient themselves.

**Why this is useful:**
- It gives users a mental model for progression.
- It reframes AI use as increasing operational responsibility, not just increasing convenience.

**Why I would challenge it:**
- It risks sounding more precise than it is.
- It encourages readers to optimize for "levels" rather than capabilities.
- Level 4/5 language is memorable, but it can subtly glamorize high-autonomy workflows that most users should not adopt yet.

**If I started from scratch:**
- I might keep the model, but I would demote it.
- I would frame progression around capabilities instead:
  - verify outputs
  - manage context
  - control scope
  - design harnesses
  - govern AI in teams

### 8. Templates scale the guide's usefulness

The project assumes template libraries (`CLAUDE.md`, `.cursorrules`, etc.) make the primer more actionable.

**Why this helps:**
- Templates create immediate utility.
- They convert abstract advice into usable artifacts.

**Why this is risky:**
- Template catalogs expand maintenance surface fast.
- Parallel template families duplicate effort.
- The more templates you add, the more the site shifts from "primer" to "configuration library."

**If I started from scratch:**
- I would reduce the template surface dramatically.
- I would keep a small number of canonical patterns and generate variants automatically if needed.
- I would treat templates as downstream outputs of the content model, not hand-maintained assets.

### 9. Security deserves first-class treatment

The project assumes AI coding has enough novel risk that security should be a top-level section.

**This assumption is correct and should stay.**

Many AI coding guides underweight:
- prompt injection
- slopsquatting
- MCP/plugin trust
- permission creep
- verification failures as a security problem

This project is unusually strong here.

**If I started from scratch:**
- Security would remain first-class.
- I would integrate more of it into workflows instead of isolating it as a separate destination.
- For example: every major workflow would include a "risk boundary" subsection.

## What I Would Change From Scratch

## 1. Narrow the product definition

I would choose one of these products explicitly:

### Option A: The durable workflow primer
Focus on:
- workflows
- verification
- context engineering
- safety
- learning

Keep tools/models as a thin appendix.

### Option B: The AI coding market guide
Focus on:
- tool selection
- model/provider tradeoffs
- org rollout choices
- operational constraints

Keep learning/workflow content shorter.

Right now the project is strongest when it behaves like Option A.

## 2. Rebuild navigation around jobs-to-be-done

Instead of:
- beginner
- intermediate
- advanced
- tools
- models

I would consider:
- start safely
- fix bugs and ship features
- choose a workflow and stack
- work with AI without losing skill
- adopt AI as a team
- reference

That would align the information architecture with reader intent rather than with content genre.

## 3. Make evidence visible in the core experience

The current split between practical pages and research pages is sensible, but from scratch I would bake evidence signals into the design system:

- `Research-backed`
- `Practitioner-backed`
- `Synthesis`

This would let the guide stay opinionated while remaining intellectually honest.

## 4. Treat market data as perishable

Anything involving:
- model rankings
- tool capabilities
- enterprise packaging
- hosting options
- access models

should be designed as perishable.

From scratch, I would:
- reduce surface area
- add explicit review dates
- use external live trackers where possible
- avoid teaching users to depend on static comparison tables

## 5. Build around worked examples

The site currently has strong conceptual content, but from scratch I would invest more in worked examples.

For each major workflow:
- show the prompt shape
- show the verification loop
- show the failure mode
- show the recovery move

This would likely teach better than adding more taxonomy pages.

## 6. Separate "how to learn" from "how to operate"

The project currently mixes:
- learning-safe AI habits
- professional operating patterns
- team-level governance

These are related, but not the same.

From scratch, I would separate:
- **learning with AI**
- **shipping with AI**
- **governing AI use in teams**

That would reduce audience confusion and make recommendations feel less one-size-fits-all.

## What I Would Keep

- workflow-first direction
- strong verification emphasis
- strong security emphasis
- explicit treatment of learning tradeoffs
- provider vs model distinction
- honest caveats about evidence quality

## What I Would Remove or De-emphasize

- broad tool-market coverage as a core product promise
- any static comparison dimension that needs frequent maintenance
- overprecise maturity frameworks unless tied to concrete capabilities
- large hand-maintained template catalogs unless they can be generated

## Most Important Strategic Decision

If I had to choose only one change from scratch, it would be this:

**I would define the project as a workflow-and-judgment primer, not as a comprehensive AI coding reference.**

That one decision would simplify:
- the information architecture
- the maintenance burden
- the evidence model
- the audience story
- the update cadence

It would also make the project more defensible, because workflow judgment ages much more slowly than tool facts.

## What This Means for the Current Project

This does **not** require a full restart.

The current workflow-first repositioning already moved the project in the right direction by removing most pricing-led guidance, strengthening workflow pages, and adding evidence caveats.

The pragmatic path is incremental:

- continue reducing market-reference surface area where maintenance is highest
- deepen scenario-based workflow content and verification loops
- standardize evidence labels across high-impact pages
- keep tool/model pages as thin workflow-fit reference rather than as primary curriculum

In other words, the recommendation is strategic pruning and tighter product definition, not a ground-up rewrite.
