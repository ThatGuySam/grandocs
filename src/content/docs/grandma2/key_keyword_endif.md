---
title: "EndIf"
description: "To get the EndIf keyword in the command line type EndIfr the shorcut En in the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_endif.html"
scrapedAt: "2026-06-12T21:27:49.938Z"
---
To get the EndIf keyword in the command line type **EndIf** or the shorcut **En** in the command line.

## Description

EndIf is a helping keyword to indicate the end of an If statement. For more information see [If keyword](/grandma2/key_keyword_if/).

The EndIf keyword enables If statements to be entered in the middle of a syntax. Upon processing, the If statement is moved to the end of the syntax, and is used as a filter/condition. This enables If syntax to be used in conjunction with pool items.

## Syntax

\[function] If \[object condition/filter] EndIf \[object]

## Example

- To create preset 1.1 only for group 5 type in the command line:

Store If Group 5 EndIf Preset 1.1

Store Preset 1.1 If Group 5
