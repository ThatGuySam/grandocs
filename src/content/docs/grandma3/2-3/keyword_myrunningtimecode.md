---
title: "MyRunningTimecode"
description: "To enter the MyRunningTimecode keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_myrunningtimecode.html"
scrapedAt: "2026-06-15T18:25:06.688Z"
pagefind: false
---
To enter the MyRunningTimecode keyword in the command line, use one of the options:

- Type **MyRunningTimecode**
- Type the shortcut **MyRunningt**

## Description

The MyRunningTimecode keyword is used when there are several users in a session. 

It allows you to disable your own running timecodes in a show file.

|                                                  |                                                                                                            |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                             |
|                                                  | The numbers of the running timecodes are not equal to the numbers of timecodes in the timecode data pool.  |

## Syntax

**\[Function]** MyRunningTimecode \[Number]

## Examples

- To disable the first timecode that is running and which you started, type:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Off MyRunningTimecode 1 |

 

- To list all your running timecodes, change destination to the running timecodes first:

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination MyRunningTimecode |

Result: 

|                                                                    |                                                             |
| ------------------------------------------------------------------ | ----------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/MyRunningTimecodes> |

 

- To list all your running timecodes, type:

|                                                                    |                                                                 |
| ------------------------------------------------------------------ | --------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/MyRunningTimecodes>List |
