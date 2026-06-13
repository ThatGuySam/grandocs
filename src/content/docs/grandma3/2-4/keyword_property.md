---
title: "Property"
description: "To enter the Property keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_property.html"
scrapedAt: "2026-06-12T21:24:34.151Z"
---
To enter the Property keyword in the command line, use one of the options:

- Type **Property**
- Type the shortcut **Prop**

## Description

​The Property keyword is an object keyword which is used to communicate with the console for you to set a specific property.

It is used in conjunction with the [Set keyword](/grandma3/2-4/keyword_set/), the [SetUserVariable keyword](/grandma3/2-4/keyword_setuservariable/), or the [SetGlobalVariable keyword](/grandma3/2-4/keyword_setglobalvariable/). 

Syntax

\[Function] \[Object] \["Object\_Name" or Object\_Number] Property \["Property\_Name"]\(At + \[Object] \["Object\_Name" or Object\_Number]) \["Value"]

## Examples

- To set the ValueReadout to Hex8 in the current user profile, type:

|                                                                    |                                                                           |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set CurrentUserProfile Property "ValueReadout" "Hex8" |

 

- To assign the filter "Only Dimmer" of cue 5 to "Break", type:

|                                                                    |                                                                          |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Cue 5 Property "Break" At + Filter "Dimmer Only" |
