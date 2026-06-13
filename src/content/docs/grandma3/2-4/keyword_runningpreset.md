---
title: "RunningPreset"
description: "To enter the RunningPreset keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_runningpreset.html"
scrapedAt: "2026-06-12T21:24:35.479Z"
---
To enter the RunningPreset keyword in the command line, use one of the options:

- Type **RunningPreset**
- Type the shortcut **Runningp**

## Description

The RunningPreset keyword addresses presets that are playing back. 

|                                                  |                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                       |
|                                                  | The numbers of the running presets are not equal to the numbers in the preset pool.  |

## Syntax

\[Function] RunningPreset \["RunningPreset\_Name" or RunningPreset\_Number]

## Example

- To disable currently running presets, type:

|                                                                    |                                        |
| ------------------------------------------------------------------ | -------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off RunningPreset  |

- To list all running presets, change destination first and type:

|                                                                    |                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination RunningPreset |

- Then type:

|                                                                    |                                                                                                                  |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>Set RunningPlayback Property "SelectedPlaybackType" "Preset" |

- After that type:

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>List |
