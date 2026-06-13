---
title: "/CopyCueDestination"
description: "To enter the /CopyCueDestinationption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_copycuedestination.html"
scrapedAt: "2026-06-12T21:24:39.875Z"
---
To enter the **/CopyCueDestination **option keyword in the command line, use one of the options:

- Type **/CopyCueDestination**
- Type the shortcut **/CopyCued **or /**CCD**

## Description

The /CopyCueDestination option keyword defines how the copied data is used in the destination cue when copying cues. 

For more information see [Copy Cues](/grandma3/2-4/cue_copy/). 

## Syntax

Copy (Sequence \["Source\_Sequence\_Name" or Source\_Sequence\_ID]) Cue \["Source\_Cue\_Name" or Source\_Cue\_ID] At (Sequence \["Destination\_Sequence\_Name" or Destination\_Sequence\_ID]) Cue \["Destination\_Cue\_Name" or Destination\_Cue\_ID] /CopyCueDestination "Value"

## General Keywords

General keywords that use the /CopyCueDestination option keyword:

- [Cue keyword](/grandma3/2-4/keyword_cue/)
- [Copy keyword](/grandma3/2-4/keyword_copy/)

## Values

The /CopyCueDestination option keyword uses these values:

- Merge
- Overwrite

## Example

**Requirement:** Create cues 1 and 2

- To copy cue 1 to cue 2 and merge the data of cue 1 with cue 2, type:

|                                                                    |                                                                      |
| ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Copy Cue 1 At Cue 2 /CopyCueDestination "Merge"  |
