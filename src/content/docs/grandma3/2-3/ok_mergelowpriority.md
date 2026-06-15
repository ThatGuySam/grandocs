---
title: "/MergeLowPriority"
description: "To enter the /MergeLowPriority option keyword in the command line, use one of these options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_mergelowpriority.html"
scrapedAt: "2026-06-15T18:25:15.538Z"
pagefind: false
---
To enter the **/MergeLowPriority **option keyword in the command line, use one of these options:

- Type /**MergeLowPriority**
- Type the shortcut **/Mergel**

## Description

The /MergeLowPriority option keyword adds data that is in the source to the destination only where it does not contain data. This option keyword preserves existing data at destination and is the least extreme form of merging. 

## Syntax

\[Function] \[Object] \["Object\_Name" or Object\_Number] /MergeLowPriority

## General Keywords

General keywords that use the /MergeLowPriority option keyword:

- [Clone keyword](/grandma3/2-3/keyword_clone/)
- [Cook keyword](/grandma3/2-3/keyword_cook/)

## Examples

- To clone data from fixture 1 to fixture 2 as a low priority merge in the programmer, type:

|                                                                    |                                                                     |
| ------------------------------------------------------------------ | ------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Clone Fixture 1 At Fixture 2 /MergeLowPriority  |

- To cook recipes in the cue parts of sequence 5 using low priority merge, type:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Cook Sequence 5 /MergeLowPriority |
