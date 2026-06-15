---
title: "MyRunningTimer"
description: "To enter the MyRunningTimer keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_myrunningtimer.html"
scrapedAt: "2026-06-15T18:25:06.695Z"
pagefind: false
---
To enter the MyRunningTimer keyword in the command line, use one of the options:

- Type **MyRunningTimer**

## Description

The MyRunningTimer keyword is used when there are several users in a session. 

It allows you to list or disable your own running timers in a show file.

|                                                  |                                                                                                    |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                     |
|                                                  | The numbers of the running timers are not equal to the numbers of timers in the timers data pool.  |

## Syntax

**\[Function]** MyRunningTimer \["Timer\_Name" or Timer\_Number]

## Examples

- To disable the first timer that is running and which you started, type:

|                                                                    |                                          |
| ------------------------------------------------------------------ | ---------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Off MyRunningTimer 1 |

 

- To list all your running timers, change destination to the running timers first:

|                                                                    |                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination MyRunningTimer |

Result: 

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/MyRunningTimers> |

 

- To list all your running timers, type:

|                                                                    |                                                              |
| ------------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/MyRunningTimers>List |
