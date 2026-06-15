---
title: "RunningTimecode"
description: "To enter the RunningTimecode keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_runningtimecode.html"
scrapedAt: "2026-06-15T18:25:10.067Z"
pagefind: false
---
To enter the RunningTimecode keyword in the command line, use one of the options:

- Type **RunningTimecode**
- Type the shortcut **Runningt**

## Description

The RunningTimecode keyword addresses the running timecodes in the show file. 

|                                                  |                                                                                                            |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                             |
|                                                  | The numbers of the running timcodes are not equal to the numbers of timecodes in the timecodes data pool.  |

## Syntax

\[Function] RunningTimcode \["RunningTimecode\_Name" or RunningTimecode\_Number]

## Examples

- To disable the first timecode that is currently running, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Off RunningTimecode 1  |

 

- To list all running timecodes, change destination to the running timecodes first:

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination RunningTimecodes  |

Result: 

|                                                                    |                                                           |
| ------------------------------------------------------------------ | --------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/RunningTimecodes> |

 

- To list all running timecodes, type:

|                                                                    |                                                                |
| ------------------------------------------------------------------ | -------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/RunningTimecodes> List |
