---
title: "Activation Group"
description: "An activation group is used when there are several attributes where it makes sense that they are activated together."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/patch_attribute_activation_group.html"
scrapedAt: "2026-06-15T18:25:20.803Z"
pagefind: false
---
An activation group is used when there are several attributes where it makes sense that they are activated together.

For instance, storing pan and tilt values together often makes sense. Having them in the same activation group makes this possible. Activating one of them also activates the other.

There are factory-defined groups that are used with the factory-defined attributes. Custom groups can be made and then used in the [Attribute Definitions](/grandma3/2-3/patch_attribute_definitions/). The group needs to be created before it can be used.

![](/img/grandma3/2-3/menu_patch_activation-groups_v1-7-39a4b9.png)

_The standard Activation Groups_

The menu has the following columns:

- **Lock**:\
  This can be used to lock the row from being edited.
- **No**:\
  This is an auto-generated row number.
- **Name**:\
  This is the name of the activation group.
- **Attrib Count**:\
  This is a counter showing how many attributes are part of the group.
- **Deactivation Group**:\
  This column selects a **Deactivation Group** for two or more activation groups. Read more about this in the [Deactivation Group topic](/grandma3/2-3/patch_attribute_deactivation_group/).

|                                                  |                                                                                                                                       |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                        |
|                                                  | Editing the existing Activation Groups is not recommended. Editing them can result in not automatically storing all expected values.  |

## Create and Use a New Activation Group

To create a new activation group:

1. Press Menu.
2. Tap Patch.
3. Tap Attribute Definitions on the left side.
4. Tap Activation Groups on the top tabs.
5. Select the line in the list, where the new group should be above.
6. Tap Insert New ActivationGroup at the bottom.
7. Edit the name field to add a descriptive name.
8. Optionally edit the **Deactivation Group** cell to add a deactivation group.
9. Tap Attribute Definitions on the top tabs.
10. Assign the new group to the relevant attributes in the **Attribute Definitions** menu.
11. When finished, close the menus and tap Save and Exit in the pop-up asking if the changes should be kept.

For more information on how to use the **Activation Group** read the [Attribute Definition topic](/grandma3/2-3/patch_attribute_definitions/).
