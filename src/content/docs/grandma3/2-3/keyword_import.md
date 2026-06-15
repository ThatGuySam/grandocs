---
title: "Import"
description: "To enter the Import keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_import.html"
scrapedAt: "2026-06-15T18:25:04.318Z"
pagefind: false
---
To enter the Import keyword in the command line, use one of the options:

- Type **Import**
- Type the shortcut **Im**

## Description

Import is a function keyword that incorporates small portions of exported show file data, available as XML files, into the current show file.

The Import command loads data into the specified destination occupying the first free pool object when no certain pool object is given. 

By default, files will be imported from the relevant folder within the library folder structure, either on the local drive of the console or onPC station, or on a selected USB flash drive. For more information on this folder structure see [Folder Structure](/grandma3/2-3/fm_folder_structure/).

## Syntax

Import \[Object] Library "File Name.xml" (If Drive \[Drive\_Number]) (At \["Object\_Name" or Object\_Number]) (/Option) ("Option\_Value")

## Option Keywords

The Import keyword uses the following option keywords:

- [/Path](/grandma3/2-3/ok_path/)
- [/Gaps](/grandma3/2-3/ok_gaps/)
- [/NoDependencies](/grandma3/2-3/ok_nodependencies/)
- [/NoRefresh](/grandma3/2-3/ok_norefresh/)
- [/Type](/grandma3/2-3/ok_type/)

## Examples

**Requirements:** Destination is changed to fixture types.

- To import a MAC Aura XB as a new fixture type in the show file, type:

|                                                                    |                                                                      |
| ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@ShowData/Patch/FixtureTypes> Import Library "MAC Aura XB" |

 

**Requirements:** Destination is changed to macros.

- To import the macro color.xml to the first free pool object, type:

|                                                                    |                                                                          |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@ShowData/DataPools/Default/Macros> Import Library "color.xml" |

 

- To import the same macro to macro 42 in the macro pool without changing the command line destination, type:

|                                                                    |                                                                  |
| ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Import Macro Library "color.xml" At Macro 42 |

 

 **Requirements:** Destination is changed to macros.

- To import all macros from the library into the show file, type:

|                                                                    |                                                                       |
| ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@ShowData/DataPools/Default/Macros> Import Library "\*.xml" |
