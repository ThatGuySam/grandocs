---
title: "ChangeDestination"
description: "To enter the ChangeDestination keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_changedestination.html"
scrapedAt: "2026-06-15T18:24:57.804Z"
pagefind: false
---
To enter the ChangeDestination keyword in the command line, use one of the options:

- Type **ChangeDestination**
- Type the shortcut **CD **or ****Chang****

## Description

The ChangeDestination keyword is a function keyword used to change the current destination of the command line. 

## Syntax

ChangeDestination \["Element\_Name" or Element\_Number]

ChangeDestination Root

ChangeDestination ..

## Examples

- To enter the first element of the current destination, type:

|                                                                    |                                          |
| ------------------------------------------------------------------ | ---------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination 1  |

Result:

|                                                                    |                            |
| ------------------------------------------------------------------ | -------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@MessageCenter>  |

 

- To enter the element of the current destination called "Sequence", type:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ChangeDestination "Sequence" |

 

- To leave the destination "Sequence", type:

|                                                                    |                                          |
| ------------------------------------------------------------------ | ---------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@Menus> ChangeDestination Root |

Result:

|                                                                    |                      |
| ------------------------------------------------------------------ | -------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]> |

 

- To go one level back in the tree structure, type:

|                                                                    |                                                          |
| ------------------------------------------------------------------ | -------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@MessageCenter/Undefined> ChangeDestination .. |

Result:

|                                                                    |                           |
| ------------------------------------------------------------------ | ------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@MessageCenter> |
