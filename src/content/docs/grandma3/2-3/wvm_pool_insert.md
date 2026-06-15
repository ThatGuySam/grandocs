---
title: "Insert Pool Objects"
description: "Pool objects can be inserted between other pool objects of the same type. This can be useful for organizing the pools."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/wvm_pool_insert.html"
scrapedAt: "2026-06-15T18:25:18.336Z"
pagefind: false
---
Pool objects can be inserted between other pool objects of the same type. This can be useful for organizing the pools.

It is done using the [Insert](/grandma3/2-3/keyword_insert/) keyword.

The inserted pool object is inserted before the destination object number.

### Example

For example, inserting view 42 between views 9 and 10:

|                                                                    |                                          |
| ------------------------------------------------------------------ | ---------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>insert View 42 At 10 |

The old view 10 and other views from 10 to the next empty pool object are then moved one number up.
