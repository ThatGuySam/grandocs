---
title: "Connect DC Remote In"
description: "To use the DC Remote In with grandMA3 consoles, onPC command wings, and I/O Nodes, connect a contact closure switch, for example, a light barrier or a push butt"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/fs_connect_dc_remote_in.html"
scrapedAt: "2026-06-12T21:24:18.162Z"
---
To use the DC Remote In with grandMA3 consoles, onPC command wings, and I/O Nodes, connect a contact closure switch, for example, a light barrier or a push button.

For further information, see the topics [Remote keyword](/grandma3/2-4/keyword_remote/), [Remote In and Out](/grandma3/2-4/remote_inputs/), and [Output configuration](/grandma3/2-4/dmx_port_config/).

Up to 64 input channels can be used within a session.

|                                            |                                                                                                                                                                                                                          |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                |
|                                            | It is possible to move faders analog, for example, the Master Fader by using a grandMA3 console or I/O Node connected with a potentiometer (0 to +10V DC). The onPC products can be switched on and off but do not fade. |

- Generate a switch or connect an external source that provides up to +10V DC to pin 1 so the console can respond to analog input number 1.
- The recommended resistance is 5 kohms to 10 kohms.
- To use the DC Remote, feed a voltage signal (maximum +10V DC) into the corresponding input pin. For more information, see the pinout image below.

To connect a switch:

- Take +10V DC voltage in pin 5 for the grandMA3 console or I/O Node

-or-

- +5V DC voltage for grandMA3 onPC command wing and command wing XT

-or-

- Take an external voltage source (+10V DC in grandMA3 consoles or I/O Nodes, and +5V DC in grandMA3 onPC command wing and command wing XT), and connect its ground to the device's common ground pin.  Connect the +10V DC voltage source to one input pin 1-4 or 6-8 with a potential-free contact (switch, buzzer, motion detector, or any other switching device) in between.

Circuit examples:

- Potentiometer +10V DC in grandMA3 consoles or I/O Nodes

![](/img/grandma3/2-4/img_dc-remote_pot-10v-7e828b.png)

_Potentiometer +10V DC_

- Switch +10 DC in grandMA3 consoles or I/O Nodes

![](/img/grandma3/2-4/img_dc-remote_switch-10v-2ba1a9.png)

_Switch +10V DC_

- Switch +5V DC in grandMA3 onPC command wing and command wing XT

![](/img/grandma3/2-4/img_dc-remote_switch-5v-53f0ad.png)

_Switch +5V DC_
