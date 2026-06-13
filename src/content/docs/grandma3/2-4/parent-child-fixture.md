---
title: "Parent Child Fixture Behavior"
description: "When a fixture has one or more subfixtures, changing the values of an attribute of a subfixture that doesn't exist will change the values of the corresponding a"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/parent-child-fixture.html"
scrapedAt: "2026-06-12T21:24:48.267Z"
---
When a fixture has one or more subfixtures, changing the values of an attribute of a subfixture that doesn't exist will change the values of the corresponding attribute of the main fixture. See [Parent Child Concept](/grandma3/2-4/csk_parent_child/).

To understand better, follow the steps below.

Requirements for the following examples:

1. Patch an Ayrton AlienPix RS and select mode Extended 16 Bit (52 ch). For more information, see [Patch and Fixture Setup](/grandma3/2-4/patch/).
2. Set the fixture ID (FID) to 1.
3. Leave the patch and tap Save and Exit.
4. Open a fixture sheet. See [Add Window](/grandma3/2-4/wvm_add_window/).
5. Expand the fixture sheet by typing the arrow on the left-hand side of the window.

The fixture sheet looks like this in Fixture Sheet Mode. See [Fixture Sheet Modes](/grandma3/2-4/fixture-sheet-modes/).

![](/img/grandma3/2-4/window_fixture-sheet_sub-fixture_no-20selection-b7f202.png)

### Changing Values of Non-Existing Attributes

For the following example, follow these steps:

1. Enter in the command line:

   |                                                                    |                                   |
   | ------------------------------------------------------------------ | --------------------------------- |
   | ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 1.1.1 |

2. Tap Position in the encoder bar.

3. Press the inner ring of the **Pan** encoder wheel to open the calculator.

4. Enter 50 and tap Please.

Since there is no **Pan** attribute for subfixture 1.1.1, the **Pan** attribute value for fixture 1.1 was changed to 50 even if it was not selected. See the image below.

![](/img/grandma3/2-4/window_parent_child_fixture_exemple-a56cb8.png)
