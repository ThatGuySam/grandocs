---
title: "/Gaps"
description: "To enter the /Gaps option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_gaps.html"
scrapedAt: "2026-06-15T18:25:14.945Z"
pagefind: false
---
To enter the **/Gaps **option keyword in the command line, use one of the options:

- Type **/Gaps**
- Type the shortcut** /Ga**

## Description

The /Gaps option keyword retains or suppresses empty spaces when importing or exporting a range of pool objects.

|                                            |                                                                                                                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                         |
|                                            | **/Gaps** or **/Gaps "Yes"** retains empty spaces when importing or exporting a range of pool objects.**/Gaps "No"** suppresses empty spaces when importing or exporting a range of pool objects. |

## Syntax

\[Function] \[Object] \["Object\_Name" or Object\_Number] /Gaps ("Yes" or "No")

## General Keywords

General keywords that use the /Gaps option keyword:

- [Import keyword](/grandma3/2-3/keyword_import/)
- [Export keyword](/grandma3/2-3/keyword_export/)

## Example

- To import all macros from the library "mymacros.xml," starting with macro 11, while suppressing any empty spaces included in the library, type:

|                                                                    |                                                                                 |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Import Macro Library "mymacros.xml" At Macro 11 /Gaps "No"  |
