---
title: "GridStore Function"
description: "The fixture types imported and patched in your show file may have been built with the right subfixture arrangement."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/gridstore-function.html"
scrapedAt: "2026-06-12T21:24:49.380Z"
---
The fixture types imported and patched in your show file may have been built with the right subfixture arrangement.

For example, Martin Professional Mac Aura PXL:

![](/img/grandma3/2-4/window_fixture-sheet_sub-fixture_example-203-b4bf6f.png)

The fixture type editor sets the grid position of the subfixtures. For more information, see [Build Fixture Types](/grandma3/2-4/ft_build/) and [Insert Geometries](/grandma3/2-4/ft_insert_geometries/).

The grid position of subfixtures can also be transferred to fixture types using the [GridStore](/grandma3/2-4/keyword_gridstore/) keyword.

Requirements for the following example:

- One patched GLP JDC2 IP set to M4 - Segment 12-24 mode. See [Patch and Fixture Setup](/grandma3/2-4/patch/).
- Set FID to 1.
- An open selection grid window.

Workflow:

1. Select fixture 1.3 and press Down. The selection grid looks like this:

![](/img/grandma3/2-4/window_selection_grid_gridstore_exemple-201-dfe73c.png)

1. Tap Setup to enter setup mode.
2. Position the subfixtures and exit setup. For more information, see [Selection Grid Setup Mode](/grandma3/2-4/selection-grid-window-settings/). 

The selection grid could look like this:

![](/img/grandma3/2-4/window_selection_grid_gridstore_exemple-202-ba822d.png)

1. Type the keyword **GridStore** in the command line and press Please.

The subfixtures grid positions are transferred to the fixture type in the show file. 

The arrangement for the selected fixtures will apply to other fixtures of the same type.

You can use the grid settings per fixture when the same fixture type is used, for example, hung and in a floor position on stage. For more information, see [Add Fixtures to the Show](/grandma3/2-4/patch_add_fixtures/#h2_127376776).
