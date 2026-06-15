---
title: "05 - 3D Fixture Setup"
description: "The grandMA3 software has a virtual 3D stage area."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/qsg_3d_setup.html"
scrapedAt: "2026-06-15T18:25:40.639Z"
pagefind: false
---
## 3D Window

The grandMA3 software has a virtual 3D stage area.

The fixtures we patched exist in this environment, and other elements can be imported to match the stage and set elements.

It is a visualization tool where the fixtures can be positioned to match real-world positions, and the fixtures can be rotated to point in the correct direction.

You can create a new window to see the 3D stage area. The window is located in the **Common** tab of the **Add Window** pop-up. It is called **3D Viewer**.

This is what it currently looks like:

![](/img/grandma3/2-3/qsg_05_stage-empty_v2-2-c0cb72.png)

When the fixtures are patched, they are positioned at the zero position. This is where we see a green and red line in the image above. It is on the floor in the middle of the stage area as a default.

We are looking at the stage area through a virtual camera. There are several default cameras, but for now, we are just gonna use the one called **Front**. You can see the camera we use in the 'Camera' button in the title bar.

The 3D space and the light beams in the space can have different render qualities. This can include simulation of haze in the 3D space. The different render qualities can be selected in a pool, like the cameras, and you can see the currently selected render quality in the title bar.

The toolbars on the left side of the window have different tools that allow for fixture selection and view manipulation.

If the window you created is less than seven squares high in the user-definable area, then the toolbar menu is split into two columns. If the height is even smaller, the toolbar is split into smaller sections.

The first toolbar column, in the image above, is about fixture selection and moving the camera:

- ![](/img/grandma3/2-3/icon_select-24_v2-1-43b050.png) **Select** - For selecting fixtures or other objects.
- ![](/img/grandma3/2-3/icon_follow_24_v0-1_1-8734d8.png)**Follow** - We are not gonna cover this function in this topic. It points moving lights at the position you click in the window.
- ![](/img/grandma3/2-3/icon_move_24_v2-1-4a376c.png)**Move** - This moves the camera around.
- ![](/img/grandma3/2-3/icon_rotate_24_v0-1_1-519406.png)**Orbit** - This rotates the camera around the center (0,0,0) position.
- ![](/img/grandma3/2-3/icon_zoom_24_v0-1_1-3314c7.png)**Zoom** - Zooms in and out from the position clicked.
- ![](/img/grandma3/2-3/icon_rotate-pivot_24_v0-1_1-c81ae7.png)**Pivot** - Rotates the camera around a set pivot point.
- ![](/img/grandma3/2-3/icon_rotate-set-pivot_24_v0-1_1-469e8a.png)**Set Pivot** - Sets the pivot point for the rotate function above.

The second toolbar column has the following tools:

- ![](/img/grandma3/2-3/icon_fit_24_v0-1_1-f04ebf.png)**Zoom to Fit** - Moves the virtual camera to fit all elements.
- ![](/img/grandma3/2-3/icon_fit-selected_24_v0-1_1-011179.png)**Fit Selected** - Moves the camera to fit the selected fixtures.
- ![](/img/grandma3/2-3/icon_camera_24_v0-1_1-7d8394.png)**Camera Reset** - Moves the virtual camera to its default position.
- **![](/img/grandma3/2-3/icon_selgrid_24_v1-9-5f9a5c.png)3D view to Selection Grid** - We will not cover this function in this topic. Tapping it uses the 3D fixture arrangement in a different view called **Selection Grid**.

Try out the different camera tools and get comfortable moving the camera around.

Did you notice that the fixtures appear to be under the floor?

This is because the fixture's insert point is usually its hanging point.

For this to be useful, we need to position and rotate fixtures to match our setup.

The 3D window has a mode called **Setup**. Setup is turned Off when you do not want to change the fixture position and rotation but simply want to use the window. Setup is turned On when you want to change the fixture setup. The mode can be changed by toggling the 'Setup' button in the 3D Windows title bar.

Select fixture 1.

Turn the setup mode On.

Now, the encoder toolbar has been changed to allow you to use the encoders to change the fixture position and rotation.

![](/img/grandma3/2-3/qsg_05_3d-encoder-bar_v2-2-d7bc64.png)

The 3D axes are X, Y, and Z, which can represent positive or negative numbers. The X-axis is usually set up to be stage left and right. Stage right will be negative numbers if 0 is on the centerline. The Y-axis is usually downstage and upstage. Positive numbers are upstage. The Z-axis is the height. Positive numbers are typically above the floor.

The inner encoders move the fixture around, and the outer encoder ring changes the fixture rotation. Try moving and rotating the fixture. Notice that when you change one of the rotation values, the values for the two other rotation axes may also change.

On the right side of the encoder bar, there are buttons to reset the fixture position and rotation.

The position and rotation values are actually a part of the patch information. Changing the values using the 3D window writes the values to the patch. If you are changing a lot of fixtures and you know the values, then it might be easier to make the changes in the patch.

Click the ![](/img/grandma3/2-3/icon_gear_24_v1-9-186752.png) icon in the control bar (or Menu) and click Live Patch.

**Live Patch** is a version of the patch menu that allows you to make live changes without modifying the show configuration. This means that, for instance, you cannot add or delete fixtures to the show, but we can change the DMX address to which a fixture is patched. We can also change the fixture position and rotation.

We can show a version of the 3D Viewer in the patch. Click Show 3D Positions. Now, we can see a version of the 3D Viewer inside the patch. This can be very useful when positioning the fixtures in the 3D space. In this version of the 3D Viewer, we have an extra tool that is also visible in the actual 3D Viewer when it is in "Setup" mode. The icon looks like this: ![](/img/grandma3/2-3/icon_focus_24_v1-9-932b46.png). It can be used to rotate conventional fixtures to point at a location in the 3D space.

 

The patch menu has two different column modes. They are **Condensed** and **Full**. Condensed only shows a few common columns. Full shows all the different columns and settings available for the fixtures. The mode can be changed by toggling the 'Columns' button in the patch menu title bar. Change it to **Full**.

Now, you can see all the different fixture settings that belong to the patch.

There are position and rotation columns for the fixture.

Change the numbers to match the following table. You can select multiple cells with lasso selection or by holding Ctrl on a keyboard while clicking cells.

| FID | Name       | Type                        | Patch | X-Pos  | Y-Pos  | Z-Pos | X-Rot  | Y-Rot  | Z-Rot  |
| --- | ---------- | --------------------------- | ----- | ------ | ------ | ----- | ------ | ------ | ------ |
| 1   | Dim 1      | Dimmer - Mode 0             | 1.001 | -4.00m | -4.00m | 3.30m | 60.20  | -3.50  | -6.00  |
| 2   | Dim 2      | Dimmer - Mode 0             | 1.002 | -3.67m | -4.00m | 3.30m | 61.25  | -9.00  | -15.75 |
| 3   | Dim 3      | Dimmer - Mode 0             | 1.003 | -3.33m | -4.00m | 3.30m | 63.20  | -14.00 | -25.65 |
| 4   | Dim 4      | Dimmer - Mode 0             | 1.004 | -3.00m | -4.00m | 3.30m | 66.14  | -18.75 | -36.00 |
| 5   | Dim 5      | Dimmer - Mode 0             | 1.005 | 3.00m  | -4.00m | 3.30m | 66.14  | 18.75  | 36.00  |
| 6   | Dim 6      | Dimmer - Mode 0             | 1.006 | 3.33m  | -4.00m | 3.30m | 63.20  | 14.00  | 25.65  |
| 7   | Dim 7      | Dimmer - Mode 0             | 1.007 | 3.67m  | -4.00m | 3.30m | 61.25  | 9.00   | 15.75  |
| 8   | Dim 8      | Dimmer - Mode 0             | 1.008 | 4.00m  | -4.00m | 3.30m | 60.20  | 3.50   | 6.00   |
| 9   | Dim 9      | Dimmer - Mode 0             | 1.009 | -4.00m | 0.00m  | 2.80m | 16.00  | -45.00 | 0.00   |
| 10  | Dim 10     | Dimmer - Mode 0             | 1.010 | -4.00m | 0.00m  | 2.40m | 16.00  | -57.50 | 0.00   |
| 11  | Dim 11     | Dimmer - Mode 0             | 1.011 | -4.00m | 0.00m  | 2.00m | 16.00  | -70.00 | 0.00   |
| 12  | Dim 12     | Dimmer - Mode 0             | 1.012 | 4.00m  | 0.00m  | 2.80m | 16.00  | 45.00  | 0.00   |
| 13  | Dim 13     | Dimmer - Mode 0             | 1.013 | 4.00m  | 0.00m  | 2.40m | 16.00  | 57.50  | 0.00   |
| 14  | Dim 14     | Dimmer - Mode 0             | 1.014 | 4.00m  | 0.00m  | 2.00m | 16.00  | 70.00  | 0.00   |
| 20  | Blinders   | Grouping                    |       |        |        |       |        |        |        |
| 21  | Blinder 1  | COB - Blinder 2x100w - 1 ch | 1.015 | -2.00m | 0.50m  | 4.70m | -73.00 | 0.00   | 0.00   |
| 22  | Blinder 2  | COB - Blinder 2x100w - 1 ch | 1.016 | -1.00m | 0.50m  | 4.70m | -73.00 | 0.00   | 0.00   |
| 23  | Blinder 3  | COB - Blinder 2x100w - 1 ch | 1.017 | 1.00m  | 0.50m  | 4.70m | -73.00 | 0.00   | 0.00   |
| 24  | Blinder 4  | COB - Blinder 2x100w - 1 ch | 1.018 | 2.00m  | 0.50m  | 4.70m | -73.00 | 0.00   | 0.00   |
| 25  | Blinder 5  | COB - Blinder 2x100w - 1 ch | 1.019 | -3.50m | 2.00m  | 4.20m | -73.00 | 0.00   | 0.00   |
| 26  | Blinder 6  | COB - Blinder 2x100w - 1 ch | 1.020 | -2.50m | 2.00m  | 4.20m | -73.00 | 0.00   | 0.00   |
| 27  | Blinder 7  | COB - Blinder 2x100w - 1 ch | 1.021 | -0.50m | 2.00m  | 4.20m | -73.00 | 0.00   | 0.00   |
| 28  | Blinder 8  | COB - Blinder 2x100w - 1 ch | 1.022 | 0.50m  | 2.00m  | 4.20m | -73.00 | 0.00   | 0.00   |
| 29  | Blinder 9  | COB - Blinder 2x100w - 1 ch | 1.023 | 2.50m  | 2.00m  | 4.20m | -73.00 | 0.00   | 0.00   |
| 30  | Blinder 10 | COB - Blinder 2x100w - 1 ch | 1.024 | 3.50m  | 2.00m  | 4.20m | -73.00 | 0.00   | 0.00   |
| 31  | Blinder 11 | COB - Blinder 2x100w - 1 ch | 1.025 | -2.00m | 3.50m  | 3.70m | -73.00 | 0.00   | 0.00   |
| 32  | Blinder 12 | COB - Blinder 2x100w - 1 ch | 1.026 | -1.00m | 3.50m  | 3.70m | -73.00 | 0.00   | 0.00   |
| 33  | Blinder 13 | COB - Blinder 2x100w - 1 ch | 1.027 | 1.00m  | 3.50m  | 3.70m | -73.00 | 0.00   | 0.00   |
| 34  | Blinder 14 | COB - Blinder 2x100w - 1 ch | 1.028 | 2.00m  | 3.50m  | 3.70m | -73.00 | 0.00   | 0.00   |

When the numbers match, you can close the patch menu and accept the changes if the software asks.

Now the fixtures are positioned and rotated, and the 3D window should look something like this:

![](/img/grandma3/2-3/qsg_05_stage-complete_v2-3-e5e79f.png)

Try to turn on the fixtures to see the fixtures' light and move the camera around to see them from different positions.

When you are happy, remember to turn the 3D window "Mode" back to **Standard** by turning Off the Setup button. You can store this as a new view or store it on top of the default "3D" view.

The blinder fixtures are, as mentioned, children of the Blinder grouping fixture. This includes their position and rotation. The position and rotation are relative to the parent fixture. Currently, the grouping fixture is at the zero position, so the blinder fixtures, for instance, are positioned 4 meters above the stage - in reality, they are actually 4 meters above the location of the parent fixture. If we move the parent fixture 2 meters, then the child fixture remains 4 meters above the parent fixture, but it is now 6 meters above the stage.

This explains the move pop-up we got in Chapter 2. The system asked if we wanted the current position and rotation values to be relative to the parent fixture or if the values should be adjusted based on the parent's location.

Let me explain this with a simple example. We have a fixture and a grouping fixture. Both are 2 meters above the stage floor. The fixture and the grouping fixture are rotated 90 degrees. Now we move the fixture to be a child of the grouping fixture. If we choose 'Absolute', then the fixture does not move in the 3D virtual space. The values are adjusted to accommodate the position and rotation of the grouping fixture. If we choose 'Relative', then the fixture and the grouping fixtures remain unchanged. The result is that the fixture is now 2 meters higher and rotated another 90 degrees.

 

The 3D window has a lot of different settings that allow you to adjust the window to match your wishes. For instance, it can be set up to have priority and run on a grandMA3 onPC on a powerful graphics computer, giving you high-quality real-time visualization with a more realistic haze. The quality can also be scaled down to run on a console, where the user interface and cue control are prioritized.

For now, we are just gonna use it with the default settings.

---

## Recap

In this chapter, we looked at the 3D Viewer window and positioned the fixtures in the 3D virtual space.

If you want to learn details about the 3D window, read the [3D Window](/grandma3/2-3/patch_3d_viewer/) topic.

The [Position Fixtures in the 3D Space topic](/grandma3/2-3/patch_position_fixtures/) explores fixture positioning in more detail.

In future chapters, we will add more interesting fixtures to our patch and 3D space.

The [next chapter](/grandma3/2-3/qsg_group/), however, is about groups.
