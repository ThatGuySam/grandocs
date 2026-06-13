---
title: "MyRunningSequence"
description: "To enter the MyRunningSequence keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_myrunningsequence.html"
scrapedAt: "2026-06-12T21:24:31.848Z"
---
To enter the MyRunningSequence keyword in the command line, use one of the options:

- Type **MyRunningSequence**
- Type the shortcut **My**

## Description

The MyRunningSequence keyword addresses sequence playbacks that were started by my user profile and are currently running.

|                                                  |                                                                                                             |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                              |
|                                                  | The numbers of the running sequences are not equal to the numbers of sequences in the sequences data pool.  |

## Syntax

**\[Function]** MyRunningSequence \["MyRunningSequence\_Name" or MyRunningSequence\_Number]

## Examples

- To disable the first sequence that is running and which you started, type:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off MyRunningSequence 1 |

 

- To list all your running sequences, change destination first and type:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination RunningPlayback |

- Then type:

|                                                                    |                                                                                                                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>Set MyRunningSequence Property "SelectedPlaybackType" "Sequence" Property "SelectedMine" "Yes" |

- After that:

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>List |
