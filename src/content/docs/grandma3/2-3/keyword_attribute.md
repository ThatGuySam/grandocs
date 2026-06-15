---
title: "Attribute"
description: "To enter the Attribute keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_attribute.html"
scrapedAt: "2026-06-15T18:24:57.225Z"
pagefind: false
---
To enter the Attribute keyword in the command line, use one of the options:

- Press Preset Preset
- Type **Attribute**
- Type the shortcut **Att** 

## Description

The Attribute keyword is an object keyword which is used to set attributes of a fixture.

The default function of attributes is Call. If you call an attribute, you can use the encoders to modify the values. Calling attributes also selects the attributes in the fixture sheet.



|                                                  |                                                                                                                                                              |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                               |
|                                                  | The number of an attribute may vary if new fixtures and attributes are added to the show file. We recommend you use the unique library name of attributes.   |

|                                            |                                                                                                                                     |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                           |
|                                            | - Attributes are organized by subattributes;
- Subattributes are organized by features;
- Features are organized by feature groups. |

## Syntax

\[Function] Attribute \["Attribute\_Name" or Attribute\_Number]

## Examples

- To view the list of attributes along with their corresponding names and numbers in the command line history, type:

|                                                                    |                                     |
| ------------------------------------------------------------------ | ----------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]> List Attribute |

 

-  To set the attribute "pan" to 120 degrees in the selected fixtures, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Attribute "pan" At 120 |

 

- To knock out the first attribute, which is Dimmer, in the current selection, type:

|                                                                    |                                      |
| ------------------------------------------------------------------ | ------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]> Off Attribute 1 |

 

**Requirement:** Load the demo show and select fixture 1.

- To set the random strobe (channel function 4) of the selected fixture to a value of 4 Hz, type:

|                                                                    |                                                           |
| ------------------------------------------------------------------ | --------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Attribute "Shutter1StrobeRandom" At 4 |
