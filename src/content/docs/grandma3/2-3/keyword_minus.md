---
title: "- (Minus)"
description: "To enter the - [Minus] keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_minus.html"
scrapedAt: "2026-06-15T18:24:56.646Z"
pagefind: false
---
To enter the - \[Minus] keyword in the command line, use one of the options:

- Press -
- Type **-** \[Minus]

## Description

The - \[Minus] keyword is used to remove objects from a list or to indicate negative values. 

If the - \[Minus] keyword is used in order to indicate values, it will indicate absolute or relative values:

- A space between the - \[Minus] and the value is automatically added. The space makes the value relative
- To obtain an absolute value, remove the space between the - \[Minus]

## Syntax

(\[Attribute] \["Attribute\_Name" or Attribute\_Number]) At - \[Value]

\[Object] \["Object\_Name or Object\_Number] - \[Object] \["Object\_Name" or Object\_Number] \[Number]

## Examples

- To reduce the percentage readout of pan by 10 percent, type:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Attribute "Pan" At - 10 |

 

- To reduce 10 % from the current dimmer value in the selected fixtures, type:

|                                                                    |                             |
| ------------------------------------------------------------------ | --------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>At - 10 |

 

- To select the entire group 5 without selecting fixture 2, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Group 5 - Fixture 2 |

 

- To remove fixtures 5, 6, and 7 in the current selection of fixtures, type:

|                                                                    |                                        |
| ------------------------------------------------------------------ | -------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>- Fixture 5 Thru 7 |
