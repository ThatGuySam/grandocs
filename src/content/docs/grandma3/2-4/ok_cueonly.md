---
title: "/CueOnly"
description: "To enter the /CueOnlyption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_cueonly.html"
scrapedAt: "2026-06-12T21:24:40.174Z"
---
To enter the **/CueOnly **option keyword in the command line, use one of the options:

- Type **/CueOnly**
- Type the shortcuts **/CO **or **/Cu**

## Description

The /CueOnly option keyword blocks tracked values in the next cue or cue part to preserve the previous look on stage. 

For more information see [Store Cues](/grandma3/2-4/cue_store/) and [Store Settings and Store Preferences](/grandma3/2-4/cue_store_settings_preferences/). 

## Syntax

\[Function] (Sequence \[**"**Sequence\_Name" or** **Sequence\_Number]) Cue \["Cue\_Name" or Cue\_Number] /CueOnly \["Value"]

## General Keywords

General keywords that use the /CueOnly option keyword:

- [Cue keyword](/grandma3/2-4/keyword_cue/)
- [Delete keyword](/grandma3/2-4/keyword_delete/)
- [Store keyword](/grandma3/2-4/keyword_store/)
- [Update keyword](/grandma3/2-4/keyword_update/)

## Values

The /CueOnly option keyword uses these values:

- DimmerOnly – uses the Dimmer Cue Only and releases the recently stored dimmer attributes in the next cue. 
- DimmerOnlyDefaultNew – uses the Dimmer Cue Only and sets recently stored dimmer attributes to the default value in the next cue. 
- Off – does not use CueOnly 
- On –  uses CueOnly
- OnDefaultNew – uses Cue Only and sets new attributes within the sequence to the default value in the next cue.

## Examples

- To store the current programmer values in cue 8 and to preserve the previous look in the following cue after cue 8, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Cue 8 /CueOnly  |

- To store the current programmer values in cue 6 and release the recently stored dimmer values in the next cue, type:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Cue 6 /CueOnly "DimmerOnly" |

- To store the current programmer values in cue 5 and set the dimmer attributes to default values in the next cue, type:

|                                                                    |                                                                 |
| ------------------------------------------------------------------ | --------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Cue 5 /CueOnly "DimmerOnlyDefaultNew" |
