---
title: "Expand the Number of Parameters"
description: "The grandMA3 processing units are thonly units that expand the parameter count when using grandMA3 consoles."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/system_parameter_expand.html"
scrapedAt: "2026-06-12T21:24:17.406Z"
---
The grandMA3 processing units are the **only units** that expand the parameter count when using grandMA3 consoles.

**Every grandMA3 processing unit added to the network also adds a number of parameters depending on the model!**

There is a **maximum limit of 262 144 parameters** in a grandMA3 session.

The grandMA3 processing units help with parameter calculations.

### Examples:

1 grandMA3 full-size (20 480) + 1 grandMA3 processing unit XL (16 384) = 36 864 parameters

1 grandMA3 full-size (20 480) + 15 grandMA3 processing unit XL (16 384) = 262 144 parameters (the calculation is 266 240, but the limit is 262 144)

1 grandMA3 light (16 384) + 1 grandMA3 processing unit M (4 096) = 20 480 parameters

1 grandMA3 light (16 384) + 15 grandMA3 processing unit XL (16 384) = 262 144 parameters

1 grandMA3 full-size (20 480) + 1 grandMA3 light (16 384) = 20 480 parameters (consoles cannot expand the parameter count, so the parameters from the console with the highest number are unlocked)

1 grandMA3 light (16 384) + 15 grandMA3 onPC 2Port Node 2k (4 096) = 16 384 parameters (nodes cannot expand the parameter count with consoles, so the parameters from the console are used)

1 grandMA3 light (16 384) + 1 onPC computer with a grandMA3 onPC command wing (4 096) = 16 384 parameters (onPC command wings cannot expand the parameter count with consoles, so the parameters from the console are used)

## Using a grandMA3 onPC

When a grandMA3 onPC is used as the primary station (the system does not include any grandMA3 consoles), some grandMA3 **onPC** hardware is needed to unlock parameters.

The grandMA3 processing units also unlock parameters in an onPC system.

|                                                  |                                                                               |
| ------------------------------------------------ | ----------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                |
|                                                  | The maximum number of parameters allowed in a grandMA3 onPC system is 4 096.  |

Any amount of onPC hardware and processing units can be used with a computer or the grandMA3 onPC rack-unit. Every piece of hardware will add its parameters until the limit of 4 096 parameters is reached.

grandMA3 xPort Nodes need to be onPC versions to unlock parameters.

These are the only two rules for parameters with grandMA3 onPC.

Remember, more units can be added to get more DMX ports even after reaching the parameter limit.

### Examples:

grandMA3 onPC rack-unit (4 096) + grandMA3 onPC 2Port Node 2k (4 096) = 4 096 parameters (the limit)

grandMA3 onPC rack-unit (4 096) + grandMA3 onPC 4Port Node 4k (4 096) = 4 096 parameters (the limit)

grandMA3 onPC + grandMA3 onPC command wing (4 096) = 4 096 parameters (the limit)

grandMA3 onPC rack-unit (4 096) + grandMA3 onPC command wing (4 096) = 4 096 parameters (the limit)

grandMA3 onPC command wing XT (4 096) = 4 096 parameters (the limit)

grandMA3 onPC + grandMA3 onPC command wing (4 096) + grandMA3 onPC 2Port Node 2k (4 096) = 4 096 parameters (the limit)

grandMA3 onPC + grandMA3 onPC command wing (4 096) + grandMA3 onPC fader wing (4 096) = 4 096 parameters (the limit)

grandMA3 onPC + grandMA3 onPC 2Port Node DIN-Rail 2k (4 096) = 4 096 parameters

grandMA3 onPC + grandMA3 onPC 2Port Node 2k (4 096) + grandMA3 8Port Node (none) = 4 096 parameters (the 8Port Node is not an onPC node)

grandMA3 onPC + grandMA3 onPC command wing (4 096) + grandMA3 onPC 8Port node 4k (4 096) = 4 096 parameters (the limit is reached and cannot be exceeded)

grandMA3 onPC + 1 grandMA3 processing unit M (4 096) = 4 096 parameters (the limit)

grandMA3 onPC + 1 grandMA3 processing unit XL (16 384) = 4 096 parameters (the limit is reached and cannot be exceeded)

grandMA3 onPC + connected grandMA3 viz-key (512) = 512 parameters

grandMA3 onPC + connected grandMA3 onPC DMX-key (4 096) = 4 096 parameters
