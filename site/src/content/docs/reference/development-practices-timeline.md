---
title: From Human Computers to Agentic Engineering
description: A history of how programming work, feedback, and control evolved into modern agentic development.
---

A person using autocomplete chooses the file, integrates a suggestion, and decides when to run a check. A coding agent can search a repository, edit several files, run commands, inspect failures, and try again.

That difference rests on a much longer history. Compilers automated machine translation. Build systems made reconstruction repeatable, and version control made changes traceable.

Continuous integration made checks immediate. Cloud platforms made infrastructure programmable. Coding agents now use those systems on a developer's behalf.

This timeline follows three questions:

- What could the machine or tool do?
- Who performed and coordinated the work?
- How did people check and control the result?

:::note[Overlapping practices]
The periods below are approximate. New practices rarely replace old ones. Batch systems, formal methods, spreadsheets, Agile teams, mainframes, and cloud platforms still coexist.
:::

## 1. Human computers and algorithms

**Before electronic computers**

An algorithm is a repeatable procedure, not a type of machine. Euclid's method for finding a greatest common divisor and the arithmetic work associated with al-Khwārizmī long predate electronic computing.

For centuries, a “computer” was a person. Astronomy, navigation, insurance, surveying, and ballistics used groups of people to perform prescribed calculations and check one another's results. Women were prominent in many of these offices, including the groups later employed by the United States space program.

This work already contained familiar engineering problems: divide a large calculation, specify each step, detect errors, and decide who answers for the result.

**What endured:** algorithms, decomposition, review, and the separation between designing a procedure and executing it.

**What remained unresolved:** ambiguous instructions, calculation errors, and unequal credit for the work.

## 2. Programmable machinery

**1800s to the 1930s**

The Jacquard loom used punched cards to control textile patterns. Charles Babbage designed the Analytical Engine around programmable operations and stored values. Ada Lovelace's 1843 notes published a procedure for Bernoulli numbers and described a machine that might operate on symbols as well as quantities. Herman Hollerith later used punched-card tabulators for the 1890 United States census.

The familiar claim that Lovelace was “the first programmer” is disputed because her work developed through correspondence and collaboration with Babbage. The less dramatic claim is secure: her notes contain an important early machine procedure and a broad account of symbolic computation.

**What endured:** encoded instructions that can be copied, inspected, and changed separately from the mechanism that executes them.

**What remained unresolved:** programming still depended on specialized machinery and its physical setup.

## 3. Wartime machines and early programmers

**1930s and 1940s**

Alan Turing's 1936 paper defined a universal model of computation. Practical machines then emerged through several lines of work, including relay systems, Colossus, the Harvard Mark I, and the Electronic Numerical Integrator and Computer (ENIAC). Which machine counts as the “first computer” depends on whether the criterion is electronic, digital, programmable, general-purpose, or stored-program.

Programming was collective work. ENIAC's six original programmers translated mathematical procedures into switch settings and cable configurations without established languages or tools. Historical accounts long gave more attention to the machine's hardware than to the women who developed its programming methods.

The 1945 EDVAC draft described a stored-program design commonly associated with John von Neumann. The document was influential, but the design emerged from a larger group. The Manchester Baby ran a stored program in 1948, and EDSAC became a practical stored-program system in 1949.

**What endured:** general-purpose computation, stored instructions, reusable routines, and programming as distinct work.

**What remained unresolved:** scarce machine access, fragile hardware, and poor programming interfaces.

## 4. Compilers, languages, and a programming profession

**1950s to early 1960s**

Early programmers wrote numeric machine instructions and symbolic assembly. Assemblers, loaders, and subroutine libraries removed some repetition. Grace Hopper's compiler work and IBM's Formula Translation (FORTRAN) project moved machine translation into software. COBOL addressed business data processing, Lisp supported symbolic computation, and ALGOL influenced block structure and language design.

A high-level language changes more than notation. It lets a programmer state more of the problem while a compiler handles machine details. This widened participation and improved portability, but also created new layers that developers had to trust and debug.

Programming's occupational status rose with its economic importance. Historical research by Nathan Ensmenger, Janet Abbate, and Marie Hicks documents how hiring practices and professional culture also recoded work once associated with women as male technical expertise.

**What endured:** compilers, high-level languages, libraries, standards, and the professional programmer role.

**What remained unresolved:** portability, correctness, maintenance, and unequal access to the profession.

## 5. Batch, time-sharing, and Unix

**1950s to 1970s**

Under batch processing, a programmer submitted a job and waited for operators and machine time. One syntax error could delay feedback for hours. This encouraged careful preparation but separated programmers from execution.

Time-sharing systems such as CTSS let several people interact with a computer through terminals. Multics developed ideas in security, file systems, and dynamic linking. Unix paired interactive use with files, shells, small tools, pipes, and the portable C language.

The feedback loop became conversational: edit, run, inspect, and revise. Unix also established a durable development style in which simple tools exchange text and larger workflows emerge through composition.

**What endured:** interactive development, operating systems, files, shells, and composable tools.

**What remained unresolved:** security, access, coordination, and growing system complexity.

## 6. Software engineering, structure, and modules

**Late 1960s to 1980s**

Large projects exposed a problem that faster hardware did not solve: organizations struggled to specify, coordinate, deliver, and maintain software. The 1968 and 1969 North Atlantic Treaty Organization (NATO) conferences made “software engineering” a public response to that difficulty.

Several practices addressed different parts of the problem. Edsger Dijkstra argued for control flow that people could reason about. C. A. R. Hoare developed a formal method for stating program properties. Niklaus Wirth described stepwise refinement.

David Parnas argued that modules should hide design decisions likely to change. Michael Fagan introduced structured inspections with roles and entry criteria.

Later accounts often credit Winston Royce's 1970 paper with inventing waterfall. Royce described a sequential model but warned that it was risky without feedback and prototyping. Iterative development existed long before the Agile label; Barry Boehm's later spiral model made repeated risk analysis explicit.

**What endured:** information hiding, specifications, structured review, iteration, and risk management.

**What remained unresolved:** no method could guarantee useful requirements or remove the difficulty of changing a large system.

## 7. Repeatable builds, version control, and testing

**1970s to 1990s**

As software spread across files and teams, developers needed to reproduce a result and understand how it changed. Stuart Feldman's `make` used dependency rules to rebuild affected files. SCCS and RCS recorded revisions; CVS and Subversion supported centralized team workflows. Git and Mercurial later made full project history local and distributed.

Testing also became software. Unit-test frameworks developed through Smalltalk's SUnit, JUnit, and the wider xUnit family. QuickCheck made executable properties and generated cases practical. Fagan inspections and later pull-request review formalized human examination of changes.

These tools created the control surfaces coding agents now use: a repository, a diff, a build command, a test result, and a reversible history.

**What endured:** reproducible builds, source history, automated tests, review, and rollback.

**What remained unresolved:** weak tests, merge conflicts, integration failures, and increasingly complex toolchains.

## 8. Personal, object-oriented, and end-user programming

**Late 1970s onward**

Personal computers moved programming outside institutional machine rooms. VisiCalc and later spreadsheets let users express business rules through cells and formulas without adopting the professional programmer identity. HyperCard, macros, notebooks, visual builders, and low-code systems continued that expansion.

End-user programming brought familiar risks with it: hidden dependencies, copy-and-paste errors, weak version history, and unclear ownership.

Simula and Smalltalk developed object-oriented programming around classes, objects, messages, and interactive environments. C++, Java, frameworks, design patterns, and the Unified Modeling Language later carried object-oriented ideas into mainstream development. Computer-Aided Software Engineering tools promised model-driven generation, with mixed results.

**What endured:** direct manipulation, live environments, objects, frameworks, and programming by domain experts.

**What remained unresolved:** generated software still required testing, integration, maintenance, and ownership.

## 9. Free software, open source, and global development

**1980s to 2000s**

The GNU Project and Free Software Foundation framed software freedom as the right to run, study, modify, and share programs. Linux became a major example of internet-scale distributed development. The Open Source Initiative later promoted a business-compatible framing. Free software and open source overlap in practice but differ in political emphasis.

Public repositories, mailing lists, issue trackers, maintainers, forks, and peer review allowed collaboration outside one firm or location. The same model exposed difficult questions about unpaid maintenance, governance, exclusion, and corporate dependence on volunteer infrastructure.

Software work also globalized through consulting, outsourcing, and offshore development. India's software-services industry became central to enterprise delivery and maintenance. Distributed teams developed asynchronous handoffs decades before coding-agent orchestration.

**What endured:** public source, licensing, distributed review, maintainership, and global teams.

**What remained unresolved:** sustainable maintenance, governance, inclusion, supply-chain trust, and labor inequality.

## 10. Agile, test-driven development, and continuous integration

**1990s to 2000s**

Extreme Programming combined short iterations, pair programming, refactoring, continuous integration, close customer contact, and test-first development. The 2001 Agile Manifesto gave several lightweight methods a shared statement: value working software, collaboration, and response to change.

Agile did not invent iteration. It challenged process that substituted plans and documents for frequent evidence. Corporate adoption sometimes recreated the bureaucracy it opposed through mandatory ceremonies, certifications, and velocity targets.

Test-driven development made tests part of design feedback. Continuous integration made teams combine and check changes frequently. The durable contribution is the short, executable feedback loop—not a rule that every test must precede every line of code.

**What endured:** small batches, pair work, refactoring, automated checks, and adaptation.

**What remained unresolved:** product judgment, weak metrics, organizational incentives, and process cargo cults.

## 11. Cloud, DevOps, reliability, and platforms

**2000s to 2020s**

Cloud services turned infrastructure procurement into an API call. Infrastructure-as-code tools made environments versioned and repeatable. Containers packaged runtime assumptions; Kubernetes made scheduling and service operation programmable.

Continuous delivery extended integration checks toward releasable systems. DevOps challenged the handoff between development and operations. Site Reliability Engineering used service-level objectives, error budgets, automation, and production data to manage reliability.

Platform engineering then addressed a consequence of this expansion: asking every developer to master every cloud and operational concern creates excessive cognitive load. Internal platforms provide approved, self-service paths while encoding security and delivery constraints. Supply-chain frameworks added provenance, dependency controls, and policy checks.

**What endured:** deployment pipelines, programmable infrastructure, observability, self-service platforms, and policy as code.

**What remained unresolved:** distributed-system failure, cloud cost, platform sprawl, and the balance between autonomy and central control.

## 12. AI pair programming and coding agents

**2021 onward**

GitHub Copilot brought large-language-model completion into mainstream editors. Chat interfaces added explanation, debugging, test generation, and design discussion. Repository-aware agents can now search files, edit code, run commands, inspect failures, and prepare patches.

The Software Engineering Benchmark (SWE-bench) improved evaluation by using real repository issues and tests. It still measures a bounded task. A passing patch does not show whether reviewers understand it, whether it is secure, or whether the next change will be easy.

Current agentic practice therefore relies on earlier engineering controls:

- acceptance criteria and small changes
- repositories and reversible history
- builds, tests, types, and policy checks
- isolated environments and permission boundaries
- saved plans, checkpoints, and handoffs
- production observability and human review

Evidence on productivity remains conditional. The research nonprofit METR found that experienced open-source developers using the early-2025 tools in its study took 19% longer. Its 2026 update found weak signs of improvement but could not produce a reliable estimate because task selection and concurrent agents complicated the comparison. The 2025 report from the DevOps Research and Assessment (DORA) program found that AI magnifies strengths and weaknesses in the surrounding delivery system.

Coding agents can perform more of the execution. People and organizations still choose the goal, grant access, accept the change, operate the system, and answer for harm.

**What appears durable:** delegated tool use, faster generation, and executable feedback inside the development environment.

**What remains unresolved:** maintainability, review burden, skill formation, security, provenance, liability, and labor displacement.

## Where agentic engineering fits

Agentic engineering draws from several older traditions at once:

- human computation's separation between designing and executing a procedure
- compilers and high-level languages' delegation of low-level work
- Unix's tool composition and text interfaces
- structured programming and modularity's emphasis on legibility
- version control and continuous integration's reversible, executable feedback
- DevOps and platform engineering's programmable environments and operational controls
- end-user programming's expansion of who can produce software

The new element is a probabilistic tool user operating across those systems. That makes task boundaries, feedback, permissions, and ownership part of everyday coding practice.

For practical guidance, continue with [Workflow Archetypes](/ai-coding-primer/learn/intermediate/workflow-archetypes/), [Context Engineering](/ai-coding-primer/learn/intermediate/context-engineering/), and [Agent Harness](/ai-coding-primer/learn/advanced/agent-harness/).

## Sources and further reading

### Computing and programming history

- [Stanford Encyclopedia of Philosophy: Algorithms](https://plato.stanford.edu/entries/algorithms/)
- [NASA: The Human Computers](https://www.nasa.gov/history/human-computers/)
- [Ada Lovelace's notes on the Analytical Engine](https://www.fourmilab.ch/babbage/sketch.html)
- [Turing: On Computable Numbers](https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf)
- [ENIAC Programmers Project](http://eniacprogrammers.org/)
- [University of Manchester: The Baby computer](https://www.manchester.ac.uk/discover/history-heritage/history/stories/baby-computer/)
- [IBM: The history of FORTRAN](https://www.ibm.com/history/fortran)
- [Ritchie and Thompson: The UNIX Time-Sharing System](https://people.eecs.berkeley.edu/~brewer/cs262/unix.pdf)

### Development practices

- [NATO Software Engineering Conference report, 1968](http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1968.PDF)
- [Dijkstra: Go To Statement Considered Harmful](https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf)
- [Parnas: On the Criteria To Be Used in Decomposing Systems into Modules](https://www.cs.umd.edu/class/spring2003/cmsc838p/Design/criteria.pdf)
- [Royce: Managing the Development of Large Software Systems](https://www.praxisframework.org/files/royce1970.pdf)
- [Feldman: Make—A Program for Maintaining Computer Programs](https://pages.cs.wisc.edu/~horwitz/make/make.pdf)
- [Agile Manifesto](https://agilemanifesto.org/)
- [Fowler: Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html)
- [Google: Site Reliability Engineering](https://sre.google/sre-book/table-of-contents/)
- [CNCF Platforms whitepaper](https://tag-app-delivery.cncf.io/whitepapers/platforms/)
- [NIST Secure Software Development Framework](https://csrc.nist.gov/publications/detail/sp/800-218/final)

### Agentic development evidence

- [SWE-bench](https://arxiv.org/abs/2310.06770)
- [METR early-2025 developer productivity study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
- [METR 2026 experiment update](https://metr.org/blog/2026-02-24-uplift-update/)
- [DORA 2025 report](https://dora.dev/dora-report-2025/)
- [Coding-agent context-files study](https://arxiv.org/abs/2602.11988)
