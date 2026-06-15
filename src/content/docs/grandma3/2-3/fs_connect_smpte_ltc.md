---
title: "Connect LTC"
description: "The LTC connector can be used for timecode input or for timecode output, e.g. to send the timecode signal to the sound engineer."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/fs_connect_smpte_ltc.html"
scrapedAt: "2026-06-15T18:24:53.488Z"
pagefind: false
---
The LTC connector can be used for timecode input or for timecode output, e.g. to send the timecode signal to the sound engineer.

The LTC port direction can be configured in the [Output Configuration](/grandma3/2-3/dmx_port_config/).

To synchronize the console with an SMPTE timecode source, connect an SMPTE source to the LTC port.

|                                            |                                                                                                                                  |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Information:**                                                                                                                 |
|                                            | The supported time formats are: - 24 fps - 25 fps - 30 fps If you send 29.97 or 30 drop frame, it will be interpreted as 30 fps. |

**Sound and timecode signal levels**

| Min. level  | Max. level | Recom. level |
| ----------- | ---------- | ------------ |
| -11 dBu     | +15 dBu    | 0 dBu        |
| 0.2 Veff    | 4.4 Veff   | 0.8 Veff     |

|                                            |                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Information:**                                                                                  |
|                                            | The signal strength should be a minimum of 200 mV. Pin 1: Ground Pin 2: - (minus) Pin 3: + (plus) |

-  Connect the SMPTE source to the LTC connector on the rear panel of the console.

The SMPTE source is connected to the LTC connector.

![](/img/grandma3/2-3/img_gm3_full-size-crv_rear_white_ltc-3142ea.png)

_grandMA3 full-size (CRV) and light (CRV) rear panel – LTC_

![](/img/grandma3/2-3/img_gm3_compact-xt_rear_white_resize_ltc-3eeebb.png)

_grandMA3 compact (XT) rear panel – LTC_

![](/img/grandma3/2-3/img_gm3_onpc-command-wing-xt_rear_white_ltc-b4ffc4.png)

_grandMA3 onPC command wing (XT) rear panel – LTC_

![](/img/grandma3/2-3/img_gm3_io-node_rear_white_ltc-b76a79.png)

_grandMA3 _I/O Node_ rear panel – LTC_

![](/img/grandma3/2-3/img_gm3_io-node--20din-rail_rear_white_ltc-72fca4.png)

_grandMA3 _I/O Node DIN-Rail_ rear panel – LTC_

To view the pinout of the XLR and Euroblock connector, refer to the topic [Connector Pin Assignment](/grandma3/2-3/do_connector_pin_assignment/#XLR).
