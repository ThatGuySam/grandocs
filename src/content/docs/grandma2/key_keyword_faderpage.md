---
title: "FaderPage"
description: "To get the FaderPage keyword in the command line press Page Page Page (= FaderPage)."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_faderpage.html"
scrapedAt: "2026-06-12T21:27:50.783Z"
---
To get the FaderPage keyword in the command line press Page Page Page (= FaderPage).

Another way is to type **FaderPage** or one of the shortcuts **FP** or **FaderP** directly in the command line.

## Description

FaderPage is an object keyword representing the fader executor part of a page.

The default function for this object is [Call](/grandma2/key_keyword_call/). Calling a FaderPage changes the physical executors to that page.

If you apply a function not supported by the FaderPage object, the function will be passed on to the executor child objects of the FaderPage.

## Syntax

FaderPage \[ID]

FaderPage \[Pagepool].\[ID]

## Example

To change the physical fader executors to page 5 type in the command line:

\[Channel]> FaderPage 5
