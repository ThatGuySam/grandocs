---
title: "Delete Pool Objects"
description: "Removing pool objects can be done using the Delete keyword."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/wvm_pool_delete.html"
scrapedAt: "2026-06-12T21:24:44.778Z"
---
Removing pool objects can be done using the [Delete](/grandma3/2-4/keyword_delete/) keyword.

When an object is deleted, grandMA3 will try to make everything look the same. For instance, deleting a preset will move the values stored in the preset into the different cues where the preset was used. This is not always possible, for instance, if an executor is controlling a sequence and the sequence is deleted, then it is gone, and the executor is empty.

### Example

Delete view 42:

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Delete View 42 |

It can also be a range of numbers, for instance.

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Delete View 42 Thru 90 |

Deleting pool objects can be undone with [Oops](/grandma3/2-4/keyword_oops/). It will bring back the pool objects, but it might not restore links to the object.

|                                            |                                                                                                                 |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                       |
|                                            | It is also possible to delete a pool object using a [Swipey Command](/grandma3/2-4/wvm_pool/#h2__1144791563).   |
