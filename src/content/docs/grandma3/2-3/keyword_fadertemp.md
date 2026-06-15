---
title: "FaderTemp"
description: "To enter the FaderTemp keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_fadertemp.html"
scrapedAt: "2026-06-15T18:25:02.252Z"
pagefind: false
---
To enter the FaderTemp keyword in the command line, use one of the options:

- Type **FaderTemp**
- Type the shortcut **Fadert**

## Description

The FaderTemp keyword applies the Temp function to a number of objects such as executors, sequences, groups, masters, and other.

Temp crossfades the first cue on when pulled up, and off when pulled down.

For more information see [Executors](/grandma3/2-3/executor_assign/#Change%20Fader%20Function), [Cues and Sequences](/grandma3/2-3/cue_sequence/), [Groups](/grandma3/2-3/group/), or  [Masters](/grandma3/2-3/masters/).

## Syntax

Assign FaderTemp At \[Object] \["Object\_Name" or Object\_Number]

FaderTemp \[Object] \["Object\_Name" or Object\_Number] At \[Value]

## Examples

- To assign FaderTemp to executor 301, type:

|                                                                    |                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Assign FaderTemp At Executor 301 |

 

- To set the temp fader of sequence 2 to 42%, type: 

|                                                                    |                                                 |
| ------------------------------------------------------------------ | ----------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]> FaderTemp Sequence 2 At 42 |
