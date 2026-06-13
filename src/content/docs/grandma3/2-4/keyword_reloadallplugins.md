---
title: "ReloadAllPlugins"
description: "To enter the ReloadAllPlugins keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_reloadallplugins.html"
scrapedAt: "2026-06-12T21:24:34.902Z"
---
To enter the ReloadAllPlugins keyword in the command line, use one of the options:

- Type **ReloadAllPlugins** 
- Type **Reloada**
- Type the shortcut **RP**

## Description

The ReloadAllPlugins keyword is a function keyword that is used to reload the content of the external Lua files.

It is necesssary to reload the external Lua files after you edited them, as the edits can influence how Lua behaves.

You may want to test the integrity of the Lua system to make sure that it behaves as expected next time you load the show. This is important as the show file saved does not contain a snapshot of the Lua memory. It only contains the integrated functions and the code in the defined plugins.

When the show file is loaded, the external Lua files and the code of the plugins are reloaded. That is, the code of the Lua file on the harddrive is reread and loaded into the show file again. This then may result in a different state than that after you powered down the console or saved the show file. 

|                                            |                                                           |
| ------------------------------------------ | --------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                 |
|                                            | Double-check the executed command in the system monitor.  |

## Syntax

**ReloadAllPlugins**

****

## Example

- To restart the content of the external Lua files after programming using Lua, type:

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>ReloadAllPlugins  |
