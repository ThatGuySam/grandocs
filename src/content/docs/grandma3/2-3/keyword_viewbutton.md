---
title: "ViewButton"
description: "To enter the ViewButton keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_viewbutton.html"
scrapedAt: "2026-06-15T18:25:13.471Z"
pagefind: false
---
To enter the ViewButton keyword in the command line, use one of the options:

- Press MA + X7|View + X7|View
- Type **ViewButton**
- Type the shortcut **ViewB**
- Type **VB**

## Description

The ViewButton keyword is an object keyword which is used to call or store the object assigned on the view button.

Calling a view button only works if the object assigned to it supports it.

For more information see the [Call Keyword](/grandma3/2-3/keyword_call/).

## Syntax

ViewButton \[Screen\_Number].\["ViewButton\_Name" or ViewButton\_Number] (/Option "\[Option\_Value]")

\[Function] ViewButton \[Screen\_Number].\["ViewButton\_Name" or ViewButton\_Number] (/Option "\[Option\_Value]")

## Option Keywords

The ViewButton keyword uses the following option keywords:

- [/Screen](/grandma3/2-3/ok_screen/)

## Examples

- To call the view assigned to ViewButton 4 on screen 2, type:

|                                                                    |                                     |
| ------------------------------------------------------------------ | ----------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ViewButton 2.4  |

|                                                  |                                                                                                                                              |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                               |
|                                                  | If you do not specify the screen location using the /Screen option keyword, the view will be called to the screen that currently has focus.  |
