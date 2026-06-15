---
title: "FaderCrossFadeB"
description: "To enter the FaderCrossFadeB keyword in the command line:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_fadercrossfadeb.html"
scrapedAt: "2026-06-15T18:25:01.956Z"
pagefind: false
---
To enter the FaderCrossFadeB keyword in the command line:

- Type **FaderCrossFadeB**
- Type the shortcut **FaderXB**

## Description

The FaderCrossFadeB keyword represents the crossfade B function of a sequence.

Crossfade B gradually fades in dimmer attributes of the next cue in a sequence in accordance with the position of the fader.

For more information see [Executors](/grandma3/2-3/executor_assign/#Change%20Fader%20Function).

## Syntax

\[Function] FaderCrossFadeB At \["Object\_Name" or Object\_Number]

FaderCrossFadeB \[Object] \["Object\_Name" or Object\_Number] At \[Value]

## Example

- To assign FaderCrossFadeB as fader function to executor 304, type:

|                                                                    |                                                            |
| ------------------------------------------------------------------ | ---------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Assign FaderCrossFadeB At Executor 304 |

 

- To set the FaderCrossFadeB value of the fader range to 10% in sequence 5, type:

|                                                                    |                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>FaderCrossFadeB Sequence 5 At 10 |
