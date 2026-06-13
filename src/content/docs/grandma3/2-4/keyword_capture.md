---
title: "Capture"
description: "To enter the Capture keyword in the command line, use one of the following options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_capture.html"
scrapedAt: "2026-06-12T21:24:22.575Z"
---
To enter the Capture keyword in the command line, use one of the following options:

- Press Stomp Stomp
- Type **Capture**
- Type the shortcut **Cap**

## Description

The Capture keyword is a command keyword which is used to activate the current output values of specified parameters.

Capturing parameters during a running phaser or cue fade activates the actual values at the moment the command is executed. The result is a single step of static values resembling a freeze frame of the output.

|                                                  |                                                                                           |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                            |
|                                                  | The capture command produces only numeric values, losing any existing preset references.  |

|                                                  |                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                                                                                                                                                                                 |
|                                                  | The capture command translates the output of each parameter into the appropriate value on the absolute layer while activating a 0 value on the relative layer. For any parameter where the output was previously composed of a combination of absolute and relative values, the output will appear the same while relying only on the absolute layer with no relative offset.  |

## Syntax

**Capture \[Object] \["Object\_Name" or Object\_Number]**

## Examples

- To capture all attributes of the selected fixtures, type:

|                                                                    |                             |
| ------------------------------------------------------------------ | --------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Capture |

 [![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Capture) 

- To capture only the position attributes of the selected fixtures, type:

|                                                                    |                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]> Capture FeatureGroup "Position" |

 [![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Capture%20FeatureGroup%20%22Position%22)
