---
title: "Connect DC Remote In"
description: "To use the DC Remote In with grandMA3 consoles, onPC command wings, and I/O Nodes connect a contact closure switch, for example, a light barrier or a push butto"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/fs_connect_dc_remote_in.html"
scrapedAt: "2026-06-15T18:24:53.633Z"
pagefind: false
---
To use the DC Remote In with grandMA3 consoles, onPC command wings, and I/O Nodes connect a contact closure switch, for example, a light barrier or a push button.

For further information, see the topics [Remote keyword](/grandma3/2-3/keyword_remote/), [Remote In and Out](/grandma3/2-3/remote_inputs/), and [Output configuration](/grandma3/2-3/dmx_port_config/).

Up to 64 input channels can be used within a session.

|                                            |                                                                                                                                                                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                            |
|                                            | It is possible to move faders analog, for example, the Master Fader by using a grandMA3 console or I/O Node connected with a potentiometer (0 to +10V DC). The onPC products can switch on and off, but do not fade. |

- Generate a switch or connect an external source that sends up to +10V DC to pin 1 for the console to react to analog input number 1.
- The recommended resistance is 5 kohms to 10 kohms.
- To use the DC Remote, feed a voltage signal (maximum +10V DC) into the corresponding input pin. For more information see the pinout image below.

To connect a switch:

- Take +10V DC voltage in pin 5 for the grandMA3 console or I/O Node

-or-

- +5V DC voltage for grandMA3 onPC command wing and command wing XT

-or-

- Take an external voltage source (+10V DC in grandMA3 consoles or I/O Nodes and +5V DC in grandMA3 onPC command wing and command wing XT), connect its ground to the common ground pin of the device.  Connect the +10V DC voltage source to one input pin 1-4 or 6-8 with a potential-free contact (switch, buzzer, motion detector, or any other switching device) in between.

Circuit examples:

- Potentiometer +10V DC in grandMA3 consoles or I/O Nodes

![](/img/grandma3/2-3/img_dc-remote_pot-10v-a3036f.png)

_Potentiometer +10V DC_

- Switch +10 DC in grandMA3 consoles or I/O Nodes

![](/img/grandma3/2-3/img_dc-remote_switch-10v-6ab7da.png)

_Switch +10V DC_

- Switch +5V DC in grandMA3 onPC command wing and command wing XT

![](/img/grandma3/2-3/img_dc-remote_switch-5v-8e407f.png)

_Switch +5V DC_
