---
title: "CleanUp"
description: "To enter the CleanUp keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_cleanup.html"
scrapedAt: "2026-06-12T21:24:23.016Z"
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

- [/Recipe](/grandma3/2-4/ok_recipe/)
- [/Selective](/grandma3/2-4/ok_selective/)
- [/Type](/grandma3/2-4/ok_type/)

## Examples

- To delete all unassigned sequences, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>CleanUp Sequence Thru |

 [![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?CleanUp%20Sequence%20Thru) 

- To delete all unused color presets in preset pool 4, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>CleanUp Preset 4.\* |

 [![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?CleanUp%20Preset%204.%2A) 

- To delete all images without reference, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>CleanUp Image 3.1 Thru |

 [![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?CleanUp%20Image%203.1%20Thru)
