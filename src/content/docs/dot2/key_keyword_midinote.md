---
title: "MidiNote"
description: "This page describes the syntax and how to use thMidiNoteommand."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_midinote.html"
scrapedAt: "2026-06-12T21:29:49.774Z"
---
This page describes the syntax and how to use the **MidiNote** command.

To use the MidiNote command, type **MidiNote** or the short cut **Mn** in the [command line](/dot2/key_widget_commandlineinput/).

## Description

With the MidiNote command, you send MIDI Note messages via the Midi Out port at the back of the console.

If a MIDI channel is entered in the command, the entered MIDI channel will be used.\
If no MIDI channel is entered, the MIDI out channel in the [MIDI Show Control window](/dot2/key_window_midishowcontrol/) is used.

If a velocity is entered in the command, the entered velocity will be used.\
If no velocity is entered, velocity 127 (full) will be used.

If the dot2 is in a session, the MIDI Notes messages will be send only on the session master to avoid double traffic.

If the Off command is used, a MidiNote Off is sent.

**Hint:**\
To double-check the sent MIDI Notes, press Tools and tap under column MIDI at in the MIDI Monitor. For more information, see [MIDI Monitor](/dot2/key_window_midimonitor/).

## Syntax

1\. Send MIDI Note with the selected MIDI channel from the [MIDI Show Control window](/dot2/key_window_midishowcontrol/) and full velocity (127).

MidiNote 12

2\. Send MIDI Note with defined MIDI channel and full velocity (127).

MidiNote 1.12

3\. Send MIDI Note with the selected MIDI channel from the [MIDI Show Control window](/dot2/key_window_midishowcontrol/) and a velocity of 60.

MidiNote 12 60

4\. Send a MIDINote Off.

MidiNote 14 Off

## Example

Let´s assume, you will send a MIDI note on a specific cue to trigger a sound station.

**Requirements:**

- Connected sound station device e.g. computer on the MIDI Out connector.
- Stored cue on an executor.

Open the [cues view](/dot2/key_viewitem_cue/) and type in the CMD (= command) column the following syntax: MidiNote 12

![](/img/dot2/dot2_commands_midinote01_1-1-3-2445ec.png)_Figure 1: Cues View with MIDI Notes in the CMD column_

The MIDI note will be send if the cue is executed and will trigger the connected sound station.
