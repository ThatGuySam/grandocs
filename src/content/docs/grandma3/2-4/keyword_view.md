---
title: "View"
description: "To enter the View keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_view.html"
scrapedAt: "2026-06-12T21:24:39.110Z"
---
To enter the View keyword in the command line, use one of the options:

- Press MA + X7 | View
- Type **View**
- Type the shortcut **V**

## Description

The View keyword calls or stores views on a screen.

## Syntax

View \["View\_Name" or View\_Number] (/Option \["Option\_Value"])

\[Function] View \["View\_Name" or View\_Number] (/Option \["Option\_Value"])

## Settings

The following table displays the properties that can be assigned using the [Set keyword](/grandma3/2-4/keyword_set/).

| Setting           | Option/Value                              | Description                                                           |
| ----------------- | ----------------------------------------- | --------------------------------------------------------------------- |
| Name              | View name, for instance, "Stage External" | The name of the view.                                                 |
| Scribble          | Scribble pool object                      | The assigned scribble object.                                         |
| Appearance        | Appearance pool object                    | The assigned appearance object.                                       |
| ScreenContentMask | 1 to 127                                  | An internal number that indicates the screens used when it was saved. |
| RequestedW        | 1 to 327                                  | The width of the view (grid width).                                   |
| RequestedH        | 1 to 327                                  | The height of the view (grid height).                                 |

## Option Keywords

The View keyword uses the following option keywords:

- [/Screen](/grandma3/2-4/ok_screen/)

## Example

- To call view 2 in the view pool on the screen where it is stored, type:

|                                                                    |                             |
| ------------------------------------------------------------------ | --------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>View 2  |
