---
title: "Remote"
description: "To enter the Remote keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_remote.html"
scrapedAt: "2026-06-12T21:24:34.914Z"
---
To enter the Remote keyword in the command line, use one of the options:

- Type **Remote**
- Type the shortcut **Rem**

## Description

The Remote keyword is an object keyword that is used to access the remote input types.

You can store or delete remote input types and set parameters.

## Syntax

\[Function] Remote \["RemoteInputType\_Name" or RemoteInputType\_Number].\["Remote\_Name" or Remote\_Number] (Property \["Property\_Name"] \["Property\_Value"])

Assign \[Object] \["Object\_Name" or Object\_Number] At Remote **\["RemoteInputType\_Name" or RemoteInputType\_Number].\["Remote\_Name" or Remote\_Number] (Property \["Property\_Name"] \["Property\_Value"])**

The following table displays the available remote input types and their remote input type IDs.

| Remote Input Type | Remote Input Type ID |
| ----------------- | -------------------- |
| DC Remote         | 1                    |
| MIDI Remote       | 2                    |
| DMX Remote        | 3                    |

The IDs in the input type have to be in an order and have to start with 1.

## Properties

The following table displays the properties you can set using the command line with the help of the [Set Keyword](/grandma3/2-4/keyword_set/).

|                                            |                                                                                                                                                               |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                     |
|                                            | If an option or any other part of the keyword command requires two quotation marks, the outer quotation marks are "+" and the inner quotation marks are '+'.  |

| Property                                 | Property Value                                                    | Description                                                                                                                                                                                                                                                  |
| ---------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Lock                                     | "Yes", "No"                                                       | Sets the lock status.                                                                                                                                                                                                                                        |
| Name                                     | "This is the name of the remote"                                  | Sets the name of the remote.                                                                                                                                                                                                                                 |
| Target                                   | "World", "Sequence", "Macro", "Group", "Plugin", "View", "Master" | Sets the target of the action when the contact is active.                                                                                                                                                                                                    |
| Fader                                    | "Master", "X", "Temp", and all the fader functions.               | Sets the fader the console should activate.                                                                                                                                                                                                                  |
| Key                                      | "Fix", "Select", "SelFix", and all the key functions.             | Sets the key the console should activate.                                                                                                                                                                                                                    |
| TriggerOn                                | "0%...100%"                                                       | Sets the value at which the trigger will be set to on.                                                                                                                                                                                                       |
| TriggerOff                               | "0%...100%"                                                       | Sets the value at wich the trigger will be set to off.                                                                                                                                                                                                       |
| InFrom                                   | "0%...100%"                                                       | Sets the starting point of the range of the incoming signal in use.                                                                                                                                                                                          |
| InTo                                     | "0%...100%"                                                       | Sets the end point of the range of the incoming signal in use.                                                                                                                                                                                               |
| OutFrom                                  | "0%...100%"                                                       | Sets the starting point of the range of the outgoing signal in use.                                                                                                                                                                                          |
| OutTo                                    | "0%...100%"                                                       | Sets the end point of the range of the outgoing signal in use.                                                                                                                                                                                               |
| Enabled                                  | "Yes", "No"                                                       | Sets the status to enabled or not enabled.                                                                                                                                                                                                                   |
| **Only for DMX remotes:** Address        | 1.001...1024.512 \[universe].\[dmx address]                       | Sets the DMX universe and address.                                                                                                                                                                                                                           |
| **Only for DMX remotes:** Resolution     | "8bit", "16bit", "24bit"                                          | Sets the DMX resolution. For 16 bit and 24 bit, the DMX channels have to be consecutive.                                                                                                                                                                     |
| **Only for MIDI remotes:** MIDIChannel   | "1, 2, 3, ..., 16"                                                | Sets the MIDI channel.                                                                                                                                                                                                                                       |
| **Only for MIDI remotes:** MIDIIndex     | "1, 2, 3, ..., 128"                                               | Sets the MIDI index.                                                                                                                                                                                                                                         |
| **Only for MIDI remotes:** MIDIType      | "Note", "NoteAttack", "NoteAttackDecay", "Control"                | Sets the MIDI type. Note = MIDI note only NoteAttack = MIDI note and uses the velocity to regulate the master except note off NoteAttackDecay = MIDI note and uses the velocity to regulate the master with note off Control = Control change (CC) messages. |
| **Only for DC remotes:** DC start signal | "1, 2, 3, ..., 64"                                                | Sets the DC start signal.                                                                                                                                                                                                                                    |

The start signal and the MIDI offset of the desired input console for [DC Remotes](/grandma3/2-4/remote_inputs_dc/) and [MIDI Remotes](/grandma3/2-4/remote_inputs_midi/) have to be set in the [Output Configuration Menu](/grandma3/2-4/dmx_port_config/).

 Examples

- To set the key of the first DMX remote to Go+, type:

|                                                                    |                                                 |
| ------------------------------------------------------------------ | ----------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Set Remote 3.1 "Key" "Go+"  |

 

- To store a new MIDI remote, type:

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Remote 2.1  |

 

- To assign sequence 2 to the second DMX remote, type:

|                                                                    |                                                                 |
| ------------------------------------------------------------------ | --------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Assign Sequence 2 At Remote "DMXRemotes".2  |
