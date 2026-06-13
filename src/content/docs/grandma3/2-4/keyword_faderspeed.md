---
title: "FaderSpeed"
description: "To enter the FaderSpeed keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_faderspeed.html"
scrapedAt: "2026-06-12T21:24:26.995Z"
---
To enter the FaderSpeed keyword in the command line, use one of the options:

- Type **FaderSpeed**
- Type the shortcut **Faders**

## Description

The FaderSpeed keyword applies the Speed function to a number of objects such as executors, sequences, groups, masters, and other.

It controls the speed of a phaser in a cue.

For more information see [Executors](/grandma3/2-4/executor_assign/#Change%20Fader%20Function), [Cues and Sequences](/grandma3/2-4/cue_sequence/), [Groups](/grandma3/2-4/group/), or  [Masters](/grandma3/2-4/masters/).

## Syntax

Assign FaderSpeed At \[Object] \["Object\_Name" or Object\_Number]

FaderSpeed \[Object] \["Object\_Name" or Object\_Number] At \[Speed\_Readout] \[Speed\_Value]

## Examples

- To assign FaderSpeed to executor 206, type:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Assign FaderSpeed At Executor 206 |

 

- To set the FaderSpeed of sequence 2 to 6 BPM, type:

|                                                                    |                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>FaderSpeed Sequence 2 At BPM 6 |
