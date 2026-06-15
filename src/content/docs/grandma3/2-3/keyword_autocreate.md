---
title: "AutoCreate"
description: "To enter the AutoCreate keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_autocreate.html"
scrapedAt: "2026-06-15T18:24:57.331Z"
pagefind: false
---
To enter the AutoCreate keyword in the command line, use one of the options:

- Type **AutoCreate **
- Type the shortcut **Ac **or **Au**

## Description

The AutoCreate keyword creates objects depending on predefined source objects. It can, for example, create groups in the fixture types of the patched fixtures. 

|                                            |                                                                                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                 |
|                                            | If your selection is defined as source list, the active MAtricks settings will be taken into cosideration whenever executing AutoCreate.  |

## Syntax

**AutoCreate \[Source\_Object] \["Source\_Object\_Name" or Source\_Object\_Number] At \[Destination\_Object] \["Destination\_Object\_Name" or Destination\_Object\_Number] (/Option)**

****

## Option Keywords

The AutoCreate keyword uses the following option keywords:

- [/All](/grandma3/2-3/ok_all/)
- [/ChannelSet](/grandma3/2-3/ok_channelset/)
- [/Merge](/grandma3/2-3/ok_merge/)
- [/OddEven](/grandma3/2-3/ok_oddeven/)
- [/Overwrite](/grandma3/2-3/ok_overwrite/)
- [/Single](/grandma3/2-3/ok_single/)

## Examples

- To create single fixture groups starting with group pool object 1 using all selected fixtures, type:

|                                                                    |                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>AutoCreate Selection At Group 1 |

 

- To create single fixture groups for fixtures 1 to 10 starting with group pool object 1, type:

|                                                                    |                                                             |
| ------------------------------------------------------------------ | ----------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>AutoCreate Fixture 1 Thru 10 At Group 1 |

 

**Requirement: **

1. Insert at least ten fixture types in the show file and patch at least two fixtures of every fixture type.

- To create a group in the group pool object 42 containing all fixtures of fixture type 10, type:

|                                                                    |                                                           |
| ------------------------------------------------------------------ | --------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>AutoCreate FixtureType 10 At Group 42 |

 

**Requirement:**

1. Create layers and classes within the patch.
2. Set fixtures to these layers and classes.

|                                            |                                             |
| ------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                   |
|                                            | The demo show already uses these settings.  |
