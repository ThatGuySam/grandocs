---
title: "Recipes"
description: "Recipes can be a very useful tool for touring shows or when the changes are expected."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/recipes.html"
scrapedAt: "2026-06-12T21:24:57.084Z"
---
Recipes can be a very useful tool for touring shows or when the changes are expected.

Recipes can be stored in cue parts and presets.

![](/img/grandma3/2-4/img_recipe_data-flow_v1-7-d3bf5a.png)

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

![](/img/grandma3/2-4/img_recipe_output-decision-flow_v1-7-541800.png)

Output decision flowchart

---

A recipe contains one or multiple recipe lines describing what should happen based on a set of information. The recipe can "cook" values into the cue part, preset, or programmer. This cooked data is marked by a small pot icon ![](/img/grandma3/2-4/icon_cooking-pot_12_v1-7-c4818c.png) and the cooked data can easily be removed again if needed.

A recipe line can contain information about a selection of fixtures, group, preset, MAtricks, individual fade, delay, speed, and phase values.

Values from recipes can be combined with conventionally stored values.

The flexibility in the recipe system allows for a variety of uses. The recipes could be used to:

- Create recipe presets for groups referencing other presets for a flexible fixture setup.
- Create template presets with ranged values that can be applied to a flexible selection of fixtures.
- Cues that contain a recipe on how different elements create the desired look.

If a recipe is present in a cue, then there is a small pot icon. It is an indicator for the most recent running cooking process:

- ![](/img/grandma3/2-4/icon_pot-green_12_v2-1-26915a.png) Green pot: The most recent cooking process including all its recipe lines was successful.
- ![](/img/grandma3/2-4/icon_pot-red_12_v2-1-c23b88.png) Red pot: At least one recipe line of the most recent cooking process did not cook.
- ![](/img/grandma3/2-4/icon_pot-green-open_12_v2-1-269c0e.png) Open pot: This is a standard recipe template.
- ![](/img/grandma3/2-4/phaser_recipe_pot-b0f83e.png) Open violet pot: This is a phaser recipe template.
- ![](/img/grandma3/2-4/icon_pot-orange_12_v2-3-3f0125.png) Orange pot: After the most recent cooking process, there is data from recipes (cooked) and uncooked data in the cue or cue part. 
- ![](/img/grandma3/2-4/icon_cooking-pot_v3-2-4-a51f58.png) Violet pot: This is a phaser recipe.

---

The grandMA3 software offers multiple tools and methods to create and edit recipes. Read the [Cue Recipe](/grandma3/2-4/cue_recipe/) and [Preset Recipe](/grandma3/2-4/presets_recipes/) topics for details on how to create and edit recipes directly in cues and presets. Additionally recipes can be created with the programmer, the [Recipe Editor Window](/grandma3/2-4/recipe-editor-window/), and the [Edit Recipe Mode](/grandma3/2-4/edit-recipe-mode/).
