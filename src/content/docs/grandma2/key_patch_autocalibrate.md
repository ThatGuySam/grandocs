---
title: "Auto calibrate fixture positions"
description: "The Auto-calibration is a system where the software positions moving light fixtures based on four makers on the real floor. This can work, but you and the fixtu"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_patch_autocalibrate.html"
scrapedAt: "2026-06-12T21:28:10.030Z"
---
The Auto-calibration is a system where the software positions moving light fixtures based on four makers on the real floor. This can work, but you and the fixtures needs to be precise.

One of the big advantages with having a precise position and rotation of your moving lights is the option to use XYZ position programming.

You can access this system using a [Stage View](/grandma2/key_patch_stage/) and opening the **Stage View Options**. Here is a tab called "Calibration". In this tab you will find a single button called Calibrate Fixture Pos. Tapping this will open the Calibration pop-up.

It could look like this:

![](/img/grandma2/popup_calibration_absolute_v3-4-a175b4.png)

_Calibration pop-up - Absolute Mode_

This is separated into a left and a right side.

The left side is used to define the markers on the floor.

The right side has short description of the workflow in this view. There are also four buttons used to control the calibration function.

The first button is called **Find Alternative Fixture Position**. This can be used to change the rotation and/or position of the selected fixtures. The fixtures might move or rotate. It still points to the same spot in the 3D space, but use a different set of values for the fixture rotation and position.

When the **Output Stage Values** button is active, then the currently selected fixtures will output the Stage values. Stage values can be edited in the [Parameter List](/grandma2/key_patch_dmx_parameter_list/#parameter_list), Fixture Types editor and in the Fixture editor.

You can use two different modes for the calibration process. One is called **Absolute Mode** and the other is **Free Mode**. You can change between the two modes by tapping the Mode button on the right side of the pop-up.

The difference is in the left side of the pop-up. The Free Mode could look like this:

![](/img/grandma2/popup_calibration_free_v3-3-d1e85c.png)

_Calibration pop-up - Free Mode_

The last button on the right side is the "Do calibrate" button. This is the one you press when you are ready for the automatic calibration.

 

The left side is used to define the positions of the markers on your floor.

At the top you will see the current position and rotation of the last fixture you selected.

For the calibration you will need to mark the corners of a rectangle on your real stage - point A, B, C and D. And you need to tell the software where your rectangle is.

If your rectangle is at a level plane of your stage, you can use the Absolute mode. If the rectangle needs to be on a sloping part of your stage then you need to use the Free mode. Each fixture can have its own rectangle but they can also share the same rectangle. If there is an **\*** symbol next to the A, B, C, or D then your selected fixtures do not share the same rectangle.

In **Absolute mode** you define the X, Y and Z position of corner A and then you specify the distance from corner A to corner B and corner D. This will give you a rectangle.

In **Free mode** you define the X, Y and Z position of three corners (A, B and C). This allows you to create a rectangle on a sloped plane.

When you have selected one or more fixtures and created a rectangle in this pop-up you will see the markers it in the Stage view.

## Calibrating fixtures for the first time

These are the steps needed to calibrate fixtures for the first time (sharing the same rectangle):

1. Create the markers/rectangle on the floor.
2. Patch the fixture(s) and **do not** switch on the XYZ support.
3. Setup the approximate XYZ positions for your fixtures. If you do not know how then you can read about it in the [Position fixtures in the 3D stage topic](/grandma2/key_patch_position_fixtures/).
4. Invert the Pan/Tilt channels to have the right movement in your Stage view and the real world.
5. Store 4 Pan/Tilt position presets for the 4 corners A, B, C and D for your real rectangle. (Here you can use the Stage View with Follow to get the positions a bit quicker than only with the Pan/Tilt encoders).
6. Open this calibration pop-up in the Stage View Options.
7. Put in the dimensions for the rectangle.
8. Call the Pan/Tilt preset A in your programmer, with all fixtures selected, and now press Store key and the A button on the calibration pop-up.
9. Repeat the procedure for corner B, C and D - pressing the respective buttons in the view.
10. Now select all fixtures and tap the Do Calibration button in the pop-up.
11. If you want to use XYZ positions programming, you can now go to the Fixture Type in the Setup and switch on the XYZ support.

Now the fixtures are moved and rotated in the Stage View. If it look really weird, please try the calibration process again - maybe with a flipped set of values.

Now you can use the XYZ encoders to store positions in your cues.

## Re-calibrating fixtures after the initial setup

These are the steps needed to re-calibrate fixtures if they have moved position:

1. Open the Calibration pop-up from the Stage View Options.
2. Select the fixtures and bring up the dimmer channels or use Highlight.
3. Push the A button in the Calibration pop-up.
4. The position mode of the fixture will switch to Pan/Tilt and you can correct the positions for the fixtures. In this case do not use the "Follow" in the stage view because it automatically switch the position mode to XYZ.

**Restriction:**\
You cannot store XYZ values on the A, B, C and D corners!

5. With the new Pan/Tilt values, press the Store key and overwrite the corner A.
6. Repeat the procedure for corner B, C and D.
7. Now select all (relevant) fixtures and push the Do Calibration button in the pop-up.

 

All XYZ values in your show are now updated!

## Some rules and limitations

There are some rules and limitations using XYZ position programming:

- XYZ, Flip, Mark, and Dist. (Distance) are 6 parameters more you need per fixture.
- Distance is used for conversion between XYZ and Pan/Tilt values. Do not delete it!
- You cannot Park the new virtual XYZ, Flip, Mark, and Distance parameters.
- After the calibration and programming do not invert the DMX Pan or Tilt attributes.
- After the calibration and programming do not move the fixture position and rotation in the Stage View.
- If your fixture positions are accurate made in the Stage View and you do not want to lose them, then you can use the Follow to use the XYZ parameters.
- To fade fixture positions on the stage in a straight line between point A and B you need the XYZ parameters.
- Do not unblock sequences containing a mixture of XYZ and Pan/Tilt position data and do not "store /remove" or remove values to remove single attributes of the position preset type of cues when using XYZ. This could result in unexpected loss of position data inside your sequence.
