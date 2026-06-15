---
title: "CueOutDelay"
description: "To enter the CueOutDelay keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_cueoutdelay.html"
scrapedAt: "2026-06-15T18:24:59.237Z"
pagefind: false
---
To enter the CueOutDelay keyword in the command line, use one of the options:

- Type **CueOutDelay**
- Type the shortcut **Cueoutd**

## Description

CueOutDelay sets the outdelay time of a cue. 

|                                            |                                                                                     |
| ------------------------------------------ | ----------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                           |
|                                            | CueOutDelay is only used by dimmer parameters that go to a lower value in the cue.  |

## Syntax

(Cue \["Cue\_Name" or Cue\_Number]) CueOutDelay \[CueOutDelay\_Time]

## Examples

- To enter an outdelay of 5 seconds in the current cue of the selected sequence, type:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>CueOutDelay 5 |

 

- To enter an outdelay of 5 seconds in cues 1 to 4 of the selected sequence, type:

|                                                                    |                                                |
| ------------------------------------------------------------------ | ---------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Cue 1 Thru 4 CueOutDelay 5 |
