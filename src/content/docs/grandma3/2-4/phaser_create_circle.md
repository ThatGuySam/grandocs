---
title: "Create a Circle Phaser"
description: "This topic presents an example of one method for creating a simple circle phaser. It uses absolute position values and will always move the lights in the specif"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/phaser_create_circle.html"
scrapedAt: "2026-06-12T21:24:57.415Z"
---
This topic presents an example of one method for creating a simple circle phaser. It uses absolute position values and will always move the lights in the specified circle. See the [Create Circle Phaser Around Position](/grandma3/2-4/phaser_create_circle_preset/) topic for an example that covers creating a relative phaser circle, which can be used with different absolute base positions.

**Requirements:**

- Have a show with some moving lights patched - for instance, the demo show.
- An open [Phaser Editor](/grandma3/2-4/phaser_editor/) window is needed.
- Arranging the fixtures in the [3D window](/grandma3/2-4/patch_3d_viewer/) can be useful, but it is not a requirement.

|                                            |                                                                                                                                                                                      |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                            |
|                                            | For phasers that use position values, it is recommended to use a slower speed than the default of 60 BPM, such as 20 BPM. Otherwise, the fixtures may not be able to move properly.  |

Follow these steps to create a circle:

1. Select the desired fixtures and bring their dimmers to full.\
   The Phaser Editor shows a white beam in the center of the blue 2D grid.
2. Tap the A+ button on the left of the editor.
3. Tap somewhere in the blue grid; for instance, just below the center.

![](/img/grandma3/2-4/img_phaser-create-circle_01_v1-7-21ae77.png)

_Phaser Editor with fixtures turned on and one absolute position_

This creates the first absolute point. The selected fixtures move to this static position. This is an absolute position value in step one.

4. Tap somewhere else in the blue grid to create a second absolute position. Please tap 90 degrees vertically to the first point and do not cross the horizontal blue line - otherwise, the circle becomes a figure 8.

![](/img/grandma3/2-4/img_phaser-create-circle_02_v1-7-cc6467.png)

_Two absolute positions - one in each step_

Now, the fixtures move between the two absolute points (two steps).

5. Tap the **Select All Steps** button (![](/img/grandma3/2-4/icon_step-select-all_15_v1-7-b66932.png)).\
   This selects both steps.
6. Tap the **Move Handle** button (![](/img/grandma3/2-4/icon_phaser_move-handle_15_v1-7-759140.png)).
7. Tap one of the two points and drag horizontally.
8. Release the screen when there is a nice circular movement.

![](/img/grandma3/2-4/img_phaser-create-circle_03_v1-7-de5dd6.png)

_The fixtures now move in a circle_

9. Tap the **Edit phase** button (![](/img/grandma3/2-4/icon_phaser_angle_15_v1-7-763e3a.png)) on the left menu.
10. Tap 360 in the menu on the right\
    This distributes the fixtures evenly along with the form.

The finished result could look like this:

![](/img/grandma3/2-4/img_phaser-create-circle_04_v1-7-1e0bda.png)

_Finished circle phaser_

The **Change Phase** part of the phaser editor represents each fixture as a yellow dot in a grid where the horizontal axis is the phase value.

The circle phaser is now finished and can be stored into a cue or a preset.

|                                                  |                                                                                                                                                                                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                            |
|                                                  | Following the steps above exactly results in an active dimmer value in the first step of the phaser. If you prefer that your circle phaser only contain position values, deactivate the dimmer attribute before storing.  |
