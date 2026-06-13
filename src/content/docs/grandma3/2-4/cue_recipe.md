---
title: "Cue Recipes"
description: "Recipes can be used in cues and presets. See the Recipe topic to learn the basics of recipes and the Recipe Preset topic to learn about using recipes in presets"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/cue_recipe.html"
scrapedAt: "2026-06-12T21:24:55.293Z"
---
Recipes can be used in cues and presets. See the [Recipe](/grandma3/2-4/recipes/) topic to learn the basics of recipes and the [Recipe Preset](/grandma3/2-4/presets_recipes/) topic to learn about using recipes in presets. It is a good idea to read the recipe topic before this one.

This topic is about recipes in cues.

A recipe can contain multiple lines describing what should happen based on a set of information. The recipe "cooks" values into the cue. 

A recipe line can contain information about a selection, values, MAtricks reference, filter, individual fade, delay, speed, phase values, and grid values.

Values from recipes can be combined with conventionally stored values.

## Adding Cue Recipes

Recipes are added to each cue part in a sequence.

The best way to access the recipes is by turning On the Show Recipes mask in a [Sequence Sheet](/grandma3/2-4/cue_sequence_sheet/):

![](/img/grandma3/2-4/window_sequence-sheet_recipes_v2-4-1382be.png)

Sequence sheet with cue recipes showing

This gives access to adding, editing, and deleting recipe lines.

Showing the recipe lines in the sequence sheet adds a gray horizontal divider that allows separating the cues from the recipes. This line can be moved up or down by tapping and holding the line and sliding it up and down. Release the screen at the desired location.

Learn more about this line and the different columns in the [Recipes](/grandma3/2-4/recipes/) topic.

The cells in the recipe lines can be edited, and more lines can be added by tapping and holding the New Recipe or by tapping the relevant plus icon in the toolbar on the left side.

Each line can contain a set of information.

The MAtricks reference column and the individual MAtricks columns only take effect when there is ranged data from, for instance, a [MAgic preset](/grandma3/2-4/presets_create/) or a timing range.

Making changes to the recipe line automatically cooks the line using the Merge Low Priority option, not the normal Merge. Recipe lines without a group do not auto-cook.

Deleting an already cooked recipe line also auto-cooks any remaining recipe lines.

Manual cooking can be done using the [Cook keyword](/grandma3/2-4/keyword_cook/). An entire sequence can be cooked in one command.

The general syntax for cook is: Cook \[Object] (/Option)

There are four options:

- **Merge** - Removes values flagged as cooked, then cooks the values from the recipes, and replaces values at the destination based on the recipe ingredients.
- **MergeLowPriority** - Default if nothing else is specified. Replace existing cooked data and add new data based on the recipe ingredients, but do not change non-cooked data.
- **Overwrite** - Delete all contents of the target object and cook new data based on the recipe ingredients.
- **Remove** - Delete any data from the target object that has been cooked but never updated.

Executing a cook command without an option keyword opens a pop-up prompting for which option to use. It also includes a cancel option that cancels the cook command.

A cue with recipe information gets the small pot icon in the name column. It does not indicate whether there are cooked values or not; it only indicates if there are recipe lines and if the lines are valid. Learn about the different color indications of the pot icon in the [Recipe topic](/grandma3/2-4/recipes/).

Activating the Track Sheet mode in the Sequence Sheet makes the attribute values visible for each cue. Values from a recipe have a small green marker in the upper-right corner.

![This example shows the green Recipe marker highlighted by a red arrow.](/img/grandma3/2-4/window_sequence-sheet_recipes-track-marker_v2-4-7d1a08.png)

Sequence Sheet in Track Sheet mode showing the Recipe marker
