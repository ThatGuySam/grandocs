---
title: "Delete Groups"
description: "Groups can be deleted."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/group_delete.html"
scrapedAt: "2026-06-12T21:24:51.198Z"
---
Groups can be deleted. 

If the group is used (referenced) somewhere, then a pop-up asks for confirmation.

![Update this description text.](/img/grandma3/2-4/popup_delete-group_v2-3-e8e240.png)

Deletion pop-up asking for confirmation

Tapping OK deletes the group. Tapping Cancel does not perform the deletion.

If the deleted group is used in a recipe, then the reference is deleted, and the recipe no longer contains a selection. Learn more about recipes in the [Recipe topic](/grandma3/2-4/recipes/).

If the group is assigned to an executor and used as a Group Master. Then the executor will be empty after deleting the group. Read more in the [Group Master topic](/grandma3/2-4/group_master/).

The deletion can be oopsed and then the references are back.

This is the general deletion syntax:

Delete Group \["Group\_Name" or Group\_Number]

---

There are several ways to delete a Group Pool object. Use one of the following.

- Using the [Delete keyword](/grandma3/2-4/keyword_delete/).\
  To delete group number 1, type:

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Delete Group 1 |
