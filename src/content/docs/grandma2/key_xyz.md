---
title: "XYZ"
description: "XYZ adds virtual channels to the fixtures."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_xyz.html"
scrapedAt: "2026-06-12T21:28:20.794Z"
---
XYZ adds [virtual channels](#virtual_channels) to the fixtures. 

**Requirements:**

- Patch fixtures that have pan and tilt attributes.

For more information on patching see [Adding fixtures to your show](/grandma2/key_patch_add_fixtures/). 

**Activate XYZ in fixture types:**

1. Press Setup.\
   The main menu opens.
2. Tap Patch & Fixtures Schedule.\
   The **dialog Edit Setup** opens.
3. Tap Fixture Types on the right of the window.\
   The **dialog Fixture Types** opens.
4. Tap and hold a grayed out cell in the **column XYZ**. \
   -or-\
   Tap a grayed out cell in the column XYZ and then tap Enable XYZ.
5. XYZ is now enabled and the cell displays **On**.

![](/img/grandma2/menu_xyz_fixture-types_v3-3-4040cd.png)

_Enable XYZ_

6. To save the changes in the **Patch & Fixture Schedule**, close the **dialog Fixture Types**:\
   -Tap ![](/img/grandma2/icon_close_small_v3-2-1c8fff.png) in the upper right corner of the dialog.\
   -The **dialog Edit Setup** appears.\
   -Tap ![](/img/grandma2/icon_close_small_v3-2-1c8fff.png) in the upper right corner of the dialog.\
   -A warning pop-up appears. \
   -Tap Yes.
7. The changes are now saved.
8. Select fixtures.
9. Tap Position in the preset control bar.\
   For more information see [Preset control bar](/grandma2/key_ws_preset_control_bar/). 
10. Tap the feature Position below the preset **Position**.\
    -If you tap Position, the button toggles between the features **Position**, **Stage A**, and **Stage B**.
11. Adjust the attributes of **Stage A** for example.\
    -Tap X and the calculator opens.\
    -Type the value for the x-coordinate or select a preset on the right of the calculator.
12. The values are now adjusted.

---

## []()Virtual Channels

If XYZ is enabled, the following virtual channels are added to the fixtures:

- **Stage (X):**\
  X is the horizontal direction on the stage.
- **Stage (Y):**\
  Y is the direction that runs toward or away from the audience. 
- **Stage (Z):**\
  Z is the vertical direction on the stage.
- **Flip:**\
  Is the parameter to select the flip position. This parameter switches over between the flip modes:\
  Auto flip, Center, and No tilt flip.\
  **Auto flip**: Fixture can automatically flip to reach the required XYZ position. It uses both axes to flip, pan, and tilt.\
  **No tilt flip**: The fixture uses the pan axis only.\
  **Center**: The fixture flips the same amount of times in each direction. That is, the flip value is 0.
- **Mark:**\
  Sets the stage marker the beam of the fixture is to point at.
- **Pan:**\
  Fixture moves in the horizontal direction. 
- **Tilt:**\
  Fixture moves in the vertical direction. 
- **Dist:**\
  Is the distance between the point that the beam of the fixture points at and the fixture itself. Dist is used when converting pan and tilt to XYZ and vice versa.
- **PosMode:**\
  Switches over between the XYZ and pan/tilt values.

For information on different combinations of pan/tilt see [the Flip keyword](/grandma2/key_keyword_flip/).

## Subtopics

- [XYZ vs. pan/tilt](/grandma2/key_xyz_vs_pan_tilt/)
- [XYZ and pan/tilt in cues and sequences](/grandma2/key_xyz_pan_tilt_in_cues_sequences/)
- [Use stage markers](/grandma2/key_xyz_use_stage_markers/)
- [Link objects to stage markers in MA 3D](/grandma2/key_xyz_link_object_to_stage_markers/)
