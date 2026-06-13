---
title: "Edit Recipe Mode"
description: "Besides handling recipes in cues parts and presets, recipes can also be created and edited within the programmer. This mode is based on a programmer workflow fo"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/edit-recipe-mode.html"
scrapedAt: "2026-06-12T21:24:57.233Z"
---
## Create Recipes with the Edit Recipe Mode

Besides handling recipes in cues parts and presets, recipes can also be created and edited within the programmer. This mode is based on a [programmer workflow](/grandma3/2-4/operate_programmer/) for quickly and efficiently creating recipes. All pool item selections are logged, saved in a recipe, and then can be easily stored into presets and cues.

|                                                    |                                                               |
| -------------------------------------------------- | ------------------------------------------------------------- |
| ![](/img/grandma3/2-4/restriction_gray-968e2d.png) | **Restriction:**                                              |
|                                                    | The edit recipe mode is only available for standard recipes.  |

The Recipe Editor window is a handy tool to visualize and edit recipes while in edit recipe mode. For more information on the Recipe Editor window, see [above](/grandma3/2-4/recipes/#h2_1768861353).

![Update this description text.](/img/grandma3/2-4/recipe_editor_window_v2-2-4c4fbb.png)

Recipe Editor window

There are multiple ways to enable the edit recipe mode:​

- Tap Edit Recipe in the title bar of the recipe editor window.
- Enable Edit Recipes in the **At Filter menu.**
- Use the [EditRecipe](/grandma3/2-4/keyword_editrecipe/) keyword.

While the edit recipe mode is enabled, Edit and Esc flash alternately. To disable the edit recipe mode, press Esc or use one of the options described above to toggle the edit recipe mode. Once the edit recipe mode is disabled, all pools work as usual.

Each object type that can be used for a recipe will have its pool window marked with a green ![](/img/grandma3/2-4/icon_cooking-pot_12_v1-7-c4818c.png), when edit recipe mode is enabled:

![Update this description text.](/img/grandma3/2-4/edit_recipe_mode_enabled_v2-1-b473c5.png)

Groups pool with edit recipe mode enabled

The following windows use the recipe indicator:

- Groups
- Preset Pools
- MAtricks
- Worlds
- Filters
- Layout Viewer
- Fixture Sheet

|                                            |                                                                                                                                   |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                         |
|                                            | Make sure you set the Pool Action setting in the corresponding pools to **SelFix/At** or **At** so you can use them for recipes.  |

For creating recipes with the Edit Recipe mode, it is useful to have a groups pool, several preset pools, a sequence pool, and the recipe editor window visible:

![Update this description text.](/img/grandma3/2-4/recipe_editor_mode_and_window_v2-1-6b62e3.png)

Several pool windows and recipe editor window with edit recipe mode enabled

The following steps outline the general workflow for creating recipes. For a practical example, see [below](/grandma3/2-4/recipes/#h2_1689083776).

1. Activate the Edit Recipe mode.
2. Select groups. The selected groups are indicated by a green frame around the pool objects. Multiple groups can be selected at the same time.
3. Select presets. Presets that are not compatible with fixtures of the selected group will be grayed out. All objects selected for recipes of the currently selected groups are indicated by a green frame in their pool windows. The last selected preset and the corresponding recipe line in the recipe editor, will be displayed with rotating green dots around the objects. These rotating dots indicate it as the target of MAtricks or filter values. \
   Tap on a selected object again to deselect it. To select an already used preset (which has a green frame), press MA and tap the preset. Now MAtricks, filters, and worlds can be applied to the corresponding recipe. The corresponding line in the recipe editor is displayed with a green dotted frame.\
   Multiple values can be added to a selection, a single recipe line is created for each selected value in the recipe editor window. Also different selections can be defined, for example, by tapping Group 2. A brown frame around pool objects indicates the values for previous selections, for example, Group 1. Tap Group 1 again and the previously defined values for this selection are highlighted in green again. A feature group indicator bar at the bottom of the group objects shows the feature groups that are active in the recipe for this very group.
4. Store the new recipe to a cue, cue part, or a preset. Storing a recipe clears the recipe editor and only groups will remain as selected objects. 

The order of recording selections and values has an impact on how the recipe is handled. The last recipe line determines the output if several recipe lines with the same selection refer to the same attribute. Storing recipes into [Preset Pools](/grandma3/2-4/presets_pools/) for specific feature groups, for example the Color preset pool, stores not only values for Colors, but all recipe lines of the selected programmer part.

Executing the [EditRecipe](/grandma3/2-4/keyword_editrecipe/) keyword with a corresponding cue, cue part, or preset, enables the edit mode for the specific object in the recipe editor mode. Press Off and tap a group or a preset to remove the corresponding recipe line. If a group or a preset has multiple lines linked, all corresponding lines will be removed. 

It is not possible to directly enter values into a recipe, they have to be stored in a preset first. If no preset is selected, the values are put directly into the programmer. 

|                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                  | Values that are entered for creating a recipe, do not overwrite or replace values that are directly entered into the programmer. The automatically cooked recipes are treated with low priority. To actively overwrite or merge programmer values, cook the programmer using the [Cook Keyword](/grandma3/2-4/keyword_cook/). Also MAtricks values will only work with recipes and will not affect the programmer.  |

Open the [MAtricks Editor](/grandma3/2-4/matricks/) to define specific MAtricks values to the recipe lines. While using the MAtricks editor to edit a recipe, the editor is displayed with "(Recipe)" and the green pot icon in the title bar. The rotating dots around the preset and recipe line indicate the target for MAtricks values.\
To add MAtricks, Worlds and Filters to the last created recipe, tap on the objects in the pool. Pool objects of MAtricks, Worlds, and Filters have a brown colored frame around them when they are used by a recipe:

![Update this description text.](/img/grandma3/2-4/matricks_editor_and_pools_with_edit_recipemode_enabled_v-2-1-9d14c9.png)

MAtricks Editor with a selected MAtricks and Filter pool object 

---

## Example

This is a simple example of how to create recipe lines for a cue using the recipe editor window.

**Requirements**:

- Load the demo show file.
- Have preset pools, a groups pool, the recipe editor window, and the MAtricks editor visible. Also the sequence pool can be useful, but it is not a requirement. 

Follow these steps to create two recipe lines and store it into a cue:

1. Enable Edit Recipe in the recipe editor window.
2. Tap on group 1 to select it. Group 1 now has a green frame around it.
3. Tap on the dimmer preset  2. The dimmer preset appears with a green dotted frame around it. 
4. Tap on the color preset  2. The green dotted frame moves to the color preset.\
   At this point, two recipe lines are created. Group 1 is the **Selection** for both lines. For **Values**, the first line has preset 1.2, the second preset 4.2.
5. Now tap on a different group (Group 3) to select it.\
   The prior selections of all pool objects is now deselected and displayed with a brown frame.
6. Select a dimmer and color preset again: Tap on preset 1.2 and preset 4.4.\
   The selected presets are now connected to Group 3.
7. Tap on the position preset 3.
8. Tap on the template phaser preset 1.
9. Add some values for the MAtricks Editor: Set phase from X to 0, set phase to X to 360°.\
   The MAtricks Editor values are added to the last created phaser preset recipe line with a green dotted frame around the line. This is indicated by a small MAtricks icon in Name column of **Recipe 6** of the recipe editor window:

   ![Update this description text.](/img/grandma3/2-4/recipe_editor_example_v2-2-37eef6.png)

   Recipe editor window with six recipe lines. The rotating dots around recipe line 6 indicate it as the target of MAtricks or filter values.  
10. The last step is to store all recipe lines to a cue: Store Sequence 2 Cue 1.

Cue 1 with all six recipe lines is created and all lines are removed from the recipe editor window.

To see the example, tap the video below: 

[Vimeo video](https://player.vimeo.com/video/1085694170?title=0\&byline=0\&portrait=0\&color=ffeb0f)\
