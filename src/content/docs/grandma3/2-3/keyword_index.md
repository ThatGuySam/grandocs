---
title: "Index"
description: "To enter the Index keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_index.html"
scrapedAt: "2026-06-15T18:25:04.321Z"
pagefind: false
---
To enter the Index keyword in the command line, use one of the options:

- Type **Index**
- Type the shortcut **Ind**

## Description

Index keyword is a command keyword that addresses values where a property can have more than one value. For example, a fixture with at least two DMX breaks. The patch property has 2 values for this fixture.

|                                            |                                                     |
| ------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                           |
|                                            | The values of the Index keyword are zero nominated. |

## Syntax

Set \[Object] \["Object\_Name" or Object\_Number] \["Property"] Index \[Index\_Number] \["Value"]

## Examples

**Requirement:**

- Fixture 1 has to have at least two DMX breaks.\
  For example, the fixture type LED Wall 20x20

 

- To set the patch address of the second break to universe 2 address 1 without affecting the first address, type:

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Set Fixture 1 "Patch" Index 1 "2.1" |

 

- To disable the dimmer attribute in filter 6, type:

|                                                                    |                                                                    |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Set Filter 6 Property "Attributes" Index 0 "0" |
