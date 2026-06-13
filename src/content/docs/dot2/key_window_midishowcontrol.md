---
title: "MIDI Show Control"
description: "To open the MIDI Show Control Window, press Setup and tap under column Show MIDI Show Control."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_window_midishowcontrol.html"
scrapedAt: "2026-06-12T21:29:44.595Z"
---
To open the **MIDI Show Control Window**, press Setup and tap under column Show MIDI Show Control.

![](/img/dot2/dot2_viewsandwindows_midishowcontrol01_1-1-3-a00329.png)_Figure 1: MIDI Show Control Window_

**Important:**\
If MIDI show control is used in a network, only the master console will send and receive MIDI show control commands.\
MIDI show control commands works also if the console is standalone.

**Important:**\
You should either send or receive MIDI show control commands. Send and receive MIDI show control commands, can create an infinite loop.

The MIDI Show Control (MSC) window you configure the MSC settings. The MSC settings of MIDI sender and receiver has to be the same that they can communicate.

**Hint:**\
To double-check the MSC In and Out messages, press Tools and tap at MIDI Monitor. For more information, refer to [MIDI Monitor](/dot2/key_window_midimonitor/).

If you tap in an edit line, the balloon displays what values are valid.

**Channel:**\
Displays the MIDI channel.\
To select a channel, tap at the plus or minus.

**Device ID:**\
Displays the device ID.\
To select a device ID, tap at the plus or minus.

**Group ID:**\
Displays the group ID.\
To select a group ID, tap at the plus or minus.

**Ethernet Port:**\
Displays the Ethernet port.\
To select a Ethernet port, tap at the plus or minus.

**Mode:**\
Displays the MSC Mode.\
By default, MSC Mode is disabled. To select a MSC mode, tap at the three dots ![](/img/dot2/dot2_viewsandwindows_addnewfixtureswindow01_1-0-b10b1a.png) in the edit line.\
The drop-down list opens. There are three MSC modes available:

- Disabled - MSC will not sent or received
- Ethernet - MSC will sent or received via the selected Ethernet port
- MIDI - MSC will sent or received via the MIDI connecter at the back of the console

**Exec:**\
Displays the executor MSC commands.\
By default, Main Only is selected. To select an executor, tap at the three dots ![](/img/dot2/dot2_viewsandwindows_addnewfixtureswindow01_1-0-b10b1a.png) in the edit line. \
The drop-down list opens. There are three executor available:

- Main Only - From or to the main executor.
- Exec.Page - From or to a specified executor on page 1. Separated by a dot (Hex = 2E).
- Exec Page - From or to a specified executor on page 1. Separated by a space (Hex = 20).

**Command Format:**\
Displays the command format. The command format is used to indicate the type of equipment that is intended to receive the MSC messages.\
By default, All is selected. To select a command format, tap at the three dots ![](/img/dot2/dot2_viewsandwindows_addnewfixtureswindow01_1-0-b10b1a.png) in the edit line. \
The drop-down list opens. There are three command formats available:

- Moving Light - Format is Hex = 02
- General Light - Format is Hex = 01
- All - Format is Hex = 7F

**Send to** (only MSC Out):\
Displays to who the MSC messages will be transmitted.\
By default, Send to All is selected. To select an other send option, tap at the three dots ![](/img/dot2/dot2_viewsandwindows_addnewfixtureswindow01_1-0-b10b1a.png) in the edit line. \
The drop-down list opens. There are three send options available:

- Group - Transmit the MSC messages to the selected MSC Out Group ID.
- Device - Transmit the MSC messages to the selected MSC Out Device ID.
- All - Transmit the MSC messages to the selected MSC Out Group ID and Device ID.

## Encoder Bar Functions

![](/img/dot2/dot2_viewsandwindows_dmxview01_1-0-2f3f05.png)_Figure 2: MIDI Show Control Window - Encoder Bar_

**Scroll:**\
To select an ID or scroll in the drop-down lists, turn the encoder left or right.
