---
title: "Connect LTC"
description: "The LTC connector can be used for timecode input or for timecode output, e.g., to send the timecode signal to the sound engineer."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/fs_connect_smpte_ltc.html"
scrapedAt: "2026-06-12T21:24:18.000Z"
---
The LTC connector can be used for timecode input or for timecode output, e.g., to send the timecode signal to the sound engineer.

The LTC port direction can be configured in the [Output Configuration](/grandma3/2-4/dmx_port_config/).

To synchronize the console with an SMPTE timecode source, connect an SMPTE source to the LTC port.

|                                            |                                                                                                                                  |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Information:**                                                                                                                 |
|                                            | The supported time formats are: - 24 fps - 25 fps - 30 fps If you send 29.97 or 30 drop frame, it will be interpreted as 30 fps. |

**Sound and timecode signal levels**

| Min. level  | Max. level | Recom. level |
| ----------- | ---------- | ------------ |
| -11 dBu     | +15 dBu    | 0 dBu        |
| 0.2 Veff    | 4.4 Veff   | 0.8 Veff     |

|                                            |                                                                                               |
| ------------------------------------------ | --------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Information:**                                                                              |
|                                            | The signal strength should be at least 200 mV. Pin 1: Ground Pin 2: - (minus) Pin 3: + (plus) |

-  Connect the SMPTE source to the LTC connector on the console's rear panel.

The SMPTE source is connected to the LTC connector.

![](/img/grandma3/2-4/img_gm3_full-size-crv_rear_white_ltc-4d0a2e.png)

_grandMA3 full-size (CRV) and light (CRV) rear panel – LTC_

![](/img/grandma3/2-4/img_gm3_compact-xt_rear_white_resize_ltc-854466.png)

_grandMA3 compact (XT) rear panel – LTC_

![](/img/grandma3/2-4/img_gm3_onpc-command-wing-xt_rear_white_ltc-c3eeda.png)

_grandMA3 onPC command wing (XT) rear panel – LTC_

![](/img/grandma3/2-4/img_gm3_io-node_rear_white_ltc-e4fdf4.png)

_grandMA3 _I/O Node_ rear panel – LTC_

![](/img/grandma3/2-4/img_gm3_io-node--20din-rail_rear_white_ltc-39ca42.png)

_grandMA3 _I/O Node DIN-Rail_ rear panel – LTC_

To view the pinout of the XLR and Euroblock connector, refer to the topic [Connector Pin Assignment](/grandma3/2-4/do_connector_pin_assignment/#XLR).
