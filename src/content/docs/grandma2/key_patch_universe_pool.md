---
title: "Universe pool"
description: "The Universe pool displays all the 256 universes that the system can handle."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_patch_universe_pool.html"
scrapedAt: "2026-06-12T21:28:09.745Z"
---
The Universe pool displays all the 256 universes that the system can handle.

You can create a Universe pool on your screens using the **Create Basic Window** pop-up. It is described in the [Manages windows topic](/grandma2/key_windows/).

It is a pool. To learn general thing about the pools please read the [Pools in General section](/grandma2/key_pools/).

Each universe with something patched is displayed as a pool object.

The Universe pool could look like this (Pool Mode):

![](/img/grandma2/window_universe-pool_v3-3-6551ef.png)

_Universe pool - pool style_

If you change the pool to be displayed in sheet style (in the pool options) it could look like this:

![](/img/grandma2/window_universe-pool_sheet_v3-3-3bfa3b.png)

_Universe pool - sheet style_

Each pool object (universe) has some icons and indicators displaying different properties of the universe. They correlate to the columns displayed in the sheet style.

Many off the options related to the DMX universe is explained in the [DMX List part of the DMX and Parameter lists topic](/grandma2/key_patch_dmx_parameter_list/#dmx_list).

- **No.:**\
  This is the universe number.
- **Name:**\
  This is the universe name.
- **DMX In Merge:**\
  Here you can select how any incoming DMX is merged into the universe. If incoming DMX is merged as HTP then there is a white "H" in the pool button. If it is LoTP then there is a white "L". If DMX is not merged then there is no white character.\
  This is explained in more details the [DMX List](/grandma2/key_patch_dmx_parameter_list/#dmx_list).
- **RDM:**\
  Here you can turn on or off the RDM functionality in the universe. If RDM is tuned on then there is a "RDM" icon on the pool button. The icon is red if RDM is not on in global settings. It is green if RDM is globally on.\
  For more details about this please read the [Turn RDM on per universe part of Turn RDM on topic](/grandma2/key_rdm_turn_on/#rdm_on_universe).
- **RDM Devices:**\
  Here you can see the amount of RDM fixtures found in the universe.\
  For more details about the RDM feature please read the [RDM section](/grandma2/key_rdm/).
- **Requested:**\
  Here you can request or un-request the control/calculation of the universe. If the universe is not requested then there is red "R" in the pool button.\
  This is explained in more details the [DMX List](/grandma2/key_patch_dmx_parameter_list/#dmx_list).
- **Granted:**\
  Here you can see if the universe is granted by the system. If the universe is requested but not granted (lack of parameters) then there is red "G" in the pool button.\
  This is explained in more details the [DMX List](/grandma2/key_patch_dmx_parameter_list/#dmx_list).
- **Info:**\
  This is where you can see or edit the information attached to the universe. If there is any information attached to the universe then there is the ![](/img/grandma2/icon_information_v3-2-4f9ee6.png) icon in the pool button.
- **Sync:**\
  The sync is displayed as a green square. this square is flashing bright green when the DMX data is updated. If none of the DMX channels change value then the sync flash approximately once every second. If the data is constantly changing, then it flashes approximately 30 times a second - this looks like it is constantly bright green.
- **Parked:**\
  If there is something parked in the universe then there is a light blue "P" on the pool button. This is also indicated by the "P" in the column.\
  Read more about the park function in the [Park Keyword topic](/grandma2/key_keyword_park/).
- **DMX Tester:**\
  When there are DMX channels affected by the DMX tester then there is an ![](/img/grandma2/icon_warning_v3-3-41491f.png) icon in the pool button and a "!" in the column.\
  Read more details about the DMX tester function in the [DMX testing topic](/grandma2/key_patch_dmx_testing/).
