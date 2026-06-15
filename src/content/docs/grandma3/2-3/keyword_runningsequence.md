---
title: "RunningSequence"
description: "To enter the RunningSequence keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_runningsequence.html"
scrapedAt: "2026-06-15T18:25:09.920Z"
pagefind: false
---
To enter the RunningSequence keyword in the command line, use one of the options:

- Type **RunningSequence**
- Type the shortcut **Run**

## Description

The RunningSequence keyword is useful when there are several users in a session. 

It allows you to list or disable all running sequences in a show file.

|                                                  |                                                                                                             |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                              |
|                                                  | The numbers of the running sequences are not equal to the numbers of sequences in the sequences data pool.  |

## Syntax

\[Function] RunningSequence \[Number]

## Example

- To disable the first sequence that is currently running, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Off RunningSequence 1  |

 

- To list all running sequences, change destination to the running sequences first:

|                                                                    |                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination RunningSequence  |

Result: 

|                                                                    |                                                           |
| ------------------------------------------------------------------ | --------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/RunningSequences> |

 

- To list all running sequences, type:

|                                                                    |                                                                |
| ------------------------------------------------------------------ | -------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/RunningSequences> List |
