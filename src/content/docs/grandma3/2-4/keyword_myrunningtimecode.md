---
title: "MyRunningTimecode"
description: "To enter the MyRunningTimecode keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_myrunningtimecode.html"
scrapedAt: "2026-06-12T21:24:31.853Z"
---
To enter the MyRunningTimecode keyword in the command line, use one of the options:

- Type **MyRunningTimecode**
- Type the shortcut **Myrunningt**

## Description

The MyRunningTimecode keyword addresses timecode playbacks that were started by my user profile and are currently running.

|                                                  |                                                                                                            |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                             |
|                                                  | The numbers of the running timecodes are not equal to the numbers of timecodes in the timecode data pool.  |

## Syntax

**\[Function]** MyRunningTimecode \["MyRunningTimecode\_Name" or MyRunningTimecode\_Number]

## Examples

- To disable the first timecode that is running and which you started, type:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off MyRunningTimecode 1 |

 

- To list all your running timecodes, change destination first and type:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination RunningPlayback |

       

- Then type:

|                                                                    |                                                                                                                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>Set MyRunningTimecode Property "SelectedPlaybackType" "Timecode" Property "SelectedMine" "Yes" |
