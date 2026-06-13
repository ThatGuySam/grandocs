---
title: "/NoSubfolders"
description: "To enter the /NoSubfoldersption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_nosubfolders.html"
scrapedAt: "2026-06-12T21:24:42.332Z"
---
To enter the **/NoSubfolders **option keyword in the command line, use one of the options:

- Type **/NoSubfolders**
- Type the shortcut** /Nos**

## Description

The /NoSubfolders option keyword is used to exclude subfolders when importing library files or listing libraries. 

|                                            |                                       |
| ------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                             |
|                                            | Subfolders are created by the users.  |

## Syntax

\[Function] \[Object] \["Object\_Name" or Object\_Number] /NoSubfolders

## General Keywords

General keywords that use the /NoSubfolders option keyword:

- [List keyword](/grandma3/2-4/keyword_list/)
- [Import keyword](/grandma3/2-4/keyword_import/)

## Examples

- To only show color themes in the main folders when listing, type:

|                                                                    |                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>List ColorTheme /NoSubfolders  |

 

It might as well happen that there are two files with the same name located in the main folder and a subfolder. 

- To import the macro library file "bestmacro.xml" located in the main folder, type:

|                                                                    |                                                                                               |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Import Macro Library "bestmacro.xml" At Macro 5 If Drive 2 /NoSubfolders  |
