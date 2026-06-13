---
title: "MidiControl"
description: "To get the MidiControl keyword in the command line, type MidiControln the command line or the shortcut MidiC."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_midicontrol.html"
scrapedAt: "2026-06-12T21:27:56.143Z"
---
To get the MidiControl keyword in the command line, type **MidiControl** in the command line or the shortcut **MidiC**.

## Description

The MidiControl keyword is a function keyword to transmit MIDI control change messages via the MidiOut port.

If no MIDI channel is given, the MIDI channel of the MIDI Show Control in the Setup is used.

## Syntax

**MidiControl** \[controller] \[value]

**MidiControl** \[midichannel].\[controller] \[value]

## Example

- To transmit a value of 64 for controller 1, type in the command line:

\[Channel]> MidiControl 1 64
