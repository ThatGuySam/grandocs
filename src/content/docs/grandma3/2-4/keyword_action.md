---
title: "Action"
description: "To enter the Action keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_action.html"
scrapedAt: "2026-06-12T21:24:21.655Z"
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
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Action "StoreCalibrationPoint1" |

[![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Action%20%22StoreCalibrationPoint1%22) 

- To call the pan/tilt position of the currently selected fixture of calibration point 2 into the programmer, type:

|                                                                    |                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Action "CallCalibrationPoint2" |

 

-  To solve the stage calibration, type: 

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Action "SolveCalibration" |
