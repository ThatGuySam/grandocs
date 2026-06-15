---
title: "Open Stage Control"
description: "Open Stage Control is a free program used to build a simple OSC interface. When first opening the program, the network configuration settings pop up. Besides te"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/osc_open_stage_control.html"
scrapedAt: "2026-06-15T18:25:37.817Z"
pagefind: false
---
[Open Stage Control](https://openstagecontrol.ammd.net/) is a free program used to build a simple OSC interface. When first opening the program, the network configuration settings pop up. Besides telling it which network interface to use on the computer, the only thing to fill in here is the port:

![](/img/grandma3/2-3/img_openstagecontrol_1_v1-5-b45ac6.png)

This needs to match the port that has been set in the corresponding OSCData line in the console. Port 8000 is the default. Afterwards, the Open Stage Control session can be started.

 

### Fader

This example will control the fader for Executor 230 on Page 1:

![](/img/grandma3/2-3/img_openstagecontrol_2_v1-5-9ecde9.png)

 

Notes:

- Assumes the OSCData line on the console has a prefix of "gma3" configured. If the prefix is empty, this would just be /Page1/Fader230.

- Assumes the "Page" and "Fader" cells on the OSCData line in the console are set to "Page" and "Fader" respectively (this is the default).

- All of the settings in the picture above are at their defaults except for:

  - fader settings: range: change the 'max' to 100 instead of 1
  - osc settings: address

### Executor button

This example will press the button for Executor 229 on Page 1:

![](/img/grandma3/2-3/img_openstagecontrol_3_v1-5-50fd49.png)

 

Notes:

- Assumes the OSCData line on the console has a prefix of "gma3" configured. If the prefix is empty, this would just be /Page1/Key229.
- Assumes the "Page" and "Key" cells in the OSCData line on the console are set to "Page" and "Key" respectively (this is the default).
- All of the settings in the picture above are at their defaults except for the address in the osc settings.
- Open Stage Control buttons default to functioning as 'toggle' - you may wish to change this to 'tap'.

### Command Line Syntax

Here we have a button that will execute command line syntax on the console, in this case triggering the Selected Sequence:

![](/img/grandma3/2-3/img_openstagecontrol_4_v1-5-04a806.png)

Notes:

- Assumes the OSCData line on the console has a prefix of "gma3" configured. If the prefix is empty, this would just be /cmd.

- Requires Receive Command to be enabled for that OSCData line on the console.

- All of the settings in the picture above are at their defaults except for:

  - button mode set to "momentary"
  - address
  - preArgs - this is where you enter the syntax string you wish to execute
