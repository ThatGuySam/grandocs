---
title: "FaderRate"
description: "To enter the FaderRate keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_faderrate.html"
scrapedAt: "2026-06-15T18:25:02.106Z"
pagefind: false
---
To enter the FaderRate keyword in the command line, use one of the options:

- Type **FaderRate**
- Type the shortcut **Faderr**

## Description

The FaderRate keyword applies the Rate function to a number of objects such as executors, sequences, groups, masters, presets, and other.

Rate divides or multiplies the fade and delay time in a sequence by the value of the fader. If Speed from Rate is enabled, it is then also valid for the speed stored in cues.

For more information see [Executors](/grandma3/2-3/executor_assign/#Change%20Fader%20Function), [Cues and Sequences](/grandma3/2-3/cue_sequence/), [Presets](/grandma3/2-3/presets/), [Groups](/grandma3/2-3/group/), or [Masters](/grandma3/2-3/masters/).

## Syntax

Assign FaderRate At \[Object] \["Object\_Name " or Object\_Number]

FaderRate \[Object] \["Object\_Name" or Object\_Number] At \[Value]

## Examples

- To assign FaderRate to executor 205, type:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]> Assign FaderRate At Executor 205 |

 

-  To move the rate fader of sequence 1 to 1:1, type:

|                                                                    |                                                 |
| ------------------------------------------------------------------ | ----------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>FaderRate Sequence 1 At 100 |
