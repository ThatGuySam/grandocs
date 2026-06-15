---
title: "MyRunningSoundFile"
description: "To enter the MyRunningSoundFile keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_myrunningsoundfile.html"
scrapedAt: "2026-06-15T18:25:06.684Z"
pagefind: false
---
To enter the MyRunningSoundFile keyword in the command line, use one of the options:

- Type **MyRunningSoundFile**
- Type the shortcut **MyRunningso**

## Description

The MyRunningSoundFile keyword is used when there are several users in a session. 

It allows you to disable your own running sound files in a show file.

|                                                  |                                                                                                        |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                         |
|                                                  | The numbers of the running sound files are not equal to the numbers of sound files in the sound pool.  |

## Syntax

**\[Function]** MyRunningSoundFile \[Number]

## Examples

- To disable the first sound file that is running and which you started, type:

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Off MyRunningSoundFile 1 |

 

- To list all your running sound files, change destination to the running sound files first:

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination MyRunningSoundFile |

Result: 

|                                                                    |                                                              |
| ------------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/MyRunningSoundFiles> |

 

- To list all your running sound files, type:

|                                                                    |                                                                   |
| ------------------------------------------------------------------ | ----------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/MyRunningSoundFiles> List |
