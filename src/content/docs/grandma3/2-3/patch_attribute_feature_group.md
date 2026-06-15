---
title: "Feature Group"
description: "Feature groups are part of the structure and hierarchy of the entire show."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/patch_attribute_feature_group.html"
scrapedAt: "2026-06-15T18:25:20.807Z"
pagefind: false
---
Feature groups are part of the structure and hierarchy of the entire show.

This structure is visible and used in the [Feature Group Control Bar](/grandma3/2-3/ws_eb_feature_group_control_bar/) in the default [Encoder Bar](/grandma3/2-3/ws_encoder_bar/).

|                                                  |                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                                                                                                                 |
|                                                  | Be aware that editing the Feature Groups settings can have serious consequences for the structure of the show. Editing the existing groups is only recommended if the consequences is known. Maybe use the custom [Encoder Bars](/grandma3/2-3/ws_eb_encoder_pool/) to manage encoder set up.  |

A **Feature Group** contains at least one **Feature**.

The feature is assigned to attributes in the [Attribute Definitions](/grandma3/2-3/patch_attribute_definitions/). All attributes need to have an assigned feature.

A feature group automatically has a **Preset Pool** where the attributes in the feature group can store values. Read more about presets in the [Presets topics](/grandma3/2-3/presets/).

The feature group and feature need to be created before they can be used.

![](/img/grandma3/2-3/menu_patch_feature-groups_v2-2-3d6e8b.png)

_The standard Feature Groups with Features_

The menu has 6 columns:

- **Lock**:\
  This can be used to lock the row from being edited.
- **No**:\
  This is an auto-generated row number for the feature group. The number in parentheses is the number of features inside the group.
- **Name**:\
  This is the name of the feature. This needs to be a unique name.
- **Pretty**:\
  This is a custom label for the feature group. It can have local characters or a different spelling. For instance "Color" could be labeled "Colour".
- **Preset Mode**:\
  This is the default type used when storing values in the preset pool.
- **Attrib Count**:\
  This is information only. This is a counter showing how many attributes use the feature.
- **Log Channels**:\
  This is information only. It shows how often the feature is used in logical channels of fixture types added to the show.

## Create and Use a New Feature Group and Feature

Create a new feature group and feature following these steps.

1. Press Menu on the console.
2. Tap Patch to select the patch menu.
3. Tap Attribute Definitions on the left side.
4. Tap Feature Groups on the top tab.
5. Select the row in the list, where the new group should be above.
6. Tap Insert New Feature Group at the bottom.
7. Fill in the name of the group.
8. Tap the triangle icon ![triangle-right](/img/grandma3/2-3/triangle-right-38abb5.png) next to the new group to expand the group.
9. Tap the New Feature area in the new group.
10. Tap Insert and write the name of the feature. Repeat until all the needed features have been created.
11. Tap Attribute Definitions on the top tab.
12. Assign the new features to the relevant attributes.
13. When finished close all the menus and tap Save and Exit in the pop-up asking if the changes should be kept.

For more information on how to use the **Feature Group** read the [Attribute Definition topic](/grandma3/2-3/patch_attribute_definitions/).
