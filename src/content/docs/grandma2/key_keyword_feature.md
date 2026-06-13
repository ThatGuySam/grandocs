---
title: "Feature"
description: "To get the Feature keyword in the command line type Featurer the shortcut Fen the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_feature.html"
scrapedAt: "2026-06-12T21:27:51.398Z"
---
To get the Feature keyword in the command line type **Feature** or the shortcut **Fe** in the command line.

## Description

Feature is an object keyword representing features of a fixture.

The default function for features is [Call](/grandma2/key_keyword_call/). Calling features brings them to the encoders, and select them in the fixture sheet (yellow column header).

Features are organized by PresetType, which means that you can also call features with the PresetType keyword.

Features contains attributes, which means that you can also call attributes with the Feature keyword, using dot separated numbers.

**Important:**\
The feature number may change when new fixtures and attributes are added to the show file. It is recommended to use the unique feature name, for example macros.

## Syntax

Feature \[number]

Feature "Name"

Feature \[Feature].\[Attribute]

 

## Examples

 

\[Channel]> Feature 2

 

Calls the second feature type in the command line.

 

\[Channel]> List feature 

 

Shows a current list of all feature numbers and names in the command line feedback view. 

 

\[Channel]> Feature "Gobo1"

 

Calls feature "Gobo1" type in the command line.

 

\[Channel]> Feature "Position".2

 

Calls the second attribute of the feature "Position" type in the command line.

 

\[Channel]> Feature $feature.2

 

Calls the second attribute of the current feature type in the command line.

 

\[Channel]> PresetType "gobo".2

 

Calls the second feature of the preset type gobo type in the command line.
