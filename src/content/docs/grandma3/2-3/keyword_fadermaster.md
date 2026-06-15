---
title: "FaderMaster"
description: "To enter the FaderMaster keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_fadermaster.html"
scrapedAt: "2026-06-15T18:25:01.962Z"
pagefind: false
---
To enter the FaderMaster keyword in the command line, use one of the options:

- Type **FaderMaster **
- Type the shortcut **Faderm**
- Press MA + X16 | Exec + X16 | Exec + X16 | Exec

## Description

The FaderMaster keyword applies the Master function to a number of objects such as executors, sequences, groups, masters, and other.

The master function controls the intensity of the assigned object.

For more information see [Executors](/grandma3/2-3/executor_assign/#Change%20Fader%20Function), [Cues and Sequences](/grandma3/2-3/cue_sequence/), [Groups](/grandma3/2-3/group/), or  [Masters](/grandma3/2-3/masters/).

## Syntax

Assign FaderMaster At \[Object] \["Object\_Name" or Object\_Number]

FaderMaster \[Object] \["Object\_Name" or Object\_Number] At \[Value] (Fade \[Time])

Only sequences and presets can move the master using a fade time. Other objects snap to the value.

## Examples

- To assign FaderMaster to executor 204, type:

|                                                                    |                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Assign FaderMaster At Executor 204 |

- To move FaderMaster 205 at position 50% in a 5 seconds fade:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>FaderMaster 205 At 50 Fade 5 |
