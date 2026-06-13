---
title: "RunningSequence"
description: "To enter the RunningSequence keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_runningsequence.html"
scrapedAt: "2026-06-12T21:24:35.499Z"
---
To enter the RunningSequence keyword in the command line, use one of the options:

- Type **RunningSequence**
- Type the shortcut **Run**

## Description

The RunningSequence keyword addresses sequences that are playing back.

|                                                  |                                                                                        |
| ------------------------------------------------ | -------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                         |
|                                                  | The numbers of the running sequences are not equal to the numbers in the preset pool.  |

## Syntax

\[Function] RunningSequence \["RunningSequence\_Name" or RunningSequence\_Number]

## Examples

- To disable currently running presets, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off RunningSequence 1 |

- To list all running sequences, change destination first and type:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination RunningSequence |

- Then type:

|                                                                    |                                                                                                                    |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>Set RunningPlayback Property "SelectedPlaybackType" "Sequence" |

- After that type:

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@Temp/Cmdlines/Cmdline 1/RunningPlaybacks>List |
