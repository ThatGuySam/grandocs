---
title: "Insert Geometries"
description: "The geometry of a fixture is the physical description of parts of the device."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ft_insert_geometries.html"
scrapedAt: "2026-06-15T18:25:39.079Z"
pagefind: false
---
The geometry of a fixture is the physical description of parts of the device.

This example of a basic moving head consists of four components:

1. Base
2. Yoke 
3. Head 
4. Beam

All fixture parts must be set up to link them to a specific DMX function later.

**Requirement:**

- [Insert Fixture Types](/grandma3/2-3/ft_insert_fixture_types/).

1. Tap Fixture Types, then select FixtureType 2.

   ![](/img/grandma3/2-3/window_edit-20_fixture_type_3-b0dcaa.png)

   Select the fixture type you want to edit
2. To open the Fixture Type Editor, tap Edit. The window **Edit Fixture Type** opens.

   ![](/img/grandma3/2-3/window_edit-20_fixture_type_4-aee7c8.png)

   Fixture Type Editor
3. Tap Geometries.
4. The Geometries window opens.

   ![](/img/grandma3/2-3/window_edit-20_fixture_type_geometries-7c1324.png)\
   FixtureType Editor Geometries window with the [Geometry Viewer](/grandma3/2-3/ft_link_models_geometries/#h2__139560060) on the right side

    

   Under the Name column, tap and hold Geometry and rename it Base.
5. At the bottom right of the window, tap 'New object' line.
6. Expand the Base tab by tapping ![](/img/grandma3/2-3/icon_small_execute_go_10_v1-9-4bf62d.png), then select **New Geometry**.

![](/img/grandma3/2-3/window_edit-20_fixture_type_geometries_2-3555e3.png)\
_Insert new geometry_

1. Tap Insert New Geometry.
2. The pop-up Select type of the object opens.

   ![](/img/grandma3/2-3/popup_insert-20geometries_02_v3-2-1-a48960.png)

   _Select type_
   - Select **Axis**.
   - Axis is now displayed in the column Type.
    ​In the column Name, rename Axis to Yoke.
3. - Press Edit and tap Axis, or press and hold Axis.
   - The virtual keyboard opens.
   - Enter Yoke.
   Expand the cell, Yoke.
4. - Yoke's child New Geometry opens.
   - Repeat steps [6 to 8](/grandma3/2-3/ft_insert_geometries/#insert_rename) and rename Axis to Head. 
   Expand the cell Head. 
   - Head's child New Geometry opens.
   - Repeat steps [6 to 8](/grandma3/2-3/ft_insert_geometries/#insert_rename), selecting Beam.

Geometries are inserted, as shown in the image below:

![](/img/grandma3/2-3/window_edit-20_fixture_type_geometries_3-a89823.png)

Inserted geometry and its children

---

### Sub-Fixtures Grid Position

The grid position of sub-fixtures can be modified manually under the **Grid** columns of the **Geometry** tab:

- **Grid Auto**: The positions are determined automatically by the position on the geometries (default value). When set to Manual, the user can define the grid positions independently using the following properties:

- **Grid Swap XY**: Interchanges the grid positions between the X and Y axes.

- **Grid Inv X**: Inverts the grid positions on the X-axis.

- **Grid Inv Y**: Inverts the grid positions on the Y-axis.

- **Grid Inv Z**: Inverts the grid positions on the Z-axis.

- **Grid X**: Defines the position of the geometry on the X-axis.

- **Grid Y**: Defines the position of the geometry on the Y-axis.

- **Grid Z**: Defines the position of the geometry on the Z-axis.

To better understand sub-fixture grid positioning, follow the steps below:

1. Import the Martin Professional Mac Aura PXL fixture type and select it. For more information, see [Import Fixture Types](/grandma3/2-3/ft_import/).
2. Tap Edit at the bottom of the fixture type menu. The fixture type editor opens.
3. Tap Geometries at the top of the window.
4. Click the arrow on top of the window to expand all the lines.
5. Select BeamLED 1.

The edit fixture type menu looks like this:

![](/img/grandma3/2-3/window_edit-20_fixture_type_geometries_4-dabd00.png)

In the [3D area](/grandma3/2-3/ft_link_models_geometries/#h2__139560060) on the right side, colored indicators are displayed on the selected geometry. If the selected geometry is visible in the 3D model, the object itself is displayed in yellow. The values entered for Grid X, Grid Y, and Grid Z define the geometry position for all axes.

Grid settings per fixture are possible if, for example, the same fixture type is used for fixtures that are hung and on the floor. This is set in the patch menu:

Open the patch menu, press Menu, and tap Patch:

![](/img/grandma3/2-3/window_edit-20_fixture_type_geometries_5-08504e.png)

1. Select a fixture.
2. Set RotX, RotY, RotZ, InvX, InvY, and InvZ in the grid column.

After inserting the fixture type's geometries, the next step is to create models as a physical foundation for the fixture's different parts: [Insert Models](/grandma3/2-3/ft_insert_models/).
