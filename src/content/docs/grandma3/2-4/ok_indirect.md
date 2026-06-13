---
title: "/Indirect"
description: "To enter the /Indirectption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_indirect.html"
scrapedAt: "2026-06-12T21:24:40.973Z"
---
To enter the **/Indirect **option keyword in the command line, use one of the options:

- Type **/Indirect**
- Type the shortcut** /Ind**

## Description

|                                            |                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                              |
|                                            | The /Indirect Option keyword can be used with all object types to which you can assign other objects.  |

The /Indirect option keyword is used to directly edit an assigned object. Executing a command containing this option keyword opens the editor for the object to be modified. 

## Syntax

Edit \[Object] \["Object\_Name" or Object\_Number] Property \["Property\_Name"] /Indirect

## General Keywords

General keywords that use the /Indirect option keyword:

- [Edit keyword](/grandma3/2-4/keyword_edit/)
- [Property keyword](/grandma3/2-4/keyword_property/)

## Examples

- To open the appearance editor and edit the appearance that is assigned to group 8, type:

|                                                                    |                                                                   |
| ------------------------------------------------------------------ | ----------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Edit Group 8 Property "Appearance" /Indirect  |

 

- To edit the object that is triggered by the first agenda entry, type:

|                                                                    |                                                                |
| ------------------------------------------------------------------ | -------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Edit Agenda 1 Property "Object" /Indirect  |
