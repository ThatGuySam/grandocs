---
title: "/GridMergeMode"
description: "To enter the /GridMergeModeption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_gridmergemode.html"
scrapedAt: "2026-06-12T21:24:40.849Z"
---
To enter the **/GridMergeMode **option keyword in the command line, use one of the options: 

- Type **/GridMergeMode**
- Type the shortcut** /Gr** or **GMM**

## Description

The /GridMergeMode option keyword is used when storing fixtures with their selection grid data into objects using the merge mode.

For more information see [Store Settings and Preferences](/grandma3/2-4/cue_store_settings_preferences/).

## Syntax

Store \[Object] \["Object\_Name" or Object\_Number] /Merge /GridMergeMode "Value"

## General Keywords

General keywords that use the /GridMergeMode option keyword:

- [Cue keyword](/grandma3/2-4/keyword_cue/)
- [Group keyword](/grandma3/2-4/keyword_group/)
- [Preset keyword](/grandma3/2-4/keyword_preset/)
- [World keyword](/grandma3/2-4/keyword_world/)

## Values

The /GridMergeMode option keyword uses these values:

- AppendX
- Off

## Examples

- To merge the currently selected fixtures in group 27 and append the new fixtures in the selection grid on the x-axis following the fixtures that were alrady stored, type:

|                                                                    |                                                              |
| ------------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Group 27 /GridMergeMode "AppendX"  |

 

- To merge the currently selected fixtures in group 28 and place them on their original position in the selection grid, type:

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Group 28 /GridMergeMode "Off"  |
