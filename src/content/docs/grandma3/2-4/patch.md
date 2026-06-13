---
title: "Patch and Fixture Setup"
description: "Fixtures need to be added to the show file before they can be controlled or operated."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/patch.html"
scrapedAt: "2026-06-12T21:24:46.593Z"
---
Fixtures need to be added to the show file before they can be controlled or [operated](/grandma3/2-4/operate_fixtures/).

Fixtures are added to the show using the **Patch** menu.

![](/img/grandma3/2-4/menu_patch_v2-4-a8df01.png)

_The patch menu with some fixtures patched_

The patch menu also gives access to [Fixture Types](/grandma3/2-4/fixture_types/), [Attribute Definitions](/grandma3/2-4/patch_attribute_definitions/), [Parameter List](/grandma3/2-4/patch_parameter_list/), [DMX Universes](/grandma3/2-4/patch_dmx_universe/), [Stages](/grandma3/2-4/patch_stage/), and [DMX Curves](/grandma3/2-4/patch_dmx_curves/).

The bottom of the patch menu has several buttons. This is a short explanation of them:

- **Insert New Fixture** / **Insert**:\
  Tapping this inserts a new fixture or object in a new row above the currently selected row.
- **Delete**:\
  Deletes the selected row(s).
- **Cut**:\
  Tapping this cuts the selected row(s) into the clipboard. This can be combined with Paste (see below) to reorder the objects in the patch.
- **Copy**:\
  Tapping this copies the selected row(s) into the clipboard. 
- **Paste**:\
  Tapping this button pastes the clipboard's content into new rows above the currently selected row.
- **Edit DMX Mode**:\
  This opens the fixture type editor for the current DMX mode for the first of the selected fixtures. Learn more about editing the fixtures in the [Fixture Types section](/grandma3/2-4/fixture_types/).
- **Export**:\
  Tapping this opens a Patch Export pop-up. This can be used to export the entire patch or only the selected fixtures. The export can be in the grandMA3 format (XML file in the **/gma3\_library/patch** folder) or the MVR format (MVR file in the **/gma3\_library/mvr** folder).
- **Patch**:\
  Tapping this opens the Edit Patch pop-up for the selected fixture(s). Learn more about this pop-up in the [Add Fixtures to the Show topic](/grandma3/2-4/patch_add_fixtures/).
- **Create Multipatch**:\
  Tap this to add multipatch fixtures to the currently selected fixture(s). Learn more in the [Add Multipatch Fixtures topic](/grandma3/2-4/patch_add_multipatch/).
- **Select Up** / **Select Down**:\
  These two buttons can be used to navigate up and down in the patch structure. For instance, when a grouping fixture contains fixtures and it is currently selected, then the subfixtures can be selected by tapping Select Down. Navigating back to the grouping fixture can be done by tapping Select Up. 

|                                            |                                                                                                                                                                                                          |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                |
|                                            | Import of MVR can be found in the [Partial Show Read](/grandma3/2-4/sc_psr/) section of the Show Creator. Export MVR is part of the Patch Export pop-up that opens when tapping Export. See more above.  |

Buttons might be grayed out if they are not available.

The patch menu has two different modes. The image above shows the **Condensed** mode. This mode hides a lot of columns that might not be needed. The other mode is called **Full**. This shows all columns in the patch menu. The mode can be toggled by tapping Columns in the title bar.

The fixture list can also be filtered using the filter settings in the title bar or by activating Split View.

Split view filters the fixtures by different column properties.

![](/img/grandma3/2-4/menu_patch_full_split-view_v2-4-4dcf42.png)

The full Patch menu in Split View

The different split options appear as tabs that can be selected to filter the fixture list.

The list of fixtures is separated into two sides. The left side lists the different elements of the selected split filter. The right side lists the fixtures that qualify based on the object selected on the left side.

The tabs and split options (in Full mode) are:

- **Fixture Types**:\
  The left side lists the imported fixture types, including \<All> (all fixtures) and \<No Fixture Type> (fixtures without an assigned fixture type). Learn more about fixture types in the [Fixture Types section](/grandma3/2-4/fixture_types/).
- **DMX Universes**:\
  The left side lists the DMX universes, including \<All> (all universes) and \<Unpatched> (fixtures without an assigned DMX address). Learn more about DMX universes in the [DMX Universes topic](/grandma3/2-4/patch_dmx_universe/).
- **Filters**:\
  The left side lists the filters in the Filter pool, including \<All> (all fixtures). Learn more about filters in the [World and Filters section](/grandma3/2-4/worldfilter/).
- **Hierarchy**:\
  The left side lists the hierarchical structure of the patch. It lists the parent elements and can be unfolded. The right side displays the elements directly dependent on the selected object on the left side.
- **ID Types**:\
  The left side lists the different defined ID types, including \<All> (all fixtures) and \<No ID> (fixtures without an assigned FID or CID). Learn more about ID types in the [What are Fixtures topic](/grandma3/2-4/patch_what_are_fixtures/).
- **Layers**:\
  The left side lists the different defined layers, including \<All> (all fixtures) and \<No Layer> (fixtures without an assigned layer). Learn more about layers in the [Classes and Layers topic](/grandma3/2-4/patch_classes_layers/).
- **Classes**:\
  The left side lists the different defined classes, including \<All> (all fixtures) and \<No Class> (fixtures without an assigned class). Learn more about classes in the [Classes and Layers topic](/grandma3/2-4/patch_classes_layers/).

It is possible to have a small version of the 3D stage open in the patch. It can be toggled On or Off with Show 3D Positions in the title bar. It is visible in the first example image above.

When it is On, it is visible on the right side of the menu. It can be adjusted in size by moving the separator. Also, when it is On, a 3D Positions Settings appears in the title bar. Tapping this opens a limited version of the settings for the 3D viewer.

The settings have two tabs: **Misc** and **Label**.

The tab Misc offers these settings:

- **Wireframe**:\
  Enables the rendering of the 3D scene as wireframe. By default, this setting is disabled.

- **Beam**:\
  Changes the visualization of the beam. Available values are "Simple" and "Line". Simple is the default value.

- **BodyQuality**:\
  Changes the visualization of the fixture body:

  - **Box**:\
    The whole bounding box of the fixture is visualized as one box.
  - **Standard** (Default):\
    The fixture is visualized with its original meshes until the vertex limit of 1 200 vertices is reached. If the overall vertex count of the fixture exceeds 1 200 vertices, the fixture is visualized with default meshes.
  - **Ultra**:\
    The fixture is visualized with its original meshes, no matter its vertex count.

The Label settings are the same as for the normal 3D (link below).

When the 3D area has focus (for instance, when tapped), the encoder toolbar changes to the 3D encoder toolbar.

The 3D area in the patch does not visualize the current DMX output. The selected fixture in the patch shows an intensity output of 100%. The zoom of a fixture is visualized with the default value of the zoom attribute or, respectively, with the value of the Beam Angle of its Beam Geometry if a fixture does not have a zoom attribute. Other functions of the fixture (for example, color, iris, or gobo) are not visualized in the 3D area in the patch.

Learn more about 3D and the setting in the [3D Viewer topic](/grandma3/2-4/patch_3d_viewer/).

Subtopics

- [What are Fixtures](/grandma3/2-4/patch_what_are_fixtures/)
- [Add Fixtures to the Show](/grandma3/2-4/patch_add_fixtures/)
- [Add Multipatch Fixtures](/grandma3/2-4/patch_add_multipatch/)
- [My Virtual Rig (MVR)](/grandma3/2-4/patch_mvr/)
- [Live Patch](/grandma3/2-4/patch_live/)
- [DMX Sheet](/grandma3/2-4/patch_dmx_sheet/)
- [DMX Universes](/grandma3/2-4/patch_dmx_universe/)
- [Remove Fixtures from the Show](/grandma3/2-4/patch_remove_fixtures/)
- [Position Fixtures in the 3D Space](/grandma3/2-4/patch_position_fixtures/)
- [3D Viewer](/grandma3/2-4/patch_3d_viewer/)
- [Render Quality](/grandma3/2-4/patch_render_quality/)
- [Camera Pool](/grandma3/2-4/patch_3d_camera/)
- [Stages in grandMA3](/grandma3/2-4/patch_stage/)
- [Classes and Layers](/grandma3/2-4/patch_classes_layers/)
- [Attribute Definitions](/grandma3/2-4/patch_attribute_definitions/)
- [Parameter List](/grandma3/2-4/patch_parameter_list/)
- [DMX Curves](/grandma3/2-4/patch_dmx_curves/)
