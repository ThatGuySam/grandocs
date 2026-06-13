---
title: "RunningTimecode"
description: "To enter the RunningTimecode keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_runningtimecode.html"
scrapedAt: "2026-06-12T21:24:35.625Z"
---
To enter the RunningTimecode keyword in the command line, use one of the options:

- Type **RunningTimecode**
- Type the shortcut **Runningt**

## Description

The RunningTimecode keyword addresses timecodes that are playing back. 

|                                                  |                                                                                                            |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                             |
|                                                  | The numbers of the running timcodes are not equal to the numbers of timecodes in the timecodes data pool.  |

## Syntax

\[Function] RunningTimcode \["RunningTimecode\_Name" or RunningTimecode\_Number]

## Examples

- To disable the first timecode that is currently running, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off RunningTimecode 1  |

 

- To list all running timecodes, change destination first and type:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination RunningTimecode |

 

- Then type:

|                                                                    |                                                                                                                    |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>Set RunningPlayback Property "SelectedPlaybackType" "Timecode" |
