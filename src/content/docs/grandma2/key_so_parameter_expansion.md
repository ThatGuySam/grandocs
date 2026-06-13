---
title: "Parameter expansion"
description: "This page is a closer look at how many parameters can be controlled and how it can be expanded. At the bottom of this page there is a link to a page that explai"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_so_parameter_expansion.html"
scrapedAt: "2026-06-12T21:27:34.234Z"
---
This page is a closer look at how many parameters can be controlled and how it can be expanded. At the bottom of this page there is a link to a page that explains the difference between "Parameter" and "DMX universe". If you have any doubts in this area, you should take the time to read it.

 

## Parameter count

This section is about the parameter count for single units.

Beginning at the top end and working the way down the ranks:

- **grandMA2 full-size:**\
  8 192 parameters.
- **grandMA2 light**:\
  4 096 parameters.
- **grandMA2 ultra-light:**\
  4 096 parameters.
- **grandMA2 replay unit:**\
  4 096 parameters.
- **MA NPU (Network Processing Unit):**\
  4 096 parameters (also with grandMA2 onPC).
- **MA onPC command wing:**\
  2 048 parameters (only when connected with grandMA2 onPC).
- **MA onPC fader wing:**\
  2 048 parameters (only when connected with grandMA2 onPC).
- **MA 8Port Node onPC:**\
  2 048 parameters (only when connected with grandMA2 onPC).
- **MA 4Port Node onPC:**\
  2 048 parameters (only when connected with grandMA2 onPC).
- **MA NSP (in grandMA2 4Port Node mode):**\
  2 048 parameters (only when connected with grandMA2 onPC).
- **MA 2Port Node onPC 2K:**\
  2 048 parameters (only when connected with grandMA2 onPC).
- **MA 2Port Node onPC 1K:**\
  1 024 parameters (only when connected with grandMA2 onPC).
- **MA 2Port Node onPC Pro (old version):**\
  1 024 parameters (only when connected with grandMA2 onPC).
- **MA 2Port Node onPC (old gray version):**\
  512 parameters (only when connected with grandMA2 onPC).
- **MA 8Port Node (not onPC version):**\
  Does not provide parameter expansion.
- **MA 4Port Node (not onPC version):**\
  Does not provide parameter expansion.
- **MA 4Port Node WM (Wall Mount) (not onPC version):**\
  Does not provide parameter expansion.
- **MA 2Port Node (not onPC version):**\
  Does not provide parameter expansion.
- **MA 2Port Node WM (Wall Mount) (not onPC version):**\
  Does not provide parameter expansion.
- **MA 2Port Node Rig mount version (old version - not onPC):**\
  Does not provide parameter expansion.
- **MA 2Port Node Flush mount version (old version - not onPC):**\
  Does not provide parameter expansion.

 

## Parameter expansion

The MA NPU is the **only unit** that expands the parameter count when using a grandMA2 console. **Every MA NPU added to the network also adds 4 096 parameters!**

A maximum of 15 MA NPUs can be added to give parameters; depending on the biggest console.

There is a **maximum limit of 65 536 parameters** in a grandMA2 session.

The MA NPUs help with parameter calculations.

### Examples:

1 grandMA2 full-size (8 192 parameters) + 1 NPU (4 096) = 12 288 parameters

1 grandMA2 full-size (8 192 parameters) + 14 NPUs (4 096) = 65 536 parameters (the limit)

1 grandMA2 light (4 096) + 1 NPU (4 096) = 8 192 parameters

1 grandMA2 light (4 096) + 15 NPUs (4 096) = 65 536 parameters (the limit)

1 grandMA2 full-size (8 192 parameters) + 1 grandMA2 light (4 096) = 8 192 parameters (Consoles cannot expand the parameter count so the parameters from the console with the highest number are unlocked)

1 grandMA2 light (4 096) + 15 2Port Node onPC 2K (2 048) = 4 096 parameters (Nodes cannot expand the parameter count, so the parameters from the console is used - onPC nodes cannot give parameters to consoles)

1 grandMA2 light (4 096) + 1 onPC computer with a Command Wing (2 048) = 4 096 parameters (Wings cannot expand the parameter count, so the parameters from the console are used - onPC Wings cannot give parameters to consoles)

 

## Using a grandMA2 onPC with wings, nodes and NPU

When a grandMA2 onPC is used some MA hardware is needed to unlock parameters. **The maximum number of parameters that is allowed in a grandMA2 onPC system is 4 096!**

Any number of onPC hardware can be used with your computer. Every piece of hardware will add its parameters until the limit of 4 096 parameters is reached.

This is the only two rules for parameters with grandMA2 onPC.

Remember more units can be added to get more DMX ports.

### Examples:

grandMA2 onPC + MA onPC command wing = 2 048 parameters

grandMA2 onPC + MA onPC command wing + MA 2Port Node onPC Pro = 3 072 parameters

grandMA2 onPC + MA onPC Fader Wing = 2 048 parameters

grandMA2 onPC + MA 2Port Node onPC + MA 2Port Node onPC = 1 024 parameters

grandMA2 onPC + MA onPC command wing + Fader Wing + MA 8Port node onPC = 4 096 parameters (you have reached the limit)

grandMA2 onPC + MA onPC command wing + MA NPU = 4 096 (you have reached the limit)

 

## MA VPU and grandMA2 onPC

If a MA VPU is used, it will supply its own parameters and does not affect the limit. Several MA VPUs can be controlled using a grandMA2 onPC. If however a mix of VPUs and other fixtures are used, then some MA hardware is needed to unlock the parameters for the fixtures.

Even though the MA VPU does not count in your parameter limit, it is a good idea to patch the MA VPU on a higher universe than the other fixtures. There is a risk that it will steal the parameters from the other fixtures, if it is on a lower universe than the fixtures.

 

Please have a look at [DMX Channels vs. Parameters topic](/grandma2/key_so_parameters_vs_dmx_channels/) for more about the difference between DMX channels and Parameters.[](/grandma2/key_so_parameters_vs_dmx_channels/)
