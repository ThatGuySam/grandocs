---
title: "Recipe Presets"
description: "Please read the Recipe topic before this topic."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/presets_recipes.html"
scrapedAt: "2026-06-15T18:25:23.816Z"
pagefind: false
---
Please read the [Recipe topic](/grandma3/2-3/recipes/) before this topic.

This topic explores using recipes in presets.

Recipes can only be added to presets that do not contain attribute values when using the user interface. Presets with attribute data offer to turn the existing attribute data into a recipe (by tapping Turn into Recipe - read more below).

## Adding Recipe Lines

Recipe lines are added to presets using the **Edit Preset Object** pop-up. This can be accessed using the [Swipey](/grandma3/2-3/wvm_pool/#swipey) on a preset pool object.

![](/img/grandma3/2-3/popup_preset_edit_v2-3-8549c9.png)

Edit options for a preset

The middle part of this pop-up is about the recipes and, for instance, grid values.

Besides the main recipe area (described in the [Recipe topic](/grandma3/2-3/recipes/)), the recipe editor area has a colored background. This is a different tool for editing and viewing the values in the selected recipe line.

The preset settings can be visible at the top; most of them are described in the [Preset Pools topic](/grandma3/2-3/presets_pools/). There is a setting specifically for the recipes: **Recipe Template**. This can be enabled to turn the preset into a Recipe Template. If the **Recipe Template** setting is enabled in a recipe preset, the recipe itself will be loaded into the programmer part and will be cooked there. Presets that have this setting enabled are shown with a cooking pot icon with the lid open.

The bottom of the editor has different buttons:

- **Insert New Recipe**  - (this button is available when the preset is turned into a recipe preset):\
  Creates a new recipe line. Adding additional recipe lines will reference the values from the first line when values are stored in the first line. When the first line contains a preset, the reference to this preset is copied. Additional lines also automatically reference the MAtricks values from the first line.
- **Cut**:\
  Cuts the selected recipe line.
- **Paste**:\
  Paste the copied or cut recipe line.
- **Delete**:\
  Delete the selected recipe line.
- **Copy**:\
  Copies the selected recipe line.
- **Oops**:\
  Oops the last action.
- **CleanUp Recipes**:\
  Tap this to remove unused recipe lines. Multiple lines can be created with the same selection and values for the same attributes, but only one line can send values to the attribute. Clean Up removes the unused lines. 
- **Reset MAtricks for Selected**:\
  Resets the MAtricks for the selected recipe line.
- **Turn Into Recipe**:\
  Tap this button to turn a preset containing attribute value into a recipe preset. A new empty preset must also be turned into a recipe preset before adding recipe lines.
- **Take Selection**:\
  This allows using a selection of fixtures instead of a group. Tap this button to make the current programmer fixture selection the new selection for the selected recipe line.
- **List References**:\
  Tapping this opens a pop-up listing all elements that reference and depend on the preset.
- **Edit Preset**:\
  Closes the editor and takes the selected recipe line into the programmer in edit mode.
- **Recast Preset**:\
  This will recast the preset where it is referenced. This means that if attributes are added or deleted after the preset is used in cues, then the preset might need to be recast for the cues to reflect the new content. Read about this in the [Cue Recipes topic](/grandma3/2-3/presets_recipes/).
- **Cook**:\
  This will cook the preset recipes. This might be necessary for the preset to reflect the recipe content.
- **At**:\
  Tapping this applies the preset's current settings to the selection.

## Create a New Recipe Preset Using the Edit Preset Object Pop-Up

Open the editor for an empty preset.

Tap Turn into Recipe in the menu at the bottom.

This turns the preset into a recipe preset and creates the first recipe line.

It is almost always relevant to at least add a preset reference value. To do this, tap and hold the field in the recipe row in the values column.

This opens a **Preset Pool** selection pop-up. Here, navigating the existing presets and selecting the desired preset is possible. It does not have to be in the same feature group as the recipe preset.

Add the desired values in the other columns.

Add a selection if desired - from a group or by tapping Take Selection.

If the recipe contains a group, then the preset is automatically cooked when the edit pop-up is closed.

|                                            |                                                                                                                                                                       |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                             |
|                                            | The[ Recipe topic](/grandma3/2-3/recipes/#h2_1768861353) describes a creation workflow using the Recipe Editor. This might be a better workflow for recipe creation.  |

## Example

We want a preset that can take the current selection of fixtures to a new position in two wings and with a ranged time.

**Requirement:**

Have a show with some moving heads patched and placed in a row. The show also needs a position preset and dimmer preset where the fixtures are at full. This example uses the Demoshow.

Follow these steps to create the recipe preset:

1. Tap an empty position preset pool object and swipe the finger outside the preset to open the Swipey menu.
2. Select Edit Setting in the Swipey menu.
3. Tap Turn into Recipe to be able to create recipe lines.
4. Tap and hold the first field in the "Values" column.
5. Tap Dimmer and then the preset where the intensity is at full (Open).
6. Tap and hold New Recipe to create a second line.
7. Press Assign.
8. Tap the position preset (Roof Floor) in the position preset pool.
9. Tap the second recipe line to assign the preset to the line.
10. Select both recipe lines in the XWings column (if the column is not visible, then make sure both "X" and "Grid" are active in the row with toggle buttons).
11. Edit this value so it says "2" in the XWings.
12. Select both rows in the "Fade From X" column and set the value to "1".
13. Select both rows in the "Fade To X" column and set the value to "3".

It should look like this ("Settings" is turned Off in the title bar):

![Image of the example editor.](/img/grandma3/2-3/img_preset_recipe_example-01_v2-3-013fe9.png)

The finished recipe

14. Close the editor.
15. Select some fixtures (for instance, group 2).
16. Tap the new recipe preset and see the fixture move while they turn on.

If the move and fade should start from the center, then open the edit preset object pop-up again and set the InvertStyle to "All" and the InvertX to "Yes" for both recipe lines.

---

## Working with Recipe Presets

There are three suggested workflows with presets using recipes:

- Preset containing recipe lines with a selection and Recipe Template disabled.
- Preset containing recipe lines without a selection and Recipe Template disabled.
- Preset containing recipe lines and Recipe Template enabled.

### Preset Containing Recipe Lines With a Selection and Recipe Template Disabled

The recipe preset is cooked and will be referenced by the fixtures in the programmer ([Recipe Editor window](/grandma3/2-3/recipes/)). These values can be stored or removed/overwritten in the programmer.

For example, if a recipe preset contains one line with a group as the selection and a value referencing color preset 5. The preset is cooked in the preset. Tapping the recipe preset will result in a reference to the recipe preset in the programmer.

Recipe presets with a selection can be played back from executors. Learn more bout this in the [Use Presets topic](/grandma3/2-3/presets_use/).

### Preset Containing Recipe Lines Without a Selection and Recipe Template Disabled

This recipe works with the programmers' current selection of fixtures. The recipe preset is not loaded into the programmer. Instead, the recipe value links and grid values are used with the current selection of fixtures to cook values directly to the programmer.

|                                                  |                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                                                                                                                                                                                 |
|                                                  | If values are stored into the recipe and then such a recipe preset with no selection stored is called, the values will be called into the programmer, but without a preset link.Recipe presets with no selection stored will call values with preset links into the programmer when a preset is defined in the preset instead of storing values in the recipe. |

This is a great way to have a bunch of template objects in the preset pools that allow quickly calling complex looks based on grid values and MAtricks ranges.

### Preset Containing Recipe Lines and Recipe Template Enabled

Recipe Templates load the recipe lines into the active programmer part. This means the recipe lines are cooked in the programmer when the lines contain a selection. If the recipe includes a selection, then it is cooked immediately. If the recipe lines do not contain a selection, it must be added, for instance, using the [Recipe Editor window](/grandma3/2-3/recipes/).

For example, if a Recipe Template contains one line with a group as the selection and a value referencing color preset 5, tapping the recipe preset will result in a recipe in the programmer part with a recipe line that references color preset 5.
