---
title: "DropOwnership"
description: "To enter the DropOwnership keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_dropownership.html"
scrapedAt: "2026-06-15T18:25:00.797Z"
pagefind: false
---
To enter the **DropOwnership **keyword in the command line, use one of the options:

- Type **DropOwnership**
- Type the shortcut **Dro**

## Description

The DropOwnership keyword is used when a user wants to edit an object that is currently owned by a different user. DropOwnership sends a request to release the ownership of an object. 

|                                                  |                                                                                                                                                                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                  |
|                                                  | If a running process owns the object to protect data integrity, DropOwnwership might not work right away. If this should be the case, we recommend you use the command again.   |

## Syntax

DropOwnership \[Object] \["Object\_Name" or Object\_Number]

## Examples

- To request dropping ownership of group 1, type: 

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]> DropOwnership Group 1 |

 

- To request dropping ownership of macro 1, line 1, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>DropOwnership Macro 1 |

or type:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>DropOwnership Macro 1.1 |

or

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>DropOwnership Macro 1.\* |
