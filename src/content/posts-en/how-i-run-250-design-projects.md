---
title: "How I run 250 design projects without losing the detail"
subtitle: "A method note on coordinating a six-person design team — and the project management application I built when nothing else could give my leadership a straight answer."
description: "A method note on coordinating a six-person design team across 250 active projects per year — and the project management application I built when no existing tool could give my leadership a straight answer."
category: "method-notes"
publishDate: 2026-05-16T11:00:00-03:00
readingTime: 8
tags:
  - method-notes
  - project-management
  - issa-project
  - design-process
  - workflow
cover: "/images/posts/issa-project-cover.jpg"
coverAlt: "ISSA Project — project management application built for design studios."
draft: false
translationSlug: "como-gerencio-250-projetos"
---

For two years, every time the leadership at the firm I coordinate at asked me a real question, I gave them an honest answer made of guesswork.

How productive is the team? *Roughly fine.* Where is the bottleneck this month? *I think it's at handoff.* Should we hire? Should we let someone go? *Let me get back to you.*

I had a six-person team running roughly 250 active projects a year, across residential, commercial, hospitality, and corporate work. I knew the pipeline well enough to feel where it strained. I could not measure any of it. And the questions I was being asked — the questions a coordinator is supposed to answer with data — were the kind where being wrong costs the business real money. New hires. Possible terminations. Capacity decisions. Forecasts to clients.

I tried to fix it the way most people in my position try to fix it. I tried Asana. I tried Trello. I tried Notion. I tried ClickUp. I tried spreadsheets I built myself, taught the team to fill in, and watched go stale within a month. Two years of testing. None of it gave me what I needed.

That is the honest preamble to a longer story, and the reason I eventually built a tool of my own. There is a software product at the end of this note. The product is not the point. The point is the gap that produced it — a gap I think every design operation eventually has to face, regardless of size.

## What I had been told didn't apply to design

Generic project management tools are built around a flat assumption: tasks have owners, owners have deadlines, deadlines have statuses. Fine for a marketing team. Inadequate for a design pipeline.

A real design project is not a list of tasks. It is a brief that mutates. A specification that gets value-engineered three weeks in. A client review that approves part of a deliverable and contests another. A handoff to a commercial team that has its own pipeline running on its own clock. A fixture that gets discontinued by a supplier and triggers four downstream decisions.

None of that maps cleanly onto Asana's data model. You can force it. We tried. What you end up with is a tool the team fills in for the first month and gradually abandons by the third, because the act of translating real design work into the tool's vocabulary takes more time than the project itself.

I watched it happen in my team. I had watched it happen years earlier, in a different role — I co-founded and ran an interior design studio for several years, and the same gap broke us in smaller form there. The dollar amounts were smaller. The texture of the failure was identical. **Most well-regarded studios I know in Brazil are technically excellent and operationally fragile.** I have stood on both sides of that sentence. I am writing this note from the side that finally has data.

## The realization that took me longer than it should have

What I needed was not a better Asana. What I needed was a tool that *knew* what a design pipeline was. That understood, in its data model, the difference between a project, a phase, a deliverable, a specification, a client review, and a commercial handoff. That tracked the variables that actually move the needle in this business — and not the variables a generic SaaS company decided were universal.

Once I framed it that way, the building of it became inevitable. Not because I had ambitions of becoming a software founder. Because I had ambitions of giving my leadership a straight answer.

## What the application did, on the first month it ran

I will not catalog features here. The post is not a release note. But two findings from the first months of running the system are worth telling, because they are the kind of finding the spreadsheets had been quietly hiding.

**Finding one: a productivity gap was concentrated in specific people, not in the team.** For two years, leadership had been told the team was generally productive. The data, once it could be looked at properly, showed something subtler — a meaningful share of the pipeline drag was traceable to a small number of individuals carrying disproportionate friction. That conversation had not been possible before. It became possible the moment the data existed.

**Finding two: a conversion problem we had blamed on project quality was, in fact, a different team's problem.** Our commercial side had been complaining for months about projects that "did not convert." The assumption, internally, was that the design work was the variable. The data, once we could read it, showed the bottleneck was upstream of the design phase, not inside it. We had been losing deals before the design team ever touched them.

Both findings rearranged conversations the company had been having for years. Both required no genius. They required a system that captured the right variables and refused to lose them between meetings.

## The quiet thesis underneath

I think the thing I want to leave on the page is this:

**The most underdeveloped skill in design at scale is not craft. It is operations.**

Every coordinator, founder, or senior designer I admire — the ones who build practices that last — has somewhere in their evolution made a move from designer to operator. Not abandoning craft. Adding to it. Treating the systems that allow the craft to happen at scale as a design problem in their own right, deserving of the same attention as a millwork detail.

That move is unglamorous. It is what nobody tells you about. And it is the difference between a studio that produces beautiful work for two years and a practice that produces beautiful work for twenty.

The application I built is the version of that move I have been working on for my own team. It is currently live, in daily use, tracking those two hundred and fifty active projects through every phase of their cycle. It communicates with our commercial side and with clients automatically — professionally, in the channels they already use. It gives my leadership the data they had been asking for, with a confidence I could not provide before it existed.

If your studio is at the point where the connective tissue between design, commercial, and client communication is starting to fray — and the questions you are being asked require answers you cannot honestly give — write to me. I would be glad to talk about it.

The tool itself, including how it adapts to the workflow of studios that operate differently from mine, lives at [ISSA Project](https://iarasantos.com/issaproject).
