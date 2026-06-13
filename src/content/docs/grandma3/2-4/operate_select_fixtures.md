---
title: "Select Fixtures"
description: "First, fixtures must be selected to operate and change attribute values (for example, dimmer, pan, tilt, or zoom)."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/operate_select_fixtures.html"
scrapedAt: "2026-06-12T21:24:48.063Z"
---
First, fixtures must be selected to operate and change attribute values (for example, dimmer, pan, tilt, or zoom).

To select fixtures, use one of the following methods:

- Type the fixture ID in the command line using the numeric keys.
- Tap at the fixtures in a [Fixture Sheet](/grandma3/2-4/operate_fixture_sheet/).
- Draw a lasso around the fixtures in the [3D Viewer](/grandma3/2-4/patch_3d_viewer/).
- Tap a Group Pool object. See [Create Groups](/grandma3/2-4/group_create/).
- Tap a Preset Pool object. See [Create New Presets](/grandma3/2-4/presets_create/).

|                                            |                                                                                                                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                            |
|                                            | See the [System Colors](/grandma3/2-4/ws_colors_system/) topic to learn more about the font colors used when selecting or deselecting fixtures in the fixture sheet. |

---

## Examples

Requirements:

- 10 patched fixtures. See [Add Fixtures to the Show](/grandma3/2-4/patch_add_fixtures/).
- A fixture sheet window is open. 

 

To select fixtures 1 thru 5, press the following hardkeys on the console or use the command section menu ![](/img/grandma3/2-4/icon_command_section-562fd8.png) :

Fixture 1 Thru 5 Please

This command is visible in the command line input:

|                                                                    |                                      |
| ------------------------------------------------------------------ | ------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 1 Thru 5 |

Fixtures 1 thru 5 are selected. The five selected fixtures are in a yellow font in the Fixture Sheet window:

![](/img/grandma3/2-4/window_fixture_selection_example-793f65.png)

---

To exclude fixtures from a selection, for example, type:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 1 Thru 10 - 6 Thru 8 |

Fixtures 1 to 5 are selected, 6 to 8 are deselected, and 9 and 10 are selected:

![](/img/grandma3/2-4/window_fisture_selection_example-2-117075.png)

---

To make the same selection of fixtures as shown in the example above, using a different syntax, type:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 1 Thru 5 + 9 Thru 10 |

 To select fixtures in two commands, type:

|                                                                    |                                      |
| ------------------------------------------------------------------ | ------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 1 Thru 5 |

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 9 + 10 |

To select fixtures 9 and 10 in the example above, use + or Thru.

|                                                  |                                                                                                                                                                                                                                                                    |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                                                                                                                                                                                                     |
|                                                  | Some keys are used to navigate the fixture sub-selection within the [MAtricks](/grandma3/2-4/matricks/) function. The keys have an on-screen version called the [Selection Bar,](/grandma3/2-4/operate_selection_bar/) which can also be used to select fixtures.  |

 

## Recursive Selection of Fixtures

Some fixtures have multiple subfixtures. The following examples demonstrate how to select fixtures and their subfixtures in various orders and hierarchies using an additional dot (.) character.

|                                            |                                                                                                                                              |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                    |
|                                            | See the [First Patch](/grandma3/2-4/qsg_first_patch/) topic in the [Quick Start Guide](/grandma3/2-4/qsg/) to learn more about subfixtures.  |

Requirement for this example:

- 10 Ayrton Alienpix - RS Ex 16-bit patched. See [Add Fixtures to the Show](/grandma3/2-4/patch_add_fixtures/).
- Fixtures are numbered from 301 to 310.
- A fixture sheet window is open.

To select fixture 301, type:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 301 |

Only the main fixture is selected.

- A dot (.) can be added to the main fixture's selection syntax to select all subfixtures quickly.

To select fixture 301 and all its subfixtures, type:

|                                                                    |                                  |
| ------------------------------------------------------------------ | -------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 301. |

![](/img/grandma3/2-4/window_recursive_selection_1-23f0c7.png)

All AlienPix (fixtures and subfixtures) are selected.

To select the main fixtures and all subfixtures of fixtures 301 thru 303, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 301 Thru 303. |

![](/img/grandma3/2-4/window_recursive_selection_2-0b8f80.png)

All AlienPix ( fixtures and subfixtures) are selected.

- The dot selects the subfixtures downwards from the specified level. Therefore, selecting only the pixels of an AlienPix is also possible.

To select all pixels of an AlienPix, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 301.1. Thru |

![](/img/grandma3/2-4/window_recursive_selection_3-eb52de.png)

All pixels of an AlienPix are selected.

To select pixels of an AlienPix in particular, type:

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 301.1. Thru 4 + 6 |

![](/img/grandma3/2-4/window_recursive_selection_4-bfc13f.png)

Particular selection of pixels.



---

## General Fixture Selection

To select all fixtures and subfixtures, type:

|                                                                    |                                    |
| ------------------------------------------------------------------ | ---------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture Thru . |

To select all parents of all fixtures, type:

|                                                                    |                                  |
| ------------------------------------------------------------------ | -------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture Thru |
