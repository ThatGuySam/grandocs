---
title: "Import / Export"
description: "The Import / Export menus present a graphical workflow for exporting objects from the current show file as a smaller file with minimal additional show data."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/import-export.html"
scrapedAt: "2026-06-15T18:25:39.512Z"
pagefind: false
---
The **Import / Export** menus present a graphical workflow for exporting objects from the current show file as a smaller file with minimal additional show data.

|                                            |                                                                                                                                                                                                                                                         |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                                               |
|                                            | When exporting objects that reference other objects in the show, the referenced objects are automatically included in the export. For example, when exporting a macro with a defined appearance, the exported file includes the referenced appearance.  |

The **Import** menu also allows objects from these smaller files to be imported into the current show file. For example, this menu provides an easy way to copy a user profile or a selection of macros from one show file to another.

Tap the video below to see the example.

[Vimeo video](https://player.vimeo.com/video/990958540?title=0\&byline=0\&portrait=0\&color=ffeb0f)

Open the **Import / Export** menus using the following steps: 

1. Press the Menu key or tap ![](/img/grandma3/2-3/icon_gear_15px-8376e1.png) near the top of the **Control Bar**.
2. Tap Show Creator. The Show Creator menu opens.

Tap the Import or Export tab in the upper-left corner to access the desired interface.

![](/img/grandma3/2-3/window_show-creator_import_menu-20v2-1-0-5-77b22c.png)

Import menu



## Object Types

These menus allow for importing and exporting a wide variety of object types. Tap ObjectType on the left side of the main area to open or close the full list of available object types:

- [Appearances](/grandma3/2-3/appear/)
- [Bitmaps](/grandma3/2-3/bitmap/)
- [Cameras](/grandma3/2-3/patch_3d_camera/)
- [Data Pools](/grandma3/2-3/datapool/)
- [Encoder Bars](/grandma3/2-3/ws_eb_encoder_pool/)
- [Executor Configurations](/grandma3/2-3/executor_configurations/)
- [Filters](/grandma3/2-3/worldfilter_filter_create/)
- [Gels](/grandma3/2-3/keyword_gel/)
- [Generators](/grandma3/2-3/generator/)
- [Gobos](/grandma3/2-3/gobos/)
- [Groups](/grandma3/2-3/group/)
- [Images](/grandma3/2-3/images/)
- [Layouts](/grandma3/2-3/layouts/)
- [Macros](/grandma3/2-3/macros/)
- [MAtricks](/grandma3/2-3/matricks/)
- [Meshes](/grandma3/2-3/meshes/)
- [Pages](/grandma3/2-3/keyword_page/)
- [Plugins](/grandma3/2-3/plugins/)
- [Presets](/grandma3/2-3/presets_pools/)
- [Quickeys](/grandma3/2-3/quickeys/)
- [Render Qualities](/grandma3/2-3/patch_render_quality/)
- [Scribbles](/grandma3/2-3/scribbles/)
- [Sequences](/grandma3/2-3/cue_sequence/)
- [Sounds](/grandma3/2-3/sound_pool/)
- [Symbols](/grandma3/2-3/symbols/)
- [Timecodes](/grandma3/2-3/timecode/)
- [Timers](/grandma3/2-3/timers/)
- [Users](/grandma3/2-3/user_create/)
- [UserProfiles](/grandma3/2-3/user_settings/)
- [Views](/grandma3/2-3/wvm/)
- [Videos](/grandma3/2-3/videos/)
- [Worlds](/grandma3/2-3/worldfilter_world_create/)

![](/img/grandma3/2-3/window_show-creator_export_menu-20v2-1-0-5-2bc156.png)

Export menu prepared to export color presets

The main area of both the **Import** and **Export** menus shows the data source on the left and the destination on the right. Therefore, the **Export** menu displays the specified object types from the current show file in the area on the left, titled **Local**, and the contents of the relevant folder of the selected drive on the right, titled **Drive**. In the **Import** menu, these two areas appear on opposite sides.

- An enabled Gaps button imports or exports the gaps of the XML file. For more information, see [/Gaps Option Keyword](/grandma3/2-3/ok_gaps/).
- Enabeling Include Dependencies will import and export dependencies. For more information, see [/NoDependencies keyword](/grandma3/2-3/ok_nodependencies/).

## Drive Selection

To choose a different destination drive for the exported data, tap the Internal button at the right side of the title bar of the **Drive** section or swipe to open a list of available drives. In the **Import** menu, this drive setting defines which drive the console uses as the data source.

## Local Section Title Bar Tools

The title bar of the **Local** section includes a few buttons with helpful tools.

- Tap DataPool to cycle through available data pools within the current show file or swipe to open a list of data pools. This option is only available when importing or exporting an **ObjectType,** which is incorporated into a **DataPool** within the show file. These **ObjectTypes** are listed below DataPools in the right column of the ObjectType section.
- Tap Sheet Style to display objects in the **Local** section as a sheet with relevant details for each object. Tap Sheet Style again to view objects as they appear in their pools. Some objects, like UserProfiles, never appear in pools. Therefore, they will always appear in the sheet format regardless of the state of the Sheet Style button.
- Tap Collect all to select all objects of the current type for export. Once tapped, this button changes to read Uncollect all. Tap this button to deselect all objects. These functions do not appear in the **Import** menu.
- Tap Clear Collection to reset the collection of objects. This option is only available in the **Import** menu.

## Object Sub-Types

​Some entries in the ObjectType selection include several collections of objects, which appear as different pools. These include:

- Presets: The **Import **and** Export** menus handle and display each preset pool individually.
- Gels:  The **Import** and **Export** menus handle and display each gel book as an individual pool.

With the Presets or Gels ObjectType selected, a row of radio buttons appears across the top of the main area, showing all relevant object sub-types. Tap one of these buttons to display the desired pool below.

## Multiple Object Selection

Tap any object in the displayed pool to select it for export. A brown border appears around each selected object. To select multiple objects in a pool, tap each desired object. Tap any selected object to deselect it.

When Sheet Style is enabled, select multiple adjacent objects by drawing a lasso of overall desired objects. To select just one object, tap only the desired object. To toggle selection for any objects in the sheet without changing the selection status of any other objects, hold Ctrl on the keyboard while tapping the desired objects.

## Export Workflow

1. Tap the Export tab in the upper-left corner.
2. Set the desired ObjectType.
3. Set the desired destination drive.
4. Select all of the desired objects to export from the **Local** area.
5. Enter the desired file name in the Name field of the **Drive** area.
6. Tap Export at the bottom of the menu.

## Import Workflow

1. Tap the Import tab in the upper-left corner.
2. Set the desired ObjectType.
3. Set the desired source drive.
4. Select all of the desired files to import from the **Drive** area.
5. Select the desired destination in the pool in the **Local** area.
6. Tap Import at the bottom of the menu.

|                                            |                                                                                                                                                                                                                                                                                |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                                                                      |
|                                            | Certain object types (including **Gobos**, **Images**, **Symbols**, and **Videos**) can be included in **Appearances**. To automatically create new **Appearances** based on these objects as they are importing, toggle the Create Appearances option before tapping Import.  |

## Import and Export Using Command Line Syntax

See the Export keyword and Import keyword topics for information about exporting and importing show data using command-line syntax without using these menus.

####
