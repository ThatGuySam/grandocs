---
title: "SetUserVariable"
description: "To enter the SetUserVariable keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_setuservariable.html"
scrapedAt: "2026-06-15T18:25:10.809Z"
pagefind: false
---
To enter the SetUserVariable keyword in the command line, use one of the options:

- Type **SetUserVariable**
- Type the shortcut **Setu**

## Description

The SetUserVariable keyword is used to set user-specific variables. It also supports the use of values in properties of other objects as a value of the variable.

## Syntax

SetUserVariable \["Name of Variable"] \[Numeric Value]

SetUserVariable \["Name of Variable"] \["Text\_Value"]

SetUserVariable \[**"Name of Variable"] At \[Object] \["Object\_Name" or Object Number] Property \["Property\_Name"] (/Look)**

## Option Keywords

The SetUserVariable keyword uses the following option keywords:

- [/Look](/grandma3/2-3/ok_look/)

## Examples

##

- To set the user variable "Green" to the value 5, type:

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>SetUserVariable "Green" 5 |
