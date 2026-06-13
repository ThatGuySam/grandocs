---
title: "Macro"
description: "To go to the Macro keyword, press Macro."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_macro.html"
scrapedAt: "2026-06-12T21:27:55.144Z"
---
To go to the Macro keyword, press Macro.

You can also type **Macro** in the command line or the shortcut **Ma**.

## Description

The Macro keyword is an object keyword access Macros.

The default function for macro is **Go +**. This means calling macros without any function specified starts the macro.

For more information, see [Macros](/grandma2/key_macro/).

## Syntax

**\[Function] Macro** \[ID]

**\[Function] Macro** \[Macro-pool]. \[ID].\[macro-line]

Assign Macro \[Macro-pool]. \[ID].\[macro-line] / \[Parameter] = \[Parameter Value]

## Parameter

The following table displays the assignable parameters for the **macro object** via the command line.

| Parameter | Parameter Value    | Description                                                 |
| --------- | ------------------ | ----------------------------------------------------------- |
| Name      | "Macro name"       | Assign the macro name.                                      |
| CLI       | "On", "Off"        | Assign if the command line interacts with the macro or not. |
| Timing    | "On", "Off"        | Assign if the macro follows the timing or not.              |
| Info      | "Information Text" | Assign additional information to the macro object.          |

The following table displays the assignable parameters for the **macro lines** via the command line.

| Parameter | Parameter Value                    | Description                                                             |
| --------- | ---------------------------------- | ----------------------------------------------------------------------- |
| CMD       | "A valid command"                  | Assign the command executed by the macro line.                          |
| Wait      | "Go", "Follow", "0.000 - 9999.000" | Assign a delay time or a go or follow after the macro line is executed. |
| Info      | "Information Text"                 | Assign additional information to the macro line.                        |
| Disabled  | "Yes", "No"                        | Assign if the macro line is disabled or not.                            |

## Examples

- To start macro 5, type in the command line:

\[Channel]> Macro 5

 

- To set the wait time of macro 3 line 4 to go, type in the command line:

\[Channel]> Assign Macro 1.3.4 /wait="Go"

 

- To store a new empty macro 2, type in the command line:

\[Channel]> Store Macro 2
