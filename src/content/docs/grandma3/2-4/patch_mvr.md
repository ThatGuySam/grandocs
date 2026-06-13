---
title: "My Virtual Rig (MVR)"
description: "MVR (My Virtual Rig) is a file format that is used to share data for a stage set up between a lighting console, a visualizer, a CAD program or similar tools. Th"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/patch_mvr.html"
scrapedAt: "2026-06-12T21:24:46.735Z"
---
MVR (My Virtual Rig) is a file format that is used to share data for a stage set up between a lighting console, a visualizer, a CAD program or similar tools. This allows for transferring parametric and geometric data between different programs.

It is a complementary system to the GDTF files.

MVR is described in the GDTF help pages (external link): <https://gdtf-share.com/help/en/help/mvr/index.html>

---

## Import MVR

Partial Show Read has been enhanced to support MVR integration. For more information, see the [Partial Show Read (PSR)](/grandma3/2-4/sc_psr/).

---

## Export MVR

To export the patch as an MVR file, open the **Patch** menu. The exported file will be saved in the following directory on the selected drive: MALightingTechnology\gma3\_library\mvr.

At the bottom of the menu, tap the Export button to open the **Patch Export** pop-up window, which could look like this:\
![Update this description text.](/img/grandma3/2-4/popup_patchexport_v2-4-604a95.png)

Patch menu - Export

In this window, you can:

- Select the desired drive.
- Enter a file name in the **Name** field.
  - If you leave it as `<Default>`, the current show file name will be used automatically.
- View existing MVR files on the selected drive.

### Export Options

There are two export file types:

- grandMA3
- MVR (selected by default)

For more information, see [Patch and Fixture Setup](/grandma3/2-4/patch/). 

On the right side of the pop-up, you can choose the scope of the export:

- Entire Patch: Exports the entire patch including fixture files, stage elements, and organizational elements like the [Classes and Layers](/grandma3/2-4/patch_classes_layers/).
- Selected Fixtures: Exports the selected fixtures including fixture files, stage elements, and organizational elements.

Tap Export to begin the export process and generate the MVR file.\
Tap Delete to remove the currently selected file from the list.

 /MVR exports fixtures in MVR format. For more information, see [/MVR keyword](/grandma3/2-4/ok_mvr/) topic.

|                                            |                                                                                   |
| ------------------------------------------ | --------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                         |
|                                            | It is a good idea to store the show file **before** exporting it to the MVR file. |
