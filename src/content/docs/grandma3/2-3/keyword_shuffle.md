---
title: "Shuffle"
description: "To enter the Shuffle keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_shuffle.html"
scrapedAt: "2026-06-15T18:25:10.950Z"
pagefind: false
---
To enter the Shuffle keyword in the command line, use one of the options:

- Press SelFix SelFix
- Type **Shuffle**
- Type the shortcut **Shuf**

## Description

Shuffle is a command keyword which is used to shuffle the order of the fixture selection. Shuffle is part of the MAtricks toolset.

For more information, see [MAtricks and Shuffle](/grandma3/2-3/matricks/).

## Syntax

MAtricks **\[Axis]** **\[Value]** text

MAtricks **\[Axis]** +

|                                            |                                                                                    |
| ------------------------------------------ | ---------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                          |
|                                            | The plus is a replacement of the value. You can either use plus/minus or a value.  |

## Examples

- To shuffle the current selection on the y-axis, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>MAtricks "YShuffle" +  |

- To shuffle the current selection on the z-axis, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>MAtricks "ZShuffle" +  |

- It is also possible to set a certain value to any of the three shuffle settings. To set the shuffle to 4 for the x-axis, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>MAtricks "XShuffle" 4  |
