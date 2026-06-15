---
title: "ReloadAllPlugins"
description: "To enter the ReloadAllPlugins keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_reloadallplugins.html"
scrapedAt: "2026-06-15T18:25:09.324Z"
pagefind: false
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
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                 |
|                                            | Double-check the executed command in the system monitor.  |

## Syntax

**ReloadAllPlugins**

****

## Example

- To restart the content of the external Lua files after programming using Lua, type:

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ReloadAllPlugins  |
