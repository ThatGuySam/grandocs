---
title: "MyRunningSequence"
description: "To enter the MyRunningSequence keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_myrunningsequence.html"
scrapedAt: "2026-06-15T18:25:06.538Z"
pagefind: false
---
To enter the MyRunningSequence keyword in the command line, use one of the options:

- Type **MyRunningSequence**
- Type the shortcut **My**

## Description

The MyRunningSequence keyword is used when there are several users in a session. 

It allows you to disable your own running sequences in a show file.

|                                                  |                                                                                                             |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                              |
|                                                  | The numbers of the running sequences are not equal to the numbers of sequences in the sequences data pool.  |

## Syntax

**\[Function]** MyRunningSequence \[Number]

## Examples

- To disable the first sequence that is running and which you started, type:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Off MyRunningSequence 1 |

 

- To list all your running sequences, change destination to the running sequences first:

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination MyRunningSequence |

Result: 

|                                                                    |                                                             |
| ------------------------------------------------------------------ | ----------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/MyRunningSequences> |

 

- To list all your running sequences, type:

|                                                                    |                                                                 |
| ------------------------------------------------------------------ | --------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Temp/RunningPlaybacksCollect/MyRunningSequences>List |
