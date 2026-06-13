---
title: "Executor"
description: "To enter the Executor keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_executor.html"
scrapedAt: "2026-06-12T21:24:26.545Z"
---
To enter the **Executor** keyword in the command line, use one of the options:

- Press MA + X16 | Exec
- Type **Executor**
- Type the shortcut **Ex**

## Description

The Executor keyword is an object keyword used as a control handle for other objects.

The default function for Executor objects is **Select**. This means that calling executors without any function specified selects the object assigned to the executor. This selection is now also controllable with the 100 mm fader section.

If you apply a function or reference a property not supported by the Executor object, the command will be passed on to its child: key, fader, or the object assigned to the executor.

## Syntax

**Executor \[Executor\_ID]**

Select Page \[Page\_ID] Executor \[**Executor\_**ID]

**Set Executor \[Executor\_ID] \[Setting] = \[Setting\_Option****]**

##

For more information on setting the executor assignments using the interface, see the [Assign Object to an Executor](/grandma3/2-4/executor_assign/) and the [Executor Configurations](/grandma3/2-4/executor_configurations/).

## Examples

- To remove executor 205 on the current page, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Delete Executor 205 |

It does not delete the object assigned to the executor. It just deletes the assignment.

 

- To delete cue 3 of the sequence assigned to executor 205, type:

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Delete Executor 205 Cue 3 |

 

- To select executor 102 on page 4, type:

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Select Page 4.102 |

 

- To change the setting "Key" of executor 201 to "Flash", type:

|                                                                    |                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Executor 201 "Key" = "Flash" |

 

For more information see [Executors](/grandma3/2-4/executor/).
