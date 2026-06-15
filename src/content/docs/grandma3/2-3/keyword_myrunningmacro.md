---
title: "MyRunningMacro"
description: "To enter the MyRunningMacro keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_myrunningmacro.html"
scrapedAt: "2026-06-15T18:25:06.541Z"
pagefind: false
---
To enter the MyRunningMacro keyword in the command line, use one of the options:

- Type **MyRunningMacro**
- Type the shortcut **MyRunningm**

## Description

The MyRunningMacro keyword is used when there are several users in a session. 

It allows you to list or disable your own running macros in a show file.

|                                                  |                                                                                                       |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                        |
|                                                  | The numbers of the running macros are not equal to the numbers of the macro in the macros data pool.  |

## Syntax

**\[Function]** MyRunningMacro \["Macro\_Name" or Macro\_Number]

## Examples

- To disable the first macro that is running and which you started, type:

|                                                                    |                                          |
| ------------------------------------------------------------------ | ---------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Off MyRunningMacro 1 |

 

- To list all your running macros, change destination to the running macros first:

|                                                                    |                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination MyRunningMacro |

Result: 

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/MyRunningMacros> |

 

- To list all your running macros, type:

|                                                                    |                                                               |
| ------------------------------------------------------------------ | ------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/MyRunningMacros> List |
