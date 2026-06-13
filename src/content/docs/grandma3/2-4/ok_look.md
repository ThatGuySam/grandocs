---
title: "/Look"
description: "To enter the /Lookption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_look.html"
scrapedAt: "2026-06-12T21:24:41.270Z"
---
To enter the **/Look **option keyword in the command line, use one of the options:

- Type **/Look**
- Type the shortcut** /L**

## Description

The /Look option keyword stores all dimmer values of all fixtures in the show. 

If the dimmer value of a fixture is zero, the /Look option keyword only stores dimmer values of the fixture as there is no visible output onstage. 

If the dimmer value of a fixture is above zero, the /Look option keyword stores the values of all attributes of the fixture.

## Syntax

\[Function] \[Object] \["Object\_Name" or Object\_Number] /Look

## General Keywords

General keywords that use the /Look option keyword:

[](/grandma3/2-4/keyword_copy/)

- [Cue keyword](/grandma3/2-4/keyword_cue/)
- [Preset keyword](/grandma3/2-4/keyword_preset/)
- [Store keyword](/grandma3/2-4/keyword_store/)
- [SetUserVariable keyword](/grandma3/2-4/keyword_setuservariable/)
- [SetGlobalVariable keyword](/grandma3/2-4/keyword_setglobalvariable/)

|                                            |                                                                                                                                                                                 |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                       |
|                                            | The /Look option keyword can be used together with the [/All option keyword](/grandma3/2-4/ok_all/) or the [/AllForSelected option keyword](/grandma3/2-4/ok_allforselected/).  |

## Examples

- To store all dimmer values and all attributes in fixtures, with dimmer open in cue 1, type:

|                                                                    |                                        |
| ------------------------------------------------------------------ | -------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Cue 1 /Look  |

 

- To store the dimmer values and all active attributes of the selected fixtures in the programmer to the second preset in the first All preset pool, type:

|                                                                    |                                                              |
| ------------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Preset 21.2 /AllForSelected /Look  |

- #### To set the user variable "mySeqPrioName" to the priority name of sequence 42, type:​​

####

|                                                                    |                                                                                              |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>SetUserVariable "mySeqPrioName" At Sequence 42 Property "Priority" /Look |
