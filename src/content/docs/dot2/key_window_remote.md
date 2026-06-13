---
title: "Remote Inputs Configuration"
description: "The Remote Inputs Configuration Window is located in the Setup, column Show, Remote Inputs."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_window_remote.html"
scrapedAt: "2026-06-12T21:29:45.420Z"
---
The Remote Inputs Configuration Window is located in the [Setup](/dot2/key_window_setup/), column **Show**, **Remote Inputs**.

![](/img/dot2/dot2_viewsandwindows_remoteinputs01_1-2-601228.png)

_Figure 1: Remote Input Configuration Window_

In this window, you can set what the dot2 should do with the connected remote inputs.

On the left side of the screen are the three different remote inputs displayed:

- Analog
- MIDI
- DMX

The green tick displays, that this type of remote control is enabled.\
The red prohibition sign displays, that this type of remote control is disabled.\
To enable or disable a type of remote control, press the **Input Type** encoder.

The selected remote input has an orange bar on the left side of the cell.

If an input activity is receiving, it is displayed by a green indicator.

For all remote control inputs are the following four columns available:

**Type:**\
Displays the type of action what the console should do when the contact is activated.\
To select the type, press and hold the cell or select the cell and press the scroll encoder. The [Select Type Window](/dot2/key_window_selecttype/) opens.

**Page:**\
Displays the selected page.\
To change the page, press and hold the cell or select the cell and press the scroll encoder. The [Calculator](/dot2/key_view_calculator/) opens.

**Executor** (only if the selected type is executor)**:**\
Displays the assigned executor number from the selected page to the input.

**Hint:**\
To see the executor numbers in the executor bar, press and hold the ![ma](/img/dot2/ma-36da5c.png) key.

To select an executor, press and hold the cell or select the cell and press the scroll encoder. The [Calculator](/dot2/key_view_calculator/) opens.\
If you typed in an invalid executor number, the executor cell is displayed with a red background.

**Function** (only if the selected type is executor):\
Displays the assigned button or fader.\
To select a button or fader, press and hold the cell or select the cell and press the scroll encoder. The [Select Function Window](/dot2/key_window_selectbutton/) opens.

**CMD** (= command, only if the selected type is CMD):\
Displays the assigned command to the input.\
To type in a command, press and hold the cell or select the cell and press the scroll encoder. The virtual keyboard opens. Enter the command which should be executed.

---

## Analog

For using the analog remote you have to connect e.g. a light barrier or a push button, on the DC Remote Control at the back of the console.\
Refer to, [physical setup and layout](https://help.malighting.com/dot2/en/help/dot2_quick_start_guide/key_gsg_02_physicalsetupandlayout.html).

Additional to the four standard columns, the analog remote control has the Input column.

**Input:**\
Displays the input in from the connected DC Remote Control.\
The pin layout is displayed next to the connector on the back of the console.\
Pin 1 - 6 = Input 1,3,5,7,9,11 \
Pin 9 - 14 = Input 2,4,6,8,10,12\
There are twelve different inputs available to assign.\
This column is read only.

---

## MIDI

For using the MIDI remote, you have to connect a MIDI remote on the MIDI In connector at the back of the console.\
Refer to, [physical setup and layout](https://help.malighting.com/dot2/en/help/dot2_quick_start_guide/key_gsg_02_physicalsetupandlayout.html).

If you assigned in the column type an executor, and in the column button a fader, the velocity controls the fader level.

Additional to the four standard columns, the MIDI remote control has the Note column.

**Note:**\
Displays the available MIDI notes from 0 - 127.

---

## DMX

To use the DMX remote, connect a DMX remote either to the DMX In connector on the back of the console, or to one of the network protocols – Art-Net input and sACN input. \
Refer to [physical setup and layout](https://help.malighting.com/dot2/en/help/dot2_quick_start_guide/key_gsg_02_physicalsetupandlayout.html).

**Important:**\
Incoming DMX vlaues are displayed in the DMX view in universe 9. 

To trigger a button or command by DMX in, a DMX value between 128 and 255 is necessary.\
The green indicator is only visible if a DMX value above 0 is sent to trigger faders, or above 127 is sent to trigger buttons or commands.

Additional to the four standard columns, the DMX remote control has the DMX column.

**DMX:**\
Displays the DMX address. This column is read only.

---

## Encoder Bar Functions

![](/img/dot2/dot2_viewsandwindows_remoteinputs02_1-0-d73059.png)

_Figure 2: Encoder Bar Functions - Remote Inputs Configuration Window_

**Input Type:**\
To select a remote input type, turn the encoder left or right.\
To enable or disable a remote input type, press the encoder. The current status is displayed in brackets.

**Scroll:**\
To scroll up or down, turn the encoder left or right.\
To scroll left or right, press and turn the encoder left or right.\
To edit a selected cell, press the encoder. The respective window opens.

**Select**:\
To select more than one cell, press the ![ma](/img/dot2/ma-36da5c.png) key and turn the encoder up or down.\
A blue frame around the cells displays the selected cell.
