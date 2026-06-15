---
title: "RunningSoundFile"
description: "To enter the RunningSoundFile keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_runningsoundfile.html"
scrapedAt: "2026-06-15T18:25:09.918Z"
pagefind: false
---
To enter the RunningSoundFile keyword in the command line, use one of the options:

- Type **RunningSoundFile**
- Type the shortcut **Runningso**

## Description

The RunningSoundFile keyword is used when there are several users in a session. 

It allows you to disable all running sound files in a show file.

|                                                  |                                                                                                        |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                         |
|                                                  | The numbers of the running sound files are not equal to the numbers of sound files in the sound pool.  |

## Syntax

**\[Function] **RunningSoundFile \[Number]

****

## Examples

- To disable the first sound file that is currently running, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Off RunningSoundFile 1 |

 

- To list all running sound files, change destination to the running sound files first:

|                                                                    |                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination RunningSoundFile |

Result: 

|                                                                    |                                                            |
| ------------------------------------------------------------------ | ---------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/RunningSoundFiles> |

 

- To list all running sound files, type:

|                                                                    |                                                                 |
| ------------------------------------------------------------------ | --------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/RunningSoundFiles> List |
