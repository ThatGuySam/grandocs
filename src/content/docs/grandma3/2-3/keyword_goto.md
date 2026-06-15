---
title: "Goto"
description: "To enter the Goto keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_goto.html"
scrapedAt: "2026-06-15T18:25:03.146Z"
pagefind: false
---
To enter the **Goto** keyword in the command line, use one of the options:

- Press Goto
- Type **Goto**
- Type the shortcut **Got**

## Description

Goto is a function keyword that is used to jump in a list using the original cue timing of the cue where the values were initially stored. Setting fade times using the Goto keyword overrides the original cue timing. For more information see [Relevant Playback Commands](/grandma3/2-3/cue_playback/#h2__483879150).  

|                                                  |                                                     |
| ------------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                      |
|                                                  | A set fade time overrides the original cue timing.  |

## Syntax

Goto \[Object]\["Object\_Name" or Object\_Number or Next/Previous] (Fade \[Fade\_Time])

## Examples

- To go to cue 103 of the selected executor, type:

|                                                                    |                                  |
| ------------------------------------------------------------------ | -------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Goto Cue 103 |

 

- To go to cue 105 of executor 104, type:

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Goto Cue 105 Executor 104 |

 

- To go to cue 10 of executor 201 using a fade time of 2 seconds, type:

|                                                                    |                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Goto Cue 10 Executor 201 Fade 2 |

- To go to the next cue in the selected sequence, type:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Goto Cue Next |

- To go to the previous cue in sequence 42, type:

|                                                                    |                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Goto Sequence 42 Cue Previous |
