---
title: "Release"
description: "To go to the Release keyword, press Delete Delete Delete (= Release)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_release.html"
scrapedAt: "2026-06-12T21:27:59.575Z"
---
To go to the Release keyword, press Delete Delete Delete (= Release).

You can also type **Release** in the command line or use the shortcut **Rel**.

## Description

The Release keyword enters release values in the programmer for attributes by the given object list, filtered by the current selection.

Release values used with a store merge, release previous tracked values from the tracking list and the fixtures uses their default values.

If you release an object, the release is applied to the value layer.\
If you release an effect, the release is applied to the effect layer for the running effect attributes. The effect form release is used.

## Syntax

Release \[Object-list]

Release \[Effect-list]

## Examples

- Enter release values in the programmer for all attributes of the fixture selection in the value layer. A **(R)** is displayed in the value layer.

\[Channel]> Release Selection

 

- Enter release values in the programmer for pan and tilt attributes of the fixture selection.

\[Channel]> Release PresetType "position"

 

- Enter release values in the programmer for the running effect 4 .

\[Channel]> Release Effect 4

**Hint:**\
To enter release values in the programmer for effects you could also type in the command line, At Form 2.
