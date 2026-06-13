---
title: "MidiNote"
description: "To use to the MidiNote keyword, type MidiNote or the shortcut Mnn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_midinote.html"
scrapedAt: "2026-06-12T21:27:56.262Z"
---
To use to the MidiNote keyword, type **MidiNote** or the shortcut **Mn** in the command line.

## Description

With the MidiNote command, you send MIDI Note messages via the Midi Out port at the back of the console. For more information, see [Device Overview](/grandma2/key_device_overview/).

If a MIDI channel is entered in the command, the entered MIDI channel will be used.\
If no MIDI channel is entered, the MIDI channel in the **Setup -> Midi Show Control** is used.

If a velocity is entered in the command, the entered velocity will be used.\
If no velocity is entered, a velocity full (127) will be used.

If the Off command is used, a MidiNote Off is sent.

For more information on the configuration of MIDI Remotes see [Remote Inputs Setup](/grandma2/key_remote_control_input/). 

 

## Syntax

**MidiNote** \[note]

**MidiNote** \[midichannel] . \[note]

**MidiNote** \[note] \[velocity]

**MidiNote** \[midichannel] . \[note] \[velocity]

**MidiNote** \[note] **Off**

**MidiNote** \[midichannel] . \[note] **Off**

**MidiNote** \[note] \[velocity] **Off**

**MidiNote** \[midichannel] . \[note] \[velocity] **Off**

## Example

Let´s assume, you will send a MIDI note on a specific cue to trigger a sound station.

**Requirements:**

- Connected sound station device e.g. computer on the MIDI Out connector.
- Stored cue in a sequence on an executor.

Open the sequence executor sheet and type in the CMD (= command) column the following syntax: MidiNote 12

![](/img/grandma2/window_sequence-sheet-midi-cmd_v3-2-900e04.png)

_Sequence Sheet with MidiNote command_

 

The MIDI note will be send if the cue is executed and will trigger the connected sound station.
