---
title: "MyRunningTimer"
description: "To enter the MyRunningTimer keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_myrunningtimer.html"
scrapedAt: "2026-06-12T21:24:32.008Z"
---
To enter the MyRunningTimer keyword in the command line, use one of the options:

- Type **MyRunningTimer**

## Description

The MyRunningTimer keyword adresses timer playbacks that were started by my user profile and are currently running.

|                                                  |                                                                                                    |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                     |
|                                                  | The numbers of the running timers are not equal to the numbers of timers in the timers data pool.  |

## Syntax

**\[Function]** MyRunningTimer \["MyRunningTimer\_Name" or MyRunningTimer\_Number]

## Examples

- To disable the first timer that is running and which you started, type:

|                                                                    |                                          |
| ------------------------------------------------------------------ | ---------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off MyRunningTimer 1 |

 

- To list all your running timers, change destination first and type:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination RunningPlayback |

- Then type:

|                                                                    |                                                                                                                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>Set MyRunningTimer Property "SelectedPlaybackType" "Timer" Property "SelectedMine" "Yes" |
