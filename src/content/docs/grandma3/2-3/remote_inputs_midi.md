---
title: "MIDI Remotes"
description: "MIDI stands for Musical Instrument Digital Interface. MIDI is used as a world-wide standard protocol that allows communication between different digital devices"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/remote_inputs_midi.html"
scrapedAt: "2026-06-15T18:25:37.499Z"
pagefind: false
---
MIDI stands for **M**usical **I**nstrument **D**igital **I**nterface. MIDI is used as a world-wide standard protocol that allows communication between different digital devices, for example:

- a MIDI keyboard and a grandMA3 command wing.
- a MIDI pad controller and a grandMA3 console.
- a grandMA3 console and an audio mixing console.

The MIDI Remotes tab is used to define actions for incoming MIDI notes or MIDI Control Changes (CC).

|                                                    |                                          |
| -------------------------------------------------- | ---------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                         |
|                                                    | MIDI does not transmit an audio signal.  |

To learn more about the hardware part of the input, read the [Connect MIDI topic](/grandma3/2-3/fs_connect_midi/).

This topic is divided into several chapters:

- [Output Configuration Window](/grandma3/2-3/remote_inputs_midi/#h2__2027674017)
- [In & Out Menu](/grandma3/2-3/remote_inputs_midi/#h2__1279301565)
- [Examples](/grandma3/2-3/remote_inputs_midi/#h2__1406500097)
- [Control an External MIDI Device](/grandma3/2-3/remote_inputs_midi/#h3__1959648189)
- [Receive MIDI](/grandma3/2-3/remote_inputs_midi/#h3__2047067536)
- [Send MIDI](/grandma3/2-3/remote_inputs_midi/#h3_1633374073)
- [MIDI Connection via USB](/grandma3/2-3/remote_inputs_midi/#h3_583608197)



---

## Output Configuration Window

Adjusting the MIDI Offset will shift the MIDI Index in general.

The MIDI Offset can be adjusted in the Output Configuration window as followed:

1. To set the MIDI Offset, open the [Output Configuration](/grandma3/2-3/dmx_port_config/) menu.
2. Open the product in the Output Configuration category tree using the arrows ( ![](/img/grandma3/2-3/triangle-right-38abb5.png)).

![](/img/grandma3/2-3/window_output_configuration_midi_in_v2-1-67f74c.png)

Output Configuration menu

3. To set the MIDI Offset to a new value, for example -2, right-click or tap and hold MIDI Offset in the product row. A pop-up opens:

![](/img/grandma3/2-3/popup_midi_offset_v1-8_1-9e8096.png)

MIDI Offset pop-up

4. The MIDI Offset is adjusted. For example, MIDI Index 50 is changed to 48, after MIDI Offset is set to -2 as shown below:

![](/img/grandma3/2-3/window_system_monitor_offset_v1-9-3-727fe0.png)

MIDI Offset changes the MIDI Index (note) shown in the System Monitor.

|                                            |                                                                                                                         |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                               |
|                                            | If the data input is disabled, a text in the System Monitor next to the actual MIDI Note will inform the user about it. |
