---
title: "What are Fixtures"
description: "Fixtures are the different devices that can be controlled by the grandMA3."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/patch_what_are_fixtures.html"
scrapedAt: "2026-06-12T21:24:46.582Z"
---
Fixtures are the different devices that can be controlled by the grandMA3.

Fixtures are added using the patch menu. Each fixture is a row in the patch menu. Each row has some settings organized in columns. Two of the columns are **Fixture Type** and **Mode**. Fixture Type is the definition or description of the physical fixture, and the DMX definition of the fixture might be separated into different modes. Each fixture type can have several different modes. Only one mode can be selected for each fixture in the patch. Read more about editing and creating fixture types in the [Fixture Types section](/grandma3/2-4/fixture_types/).

Fixtures contain different **Attributes** or **Parameters**. The parameters can have different values. Individual parameters are the ones manipulated when controlling the fixtures' attributes. For instance, changing the dimmer attribute for ten fixtures changes the dimmer parameter on each of the ten fixtures. Read more about attributes in the [Attribute Definitions topic](/grandma3/2-4/patch_attribute_definitions/).

Fixtures in the grandMA3 are selected using an ID. There are 12 different **ID Types**. These ID Types can be used to organize the fixture list. Six of the ID Types are **Generic**, **Fixture**, **Channel**, **MArker**, **Multipatch**, and **PSR** - they are locked and cannot be renamed. The **Generic** type can be used to completely preprogram the show. And then onsite the fixture type can be replaced with the local ones. **PSR** is a fixture type that the system uses when utilizing the Partial Show Read function. It should not be used when manually adding an ID.\
**Multipatch (MP)** ID type is a special type used to create multi-patch versions of a fixture - learn more in the [Add Multipatch Fixture](/grandma3/2-4/patch_add_multipatch/) topic.\
The remaining six ID types can be renamed to match the needs of the show. These are called **Custom ID** because they can be customized. The default names are **Houselights**, **NonDim**, **Media**, **Fog**, **Effect**, and **Pyro**. Each of these is a keyword. Renaming them changes the corresponding keywords. Read about the ID type keywords following these links: [Fixture](/grandma3/2-4/keyword_fixture/), [Channel](/grandma3/2-4/keyword_channel/), [Generic](/grandma3/2-4/keyword_generic/), [Houselights](/grandma3/2-4/keyword_houselights/), [NonDim](/grandma3/2-4/keyword_nondim/), [Media](/grandma3/2-4/keyword_media/), [Fog](/grandma3/2-4/keyword_fog/), [Effect](/grandma3/2-4/keyword_effect/), [Pyro](/grandma3/2-4/keyword_pyro/), [MArker](/grandma3/2-4/keyword_marker/), [Multipatch](/grandma3/2-4/keyword_multipatch/), and [PSR](/grandma3/2-4/keyword_psr/).

Partial Show Read is used to access elements from a different show file. The function needs to compare the patch, and that is why this ID type exists. When the patch is compared and possibly combined, then elements can be transferred from the other show into the recurrent one. Learn more in the [Partial Show Read topic](/grandma3/2-4/sc_psr/).

A fixture can have a **Fixture ID** (FID) and one other **ID Type** (CID) with the same or a different ID number. A fixture needs at least one ID to be [operated](/grandma3/2-4/operate_fixtures/).

Fixtures are added to a stage. In a new, empty show, there is a standard stage (Stage 1). More stages can be added to organize the setup. Read more about Stages in the [Stages topic](/grandma3/2-4/patch_stage/) and about placing fixtures in the [Position Fixtures in the 3D Space topic](/grandma3/2-4/patch_position_fixtures/).

Fixtures can have **Class** and **Layer** information. These are two different ways to organize or group the fixtures. Read more in the [Classes and Layers topic](/grandma3/2-4/patch_classes_layers/). The patch menu can be filtered to hide or show fixtures, for instance, using specific classes or layers.

Another way to organize the patch is to add fixtures as a "child" (structurally below a "parent") to another fixture. A special **Grouping** fixture is very useful for this. It is an "empty" fixture in the generic manufacturer group. This can be useful if there are many fixtures of one type, for instance, 100 LED panels. A grouping fixture would be added to the patch, and the LED panels would be added inside or below the grouping fixture. The grouping fixture can have an ID. Selecting this ID then controls the LED panels inside or below the grouping fixture. An example of this structure can be seen in the demo showfile.

Fixtures also need to be patched to a DMX address in the grandMA3. If it does not have a DMX address, then the system does not know where to send the parameter values.

### Example 1

A row is added to the patch menu. A Robe MegaPointe is assigned to the row. Now, the fixture exists in the patch menu. The fixture needs an ID to be selected and controlled. The fixture gets FID (Fixture ID) 1. Now, the fixture can be selected using the Fixture 1 command. For the fixture to react, it needs to have the same DMX address as set in the fixture itself, and it needs to be connected to a DMX port set to the correct universe. The fixture gets address 3.54. The universe number is 3, and the DMX address in that universe is 54 - this needs to match the fixture setting.

### Example 2

A row is added to the patch menu. A generic dimmer (8-bit) is assigned as the mode. The fixture is a part of the building and is used for house lights. The ID Type is changed to **Houselights**, and CID (Channel ID / Custom ID, depending on the ID type) is changed to 101. It does not get an FID. It can now be selected by pressing Channel three times to get the houselights keyword and the numbers 1 0 1.

The fixture gets the Patch address 1.101 (universe 1, address 101).

|                                            |                                                                                                                               |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                     |
|                                            | The channel key is used to get all other ID types than **Fixture**. Pressing it multiple times toggles through the ID types.  |
