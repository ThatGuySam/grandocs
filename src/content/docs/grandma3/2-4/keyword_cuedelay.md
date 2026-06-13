---
title: "CueDelay"
description: "To enter the CueDelay keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_cuedelay.html"
scrapedAt: "2026-06-12T21:24:23.945Z"
---
To enter the CueDelay keyword in the command line, use one of the options:

- Press Time Time (If the Time Key Target is set to Cue. For more information see [User Settings](/grandma3/2-4/user_settings/) and [Time Key](/grandma3/2-4/key_time/).)
- Type **CueDelay**
- Type the shortcut **Cued**

## Description

CueDelay can set both the indelay and the outdelay time of a cue. To do so, use a /. See examples further down.

For more information on how to set the delay times in objects see the [Delay Keyword](/grandma3/2-4/keyword_delay/).

## Syntax

(Cue \["Cue\_Name" or Cue\_Number]) CueDelay \[CueDelay\_Time]

(Cue \["Cue\_Name" or Cue\_Number])**** CueDelay \[CueInDelay\_Time]/\[CueOutDelay\_Time]

## Examples

- To enter a delay of 5 seconds in the current cue of the selected sequence, type:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>CueDelay 5  |

 

- To set an indelay of 6 seconds and an outdelay of 12 seconds in the current cue of the selected sequence, type:

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>CueDelay 6/12  |

 

- To adjust the CueInDelay to 3 seconds, but leave the CueOutDelay as it was, type:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>CueDelay 3/ |

 

- To enter a delay of 5 seconds in cues 1 to 4 of the selected sequence, type:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Cue 1 Thru 4 CueDelay 5 |
