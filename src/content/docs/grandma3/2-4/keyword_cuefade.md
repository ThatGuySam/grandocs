---
title: "CueFade"
description: "To enter the CueFade keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_cuefade.html"
scrapedAt: "2026-06-12T21:24:24.096Z"
---
To enter the CueFade keyword in the command line, use one of the options:

- Press Time (If the Time Key Target is set to Cue. For more information see [User Settings](/grandma3/2-4/user_settings/) and [Time Key](/grandma3/2-4/key_time/).)
- Type **CueFade**
- Type **Cuef**

## Description

CueFade can set both the infade and the outfade time of a cue. To do so, use a /. See examples further down. 

As a helping keyword for programming functions (for example Store), this keyword sets the fade time of a cue or a cue part.

## Syntax

(Cue \["Cue\_Name" or Cue\_Number]) CueFade \[CueFade\_Time]

(Cue \["Cue\_Name" or Cue\_Number]) CueFade \[CueInFade\_Time]/\[CueOutFade\_Time]

## Examples

- To enter a fade of 5 seconds in a cue, type:

|                                                                    |                               |
| ------------------------------------------------------------------ | ----------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>CueFade 5 |

 

- To set an infade of 6 seconds and an outfade of 12 seconds in the current cue of the selected sequence, type:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]> CueFade 6/12 |

 

- To adjust the CueInFade to 3 seconds, but leave the CueOutFade as it was, type:

|                                                                    |                                |
| ------------------------------------------------------------------ | ------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>CueFade 3/ |

 

- To enter a fade of 5 seconds in cues 1 to 4, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Cue 1 Thru 4 CueFade 5 |

 

- To enter a fade time of 1 hour 22 minutes 56.3 seconds in cue 1 of the selected sequence, type:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Cue 1 CueFade 1h22m56.3 |

Or press:

 Time 1 . . . 2 2 . . 5 6 . 3

 

- To double the CueFade time, type:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>CueFade \* 2  |

 

- To subtract 3 seconds from the CueFade time, type:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>CueFade - 3 |
