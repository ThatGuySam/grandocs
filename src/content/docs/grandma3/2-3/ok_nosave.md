---
title: "/NoSave"
description: "To enter the /NoSave option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_nosave.html"
scrapedAt: "2026-06-15T18:25:15.975Z"
pagefind: false
---
To enter the **/NoSave **option keyword in the command line, use one of the options:

- Type **/NoSave**
- Type the shortcut **/NS** or **/Nosa**

## Description

The /NoSave option keyword defines for the show file not to be saved when loading a show, or shuttig down, restarting, or rebooting the console or your onPC. 

|                                                  |                                                                                                                                        |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                         |
|                                                  | The /NoSave option keyword only works in the conjunction with the [/NoConfirmation option keyword](/grandma3/2-3/ok_noconfirmation/).  |

## Syntax

**\[Function] (\[Object] \["Object\_Name" or Object\_Number]) /NoConfirmation /NoSave**

****

## General Keywords

General keywords that use the /NoSave option keyword:

- [LoadShow keyword](/grandma3/2-3/keyword_loadshow/)
- [Reboot keyword](/grandma3/2-3/keyword_reboot/)
- [Restart keyword](/grandma3/2-3/keyword_restart/)
- [ShutDown keyword](/grandma3/2-3/keyword_shutdown/)

## Example

- To shut down the grandMA3 console without saving the show file, type:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ShutDown /NoConfirmation /NoSave  |
