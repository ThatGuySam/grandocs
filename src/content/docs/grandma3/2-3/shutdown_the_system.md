---
title: "Shut Down the System"
description: "Before shutting down the system, save the show file via the Backup menu."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/shutdown_the_system.html"
scrapedAt: "2026-06-15T18:24:53.912Z"
pagefind: false
---
Before shutting down the system, save the show file via the [Backup menu](/grandma3/2-3/show_file_management/).

To start the shutdown procedure, use one of the following options:

### Use the Software User Interface

- Tap the ![](/img/grandma3/2-3/icon_power_15_v1-9-9d4090.png) icon at the top of the control bar.

[![](/img/grandma3/2-3/robot-icon_white-274940.png)       Paste to Command Line](#ma_cmd?Menu%20%27ShutdownMenuOverlay%27%0A)

The shutdown menu opens:

![Shutdown Menu buttons are shown](/img/grandma3/2-3/menu_shut-down_v2-0-4f0312.png)

Shutdown Menu - Buttons

- To shut down, tap the ![](/img/grandma3/2-3/icon_power_15_v1-9-9d4090.png) icon.
- To reboot,  tap the Reboot ![](/img/grandma3/2-3/icon_refresh_arrow_15_v1_5-6d6abc.png) icon. This button is only available on consoles.
- To restart, tap the Restart ![](/img/grandma3/2-3/icon_refresh_arrow_15_v1_5-6d6abc.png) icon.
- To lock the desk, tap the ![](/img/grandma3/2-3/icon_padlock_15_v1-0-f67852.png) icon. For more information, see [desk lock](/grandma3/2-3/ws_ui_desk_lock/).

### Use the Power Key

- Press the [power key](/grandma3/2-3/key_power/) on the front panel.

### Use a Keyword

- [Reboot keyword](/grandma3/2-3/keyword_reboot/)
- [Restart keyword](/grandma3/2-3/keyword_restart/)
- [ShutDown keyword](/grandma3/2-3/keyword_shutdown/)

### Shutdown Warning Pop-Up

One of the following warning pop-ups appears:

![](/img/grandma3/2-3/popup_shut-down_2_v1-9-a896b8.png)

![](/img/grandma3/2-3/popup_shut-down_v1-9-46b6a8.png)

- Tap OK.

The grandMA3 device shuts down.

|                                            |                                                                                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                 |
|                                            | When using the [ShutDown keyword](/grandma3/2-3/keyword_shutdown/), you can choose an option without a shutdown pop-up or without timer.  |

|                                            |                                                                                                                                                                            |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                  |
|                                            | If an attempt is made to shut down before saving the show file, a save show file pop-up will appear. For more information, see [Save Show File](/grandma3/2-3/sfh_save/).  |

- To shut down the current station without confirmation, type:

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ShutDown /NoConfirmation |

- To shut down the current station without timer, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>ShutDown /NoAutoClose |
