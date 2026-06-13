---
title: "SetGlobalVariable"
description: "To enter the SetGlobalVariable keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_setglobalvariable.html"
scrapedAt: "2026-06-12T21:24:36.386Z"
---
To enter the SetGlobalVariable keyword in the command line, use one of the options:

- Type **SetGlobalVariable**
- Type the shortcut **Setg**

## Description

The SetGlobalVariable keyword is used to set global variables in a show. It also supports the use of values in properties of other objects as a value of the variable. 

## Syntax

SetGlobalVariable \["Name of Variable"] \[Numeric Value]

SetGlobalVariable \["Name of Variable"] \["Text\_Value"]

SetGlobalVariable \[**"Name of Variable"] At \[Object] \["Object Name" or Object Number] Property \["Property\_Name"] (/Look)**

## Examples

- To set the global variable "Urban Blues" to the value of 3, type:

|                                                                    |                                                         |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>SetGlobalVariable "Urban Blues" "3" |
