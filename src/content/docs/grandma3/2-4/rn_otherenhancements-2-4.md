---
title: "Other Enhancements 2.4"
description: "Read more about the context area and new recipe editor settings in Features."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/rn_otherenhancements-2-4.html"
scrapedAt: "2026-06-12T21:25:48.028Z"
---
![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Updated predefined content:

- Updated demo shows:

  - Demoshow\_grandMA3
  - MA\_StartShow
  - Simple\_Show

- Updated the predefined MVR demo stage.

- Changed the default render qualities in the render qualities pool. The new defaults are **No Beam**, **Line**, **Low**, **Standard**, **High**, and **Ultra**. By default, **Standard** is selected in a new show.

- New predefined macros

- New predefined filters

- New predefined symbols

- Added predefined phaser recipe presets.

- Updated predefined phaser presets. 

- Added predefined shapes.

- Improved the Sequence Sheet view of new shows.

- Group By ID Type is enabled by default in the fixture sheet settings.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved tags:

- The tags pool now has Pool Action. [Pool ac](/grandma3/2-4/wvm_settings/#h3_1520802561)[tions](/grandma3/2-4/wvm_settings/#h3_1520802561) can be set up per tags pool or individually per object.
- You can assign tags as layout elements in the layout viewer.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved pools:

- Added First Index to the pool settings of presets and the following pools: Filters, Groups, MAtricks, Sequences, Shapes, and Worlds. 

  - Set values between **1 - 9999** to define where a pool object should be stored. An individually defined first index is indicated by **>=x** in the top left corner of the corresponding pool. For example, setting First Index to **195** in the sequence pool and then executing Store Sequence will create a pool object at slot 195. If the slot is occupied, the next free slot will be used instead.
  - First Index can be set up per user profile.

![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved MAtricks:

- Linked and unlinked shuffle modes now work in combination with Rx, Ry, and Rz:

  - Rx, Ry, or Rz are toggled **on**: Only existing grid positions on the selected axis are taken into account.
  - Rx, Ry, or Rz are toggled **off**: The entire range on the axis is taken into account.
  - **Linked****:** Fixtures that are located on the same point of the selected axis are triggered at the same time.
  - **Unlinked****:** Parallel lines are shuffled independently to each other.

- The value **0°** is now available as a predefined input option for phase values.

- MAtricks objects with more than one property are indicated by ![](/img/grandma3/2-4/icon_15_matricks_v2_0-3ddf5f.png) in the pool object.



![](/img/grandma3/2-4/icon_arrow_up_right_v0-9-ccf6e7.png) Improved presets:

- The new recipe context area is displayed in the lower part of the preset editor. To access the recipe editor settings, tap ![](/img/grandma3/2-4/gear-8cbf36.png) in the top left corner.\
  Read more about the context area and new recipe editor settings in [Features](/grandma3/2-4/rn_features-2-4/#h3_1771291726).

- Removed **Auto** in Preset Modes of the Store Settings pop-up. Read more about presets in [Features](/grandma3/2-4/rn_features-2-4/#h3_1771291726).

- If a recipe is stored into an empty preset, the preset mode automatically changes to **Selective**.

- Added Recipe Mode to the [Store Settings](/grandma3/2-4/cue_store_settings_preferences/) pop-up, when storing recipes into presets. The options are: 

  - **Normal**: Stores recipe presets with the selected fixtures in the programmer.
  - **NoSelection**: Stores recipe presets without the selection.\
    To store a recipe without selection via command line, use this syntax: Store \["FeatureGroup\_Name" or FeatureGroup\_Number] /Recipe "NoSelection"
