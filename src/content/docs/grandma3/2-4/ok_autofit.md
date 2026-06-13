---
title: "/AutoFit"
description: "To enter the /AutoFitption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_autofit.html"
scrapedAt: "2026-06-12T21:24:39.880Z"
---
To enter the **/AutoFit **option keyword in the command line, use one of the options:

- Type **/AutoFit**
- Type the shortcut** /Autof**

## Description

The /AutoFit option keyword is used to position any window in the next unoccupied area of a specified screen respecting the minimum requirements of the window. If you are in a help topic, use the Command Bot which opens the corresponding UI window using this logic. For more information on our bot see [Navigate in the Help](/grandma3/2-4/atm_navigate_in_the_help/).       

Syntax

Store ScreenContent \[Display\_Number or Default] \["Window\_Name"] /AutoFit

## General Keywords

General keywords that use the /AutoFit option keyword:

- [ScreenContent keyword](/grandma3/2-4/keyword_screencontent/)
- [Store keyword](/grandma3/2-4/keyword_store/)

## Example

- To open the fixture sheet in a free area of the screen you have currently the focus in, type:

|                                                                    |                                                                                               |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store ScreenContent Default "WindowFixtureSheet" /AutoFit                 |
