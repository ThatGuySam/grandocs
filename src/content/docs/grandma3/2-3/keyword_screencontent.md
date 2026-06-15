---
title: "ScreenContent"
description: "To enter the ScreenContent keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_screencontent.html"
scrapedAt: "2026-06-15T18:25:10.217Z"
pagefind: false
---
To enter the ScreenContent keyword in the command line, use one of the options:

- Type **ScreenContent**
- Type the shortcut **Scre**

## Description

The ScreeContent keyword is used to represent the windows of a display.

## Syntax

\[Function] ScreenContent

\[Function] ScreenContent \[Screen\_Number].\["Window\_Name" or Window\_Number]

## Option Keywords

The ScreenContent keyword uses the following option keywords:

- [/AutoFit](/grandma3/2-3/ok_autofit/)

## Examples

- To delete all windows on all screens, type:

|                                                                    |                                                 |
| ------------------------------------------------------------------ | ----------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Delete ScreenContent \*.\*  |

 

- To delete all windows on screen 1, type:

|                                                                    |                                                |
| ------------------------------------------------------------------ | ---------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Delete ScreenContent 1.\*  |

 

- To set the width of the first window you created to 12 half columns in screen 1, type:

|                                                                    |                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Set ScreenContent 1.1 "W" "12"  |
