---
title: "DMXAddress"
description: "To enter the DMXAddress in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_dmx_address.html"
scrapedAt: "2026-06-12T21:24:25.247Z"
---
To enter the DMXAddress in the command line, use one of the options:

- Press MA + X8 | DMX + X8 | DMX
- Type **DMXAddress **
- Type the shortcut **DMXA**

## Description

The DMXAddress keyword is used to access DMX addresses directly using an absolute numbering method.

## Syntax

\[Function] DMXAddress \[DMXAddress\_Number]

**DMXAddress \[DMXAddress\_Number] At** (\[Readout]) \[Value]

## Examples

- To select the fixture patched to universe 2, address 1, type:

|                                                                    |                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>SelectFixtures DMXAddress 513 |

 

- To output 50% on the third DMX channel of universe 1 using the DMX testing function, type:

|                                                                    |                                        |
| ------------------------------------------------------------------ | -------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>DMXAddress 3 At 50 |

 

- To output 42% on the DMX channels 8 to 15 on universe 2 using the DMX testing function, type:

|                                                                    |                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>DMXAddress 520 Thru 527 At 42 |

 

- To disable the DMX testing function on all DMX channels of all universes, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off DMXAddress Thru |
