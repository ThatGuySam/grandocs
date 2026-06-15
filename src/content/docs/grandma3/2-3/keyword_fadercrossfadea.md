---
title: "FaderCrossFadeA"
description: "To enter the FaderCrossFadeA keyword in the command line:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_fadercrossfadea.html"
scrapedAt: "2026-06-15T18:25:01.960Z"
pagefind: false
---
To enter the FaderCrossFadeA keyword in the command line:

- Type **FaderCrossFadeA**
- Type the shortcut **FaderXA**

## Description

The FaderCrossFadeA keyword represents the crossfade A function of a sequence.

Crossfade A gradually fades out dimmer attributes of a current cue in a sequence in accordance with the position of the fader.

For more information see [Executors](/grandma3/2-3/executor_assign/#Change%20Fader%20Function).

## Syntax

\[Function] FaderCrossFadeA At \[Object] \["Object\_Name" or Object\_Number]

FaderCrossFadeA \[Object] \["Object\_Name" or Object\_Number] At \[Value]

## Example

- To assign FaderCrossFadeA as fader function as executor 303, type:

|                                                                    |                                                             |
| ------------------------------------------------------------------ | ----------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]> Assign FaderCrossFadeA At Executor 303 |

 

- To set the FaderCrossFadeA value to 10% of the fader range for sequence 5, type:

|                                                                    |                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>FaderCrossFadeA Sequence 5 At 10 |
