---
title: "LoadShow"
description: "To enter the LoadShow keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_loadshow.html"
scrapedAt: "2026-06-12T21:24:30.755Z"
---
To enter the LoadShow keyword in the command line, use one of the options:

- Type **LoadShow**
- Type the shortcut **Lo**

## Description

The LoadShow keyword is a function keyword that loads a show from the folders: shows, demo shows, or backup**.**

For more information on the folder structure of shows, demo shows, and backups, see [Show File ](/grandma3/2-4/show_file_management/#FolderStructure)[Handling](/grandma3/2-4/show_file_management/#FolderStructure) and [Folder Structure](/grandma3/2-4/fm_folder_structure/). 

## Syntax

LoadShow \["Show\_Name"] (/Option)

## Option Keywords

The LoadShow keyword uses the following option keywords:

- [/All](/grandma3/2-4/ok_all/)
- [/DMXProtocols](/grandma3/2-4/ok_dmxprotocols/)
- [/LocalSettings](/grandma3/2-4/ok_localsettings/)
- [/NoSave](/grandma3/2-4/ok_nosave/)
- [/NoShowData](/grandma3/2-4/ok_noshowdata/)
- [/OutputStations](/grandma3/2-4/ok_outputstations/)
- [/Path](/grandma3/2-4/ok_path/)
- [/Save](/grandma3/2-4/ok_save/)
- [/Type](/grandma3/2-4/ok_type/)

## Examples

- To load the show file with the file name "MacBeth", type:

|                                                                    |                                        |
| ------------------------------------------------------------------ | -------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>LoadShow "MacBeth" |

 

- To create a new show file with the name "Henrietta", type:

|                                                                    |                                          |
| ------------------------------------------------------------------ | ---------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>LoadShow "Henrietta" |

 

|                                                  |                                                                                                                                                     |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                      |
|                                                  | To load the new show again, save the new show file after loading it. For more information see [SaveShow keyword](/grandma3/2-4/keyword_saveshow/).  |
