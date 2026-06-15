---
title: "/OddEven"
description: "To enter the /OddEven option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_oddeven.html"
scrapedAt: "2026-06-15T18:25:16.255Z"
pagefind: false
---
To enter the **/OddEven **option keyword in the command line, use one of the options:

- Type **/OddEven**
- Type the shortcut** /Od**

## Description

The /OddEven option keyword is used to form two groups – odd and even – out of fixtures of a specific fixture type, class or layer, and range of fixtures and selection.

## Syntax

AutoCreate \[SourceObject] \["SourceObject\_Name" or SourceObject\_Number] At \[DestinationObject] \["DestinationObject\_Name" or Destination\_Object\_Number] /OddEven

## General Keywords

General keywords that use the /OddEven option keyword:

- [AutoCreate keyword](/grandma3/2-3/keyword_autocreate/)
- [Fixture keyword](/grandma3/2-3/keyword_fixture/)
- [FixtureClass keyword](/grandma3/2-3/keyword_fixture_class/)
- [FixtureLayer keyword](/grandma3/2-3/keyword_fixture_layer/)
- [FixtureType keyword](/grandma3/2-3/keyword_fixturetype/)
- [Selection keyword](/grandma3/2-3/keyword_selection/)
- [Store keyword](/grandma3/2-3/keyword_store/)

## Example

- To auto create odd and even groups out of all patched fixtures using fixture type 13 starting in group 21, type:

|                                                                    |                                                                    |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>AutoCreate FixtureType 13 At Group 21 /OddEven |
