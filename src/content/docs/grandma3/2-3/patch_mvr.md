---
title: "My Virtual Rig (MVR)"
description: "MVR (My Virtual Rig) is a file format that is used to share data for a stage set up between a lighting console, a visualizer, a CAD program or similar tools. Th"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/patch_mvr.html"
scrapedAt: "2026-06-15T18:25:20.183Z"
pagefind: false
---
MVR (My Virtual Rig) is a file format that is used to share data for a stage set up between a lighting console, a visualizer, a CAD program or similar tools. This allows for transferring parametric and geometric data between different programs.

It is a complementary system to the GDTF files.

MVR is described in the GDTF help pages (external link): <https://gdtf-share.com/help/en/help/mvr/index.html>

## Import MVR

MVR files can be imported into a show file. This is done from the [Patch menu](/grandma3/2-3/patch_add_fixtures/). The MVR file needs to be in the correct folder for the software to find it. The folder is ../gma3\_library/mvr. It is the same location if the files are on a USB stick.

There is a button at the bottom of the patch menu called Import MVR. Tapping this opens an **Import MVR** pop-up. This is used to browse and select the MVR file. The source drive can be selected in the title bar by tapping the drive selection button (next to the ![cross](/img/grandma3/2-3/icon_cross_v21-b7ee32.png)).

Select the desired file in the list and tap Import MVR to import the MVR file.

The content of the MVR file is added to the patch and the information in the MVR files means that there might be added [Layers, Classes](/grandma3/2-3/patch_classes_layers/), stage elements, or fixtures.

It is a good idea to store the show file **before** importing the MVR. In case it adds unwanted elements or in worst case corrupts the show.

## Export MVR

Exporting the patch to an MVR file is done from the Patch menu. The file is created in the \[folder with grandMA3]\shared\resource\lib\_mvr folder on the selected drive.

At the bottom of the menu, there is a button called Export MVR. Tapping this opens an **Export MVR** pop-up. This can be used to select the desired drive and give the file a name. It also lists already existing MVR files on the selected drive.

The MVR file contains the entire patch including fixture files, stage elements, and organizational elements like the [Classes and Layers](/grandma3/2-3/patch_classes_layers/).

It is a good idea to store the show file **before** exporting it to the MVR file.

|                                                  |                                                                                                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                 |
|                                                  | In order to export an MVR file or GDTF file that contains user meshes and gobos, save the show file to the local hard drive before exporting.  |
