---
title: "Create New Groups"
description: "Groups are created by storing them in the Group Pool with a selection of fixtures."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/group_create.html"
scrapedAt: "2026-06-12T21:24:50.884Z"
---
Groups are created by storing them in the [Group Pool](/grandma3/2-4/group/) with a selection of fixtures.

The groups store the fixture selection, the grid information, and the fixtures' selection order (this is also a grid).

Grid information is 3D position information indicating the position relationship between the fixtures. It is not the location on the 3D stage. For more information, see [Selection Grid topic](/grandma3/2-4/operate_selection/).

The order and grid information are essential for ranged value input or when creating [Phasers](/grandma3/2-4/phaser/).

|                                                  |                                                                             |
| ------------------------------------------------ | --------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                              |
|                                                  | Groups do not store values! - Only the fixture selection, order, and grid.  |

Use one of the following methods to store a group:

Please make sure the correct fixtures are selected and in the correct order.

1. Store the group using a syntax like this: Store Group \[Group\_Number] (\["Group\_Name"]). The two needed keywords are [Store](/grandma3/2-4/keyword_store/) and [Group](/grandma3/2-4/keyword_group/).

To store group 3, for example:

1. Press Store Group 3 Please

When storing to an existing group, the store mode pop-up opens:

![](/img/grandma3/2-4/pop_up_store_mode_v2-3-d0d77f.png)

Store mode pop-up.

When Grid Merge Mode is set to **Append X** (the default setting), the selected fixtures will be added to the next available X coordinate in the selection grid. When it is **Off**, then the current grid position is stored and merged into the group.

The setting can be saved as a new default by tapping Save Defaults. The current defaults can be loaded by tapping Load Defaults. The **Grid Merge Mode** is the only setting stored in the defaults.

Existing groups can be edited using the [Edit Group pop-up](/grandma3/2-4/group_edit/).

Labeling the group is not required, but it is a good idea. It can be done using any method described in [Label pool objects](/grandma3/2-4/wvm_pool_label/) or the Edit Group pop-up.
