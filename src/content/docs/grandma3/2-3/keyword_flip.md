---
title: "Flip"
description: "To enter the Flip keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_flip.html"
scrapedAt: "2026-06-15T18:25:02.694Z"
pagefind: false
---
To enter the Flip keyword in the command line, use one of the options:

- Type **Flip**
- Type the shortcut **Fli**

## Description

The Flip keyword is used to access the different pan/tilt combinations that direct a moving head in the same direction. 

Flip adds 180 degrees to the pan value of the fixtures and inverts the tilt angle. If the fixtures reach their physical breakpoint, the pan and tilt values will be set to the smallest possible value.\
That is, Flip directs the fixture in the same direction using a different pan/tilt combinations. 

|                                            |                                                                                                                                                                                                                                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                                                          |
|                                            | -If no selection list is entered, Flip is applied to the fixture selection. -If no number is entered, the function toggles through the different possible combinations. -The number of combinations depends on the possible degree value the fixture can pan in.   |

## Syntax

Flip (\[Flip\_Number] \[Object] \["Object\_Name" or Object\_Number])

## Examples

- To set the pan and tilt of the fixture selection to the next pan/tilt combination, type:

|                                                                    |                          |
| ------------------------------------------------------------------ | ------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Flip |

 

- To set the pan and tilt of group 7 to the second pan/tilt combination that directs the fixtures in the same direction, type:

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Flip 2 Group 7 |
