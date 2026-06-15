---
title: "Export Fixture Types"
description: "It is possible to export the fixture types to the following locations:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ft_export.html"
scrapedAt: "2026-06-15T18:25:39.225Z"
pagefind: false
---
It is possible to export the fixture types to the following locations:

- Internal drive
- External USB drive

It is possible to export the fixture types as the following file formats:

- grandMA3 format
- GDTF

**Requirement:** Open the Patch.

1. Tap Fixture Types in the bar on the left of the patch dialog.\
   The **Fixture Types** menu opens. 

![](/img/grandma3/2-3/window_fixture_type_v1-6-e28e79.png)

_Open Fixture Types_

2. Tap at the to be exported fixture type in the list.
3. Tap Export.\
   The **Export Fixture Type** pop-up opens.

![](/img/grandma3/2-3/window_export_fixture_type-e38d01.png)

_Export a fixture type_

4. To select the destination drive, tap at Internal in the title bar.\
   If an USB stick is inserted, the USB stick can be chosen.
5. To export the fixture type as grandMA3 format for only grandMA3 use case, tap at User.\
   To export the fixture type as GDTF to use the fixture type within different programs that can read GDTF, tap at GDTF.
6. Enter a name.

|                                            |                                                                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                            |
|                                            | If no name is entered, the fixture type file will be exported as manufacturer\@name.xml or manufacturer\@name.gdtf.  |

7. Tap Export.

The selected fixture type is exported to the selected drive.

When the selected drive is internal, the fixture type is exported to the computer's local drive **(C:)\ProgramData\MALightingTechnology\gma3\_library\fixturetypes**.

When the selected drive is external, the fixture type is exported to the external USB Drive **(E:)\grandMA3\library\fixturetypes.**
