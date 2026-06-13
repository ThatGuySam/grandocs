---
title: "Using the Shapers Dialog"
description: "The Shapers dialog, part of the Special Dialog window, provides a graphical user interface for controlling shaper attributes in fixtures. The values that are us"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/operate_shapers.html"
scrapedAt: "2026-06-12T21:24:49.079Z"
---
The Shapers dialog, part of the Special Dialog window, provides a graphical user interface for controlling shaper attributes in fixtures. The values that are used to visualize the shapers come from the DMX layer. For more information, see [Fixture Sheet](/grandma3/2-4/operate_fixture_sheet/) and [Layouts](/grandma3/2-4/layouts/).

Watch the following video to get an overview of the Shapers dialog feature.

[Vimeo video](https://player.vimeo.com/video/904394004?title=0\&byline=0\&portrait=0\&color=ffeb0f)                                                             

**Requirements:**

- A fixture type with a shaper is selected in the programmer, for example, Ayrton Eurus. For more information, see [Import Fixture Types](/grandma3/2-4/ft_import/) and [What is the Programmer](/grandma3/2-4/operate_programmer/).

To open the Shapers Dialog window:

1. Open the Add Window dialog.
2. Tap Common and Special Dialog. The Special Dialog window opens.
3. Tap the Shapers tab on the left. The Shapers dialog opens.

![Shapers Dialog window is open](/img/grandma3/2-4/window_shapers_dialog_1_v2-2-eebce3.png)

_Shapers Dialog window_

The title bar of the Shapers Dialog provides some options for controlling blades and shapers of fixtures. For more information, see [Title Bar Configuration](/grandma3/2-4/wvm_title_bar_configuration/).

- Tapping Reset Shaper resets blades and rotation. Tapping Reset Blades resets only the blades.

- Use the POV fader to manually rotate the Point of View (POV) to match the real-life fixture orientation.

- To** **change the number of displayed faders, tap Mini Faders in the title bar.

  - None: No faders are displayed.
  - Full: The faders for blades and rotation are displayed depending on the value of Control.
  - Blades: The faders for blades are displayed depending on the value of Control.
  - Rotation: A fader for the shaper rotation is displayed.

* Tap**** Link in the title bar to** **define how the movement of one or more blades works together.** **

  - None: Each blade can be controlled individually.
  - All: Moving one blade moves all other blades proportionally.
  - Parallel: Moving one blade will also move the opposite blade.
  - Mirrored: Moving one blade will mirror the opposite blade.

* To** **change the control mode, tap Control in the title bar. The Shaper Encoder Bar also follows the control selection. See below. 

  - Ins+Rot: The depth of insertion (1-4 -"I") and the blade rotation (1-4-"R") can be defined.
  - A+B: The blade corners (A,B) can be defined.



|                                            |                                                                                                                                                                                                                                                                       |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                             |
|                                            | The software converts different types of shaper engines to the correct DMX values, allowing all modes to be used regardless of the fixture type. Blade misconfigurations are shown in the [Conflicts in Fixture Types](/grandma3/2-4/ft_conflicts_in_fixture_types/). |
