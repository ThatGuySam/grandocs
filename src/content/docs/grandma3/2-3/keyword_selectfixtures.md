---
title: "SelectFixtures"
description: "To enter the SelectFixtures keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_selectfixtures.html"
scrapedAt: "2026-06-15T18:25:10.512Z"
pagefind: false
---
To enter the **SelectFixtures** keyword in the command line, use one of the options:

- Press SelFix
- Type **SelectFixtures**
- Type the shortcut **Selectf**

## Description

The SelectFixtures keyword is a function keyword that is used to create selections of fixtures in the programmer.

If only fixtures are selected, the SelectFixtures keyword adds additional fixtures to the selection.

If fixtures are selected and activated in the programmer, the SelectFixtures keyword replaces the selection by the SelectFixtures selection.

If the exact same SelectFixtures command is successively used:

- using it the second time activates all attributes of the selected fixtures in the programmer 
- using it the third time deactivates all attributes of the selected fixtures in the programmer

SelectFixtures is the default function of most objects, for example, fixture or group or preset.

To clear the selection, press Clear.

## Syntax

SelectFixtures** \[Object] \["Object\_Name" or Object\_Number]**

## Examples

- To select all fixtures or channels stored in a sequence of the executor 101, type:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>SelectFixtures Executor 101  |

 

- To select all fixtures stored in dimmer preset 1.1, type:

|                                                                    |                                                |
| ------------------------------------------------------------------ | ---------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>SelectFixtures Preset 1.1  |
