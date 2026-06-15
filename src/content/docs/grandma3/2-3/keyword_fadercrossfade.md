---
title: "FaderCrossFade"
description: "To enter the FaderCrossFade keyword in the command line:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_fadercrossfade.html"
scrapedAt: "2026-06-15T18:25:01.815Z"
pagefind: false
---
To enter the FaderCrossFade keyword in the command line:

- Type **FaderCrossFade**
- Type the**** shortcut **FaderX **or **Faderc**

## Description

The FaderCrossFade keyword represents the crossfade function of a sequence.

Crossfade gradually activates the next cue of a sequence in accordance with the position of the fader.

For more information see [Executors](/grandma3/2-3/executor_assign/#Change%20Fader%20Function).

## Syntax

\[Function] FaderCrossFade At \[Object] \["Object\_Name" or Object\_Number]

FaderCrossFade \[Object] \["Object\_Name or Object\_Number] At \[Value]

## Example

- To assign FaderCrossFade as executor 302, type:

|                                                                    |                                                           |
| ------------------------------------------------------------------ | --------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Assign FaderCrossFade At Executor 302 |

 

- To set the FaderCrossFade value of the fader range to 10% in sequence 5, type:

|                                                                    |                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>FaderCrossFade Sequence 5 At 10 |
