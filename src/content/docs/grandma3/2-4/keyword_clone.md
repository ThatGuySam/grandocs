---
title: "Clone"
description: "To enter the Clone keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_clone.html"
scrapedAt: "2026-06-12T21:24:23.322Z"
---
To enter the Clone keyword in the command line, use one of the options:

- Press MA + X1 | Clone
- Type **Clone**
- Type **Clo**

## Description

Clone replicates data from one fixture or selection to another throughtout the show file. For more information on applying values live in the programmer only, see the [At keyword](/grandma3/2-4/keyword_at/). 

Syntax

Clone \[Object] \["Object\_Name" or Object\_Number] At \[Object] \["Object\_Name" or Object\_Number] (If \[Object] \["Object\_Name" or Object\_Number] /Option)

## Option Keywords

The Clone keyword uses the following option keywords:

- [/MergeLowPriority](/grandma3/2-4/ok_mergelowpriority/)
- [/MergeHighPriority](/grandma3/2-4/ok_mergehightpriority/)
- [/NoDependencies](/grandma3/2-4/ok_nodependencies/)
- [/Overwrite](/grandma3/2-4/ok_overwrite/)

## Examples

- To clone the entire show data from fixture 1 to fixture 2, type:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Clone Fixture 1 At Fixture 2 |
