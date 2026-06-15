---
title: "MAtricks and Shuffle"
description: "MAtricks is a tool that can be used to divide a selection of fixtures into sub-selections."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/matricks.html"
scrapedAt: "2026-06-15T18:25:24.115Z"
pagefind: false
---
MAtricks is a tool that can be used to divide a selection of fixtures into sub-selections.

The general workflow involves selecting fixtures and applying different MAtricks settings to the selected fixtures inside the primary selection.

For example, ten fixtures are selected, and you want to step through them one at a time to correct their positions. MAtricks is the tool used to do this.

The selection can be shuffled using a set of shuffle tools. Read more [below](/grandma3/2-3/matricks/#shuffle_selection).

## MAtricks Tools

One of the ways to work with MAtricks is the MAtricks toolbar or window.

The MAtricks tools are available in a window that can be created like any other.

![](/img/grandma3/2-3/window_matricks_speedfromx_v2-3-f44265.png)

A menu version of the MAtricks window can be opened by tapping MAtricks in the [Encoder bar](/grandma3/2-3/ws_encoder_bar/).

The two versions have the same buttons and options. The following topics provide details about the different options.

Tap Grid, Layers, or Shuffle to display or hide the corresponding group in the title bar.

The MAtricks window is divided into three sections, one for each axis. The X-axis section has a red background, the Y-axis section has a blue background, and the Z-axis section has a green background.

Tap X, Y, or Z in the toolbar on the left side to display or hide the corresponding axis.

Each axis section has its properties grouped.

Here are the groups and their properties:

- **Grid**: Axis (X, Y, Z), Block, Group, Wings, and Width.
- **Layers**: Fade From/To, Delay From/To, Speed From/To, and Phase From/To. Tap ![](/img/grandma3/2-3/swap_15_v3_2-3-2fe77a.png) between the input fields to swap the from/to values.  

* **Shuffle**: Shuffle and Shift.

The **Layers****** speed readout format can be set to Hz, BPM, or Seconds in the User Profile. See [User Settings](/grandma3/2-3/user_settings/). 

For the following example, the speed readout format is set to Hertz.

To apply the speed value of 10Hz to the Speed From X property of the selection MAtricks using the command line, type:

|                                                                    |                                                            |
| ------------------------------------------------------------------ | ---------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Set Selection MAtricks "SpeedFromX" 10 |

This is the result:

## Subtopics

- [Blocks](/grandma3/2-3/matricks_block/)
- [Groups](/grandma3/2-3/matricks_group/)
- [Wings](/grandma3/2-3/matricks_wings/)
- [Widths](/grandma3/2-3/matricks_width/)
- [Shuffle](/grandma3/2-3/matricks_shuffle/)
- [Transform](/grandma3/2-3/matricks_transform/)
