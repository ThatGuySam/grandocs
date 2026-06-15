---
title: "New Show File"
description: "To create a new show file:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/sfh_new.html"
scrapedAt: "2026-06-15T18:24:54.493Z"
pagefind: false
---
To create a new show file:

1. Open the Backup menu and tap New Show.

![](/img/grandma3/2-3/menu_new_show_v2-2-e0ca42.png)

Backup menu - New Show

2. Type to overwrite the file name or keep the automatically generated show file name.
3. Select the show segments you would like to omit from the new show file. The description changes accordingly.
4. Tap New Show in the bottom right corner.
5. When the currently loaded show file has unsaved changes, a Warning pop-up appears.
6. Tap Save to store the currently loaded show. This might not be the right option. Tap Do not Save to not make any changes to the loaded show file. Tap Cancel to cancel the creation of a new show.\
   -or-\
   When the currently loaded show file does not have any unsaved changes, the Create New Show pop-up appears. Tap New Show. A new show file has been created.

Use the [NewShow keyword](/grandma3/2-3/keyword_newshow/) to create a new show from the command line.

|                                            |                                                                         |
| ------------------------------------------ | ----------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                               |
|                                            | It is possible to use local letters in the filename, like æ, õ, and ä.  |

---

## Clear Show Segments

To define which segments of the current show file should be cleared for the new show, use the four checkbox buttons on the right side:

- Clear Show Data: Clears the show-relevant data from the show file. Includes the patch, pool objects, user, and user profiles. This checkbox is marked as default.
- Clear Local Settings: Clears the local settings. For example, this includes web remote settings and onPC settings.
- Clear Output Stations: Clears the setup of all DMX ports, the SMPTE settings, and the MIDI settings.
- Clear DMX Protocols: Clears the configuration of all available DMX protocols (Art-Net and sACN).

Selected data will be cleared after tapping New Show.

- Check All is a fast selection for all checkboxes.
- All enabled show segments will be omited from the newly created show file.
- An automatically generated description text of the kept show segments can be found in the Description area. After creating a new show file, you can change the description in the backup menu.

|                                            |                                                                       |
| ------------------------------------------ | --------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                             |
|                                            | Make sure to at least select one checkbox button to enable New Show.  |
