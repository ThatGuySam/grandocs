---
title: "QLab"
description: "QLab is sound, video, and lighting control for macOS by qlab.app."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/osc_qlab.html"
scrapedAt: "2026-06-15T18:25:37.784Z"
pagefind: false
---
QLab is sound, video, and lighting control for macOS by [qlab.app](https://qlab.app/).

QLab is fairly simple to use with OSC. The QLab network settings are shown below.

To configure the network:

1. Click ![](/img/grandma3/2-3/icon_gear_15_v1-0-f220ce.png) in the bottom right corner of the window. The workspace settings pop-up opens.

2. Click Network. The network setting opens:

   ![Update this description text.](/img/grandma3/2-3/img_qlab_network-5c8017.png)

   QLab - Network Settings

3. Set a Name, for example, **gma3**.

4. Select the Type, **grandMA3**.

5. Select the Network protocol.

6. Select the Interface. The network interface on your computer connected to the grandMA3 system.

7. Select the Destination.

   1. The IP address of the grandMA3 system.
   2. The Port should be the same as set in the OSC menu of the grandMA3 system. The default is **8000**.

8. The Passcode should be emtpy.

9. Click Done. The network is configured.

|                                            |                                                                                                                                                                   |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                         |
|                                            | Make sure you use the same IP range for communication between grandMA3 and Qlab. For more information, see [Interfaces and IP](/grandma3/2-3/network_interface/). |

---

Example 1

To configure a cue to trigger the grandMA3 system:

1. Click the Network icon. A new cue is generated.
2. Click the newly generated cue. The cue settings opens.
3. Click the Settings-tab. The settings mask opens.
4. Set the Patch to the configured network configuration, in our case it is **gma3**.
5. Set the Category to **Command line control**.
6. Set Use Prefix to **Yes**.
7. Set a Prefix, such as, **gma3**.
8. Set a Command, such as, **Go Sequence 2**
9. Click Send. The command is sent.

![Update this description text.](/img/grandma3/2-3/img_qlab_cue-75bc28.png)

QLab - Cue Settings
