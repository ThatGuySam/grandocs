---
title: "Load a Show File"
description: "Show files are separated into Shows, Backup Shows, Demo Shows, and Template Shows. For more information, see Backup, Demo, and Template Show Files."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/sfh_load.html"
scrapedAt: "2026-06-12T21:24:18.917Z"
---
Show files are separated into Shows, Backup Shows, Demo Shows, and Template Shows. For more information, see [Backup, Demo, and Template Show Files](/grandma3/2-4/sfh_backup/).

For more information about Show History and Show Description, see [Organize Show Files](/grandma3/2-4/shf_organize/).

Use the search field to filter for specific show files.

To load a show file:

1. Open the Backup menu and tap Load.
2. Tap the search field and start typing. The show file list is filtered
3. Select a show file and tap Load.

![](/img/grandma3/2-4/menu_backup_load_v2-3-265af0.png)

Load menu in the Backup menu with the four checkbox buttons on the right side.

To load a show via the command line, use the [LoadShow keyword](/grandma3/2-4/keyword_loadshow/).

---

 

## Load Show Segments

The following checkbox buttons define which segments of a show file are loaded:

- Show Data: Loads the show-relevant data from the show file. This includes the patch, pool objects, user, and user profiles. Show Data is enabled by default.
- Local Settings: Loads the local settings. For example, this includes web remote settings and onPC settings.
- Output Stations: Includes configuring all DMX ports, SMPTE settings, and MIDI settings.
- DMX Protocols: Loads the configuration of all available DMX protocols (Art-Net and sACN).

If a segment is not checked, the currently loaded settings are kept for that segment.

- Check All is a quick way to select all checkboxes.
- Load: The show file will be loaded. If no checkbox button is enabled, Load is disabled. 

|                                                  |                                                                                                                                                                                                                     |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                      |
|                                                  | Show files that were saved with grandMA3 v1.8.8.2 or prior do not contain Local Settings, Output Configuration, and DMX Protocols saved inside. The show file needs to be saved first with grandMA3 v1.9 or higher. |
