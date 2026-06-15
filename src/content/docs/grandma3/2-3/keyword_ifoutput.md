---
title: "IfOutput"
description: "To enter the IfOutput keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_ifoutput.html"
scrapedAt: "2026-06-15T18:25:04.170Z"
pagefind: false
---
To enter the IfOutput keyword in the command line, use one of the options:

- Press If
- Type **IfOutput**
- Type the shortcut **Ifo**

## Description

IfOutput is a function keyword that selects fixtures based on their current output. This function works with presets and sequences only.

|                                                  |                                                                                                       |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                        |
|                                                  | Executed on its own, the IfOutput keyword only selects fixtures of the current command line default.  |

## Syntax

IfOutput (\[Object] \["Object\_Name" or Object\_Number])

## Examples

- To select all fixtures of the current command line default which have output on stage, type:

|                                                                    |                              |
| ------------------------------------------------------------------ | ---------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>IfOutput |

 

- To select all fixtures that output the values stored in sequence 1, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>IfOutput Sequence 1 |

 

- To select all fixtures that use the color preset "Green", type: 

|                                                                    |                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>IfOutput Preset "Color"."Green" |

 

**Requirement:**

Select several fixtures where the dimmer is enabled and select several groups right after.

- To only select fixtures where the dimmer is open, type:

|                                                                    |                                        |
| ------------------------------------------------------------------ | -------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>IfOutput Selection |
