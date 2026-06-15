---
title: "Copy Pool Objects"
description: "Pool objects can be copied to an empty location using the Copy keyword."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/wvm_pool_copy.html"
scrapedAt: "2026-06-15T18:25:18.479Z"
pagefind: false
---
Pool objects can be copied to an empty location using the [Copy](/grandma3/2-3/keyword_copy/) keyword.

A single object or a selection of several objects can be copied at once. Using the selection order, they are positioned at the new location.

### Example

Copy sequence 1 at pool object 22 using the following command:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Copy Sequence 1 At 22 |

If the destination is not empty, then the old object will be overwritten. There is a pop-up asking if this is desired.

|                                            |                                                                                                               |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                     |
|                                            | It is also possible to copy a pool object using a [Swipey Command](/grandma3/2-3/wvm_pool/#h2__1144791563).   |
