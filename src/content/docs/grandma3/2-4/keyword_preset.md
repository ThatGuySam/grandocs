---
title: "Preset"
description: "To enter the Preset keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_preset.html"
scrapedAt: "2026-06-12T21:24:33.730Z"
---
To enter the Preset keyword in the command line, use one of the options:

- Press Preset
- Type **Preset**
- Type the shortcut **Pr**

## Description

With the Preset keyword, it is possible to:

- Select the fixtures stored in a preset;
- Apply the At function on the preset within the fixture or channel selection;
- Set a property in a preset.

A command containing only the Preset keyword and the preset ID performs the default function SelectFixtures. For more information see [SelectFixtures keyword](/grandma3/2-4/keyword_selectfixtures/).

To give the fixture attributes a link to the preset, the At keyword needs to be added in front of the Preset keyword and the preset ID. For more information see [At Keyword](/grandma3/2-4/keyword_at/).

## Syntax

Preset \["FeatureGroup\_Name" or FeatureGroup\_Number].\["Preset\_Name" or Preset\_Number]

\[Function] Preset \["FeatureGroup\_Name" or FeatureGroup\_Number].\["Preset\_Name" or Preset\_Number] (\[Setting] \["Setting\_Value"] \[/OptionKeyword])

Assign \[Object] \["Object\_Name" or Object\_Number] At Preset \["FeatureGroup\_Name" or FeatureGroup\_Number].\["Preset\_Name" or Preset\_Number]

## Settings

Some settings need an object assigned. These can be assigned using the [Assign Keyword](/grandma3/2-4/keyword_assign/).

Other settings contain a text option or a value. The [Set keyword](/grandma3/2-4/keyword_set/) is used for these settings.

The following table displays the settings that need an object:

| Setting     | Object         | Description                                                      |
| ----------- | -------------- | ---------------------------------------------------------------- |
| Appearance  | "Appearance 1" | Assigns the appearance to the pool object.                       |
| InputFilter | "Filter 12"    | Assigns a filter or world as an input filter to the pool object. |
| Scribble    | "Scribble 1"   | Assigns the scribble to the preset pool object.                  |

 

The following table displays the settings that need an option or value:

| Setting        | Option/Value                        | Description                                                        |
| -------------- | ----------------------------------- | ------------------------------------------------------------------ |
| Name           | "Preset Name"                       | Sets the name of the preset pool object.                           |
| MoveGridCursor | "Yes" or "No"                       | This defines if the grid cursor is moved after calling the preset. |
| CuePart        | "Default" or a specific part number | This is the programmer cue part the preset will be called into.    |
| MAgic          | "Yes" or "No"                       | This defines if the preset is a magic preset or not.               |
| PresetMode     | Read only                           | This is information only about the preset mode.                    |
| StoredData     | Read only                           | This is information only about the stored data.                    |

Presets can also contain settings for MAtricks and recipe values. These can be changed using the [Set keyword](/grandma3/2-4/keyword_set/).

## Option Keywords

The Preset keyword uses the following option keywords:

- [/Active](/grandma3/2-4/ok_active/)
- [/ActiveForSelected](/grandma3/2-4/ok_activeforselected/)
- [/AddNewContent](/grandma3/2-4/ok_addnewcontent/)
- [/All](/grandma3/2-4/ok_all/)
- [/AllForSelected](/grandma3/2-4/ok_allforselected/)
- [/Ask](/grandma3/2-4/ok_ask/)
- [/Auto](/grandma3/2-4/ok_auto/)
- [/DMX](/grandma3/2-4/ok_dmx/)
- [/Embed](/grandma3/2-4/ok_embed/)
- [/ForceGlobal](/grandma3/2-4/ok_forceglobal/)
- [/Global](/grandma3/2-4/ok_global/)
- [/GridMergeMode](/grandma3/2-4/ok_gridmergemode/)
- [/InputFilter](/grandma3/2-4/ok_inputfilter/)
- [/KeepActivation](/grandma3/2-4/ok_keepactivation/)
- [/Look](/grandma3/2-4/ok_look/)
- [/MAtricks](/grandma3/2-4/ok_matricks/)
- [/Output](/grandma3/2-4/ok_output/)
- [/Overwrite](/grandma3/2-4/ok_overwrite/)
- [/PhaserData](/grandma3/2-4/ok_phaserdata/)
- [/Programmer](/grandma3/2-4/ok_programmer/)
- [/Selective](/grandma3/2-4/ok_selective/)
- [/Universal](/grandma3/2-4/ok_universal/)

## Examples

- To select the fixtures that can use preset 5 of the dimmer feature group, type:

|                                                                    |                                        |
| ------------------------------------------------------------------ | -------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>SelFix Preset 1.5  |

 

- To select the fixtures stored in any preset with the name "DarkRed", type:

|                                                                    |                                                 |
| ------------------------------------------------------------------ | ----------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>SelFix Preset \*."DarkRed"  |

 

- To call a reference to preset 21.45 ("All 1" preset number 45) to the attributes of the selected fixtures, type:

|                                                                    |                                      |
| ------------------------------------------------------------------ | ------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>At Preset 21.45  |

 

- To set the name of the position preset 3 to be "Stage Left", type:

|                                                                    |                                                       |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Preset 2.3 Name "Stage Left"  |

 

- To assign world 5 as an input filter on position preset 4, type:

|                                                                    |                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Assign World 5 At Preset 2.4  |
