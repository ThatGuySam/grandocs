---
title: "Store"
description: "To enter the Store keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_store.html"
scrapedAt: "2026-06-12T21:24:37.367Z"
---
To enter the **Store** keyword in the command line, use one of the options:

- Press Store
- Type **Store**
- Type the shortcut **S**

## Description

The Store keyword is a function keyword which is used to store objects in the show file. 

If no object type or destination is given, the object type **Cue** will be used in the selected sequence.

If you do not specify a target during storing, the new object will occupy the first free spot in the pool.

However, you can store an object at a certain spot or later in a pool. To do so, use the Window Settings and set First Index. For more information see [Common Window Settings](/grandma3/2-4/wvm_settings/#h2__522911071).

## Syntax

Store \[Object] \["Object\_Name" or Object\_Number or Next/Previous]\(/Option)

## Option Keywords

The Store keyword uses the following option keywords:

- [/Active](/grandma3/2-4/ok_active/)
- [/ActiveForSelected](/grandma3/2-4/ok_activeforselected/)
- [/All](/grandma3/2-4/ok_all/)
- [/AllForSelected](/grandma3/2-4/ok_allforselected/)
- [/Ask](/grandma3/2-4/ok_ask/)
- [/Auto](/grandma3/2-4/ok_auto/)
- [/AutoFit](/grandma3/2-4/ok_autofit/)
- [/CreateSecondCue](/grandma3/2-4/ok_createsecondcue/)
- [/CueOnly](/grandma3/2-4/ok_cueonly/)
- [/Embed](/grandma3/2-4/ok_embed/)
- [/ForceGlobal](/grandma3/2-4/ok_forceglobal/)
- [/Global](/grandma3/2-4/ok_global/)
- [/InputFilter](/grandma3/2-4/ok_inputfilter/)
- [/KeepActivation](/grandma3/2-4/ok_keepactivation/)
- [/Look](/grandma3/2-4/ok_look/)
- [/MAtricks](/grandma3/2-4/ok_matricks/)
- [/Merge](/grandma3/2-4/ok_merge/)
- [/NoConfirmation](/grandma3/2-4/ok_noconfirmation/)
- [/OddEven](/grandma3/2-4/ok_oddeven/)
- [/Overwrite](/grandma3/2-4/ok_overwrite/)
- [/PhaserData](/grandma3/2-4/ok_phaserdata/)
- [/Recipe](/grandma3/2-4/ok_recipe/)
- [/Remove](/grandma3/2-4/ok_remove/)
- [/Screen](/grandma3/2-4/ok_screen/)
- [/ScreenOnly](/grandma3/2-4/ok_screenonly/)
- [/Selective](/grandma3/2-4/ok_selective/)
- [/Universal](/grandma3/2-4/ok_universal/)
- [/Wait](/grandma3/2-4/ok_wait/)

For more information see [Store Options and Store Preferences](/grandma3/2-4/cue_store_settings_preferences/).

## Examples

- To store cue 2 in the selected sequence, type: 

|                                                                    |                              |
| ------------------------------------------------------------------ | ---------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store 2  |

For more information see [Store Cues](/grandma3/2-4/cue_store/).

 

- To store the programmer values as cue 1 through cue 10 and cue 20 through cue 30, type:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Cue 1 Thru 10 + 20 Thru 30  |

 

- To store the programmer values as cue 42 of the selected sequence and directly label it, type:

|                                                                    |                                                                    |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Cue 42 "Return of the Paranoid Android"  |

 

- To store a new group to the first free spot in the groups pool, type:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Group |

- To store new values to the already existing cue 5 in the selected sequence, whlile cue 4 is active, type:

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Cue Next |

The Store Cue pop-up opens and you can now define how the values will be stored into the cue.

- To store values to the second next existing cue, type:

|                                                                    |                                      |
| ------------------------------------------------------------------ | ------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Cue Next 2 |
