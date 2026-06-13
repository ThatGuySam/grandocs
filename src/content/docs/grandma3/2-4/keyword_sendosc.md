---
title: "SendOSC"
description: "To enter the SendOSCeyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_sendosc.html"
scrapedAt: "2026-06-12T21:24:36.237Z"
---
To enter the **SendOSC** keyword in the command line, use one of the options:

- Type **SendOSC**
- Type the shortcut **Sen**

## Description

The SendOSC keyword is a command keyword that is used to send an OSC command.

For more information see [Remote In and Out](/grandma3/2-4/remote_inputs/#OSC).

## Syntax

**SendOSC \[ID] "/\[OSCAddress],\[OSC Type],\[Value]"**

********

The supported types are:

- Int(i)
- Float(f)
- Blob(b)
- String(s)
- True(T)
- False(F)
- Null(N)
- Impulse(I)
- Timetag(t)

It is not necessary to set a value (Payload) for:

- True
- False
- Null
- Impulse
- Timetag

|                                            |                                                                                                           |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                 |
|                                            | When using the OSC types True, False, Nil/Null, Impulse and Timetag it is not necessary to enter a value. |

|                                            |                                                               |
| ------------------------------------------ | ------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                     |
|                                            | Several values can be sent at once when separated by commas.  |

|                                                  |                                                                 |
| ------------------------------------------------ | --------------------------------------------------------------- |
| ![](/img/grandma3/2-4/important_gray-89eed8.png) | **Important:**                                                  |
|                                                  | When addressing an executor, a page must be specified as well.  |

Instead of using page and executor numbers, it is also possible to address them by name.

When addressing executor keys, a value of 0 will be interpreted as not pressed. Values greater 0 will be interpreted as button press.

If a prefix is specified for an OSCData entry, then this very prefix will be added to the sent string when using the OSCSend command.

|                                            |                                                                                                                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                         |
|                                            | The supported OSC types to control faders, executor knobs, and buttons are: Integer32, Float32, True, False and Nil/Null.A True will be interpreted as 1, while a False will be interpreted as 0. |
