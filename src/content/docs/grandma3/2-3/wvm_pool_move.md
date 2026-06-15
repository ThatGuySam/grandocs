---
title: "Move Pool Objects"
description: "Pool objects are moved using the Move keyword."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/wvm_pool_move.html"
scrapedAt: "2026-06-15T18:25:18.332Z"
pagefind: false
---
Pool objects are moved using the [Move](/grandma3/2-3/keyword_move/) keyword.

A single object can be moved, or a selection of objects can be moved at once.

### Example

Macro 5 needs to be moved to the empty macro pool object 20:

|                                                                    |                                        |
| ------------------------------------------------------------------ | -------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Move Macro 5 At 20 |

If the destination is not empty, then the existing object will move one place further. If this object is also occupied, it will move further, and so on, until no occupied object has to move anymore. Thus potentially moving all the arranged pool objects.

|                                                  |                                                                                                                 |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                  |
|                                                  | Please have a look at the [Exchange keyword](/grandma3/2-3/keyword_exchange/) for objects exchanging positions. |
