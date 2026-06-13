---
title: "IfActive"
description: "To enter the IfActive keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_ifactive.html"
scrapedAt: "2026-06-12T21:24:29.176Z"
---
To enter the IfActive keyword in the command line, use one of the options:

- Press If If
- Type **IfActive**
- Type the shortcut **Ifa**

## Description

IfActive is a function keyword that selects fixtures with active values in the programmer.

|                                                  |                                                                                                       |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                        |
|                                                  | Executed on its own, the IfActive keyword only selects fixtures of the current command line default.  |

|                                                  |                                          |
| ------------------------------------------------ | ---------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                           |
|                                                  | IfActive only works with dimmer values.  |

If no filter is entered, IfActive will select all fixtures with active values.

If a filter is entered, IfActive will select all fixtures which have this filter and also fixtures that have active values in the programmer.

## Syntax

IfActive (\[Object] \["Object\_Name" or Object\_Number])

## Examples

- To select all fixtures with active values in the programmer, type:

|                                                                    |                              |
| ------------------------------------------------------------------ | ---------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>IfActive |

 

- To select fixtures within group 5 which also have active values in the programmer, type: 

|                                                                    |                                      |
| ------------------------------------------------------------------ | ------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>IfActive Group 5 |
