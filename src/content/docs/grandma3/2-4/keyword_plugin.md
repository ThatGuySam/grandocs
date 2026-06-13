---
title: "Plugin"
description: "To enter the Plugin keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_plugin.html"
scrapedAt: "2026-06-12T21:24:33.697Z"
---
To enter the Plugin keyword in the command line, use one of the options:

- Press MA + X14 | Macro + X14 | Macro
- Type **Plugin**
- Type the shortcut **Pl**

## Description

The Plugin keyword is an object keyword which is used to access plugins. 

The default function of the Plugin keyword is [Go+](/grandma3/2-4/keyword_goplus/).

## Syntax

(\[Function]) Plugin \["Plugin\_Name" or Plugin\_Number]\(.\["LuaComponent\_Name" or LuaComponent\_Number]) ("Argument\_Value")

## Examples

- To edit plugin 2, type:

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Edit Plugin 2  |

 

- To label plugin 1 "Weakon," type:

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Label Plugin 1 "Weakon"  |

---

## Call a Plugin and Specify an Argument

 **Requirement:**

- Create a plugin that uses an argument when calling a function.

In this example our plugin is plugin 1 of the plugin pool and the argument is called name in the definition of the function. 

|                                                                                |
| ------------------------------------------------------------------------------ |
| [Copy Code](javascript:void\(0\))Lua                                           |
| ```
return function(display_handle, name)
	Printf("My name is "..name)
end
``` |

- To generate the sentence "My name is Richard Roe" in the command line history, type:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Plugin 1 "Richard Roe"  |

Result:

|                        |                        |
| ---------------------- | ---------------------- |
| OK :                   | Plugin 1 "Richard Roe" |
| My name is Richard Roe |                        |

Response in the command line history

"My name is Richard Roe" is now displayed in the command line history. 

---

## Call a Dedicated LuaComponent

**Requirement: **

- Create at least two lua components in the plugin.

For more information on how to create lua components see [Plugins](/grandma3/2-4/plugins/). 

- To call the second LuaComponent of plugin 1, type:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Plugin 1.2  |
