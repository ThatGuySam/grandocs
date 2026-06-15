---
title: "Select Fixtures"
description: "First, fixtures must be selected to operate and change the values of attributes (for example, dimmer, pan, tilt, or zoom)."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/operate_select_fixtures.html"
scrapedAt: "2026-06-15T18:25:21.109Z"
pagefind: false
---
First, fixtures must be selected to operate and change the values of attributes (for example, dimmer, pan, tilt, or zoom).

To select fixtures, use one of the following methods:

- Type the fixture ID in the command line using the numeric keys.
- Tap at the fixtures in a [Fixture Sheet](/grandma3/2-3/operate_fixture_sheet/).
- Draw a lasso around the fixtures in the [3D Viewer](/grandma3/2-3/patch_3d_viewer/).
- Tap a Group Pool object. See [Create Groups](/grandma3/2-3/group_create/).
- Tap a Preset Pool object. See [Create New Presets](/grandma3/2-3/presets_create/).

|                                            |                                                                                                                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                            |
|                                            | See the [System Colors](/grandma3/2-3/ws_colors_system/) topic to learn more about the font colors used when selecting or deselecting fixtures in the fixture sheet. |

---

## Examples

Requirements:

- 10 patched fixtures. See [Add Fixtures to the Show](/grandma3/2-3/patch_add_fixtures/).
- A fixture sheet window is open. 

 

To select fixtures 1 thru 5, press the following hardkeys on the console or use the command section menu ![](/img/grandma3/2-3/icon_command_section-734f51.png) :

Fixture 1 Thru 5 Please

This command is visible in the command line input:

|                                                                    |                                      |
| ------------------------------------------------------------------ | ------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture 1 Thru 5 |

Fixtures 1 thru 5 are selected. The five selected fixtures are in a yellow font in the Fixture Sheet window.

---

To exclude fixtures from a selection, for example, types:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture 1 Thru 10 - 6 Thru 8 |

Fixtures 1 to 5 are selected, 6 to 8 are deselected, and 9 and 10 are selected.

---

To make the same selection of fixtures as shown in the example above, using a different syntax, type:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture 1 Thru 5 + 9 Thru 10 |

 To select fixtures in two commands, type:

|                                                                    |                                      |
| ------------------------------------------------------------------ | ------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture 1 Thru 5 |

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture 9 + 10 |

To select fixtures 9 and 10 in the example above,  + or Thru can be used.

|                                                  |                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                                                                                                    |
|                                                  | Some keys are used to navigate the sub-selection of fixtures, which is part of the [MAtricks](/grandma3/2-3/matricks/) function. The keys have an on-screen version called the [Selection Bar,](/grandma3/2-3/operate_selection_bar/) which can also be used to select fixtures.  |

 

## Recursive Selection of Fixtures

Some fixtures have multiple sub-fixtures. The following examples demonstrate how to select fixtures and their sub-fixtures in various orders and hierarchies using an additional dot (.) character.

|                                            |                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                             |
|                                            | See the First Patch topic in the Quick Start Guide to learn more about sub-fixtures.  |

Requirement for this example:

- 10 Ayrton Alienpix - RS Ex 16-bit patched. See [Add Fixtures to the Show](/grandma3/2-3/patch_add_fixtures/).
- Fixtures spot numbered from 301 to 310.
- A fixture sheet window is open.

To select fixture 301, type:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture 301 |

Only the main fixture is selected.

- A dot (.) can be added to the main fixture's selection syntax to select all sub-fixtures quickly.

To select fixture 301 and all its sub-fixtures, type:

|                                                                    |                                  |
| ------------------------------------------------------------------ | -------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture 301. |

![](/img/grandma3/2-3/window_recursive_selection_1-02722e.png)

All AlienPix ( fixtures and sub-fixtures) are selected.

To select the main fixtures and all sub-fixtures of fixtures 301 thru 303, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture 301 Thru 303. |

![](/img/grandma3/2-3/window_recursive_selection_2-35986c.png)

All AlienPix ( fixtures and sub-fixtures) are selected.

- The dot selects the sub-fixtures downwards from the specified level. Therefore, selecting only the pixels of an AlienPix is also possible.

To select all pixels of an AlienPix, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture 301.1. Thru |

![](/img/grandma3/2-3/window_recursive_selection_3-3a116d.png)

All pixels of an AlienPix are selected.

To select pixels of an AlienPix in particular, type:

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture 301.1. Thru 4 + 6 |

![](/img/grandma3/2-3/window_recursive_selection_4-95aca5.png)

Particular selection of pixels.



---

## General Fixture Selection

To select all fixtures and sub-fixtures, type:

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture Thru . |

To select all parents of all fixtures, type:

|                                                                    |                                  |
| ------------------------------------------------------------------ | -------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Fixture Thru |
