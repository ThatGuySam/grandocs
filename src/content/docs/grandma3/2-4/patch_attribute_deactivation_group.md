---
title: "Deactivation Group"
description: "Deactivation Groups are groups of Activation Groups. A deactivation group makes sure that only one set of valid attribute values are active for the actual DMX c"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/patch_attribute_deactivation_group.html"
scrapedAt: "2026-06-12T21:24:47.867Z"
---
**Deactivation Groups** are groups of **Activation Groups**. A deactivation group makes sure that only one set of valid attribute values are active for the actual DMX channels being output. This is to avoid DMX channels getting conflicting information. The deactivation group knocks out other groups of attributes when a value is assigned to a different activation group than the one already active.

For example, when having active pan and/or tilt values in the programmer, the deactivation group "Position" takes care that these attributes will be knocked out when activating XYZ attributes instead.

![](/img/grandma3/2-4/menu_patch_deactivation-groups_v2-4-b27e04.png)

Default deactivation groups

By default, there are 2 automatically generated deactivation groups: Position and Color.

The menu has the following columns:

- **Lock**:\
  This can be used to lock the row from being edited.
- **No**:\
  This is an auto-generated row number.
- **Name**:\
  This is the name of the activation group.
- **Act Groups Count**:\
  This is the number of activation groups using the deactivation group.

Each column can be filtered by entering input in the gray-green input fields at the top of each column.

The deactivation groups are assigned to activation groups in the **Activation Groups** tab.

|                                                  |                                                                                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                            |
|                                                  | Editing the existing Deactivation Groups is not recommended. Editing them can result in conflicting values being stored.  |

## Create and Use a New Deactivation Group

Create a new deactivation group following these steps.

1. Press Menu.
2. Tap Patch.
3. Tap Attribute Definitions on the left side.
4. Tap Deactivation Groups on the top tabs.
5. Select the line in the list, where the new group should be above.
6. Tap Insert New DeactivationGroup at the bottom.
7. Edit the name field to add a descriptive name.
8. Tap Activation Groups on the top tabs.
9. Assign the new deactivation group to the relevant activation groups in the **Activation Groups** menu.
10. When finished, close the menus and tap Save and Exit in the pop-up asking if the changes should be kept.
