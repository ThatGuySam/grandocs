---
title: "MyRunningPreset"
description: "To enter the MyRunningPreset keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_myrunningpreset.html"
scrapedAt: "2026-06-15T18:25:06.535Z"
pagefind: false
---
To enter the MyRunningPreset keyword in the command line, use one of the options:

- Type **MyRunningPreset**
- Type the shortcut **MyRunningp**

## Description

The MyRunningPreset keyword is used when there are several users in a session. 

It allows you to disable your own running presets in a show file.

|                                                  |                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                       |
|                                                  | The numbers of the running presets are not equal to the numbers in the preset pool.  |

## Syntax

**\[Function]** MyRunningPreset \["Preset\_Name" or Preset\_Number]

## Examples

- To disable your second preset of the gobo preset pool that is running, type:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Off MyRunningPreset 3.2 |

 

- To list all your running presets, change destination to the running presets first and type:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination MyRunningPreset |

Result: 

|                                                                    |                                                           |
| ------------------------------------------------------------------ | --------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/MyRunningPresets> |

 

- To list all your running presets, type:

|                                                                    |                                                                 |
| ------------------------------------------------------------------ | --------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/MyRunningPresets> List  |
