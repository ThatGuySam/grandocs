---
title: "Export"
description: "To enter the Export keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_export.html"
scrapedAt: "2026-06-12T21:24:26.551Z"
---
To enter the Export keyword in the command line, use one of the options:

- Type **Export**
- Type the shortcut **Exp**

## Description

Export is a function keyword which is used to save objects from the current show file as a smaller file.

If no file name is used in the command, the file name will use the name of the object.

By default, files will be exported to the relevant folder within the library folder structure, either on the local drive of the console or onPC station, or on a selected USB drive. For more information on grandMA3 folders see [Folder Structure](/grandma3/2-4/fm_folder_structure/).

|                                                  |                                                                                                                                                                                                                                                                   |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                                                                    |
|                                                  | When exporting several objects at a time without indicating a file name for each pool object, a separate XML file will be exported.  When exporting several objects at a time indicating a file name, all pool objects will be exported into a shared XML file.   |

|                                            |                                                                                                                                                                                                         |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                               |
|                                            | The Import and Export buttons offer a graphical user interface for import and export functions within the Show Creator Menu. For more information, see [Import/Export](/grandma3/2-4/import-export/).   |

## Syntax

Export \[Object] \["Object\_Name" or Object\_Number] (If Drive \[Drive\_Number]) (/Option) ("Option\_Value")

## Option Keywords

The Export keyword uses the following option keywords:

- [/Gaps](/grandma3/2-4/ok_gaps/)
- [/GDTF](/grandma3/2-4/ok_gdtf/)
- [/HighPrecision](/grandma3/2-4/ok_highprecision/)
- [/NoDependencies](/grandma3/2-4/ok_nodependencies/)
- [/Path ](/grandma3/2-4/ok_path/)
- [/Type](/grandma3/2-4/ok_type/)

## Examples

- To export macro 1 as the XML file "test", type: 

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Export Macro 1 "test" |

 

- To export macro 1 using the macro name, type:

|                                                                    |                                     |
| ------------------------------------------------------------------ | ----------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]> Export Macro 1 |

 

- To export several macros to single XML files at a time, type:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]> Export Macro 1 Thru 42 |

 

- To export macro 1 "test" to the first connected USB drive, type:

|                                                                    |                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Export Macro 1 "test" If Drive 2 |
