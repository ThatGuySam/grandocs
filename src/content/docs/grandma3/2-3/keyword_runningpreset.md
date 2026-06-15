---
title: "RunningPreset"
description: "To enter the RunningPreset keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_runningpreset.html"
scrapedAt: "2026-06-15T18:25:09.915Z"
pagefind: false
---
To enter the RunningPreset keyword in the command line, use one of the options:

- Type **RunningPreset**
- Type the shortcut **Runningp**

## Description

The RunningPreset keyword is useful when there are several users in a session. 

It allows you to list or disable all running presets in a show file.

|                                                  |                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                       |
|                                                  | The numbers of the running presets are not equal to the numbers in the preset pool.  |

## Syntax

\[Function] RunningPreset \["Preset\_Name" or Preset\_Number]

## Example

- To disable the first color preset that is currently running, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Off RunningPreset 4.1  |

 

- To list all running presets, change destination to the running presets first:

|                                                                    |                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination RunningPreset  |

Result: 

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/RunningPresets> |

 

- To list all running presets, type:

|                                                                    |                                                             |
| ------------------------------------------------------------------ | ----------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/RunningPresets>List |
