---
title: "Store"
description: "To go to the Store keyword, press Store."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_store.html"
scrapedAt: "2026-06-12T21:28:02.337Z"
---
To go to the Store keyword, press Store.\
You can also type **Store** in the command line or use the shortcut **S**.

## Description

The store keyword, stores functions in the show file.

If no object-type or destination is given, the object-type **Cue** will be used for the sequence of the selected executor.

Store is a function keyword.

## Syntax

Store \[object-list] "Name" / \[option] = \[option value]

## Options

To get a list of all available options to the store keyword, type in the command line

\[Channel]> Store /?

The store keyword has the following options.

| Option          | Option Shortcut | Option Value                                         | Description                                                                                                                                                                           |
| --------------- | --------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| addnewcontent   | an              | False, True                                          | False is the same as originalcontent.                                                                                                                                                 |
| auto            | not available   | no option value                                      | Stores preset values with the default preset scope.                                                                                                                                   |
| cueonly         | co              | False, True                                          | Prevents changes to track forward.                                                                                                                                                    |
| effects         | ef              | False, True                                          | Filters or enables effect layer.                                                                                                                                                      |
| embedded        | e               | False, True                                          | Creates embedded preset.                                                                                                                                                              |
| global          | g               | no option value                                      | Stores preset with global values.                                                                                                                                                     |
| keepactive      | ka              | False, True                                          | Keeps values active.                                                                                                                                                                  |
| merge           | m               | no option value                                      | Merges the new values into the existing values. New values have a higher priority and will overwrite existing values. If no new value is given, the values of the existing cue stays. |
| noconfirm       | nc              | no option value                                      | Suppress stores confirmation pop-up.                                                                                                                                                  |
| originalcontent | or              | False, True                                          | Stores the original content of the preset, effect, or cue. False is the same as addnewcontent.                                                                                        |
| overwrite       | o               | no option value                                      | Removes stored values in the cue and stores the new values.                                                                                                                           |
| presetfilter    | p               | False, True                                          | Sets preset filter on or off.                                                                                                                                                         |
| remove          | not available   | no option value                                      | Removes stored values for attributes with active programmer values.                                                                                                                   |
| screen          | not available   | 1..6                                                 | Stores view with selected screen.                                                                                                                                                     |
| selective       | s               | no option value                                      | Stores preset with selective values.                                                                                                                                                  |
| source          | so              | Prog, Output, Dmx In                                 | Defines data source.                                                                                                                                                                  |
| tracking        | t               | False, True                                          | Stores with tracking. False is the same as cueonly.                                                                                                                                   |
| trackingshield  | ts              | no option value                                      | Use tracking shield for store.                                                                                                                                                        |
| universal       | u               | no option value                                      | Stores preset with universal values.                                                                                                                                                  |
| useselection    | use             | Active, Allforselected, Activeforselected, All, Look | Sets selection.                                                                                                                                                                       |
| values          | v               | False, True                                          | Filters or enables value layer.                                                                                                                                                       |
| valuetimes      | vt              | False, True                                          | Filters or enables value times layer.                                                                                                                                                 |
| x               | not available   | x coordinate in the layout view, e.g. -9.17441       | Sets the x coordinate in the layout view. For more information, see [Layouts](/grandma2/key_layouts/).                                                                                |
| y               | not available   | y coordinate in the layout view, e.g. 7.93822        | Sets the y coordinate in the layout view. For more information, see [Layouts](/grandma2/key_layouts/).                                                                                |

## Example

1\. Store cue 7 in the sequence of the selected executor. For more information, see [Store Cues](/grandma2/key_cs_store/).

\[Channel]> Store 7

 

2\. Store dimmer preset 3 with all attributes and keep the values active in the programmer. For more information, see [Store Presets](/grandma2/key_presets_create/).

\[Channel]> Store Preset 1.3 /presetfilter=false /ka

 

3\. Store the programmer values as cue 1 through cue 10 and cue 20 through cue 30.

\[Channel]> Store Cue 1 Thru 10 + 20 Thru 30
