---
id: ai-coding-primer-computing-development-practices-history-research
tags:
  - project
  - computing-history
  - software-engineering-history
  - development-practices
  - research
type: research-report
status: active
created: '2026-08-07'
---

# Computing and Development Practices: A Research History

**Research cutoff:** 2026-08-07  
**Purpose:** Supply the historical foundation for a public timeline in the Agentic Engineering Primer.

## Research question

How did programming become modern software development, and where does agentic coding fit?

The answer requires more than a machine timeline. Programming practice changed when:

- instructions gained new representations, from punched cards to high-level languages and natural language
- feedback became faster, from overnight batch jobs to continuous integration
- software work moved between occupations, teams, firms, and global communities
- tools encoded more of the build, test, release, security, and operations process
- responsibility moved, even when accountability remained with people and organizations

Agentic coding joins these threads. A coding agent can use a repository, shell, test suite, browser, and issue tracker on a developer's behalf. This is a larger delegation of action than autocomplete. It also depends on seventy years of build automation, version control, testing, deployment, observability, and access control.

## A better frame than “generations of technology”

Five questions make the history useful to working developers:

1. **Who or what executes the instructions?** Human computers, operators, programmers, compilers, build systems, deployment systems, or agents.
2. **How are instructions represented?** Tables, wiring, machine code, symbolic assembly, high-level languages, diagrams, models, tests, or natural language.
3. **How quickly does the author receive evidence?** Days, hours, seconds, continuous checks, or an autonomous retry loop.
4. **How do people coordinate change?** Paper procedures, module boundaries, inspections, version control, tickets, pull requests, platforms, or orchestrators.
5. **Who can authorize and answer for the result?** Mathematicians, operators, programmers, managers, maintainers, platform teams, end users, or organizations deploying agents.

These questions reveal a recurring pattern: automation removes one form of manual work and exposes another bottleneck. Machine time became cheaper; programmer and coordination time became more visible. Code generation is now becoming cheaper; review, verification, product judgment, and system ownership are becoming more visible.

## Timeline

## 1. Algorithms and human computation — antiquity to the nineteenth century

An algorithm is older than an electronic computer. Euclid's method for the greatest common divisor and the arithmetic work associated with al-Khwārizmī show that a repeatable procedure can exist independently of a machine.

For centuries, a “computer” was a person. Astronomy, navigation, surveying, insurance, and later ballistics relied on groups who followed prescribed calculation methods and checked one another's results. These offices already had recognizable development concerns: decomposition, notation, repeatability, error detection, throughput, and supervision.

Human-computing work was often organized as lower-status labor. Women became especially prominent in nineteenth- and twentieth-century calculation offices. Jennifer Light's history of wartime computing and the National Aeronautics and Space Administration's accounts of human computers show why labor history belongs in computing history. The people who performed and stabilized the work did not always receive the credit.

**What endured:** algorithms, decomposition, checking, and the separation between designing a method and executing it.  
**What remained unresolved:** errors, ambiguous instructions, labor status, and accountability.

Sources:

- Stanford Encyclopedia of Philosophy, “Algorithms”: https://plato.stanford.edu/entries/algorithms/
- MacTutor, al-Khwārizmī: https://mathshistory.st-andrews.ac.uk/Biographies/Al-Khwarizmi/
- Jennifer S. Light, “When Computers Were Women”: https://doi.org/10.1353/tech.1999.0128
- NASA, “The Human Computers”: https://www.nasa.gov/history/human-computers/

## 2. Mechanized instructions — 1800s to the 1930s

The Jacquard loom used punched cards to control woven patterns. Charles Babbage's Analytical Engine design combined a store, a mill, and programmable operations. Ada Lovelace's 1843 notes described how such a machine might operate on symbols and published a procedure for Bernoulli numbers. Herman Hollerith's punched-card tabulators later demonstrated industrial data processing in the 1890 United States census.

This period established a distinction that still matters: data and control can both be represented, inspected, copied, and changed. It also established an industrial pattern in which machinery, encoded instructions, operators, and organizations form one system.

Calling Lovelace “the first programmer” compresses a disputed collaboration into a memorable phrase. A safer claim is that she published an early machine procedure and articulated a broad account of symbolic computation.

**What endured:** programmable control, symbolic representation, and reusable instruction media.  
**What remained unresolved:** no practical general-purpose machine existed, and programming was inseparable from hardware design.

Sources:

- Computer History Museum, Jacquard loom: https://www.computerhistory.org/revolution/punched-cards/2/2
- Science Museum, Analytical Engine: https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbage-analytical-engine
- Lovelace's notes: https://www.fourmilab.ch/babbage/sketch.html
- U.S. Census, Hollerith tabulator: https://www.census.gov/history/www/innovations/technology/the_hollerith_tabulator.html

## 3. Formal computation and wartime machines — 1930s to 1940s

Alan Turing's 1936 paper formalized a universal model of computation. The 1930s and 1940s then produced several lines of practical machines: analog analyzers, Zuse's machines, Harvard Mark I, Colossus, ENIAC, and others. There is no uncontested single “first computer”; the answer changes with the criteria—electronic, digital, programmable, general-purpose, or stored-program.

The work was collective. The six women now known as the Electronic Numerical Integrator and Computer (ENIAC) programmers translated mathematical procedures into switch settings and cable configurations without a programming language, operating system, or established profession to guide them. Histories that credit only hardware inventors miss the creation of programming methods.

The 1945 draft report for the Electronic Discrete Variable Automatic Computer (EDVAC) described the stored-program design commonly associated with John von Neumann. The document was influential, but the architecture emerged from a larger group that included J. Presper Eckert, John Mauchly, Herman Goldstine, Arthur Burks, and others. The Manchester Baby ran a stored program in 1948. The Electronic Delay Storage Automatic Calculator (EDSAC) became a practical stored-program system in 1949.

**What endured:** general computation, stored instructions, reusable subroutines, and programming as distinct work.  
**What remained unresolved:** scarce machine time, fragile hardware, poor interfaces, and weak recognition of programming labor.

Sources:

- Turing, “On Computable Numbers”: https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf
- Bletchley Park, Colossus: https://bletchleypark.org.uk/our-story/colossus/
- ENIAC Programmers Project: http://eniacprogrammers.org/
- EDVAC draft: https://archive.org/details/firstdraftofrepo00vonn
- University of Manchester, Baby: https://www.manchester.ac.uk/discover/history-heritage/history/stories/baby-computer/
- University of Cambridge, EDSAC: https://www.cl.cam.ac.uk/relics/edsac99/history.html

## 4. Programming languages and the programmer occupation — 1950s to early 1960s

Early programmers wrote machine instructions, symbolic assembly, loaders, and subroutine libraries. Grace Hopper's compiler work and IBM's Formula Translation (FORTRAN) project moved part of that translation into software. FORTRAN showed that a compiler could produce efficient machine code from a notation closer to scientific work. Common Business-Oriented Language (COBOL) addressed business data processing. Lisp supported symbolic computation. Algorithmic Language (ALGOL) helped establish block structure, lexical scope, and formal language description.

High-level languages did more than save keystrokes. They changed who could express a computation, what reviewers could inspect, and which details could be left to a translator. They also created new portability and standardization problems.

As software became more valuable, programming shifted from work treated as clerical or secondary toward a specialized occupation. Nathan Ensmenger, Janet Abbate, and Marie Hicks document how professionalization also masculinized the field in the United States and Britain. Hiring tests and cultural stereotypes recast programming as male technical expertise while obscuring earlier women's work.

**What endured:** compilers, abstraction from hardware, language communities, and the programmer role.  
**What remained unresolved:** portability, correctness, maintenance, occupational status, and exclusion.

Sources:

- Computer History Museum, Grace Hopper: https://www.computerhistory.org/fellowawards/hall/grace-hopper/
- IBM, FORTRAN: https://www.ibm.com/history/fortran
- McCarthy, “History of Lisp”: http://jmc.stanford.edu/articles/lisp/lisp.pdf
- ALGOL 60 report: https://www.masswerk.at/algol60/report.htm
- Nathan Ensmenger, *The Computer Boys Take Over*
- Janet Abbate, *Recoding Gender*
- Marie Hicks, *Programmed Inequality*

## 5. Batch processing and interactive computing — 1950s to 1970s

Batch systems made developers submit jobs and wait for operators and machine schedules. A syntax error might cost hours. Slow feedback encouraged desk checking, flowcharts, and careful preparation, but it also separated programmers from execution.

Time-sharing changed the experience. Systems such as the Compatible Time-Sharing System (CTSS) allowed several users to interact with a computer through terminals. Multics developed ideas in security, hierarchical files, dynamic linking, and interactive use. Unix then paired an interactive system with small tools, pipes, files, shells, and the C language. The resulting environment made experimentation and composition cheaper.

Interactive computing also supported hacker cultures at institutions such as MIT and later networked communities. Their emphasis on hands-on access and peer recognition influenced programming practice, but access depended on universities, corporations, military funding, and social inclusion. The romantic lone-hacker story leaves out those institutions.

**What endured:** terminals, interactive edit-run-debug cycles, operating systems, files, shells, and composable tools.  
**What remained unresolved:** access, security, portability, coordination, and system complexity.

Sources:

- IBM, time-sharing history: https://www.ibm.com/history/time-sharing
- CTSS anniversary materials: https://people.csail.mit.edu/saltzer/Multics/CTSS-Documents/CTSS_50th_anniversary_web_03.pdf
- Multics history: https://multicians.org/
- Ritchie and Thompson, “The UNIX Time-Sharing System”: https://people.eecs.berkeley.edu/~brewer/cs262/unix.pdf
- Gabriella Coleman, *Coding Freedom*: https://press.princeton.edu/books/paperback/9780691144610/coding-freedom

## 6. The software crisis and disciplined design — late 1960s to 1980s

By the late 1960s, organizations could build machines faster than they could reliably deliver large software systems. The 1968 and 1969 North Atlantic Treaty Organization (NATO) conferences made “software engineering” a public response to cost overruns, unreliable systems, maintenance, and coordination at scale. Participants disagreed about whether engineering discipline, better management, better tools, or a new profession would solve the problem.

Several durable practices emerged around the same time:

- Dijkstra argued for control structures that made programs easier to reason about.
- C. A. R. Hoare formalized assertions about program behavior.
- Niklaus Wirth described stepwise refinement from problem to program.
- David Parnas argued that modules should hide design decisions likely to change.
- Michael Fagan described formal code inspections with roles, entry criteria, and measured defects.
- Lehman's work on software evolution showed that useful systems continue to change after delivery.

This was not one movement with one answer. Formal verification, structured programming, modular design, inspections, and lifecycle management addressed different failure modes.

Winston Royce's 1970 paper is often presented as the origin of waterfall. Royce actually warned that a simple sequential process was risky and added feedback and prototyping. Iterative and incremental development also predates the Agile label by decades. Barry Boehm's spiral model later made risk an explicit driver of repeated cycles.

**What endured:** modularity, information hiding, specification, review, risk management, and lifecycle thinking.  
**What remained unresolved:** no method removed essential complexity or guaranteed a useful, maintainable system.

Sources:

- NATO 1968 report: http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1968.PDF
- NATO 1969 report: http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1969.PDF
- Dijkstra, “Go To Statement Considered Harmful”: https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf
- Hoare, “An Axiomatic Basis for Computer Programming”: https://www.cs.cmu.edu/~crary/819-f09/Hoare69.pdf
- Parnas, module decomposition: https://www.cs.umd.edu/class/spring2003/cmsc838p/Design/criteria.pdf
- Fagan, design and code inspections: https://www.ida.liu.se/~TDDC90/labs/lab-papers/fagan76.pdf
- Royce, “Managing the Development of Large Software Systems”: https://www.praxisframework.org/files/royce1970.pdf
- Larman and Basili, iterative development history: https://www.craiglarman.com/wiki/downloads/misc/history-of-iterative-larman-and-basili-ieee-computer.pdf
- Brooks, “No Silver Bullet”: https://www.cs.unc.edu/techreports/86-020.pdf

## 7. Tools for repeatable change — 1970s to 1990s

As programs spread across files and teams, developers needed to reconstruct how a result had been produced. Build automation, revision control, debuggers, test harnesses, and issue systems turned parts of software work into repeatable procedures.

Stuart Feldman's `make` used dependency rules and timestamps to rebuild only what had changed. The Source Code Control System (SCCS) and Revision Control System (RCS) recorded file revisions. The Concurrent Versions System (CVS) and Subversion supported centralized team workflows. Git and Mercurial later made full repository history local and distributed. These tools changed collaboration by making branching, merging, attribution, rollback, and review part of the development system.

Testing also became more programmable. Unit-test frameworks descended through Smalltalk's SUnit to JUnit and the broader xUnit family. QuickCheck later made executable properties and generated cases a practical testing method. None of these eliminated judgment: a test suite only checks the behavior it expresses.

**What endured:** reproducible builds, source history, automated tests, rollback, and traceable change.  
**What remained unresolved:** merge conflicts, weak tests, integration failures, and toolchain complexity.

Sources:

- Feldman, “Make—A Program for Maintaining Computer Programs”: https://pages.cs.wisc.edu/~horwitz/make/make.pdf
- RCS paper: https://www.gnu.org/software/rcs/tichy-paper.pdf
- Git history: https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git
- Fowler, xUnit lineage: https://martinfowler.com/bliki/Xunit.html
- QuickCheck paper: https://www.cis.upenn.edu/~bcpierce/courses/advprog/resources/quick-letter.pdf

## 8. Personal and end-user programming — late 1970s onward

Personal computers and graphical environments moved computation out of institutional machine rooms. VisiCalc and later spreadsheets let users express calculations through cells and formulas without adopting the professional programmer identity. HyperCard, Visual Basic, macros, notebooks, and modern low-code systems continued this expansion.

End-user programming is not a side story. Spreadsheets may be the most widely used programming environment. They also reproduce familiar engineering problems: hidden dependencies, weak tests, copy-paste errors, poor version history, and unclear ownership.

Object-oriented environments such as Smalltalk connected programming language, graphical interface, live inspection, and incremental change. Simula and Smalltalk helped establish classes and objects; later C++, Java, frameworks, the Unified Modeling Language, and design patterns carried object-oriented ideas into industry. Computer-Aided Software Engineering tools promised model-driven generation and lifecycle integration, with mixed results.

**What endured:** interactive environments, direct manipulation, end-user programming, objects, frameworks, and visual tools.  
**What remained unresolved:** hidden complexity, maintainability, governance, and the gap between generating software and owning it.

Sources:

- Computer History Museum, VisiCalc oral history: https://archive.computerhistory.org/resources/text/Oral_History/VisiCalc/VisiCalc_Workshop.oral_history.2004.102658146.pdf
- Bonnie Nardi, *A Small Matter of Programming*
- Alan Kay, “The Early History of Smalltalk”: https://worrydream.com/EarlyHistoryOfSmalltalk/
- ACM Turing Award, Dahl and Nygaard: https://amturing.acm.org/award_winners/dahl_6917600.cfm
- Object Management Group, UML: https://www.omg.org/spec/UML/

## 9. Networks, free software, and distributed collaboration — 1980s to 2000s

The GNU Project and Free Software Foundation framed software freedom as the right to run, study, modify, and share programs. Linux became a major example of distributed internet development. The Open Source Initiative later promoted a business-compatible framing. Free software and open source overlap in licensing and practice but differ in political emphasis.

Mailing lists, public repositories, issue trackers, maintainership, forks, and peer review created organizational forms that did not require one employer or location. They also created new problems: unpaid maintenance, governance conflict, uneven review, hostile communities, and corporate dependence on volunteer infrastructure.

Software production also globalized through consulting, outsourcing, and offshore development. India's software-services industry became central to global delivery, maintenance, and enterprise systems. Time-zone handoffs and distributed teams predate today's asynchronous agents; they offer a history of both increased throughput and coordination loss.

**What endured:** public source, licenses, distributed version control, asynchronous review, and global teams.  
**What remained unresolved:** sustainable maintenance, governance, inclusion, supply-chain trust, and labor inequality.

Sources:

- GNU initial announcement: https://www.gnu.org/gnu/initial-announcement.html
- GNU Manifesto: https://www.gnu.org/gnu/manifesto.html
- Open Source Initiative history: https://opensource.org/history
- Christopher Kelty, *Two Bits*: https://twobits.net/
- National Academies, *The Offshoring of Engineering*: https://nap.nationalacademies.org/catalog/12067/the-offshoring-of-engineering-facts-unknowns-and-potential-implications
- Stanford, Indian software-industry history: https://aparc.fsi.stanford.edu/publications/origins_and_growth_of_the_software_industry_in_india

## 10. Lightweight methods and continuous feedback — 1990s to 2000s

Extreme Programming combined short iterations, pair programming, refactoring, continuous integration, simple design, close customer contact, and tests written before or alongside code. The 2001 Agile Manifesto gave a common statement to several lightweight methods that had developed in reaction to heavyweight process.

Agile did not invent iteration. Its historical contribution was to make responsiveness, working software, and frequent collaboration a public challenge to document-heavy management. Corporate adoption sometimes turned those ideas into mandatory ceremonies, certifications, velocity targets, and scaled process—the kind of bureaucracy the original movement opposed.

Test-driven development made tests part of design feedback. The research record is mixed: Brain-2's maintainability canon cites a meta-analysis finding a small positive effect on external quality and inconclusive productivity effects. The durable lesson is the short executable feedback loop, not a claim that every test must precede every line of code.

**What endured:** small batches, pair work, refactoring, executable feedback, and adaptation.  
**What remained unresolved:** product judgment, organizational incentives, weak metrics, and process cargo cults.

Sources:

- Agile Manifesto: https://agilemanifesto.org/
- Fowler, “The New Methodology”: https://martinfowler.com/articles/newMethodology.html
- Fowler, Refactoring: https://refactoring.com/
- Fowler, Continuous Integration: https://martinfowler.com/articles/continuousIntegration.html
- Brain-2: `03-resources/programming/cozy-code-followup-research-map.md`

## 11. Delivery becomes programmable — 2000s to 2010s

Cloud services turned infrastructure procurement into an API call. Infrastructure-as-code tools made environments declarative and versioned. Containers packaged applications with more of their runtime assumptions; Kubernetes turned scheduling and service operation into a programmable control plane.

Continuous delivery extended continuous integration from a shared build to a releasable system. DevOps challenged the handoff between development and operations. Site Reliability Engineering applied software engineering to operations through service-level objectives, error budgets, automation, and toil reduction. Observability tools shortened the path from production behavior to diagnosis.

These practices changed “done.” A code change was no longer complete when it compiled or passed unit tests. Teams also had to package, deploy, observe, secure, and recover it.

**What endured:** automated pipelines, declarative infrastructure, production feedback, and shared operational ownership.  
**What remained unresolved:** distributed-system failure, cognitive load, cloud cost, security, and organizational boundaries.

Sources:

- NIST cloud definition: https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf
- DevOpsDays history: https://devopsdays.org/about/
- Google SRE book: https://sre.google/sre-book/table-of-contents/
- OpenTelemetry: https://opentelemetry.io/docs/
- Kubernetes concepts: https://kubernetes.io/docs/concepts/overview/

## 12. Platforms, policy, and supply-chain control — late 2010s to 2020s

Platform engineering responds to a consequence of DevOps and cloud adoption: giving every team every operational responsibility can overwhelm developers. Internal platforms provide self-service environments and paved paths while encoding security, deployment, and operational constraints.

Software supply-chain attacks and dependency incidents made provenance, dependency scanning, software bills of materials, signing, and reproducible builds more prominent. The National Institute of Standards and Technology's Secure Software Development Framework and the Supply-chain Levels for Software Artifacts framework treat secure development as a property of the whole production system.

This period matters for agentic coding because an internal platform is already a controlled execution environment. It exposes approved actions, hides dangerous complexity, records events, and checks policy. A coding-agent harness uses many of the same design ideas.

**What endured:** self-service platforms, policy as code, provenance, and least privilege.  
**What remained unresolved:** platform sprawl, exception handling, supply-chain attacks, and the balance between local autonomy and central control.

Sources:

- CNCF Platforms whitepaper: https://tag-app-delivery.cncf.io/whitepapers/platforms/
- NIST SSDF: https://csrc.nist.gov/publications/detail/sp/800-218/final
- SLSA: https://slsa.dev/
- SPDX: https://spdx.dev/

## 13. Artificial intelligence (AI), pair programming, and coding agents — 2021 onward

GitHub Copilot brought large-language-model code completion into mainstream editor workflows. Chat interfaces then added explanation, debugging, test generation, and design discussion. Repository-aware agents extended the loop: they can search files, edit code, run commands, inspect failures, and create patches.

The Software Engineering Benchmark (SWE-bench) helped evaluate agents on real repository issues rather than isolated functions. Its limits are instructive. Passing task tests does not measure review cost, security, architectural quality, or the cost of later changes. Newer evaluations examine longer tasks, context retrieval, and sequential maintenance, but the field does not yet have a fast measure of maintainability.

The surrounding development practice is moving from prompt craft toward task and environment design:

- acceptance criteria before implementation
- small, reviewable changes
- tests and policy checks the agent can run
- minimal repository instructions
- worktrees or sandboxes for isolation
- saved plans and state for long tasks
- separate implementation and validation roles
- human approval for consequential or irreversible actions

Productivity evidence remains conditional. The research nonprofit METR found a 19 percent slowdown for experienced open-source developers using early-2025 tools on the studied tasks. Its 2026 update found weak signs of improvement but could not produce a reliable estimate because developers selected tasks around expected AI value and used agents concurrently. The 2025 report from the DevOps Research and Assessment (DORA) program found that artificial intelligence magnifies the surrounding delivery system's strengths and weaknesses.

The labor question has returned in a new form. Agents can perform work previously assigned to junior developers, contractors, maintainers, or the author directly. Organizations still decide what to build, grant access, accept the patch, operate the system, and answer for harm. Authorship may become diffuse; accountability cannot.

**What appears durable:** delegated tool use, faster generation, executable checks, and tighter integration between coding and delivery systems.  
**What remains unresolved:** productivity, skill formation, review burden, maintainability, provenance, liability, security, and labor displacement.

Sources:

- Codex paper: https://arxiv.org/abs/2107.03374
- GitHub Copilot: https://github.com/features/copilot
- SWE-bench: https://arxiv.org/abs/2310.06770
- SWE-agent: https://proceedings.neurips.cc/paper_files/paper/2024/file/5a7c947568c1b1328ccc5230172e1e7c-Paper-Conference.pdf
- DORA 2025 report: https://dora.dev/dora-report-2025/
- METR early-2025 study: https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/
- METR 2026 update: https://metr.org/blog/2026-02-24-uplift-update/
- Coding-agent context files: https://arxiv.org/abs/2602.11988
- ContextBench: https://contextbench.github.io/
- Agent Retrieval Bench: https://agent-retrieval-bench.github.io/

## Findings across the timeline

### 1. Abstraction moves work; it does not remove responsibility

Assemblers, compilers, frameworks, cloud platforms, and agents all let a person specify more while handling fewer low-level details. Each layer also creates hidden behavior and new failure modes. Review shifts from checking every instruction toward checking interfaces, invariants, generated artifacts, and system outcomes.

### 2. Feedback latency shapes development practice

Batch programming rewarded careful preparation because a failed run was expensive. Time-sharing made experimentation practical. Unit tests and continuous integration automated local feedback. Observability connected production behavior to developers. Agents now consume those feedback systems directly. An agent without fast, relevant feedback is operating like a programmer submitting an unchecked batch deck.

### 3. The scarce resource keeps moving

Early systems rationed machine time. High-level languages and cheaper hardware shifted attention toward programmer productivity. Large teams made coordination and maintenance central. Cloud and DevOps exposed operational complexity. Agentic tools reduce some implementation cost and increase the relative value of specification, evaluation, review, and ownership.

### 4. Software methods alternate between control and autonomy

Lifecycle governance, formal methods, and inspections seek control. Hacker culture, Agile, open source, DevOps, and self-service platforms seek local autonomy and fast feedback. Successful practice usually combines both: teams act locally inside tests, interfaces, permissions, review rules, and operational budgets.

### 5. Automation changes status and access

Compilers widened programming beyond machine specialists. Spreadsheets and low-code tools widened it beyond professional programmers. Open source changed who could inspect and contribute. AI may widen software production again. Earlier transitions show that access does not settle questions of credit, pay, authority, inclusion, or accountability.

### 6. Maintenance repeatedly defeats “automatic programming” stories

High-level languages, Computer-Aided Software Engineering, code generators, low-code platforms, and AI have all carried versions of the promise that software creation will become automatic. Generation does become easier. Requirements, integration, evolution, review, security, and operation remain.

## Contested claims the public timeline should handle carefully

| Simplified claim | Better account |
|---|---|
| Ada Lovelace was unquestionably the first programmer | She published an early machine procedure and a broad vision of symbolic computation; the collaboration and title are debated |
| Von Neumann invented stored-program computing | The EDVAC draft was influential; the design emerged from collective work |
| Grace Hopper invented the term “bug” | Engineers used “bug” earlier; the 1947 moth log is a real and memorable debugging artifact |
| Royce invented and recommended waterfall | His paper described a sequential model and warned that it failed without feedback |
| Agile invented iteration | Iterative and incremental development existed for decades; Agile consolidated a practitioner reaction to heavyweight process |
| Open source began with Linux | Free-software and shared-source traditions predate Linux; Linux became a major distributed example |
| DevOps is deployment automation | It also concerns feedback, shared responsibility, operations, and organizational boundaries |
| Platform engineering replaces DevOps | It addresses cognitive load and standardization within the broader delivery system |
| AI coding replaces software engineering | It automates parts of implementation and tool use while increasing the importance of task design, checks, permissions, and ownership |

## Geographic and social gaps

A full history cannot remain a United States and Western Europe product chronology. The public page should at least acknowledge:

- British wartime and postwar computing, including women's displacement from technical roles
- Soviet and Eastern European computing traditions
- Japanese computing, manufacturing, and the Fifth Generation project
- India's software-services and global-delivery industry
- open-source and cloud communities across Latin America, Africa, China, and Southeast Asia
- the role of operators, testers, technical writers, maintainers, users, and system administrators

The current research supports the Indian and British labor histories better than the other regions. Add claims from the remaining regions only after source-specific research; do not insert token milestones for appearance.

## Recommendation for the public timeline

The research is too broad for one chronological table. Use three lanes across twelve eras:

1. **Machine and interface:** what the computing system allowed
2. **Work and organization:** who programmed and how teams coordinated
3. **Feedback and control:** how people checked, released, and governed changes

For each era, include:

- one concrete workplace scene
- the problem practitioners faced
- the practice or tool they tried
- what remained in current practice
- what the change failed to solve

Suggested eras:

1. Human computers and algorithms
2. Punched cards and programmable machinery
3. Wartime machines and early programmers
4. Stored programs, compilers, and languages
5. Batch, time-sharing, and Unix
6. Software engineering, structured programming, and modularity
7. Builds, version control, testing, and inspections
8. Personal, object-oriented, and end-user programming
9. Free software, open source, and global development
10. Agile, test-driven development, and continuous integration
11. Cloud, DevOps, Site Reliability Engineering, and platforms
12. AI pair programming and coding agents

Keep the public page near 2,000 words. Put the deeper source history in this report. Link each era to an existing primer page where the practice remains actionable.

## Editorial cautions

Apply `docs/editorial-writing-smells.md` during drafting:

- Do not turn the history into a smooth march toward agents.
- Open eras with people doing work, not named abstractions.
- Avoid “X was not merely Y; it was Z” as a substitute for evidence.
- Do not give every era an identical rhetorical ending on the public page.
- Name sources rather than writing “historians agree.”
- Keep hero figures in institutional and labor context.
- Use “first” only with explicit criteria.
- End with present disputes and reader choices, not technological destiny.

## Brain-2 sources consulted

- `03-resources/programming/i-read-every-major-cs-paper-of-the-last-100-years.md`
- `03-resources/software-engineering/high-quality-maintainable-software-canon.md`
- `03-resources/software-engineering/free-maintainable-software-reading-list.md`
- `03-resources/programming/cozy-code-followup-research-map.md`
- `03-resources/programming/kent-beck/sbpp-moc.md`
- `03-resources/software-engineering/ai-era-testable-architecture.md`
- `03-resources/software-engineering/maintainable-software-playbook.md`
- `03-resources/software-engineering/open-source-study-notes-moc.md`
- `03-resources/software-engineering/cross-project-oss-lessons.md`
- `03-resources/llm-native-os/research-synthesis.md`
- `03-resources/programming/devops-tools-2026.md`
- `03-resources/media/shift-down-vs-shift-left.md`

## Follow-up research before publication

- Verify the exact source and wording for early compiler, assembly, and subroutine-library milestones.
- Add scholarly sources for Soviet, Japanese, and non-Western computing histories before adding them to the public page.
- Decide whether testing and security need separate sidebars; both timelines are too rich for one row each.
- Check all source URLs and quote primary documents directly where the page makes a disputed historical claim.
- Have a domain reviewer inspect labor-history and gender-history sections before publication.
