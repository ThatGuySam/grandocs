---
title: "List"
description: "To enter the List keyword in the command line, use one of these options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_list.html"
scrapedAt: "2026-06-15T18:25:05.219Z"
pagefind: false
---
To enter the List keyword in the command line, use one of these options:

- Press List
- Type **List**
- Type the shortcut **Li**

## Description

The List keyword displays show data, including objects and their properties, in the command line history.

It is possible to list any object or any property of:

- Cues of the selected executor
- Groups
- Presets

If the List command does not specify any type of object, the data of the current command line destination is displayed.

The List command can also display the contents of library folders on the console, onPC station, or connected USB drives.

|                                            |                                                                                                                                                                                                                  |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                        |
|                                            | The /Path option instructs the software to access folders other than the defaults. For more information on the default folder structure, see the [Folder Structure](/grandma3/2-3/fm_folder_structure/) topic.   |

The List keyword is a function keyword.

## Syntax

**List** \[Object] \["Object\_Name" or Object\_Number]

List \[Object] Library (If Drive \[Drive\_Number]) (/Path \[FolderPath]) (/Type \[FileType])

|                                                  |                                                                                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                          |
|                                                  | When specifying a type, the word "System" or "User" must be capitalized. For more information see the option keyword [/Type](/grandma3/2-3/ok_type/).   |

## Examples

- To list the first ten fixtures of the Fixture Edit Setup, type:

|                                                                    |                                          |
| ------------------------------------------------------------------ | ---------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>List Fixture Thru 10 |

 

- To list all existing attributes in the show file, type:

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>List Attribute |

 

- To list the first 5 groups of the group pool, type:

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>List Group Thru 5 |

 

- To list the macros available to import from the default macro library folder on the first connected USB drive, type:

|                                                                    |                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>List Macro Library If Drive 2 |

 

---

## Example - List Properties of a Parent and Their Children's Properties

|                                                  |                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                                                                                                                                                                                              |
|                                                  | In case the children of an object should have various properties, they will be listed using names and numbers when executing List within the parent object. To display the properties of a child directly, you have to specifically list the child. However, the steps described here can also be used in other constellations consisting of a parent and their children.   |

In the following example we use StationSettings as the parent and DeskLightsCollect as one of their children. 

1. Change the destination of the command line first:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination StationSettings |

Result: 

|                                                                    |                             |
| ------------------------------------------------------------------ | --------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@StationSettings> |

 

2. To list the properties of the station settings, type:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) |  User name\@StationSettings> List |

The children are now displayed in the command line history:

![](/img/grandma3/2-3/window_command-line-history_list-keyword_v1-7-88d0fd.png)

The children of the Station Settings are listed

 

3. To list the properties of one child, for example DeskLightsCollect, type: 

|                                                                    |                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@StationSettings> List DeskLightsCollect |

The properties of the child DeskLightsCollect are now displayed in the command line history:

![](/img/grandma3/2-3/window_command-line-history_properties-of-a-child_v1-7-189769.png)

The properties of DeskLightsCollect are listed

 

4.  To access the folder DeskLightsCollect within Station Settings, type:

 

|                                                                    |                                                                 |
| ------------------------------------------------------------------ | --------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@StationSettings> ChangeDestination DeskLightsCollect |

Result:

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@StationSettings/DeskLightsCollect> |

 

5.  To list the properties of the children of DeskLightsCollect, type:

|                                                                    |                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@StationSettings/DeskLightsCollect> List |

 

The children's properties are now displayed. 

![](/img/grandma3/2-3/window_command-line-history_list_desklightscollect_v1-7-5b834f.png)

Properties of DeskLightsCollect listed in the command line history
