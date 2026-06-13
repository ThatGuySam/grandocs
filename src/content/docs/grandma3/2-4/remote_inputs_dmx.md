---
title: "DMX Remotes"
description: "The DMX Remotes tab uses DMX channels as remote triggers. The DMX source can also be the console itself."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/remote_inputs_dmx.html"
scrapedAt: "2026-06-12T21:25:09.159Z"
---
The **DMX Remotes** tab uses DMX channels as remote triggers. The DMX source can also be the console itself.

- To learn more about the hardware part of the input, read the [Connect DMX topic](/grandma3/2-4/fs_connect_dmx/).
- To learn more about the general Remote settings, see [Remote In and Out](/grandma3/2-4/remote_inputs/).

The following parameters are used in the DMX Remotes configuration:

- Address: Sets the DMX Address.
- Resolution: Sets the DMX Resolution.
- Trigger On Session Change: If set to **Yes**, the target is triggered every time the DMX calculation of the session changes.\
  This includes, for example, the startup of a console or adding a processing unit to the session. This is valid as long as the DMX address is within the range of values between Trigger On and Trigger Off. This means if Trigger On is set to **0**, the target is triggered even if there is no external DMX signal. If Trigger On Session Change is disabled, a change in the DMX calculation will not trigger the target.

|                                            |                                                                                                                                                                                                                               |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                     |
|                                            | Trigger On Session Change is set to **Yes** in the show files that were saved in version 2.3 or prior. This matches the behavior in these versions. In the new show files, Trigger On Sesssion Change is disabled by default. |

---

## Example

1. To adjust the settings of the DMX Remotes, tap DMX Remotes. The DMX Remotes menu opens:

2) To set the DMX address the DMX Remote input should listen to, right-click or tap and hold Address.

![](/img/grandma3/2-4/popup_dmx_remote_edit_address_v1-9-c9a058.png)

DMX address pop-up

3. To adjust the DMX resolution, open the Resolution cell of the DMX Remote entry you want to edit.

![](/img/grandma3/2-4/window_analog_remote_9_v1-5-22c8de.png)

DMX resolution pop-up

|                                            |                                                                                                          |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                |
|                                            | The DMX Remote can be controlled by 16 bit or 24 bit DMX channels. This allows for more precise control. |

|                                            |                                                                                                                 |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                       |
|                                            | On the controlling DMX device, the 16 bit and 24 bit channels must be patched directly after the 8 bit channel. |
