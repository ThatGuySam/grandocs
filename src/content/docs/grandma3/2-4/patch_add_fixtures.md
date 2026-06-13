---
title: "Add Fixtures to the Show"
description: "This is the process of adding new fixtures (or devices) to the show and the patch using the GUI."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/patch_add_fixtures.html"
scrapedAt: "2026-06-12T21:24:46.652Z"
---
This is the process of adding new fixtures (or devices) to the show and the patch using the GUI.

|                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Quick Steps in a new show:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                            | 1. Open the Patch Menu.

2. Follow the steps in the wizard:

   1. Select the fixture type.
   2. (optional) Add a custom name.
   3. Type the quantity.
   4. Type the first ID number.
   5. (If in **Full** mode) Select a Layer and class (**None** is an option).
   6. Type the patch address for the first fixture.
   7. Tap Apply.

3. Close the Patch menu and tap Save and Exit to save the changes.These are steps needed for adding the first fixtures to a new show - read below for details. |

Tap the video below to see the example.

[Vimeo video](https://player.vimeo.com/video/994942576?title=0\&byline=0\&portrait=0\&color=ffeb0f)

|                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Quick Steps in a show with existing fixtures:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                            | 1. Open the Patch Menu.
2. Select the row where the new fixtures should be inserted and tap the Insert New Fixture button.
3. Make sure the desired source is selected.
4. Select the desired fixture type (use the filter to limit the list) and tap Select.
5. Fill in the rest of the fields in the wizard and tap Create !.
6. Edit any desired field in the patch grid before closing the Patch menu.
7. Close the Patch menu and save the changes.These are steps needed to add more fixtures in an existing show - read below for details. |

Tap the video below to see the example.

[Vimeo video](https://player.vimeo.com/video/994950488?title=0\&byline=0\&portrait=0\&color=ffeb0f)

Everything about adding fixtures is done from the Patch menu. 

## Navigate to the Patch Menu

The Patch menu needs to be open to add fixtures.

1. Press the Menu key.
2. Tap the Patch button in the menu pop-up.

[![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Menu%20%27Patch%27.%27Edit%27)

The patch menu is now open.

![](/img/grandma3/2-4/menu_patch_v2-3-f64715.png)

_The open Patch menu - in condensed mode - with some fixtures_

When the menu is opened the first time, a wizard helps to add the first fixtures to the show, and instead of the patch menu, there is a guide through the fixture selection and the **Insert New Fixtures** pop-up (see below).

## []()Insert a Device in the Patch

Each fixture needs a row in the patch menu.

The fixtures belong to a "parent" stage object. The default parent is **Stage 1**. Several stages can be created - read more in the [Stage topic](/grandma3/2-4/patch_stage/).

The selected stage can be changed using the stage button in the title bar.

1. Select the stage where the fixtures should be added using the button in the title bar.
2. Tap the New Fixture area on the list if it needs to be added to the bottom, or tap an existing fixture to insert new fixtures above the selected fixture.
3. Tap Insert New Fixture.

This opens the **Insert New Fixture** wizard pop-up on the **Select DMX Mode to use** part.

![](/img/grandma3/2-4/popup_insert-new-fixtures_select-fixture_v1-9-fbec8e.png)

_Select a fixture in the libraries_

Below the search bar are two tabs: **Show** and **Library**. Show lists the fixture types already imported into the show file. This list can be limited to only showing the patched fixture types. This can be done by activating the Used only button. The **Library** tab lists the different fixture types that can be used. With library selected, there are extra buttons available on the right side.

One button selects the drive. This makes it possible to select the internal drive, previously installed versions library, or an external USB drive. In the image above, it is the Internal button. The button is labeled to show the selected drive. Next to this button, there are small toggle buttons that select different sources.

The sources are MA ![](/img/grandma3/2-4/icon_ma_15_v1-7-c0ee8b.png) (grandMA2 converted fixture files and grandMA3 fixture files), User ![](/img/grandma3/2-4/icon_user_15_v1-7-7e47bb.png), and Shares ![](/img/grandma3/2-4/icon_globe_15_v1-7-048d78.png) (GDTF share and grandMA3 fixture share). The share button is only available when there is an active connection to a World Server (learn more in the [World Server topic](/grandma3/2-4/system_world/)).

|                                                    |                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/restriction_gray-968e2d.png) | **Restriction:**                                                                                                                                                                                                                                                                                                                                   |
|                                                    | grandMA2 fixture files cannot be loaded directly into the grandMA3. The grandMA2 converted source mentioned above is the grandMA2 library converted to match the grandMA3 structure. Fixture files are converted when a grandMA2 file is stored as a grandMA3 file. Learn more in the grandMA2 manual / Using the Backup Menu / Save as grandMA3.  |

4. Select the desired drive and activate the desired sources.

The fixture libraries are sorted by manufacturers in the left column. Selecting a manufacturer lists the fixtures from that manufacturer in the center column. Selecting a fixture lists the available modes in the right column.

At the bottom, a Description button can show an area with extra information about the selected fixture type file.

5. The list can be filtered by typing a word in the **Search** input. The search is across manufacturers, fixtures, and modes (If a fixture has multiple modes, it will show them all, but only fixtures that include the searched mode).
6. Select the desired fixture and mode from the list and tap Select.

This reveals the **Insert New Fixtures Wizard**. This has a list of elements that need information to add the fixtures to the patch. The wizard comes in two different modes, depending on the **Columns** mode of the patch. This mode can be toggled in the Columns button in the title bar. When the mode is **Full,** then there are more elements (ID Type, CID, Layer, and Class). This is the full version of the pop-up:

![](/img/grandma3/2-4/popup_insert-new-fixtures_name_full_v2-3-1271b1.png)

_Fill out all the desired fields in the right column to insert fixtures_

7. All the fields in the right column can be filled with information. The required fields have a value suggestion. These can be edited to suit the needs. All the information can also be edited afterward in the patch menu. The area on the right side adapts to help fill out the selected field. It might have suggestions for input.
8. Accept the suggested values, or edit them to suit the needs.
9. Tap Create ! to add the fixtures.

A row now represents each new fixture in the patch menu. Read below for an explanation of each column in the patch menu and detailed information about changing some values.

## []()Short Explanation of Most Columns in the Patch Menu

The patch menu has many columns. This is a short explanation of each. Remember that the patch menu has a condensed and full mode. Select Full to see all the columns.

- **FID**:\
  This is the Fixture ID of the fixture. Read more in the **Assign an ID to fixtures** below.
- **IDType**:\
  This is the ID Type of the fixture. Read more in the **Assign an ID to fixtures** below.
- **CID**:\
  This is the fixture's CID. Read more in the **Assign an ID to fixtures** below.
- **Name**:\
  This is the name of the fixture. If there are subfixtures, then a right-pointed arrow can be tapped to unfold the subfixtures.
- **FixtureType**:\
  This is the name of the selected fixture type.
- **Mode**:\
  This is the mode of the selected fixture.
- **Patch**:\
  This is the first DMX address of the fixture. Read more in the **Assign DMX address to fixtures** below.
- **Layer**:\
  Fixtures can be organized in Layers. This is the layer information for the fixture. Read more in the [Classes and Layers topic](/grandma3/2-4/patch_classes_layers/).
- **Class**:\
  Fixtures can be organized in Classes. This is the class information for the fixture. Read more in the [Classes and Layers topic](/grandma3/2-4/patch_classes_layers/).
- **Offset Pan**:\
  This offset value can offset the DMX output for the Pan attribute.\
  It is applied just before the DMX output, which means the offset is not shown in the programmer, cues, or presets. The offset can be useful if, for instance, a fixture is hung differently than what has been programmed, especially in a touring situation where it is not a permanent change. The offset value can be set in physical degrees.
- **Offset Tilt**:\
  This is the same as the Offset Pan but for the tilt attribute. Read above.
- **DMX Invert Pan**:\
  The Pan DMX output can be inverted by editing this field. This can be useful depending on how the fixtures are mounted. See more below in [What Should Be Inverted](/grandma3/2-4/patch_add_fixtures/#h2_1236786919).
- **DMX Invert Tilt**:\
  The Pan DMX output can be inverted by editing this field. This can be useful depending on how the fixtures are mounted. See more below in [What Should Be Inverted](/grandma3/2-4/patch_add_fixtures/#h2_1236786919).
- **Invert 3D Pan**:\
  This setting inverts the pan attribute in the grandMA3 3D visualizer without affecting the DMX output. See more below in [What Should Be Inverted](/grandma3/2-4/patch_add_fixtures/#h2_1236786919).
- **Invert 3D Tilt**:\
  This setting inverts the tilt attribute in the grandMA3 3D visualizer without affecting the DMX output. See more below in [What Should Be Inverted](/grandma3/2-4/patch_add_fixtures/#h2_1236786919).
- **Enc Invert Pan**:\
  Editing this field allows the pan to be inverted for the encoder rotation, which can be useful depending on how the fixtures are mounted. See more below in [What Should Be Inverted](/grandma3/2-4/patch_add_fixtures/#h2_1236786919).
- **Enc Invert Tilt**:\
  Editing this field allows tilt to be inverted for the encoder rotation. Depending on how the fixtures are mounted, this can be useful. See more below in [What Should Be Inverted](/grandma3/2-4/patch_add_fixtures/#h2_1236786919).
- **Pos X**:\
  This is the fixture's position on the X-axis in the 3D window.
- **Pos Y**:\
  This is the fixture's position on the Y-axis in the 3D window.
- **Pos Z**:\
  This is the fixture's position on the Z-axis in the 3D window.
- **Rot X**:\
  It is the rotation of the fixture on the X-axis in the 3D window.
- **Rot Y**:\
  It is the rotation of the fixture on the Y-axis in the 3D window.
- **Rot Z**:\
  It is the rotation of the fixture on the Z-axis in the 3D window.
- **Scale X**:\
  This can scale the fixture/object on the X-axis in the 3D window. The scale value is a factor, with 1 being the default. A higher number makes the object bigger, and a lower number makes it smaller.
- **Scale Y**:\
  This can scale the fixture/object on the Y-axis in the 3D window. The scale value is a factor, with 1 being the default. A higher number makes the object bigger, and a lower number makes it smaller.
- **Scale Z**:\
  This can scale the fixture/object on the Z-axis in the 3D window. The scale value is a factor, with 1 being the default. A higher number makes the object bigger, and a lower number makes it smaller.
- **Gel Color**:\
  Here, a color that will be added to the fixture's output can be defined. This is useful for adding gels to conventional fixtures. This is visualized in the console and 3D Viewer.
- **Note**:\
  This adds a multiline note to the fixture.
- **Tags**:\
  Tags can be assigned to the fixture.
- **Beam Angle**:\
  Here, the fixture's beam angle can be defined. This is useful for conventional fixtures where different angles might be needed. This is visualized in the 3D window.
- **Shadow Quality**:\
  This setting defines the render quality of the shadows created when this fixture's light beam hits a different object that casts shadows. A higher level of quality improves the real-world look, but it also increases the calculations needed for the 3D visualization. The options are **None**, **Low**, **Medium**, **High**, and **Very High**.\
  Cast Shadows need to be set to Yes for the shadows to be rendered (see below). This setting is not available for environmental fixture types.
- **Cast Shadow**:\
  Each fixture can cast a shadow or not. This setting defines if this fixture should cast a shadow.
- **Follow Target**:\
  Turning this to Yes makes the fixtures or 3D objects something that can be selected or picked using the **Follow** function in the 3D Viewer.
- **Selectable 3D**:\
  This is a Yes or No (text is hidden) field. Yes means that the fixture can be selected using the selection tool in the [3D Viewer](/grandma3/2-4/patch_3d_viewer/). Turning this off (No option) for stage elements that do not need to be controlled can be useful.
- **Visible 3D**:\
  This is a Yes or No (text is hidden) field. Yes means that it is shown in the [3D Viewer](/grandma3/2-4/patch_3d_viewer/).
- **MIB**:\
  This can be set to **Yes** to disable the MIB function for the fixture and its attributes. Learn more about MIB in the [Move In Black topic](/grandma3/2-4/cue_mib/).
- **Target Space**:\
  The MArker fixtures use this. This is the selected target space for the MArker fixture. It defines the available space where fixtures can move their light beams when selecting this MArker fixture. Learn more in the [MArker Fixture topic](/grandma3/2-4/xyz_marker/).
- **Movement Space**:\
  The MArker fixtures use this. This is the selected movement space for the MArker fixture. It defines the space wherein the MArker fixture can move. Learn more in the [MArker Fixture topic](/grandma3/2-4/xyz_marker/).
- **Master React**:\
  This setting has three options: **None**, **Group**, and **Grand**. This defines if the intensity is affected by a master. If Grand is selected, then group masters will also affect the fixture. If Group is selected, then additive group masters are not affected by the grand master. None makes the fixture ignore both group masters and grand masters. None also excludes this fixture from the solo function. Learn more about solo in the [Solo keyword](/grandma3/2-4/keyword_solo/).
- **Grid Rot and Inv**:\
  These six settings allow for modifying the arrangement of subfixtures in the selection grid. For instance, if a linear LED bar has multiple LED cells defined in the fixture type, it will use the information in the fixture type to show the individual cells when the subfixtures are shown in the selection grid. The Grid settings can be used to rotate and invert the representation of subfixtures in the Selection Grid.
- **Material Overwrite**:\
  A fixture type's material can be overwritten for specific fixtures using this setting. Editing this cell opens a **Select Material Overwrite pop-up** with all the appearances. Selecting one will use the selected to overwrite the material defined in the Fixture Type. This feature can be very useful for environmental elements. For instance, to use a several planes as different video walls or displays with content from different NDI appearances.
- **Appearance**:\
  An appearance can be assigned to the fixture. This appearance is used in the patch menu and in the Fixture Sheet if the sheet has the setting Fixture Appearance set to "Enabled " or "Graphic".

## Assign an ID to Fixtures

The fixtures need at least one ID to be selected and controlled.

There are two types of ID numbers for each fixture. Fixtures can have both or just one of the two - but it needs at least one.

The **FID** is the default fixture ID. The number here is used with the [Fixture](/grandma3/2-4/keyword_fixture/) keyword.

The **CID** is the second ID. This can be used if the **IDType** differs from "Fixture". Editing the IDType field opens the **Select IDType** pop-up.

![](/img/grandma3/2-4/popup_select-idtype_v2-4-9b3484.png)

_Select the desired IDType_

This lists the different valid IDTypes. Select one that is not "Fixture" to use the CID.

|                                                  |                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                                                                                                                                                                                            |
|                                                  | There are types called **Generic**, **MArker**, and **PSR**. Generic is a special type that can be used for fixtures that can be used to contain generic or universal values. MArker is used for special MArker fixtures used to change Pan Tilt values by referencing points in the 3D stage. PSR is used with Partial Show Read. These IDTypes should not be used for normal fixtures.  |

1. Select the ID fields in one of the two ID columns (FID or CID) for the fixture rows where an ID is to be assigned. The selection order is important.
2. Type a number on the keyboard and assign the number by pressing Please.

Now, the fixtures have an ID. The numbers are assigned sequentially based on the selection order.

## Assign DMX Address to Fixtures

The fixtures need to be assigned a DMX universe and address before being able to create any output.

There are two primary options for giving the fixtures an address. One is to type the desired address directly in the patch field, and the other is to use the dedicated **Edit Patch** pop-up.

**Type the number:**

1. Select the fields in the Patch column for the fixture rows where the address will be assigned. The selection order is important.
2. Type the DMX universe and address separated by a dot (for example, **2.1**) on the keyboard and assign the address by pressing Please.

**Use the Edit Patch menu:**

1. Select the fields in the Patch column for the fixture rows where the address will be assigned. The selection order is important.
2. Right-click the blue selected areas or tap the Patch button - this opens the **Edit Patch** pop-up.

![](/img/grandma3/2-4/popup_edit-patch_v2-3-c37408.png)

_Use the Edit Patch pop-up to get a visual overview of the DMX universe_

This pop-up is divided into two sides. On the left side, there are all the selected fixtures. On the right side is a view with all the DMX universes and addresses. The purpose of the menu is that fixtures can be selected on the left side, and the universe list on the right side shows where there is available space in the universes. There are several ways to navigate universes and assign the fixtures to the selected DMX address.

The numbers on the right side are red if the universe is not granted.

The pop-up also opens a dedicated encoder toolbar:

![](/img/grandma3/2-4/img_encoder-bar_edit-patch_v2-3-1c05e5.png)

_Edit patch encoder toolbar is used for easy navigation_

This toolbar can be used to select fixtures, universe, and address.

This is one way to do it:

1. Select the fixtures in the correct order.
2. Use the encoders to navigate to the desired address.
3. Tap the **Address** encoder to assign the fixtures to the address.

The Edit Patch pop-up has several buttons at the bottom:

- **PatchTo**:\
  Opens a small pop-up where the desired patch address can be typed.
- **Unpatch**:\
  This removes the patch address from the fixtures.
- **Move Patched To Selected Universe**:\
  This moves the fixtures to the selected universe and keeps the DMX address.
- **AddressMode**:\
  This toggle button changes how the DMX address is displayed. They can be split up into universes and a range DMX address from 1 through 512 - this option is called **Univ.addr**. The other option is **Absolute**, which shows the addresses continuously starting from number 1 and upwards.
- **Patch To Next Free Address**:\
  This gives the fixtures the next available DMX addresses.
- **Patch To Next Free Universe**:\
  This patches the fixtures to the next empty universe.
- **SkipPatched**:\
  This will skip addresses that have patched fixtures when scrolling through the universes.
- **PatchOffset**:\
  This can set the desired number of DMX channels between the fixtures. If the number is lower than the number of channels the fixtures use, they are patched as close as possible. If the number is more than the used channels, then the PatchOffset number is used.

The **Edit Patch** menu auto closes when all the selected fixtures are patched.

## []()Filtering the Patch Menu

Filtering in the patch menu can be useful when there are a lot of fixtures and stage elements.

There are several ways to filter the fixtures in the patch menu.

An existing filter can be assigned using the Filter input in the title bar. Tapping this opens a small select pop-up that lists all existing filters (read about creating a filter in the [Create a Filter topic](/grandma3/2-4/worldfilter_filter_create/)). Two other options are **None** (no filter) and **New** (create a new filter). Select the desired filter.

Filtering needs to be turned On for the filter to be active. Tap the filter icon (![](/img/grandma3/2-4/icon_filter_15px-78282b.png)) (between Filter and Columns) to turn it On. This button toggles On or Off.

Turning filters On also exposes column filters. An extra row is displayed above the fixture rows just below the column titles. Any column value can filter the patch simply by editing the filter field for a column. Only one filter value can be applied to each column.

Edit a column filter field to assign a value. Some fields open a small selection pop-up with a list of available values, while others are input fields where text needs to be written.

The column filters can be combined with a filter from the pool.

The **Split View** is also a way to filter the patch. Learn more about the split view in the [Patch and Fixture Setup topic](/grandma3/2-4/patch/).

## Closing the Patch Menu

There is a pop-up asking what to do when exiting the patch menu.

![](/img/grandma3/2-4/popup_leave-the-patch_v1-5-9d0b19.png)

_Leave patch pop-up with options_

This asks if the changes should be kept.

Tap Save and Exit to save the changes and leave the patch menu. Tap Discard and Exit to cancel any changes and leave the patch menu. Tap Stay in Patch to stay in the patch menu.

---

## What Should Be Inverted

Pan and Tilt attributes can be inverted using three different invert functions. Which one is the correct one in different scenarios?

The problem can be identifying the correct issue.

### Situation 1 - Pan/Tilt direction is not the same in grandMA3 3D and the real world (including 3rd-party visualizer)

There is probably an error in the physical description for the Fixture Type. The fixture type definition includes information about the rotation of the moving head in relation to the DMX value.

The DMX channel called "Yoke\_Pan" often has a defined DMX range of 0 to 255 and a Physical range of 270 to -270 degrees. And a default DMX value of 127. The issue is the physical rotation direction when the DMX value increases. The physical value defines one direction, but if this doesn't match the real fixture, then the grandMA3 3D will turn the fixture in the opposite direction from the real fixture.

Inverting the 3D in the patch can be used in this situation to change the rotation direction in the grandMA3 3D.

This inversion does not change the DMX output.

|                                                  |                                                                                                                                                                                                                   |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                    |
|                                                  | If XYZ is activated for the fixture type, then the physical description in the fixture type should be changed to match the real direction. If both Invert 3D and XYZ are active, then the DMX value is inverted!  |

### Situation 2 - Pan/Tillt is inverted for some or all fixtures in the real world compared to both grandMA3 3D and a 3rd-party visualizer

If fixtures are turning in the opposite direction in the real world than shown in grandMA3 3D and 3rd-party visualizers, then the DMX values should be inverted.

It might be better to invert the pan or tilt in the fixtures (if they have that setting). The difference is whether the DMX is inverted from the source (grandMA3 system) or at the destination (the fixture). The result is the same. Choose the one that is the easiest. Also, keep in mind the possible workload of updating stored positions in the showfile.

### Situation 3 - Some fixtures are positioned opposite other fixtures of the same type and should move in the same direction when turning the encoders

Imagine two rows of fixtures standing on the floor. The fixtures are oriented towards the space between the rows. Turning the Tilt encoder makes the fixture tilt down towards the fixture on the other row. Now turning the Pan encoder makes the two rows turn in opposite directions. It might be nicer if the two rows turned to the same side. This can be achieved by inverting the encoder for one of the rows. 

Tilt encoder inversion can be helpful if the desire is for hanging and standing fixtures to tilt up or down together rather than in opposite directions.
