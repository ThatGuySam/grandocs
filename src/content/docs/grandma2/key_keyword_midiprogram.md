---
title: "MidiProgram"
description: "To get the MidiProgram keyword in the command line, type MidiProgramn the command line or the shortcut MidiP."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_midiprogram.html"
scrapedAt: "2026-06-12T21:27:56.302Z"
---
To get the MidiProgram keyword in the command line, type **MidiProgram** in the command line or the shortcut **MidiP**.

## Description

The MidiProgram keyword is a function keyword to transmit MIDI program change messages via the MidiOut port.

If no MIDI channel is given, the MIDI channel of the MIDI Show Control in the Setup is used.

## Syntax

**MidiProgram** \[program]

**MidiProgram** \[midichannel].\[program]

## Examples

- To transmit a program change of 12.

\[Channel]> MidiProgram 12
