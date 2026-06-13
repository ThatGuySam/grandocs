---
title: "RunningTimer"
description: "To enter the RunningTimer keyword in the command line, type RunningTimer."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_runningtimer.html"
scrapedAt: "2026-06-12T21:24:35.640Z"
---
To enter the RunningTimer keyword in the command line, type **RunningTimer**.

## Description

The RunningTimer keyword addresses running timers.

|                                                  |                                                                                                    |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                     |
|                                                  | The numbers of the running timers are not equal to the numbers of timers in the timers data pool.  |

## Syntax

\[Function] RunningTimer \["RunningTimer\_Name" or RunningTimer\_Number]

## Examples

- To disable the first timer that is currently running, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off RunningTimer 1  |

- To list all running timers, change destination first and type:

|                                                                    |                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination RunningTimer |
