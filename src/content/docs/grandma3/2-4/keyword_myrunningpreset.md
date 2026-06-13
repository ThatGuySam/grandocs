---
title: "MyRunningPreset"
description: "To enter the MyRunningPreset keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_myrunningpreset.html"
scrapedAt: "2026-06-12T21:24:31.696Z"
---
To enter the MyRunningPreset keyword in the command line, use one of the options:

- Type **MyRunningPreset**
- Type the shortcut **Myrunningp**

## Description

The MyRunningPreset keyword adresses preset playbacks that were started by my user profile and are currently running.

|                                                  |                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                       |
|                                                  | The numbers of the running presets are not equal to the numbers in the preset pool.  |

## Syntax

**\[Function]** MyRunningPreset \["MyRunningPreset\_Name" or MyRunningPreset\_Number]

## Examples

- To disable the second and currently running preset started by my user profile, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off MyRunningPreset 2 |

 

- To list my running presets, change destination first and type:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination MyRunningPreset |

- Then type:

|                                                                    |                                                                                                                                                |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>Set MyRunningPreset Property "SelectedPlaybackType" "Preset" Property "SelectedMine" "Yes" |

- Ater that type:

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>List |
