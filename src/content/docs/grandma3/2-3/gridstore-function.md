---
title: "GridStore Function"
description: "The fixture types imported and patched in your show file may have been built with the right sub-fixture arrangement."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/gridstore-function.html"
scrapedAt: "2026-06-15T18:25:22.310Z"
pagefind: false
---
The fixture types imported and patched in your show file may have been built with the right sub-fixture arrangement.

For example, Martin Professional Mac Aura PXL:

![](/img/grandma3/2-3/window_fixture-sheet_sub-fixture_example-203-e48833.png)

The fixture type editor sets the grid position of the sub-fixtures. For more information, see [Build Fixture Types](/grandma3/2-3/ft_build/) and [Insert Geometries](/grandma3/2-3/ft_insert_geometries/).

The grid position of sub-fixtures can also be transferred to fixture types using the [GridStore](/grandma3/2-3/keyword_gridstore/) keyword.

Requirements for the following example:

- One patched GLP JDC2 IP set to M4 - Segment 12-24 mode. See [Patch and Fixture Setup](/grandma3/2-3/patch/).
- Set FID to 1.
- An open selection grid window.

Workflow:

1. Select fixture 1.3 and press Down. The selection grid looks like this:

![](/img/grandma3/2-3/window_selection_grid_gridstore_exemple-201-9d914d.png)

1. Tap Setup to enter setup mode.
2. Position the sub-fixtures and exit setup. For more information, see [Selection Grid Setup Mode](/grandma3/2-3/selection-grid-window-settings/). 

The selection grid could look like this:

![](/img/grandma3/2-3/window_selection_grid_gridstore_exemple-202-afc540.png)

1. Type the keyword **GridStore** in the command line and press Please.

The sub-fixtures grid positions are transferred to the fixture type in the show file. 

The arrangement for the selected fixtures will apply to other fixtures of the same type.

You can use the grid settings per fixture when the same fixture type is used, for example, hung and in a floor position on stage. For more information, see [Add Fixtures to the Show](/grandma3/2-3/patch_add_fixtures/#h2_127376776).
