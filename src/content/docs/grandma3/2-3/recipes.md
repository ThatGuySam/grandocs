---
title: "Recipes"
description: "Recipes can be a very useful tool for touring shows or when the changes are expected."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/recipes.html"
scrapedAt: "2026-06-15T18:25:26.127Z"
pagefind: false
---
Recipes can be a very useful tool for touring shows or when the changes are expected.

Recipes can be stored in cue parts and presets.

![](/img/grandma3/2-3/img_recipe_data-flow_v1-7-b0ac95.png)

Recipe data flowchart

There is a possibility to create some conflicting data using recipes and stored values in both cue parts and in presets.

Values can be stored in a cue part. Cue parts can also contain recipe data.

The cue part recipe needs to be cooked into the cue part. If this is cooked with the "Merge" option then existing values in the cue part are not overwritten by the recipe. If the "Overwrite" option is selected, then all existing values are overwritten by the recipe - values that are not affected by the recipe are removed from the overwritten cue.

Preset recipes are automatically cooked into the preset, and a preset can be used in a cue part.

All this means that an attribute can potentially get a value from four different locations, but only one of these values can be output:

- The cue part
- The cue part recipe
- The preset
- The preset recipe

Values stored in the cue part have higher priority than the cue part recipe value. Values stored in the preset have a higher priority than the preset recipe values. Storing a preset to a cue part creates the preset reference to the preset so in that case the output is decided by the preset priority.

This flow chart can be used to determine where the output comes from in a sequence:

![](/img/grandma3/2-3/img_recipe_output-decision-flow_v1-7-cf9ddd.png)

Output decision flowchart

---

A recipe contains one or multiple recipe lines describing what should happen based on a set of information. The recipe can "cook" values into the cue part, preset, or programmer. This cooked data is marked by a small pot icon ![](/img/grandma3/2-3/icon_cooking-pot_12_v1-7-f630d9.png) and the cooked data can easily be removed again if needed.

A recipe line can contain information about a selection of fixtures, group, preset, MAtricks, individual fade, delay, speed, and phase values.

Values from recipes can be combined with conventionally stored values.

The flexibility in the recipe system allows for a variety of uses. The recipes could be used to:

- Create recipe presets for groups referencing other presets for a flexible fixture setup.
- Create template presets with ranged values that can be applied to a flexible selection of fixtures.
- Cues that contain a recipe on how different elements create the desired look.

If a recipe is present in a cue or preset, then there is a small pot icon. It can look different depending on the recipe status:

- ![](/img/grandma3/2-3/icon_pot-green_12_v2-1-e78ae4.png) Green pot: All recipe lines are valid.
- ![](/img/grandma3/2-3/icon_pot-red_12_v2-1-ea0197.png) Red pot: One or more recipe lines cannot be cooked.
- ![](/img/grandma3/2-3/icon_pot-green-open_12_v2-1-fc06c4.png) Open pot: This is a Recipe Template.
- ![](/img/grandma3/2-3/icon_pot-orange_12_v2-3-32a5dd.png) Orange pot: This means, that there is data from recipes (cooked) and selective data (uncooked) in the cue or cue part. 

The grandMA3 software offers multiple tools and methods to create and edit recipes. Read the [Cue Recipe](/grandma3/2-3/cue_recipe/) and [Preset Recipe](/grandma3/2-3/presets_recipes/) topics for details on how to create and edit recipes directly in cues and presets. Additionally recipes can be created with the programmer and the Recipe Editor window in Edit Recipe mode. 

---

## Recipe Editor Window

The Recipe Editor window is useful for working with [Programmer Parts](/grandma3/2-3/operate_programmer/#h2_1195515184) and offers a visualization of recipe lines. All recipe lines can be edited.

The Recipe Editor window can be found in the [Add Window](/grandma3/2-3/wvm_add_window/) pop-up in Tools - Recipe Editor.\
 

![Update this description text.](/img/grandma3/2-3/recipe_editor_window_v-2-1-a77367.png)

Recipe Editor window with Edit Recipe enabled and Part 1 selected

To enable the edit recipe mode, tap Edit Recipe in the title [bar](/grandma3/2-3/recipes/#h2__524264777). Tap on a Part to select it for creating recipes. 

If a Group has multiple recipe lines with different presets for the same attribute, only the last entry will generate output. To delete all recipes that use the same selection with multiple presets of the same feature group, tap CleanUp in the title bar. Only the last object that generates the output is kept.

For example, when Group 1 + Red + Yellow + Blue is selected and then CleanUp is tapped, the recipe lines for Group 1 + Red + Yellow will be deleted. If you tap an already selected preset again to deselect it, the corresponding recipe line will also be deleted. CleanUp is only active when the same fixtures are used with multiple items of one feature group. Otherwise the button will be greyed out. With Edit Recipe disabled this button is not visible.

+ and - on the left side can add or delete Programmer Parts and Recipes.

It depends on the destination whether recipes of the different parts are stored or not:

- If cue parts are the destination for storing recipes, recipe lines of the selected programmer part, which is displayed in green, will be stored in the destination cue part. For example, Store Cue Part 1.
- If cues are the destination for storing, all parts will be stored as respective cue parts. For example, Store Cue 1.
- If presets are the destination for storing, the selected part which is displayed in green will be stored into the preset. For example, Store Preset 1.3.

As soon as recipes are stored they will be cleared from the Recipe Editor. 

---

## Recipe Sheet

The recipe sheet with its multiple columns is part of recipes in cue parts, presets, and the Recipe Editor window (programmer). Besides minor differences, the recipe sheet covers the same information in all three places. 

This is an example of a recipe sheet:

![The image shows en example of the recipe editor with two recipe lines.](/img/grandma3/2-3/recipe_sheet_v2-2-0d13c0.png)

Recipe sheet with three lines

A top bar with toggle buttons can show or hide different elements of the recipe.

- **Lock**:**\
**If this column is set to **UL** (UserLock), tapping CleanUp will not clean up the locked recipe line. It is also not possible to deselect objects of the corresponding recipe line. 

- **Name**:**\
**The Name column can also be used to give the recipe line a name. If the name text is red, that indicates that the line cannot be cooked. For example, if the values are not valid for the selection or if crucial ingredients are missing. MAtricks values that do not come from a pool object, Worlds, or Filters, are indicated by small green icons (![](/img/grandma3/2-3/icon_15_matricks_v2_0-c82d04.png), ![](/img/grandma3/2-3/icon_world_v2-1-f24920.png), or![](/img/grandma3/2-3/icon_filter_15px-3d7e4b.png)) on the right in the Name cell. 

- **Tags**:**\
**Displays assigned Tags. Tap and hold to edit the cell and assign or unassign tags. 

- **Enabled**:\
  If set to **Yes** recipe lines will be cooked. With **No**, the recipe line is marked red and will not be cooked.  

- **Selection Mode**:\
  This defines how subfixtures are handled when only main fixtures are part of the selection of the recipe:

  - **Normal**:\
    Values are passed down to the subfixtures.
  - **Strict**:\
    Values are strictly applied to only the fixtures in the selection.

  |                                            |                                                                                                                                    |
  | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
  | ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                          |
  |                                            | When migrating show files from v1.9.7.0. or earlier, the **Selection Mode** setting will be set to **Strict** in existing recipes. |

- **References**:\
  These are the columns for referenced data.

  - **Selection**:\
    This is the selection of fixtures using this recipe line. If the selection is a group, then the number and the name of the group is displayed. If the group is empty, the text is red. Tap and hold to open a pop-up with a drop-down of all groups. To select all fixtures of a preset, that is set in the values column, select **\<From Value>** in the drop-down. The pop-up also offers a search function and a Data Pool selection in the title bar. To create a new group, tap **New** at the bottom of the drop-down. A new groups pool is created with the edit mode active.
  - **Values**:\
    This is the value reference used in the recipe line. If the value is a preset, then the number and the name of the preset and many of the different preset icons indicating Preset Mode, MAtricks, MultiStep, Layer information, and so on are shown. If the fixtures of the selected group are only partly used, the text in the values column is displayed in orange. This happens for example if not all fixtures of the selection in use can use the selected preset or a world is added to a recipe line. If it is red, it is not compatible to fixtures in the Selection column. 
  - **MAtricks**:\
    This is a reference to an existing MAtricks pool object. Having a reference to an existing MAtricks, adds referenced values in the Grid columns.
  - **Filter**:\
    This makes it possible to assign a filter or world to the recipe line.

* **Grid**:\
  These columns are the same as known from [MAtricks](/grandma3/2-3/matricks/). There is a set of columns for X, Y, and Z axes in the grid. The columns can be filtered by activating one or several of the **X**, **Y**, and **Z** in the top bar. This section also has columns for invert. Some of these are linked to X, Y, and Z. Some are not linked to an axis but a common setting:

  - **X**:**\
**Edit the value **X** of the MAtricks Editor.
  - **Y**:** \
**Edit the value **Y** of the MAtricks Editor.
  - **Z**:** \
**Edit the value **Z** of the MAtricks Editor.
  - **Group**:\
    The number of groups the selection is split into.
  - **Block**:\
    The number of fixtures blocked together.
  - **Wings**:\
    The number of wings the selection is split into.
  - **Width**:\
    This changes the width of the selection in the [Selection Grid](/grandma3/2-3/operate_selection/).
  - **InvertStyle**:\
    This defines if Invert is applied to Pan, Tilt, Pan and Tilt, or All attributes.
  - **PhaserTransform**:\
    Transform can be set to Mirror. This mirrors values depending on the other grid settings, for example, Blocks, Groups, Wings. Learn more in the [Transform topic](/grandma3/2-3/matricks_transform/).
  - **Invert, Inv, InvB, InvG, InvW**:\
    These are Yes/No inverting settings for each of the grid axes.

* **Layers**:\
  These are the timing layers. X, Y, or Z also needs to be active for any of the layer columns to be shown.

  - **Fade From / Fade To**:\
    The two fade values allow spreading the fade time over a range.
  - **Delay From / Delay To**:\
    The two delay values allow spreading the delay time over a range.
  - **Speed From / Speed To**:\
    The two speed values allow spreading the speed values over a range.
  - **Phase From / Phase To**:\
    The two phase values allow spreading the phase values over a range.

* **Shuffle**:\
  These are the shuffle columns. X, Y, or Z also needs to be active for any of the layer columns to be shown.

  - **Shuffle**:\
    This value can be set to shuffle the selection order.
  - **Shift**:\
    This value can be set to shift the selection in the selection grid.

* **X**, **Y**, and **Z**:\
  Each of the grid axes has columns. If the recipe only uses one or two axes, then the columns can be limited to only show the relevant columns.

|                                            |                                                                                                                            |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                  |
|                                            | The MAtricks and Shuffle settings are described in detail in the [MAtricks and Shuffle section](/grandma3/2-3/matricks/).  |

Recipes do not need information in all columns, but they can have information in all. They often only have information in a few columns.

##

---

## Create Recipes with the Edit Recipe Mode

Besides handling recipes in cues parts and presets, recipes can also be created and edited within the programmer. This mode is based on a [programmer workflow](/grandma3/2-3/operate_programmer/) for quickly and efficiently creating recipes. All pool item selections are logged, saved in a recipe, and then can be easily stored into presets and cues.

The Recipe Editor window is a handy tool to visualize and edit recipes while in edit recipe mode. For more information on the Recipe Editor window, see [above](/grandma3/2-3/recipes/#h2_1768861353).

![Update this description text.](/img/grandma3/2-3/recipe_editor_window_v2-2-18adb4.png)

Recipe Editor window

There are multiple ways to enable the edit recipe mode:​

- Tap Edit Recipe in the title bar of the recipe editor window.
- Enable Edit Recipes in the **At Overlay.**
- Use the [EditRecipe](/grandma3/2-3/keyword_editrecipe/) keyword.

While the edit recipe mode is enabled, Edit and Esc flash alternately. To disable the edit recipe mode, press Esc or use one of the options described above to toggle the edit recipe mode. Once the edit recipe mode is disabled, all pools work as usual.

Each object type that can be used for a recipe will have its pool window marked with a green ![](/img/grandma3/2-3/icon_cooking-pot_12_v1-7-f630d9.png), when edit recipe mode is enabled:

![Update this description text.](/img/grandma3/2-3/edit_recipe_mode_enabled_v2-1-3a46d0.png)

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
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                         |
|                                            | Make sure you set the Pool Action setting in the corresponding pools to **SelFix/At** or **At** so you can use them for recipes.  |

For creating recipes with the Edit Recipe mode, it is useful to have a groups pool, several preset pools, a sequence pool, and the recipe editor window visible:

![Update this description text.](/img/grandma3/2-3/recipe_editor_mode_and_window_v2-1-b70f43.png)

Several pool windows and recipe editor window with edit recipe mode enabled

The following steps outline the general workflow for creating recipes. For a practical example, see [below](/grandma3/2-3/recipes/#h2_1689083776).

1. Activate the Edit Recipe mode.
2. Select groups. The selected groups are indicated by a green frame around the pool objects. Multiple groups can be selected at the same time.
3. Select presets. Presets that are not compatible with fixtures of the selected group will be grayed out. All objects selected for recipes of the currently selected groups are indicated by a green frame in their pool windows. The last selected preset and the corresponding recipe line in the recipe editor, will be displayed with rotating green dots around the objects. These rotating dots indicate it as the target of MAtricks or filter values. \
   Tap on a selected object again to deselect it. To select an already used preset (which has a green frame), press MA and tap the preset. Now MAtricks, filters, and worlds can be applied to the corresponding recipe. The corresponding line in the recipe editor is displayed with a green dotted frame.\
   Multiple values can be added to a selection, a single recipe line is created for each selected value in the recipe editor window. Also different selections can be defined, for example, by tapping Group 2. A brown frame around pool objects indicates the values for previous selections, for example, Group 1. Tap Group 1 again and the previously defined values for this selection are highlighted in green again. A feature group indicator bar at the bottom of the group objects shows the feature groups that are active in the recipe for this very group.
4. Store the new recipe to a cue, cue part, or a preset. Storing a recipe clears the recipe editor and only groups will remain as selected objects. 

The order of recording selections and values has an impact on how the recipe is handled. The last recipe line determines the output if several recipe lines with the same selection refer to the same attribute. Storing recipes into [Preset Pools](/grandma3/2-3/presets_pools/) for specific feature groups, for example the Color preset pool, stores not only values for Colors, but all recipe lines of the selected programmer part.

Executing the [EditRecipe](/grandma3/2-3/keyword_editrecipe/) keyword with a corresponding cue, cue part, or preset, enables the edit mode for the specific object in the recipe editor mode. Press Off and tap a group or a preset to remove the corresponding recipe line. If a group or a preset has multiple lines linked, all corresponding lines will be removed. 

It is not possible to directly enter values into a recipe, they have to be stored in a preset first. If no preset is selected, the values are put directly into the programmer. 

|                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                  | Values that are entered for creating a recipe, do not overwrite or replace values that are directly entered into the programmer. The automatically cooked recipes are treated with low priority. To actively overwrite or merge programmer values, cook the programmer using the [Cook Keyword](/grandma3/2-3/keyword_cook/). Also MAtricks values will only work with recipes and will not affect the programmer.  |

Open the [MAtricks Editor](/grandma3/2-3/matricks/) to define specific MAtricks values to the recipe lines. While using the MAtricks editor to edit a recipe, the editor is displayed with "(Recipe)" and the green pot icon in the title bar. The rotating dots around the preset and recipe line indicate the target for MAtricks values.\
To add MAtricks, Worlds and Filters to the last created recipe, tap on the objects in the pool. Pool objects of MAtricks, Worlds, and Filters have a brown colored frame around them when they are used by a recipe:

![Update this description text.](/img/grandma3/2-3/matricks_editor_and_pools_with_edit_recipemode_enabled_v-2-1-479238.png)

MAtricks Editor with a selected MAtricks and Filter pool object 

---
