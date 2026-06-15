---
title: "Executor"
description: "To enter the Executor keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_executor.html"
scrapedAt: "2026-06-15T18:25:01.663Z"
pagefind: false
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

## Settings

The following table displays the settings that can be set using the command line:

| Setting                         | Setting Options | Description                                                                                     |
| ------------------------------- | --------------- | ----------------------------------------------------------------------------------------------- |
| Key                             | Go+ etc.        | Executor key assignment                                                                         |
| Fader                           | Master etc.     | Executor fader assignment                                                                       |
| Encoder                         | Master etc.     | Executor encoder assignment                                                                     |
| EncoderLeft                     | <<< etc.        | Executor encoder assignment when turning the encoder counterclockwise                           |
| EncoderRight                    | >>> etc.        | Executor encoder assignment when turning the encoder clockwise                                  |
| KeyCmd                          | Go+ etc.        | Command run when executor button is pressed                                                     |
| EncoderRightCmd                 | <<< etc.        | Command run when the encoder is turned counterclockwise                                         |
| EncoderLeftCmd                  | >>> etc.        | Command run when the encoder is turned clockwise                                                |
| MAKey                           | Go+ etc.        | Executor key assignment when pressing it together with the MA key                               |
| MAFader                         | Master etc.     | Executor fader assignment when pressing the MA key                                              |
| MAEncoder                       | Master etc.     | Executor encoder assignment when the MA key is pressed                                          |
| MAEncdoerRight                  | <<< etc.        | Executor encoder assignment when turning the encoder counterclockwise while pressing the MA key |
| MAEncoderLeft                   | >>> etc.        | Executor encoder assignment when turning the encoder clockwise while pressing the MA key        |
| MAKeyCmd                        | Go+ etc.        | Command run when executor button is pressed together with the MA key                            |
| MAEncoderRightCmd               | <<< etc.        | Command run when the encoder is turned counterclockwise together with the MA key                |
| MAEncoderLeftCmd                | >>> etc.        | Command run when the encoder is turned clockwise together with the MA key                       |
| PrimaryAssignmentChanged        |                 | This is information only. See the description below                                             |
| SecondaryAssignmentChanged      |                 | This is information only. See the description below                                             |
| Width                           | 1-5             | Executor width                                                                                  |
| Height                          | 1-4             | Executor height                                                                                 |
| Object                          |                 | The object the executor controls                                                                |
| Config                          |                 | The executor configuration used by the executor                                                 |
| TotalPrimaryAssignmentChanged   |                 | This is information only. See the description below                                             |
| TotalSecondaryAssignmentChanged |                 | This is information only. See the description below                                             |
|                                 |                 |                                                                                                 |

The four information settings are related to changes made in relation to the used executor configuration. Primary assignments are the assignments the executor has when the MA key is not pressed. The Secondary assignments are the assignments the executor has while the MA key is pressed. The two properties beginning with "Total" are for the entire combined executor. This is relevant when the executor is part of a combined executor with more than one executor in height and/or width. The information settings cannot be changed, they are automatically updated by the software.

For setting the executor assignments using the interface, please read the [Assign Object to an Executor topic](/grandma3/2-3/executor_assign/) and the [Executor Configurations topic](/grandma3/2-3/executor_configurations/).

## Examples

- To remove executor 205 on the current page, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Delete Executor 205 |

It does not delete the object assigned to the executor. It just deletes the assignment.

 

- To delete cue 3 of the sequence assigned to executor 205, type:

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Delete Executor 205 Cue 3 |

 

- To select executor 102 on page 4, type:

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Select Page 4.102 |

 

- To set the setting "Key" of executor 201 to "Flash", type:

|                                                                    |                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Set Executor 201 "Key" = "Flash" |

 

For more information see [Executors](/grandma3/2-3/executor/).
