---
title: "Block"
description: "To enter the Block keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_block.html"
scrapedAt: "2026-06-12T21:24:22.279Z"
---
To enter the Block keyword in the command line, use one of the options:

- Type **Block**
- Type the shortcut **Blo**

## Description

Block is a function used to add data and prevent them from tracking. Tracked values are converted to stored values.

If the object list does not contain any references to any cues, the Block function is applied to the selected sequence.

If syntax does not contain any selection list filter, all fixtures will be used.

If syntax does not contain any attribute list filter, all attributes will be used.

## Syntax

Block (Sequence \["Sequence\_Name" or Sequence\_Number]) Cue \["Cue\_Name" or Cue\_Number] (If Fixture \["Fixture\_Name" or Fixture\_Number] FeatureGroup \["FeatureGroup\_Name" or FeatureGroup\_Number] or Attribute \["Attribute\_Name" or Attribute\_Number] EndIf)

## Examples

- To block all parameters in cue 2 of the selected sequence, type:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Block Cue 2 |

[![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Block%20Cue%202%0A)

To unblock parameters, use the [Unblock keyword](/grandma3/2-4/keyword_unblock/). 

 

-  To block pan and tilt of fixture 4 in cue 5 of the selected sequence, type:

|                                                                    |                                                                            |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Block Cue 5 If Fixture 4 FeatureGroup "Position" EndIf |
