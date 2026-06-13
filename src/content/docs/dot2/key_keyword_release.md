---
title: "Release"
description: "This page describes the syntax and how to use the command Release."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_release.html"
scrapedAt: "2026-06-12T21:29:50.617Z"
---
This page describes the syntax and how to use the command **Release**. 

To use this command, type **Release** into the [command line](/dot2/key_widget_commandlineinput/). 

## Description 

With the command **Release** it is possible to:

- Enter **release values** for attributes in the programmer by a given object list. This list is filtered by the current selection.

** Important:**\
Release values that are stored with the option "Merge" release previously tracked values in the tracking list and the fixtures use their default values. 

**Important:**\
-If you release an object, the command **Release** will be applied to the value layer.\
-If you release an effect, the command **Release** will be applied to the effect layer. 

## Syntax

1. To enter **release values** for all attributes in the programmer within the selection of fixtures in the value layer, type into the command line:

 Release Selection

The letter **R** will be subsequently displayed in the value layer. 

2. To enter **release values** for attributes of pan and tilt in the programmer within the selection of fixtures, type into the command line:

 Release PresetType "position"

3.  To enter release values for an effect in the programmer, number 4 for instance, type into the command line:

Release Effect 4
