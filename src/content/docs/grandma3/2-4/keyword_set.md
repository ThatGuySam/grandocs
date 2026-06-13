---
title: "Set"
description: "To enter the Set keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_set.html"
scrapedAt: "2026-06-12T21:24:36.383Z"
---
To enter the Set keyword in the command line, use one of the options:

- Press MA + Assign
- Type **Set**

## Description

The Set keyword sets values to properties of objects. It is also used to transfer values of properties to other properties, to other objects, and to different properties of other objects.

It is used in conjunction with the [Property keyword](/grandma3/2-4/keyword_property/) or the [= \[Equal\] keyword.](/grandma3/2-4/keyword_equal/)

## Syntax

Set \[Object\_Type] \["Object\_Name" or Object\_Number] Property \["Property\_Name"] \["Property\_Value"]

Set \[Object\_Type] \["Target\_Object\_Name" or Target\_Object\_Number] Property \["Property\_Name"] At \[Object\_Type] (\["Source\_Object\_Name" or Source\_Object\_Number]) (Property \["Property\_Name"])

## Option Keywords

The Set keyword uses the following option keywords:

- [/PatchOffset](/grandma3/2-4/ok_patchoffset/)
- [/Look](/grandma3/2-4/ok_look/)

## Examples

- To set sequence 8 to priority HTP, type:

|                                                                    |                                                 |
| ------------------------------------------------------------------ | ----------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Sequence 8 "Priority" 3 |

- To transfer the value of the Priority setting of sequence 1 to sequence 42, type:

|                                                                    |                                                                       |
| ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Sequence 42 Property "Priority" At Sequence 1 |

- To transfer the name of the selected sequence to the name of group 5, type:

|                                                                    |                                                                             |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Group 5 Property "Name" At Sequence Property "Name" |

- To transfer the value of the CueFade property of cue 9 to the CueDelay property of cue 6, type:

|                                                                    |                                                                                |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Cue 6 Property "CueDelay" At Cue 9 Property "CueFade"  |

- To set CueFade and CueDelay of cue 1 to three seconds, type:

|                                                                    |                                                                 |
| ------------------------------------------------------------------ | --------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Cue 1 Property "CueFade" + "CueDelay" 3 |

- To transfer CueFade and CueDelay of cue 3 to cue 1, type:

|                                                                    |                                                                         |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]> Set Cue 1 Property "CueFade" + "CueDelay" At Cue 3 |

- To set a range of values for FadeX in the first recipe of cue 1, part 0 of the selected sequence, type:

|                                                                    |                                                                    |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Cue 1 Part 0.1 Property "FadeX" "0 Thru 5" |
