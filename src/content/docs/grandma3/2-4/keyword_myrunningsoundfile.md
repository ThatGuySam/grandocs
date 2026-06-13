---
title: "MyRunningSoundFile"
description: "To enter the MyRunningSoundFile keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_myrunningsoundfile.html"
scrapedAt: "2026-06-12T21:24:31.856Z"
---
To enter the MyRunningSoundFile keyword in the command line, use one of the options:

- Type **MyRunningSoundFile**
- Type the shortcut **Myrunningso**

## Description

The MyRunningSoundFile keyword addresses sound playbacks that were started by my user profile and are currently running.

|                                                  |                                                                                                        |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                         |
|                                                  | The numbers of the running sound files are not equal to the numbers of sound files in the sound pool.  |

## Syntax

**\[Function]** MyRunningSoundFile \["MyRunningSoundFile\_Name" or MyRunningSoundFile\_Number]

## Examples

- To disable the first sound file that is running and which you started, type:

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off MyRunningSoundFile 1 |

 

- To list all your running sound files, change destination first and type:

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination MyRunningSoundFile |

          

- Then type:

|                                                                    |                                                                                                                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>Set MyRunningSoundFile Property "SelectedPlaybackType" "Sound" Property "SelectedMine" "Yes" |
