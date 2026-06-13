---
title: "Create a Circle Phaser Around a Position Preset"
description: "This topic presents an example of one method for creating a simple relative circle phaser."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/phaser_create_circle_preset.html"
scrapedAt: "2026-06-12T21:24:57.505Z"
---
This topic presents an example of one method for creating a simple relative circle phaser.

|                                            |                                                                                                                     |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                           |
|                                            | Combining relative phasers with separate absolute presets provides greater flexibility for creating dynamic looks.  |

**Requirements:**

- Have a show with some moving lights patched. The following examples reference presets included in the demo show.
- An open [Phaser Editor](/grandma3/2-4/phaser_editor/) window is needed.
- Arranging the fixtures in the [3D window](/grandma3/2-4/patch_3d_viewer/) can be useful, but it is not a requirement.

This example shows one possible workflow for creating a relative phaser. Alternate workflows can also produce the same results.

Follow these steps to create a relative circle preset:

1. Select all of the desired fixtures.
2. Tap R+ on the left side menu in the **Phaser Editor**.
3. Tap just above the center of the blue 2D grid.

![](/img/grandma3/2-4/phaser_create_circle_preset-2024-04-24-2-2fc444.png)

_The first point in a relative circle_

4. Tap just below the center of the blue 2D grid.\
   This creates two relative position points.

![](/img/grandma3/2-4/phaser_create_circle_preset-2024-04-24-3-25682b.png)

_Two steps /points are the basis for the circle_

5. Tap the Select Form (![](/img/grandma3/2-4/icon_phaser_form_saw_15px-0cddb6.png)) button.
6. Tap the Circle (![](/img/grandma3/2-4/icon_phaser_form_circle_15px-9d7005.png)) button.

![](/img/grandma3/2-4/phaser_create_circle_preset-2024-04-24-4-44ee93.png)

_The relative circle with all selected fixtures moving simultaneously._

7. Tap the Change Phase (![](/img/grandma3/2-4/icon_phaser_angle_15_v1-7-763e3a.png)) button on the left menu.
8. Tap 360 in the menu on the right.

![](/img/grandma3/2-4/phaser_create_circle_preset-2024-04-24-5-26f5f2.png)

_The relative circle with selected fixtures aligned evenly around the form._

9. Store this as a preset.  

[Vimeo video](https://player.vimeo.com/video/941870934?title=0\&byline=0\&portrait=0\&color=ffeb0f)

Follow these steps to create a cue combining this relative circle phaser with a static absolute position:

1. Select the desired fixtures.
2. Tap dimmer preset 2 "Open" to bring the fixtures to full.
3. Tap position preset 3 "Center" to move the lights to the downstage-center position.
4. Tap the new preset with the relative circle.

The resulting output shows the fixtures moving in a circle around the downstage-center position.

![](/img/grandma3/2-4/phaser_create_circle_preset-2024-04-24-6-73a6c9.png)

_Fixtures moving in a circle around the downstage-center position._

Continue editing as desired or store this as a new preset or store as a cue.

[Vimeo video](https://player.vimeo.com/video/941872119?title=0\&byline=0\&portrait=0\&color=ffeb0f)
