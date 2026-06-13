---
title: "Change hostname"
description: "You can change the name of the MA Network Switch."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_hostname.html"
scrapedAt: "2026-06-12T21:28:27.219Z"
---
You can change the name of the MA Network Switch.\
The name is displayed at the front end display and in the title bar of the web interface.

The maximum length of the name are 12 characters.\
The following characters are allowed.

- Upper case letters A...Z
- Lower case letters a...z
- Numbers 0...9
- Spaces, minus (-), plus (+), underscore (\_)

**Requirement:** [Added MA Network Switch in the network configuration](/grandma2/key_control_ma_switch_add/).

1.  Open the MA Network Configuration.\
   \- Press Setup, and tap under **Network** MA Network Configuration.\
   The MA Network Configuration window opens.
2. Tap at Network Switch.

   ![](/img/grandma2/menu_ma-network-configuration_network-switch_v3_2-2dcf6e.png)

   _MA Network Configuration - Network Switch_
3. Tap and hold the cell in the column hostname or tap in the cell and press the screen encoder until the **Edit Hostname pop-up** opens.
4. Enter the new name, e.g. Stage Left. Tap at the **plus **![](/img/grandma2/icon_plus_small_v3-2-ae05d9.png) to open the virtual keyboard.
5. Press Please.

The new name is applied and saved in the startup configuration.

The front end display of the MA Network Switch displays the new name.

**Hint:**\
You can change the hostname by using the command line.\
\- Change the destination of the command line to NetConfig/Network Switch 8. For more information see [ChangeDest keyword](/grandma2/key_keyword_changedest/).\
\- Type in the command line Assign 1 / Hostname = "Stage Left".\
The hostname of the NetworkSwitch 1 is changed.
