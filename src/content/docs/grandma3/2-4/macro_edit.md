---
title: "Edit Macros"
description: "There are two ways to edit macros: The GUI and the command line."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/macro_edit.html"
scrapedAt: "2026-06-12T21:24:58.086Z"
---
There are two ways to edit macros: The GUI and the command line.

## Edit a Macro by Using the GUI

**Requirement:**

- An open Macro Pool on one of the screens.

To edit a macro by using the GUI:

1. Tap, hold, and swipe out of the macro in the macro pool that is to be edited.
2. Swipe to the Edit swipey command and release the screen.\
   The editor opens.
3. Edit the fields that are to be changed.
4. Close the editor when the macro is correct. 

Read the [Create Macros ](/grandma3/2-4/macro_create/)topic to learn about adding lines and labeling a macro.

Macro lines can be deleted by selecting the line and then tapping the Delete button in the editor.

## Edit a Macro by Using the Command Line

**Requirement:**

- The **command-line feedback** is very helpful to have visible.

Remember that the [List](/grandma3/2-4/keyword_list/) command displays the content at the current location and can be used at any time.

This is the editing process:

1. Navigate to the macro that is to be edited:

|                                                                    |                                                                               |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination Macro \["Macro\_Name" or Macro\_Number] |

2. Edit the fields using the [Set ](/grandma3/2-4/keyword_set/)command. This overwrites the current content in the field.
3. When done editing, return to the root location:

|                                                                    |                                                                             |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@ShowData/DataPools/Default/Macros/Macro #>ChangeDestination Root |

Read the [Create Macros](/grandma3/2-4/macro_create/) topic to learn about adding lines and labeling a macro.

 

## Delete a Macro Row Using the Command Line

To delete a macro row by using the command line:

1. Navigate to the macro where the row is to be deleted:

|                                                                    |                                                                               |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ChangeDestination Macro \["Macro\_Name" or Macro\_Number] |

2. Use the [Delete](/grandma3/2-4/keyword_delete/) command followed by the row number:

|                                                                    |                                                                                         |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@ShowData/DataPools/Default/Macros/Macro #>Delete \[Macro\_Row\_Number\_List] |

|                                            |                                                   |
| ------------------------------------------ | ------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                         |
|                                            | To delete multiple rows, type a list of numbers.  |

3. When done deleting rows, return to the root location:

|                                                                    |                                                                             |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\@ShowData/DataPools/Default/Macros/Macro #>ChangeDestination Root |

The macro rows are deleted.
