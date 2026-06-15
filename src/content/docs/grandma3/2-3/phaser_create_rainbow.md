---
title: "Create Color Rainbow Phaser"
description: "This topic presents an example of one possible workflow for creating a rainbow color phaser. This example creates the rainbow chase using three steps with a pri"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/phaser_create_rainbow.html"
scrapedAt: "2026-06-15T18:25:26.437Z"
pagefind: false
---
This topic presents an example of one possible workflow for creating a rainbow color phaser. This example creates the rainbow chase using three steps with a primary color in each step. An additional example at the end shows an easy way to change the color used in one of the steps.

**Requirements:**

- Have a show with some fixtures that have a color mixing system (not color wheels with static colors). The steps below reference fixtures and presets included in the demo show.
- Have three color presets with Red, Green, and Blue colors stored using the color mixing system. The additional example also uses a White preset. These presets exist in the demo show file.
- An open [Phaser Editor](/grandma3/2-3/phaser_editor/) window is needed.
- An open Color preset pool for quickly calling the desired presets.
- Arranging the fixtures in the [3D window](/grandma3/2-3/patch_3d_viewer/) can be useful, but it is not a requirement.

Follow these steps needed to create the phaser.

1. Select the desired fixtures. The following screenshots use fixtures 1 thru 8 in the demo show.
2. Bring the dimmers to full so the beams are visible.
3. Press and hold the X5 | Step key, and tap the red color preset.
4. While still holding the X5 | Step key, create the second step by tapping the green color preset.
5. While still holding the X5 | Step key, create the third step by tapping the blue preset.

The phaser editor shows the three steps and all referenced presets.

![](/img/grandma3/2-3/img_phaser-create-rainbow_steps_v1-7-dcf104.png)

_Phaser Editor with a three-step, three-color phaser_

All the fixtures now change color together through the rainbow colors. If this is the desired result then store this in a cue or preset.

|                                                  |                                                                                                                                                                                                                         |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                                          |
|                                                  | Following the steps above exactly results in an active dimmer value in the first step of the phaser. If you prefer that your rainbow phaser only contain color values, deactivate the dimmer attribute before storing.  |

To spread the rainbow across the selected fixtures, adjust the Phase:

1. Tap the Change Phase (![](/img/grandma3/2-3/icon_phaser_angle_15_v1-7-691bf7.png)) button on the left menu in the **Phaser Editor**.
2. Tap 360 on the right menu in the **Phase Editor** to spread the fixtures evenly.

The 3D window shows the result:

![](/img/grandma3/2-3/img_phaser-create-rainbow_3d-rgb_v1-7-65f092.png)

_Rainbow chase across a range of fixtures_

This can be stored as a preset or in a cue.

---

## Quick Workflow for Changing the Preset Referenced in a Step

In the case that a different combination of colors is desired, the following workflow allows for such adjustments to be made quickly. With the rainbow from the above example still active in the programmer, use the following command to change the preset used in step two from green to white, so that the fixtures transition from red to white, then to blue: Press X5 | Step then 2 and tap the white preset.

![](/img/grandma3/2-3/img_phaser-create-rainbow_3d-rwb_v1-7-7d00ca.png)

Red, white, and blue phaser

The resulting phaser now references the red, white, and blue presets. 

[Vimeo video](https://player.vimeo.com/video/941847841?title=0\&byline=0\&portrait=0\&color=ffeb0f)
