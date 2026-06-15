---
title: "/Tab"
description: "To enter the /Tab option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_tab.html"
scrapedAt: "2026-06-15T18:25:17.265Z"
pagefind: false
---
To enter the **/Tab **option keyword in the command line, use one of the options:

- Type **/Tab**
- Type the shortcut **/Ta**

## Description

The /Tab option keyword is used to define which tab will open in the assign menu. 

## Syntax

**\[Function] Page \["Page\_Name" or Page\_Number].\["Executor\_Name" or Executor\_Number] /Tab \["Option\_Value"]**

****

## General Keywords

General keywords that use the /Tab option keyword:

- [Assign keyword](/grandma3/2-3/keyword_assign/)
- [Edit keyword](/grandma3/2-3/keyword_edit/)
- [EditSetting keyword](/grandma3/2-3/keyword_editsetting/)
- [Page keyword](/grandma3/2-3/keyword_page/)

## Values

The /Tab option keyword uses these values:

- Edit
- EditSetting
- Handle
- Object

## Examples

- To open the edit tab of executor 201 on page 1 using the assign command, type:

|                                                                    |                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Assign Page 1.201 /Tab "Edit" |

 

- To open the assign menu and display the handle tab using the edit command, type:

|                                                                    |                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Edit Page 1.201 /Tab "Handle" |
