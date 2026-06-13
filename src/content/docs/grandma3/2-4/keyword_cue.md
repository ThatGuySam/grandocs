---
title: "Cue"
description: "To enter the Cue keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_cue.html"
scrapedAt: "2026-06-12T21:24:23.792Z"
---
To enter the Cue keyword in the command line, use one of the options:

- Press Cue
- Type **Cue**
- Type the shortcut **C**

## Description

|                                                  |                                                                                                                                                                                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                            |
|                                                  | Cue is the only object type that accepts numerical IDs as decimal fractions. The ID which is allowed for cues ranges from 0.001 to 9999.999. In all other objects, a dot indicates the ID of a parent or a child object.  |

**Cue **is an object type holding a look on stage.

Cues are arranged in sequences and are divided into parts.

For more information see the [Cue and Sequence section](/grandma3/2-4/cue_sequence/).

The **Cue** keyword is an object keyword. Object keywords must have a function keyword in front of them to create a complete command. For more information on how to use the command syntax, see [General Syntax Rules](/grandma3/2-4/csk_syntax_rules/).

Cue has a default function called [SelFix](/grandma3/2-4/keyword_selectfixtures/). This selects all the fixtures that have stored values in the cue.

If a sequence is not specified, then the selected sequence is used in the command.

## Syntax

\[Function] Cue \["Cue\_Name" or Cue\_Number]

\[Function] Sequence \["Sequence\_Name" or Sequence\_Number] Cue \["Cue\_Name" or Cue\_Number] (\[Setting] \["Setting\_Value"] (/Option)

Assign \[Object] \["Object\_Name" or Object\_Number] At (Sequence \["Sequence\_Name" or Sequence\_Number]) Cue \["Cue\_Name" or Cue\_Number]

## Settings

In some settings you have to assign an object. These can be assigned using the [Assign keyword](/grandma3/2-4/keyword_assign/).

Other settings may contain a text option or a value. Use the [Set keyword](/grandma3/2-4/keyword_set/) for these settings.

Cues can also contain settings for MAtricks and recipe values. These can be changed using the [Set Keyword](/grandma3/2-4/keyword_set/).

## Option Keywords

The Cue keyword uses the following option keywords:

- [/Active](/grandma3/2-4/ok_active/)
- [/ActiveForSelected](/grandma3/2-4/ok_activeforselected/)
- [/AddNewContent](/grandma3/2-4/ok_addnewcontent/)
- [/All](/grandma3/2-4/ok_all/)
- [/AllForSelected](/grandma3/2-4/ok_allforselected/)
- [/Ask](/grandma3/2-4/ok_ask/)
- [/CopyCueDestiation](/grandma3/2-4/ok_copycuedestination/)
- [/CopyCueSource](/grandma3/2-4/ok_copycuesource/)
- [/CreateSecondCue](/grandma3/2-4/ok_createsecondcue/)
- [/CueOnly](/grandma3/2-4/ok_cueonly/)
- [/Default](/grandma3/2-4/ok_default/)
- [/DMX](/grandma3/2-4/ok_dmx/)
- [/GridMergeMode](/grandma3/2-4/ok_gridmergemode/)
- [/Look](/grandma3/2-4/ok_look/)
- [/Merge](/grandma3/2-4/ok_merge/)
- [/NoConfirmation](/grandma3/2-4/ok_noconfirmation/)
- [/Output](/grandma3/2-4/ok_output/)
- [/Overwrite](/grandma3/2-4/ok_overwrite/)
- [/Programmer](/grandma3/2-4/ok_programmer/)
- [/Release](/grandma3/2-4/ok_release/)
- [/Remove](/grandma3/2-4/ok_remove/)

## Examples

- To select the fixtures with values stored in cue 3 of a selected sequence, type:

|                                                                    |                           |
| ------------------------------------------------------------------ | ------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Cue 3 |

The default function for **Cue** is **SelFix** so Cue 3 is the same as SelFix Cue 3.

 

- To delete cue 2.5 in the selected sequence, type: 

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Delete Cue 2.5 |

 

- To store cue 2 in sequence 5, type: 

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Sequence 5 Cue 2 |

 

- To store cue 3 in sequence 5 with a cue fade time of 7 seconds and an outfade of 11, type: 

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Sequence 5 Cue 3 CueFade 7/11 |
