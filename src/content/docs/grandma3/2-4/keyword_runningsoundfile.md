---
title: "RunningSoundFile"
description: "To enter the RunningSoundFile keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_runningsoundfile.html"
scrapedAt: "2026-06-12T21:24:35.496Z"
---
To enter the RunningSoundFile keyword in the command line, use one of the options:

- Type **RunningSoundFile**
- Type the shortcut **Runningso**

## Description

The RunningSoundFile keyword addresses sounds that are playing back. 

It allows you to disable all running sounds in a show file.

|                                                  |                                                                                              |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                               |
|                                                  | The numbers of the running sounds are not equal to the numbers of sounds in the sound pool.  |

## Syntax

**\[Function] **RunningSoundFile \["RunningSoundFile\_Name" or RunningSoundFile\_Number]

****

## Examples

- To disable the first sound that is currently running, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off RunningSoundFile 1 |

 

- To list all running sounds, change destination first and type:

|                                                                    |                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination RunningSoundFile |

- Then type:

|                                                                    |                                                                                                                 |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>Set RunningPlayback Property "SelectedPlaybackType" "Sound" |

            

- After that type:

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>List |
