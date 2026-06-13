---
title: "Create Pool Objects"
description: "This is a general description of how to create pool objects."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/wvm_pool_create.html"
scrapedAt: "2026-06-12T21:24:44.427Z"
---
This is a general description of how to create pool objects.

The [Store keyword](/grandma3/2-4/keyword_store/) is used when creating pool objects. This stores the relevant information in the pool object if the relevant information is available.

For instance, to store a preset, the programmer needs to have valid values. If the relevant values are not available, an empty pool object is created.

Some pool objects are a bit more complex. For instance, storing a pool object in the image pool. The pool that can be added on a screen, is not just called "Images" as the title suggests. It is actually image "pool" 3.

So, storing something on pool object 2 needs the following input:

|                                                                    |                                     |
| ------------------------------------------------------------------ | ----------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Image 3.2 |

This only stores an empty pool object. 

Some objects are better to [Edit](/grandma3/2-4/keyword_edit/) when creating them. This opens the relevant editor to create the object.

Images are an example of such an object.

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Edit Image 3.2 |

This command creates the pool object and immediately opens the editor for the image pool object. Read more about images in the [Images section](/grandma3/2-4/images/).

Some pool objects can be created by pressing and holding an empty pool object. If there is relevant information in the programmer, then this might be stored in the new pool object.

For instance, having a selection of fixtures in the programmer and pressing and holding an empty group pool object for about 2 seconds will create a new group with the fixture selection.

It is also possible to use the Store keyword in combination with a pool but without a specific number:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Group |

This stores a new pool object with the relevant information at the first available empty spot in the pool. 

|                                            |                                                                                                                 |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                       |
|                                            | It is also possible to create a pool object using a [Swipey Command](/grandma3/2-4/wvm_pool/#h2__1144791563).   |
