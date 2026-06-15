---
title: "Assign"
description: "To enter the Assign keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_assign.html"
scrapedAt: "2026-06-15T18:24:57.195Z"
pagefind: false
---
To enter the Assign keyword in the command line, use one of the options:

- Press Assign
- Type **Assign**
- Type the shortcut **As**

## Description

The Assign keyword is a function which is used to assign objects to other objects. 

To unassign objects in other objects, use the **Assign Off** command.

To set parameters for objects, use the [Set keyword](/grandma3/2-3/keyword_set/).

For more information see:

- [Assign macros to keys and buttons](/grandma3/2-3/macro_assign/)
- [Create new presets](/grandma3/2-3/presets_create/)
- [Use appearances](/grandma3/2-3/appear_use/)
- [Store and recall views](/grandma3/2-3/wvm_store_recall/)

## Syntax

Assign \[Object] \["Object\_Name" or Object\_Number] At \[Object] \["Object\_Name" or Object\_Number]

Assign Off \[Object] \["Object\_Name" or Object\_Number] At \[Object] \["Object\_Name" or Object\_Number]

## Option Keywords

The Assign keyword uses the following option keywords:

- [/Tab](/grandma3/2-3/ok_tab/)

## Examples

- To assign macro 2 to executor page 1 executor 402, type:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Assign Macro 2 At Page 1.402 |

 

- To assign view 2 to display 2 and view button 3, type:

|                                                                    |                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Assign View 2 At ViewButton 2.3 |

 

 

- To assign appearance 1 to group 5, type:

|                                                                    |                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Assign Appearance 1 At Group 5 |

 

- To assign appearance 1 to the sequences 2, 3 and 4, type:

|                                                                    |                                                               |
| ------------------------------------------------------------------ | ------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Assign Appearance 1 At Sequence 2 + 3 + 4 |
