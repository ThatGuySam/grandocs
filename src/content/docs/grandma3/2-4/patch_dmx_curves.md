---
title: "DMX Curves"
description: "Attributes use DMX curves. As a default, they use a linear transition from 0% to 100%. Other DMX curves can be created and assigned to parameters."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/patch_dmx_curves.html"
scrapedAt: "2026-06-12T21:24:47.854Z"
---
Attributes use DMX curves. As a default, they use a linear transition from 0% to 100%. Other DMX curves can be created and assigned to parameters.

There are three types of DMX curves: MinMax, Switch, and Custom.

|                                                    |                                            |
| -------------------------------------------------- | ------------------------------------------ |
| ![](/img/grandma3/2-4/restriction_gray-968e2d.png) | **Restriction:**                           |
|                                                    | A show file can contain 9 999 DMX curves.  |

Importing fixture types that use special DMX curves adds the curves to the list.

Curve values can be seen and edited in different readouts. These can be changed in the menu at the bottom by tapping the DMXReadout button.

Other buttons at the bottom give access to Cut, Copy, and Paste the curves in the list. There is also a button that deletes a curve. If the curve is used, it might be impossible to delete it.

The curves are displayed, created, and edited in the DMX Curves menu found in the patch.

## Open the DMX Curves Menu

1. Press Menu.
2. Tap Patch.
3. Tap DMX Curves on the left side.

![](/img/grandma3/2-4/menu_patch_dmx-curves_v2-2-6325bd.png)

DMX Curve menu

The DMX Curve menu is split into left and right sides. The left side lists the curves, and the right displays the selected curve.

The curve settings are listed on the left side. The curves can be unfolded (tap the white right-pointing triangle), and the different points on the curves can be seen and edited in the table mode. In and Out show the relationship between the incoming value and what it is translated to in the curve.

The right side can also be used to edit curves. It has a standard toolset for selection (![](/img/grandma3/2-4/icon_select-15_v0-1-92bf61.png)), addition of point (![](/img/grandma3/2-4/icon_add_15_v1-5-png-png-b4d606.png)), removal of point (![](/img/grandma3/2-4/icon_minus_15_v1-5-87f767.png)), move point (![](/img/grandma3/2-4/icon_move-15_v0-1-644ef1.png)), and move point handle (![](/img/grandma3/2-4/icon_move_handle_15_v1_5_2-347b22.png)). Not all tools not available for all curve modes.

The column called **UseForVisualization** defines whether the DMX output, as defined by the DMXCurve, shall be visualized in the 3D Viewer.

|                                                  |                                                                                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                          |
|                                                  | When enabling this property for DMXCurves created by color-calibrated fixtures, the colors in the 3D Viewer will not match the actual output on stage!  |

All DMX curve changes are made inside the patch menu. This means that the menu needs to be closed and changes saved for them to take effect. To finish all DMX curve changes, leave and save the patch changes. Or exit without saving to cancel any changes.

## Create a New MinMax Curve

MinMax curves are linear DMX transitions from a minimum to a maximum value. These can be useful to limit output values in, for instance, dimmers or the pan and tilt movements of fixtures.

1. Open the DMX Curves menu.
2. Tap a location in the curves list on the left side where the new curve should be.
3. Tap Insert new Dmx Curve at the bottom - the default curve mode for a new curve is **MinMax**.
4. Edit the name to give it a custom name.
5. Edit the Min and Max values to match the needs.

## Create a New Switch Curve

Switch curves use two points to create a switch point where the output value instantly changes from one output value to the other.

1. Open the DMX Curves menu.
2. Tap a location in the curves list on the left side where the new curve should be.
3. Tap Insert new Dmx Curve at the bottom.
4. Edit the Curve Mode value to open the small **Select Curve Mode** pop-up.
5. Tap Switch in the pop-up.
6. Edit the name to give it a custom name.
7. Edit the Min and Max values of the two points to match the needs.

Having two points in the switch allows for setting a value needed for switching On and another value for switching Off. This can help with hysteresis.

**Example:**

1. Create a new switch curve.
2. Set the **Min** point to In = 70% Out = 0%
3. Set the **Max** point to In = 80% Out = 100%

This creates a switch that needs a value of 80% and above to turn On (output 100%) and a value of 0% to 70% to turn Off (0% output)

## Create a New Custom Curve

Custom curves can be used for many different things, such as matching the emitter output of LED fixtures.

1. Open the DMX Curves menu.

2. Tap a location in the curves list on the left side where the new curve should be.

3. Tap Insert new Dmx Curve at the bottom.

4. Edit the Curve Mode value to open the small **Select Curve Mode** pop-up.

5. Tap Custom in the pop-up.

6. Edit the name to give it a custom name.

7. Points can be added using the Add tool on the right side or by creating a New Dmx Curve Point in the table view on the left side.\
   To create a point using the tools:

   1. Tap the Add tool (**+**)
   2. Tap in the curve where the point should be added

8. Edit the Min and Max values and the Accel (acceleration) and Decel (deceleration) of the points to match the needs. This can be done in the table or by using the graph editor on the right side.

|                                                  |                                                                                                                                                                     |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                      |
|                                                  | A curve might give a warning if the output at some point is lower than a previous output value.Curves with a warning have the name displayed with a red text color. |

## Export and Import Curves

Curves can be exported to a drive.

1. Select the desired drive.
2. Tap Export.
3. Select the desired drive.
4. Write a name in the name input field.
5. Tap Export in the pop-up.

Curves can be imported to the show.

1. Select a location in the curve list.
2. Tap Import.
3. Select the desired source drive.
4. Select the desired curve.
5. Tap Import in the pop-up.

## Assign Curve to a Parameter

The curves can be assigned to parameters in the [Parameter List](/grandma3/2-4/patch_parameter_list/). This applies the curve to a specific DMX channel.

1. Open the Parameter List in the menu on the left side.
2. Locate the parameter that needs to use the custom curve.
3. Edit the DMX Curve field and select the custom curve in the small select pop-up.

## Assign Curve to a Fixture Type

DMX Curves can be assigned to an attribute in a [Fixture Type](/grandma3/2-4/fixture_types/). This applies the curve to the selected attribute for all the fixtures of this type.

1. Open the Fixture Types in the menu on the left side.
2. Select the desired fixture in the list.
3. Tap Edit in the menu at the bottom.
4. Tap the DMXModes tab at the top.
5. Edit the DMX Curve field for the desired attribute.
6. Select the wanted curve in the pop-up.
7. Close the FixtureType editor pop-up by tapping the X in the upper right corner.
