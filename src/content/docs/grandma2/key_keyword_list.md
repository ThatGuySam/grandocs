---
title: "List"
description: "To get the List keyword into the command line, press and hold !ma + List."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_list.html"
scrapedAt: "2026-06-12T21:27:53.756Z"
---
To get the List keyword into the command line, press and hold ![ma](/img/grandma2/ma_1-290dfd.png) + List.

You can also type **List** or the shortcut **Li** in the command line.

## Description

The List keyword displays show data in the command line feedback window.

You can list any object, for example:

- Cues of the selected executor
- Groups
- Presets
- Messages

If the list does not specify any type of object, the data from the current destination will be displayed.

The List keyword is a function keyword.

## Syntax

**List** \[Object-list] / \[Option]= \[Option Value]

## Options

To get a list of all available option to the List keyword, type in the command line:

\[Channel]> List /?

| Option    | Option Shortcut | Option Value          | Description                                                                                                     |
| --------- | --------------- | --------------------- | --------------------------------------------------------------------------------------------------------------- |
| condition | cnd             | See Messages command. | The option condition is only valid in combination with the [Messages command](/grandma2/key_keyword_messages/). |
| filename  | f               | Name of file          | Creates a csv file in the reports folder with the List data.                                                    |

## Examples

- To list all cues of the selected executor in the command line feedback window type in the command line:

\[Channel]> List Cue

 

- To list the first ten groups of the groups pool in the command line feedback window type in the command line:

\[Channel]> List Group Thru 10

 

- To list all attribute names existing in the show file in the command line feedback window type in the command line:

\[Channel]> List Attribute

 

- To list all color presets starting with the letter m in the command line feedback window type in the command line:

\[Channel]>List Preset "color"."m\*"

\- or -

\[Channel]>List Preset 4. "m\*"
