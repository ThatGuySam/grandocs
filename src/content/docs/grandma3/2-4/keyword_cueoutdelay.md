---
title: "CueOutDelay"
description: "To enter the CueOutDelay keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_cueoutdelay.html"
scrapedAt: "2026-06-12T21:24:24.239Z"
---
To enter the CueOutDelay keyword in the command line, use one of the options:

- Type **CueOutDelay**
- Type the shortcut **Cueoutd**

## Description

CueOutDelay sets the outdelay time of a cue. 

|                                            |                                                                                     |
| ------------------------------------------ | ----------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                           |
|                                            | CueOutDelay is only used by dimmer parameters that go to a lower value in the cue.  |

## Syntax

(Cue \["Cue\_Name" or Cue\_Number]) CueOutDelay \[CueOutDelay\_Time]

## Examples

- To enter an outdelay of 5 seconds in the current cue of the selected sequence, type:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>CueOutDelay 5 |

 

- To enter an outdelay of 5 seconds in cues 1 to 4 of the selected sequence, type:

|                                                                    |                                                |
| ------------------------------------------------------------------ | ---------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Cue 1 Thru 4 CueOutDelay 5 |
