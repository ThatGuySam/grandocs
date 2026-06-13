---
title: "MyRunningMacro"
description: "To enter the MyRunningMacro keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_myrunningmacro.html"
scrapedAt: "2026-06-12T21:24:31.701Z"
---
To enter the MyRunningMacro keyword in the command line, use one of the options:

- Type **MyRunningMacro**
- Type the shortcut **Myrunningm**

## Description

The MyRunningMacro keyword addresses macro playbacks that were started by my user profile and are currently running.

|                                                  |                                                                                                       |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                        |
|                                                  | The numbers of the running macros are not equal to the numbers of the macro in the macros data pool.  |

## Syntax

**\[Function]** MyRunningMacro \["MyRunningMacro\_Name" or MyRunningMacro\_Number]

## Examples

- To disable the first macro that you started and that is currently running, type:

|                                                                    |                                          |
| ------------------------------------------------------------------ | ---------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off MyRunningMacro 1 |

 

- To list all your running macros, change destination first and type:

|                                                                    |                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination MyRunningMacro |

 

- Then type: 

|                                                                    |                                                                                                                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>Set MyRunningMacro Property "SelectedPlaybackType" "Macro" Property "SelectedMine" "Yes" |

- After that: 

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>List |
