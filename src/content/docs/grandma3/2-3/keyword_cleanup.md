---
title: "CleanUp"
description: "To enter the CleanUp keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_cleanup.html"
scrapedAt: "2026-06-15T18:24:58.233Z"
pagefind: false
---
To enter the CleanUp keyword in the command line, use one of the options:

- Type **CleanUp**
- Or type the shortcut **Clean**

## Description

The CleanUp keyword is a command keyword that is used to delete objects that are not used and do not contain references in the show file. For example, you can clean up sequences that are not assigned to an executor.

## Syntax

CleanUp \[Object] \["Object\_Name" or Object\_Number] (/Option)

## Option Keywords

The CleanUp keyword uses the following option keywords:

- [/Recipe](/grandma3/2-3/ok_recipe/)
- [/Selective](/grandma3/2-3/ok_selective/)
- [/Type](/grandma3/2-3/ok_type/)

## Examples

- To delete all unassigned sequences, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>CleanUp Sequence Thru |

 

- To delete all unused color presets in preset pool 4, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>CleanUp Preset 4.\* |

 

- To delete all images without reference, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>CleanUp Image 3.1 Thru |
