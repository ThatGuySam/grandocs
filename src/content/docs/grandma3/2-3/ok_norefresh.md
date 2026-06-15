---
title: "/NoRefresh"
description: "To enter the /NoRefresh option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_norefresh.html"
scrapedAt: "2026-06-15T18:25:15.832Z"
pagefind: false
---
To enter the **/NoRefresh **option keyword in the command line, use one of the options:

- Type **/NoRefresh**
- Type the shortcut **/Nor**

## Description

The /NoRefresh option keyword is used to suppress the refresh of libraries during import or export of objects.

|                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                            | When listing the library files of a certain type and/or path, it may take a while to type the path and the options into the command line. When a file is to be imported after a type and/or path has been specified during a previous command, the type and/or path will typically need to be entered again as part of the import command. Using the **/NoRefresh** option, it is not necessary to reenter [/Type](/grandma3/2-3/ok_type/) and/or [/Path](/grandma3/2-3/ok_path/) as part of the import command.  |

## Syntax

\[Function] Object \["Object\_Name" or Object\_Number] (If Drive \[Drive\_Number]) (/Option) ("/Option\_Value")

## General Keywords

General keywords that use the /NoRefresh option keyword:

- [Export keyword](/grandma3/2-3/keyword_export/)
- [Import keyword](/grandma3/2-3/keyword_import/)

## Examples

To use the /NoRefresh option to avoid reentering drive and path specifications:

- List all macro libraries within a specific path on a specific drive:

|                                                                    |                                                                                         |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>List Library If Drive 2 /Path "/My\_grandMA3\_files/macro/archive"  |

 

- To import the second library from the list without reentering the drive and path, type:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Import Library 2 /NoRefresh  |
