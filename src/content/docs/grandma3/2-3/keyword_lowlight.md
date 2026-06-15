---
title: "Lowlight"
description: "To enter the Lowlight keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_lowlight.html"
scrapedAt: "2026-06-15T18:25:05.806Z"
pagefind: false
---
To enter the Lowlight keyword in the command line, use one of the options:

- Press MA + Highlt
- Type **Lowlight**
- Type the shortcut **Low**

## Description

The Lowlight keyword is a playback keyword that is used to apply the defined lowlight values in fixtures that are subselected when highlight is enabled. 

Lowlight is also a toggle function meaning that entering Lowlight without using a helping keyword enables or disables the Lowlight mode. 

For more information on how to assign executors see [Assign Objects to an Executor](/grandma3/2-3/executor_assign/). 

## Syntax

(\[Function]) Lowlight (On/Off)

## Example

-  To apply the lowlight values to selected fixtures, type:

|                                                                    |                               |
| ------------------------------------------------------------------ | ----------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Lowlight  |

##

Example: Special Values

**Requirement:**

Activate values in the programmer:

   -Call a preset or turn the attribute encoders.

 

- To store the currently active values as lowlight values, type:

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Lowlight |

For more information on the special values see [Parameter List](/grandma3/2-3/patch_parameter_list/).

 

- To load the lowlight values of the selected fixtures into the programmer, type:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>At Lowlight |
