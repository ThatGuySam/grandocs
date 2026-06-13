---
title: "Use stage markers"
description: "A stage marker is a virtual fixture."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_xyz_use_stage_markers.html"
scrapedAt: "2026-06-12T21:28:20.998Z"
---
A stage marker is a virtual fixture.

It is used to operate objects such as singers or fixtures in a 3D space via the console. Fixtures can direct their beams to a stage marker. 

**Requirement:**

- Patch the fixtures Stage Marker or Stage Marker II in the Patch & Fixture Schedule.

For more information on patching see [Adding fixtures to your show](/grandma2/key_patch_add_fixtures/). 

**Hint:**\
The fixture Stage Marker moves in the position mode XYZ and the Stage Marker II moves in the position mode XYZ, rotates and can be scaled.

---

## []()Move the Stage Marker

1. Select the stage marker for example in the fixture sheet.
2. Open the stage view:\
   -Tap Other and then tap Stage in the [Create Basic Window](/grandma2/key_windows/).\
   -The stage marker is displayed in form of a square at the bottom of the stage view.
3. Tap Position. 
4. To move the stage marker, activate MP Trans and use the three encoders from left that are located below screen 2.
5. To adjust the size of the stage marker, tap **MP Trans** to toggle it to MP Scale and use the encoders.
6. To rotate the stage marker about the axes, tap **MP Scale** to toggle it to MP Rot and use the encoders.

The position of the marker has been adjusted.

![](/img/grandma2/window_stage-view_move-stage-marker_v3-3-d54de5.png)

_Move the stage marker_

---

## Transition, Scale, Rotation

**MP Trans**, **MP Scale**, and **MP Rot** are position features of the stage markers. Access them via the preset type **Position**. 

**MP Trans:**

- To move the stage marker to the left or right, use the first encoder from left.
- To move the stage marker forward or backward, use the second encoder from left.
- To move the stage marker upward or downward, use the third encoder form the left.

**MP Scale:**

- To expand the sides of the stage marker on the X-axis, use the first encoder from left.
- To expand the sides of the stage marker on the Y-axis, use the second encoder from left.
- To expand the sides of the stage marker on the Z-axis, use the third encoder from left.

**MP Rot:**

- To rotate the stage marker about the X-axis, use the first encoder from left.
- To rotate the stage marker about the Y-axis, use the second encoder from left.
- To rotate the stage marker about the Z-axis, use the third encoder from left.

---

## Direct the Fixtures´ Beams to a Stage Marker

To apply the stage marker:

1. Select the fixtures that are to point to the stage marker in the fixture sheet and turn them on.

**Important:**\
Note that XYZ has to be activated in the fixtures that point to the stage marker. For more information see [XYZ](/grandma2/key_xyz/). 

2. Tap the preset type Position and then tap Stage B.
3. Tap Mark and the calculator opens displaying the channel sets of markers. 
4. Select a stage marker.
5. Tap Stage B to toggle it to Stage A.

**Hint:**\
The calculator that opens in **Stage B** displays the names of the stage markers. 

6. To direct all the fixtures toward the stage marker, set XYZ to 0 in **Stage A**.

**Important:**\
The XYZ position of the beam of fixtures that are assigned to a stage marker are relative to the position of the stage marker.

The fixtures are now pointing to the stage marker you have set.  

![](/img/grandma2/window_stage-view_stage-marker_v3-3-42b82f.png)

_Direct the beams to a stage marker_

 

** Hint:**\
You can link objects to stage markers. For more information see [Link objects to stage markers in MA 3D](/grandma2/key_xyz_link_object_to_stage_markers/).
