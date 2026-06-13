---
title: "Page"
description: "To get the Page keyword in the command line, press Page."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_page.html"
scrapedAt: "2026-06-12T21:27:57.436Z"
---
To get the Page keyword in the command line, press Page.

You can also type **Page** or the shortcut **Pag** in the command line.

## Description

The Page keyword is an object keyword to access pages. The default function is Call. For more information, see [Call keyword](/grandma2/key_keyword_call/).

If you apply a function not supported by the page object, the function will be passed on to the executor child objects of the page.

## Syntax

**\[Function] Page** \[ID]

Assign Page / \[Parameter] = \[Parameter Value]

## Parameter

The following table displays the assignable parameter by using the command line.

| Parameter | Parameter Value | Description                     |
| --------- | --------------- | ------------------------------- |
| Name      | "Page name"     | Assign name of the page.        |
| Info      | "Page info"     | Assign information to the page. |

## Examples

- To change to page 5, type in the command line:

\[Channel]> Page 5

 

- To pause all executors on page 3, type in the command line:

\[Channel]> Pause Page 3

 

-  To assign an information to page 3, type in the command line:

\[Channel]> Assign Page 3 / Info = "This are all my executors on page 3"

 

- To call a page by using the page name, type in the command line:

\[Channel]> Page "song name"
