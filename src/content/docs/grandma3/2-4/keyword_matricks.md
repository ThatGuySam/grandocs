---
title: "MAtricks"
description: "To enter the MAtricks keyword in the command line, use one of the following options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_matricks.html"
scrapedAt: "2026-06-12T21:24:31.233Z"
---
To enter the MAtricks keyword in the command line, use one of the following options:

- Type **MAtricks **
- Type the shortcut **Mat**

## Description

The MAtricks keyword behaves as an object type.

Used with an ID, MAtricks represents MAtricks objects stored in the MAtricks pool.

With the helping keywords On, Off, and Toggle, the MAtricks of the two selections may temporarily be enabled or disabled.

Furthermore, you can set the values of the MAtricks of the two selections.

## Syntax

Set Selection (Selection\_Number) MAtricks (Property) \["Property\_Name" or Property\_Value]

\[Function] MAtricks \["MAtricks\_Name" or MAtricks\_Number]

## Properties

| X        | Y        | Z        |
| -------- | -------- | -------- |
| XBlock   | YBlock   | ZBlock   |
| XGroup   | YGroup   | ZGroup   |
| XWings   | YWings   | ZWings   |
| XWidth   | YWidth   | ZWidth   |
| XShuffle | YShuffle | ZShuffle |
| XShift   | YShift   | ZShift   |

## Examples

- To set the MAtricks X to 2 in the active selection, type:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Selection MAtricks "X" 2 |

 

- To set the MAtricks XBlock to 4 in selection 2, type:

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Selection 2 MAtricks "XBlock" 4 |

 

- To disable MAtricks in the active selection, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Off Selection MAtricks |

 

- Toggle to activate MAtricks in the active selection, press Set or type:

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Toggle Selection MAtricks |

 

- To reset the MAtricks in the first selection, type:

|                                                                    |                                                |
| ------------------------------------------------------------------ | ---------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Reset Selection 1 MAtricks |

##  

- To call the first MAtricks object in the MAtricks pool, type:

|                                                                    |                                     |
| ------------------------------------------------------------------ | ----------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Call MAtricks 1 |

 

- To label MAtricks 2 "Great", type:

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Label MAtricks 2 "Great" |

 

- To assign the fourth MAtricks object of the pool to the first recipe in cue 1 part 0 of the selected sequence, type:

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Assign MAtricks 4 At Cue 1 Part 0.1 |

 

- To apply the speed value of 10 Hz to the speed of the X property of the MAtricks selection, type:

|                                                                    |                                                                 |
| ------------------------------------------------------------------ | --------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Selection MAtricks "SpeedFromX" "Hz 10" |
