---
title: "PresetType"
description: "To get the PresetType keyword in the command line, press and hold !ma + Preset."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_presettype.html"
scrapedAt: "2026-06-12T21:27:58.025Z"
---
To get the PresetType keyword in the command line, press and hold ![ma](/img/grandma2/ma_1-290dfd.png) + Preset.

You can also type **PresetType**, **PresetT**, or **PT** in the command line.

## Description

With the PresetType keyword you can:

- Call PresetTypes and select them in the preset type bar.
- Select PresetTypes in the fixture sheet. A selected preset type is indicated by a yellow font in the column header.
- Activate PresetTypes for the selected fixtures in the programmer.
- Store only values of the given preset type.

Preset types contains features and attributes, which means that you can also call features and attributes with the PresetType keyword, using dot-separated numbers.

## Syntax

**PresetType** \[PresetType Number]

**PresetType** "PresetType Name"

**PresetType** \[PresetType Number] . \[Feature Number]

**PresetType** \[PresetType Number] . \[Feature Number] . \[Attribute Number]

\[Function Keyword] PresetType \[PresetType Number] . \[Feature Number]

## Examples

- Call preset type 3 in the fixture sheet and in the preset type bar.

\[Channel]> PresetType 3

---

- Call preset type color in the fixture sheet and in the preset type bar.

\[Channel]> PresetType "Dimmer"

---

-  Call preset type 3, feature 1, in the fixture sheet and in the encoder bar.

\[Channel]> PresetType 3.1

---

- Activate the second color feature for the selected fixtures.

\[Channel]> On PresetType "Color".2

---

- Call the second feature of the current selected preset type.  

\[Channel]> PresetType $preset.2

---

- Call preset type 3, feature 2, attribute 1, in the fixture sheet and in the encoder bar.

\[Channel]> PresetType 3.2.1

---

- Store only the pan/tilt values for the fixture selection.

\[Channel]> Store If PresetType Position If Selection
