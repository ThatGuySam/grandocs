---
title: "RunningMacro"
description: "To enter the RunningMacro keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_runningmacro.html"
scrapedAt: "2026-06-15T18:25:09.773Z"
pagefind: false
---
To enter the RunningMacro keyword in the command line, use one of the options:

- Type **RunningMacro**
- Type the shortcut **Runningm**

## Description

The RunningMacro keyword is useful when there are several users in a session. 

It allows you to list or disable all running macros in a show file.

|                                                  |                                                                                                    |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                     |
|                                                  | The numbers of the running macros are not equal to the numbers of macros in the macros data pool.  |

## Syntax

\[Function] RunningMacro \[Number]

## Example

- To disable the first macro that is currently running, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Off RunningMacro 1  |

 

- To list all running macros, change destination to the running macros first:

|                                                                    |                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination RunningMacro  |

Result: 

|                                                                    |                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/RunningMacros> |

 

- To list all running macros, type:

|                                                                    |                                                            |
| ------------------------------------------------------------------ | ---------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/RunningMacros>List |
