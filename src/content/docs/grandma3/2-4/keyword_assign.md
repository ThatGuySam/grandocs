---
title: "Assign"
description: "To enter the Assign keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_assign.html"
scrapedAt: "2026-06-12T21:24:21.972Z"
---
To enter the Assign keyword in the command line, use one of the options:

- Press Assign
- Type **Assign**
- Type the shortcut **As**

## Description

The Assign keyword is a function which is used to assign objects to other objects. 

To unassign objects in other objects, use the **Assign Off** command.

To set parameters for objects, use the [Set keyword](/grandma3/2-4/keyword_set/).

For more information see:

- [Assign macros to keys and buttons](/grandma3/2-4/macro_assign/)
- [Create new presets](/grandma3/2-4/presets_create/)
- [Use appearances](/grandma3/2-4/appear_use/)
- [Store and recall views](/grandma3/2-4/wvm_store_recall/)

## Syntax

Assign \[Object] \["Object\_Name" or Object\_Number] At \[Object] \["Object\_Name" or Object\_Number]

Assign Off \[Object] \["Object\_Name" or Object\_Number] At \[Object] \["Object\_Name" or Object\_Number]

## Option Keywords

The Assign keyword uses the following option keywords:

- [/Tab](/grandma3/2-4/ok_tab/)

## Examples

- To assign macro 2 to executor page 1 executor 402, type:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Assign Macro 2 At Page 1.402 |

 

- To assign view 2 to display 2 and view button 3, type:

|                                                                    |                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Assign View 2 At ViewButton 2.3 |

 

 [![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Assign%20View%202%20At%20ViewButton%202.3)

- To assign appearance 3 to group 5, type:

|                                                                    |                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Assign Appearance 3 At Group 5 |

 [![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Assign%20Appearance%203%20At%20Group%205) 

- To assign appearance 1 to the sequences 2, 3 and 4, type:

|                                                                    |                                                               |
| ------------------------------------------------------------------ | ------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Assign Appearance 1 At Sequence 2 + 3 + 4 |
