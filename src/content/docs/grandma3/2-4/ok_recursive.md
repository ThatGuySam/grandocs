---
title: "/Recursive"
description: "To enter the /Recursiveption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_recursive.html"
scrapedAt: "2026-06-12T21:24:43.366Z"
---
To enter the **/Recursive **option keyword in the command line, use one of the options:

- Type **/Recursive**
- Type the shortcut** /Recu**

## Description

The /Recursive option keyword is used to define which levels of objects you can lock or unlock. 

## Syntax

\[Function]\[Object]\["Object\_Name" or Object\_Number] /Recursive

## General Keywords

General keywords that use the /Recursive option keyword:

- [Lock keyword](/grandma3/2-4/keyword_lock/)
- [Unlock keyword](/grandma3/2-4/keyword_unlock/)

## Examples

- To lock all levels within data pool 1, type:

|                                                                    |                                                |
| ------------------------------------------------------------------ | ---------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Lock Datapool 1 /Recursive |

**Requirement:** Lock at least two levels of objects.

- To unlock sequence 1 with all its cues but to keep cue parts locked, type:

|                                                                    |                                                    |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Unlock Sequence 1 /Recursive 1 |
