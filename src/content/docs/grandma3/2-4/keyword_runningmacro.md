---
title: "RunningMacro"
description: "To enter the RunningMacro keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_runningmacro.html"
scrapedAt: "2026-06-12T21:24:35.361Z"
---
To enter the RunningMacro keyword in the command line, use one of the options:

- Type **RunningMacro**
- Type the shortcut **Runningm**

## Description

The RunningMacro keyword addresses macros that are playing back. 

It allows you to list or disable all running macros in a show file.

|                                                  |                                                                                                    |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                     |
|                                                  | The numbers of the running macros are not equal to the numbers of macros in the macros data pool.  |

## Syntax

\[Function] RunningMacro \["RunningMacro\_Name" or RunningMacro\_Number]

## Example

- To disable the first macro that is currently running, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off RunningMacro 1  |

 

- To list all running macros, change destination first and type:

|                                                                    |                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination RunningMacro |
