---
title: "ListOwnership"
description: "To enter the ListOwnership keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_listownership.html"
scrapedAt: "2026-06-15T18:25:05.362Z"
pagefind: false
---
To enter the ListOwnership keyword in the command line, use one of the options:

- Type **ListOwnership**
- Type the shortcut **Listo**

## Description

ListOwnership is used as a troubleshooting keyword in case of a multi-user access conflict.

If a multi-user access conflict occurs, use the ListOwnership keyword. It lists the objects that are currently locked for all users in the session, hence causing the conflict. 

## Syntax

ListOwnership (\[Object] \["Object\_Name" or Object\_Number])

## Examples

- To display all objects that are locked for all users and that might cause a multi-user conflict, type:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ListOwnership |

 

- To display the ownership in macro 1 line 1, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ListOwnership Macro 1 |

 or type:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ListOwnership Macro 1.1 |

or:

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ListOwnership Macro 1.\* |
