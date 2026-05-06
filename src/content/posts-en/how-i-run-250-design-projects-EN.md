---
title: "How I run 250 design projects without losing the detail"
subtitle: "A method note on managing a six-person design team — and the project management application I built when nothing else worked."
description: "A method note on managing a six-person design team across 250 active projects per year, by Iara Santos. The discovery of why generic PM tools fail design studios, and the building of ISSA Project."
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
coverAlt: "ISSA Project — the project management application built specifically for interior, lighting, and architecture studios."
draft: false
translationSlug: "como-gerencio-250-projetos"
---

The honest answer to how I run two hundred and fifty active design
projects a year, with a six-person team, without losing the detail —
is that I almost lost it.

Twice.

This is a method note about that, and about what came out of it. There
is a software product at the end of the story. But the software is not
the point. The point is the question that produced it, which is a
question every design studio at scale eventually has to face.

## The problem nobody warns you about

Design studios are built for craft. The training, the obsessions, the
quality of the work — all of it organized around making a single project
beautiful. Run that craft at five projects, and a designer can hold the
whole picture in her head. Run it at twenty, and most can still keep up.
Run it at sixty, with multiple designers per project, with clients in
different time zones, with specifications in eight different vendor
systems — and something starts to slip.

It does not slip in the obvious places. The drawings still get done.
The materials still get specified. The renderings still go out.

What slips is the <em>connective tissue</em>.

The decision the client made on a Wednesday call that nobody wrote down.
The fixture finish that changed at value engineering and never made it
back into the spec book. The handoff between design development and the
commercial team that lived in two different inboxes and got reconstructed
from memory. The deadline that everyone vaguely remembered but nobody
formally tracked.

These are not glamorous failures. They are not the kind of thing that
gets talked about in design school. But they are the failures that
quietly cost design studios money, deadlines, client trust, and the
quality of the work itself.

I watched it happen on my own team. I watched it happen on other studios'
teams I admired. And I came to a conclusion that has shaped most of my
practice: <em>the most underdeveloped skill in design at scale is not
craft. It is operations.</em>

## What I tried first

Before I built anything, I tried what every studio tries.

<strong>Spreadsheets.</strong> Worked at five projects. Broke at fifteen.
By thirty, no two team members were looking at the same version. Anyone
who has ever tried to manage a design pipeline through Google Sheets
knows the exact moment it falls apart. It is the moment a team member
asks, in a meeting, "wait, which version is current?" and nobody
confidently answers.

<strong>Asana.</strong> Generic enough that it could hold anything,
which means it held nothing well. The cardinal failing of generic PM
tools in design studios is that they do not know what a <em>phase</em>
is. They do not know what a <em>fixture schedule</em> is. They do not
know what a <em>specification</em> is. They give you a flat list of
tasks and ask you to make sense of it. We could not.

<strong>Trello.</strong> Beautiful for ten cards. Unmanageable at six
hundred. The kanban model assumes a relatively flat number of items.
A real design pipeline is hierarchical — projects, phases, deliverables,
sub-deliverables, decisions, approvals — and Trello has no way to express
that hierarchy without disappearing into nested boards nobody can
navigate.

<strong>ClickUp, Notion, Monday.</strong> Each one promising the
flexibility we needed. Each one demanding that we configure ourselves
into something the tool could understand. Months of customization later,
all three were still treating a residential design project like a
generic to-do list.

The realization, when it came, was clear enough that I'm slightly
embarrassed it took me as long as it did. The tools were not built for
design studios. They were built for software teams, marketing teams,
generic project work. The shape of our actual work — the phases, the
deliverables, the decision logs, the spec books, the handoffs — did
not exist in their data models.

We were going to have to build something.

## The four phases that organize everything

Before any tool, the team had to agree on what we were actually doing.
We landed on four phases that every project — residential, commercial,
hospitality, lighting-only — moves through.

<strong>Discovery.</strong> Briefing, programming, site analysis,
client goal definition, scope writing. The phase where we decide what
the project actually is. Most projects that fail later, fail here —
because the brief was never properly captured, scope crept silently,
and decisions were made before the team had agreement on what they
were designing.

<strong>Concept.</strong> Spatial idea, material strategy, lighting
strategy, mood. The phase where the project's identity gets defined.
This phase is where craft intensity is highest and where documentation
intensity is lowest. The output is a concept package, presented and
approved.

<strong>Design Development.</strong> The phase that takes the longest,
breaks the most often, and pays the bills. Floor plans get refined.
FF&E gets specified. Lighting gets calculated. Custom millwork gets
detailed. Every decision made in this phase has to live somewhere
findable, with a date, with an owner, with a status.

<strong>Documentation.</strong> The drawing set that goes to the
contractor. Reflected ceiling plans. Finish schedules. Specifications.
Plumbing plans. The phase where ambiguity becomes expensive. Every
RFI from the site is an indictment of how clearly this phase was
executed.

These are not original. They roughly track the AIA five-phase model
familiar to American practitioners (we collapse Schematic Design and
Construction Documents differently). The originality is not in the
naming. It is in the <em>discipline</em> of treating these as the
only four states a project is allowed to be in. Every project, on
every Monday morning, sits in exactly one of these phases — and the
team, the client, and the commercial side all know which one.

That alone solved more than I expected.

## What we built

After eight months of running on patchworked spreadsheets while we
designed the alternative, we built <strong>ISSA Project</strong>.

It is a project management application configured around how design
studios actually work. The data model knows what a phase is. It knows
what a deliverable is. It knows what a fixture schedule is. It knows
what a specification book is. It knows what a handoff to the commercial
team is.

The dashboard shows me, on any given morning, where every active
project sits in its phase, who owns it, where the bottlenecks are,
which client reviews are pending, which deadlines are at risk. Not
through dashboards I had to assemble. Through dashboards built around
the work itself.

The communication layer logs every approval, every change request,
every decision — tied to the project, not scattered across email
threads. The handoff layer takes the closing of a design phase and
flows specifications, BOMs, and approvals into the commercial team's
view, automatically. The reporting layer shows performance by team
member, by project type, by segment. Where the studio is profitable.
Where it is leaking time. In numbers, not anecdotes.

It is currently live with my full team at Everlight, tracking those
two hundred and fifty active projects. The team uses it every day.
The clients see a polished interface for their reviews. The commercial
side gets clean handoffs. I get my evenings back.

## The quiet lesson

The reason I am writing this — the actual reason — is not the tool.
It is the lesson underneath, which I think generalizes to any design
practice at any scale.

<em>The work of designing rooms is not the same as the work of
running a studio that designs rooms.</em>

Every designer I admire who has built a studio that lasts has,
somewhere in their evolution, made the move from designer to
operator. Not abandoning craft. Adding to it. Treating the systems
that allow the craft to happen at scale as a design problem in its
own right, deserving of the same attention.

That is the move. It is unglamorous. It is what nobody tells you
about. And it is the difference between a studio that delivers
beautiful work for two years and a studio that delivers beautiful
work for twenty.

ISSA Project is the version of this move I have been building for
my own team. If your studio is at the point where the connective
tissue is starting to fray, I'd be glad to talk about it — write
to <a href="mailto:iarasantos.is@icloud.com">iarasantos.is@icloud.com</a>.

More about the application, including how it adapts to other
studios' workflows, lives at <a href="/issaproject">ISSA Project</a>.

