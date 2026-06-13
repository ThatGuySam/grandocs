---
title: "RunningPlayback"
description: "To enter the RunningPlayback keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_runningplayback.html"
scrapedAt: "2026-06-12T21:24:36.234Z"
---
To enter the RunningPlayback keyword in the command line, use one of the options:

- Type **RunningPlayback**
- Type the shortcut **Runningpl**

## Description

The RunningPlayback keyword addresses all running playbacks.

It allows you to list or disable all of the running playbacks in a show file.

## Syntax

\[Function] RunningPlayback \["RunningPlayback\_Name" or RunningPlayback\_Number]

## Examples

- To disable all running playbacks, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off RunningPlayback |

 

- To list all running playbacks, change destination to the running playbacks first:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination RunningPlayback |

Result: 

|                                                                    |                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks> |

 

- To list all running playbacks, type:

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>List |
