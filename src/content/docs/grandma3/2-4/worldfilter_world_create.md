---
title: "Create a World"
description: "Worlds are created in the programmer and stored in the world pool."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/worldfilter_world_create.html"
scrapedAt: "2026-06-12T21:24:52.189Z"
---
Worlds are created in the programmer and stored in the world pool.

Worlds may be thought of as matrix with rows (fixtures) and columns (attributes), and being in a world may block programmer access to rows and/or columns in sheets. 

The created world will contain the rows of the current fixture selection and the columns of any active attribute. All columns/attributes are included in the created world if no attributes were active. If no fixtures were selected, then all fixtures are a part of the world. If a world, other than World 1 is selected, a world icon (![](/img/grandma3/2-4/icon_world_v2-1-7edec9.png)) is displayed in the title bar of sheets and windows that are affected of the world selection. Additionally, the status is displayed in the command line with the number of the selected world, if the status is set to **On Activity** in the [Status Center](/grandma3/2-4/statuses/). 

Worlds from the world pool can also be used for sheet masking. For more information read the [Sheet Masking](/grandma3/2-4/worldfilter_filter_rules/) topic.  

---

## Examples

**Requirement:**

Have a world pool and [fixture sheet](/grandma3/2-4/operate_fixture_sheet/) visible on a screen.

### Create a World with Fixture 1 to 5

1. Clear the programmer.
2. Select fixtures 1 thru 5 (or any 5 fixtures in your show).
3. Press Store followed by an empty world in the **World Pool**.
4. Tap the newly created world.

Now there is only programming access to fixtures 1 thru 5, reflected by the fixture sheet. All attributes are available.

![Fixture sheet with World named "Fixt 1 Thru 5" active.](/img/grandma3/2-4/window_fixture_sheet_world_example1_v2-1-c1341f.png)

Fixture sheet with World named "Fixt 1 Thru 5" active.
