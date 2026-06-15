---
title: "RunningTimer"
description: "To enter the RunningTimer keyword in the command line, type RunningTimer."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_runningtimer.html"
scrapedAt: "2026-06-15T18:25:10.063Z"
pagefind: false
---
To enter the RunningTimer keyword in the command line, type **RunningTimer**.

## Description

The RunningTimer keyword grants access to all running timers. 

It allows you to list or disable all running timers in a show file.

|                                                  |                                                                                                    |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                     |
|                                                  | The numbers of the running timers are not equal to the numbers of timers in the timers data pool.  |

## Syntax

\[Function] RunningTimer \[Number]

## Examples

- To disable the first timer that is currently running, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Off RunningTimer 1  |

- To list all running timers, change destination to the running timers first:

|                                                                    |                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination RunningTimer  |

Result: 

|                                                                    |                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/RunningTimers> |

 

- To list all running timers, type:

|                                                                    |                                                             |
| ------------------------------------------------------------------ | ----------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/RunningTimers> List |
