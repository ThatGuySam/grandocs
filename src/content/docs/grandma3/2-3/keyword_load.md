---
title: "Load"
description: "To enter the Load keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_load.html"
scrapedAt: "2026-06-15T18:25:05.367Z"
pagefind: false
---
To enter the Load keyword in the command line, use one of the options:

- Press Goto Goto
- Type **Load**

## Description

The Load keyword is a playback keyword which is used to prepare an executor to jump to another cue rather than jumping to the next cue when a [Go+](/grandma3/2-3/keyword_goplus/) is performed on the executor.

For more information on how to assign executors see [Assign Objects to an Executor](/grandma3/2-3/executor_assign/). 

## Syntax

****Load \[Object] \["Object\_Name" or Object\_Number]****

## Examples

- To load cue 3 on the [selected](/grandma3/2-3/keyword_select/) executor, type:

|                                                                    |                                |
| ------------------------------------------------------------------ | ------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Load Cue 3 |

Cue 3 is loaded. To indicate that a cue is loaded, the display toggles between Cue 3 and Cue "Name".

 

- To load cue 5 on executor 114, type:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Load Executor 114 Cue 5 |

 

- To load cue +2 on executor 114, type:

|                                                                    |                                          |
| ------------------------------------------------------------------ | ---------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Load +2 Executor 114 |

 

- To load the previous cue on executor 114, type:

|                                                                    |                                                |
| ------------------------------------------------------------------ | ---------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Load Previous Executor 114 |
