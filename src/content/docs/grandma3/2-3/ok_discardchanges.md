---
title: "/DiscardChanges"
description: "To enter the /DiscardChanges option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_discardchanges.html"
scrapedAt: "2026-06-15T18:25:14.510Z"
pagefind: false
---
To enter the **/DiscardChanges **option keyword in the command line, use one of the options:

- Type **/DiscardChanges**
- Type the shortcut** /DC** or **/Di**

## Description

The /DiscardChanges option keyword is used to leave the Patch without storing the changes. 

## Syntax

ChangeDestination \[Object] (\["Object\_Name" or Object\_Number]) /DiscardChanges

## General Keywords

General keywords that use the /DiscardChanges option keyword:

- [ChangeDestination keyword](/grandma3/2-3/release_notes/)

## Example

**Requirement: **You are in the Patch and you made edits.

 

- To leave the patch without storing your recent edits in Stage1, type:

|                                                                    |                                                                                          |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@ShowData/Patch/Stages/Stage1/Fixtures>ChangeDestination Root /DiscardChanges  |
