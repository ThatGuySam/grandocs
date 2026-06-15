---
title: "/InputFilter"
description: "To enter the /InputFilter option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_inputfilter.html"
scrapedAt: "2026-06-15T18:25:15.096Z"
pagefind: false
---
To enter the **/InputFilter **option keyword in the command line, use one of the options:

- Type **/InputFilter**
- Type the shortcut** /I**

## Description

The /InputFilter option keyword is used to enable or disable the filter of a feature group when storing or updating presets. 

## Syntax

\[Function] Preset \["FeatureGroup\_Name" or FeatureGroup\_Number].\["Preset\_Name" or Preset\_Number] /InputFilter \["Option\_Value"]

## General Keywords

General keywords that use the /InputFilter option keyword:

- [Preset keyword](/grandma3/2-3/keyword_preset/)
- [Store keyword](/grandma3/2-3/keyword_store/)
- [Update keyword](/grandma3/2-3/keyword_update/)

## Example

- To disable the input filter when storing the third dimmer preset, type:

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Preset 1.3 /InputFilter "No"  |
