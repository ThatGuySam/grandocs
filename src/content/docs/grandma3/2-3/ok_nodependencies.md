---
title: "/NoDependencies"
description: "To enter the /NoDependencies option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_nodependencies.html"
scrapedAt: "2026-06-15T18:25:16.108Z"
pagefind: false
---
To enter the **/NoDependencies **option keyword in the command line, use one of the options:

- Type **/NoDependencies**
- Type the shortcuts **/Nod**

## Description

The /NoDependencies option keyword is used to import or export data without the dependent objects.

## Syntax

\[Function] \["Object\_Name" or Object\_Number] /NoDependencies

## General Keywords

General keywords that use the /NoDependencies option keyword:

- [Clone keyword](/grandma3/2-3/keyword_clone/)
- [Export keyword](/grandma3/2-3/keyword_export/)
- [Import keyword](/grandma3/2-3/keyword_import/)

## Examples

- To import the sequence in the file "Mimas.xml" to sequence 4 without dependent objects, type:

|                                                                    |                                                                                        |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Import Sequence Library "Mimas.xml" At Sequence 4 /NoDependencies  |

 

**Requirement:** Fixture 1, which uses a selective preset, is stored in a cue of sequence 1. Only fixture 1 is part of this preset.

- To clone the data of fixture 1 to fixture 2 and use hard values in sequence 1 in fixture 2 where fixture 1 uses the selective preset, type:

|                                                                    |                                                                                  |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Clone Fixture 1 At Fixture 2 If Sequence 1 /NoDependencies   |
