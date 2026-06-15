---
title: "Cue Recipes"
description: "Recipes can be used in cues and presets. See the Recipe topic to learn the basics of recipes and the Recipe Preset topic to learn about using recipes in presets"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/cue_recipe.html"
scrapedAt: "2026-06-15T18:25:25.186Z"
pagefind: false
---
Recipes can be used in cues and presets. See the [Recipe](/grandma3/2-3/recipes/) topic to learn the basics of recipes and the [Recipe Preset](/grandma3/2-3/presets_recipes/) topic to learn about using recipes in presets. It is a good idea to read the recipe topic before this one.

This topic is about recipes in cues.

A recipe can contain multiple lines describing what should happen based on a set of information. The recipe "cooks" values into the cue. 

A recipe line can contain information about a selection, values, MAtricks reference, filter, individual fade, delay, speed, phase values, and grid values.

Values from recipes can be combined with conventionally stored values.

## Adding Cue Recipes

Recipes are added to each cue part in a sequence.

The best way to access the recipes is by turning On the Show Recipes mask in a [Sequence Sheet](/grandma3/2-3/cue_sequence_sheet/):

![](/img/grandma3/2-3/window_sequence-sheet_recipes_v2-3-6bc543.png)

Sequence sheet with cue recipes showing

This gives access to adding, editing, and deleting recipe lines.

Showing the recipe lines in the sequence sheet adds a filter line that allows filtering of the different elements in the recipe - not to be confused with the Filter column on the recipes. This line can be moved up or down by tapping and holding the line and sliding it up and down. Release the screen at the desired location.

Learn more about this line and the different columns in the [Recipes](/grandma3/2-3/recipes/) topic.

The cells in the recipe lines can be edited and more lines can be added by tapping and holding the New Recipe.

Each line can contain a set of information.

The MAtricks reference column and the individual MAtricks columns only take effect when there is ranged data from, for instance, a [MAgic preset](/grandma3/2-3/presets_create/) or a timing range.

Making changes to the recipe line automatically cooks the line using the merge option. Recipe lines without a group do not auto-cook.

Deleting an already cooked recipe line does not auto-cook. The recipe needs to be manually cooked to reflect the new result.

Cooking can be done using the [Cook keyword](/grandma3/2-3/keyword_cook/). An entire sequence can be cooked in one command.

The general syntax for cook is: Cook \[object] (/option)

There are four options:

- **Merge** - Default if nothing else is specified. Removes values that are flagged as cooked, then cooks the values from the recipes and also replaces values at the destination based on the recipe ingredients.
- **MergeLowPriority** - Replace existing cooked data and add new data based on the recipe ingredients, but do not change non-cooked data.
- **Overwrite** - Delete all contents of the target object and cook new data based on the recipe ingredients.
- **Remove** - Delete any data from the target object that has been cooked but never updated.

Executing a cook command without an option keyword opens a pop-up prompting for which option to use. It also includes a cancel option that cancels the cook command.

A cue with recipe information gets the small pot icon in the name column. It does not indicate whether there are cooked values or not; it only indicates if there are recipe lines and if the lines are valid.

Activating the Track Sheet mode in the Sequence Sheet makes the attribute values visible for each cue. Values that come from a recipe have a small green marker in the upper right corner.

![This example shows the green Recipe marker highlighted by a red arrow.](/img/grandma3/2-3/window_sequence-sheet_recipes-track-marker_v2-3-0f55fa.png)

Sequence Sheet in Track Sheet mode showing the Recipe marker
