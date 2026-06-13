---
title: "/CopyCueSource"
description: "To enter the /CopyCueSourception keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_copycuesource.html"
scrapedAt: "2026-06-12T21:24:40.024Z"
---
To enter the **/CopyCueSource **option keyword in the command line, use one of the options:

- Type **/CopyCueSource**
- Type the shortcut **/Cop **or **/CCS**

## Description

The /CopyCueSource option keyword defines how data is extracted in the source cue when copying cues. 

For more information see [Copy Cues](/grandma3/2-4/cue_copy/). 

## Syntax

Copy (Sequence \["Source\_Sequence\_Name" or Source\_Sequence\_ID]) Cue \["Source\_Cue\_Name" or Source\_Cue\_ID] At (Sequence \["Destination\_Sequence\_Name" or Destination\_Sequence\_ID]) Cue \["Destination\_Cue\_Name" or Destination\_Cue\_ID] /CopyCueSource "Value"

## General Keywords

General keywords that use the /CopyCueSource option keyword:

- [Cue keyword](/grandma3/2-4/keyword_cue/)
- [Copy keyword](/grandma3/2-4/keyword_copy/)

## Values

The /CopyCueSource option keyword uses these values:

- Content
- Status
- Look

## Example

- To copy the status of cue 1 to cue 2, type:

|                                                                    |                                                                 |
| ------------------------------------------------------------------ | --------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Copy Cue 1 At Cue 2 /CopyCueSource "Status" |
