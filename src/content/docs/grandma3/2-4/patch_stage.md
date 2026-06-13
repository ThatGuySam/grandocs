---
title: "Stages in grandMA3"
description: "In grandMA3 there are virtual stages. The fixtures added to the patch are placed in a stage. The fixtures can be positioned in this 3D virtual stage."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/patch_stage.html"
scrapedAt: "2026-06-12T21:24:47.431Z"
---
In grandMA3 there are virtual stages. The fixtures [added to the patch](/grandma3/2-4/patch_add_fixtures/) are placed in a stage. The fixtures can be [positioned](/grandma3/2-4/patch_position_fixtures/) in this 3D virtual stage.

It is possible to create more stages. This could be useful in a house with several physical stages, a television station with several studios, a theme park with several different areas, or for adding a festival rig to a touring show.

The stages have location and dimension information.

## Add a Stage in the Patch

1. Press Menu.
2. Tap Patch in the menu pop-up.
3. Tap Stages on the left side.
4. Tap Insert new Stage at the bottom.

A new stage has now been added above the line that had focus.

![](/img/grandma3/2-4/menu_patch_stages_v2-2-62e168.png)

_Stages menu with two stages_

The stages can be named for organizational purposes. Tags can be assigned to a stage, and the stage can have a note.

The standard size for a new stage is 30 meters wide (X) and deep (Y), with a zero in the middle. The height (Z) is from zero to 15 meters high.

The stage displayed in the 3D window will automatically expand the visible box, but will not change the dimension defined for the stage object.

The stage setup allows for changing the positions and rotation of the stages. A 3D Viewer can show one or all of the stages.

The buttons at the bottom make it possible to insert new stages.

The stages can also be deleted. Be careful with this!

|                                                  |                                                                                                                                                                       |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                        |
|                                                  | Fixtures are patched inside the stages. Deleting a stage also deletes all the fixtures in that stage, including all the information programmed about those fixtures.  |

If the stages need to be reorganized, they can be copied, cut, and pasted to move them in the list.

A stage can also be exported and imported. Remember that the stage contains the fixtures. The exported stage object contains the patched fixtures and any other stage objects inside the stage.

For more information about adding fixtures to the stage, please follow the first link at the top.

## Edit a Stage

A selected stage in the stage menu can be edited by tapping Edit at the bottom. This opens the **Edit Stage** menu.

![](/img/grandma3/2-4/menu_edit-stage_v2-2-335b03.png)

_Edit stage menu for stage 1_

The top part of this editor has input fields for almost the same settings as the **Stage** menu.

The lower part is used to add and edit a stage **Space** object and stage **Elements**. The elements are flat surfaces that can be combined to create boxes or areas that the light can hit.

A stage space defines a volume in the stage. This space is relevant when using XYZ programming. It defines the size of the space the fixtures can point to. Read more about this in the [XYZ section](/grandma3/2-4/xyz/).

A stage space can have multiple stage elements inside. These elements are defined by four corners, each with an X, Y, and Z coordinate.

Stage spaces and elements can be created, deleted, copied, cut, pasted, oopsed, imported, and exported like many other objects.

Export and Import are especially nice if a lot of time has been spent on creating a 3D set using stage elements.

|                                            |                                                                                               |
| ------------------------------------------ | --------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                     |
|                                            | More complex 3D objects can be added to the Patch. They are found in the "Set" manufacturer.  |

A new stage always has a Stage Space and a default Stage Element (the "floor").

Adding MArker fixtures automatically adds stage spaces for Target and, if needed, for the Movement. Read more about this in the [MArker Fixture topic](/grandma3/2-4/xyz_marker/).
