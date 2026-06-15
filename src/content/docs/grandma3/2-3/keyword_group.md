---
title: "Group"
description: "To enter the Group keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_group.html"
scrapedAt: "2026-06-15T18:25:03.436Z"
pagefind: false
---
To enter the Group keyword in the command line, use one of the options:

- Press Group
- Type **Group **
- Type the shortcut **G**

## Description

The Group keyword is an object type that contains a certain selection of fixtures in a specific order along with xyz-coordinates used in the [Selection window](/grandma3/2-3/operate_selection/).

The default function of the Group keyword is SelFix. This means that calling groups without specifying any function selects the fixtures within the group.

For more information see the [SelFix keyword](/grandma3/2-3/keyword_selectfixtures/).

## Syntax

 (\[Function]) Group \["Group\_Name" or Group\_Number]

## Option Keywords

The Group keyword uses the following option keywords:

- [/GridMergeMode](/grandma3/2-3/ok_gridmergemode/)
- [/Merge](/grandma3/2-3/ok_merge/)
- [/Overwrite](/grandma3/2-3/ok_overwrite/)
- [/Remove](/grandma3/2-3/ok_remove/)

## Examples

- To select the fixtures stored in group 3, type:

|                                                                    |                              |
| ------------------------------------------------------------------ | ---------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Group 3  |

 

- To list all stored groups of the group pool in the command line history, type:

|                                                                    |                                  |
| ------------------------------------------------------------------ | -------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>List Group   |
