---
title: 'From Specs to Context: Learning from the Infinite Software Crisis'
authors: nawam
date: 2025-12-28
description: 'How Research, Planning, and Implementation help engineers stay grounded as AI accelerates code generation.'
tags:
  [
    'ai',
    'software-engineering',
    'context-engineering',
    'ai-agents',
    'software-architecture',
    'engineering-leadership',
  ]
---

# From Specs to Context: Learning from the Infinite Software Crisis

Jake Nations, a senior engineer at Netflix, started a recent talk with a confession that probably hit close to home for a lot of us.

> "I've shipped code I didn't quite understand. Generated it, tested it, deployed it. Couldn't explain how it worked."

We've all been there. But what makes this moment different isn't that engineers have gotten careless. It's that the **speed at which we can now produce software has fundamentally shifted**. AI lets us generate code almost as fast as we can describe it, and our ability to understand it is struggling to keep up.

Jake calls this the **infinite software crisis**. And the name fits.

![A developer sits at the intersection of two paths: one labeled "Easy" leading to a tangled mess of code, the other labeled "Simple" leading to clean, modular architecture.](/img/infinite-code-hero.png)
_Image: The choice we face: easy complexity or simple clarity._

<!-- truncate -->

## The Infinite Software Crisis

The idea of a software crisis isn't new. Jake points back to the late 1960s, when pioneers like Edsger Dijkstra noticed a pattern: as computing power exploded, our appetite for software grew just as fast. Every leap forward solved one problem while quietly planting the seeds for the next.

We've watched this cycle repeat:

| Era   | Innovation                  | New Capability                | New Complexity                                            |
| ----- | --------------------------- | ----------------------------- | --------------------------------------------------------- |
| 1970s | C Language                  | Write bigger systems          | Manual memory management, pointer errors                  |
| 1990s | Object-Oriented Programming | Model real-world domains      | Inheritance hell, over-engineering                        |
| 2000s | Agile & DevOps              | Ship faster, continuously     | Technical debt accumulation, "move fast and break things" |
| 2020s | **AI Code Generation**      | **Generate at thought-speed** | **Understanding can't keep up**                           |

AI changes the game on this pattern. **For the first time, the bottleneck isn't how fast we can _write_ code. The bottleneck is how well we understand what we're shipping**, and how safely we can change it when things inevitably break.

As Jake puts it, large production systems fail in weird and unexpected ways. When they do, you need a solid mental model to debug them. Generating code faster doesn't reduce that need, it amplifies it.

## The Dumb Zone and the Trap of "Easy"

While Jake frames the problem in terms of comprehension, developer Dex Horthy attacks it from a more technical angle. He points to a hard constraint: the **context window**. As your chat with an AI agent grows longer and more cluttered, its performance tanks. Dex calls this the **dumb zone**; a state where the model, drowning in noise and past mistakes, becomes unreliable.

> "Around the 40% line is where you're going to start to see some diminishing returns... If you have too many MCPs in your coding agent you are doing all your work in the dumb zone and you're never going to get good results."

Standard AI workflows often live in this zone. You ask an agent to fix something in a sprawling, old codebase. It searches, reads, and tries things, slowly polluting its context with code, errors, and your frustrated corrections. The conversation becomes a messy transcript of trial and error. The model's most likely "next step" often becomes another wrong turn, because its entire context is a log of previous failures.

This technical failure mirrors Jake's philosophical warning. He leans on Rich Hickey's classic talk: **easy is not simple**. Easy is what's close at hand, the quick install, the copied snippet, the AI-generated block. Simple is about clean design, where each part has one job and clear boundaries.

AI, in Jake's words, is the ultimate easy button. It removes almost all the friction from the easy path. The danger Dex highlights is that this easy path is also a direct route into the dumb zone. We choose what's easy, the AI obliges, and complexity piles up faster than we can make sense of it, both in our code and inside the agent's crumbling context.

## Engineers as Custodians of Context

This is where both thinkers land on the same crucial idea: engineers need to become **custodians of context**.

AI is an incredible pattern matcher. Show it a codebase, and it will faithfully replicate whatever patterns it sees. The critical flaw? **Not all patterns are good**. To a model, a five-year-old authorization hack looks identical to a core business rule. Technical debt is just another pattern to copy and preserve.

Humans can tell the difference, but only if we slow down to think. The AI can't do this thinking for us. As Dex states bluntly:

> "Do not outsource the thinking. AI cannot replace thinking. It can only amplify the thinking you have done or the lack of thinking you have done."

The fix isn't to feed the AI more raw code, but to feed it better, curated information. Jake calls this **context compression**. At Netflix, instead of dumping millions of tokens of Java into a prompt, he'd feed it architecture diagrams, key interfaces, and clear requirements. Millions of tokens became a few thousand words of intent.

Dex's parallel concept is **intentional compaction**. It's the practice of actively distilling a messy context window; full of file searches, half-baked ideas, and build errors, into a clean, truthful summary before you start fresh. The goal is to stay in the **smart zone**, where the model has just enough clean, correct information to be useful.

What comes out of this compression and compaction isn't magic. It's something more disciplined: a **specification**.

## The RPI Workflow: A Discipline for the Smart Zone

This is where theory turns into practice. Both Horthy and Nations advocate for a structured workflow, often dubbed **Research, Plan, Implement (RPI)**. At its core, it's a system for context engineering.

### Phase 1: Research (Mapping Reality)

The goal here is to build an accurate, compressed map of the existing system. This is the agent's onboarding. As Dex frames it, it's about answering: _What are the exact files and line numbers that matter?_ The output is a research artifa, a snapshot of truth pulled from the code itself.

**Key takeaway:** Jake stresses this is an iterative, human-validated process. Catching a misunderstanding here is the highest-leverage move you can make. It stops the agent from charging off in the wrong direction.

### Phase 2: Planning (Compressing Intent)

With good research in hand, planning is where human thinking gets crystallized. The engineer, not the AI, defines the concrete steps: file names, data flows, function signatures, the order of operations. Dex pushes for plans so explicit they include actual code snippets, creating "paint-by-numbers" instructions.

This plan file is the ultimate compression of intent. It enables what Dex calls **mental alignment**, teams can review the _plan_ for sound architecture long before they have to review thousands of lines of generated code.

### Phase 3: Implementation (Focused Execution)

Only now does major code generation begin. The AI is no longer asked to think or explore. It's asked to execute a clear plan. The context stays clean and focused, avoiding the spiraling mess of a long, meandering chat. The implementation becomes a verification step against the blueprint.

## The Naming Trap (A Brief Aside)

This approach goes by many names, context engineering, spec-driven development, RPI. Dex warns about **semantic diffusion**, a concept from Martin Fowler where a good term gets stretched to mean everything and therefore nothing.

> "We come up with a good term with a good definition and then everybody gets excited and everybody starts meaning it to mean a hundred things to a 100 different people and it becomes useless."

The name isn't what matters. The **discipline** is what matters: keeping humans in the loop at the highest-leverage points, maintaining clean context, and never outsourcing the thinking.

## Earning Understanding: The Human in the Loop

This process isn't a shortcut around understanding; it's a scaffold for achieving it. Both speakers are clear that some understanding has to be earned the hard way.

Jake tells the story of an authorization refactor that AI repeatedly failed at. The only way forward was a manual, painful migration done by hand. That grunt work uncovered hidden constraints no AI analysis could see. That hard-won understanding _then_ became the seed for effective AI-assisted work.

Dex shares a similar limit when trying to extract Hadoop from a complex Java codebase. Eventually, they had to "go back to the whiteboard." The AI couldn't untangle the essential from the accidental; that synthesis required a human.

**RPI and context engineering don't eliminate thinking. They force it to the front**, making it the central, reviewable artifact of the work. As Dex observes, the real challenge isn't the coding agent, it's adapting your team's workflow and collaboration to a world where 99% of code is AI-generated, while ensuring 100% of the understanding remains human.

## What Changes and What Does Not

AI changes almost everything about _how_ we write code. It does not change _why_ software fails.

Failures still come from misunderstood requirements, tangled responsibilities, and systems that have become black boxes. Fred Brooks was right decades ago: the hard part has never been the mechanics of coding.

The real shift is in where engineers must focus our scarce attention:

- **Less on typing**, more on thinking
- **Less on syntax**, more on architecture
- **Less on writing**, more on curating context

We're moving from being authors of code to being **architects of understanding**.

The question isn't whether we'll use AI. That ship has sailed.

**The question, as Jake leaves us with, is whether we'll still understand our own systems when AI is writing most of the code.**

The answer, as Dex Horthy's work shows, depends entirely on whether we build the discipline, the context engineering, to keep our minds, and our models, firmly in the smart zone.

---

### References

1. **No Vibes Allowed: Solving Hard Problems in Complex Codebases** – Dex Horthy, HumanLayer. [Watch on YouTube](https://www.youtube.com/watch?v=rmvDxxNubIg)

2. **The Infinite Software Crisis** – Jake Nations, Netflix. [Watch on YouTube](https://www.youtube.com/watch?v=eIoohUmYpGI)

3. **Semantic Diffusion** – Martin Fowler. [Read on martinfowler.com](https://martinfowler.com/bliki/SemanticDiffusion.html)

4. **Effective harnesses for long-running agents** – Anthropic. [Read on anthropic.com](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
