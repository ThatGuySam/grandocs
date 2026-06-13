---
title: "Label"
description: "To enter the Label keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_label.html"
scrapedAt: "2026-06-12T21:24:30.118Z"
---
To enter the Label keyword in the command line, use one of the options:

- Press Assign Assign
- Type **Label**
- Type the shortcut **L**

## Description

The Label keyword is used to give objects a name.

If multiple objects are labeled, and the name contains a free-standing number, the number will be enumerated for each object.

If you do not label an object, a pop-up appears.

If no object is specified when using the Label keyword, the cue in the selected sequence will be addressed. If the selected sequence is disabled, the sequence will be addressed.

## Syntax

**Label \[Object] \["Object\_Name" or Object\_Number] \["Name"]**

|                                                  |                                                                                     |
| ------------------------------------------------ | ----------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                                      |
|                                                  | The name must not contain the following characters: \ " $ & \* ? , . ; ^ { \| } \~  |

## Examples

- To label group 3 "Higgs Boson", type:

|                                                                    |                                                 |
| ------------------------------------------------------------------ | ----------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Label Group 3 "Higgs Boson" |

 

- To label fixtures 1 to 10 as "Mac700 1", "Mac700 2" and so on, type:

|                                                                    |                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Label Fixture 1 Thru 10 "Mac700 1" |

 

-  To rename the color preset "Red" to "Dark Red", type:

|                                                                    |                                                           |
| ------------------------------------------------------------------ | --------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Label Preset "Color"."Red" "Dark Red" |

 

- To label group 1 using the name of the selected attribute, type:

|                                                                    |                                                |
| ------------------------------------------------------------------ | ---------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Label Group 1 At Attribute |

- To label cue 1 "Insomnia", type:

|                                                                    |                                        |
| ------------------------------------------------------------------ | -------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Label 1 "Insomnia" |

- To address the current cue of the selected sequence, type:

|                                                                    |                           |
| ------------------------------------------------------------------ | ------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Label |

- To label cue 42 in the selected sequence given that the sequence is running, type:

|                                                                    |                              |
| ------------------------------------------------------------------ | ---------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Label 42 |
