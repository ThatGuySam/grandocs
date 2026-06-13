---
title: "/PatchOffset"
description: "To enter the /PatchOffsetption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_patchoffset.html"
scrapedAt: "2026-06-12T21:24:42.637Z"
---
To enter the **/PatchOffset **option keyword in the command line, use one of the options:

- Type **/PatchOffset**
- Type the shortcut** /Patc**

## Description

When patching the /PatchOffset option keyword sets the offset of DMX addresses in fixtures. The DMX address has to be specified using breaks of the fixture type.

## Syntax

Set (Object) \[Object\_Number] Property "Break\[Number]" **\["DMXAddress"] /PatchOffset \[PatchOffset\_Value]**

## General Keywords

General keywords that use the /PatchOffset option keyword:

- [Set keyword](/grandma3/2-4/keyword_set/)

## Example

**Requirement: **Go to the Live Patch

For information on the Live Patch and how to use it in the grandMA3, see [Live Patch](/grandma3/2-4/patch_live/). 

 

- To set an offset of 50 starting at DMX address 10.1 in the first 13 fixtures in the patch, type:

|                                                                    |                                                                            |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set 2 Thru 14 Property "Break1" "10.1" /PatchOffset 50 |
