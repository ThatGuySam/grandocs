---
title: "Using the Shapers Dialog"
description: "The Shapers dialog is part of the Special Dialog window and provides a graphical user interface for controlling shaper attributes in fixtures. The values that a"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/operate_shapers.html"
scrapedAt: "2026-06-15T18:25:21.865Z"
pagefind: false
---
The Shapers dialog is part of the Special Dialog window and provides a graphical user interface for controlling shaper attributes in fixtures. The values that are used to visualize the shapers come from the DMX layer. For more information, see [Fixture Sheet](/grandma3/2-3/operate_fixture_sheet/) and [Layouts](/grandma3/2-3/layouts/).

Watch the following video to get an overview of the Shapers dialog feature.

[Vimeo video](https://player.vimeo.com/video/904394004?title=0\&byline=0\&portrait=0\&color=ffeb0f)                                                             

**Requirements:**

- A fixture type with a shaper is selected in the programmer, for example, Ayrton Eurus. For more information, see [Import Fixture Types](/grandma3/2-3/ft_import/) and [What is the Programmer](/grandma3/2-3/operate_programmer/).

To open the Shapers Dialog window:

1. Open the Add Window dialog.
2. Tap Common and Special Dialog. The Special Dialog window opens.
3. Tap the Shapers tab on the left. The Shapers dialog opens.

![Shapers Dialog window is open](/img/grandma3/2-3/window_shapers_dialog_1_v2-2-14b30f.png)

_Shapers Dialog window_

The title bar of the Shapers Dialog provides the following options for controlling blades and shapers of fixtures. For more information about how to edit the title bar, see [Title Bar Configuration](/grandma3/2-3/wvm_title_bar_configuration/).

- **Reset Bar:** When enabled, tapping Reset Shaper resets blades and rotation. Tapping Reset Blades resets the blades only.

- **Show POV:** Displays a fader to manually rotate the Point of View (POV) of the fixture. When enabled, a Reset POV button is also displayed.

- **Mini Faders:** Changes the number of faders that are displayed. Can be accessed by tapping and holding Mini Faders.

  - None: No faders are displayed.
  - Full: The faders for blades and rotation are displayed depending on the value of Control.
  - Blades: The faders for blades are displayed depending on the value of Control.
  - Rotation: A fader for the shaper rotation is displayed.

* **Link:** Defines how the movement of one or more blades works together.** **

  - None: Each blade can be controlled individually.
  - All: Moving one blade moves all other blades proportionally.
  - Parallel: Moving one blade will also move the opposite blade.
  - Mirrored: Moving one blade will mirror the opposite blade.

* **Control:** Changes the control mode.

  - Ins+Rot: The depth of insertion (1-4 -"I") and the blade rotation (1-4-"R") can be defined.
  - A+B: The blade corners (A,B) can be defined.



|                                            |                                                                                                                                                                                                                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                                                            |
|                                            | The software converts different types of shaper engines to the correct DMX values so that all modes can be used regardless of the fixture type. Blade misconfigurations are shown in the [Conflicts in Fixture Types](/grandma3/2-3/ft_conflicts_in_fixture_types/). |
