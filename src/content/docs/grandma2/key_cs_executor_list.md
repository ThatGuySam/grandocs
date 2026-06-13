---
title: "Executor list"
description: "An executor list is an object list of executors."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_cs_executor_list.html"
scrapedAt: "2026-06-12T21:28:05.254Z"
---
An executor list is an object list of executors. 

### Syntax

Executor \[list]

Page \[list]

FaderPage \[list]

ButtonPage \[list]

 

**Important:**\
An executor list has the same syntax as an object list. Each object type is broken down to executor objects. These executor objects form the executor list. 

 

### Example:

\[Channel]> **Pause Page** 1 **Thru** 3

Pauses executors on pages 1, 2, and 3.

\[Channel]> Delete Executor 10 Thru 13

Deletes executors 10 through 13 of the current page.
