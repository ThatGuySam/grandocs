---
title: "Partial Show Read (PSR)"
description: "The Partial Show Read menu transfers objects, especially objects containing fixture data, from a different show to the currently loaded show file."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/sc_psr.html"
scrapedAt: "2026-06-15T18:25:39.799Z"
pagefind: false
---
The Partial Show Read menu transfers objects, especially objects containing fixture data, from a different show to the currently loaded show file.

For more information, see [PSR](/grandma3/2-3/keyword_psr/).

|                                                  |                                                                                                                                                    |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                     |
|                                                  | The show file to be PSR'ed must have been saved to the same software version as the running show file on the station where you performed the PSR.  |

|                                           |                                                                                                                                    |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/warning-b3b0cc.png) | The partial show read can't be oopsed; it is strongly recommended that the loaded show file be renamed before proceeding with PSR. |

To access the PSR menu:

Press Menu, tap Show Creator, then tap PSR. The PSR menu opens:

![](/img/grandma3/2-3/window_psr_show-7390aa.png)

The arrow-shaped tabs at the top will guide you through the different steps.

1. Tap the Show tab on the bar at the top of the menu.
2. Select a drive (on the right side of the title bar)
3. Select a show file.
4. Tap Select at the bottom of the window or tap Patch in the arrow shape tab bar on top.

The Rename Show File pop-up opens:

![](/img/grandma3/2-3/rename-20show-20file-20pop-20up-7c0915.png)

Enter the new name and tap Rename. Tap Do Not Rename if you don't want to rename the show file.\
If you don't enter a new name, tapping Rename will result in the same outcome as tapping Do Not Rename.

---

### PSR Prepare Menu

If the selected file is suitable, the PSR Prepare menu will open.

![](/img/grandma3/2-3/window_psr_menu_patch-b29323.png)

When entering the PSR Prepare menu, the software matches the fixtures in the following order:

1. Fixture ID
2. Channel ID
3. Name
4. GUID

The menu is divided into two areas:

- On the left, **PSR Patch** displays the patch of the show file to be imported and its name in the title bar.
- On the right, **Local Running Patch** displays the currently loaded show file and its name in the title bar.

Editing the corresponding cell of the **PSR Patch** allows you to change the properties for **Stage**, **FixtureID**, **IDType**, and **CID**.\
Changed properties are displayed in a cyan font. Cells that cannot be edited have a darker background color.

When an IDType is renamed in the PSR Show, two names may appear in one cell of the IDType of the **PSR Patch**. They are displayed with this naming scheme: Name in **PSR Show** (Name in **Local Show**). The names of the IDTypes of the **PSR Show** can't be taken over into the **Local Show**.

When fixtures are not set to the same IDType/CID combination, or one has no Fixture ID, they will be set to the new IDType PSR and get a consecutive CID.

Rows with corresponding fixtures on both sides are called matched.

Use the tools between both patch areas to define which fixtures will be used:

- ![](/img/grandma3/2-3/icon_ok_15_v2-1-bc9f38.png) Use the selected fixtures in the resulting patch.
- ![](/img/grandma3/2-3/icon_15_clone_flip_v2_0-3073c4.png) Use the fixtures from the opposite patch in the resulting patch.
- ![](/img/grandma3/2-3/icon_cross_15px-ba31d0.png) Remove the selected fixtures from the resulting patch. 

Marked fixtures have a green background. After the PSR Prepare process, they will exist in the currently loaded show file with their respective fixture types.\
Different fixtures can be used from the right and left sides, but not fixtures on the same row.

Environmental fixtures can be hidden by tapping Hide Environmental in the title bar.

Use the search field to filter the patches by fixture names.\
Other filters are available:

- Stage: Displays the fixtures of the selected stage.
- Match Type: Displays the fixtures depending on their matching state:

1. **Non****e**: No filters applied.
2. **Matched**: Displays only fixture pairs that are matched together.
3. **Unmatched**: Displays only fixtures that do not match together.
4. **Conflicted**: Displays the conflicting fixtures.

- Fixture Type: Displays only the fixtures of the selected fixture type.
- Layer: Displays only the fixtures of the selected layer.
- Class: Displays only the fixtures of the selected class.
- Reset Filters: Resets all filters.

For a fast selection of fixtures to be taken, tap one of the four buttons at the bottom of the window:

- Use PSR Only: The resulting patch contains only fixtures from the **PSR** show file.
- Use Local Only: The resulting patch contains only fixtures from the **Local** show file. 
- Merge PSR: Add all unmatched or unselected fixtures from the **PSR** show list to the resulting patch. 
- Merge Local: Add all unmatched or unselected fixtures from the Local show list to the resulting patch. 

Tap Reset in the menu title bar to reset all changes and filters.

- When done, tap Proceed in the bottom right corner of the window or Import in the tab bar. The PSR Patch Summary pop-up opens:

  ![](/img/grandma3/2-3/window_patch_summary-8a81aa.png)

  Tap OK to proceed with the PSR Import menu or Cancel.

---

### - PSR Import Menu

The menu is divided into three areas:

1. The left area (PSR) displays the different pools of the showfile to be PSR'ed, and the title bar displays the name of the show file. Navigate the object tree to the objects you want to import. Tap ![](/img/grandma3/2-3/icon_playback_forwards_15_v1-9-26c950.png) to unfold a level in the tree. Mark the objects to be imported by tapping their checkboxes. Selected objects get a yellow checkmark and are displayed in the center area. Parent objects get a gray check mark to indicate that some child objects are selected. When selecting an object that has a reference, the reference is also marked for import and gets a purple checkmark. A number behind the checkbox indicates the hierarchy level of an object.

The colors of the indicator bar indicate the following states:

- Green: This element contains newer data than the local show file.
- Orange: The children of this element are a mixture of older and newer data in the PSR show file.
- Red: This element contains only older data in the PSR show file.

_![](/img/grandma3/2-3/window_psr_import_v2-0-3-956d02.png)\
PSR Import menu_

1. The center area displays the last selected object type in the left area and allows the definition of the **Import Index** (which spot in the pool it will be imported to). Edit a cell in the **Import Index** column or tap a pool object in the right area (Local). When the Import Index is set to \<Auto>, the same object exists in both show files, and the object will be merged with the matching object in the locally running show file.

1) The right area (Local Running) displays the corresponding pool in the local show file. The title bar also displays the name of the show file. The orange collected frames indicate where the objects will be imported. When tapping into the pool in the Local Running area, only selected objects in the PSR area will be imported. 

### Import non-default DataPool

To import a data pool other than the default one, select a non-default data pool by tapping its checkboxes. Then tap on the referring parent DataPools object in the tree structure. The right area (Local Running) now displays DataPools. 

Select a tree pool object in the right area. A pop-up window appears: 

![](/img/grandma3/2-3/window_create_new_data_pool-05a841.png)

Confirm by tapping **OK**. A new DataPool with the non-default Datapool of the PSR is now created in the locally running showfile. 

Tap Import to transfer the selected object into the local showfile. Objects that were imported are marked as imported in the object tree.

Tap Cleanup to remove imported items from the PSR.

System-locked objects, for example, world 1 or filter 1, can't be imported.

An error message is added to the command line when a data pool is missing.

|                                                    |                                                                                                                                                                                                                                                 |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Known Limitation:**                                                                                                                                                                                                                           |
|                                                    | - The programmer gets clear when entering Import.
- When importing the fixtures, references from fixtures to custom appearances will not be preserved.
- The console must be in standalone or Idle master state to perform a Partial Show Read. |

[](/grandma3/2-3/keyword_psr/)[](/grandma3/2-3/keyword_psr/)[](/grandma3/2-3/keyword_psr/)

|                                            |                                                                                                                                                                |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                      |
|                                            | Use the PSR keyword in the programmer to select fixtures of the ID type PSR. For more information, see [PSR keyword](/grandma3/2-3/keyword_psr/#h2_873740972). |

####

####

####
