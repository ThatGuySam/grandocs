---
title: "/All"
description: "To enter the /Allption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_all.html"
scrapedAt: "2026-06-12T21:24:39.575Z"
---
To enter the **/All **option keyword in the command line, use one of the options:

- Type **/All**
- Type the shortcut **/Al**

## Description

The /All option keyword stores the values of all attributes when using Data Source Output or DMX.  

## Syntax

**\[Function] \[Object] \["Object\_Name" or Object\_Number] /All**

****

****

## General Keywords

General keywords that use the /All option keyword:

- [AutoCreate keyword](/grandma3/2-4/keyword_autocreate/)
- [Cue keyword](/grandma3/2-4/keyword_cue/)
- [FixtureClass keyword](/grandma3/2-4/keyword_fixture_class/)
- [FixtureLayer keyword](/grandma3/2-4/keyword_fixture_layer/)
- [FixtureType keyword](/grandma3/2-4/keyword_fixturetype/)
- [LoadShow keyword](/grandma3/2-4/keyword_loadshow/)
- [NewShow keyword](/grandma3/2-4/keyword_newshow/)
- [Preset keyword](/grandma3/2-4/keyword_preset/)
- [Store keyword](/grandma3/2-4/keyword_store/)

|                                            |                                                                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                   |
|                                            | The /All option keyword also works in conjunction with the [/Look option keyword](/grandma3/2-4/ok_look/).  |

## Examples

- To store all attributes in cue 1, type:

|                                                                    |                                        |
| ------------------------------------------------------------------ | -------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Cue 1 /All   |

- To load the entire data of the show "Fiddler on the Roof", type:

|                                                                    |                                                           |
| ------------------------------------------------------------------ | --------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>LoadShow "Fiddler on the Roof" /All   |

 

- To create a new show file called "Rocky Horror Picture Show" and clear all previous settings, type:

|                                                                    |                                                                |
| ------------------------------------------------------------------ | -------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>NewShow "Rocky Horror Picture Show" /All   |

 

**Requirement:**

1. Select eight fixtures.
2. Set MAtricks XGroup to 2.
3. Set MAtricks X to 0.

- To create group 21 in the group pool containing all main fixtures of the selection (odd fixtures of the current selection), type:

|                                                                    |                                                             |
| ------------------------------------------------------------------ | ----------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>AutoCreate Selection At Group 21 /All   |

**Requirement: **Create layers and classes and set fixtures to these.

For more information and how to use fixture classes and fixture layers see Patch and [Fixture Setup - Classes and Layers](/grandma3/2-4/patch_classes_layers/). 

|                                            |                                                                                                                                      |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                            |
|                                            | The demo show runs using this setting. For more information see [Backup, Demo, and Template Show Files](/grandma3/2-4/sfh_backup/).  |

- To create a group at group pool object 301 with all fixtures that are set to class "Spots" within the patch, type:

|                                                                    |                                                                         |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>AutoCreate FixtureClass "Spots" At Group 301 /All   |

- To create a group at group pool object 201 with all fixtures that are set to layer "Backtruss" within the patch, type:

|                                                                    |                                                                             |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>AutoCreate FixtureLayer "Backtruss" At Group 201 /All   |

- To create a group at group pool object 42 with all patched fixtures of fixture type 9, type:

|                                                                    |                                                                 |
| ------------------------------------------------------------------ | --------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>AutoCreate FixtureType 10 At Group 42 /All  |



####
