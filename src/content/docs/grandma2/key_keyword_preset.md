---
title: "Preset"
description: "To get the Preset keyword in the command line, press Preset."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_preset.html"
scrapedAt: "2026-06-12T21:27:57.998Z"
---
To get the Preset keyword in the command line, press Preset.

You can also type **Preset** or the shortcut **Pres** in the command line.

## Description

With the Preset keyword you can:

- Select the fixtures stored in a preset.
- At a preset to the fixture or channel selection.

If no fixtures or channels are selected in the programmer, the default function is **SelFix**. For more information, see [SelFix keyword](/grandma2/key_keyword_selfix/).\
If fixtures or channels are selected in the programmer, the default function is **At**. For more information, see [At keyword](/grandma2/key_keyword_at/).

## Syntax

**Preset** \[ID]

**Preset** \[Preset-type].\[ID]

**Preset** "Name"

Assign **Preset** \[ID] / \[Parameter] = \[Parameter Value]

## Parameter

The following table displays the assignable parameters via command line.

| Parameter | Parameter Value                           | Description                                                                                                        |
| --------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Name      | "PresetName"                              | Assign the preset pool name.                                                                                       |
| Special   | "Normal", "Default", "Highlight", "Stage" | Assign the special mode. For more information, see [What are special modes?](/grandma2/key_presets_special_modes/) |
| Info      | "additional information"                  | Assign additional information. Assigned information are displayed in the [info window](/grandma2/key_ws_info/).    |

## Examples

- Select the fixtures stored in preset 5 of the selected preset type, e.g. dimmer.

\[Channel]> Preset 5

---

- Sets current selection to the second preset of preset type 3 (gobo).

 \[Channel]> At Preset 3.2

---

- Select all fixtures stored in any preset with the label "DarkRed".

  \[Channel]> Preset \*."DarkRed"
