---
title: "/Path"
description: "To enter the /Pathption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_path.html"
scrapedAt: "2026-06-12T21:24:42.634Z"
---
To enter the **/Path **option keyword in the command line, use one of the options:

- Type **/Path**
- Type the shortcut **/Pa**

## Description

The /Path option keyword defines the folder path where an imported or exported file is saved. 

|                                            |                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                                                           |
|                                            | -Enter a path beginning with a letter or number if the path is incorporated with the default folder structure.-Enter a path beginning with the forward-slash (/) character if the path begins at the root of the device.-Entering a path that does not already exist creates the necessary folders. |

## Syntax

\[Function] \[Object] \["Object\_Name" or Object\_Number] (If Drive \[Drive\_Number]) /Path "The/Path/To/My/Files"

## General Keywords

General keywords that use the /Path option keyword:

- [Export keyword](/grandma3/2-4/keyword_export/)
- [Import keyword](/grandma3/2-4/keyword_import/)
- [LoadShow keyword](/grandma3/2-4/keyword_loadshow/)
- [SaveShow keyword](/grandma3/2-4/keyword_saveshow/)

## Examples

- To export macro 1, with the name "test," to a folder labeled "myfavorites" at the root of the first connected USB drive, type:

|                                                                    |                                                                            |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Export Macro 1 "test" If Drive 2 /Path "/myfavorites"  |

 

- To load the show file with the name "Fabulous" which was placed in the subfolder structure "/test" on the USB drive, type:

|                                                                    |                                                                   |
| ------------------------------------------------------------------ | ----------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>LoadShow "Fabulous" If Drive 2 /Path "/test"  |
