---
title: "Call"
description: "Calls a function used to apply/engage an object or its content (press 2x button \"ON\")."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_call.html"
scrapedAt: "2026-06-12T21:27:46.177Z"
---
**Call** is a function used to apply/engage an object or its content (press 2x button "ON").

To execute this keyword type **Call** or the shortcut **Ca** into the command line. 

If the Call function is used on objects which contain parameters (fixture values) these values will be loaded (added) into the programmer without a selection of the fixtures. If Call is used on other object types, their content will be applied in its context.

## Syntax

Call \[Object-list]

**Call \[Object-list] / \[option]​**

## Options

To get a list of all available options for the keyword Call in the command line feedback window type into the command line:

\[Channel]> Call /?

The keyword Call has the following options:

| Option             | Shortcut | Option value    | Description                                                                   |
| ------------------ | -------- | --------------- | ----------------------------------------------------------------------------- |
| status             | s        | =False; =True   | Takes all values along with the tracking values actively into the programmer. |
| LAYER              |          | no option value | Sets destination layer.                                                       |
| SCREEN             |          | no option value | Sets destination screen.                                                      |
| toggle\_activation | t        | no option value |                                                                               |

## Examples

\[Channel]> ​Call Preset 3.1

Loads the content of Preset 3.1 into programmer without selecting the fixtures. At universal presets all fixtures supporting these attributes are affected.

 

\[Channel]> ​Call Sequence 1

Status of the last cue of sequence 1 is loaded into the programmer without selecting the fixtures.

 

\[Channel]> ​**Call Cue** 3

Takes all values of Cue 3 of the selected executors actively and all values of Cue 1 and 2 non-actively into the programmer.

 **Note:**\
All values which can be stored are called active values; Values which cannot be stored are called non-active values. 

 

\[Channel]> Call Cue 3 /status

Takes all values along with the tracking values actively into the programmer.
