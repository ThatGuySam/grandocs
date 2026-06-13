---
title: "Fader"
description: "To get the Fader keyword in the command line type Fadern the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_fader.html"
scrapedAt: "2026-06-12T21:27:50.738Z"
---
To get the Fader keyword in the command line type **Fader** in the command line.

## Description

Fader is an object keyword representing the fader of an executor.

If you apply a function or reference a property not supported by the fader object, the command will be passed on to the parent executor object.

**Hint:**\
Even though button executors do not have a physical fader, they still have a virtual fader assigned as a master.

## Syntax

Fader \[Executor]

Fader \[Page].\[Executor]

Fader \[Pagepool].\[Page].\[Executor]

## Examples

- To assign the speed functionality to the fader of executor 5 type in the command line:

\[Channel]> Assign Speed At Fader 5

 

- To set the level/position of fader of executor 5 to 50 % type in the command line:

\[Channel]> Fader 5 At 50
