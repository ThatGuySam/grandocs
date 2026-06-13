---
title: "At"
description: "To enter the At keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_at.html"
scrapedAt: "2026-06-12T21:24:21.964Z"
---
To enter the At keyword in the command line, use one of the options:

- Press At 
- Type **At**
- Type the shortcut **A **

## Description

The At keyword is a function keyword and a helping keyword at once.

- As a function keyword it is used to apply values.
- As a helping keyword it is used along with other function keywords to indicate destination. 

|                                            |                                                                                                                                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                          |
|                                            | At applies values live in the programmer. For information on how to apply values throughout the show file see the [Clone keyword](/grandma3/2-4/keyword_clone/).   |

At is "the exception that proves the rule". At is one of the few functional keywords which accept objects before the function.

As a starting keyword, At is a function that applies values in the programmer to the current selection.

If value type Fade or Delay is used, the value list will be applied as individual fade/delay times.

Following an object list, At is a function that applies values to the object list. If the object list does not support the At function, the object list is resolved into a selection list and At applies values in the programmer.

Following an object list that follows a function, At is a helping keyword for the starting function.

## General Syntax

At (\[Value\_Type]) \[Value]

At \[Object] \["Object\_Name" or Object\_Number]

\[Object] \["Object\_Name" or Object\_Number] At (\[Value\_Type]) \[Value]

\[Object] \["Object\_Name" or Object\_Number] At \[Object] \["Object\_Name" or Object\_Number]

\[Destination] At \[Source] (If \[Object] \["Object\_Name" or Object\_Number]) (/Option)

### Syntax as a Helping Keyword

\[Function] \[Object] \["Object\_Name" or Object\_Number] At \[Object] \["Object\_Name" or Object\_Number] 

## Examples

- To set the MasterFader of the sequence 1 to 30 %, type:

|                                                                    |                                                  |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>FaderMaster Sequence 1 At 30 |

 [![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?FaderMaster%20Sequence%201%20At%2030) 

- To set the dimmer attributes of the current selection to 75%, type:

|                                                                    |                           |
| ------------------------------------------------------------------ | ------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>At 75 |

[![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?At%2075) 

- To set the fixture selection to the values of cue 3 in the selected sequence, type:

|                                                                    |                              |
| ------------------------------------------------------------------ | ---------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>At Cue 3 |

 

-  To set the pan attribute of the selected fixtures to 20, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Attribute "Pan" At 20 |

 [![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Attribute%20%22Pan%22%20At%2020) 

- To set an individual delay time of 2 seconds to attribute 2, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Attribute 2 At Delay 2 |

 

-  To copy group 4 to group 10, type:

|                                                                    |                                        |
| ------------------------------------------------------------------ | -------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Copy Group 4 At 10 |

 [![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Copy%20Group%204%20At%2010) 

- To set a speed to 60 using the speed readout specified in the user profile (for example, BPM), type:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>At Speed 60 |

 

|                                            |                                                                                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                 |
|                                            | If you use the At command without specifying additional attributes, the natural readout of the dimmer of the user profile will be used.   |

**Requirement:** Enable single digit input first.

For more information on single digit input and how to enable it see [User Settings](/grandma3/2-4/user_settings/).

- To apply a dimmer value of 50 to the currently selected fixtures as single digit input, type:

|                                                                    |                          |
| ------------------------------------------------------------------ | ------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>At 5 |

- To apply a dimmer value of 40 to fixtures 1 to 4, type:

|                                                                    |                                            |
| ------------------------------------------------------------------ | ------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Fixture 1 Thru 4 At  4 |
