---
title: "Action"
description: "To enter the Action keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_action.html"
scrapedAt: "2026-06-15T18:24:56.919Z"
pagefind: false
---
To enter the Action keyword in the command line, use one of the options:

- Type **Action**
- Type the shortcut **Actio**

## Description

The Action keyword is used to call functions that do not have a designated keyword. 

## Syntax

**Action \["Function"] **

## Examples

- To store the pan/tilt position to calibration point 1 of the currently selected fixtures, type:

|                                                                    |                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Action "StoreCalibrationPoint1" |

 

- To call the pan/tilt position of the currently selected fixture of calibration point 2 into the programmer, type:

|                                                                    |                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Action "CallCalibrationPoint2" |

 

-  To solve the stage calibration, type: 

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Action "SolveCalibration" |
