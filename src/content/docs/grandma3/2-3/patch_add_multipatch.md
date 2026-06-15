---
title: "Add Multipatch Fixtures"
description: "Multipatch fixtures are virtual fixtures where every parameter follows the primary fixture (the fixture they mirror)."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/patch_add_multipatch.html"
scrapedAt: "2026-06-15T18:25:20.188Z"
pagefind: false
---
Multipatch fixtures are virtual fixtures where every parameter follows the primary fixture (the fixture they mirror).

These multipatch fixtures can be used when multiple physical fixtures are controlled by the same ID. The virtual fixtures do not cost any extra parameters as long as the primary fixture has a patched and granted DMX address. They can have their own patch address and there will be DMX output to these addresses. For more information about granted in DMX Universes, see [DMX Universes](/grandma3/2-3/patch_dmx_universe/).

The multipatch fixtures can be assigned to [layouts](/grandma3/2-3/layouts/) and positioned in the [3D](/grandma3/2-3/patch_3d_viewer/). They are not part of the selection grid and can, therefore, not be used in MAtricks.

Changing the parameters on a selected multipatch fixture actually changes the parameters of the primary fixture. All multipatched fixtures to this primary fixture will reflect the changed values.

 

Changing the location of the primary fixtures in the patch or adding multipatch fixtures to other fixtures might renumber all the multipatch fixtures.

Multipatch fixtures can be selected individually. The selection color is light red instead of yellow (default colors). In the fixture sheet, the primary ID will flash between yellow and light red when a multipatch fixture is selected.

They can be selected using the command line using their unique multipatch CID or by an index number of the primary fixture.

### Example

Have a setup like this:

![](/img/grandma3/2-3/img_live-patch_multi-patched-fixtures_v1-7-7a0dd3.png)

Patch with two fixtures with two multipatched fixtures each

The first multipatch fixture on FID 2 has the hidden multipatch CID number of 3 - it is the third multipatch fixture in the entire patch.

It can be selected by this syntax: Multipatch 3 or Fixture 2 Multipatch 1.

|                                            |                                                                                                                                                                                                                                                                     |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                                                           |
|                                            | The hidden multipatch CID should not be used to select the fixtures. The CID number will possibly change if changes are made to patch. The number is not fixed. It is recommended to use the index number based on the primary fixture (the second example above).  |

Learn more about the keyword in the [Multipatch keyword](/grandma3/2-3/keyword_multipatch/) topic.

## Add Multipatch Fixtures

**Requirement:**

Have some fixtures patched to the show.

1. Enter the Patch menu by pressing Menu and then tap Patch.
2. Select the primary fixture that needs multipatched fixtures.
3. Tap Create Multipatch.
4. Enter the number of needed multipatch fixtures in the **Amount of MP fixtures** pop-up and confirm it by tapping Please.

The new multipatched fixtures can now get a DMX patch address. The multipatch fixtures are limited in what can be changed, but name and location information are part of what can be changed for the fixtures.

5. When all needed information is assigned to the new multipatch fixtures, the patch menu can be closed by tapping ![](/img/grandma3/2-3/icon_cross_v0-1-fe6968.png) and saving the changes.

Tap the video below to see the example.

[Vimeo video](https://player.vimeo.com/video/994966153?title=0\&byline=0\&portrait=0\&color=ffeb0f)
