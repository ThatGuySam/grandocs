---
title: "Plugin"
description: "To get the Plugin keyword in the command line, type Plugin or the shortcut Pl in the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_plugin.html"
scrapedAt: "2026-06-12T21:27:57.833Z"
---
To get the Plugin keyword in the command line, type **Plugin** or the shortcut **Pl** in the command line.

## Description

The Plugin keyword is an object keyword to access Plugins. The default function for the Plugin keyword is [Go+](/grandma2/key_keyword_go/).

Plugin 1 is a predefined plugin and not editable.

For more information, see [Plugins](/grandma2/key_plugins/).

## Syntax

\[Function] Plugin \[ID]

Assign Plugin \[ID] /\[Parameter]=\[Parameter Value]

## Parameter

The following table displays the assignable parameter via command line.

| Parameter     | Parameter Value          | Description                                                   |
| ------------- | ------------------------ | ------------------------------------------------------------- |
| Name          | "Create Sequence"        | Assign the plugin name.                                       |
| ExecuteOnLoad | "Yes", "No"              | Assign if the plugin be directly executed during show upload. |
| Info          | "Additional Information" | Assign additional information.                                |

## Examples

1\. To executor plugin 2, type in the command line:

\[Channel]> Plugin 2

 2. Press Please. Plugin 2 is executed.

---

1\. To change the name of plugin 2 to "Create Sequence", type in the command line:

\[Channel]> Assign Plugin 2/name="Create Sequence"

2\. Press Please. Plugin 2 has the name "Create Sequence".
