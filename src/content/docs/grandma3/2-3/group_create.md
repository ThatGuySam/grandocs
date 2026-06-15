---
title: "Create New Groups"
description: "Groups are created by storing them in the Group Pool with a selection of fixtures."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/group_create.html"
scrapedAt: "2026-06-15T18:25:23.341Z"
pagefind: false
---
Groups are created by storing them in the [Group Pool](/grandma3/2-3/group/) with a selection of fixtures.

The groups store the fixture selection, the grid information, and the fixtures' selection order (this is also a grid).

Grid information is 3D position information indicating the position relationship between the fixtures. It is not the location on the 3D stage. For more information, see [Selection Grid topic](/grandma3/2-3/operate_selection/).

The order and grid information are essential for ranged value input or when creating [Phasers](/grandma3/2-3/phaser/).

|                                                  |                                                                             |
| ------------------------------------------------ | --------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                              |
|                                                  | Groups do not store values! - Only the fixture selection, order, and grid.  |

Use one of the following methods to store a group:

Please make sure the correct fixtures are selected and in the correct order.

1. Store the group using a syntax like this: Store Group \[my\_group\_number]. The two needed keywords are [Store](/grandma3/2-3/keyword_store/) and [Group](/grandma3/2-3/keyword_group/).

To store group 3, for example:

1. Press Store Group 3 Please

When storing to an existing group, the store mode pop-up opens:

![](/img/grandma3/2-3/pop_up_store_mode_v1-9-2fdc08.png)

Store mode pop-up.

When Grid Merge Mode is set to **Append X** (the default setting), the selected fixtures will be added to the next available X coordinate.

Read the [Selection Grid topic](/grandma3/2-3/operate_selection/) for information about positioning the fixtures in a grid before storing the group.

Existing groups can be edited using the [Edit Group pop-up](/grandma3/2-3/group_edit/).

Labeling the group is not required, but it is a good idea. You can do this using any method described in [Label pool objects](/grandma3/2-3/wvm_pool_label/) or the Edit Group pop-up.
