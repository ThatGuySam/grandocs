---
title: "Transmit DMX Using Art-Net"
description: "This is a short example of setting up DMX transmission using Art-Net. Learn more about the Art-Net menu in the Art-Net Menu topic."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/dmx_ethernet_artnet_transmit.html"
scrapedAt: "2026-06-12T21:24:46.194Z"
---
This is a short example of setting up DMX transmission using Art-Net. Learn more about the Art-Net menu in the [Art-Net Menu topic](/grandma3/2-4/dmx_ethernet_artnet/).

The idea in this example is that some lights are patched in universes one to five. The fixtures are connected to Art-Net nodes, and the nodes need to get the Art-Net data from the grandMA3. There is also a media server that uses a single universe. It is patched in universe 21 and needs to receive Art-Net universe 21 (hex number 1:5).

The Art-Net nodes are set up to receive from Art-Net universe 11 (hex number 0:B), so the grandMA3 universe one needs to be sent to this Art-Net universe. The media server is a specific device with a defined Art-Net IP address, and this data can be sent using unicast. In this example, the media server IP address is set to 10.10.10.51.

The example assumes a patched setup that matches the universes. This is not actually needed for demonstration purposes. If the grandMA3 onPC is used to try this example, there might not be enough parameters to allow actual output.

These are the steps needed:

1. Open the Art-Net menu by pressing Menu and then tap DMX Protocols. Make sure the Art-Net menu is visible by tapping Art-Net.

2. The first line is going to be universe one to five. Edit the following cells to match these options:

   1. Enabled = Yes
   2. Mode = Auto
   3. Local Universe = 1
   4. Amount = 5
   5. Art-Net Absolute = 11

3. A second line is needed for the universe that needs to go to a specific destination. Tap New Art-Net-Data below line 1.

4. Tap Insert new Art-Net-Data in the button menu at the bottom of the screen.

5. Now, the line exists. Edit the new line to match these options:

   1. Enabled = Yes
   2. Mode = Unicast
   3. Destination IP = 10.10.10.51
   4. Local Universe = 21
   5. Amount = 1
   6. Art-Net Absolute = 21 (notice that this automatically calculates the correct Art-Net Sub-Net and Universe number)

6. Finally, tap the Enable Output until it is On to activate the transmission of DMX data via Art-Net

That was it. It should look something like this:

![](/img/grandma3/2-4/menu_dmx-protocols_artnet-example_v2-4-57111f.png)

Final Art-Net example setup

If the station is not connected to other stations or nodes in a session, it is **Idle Master**. If the station needs to output Art-Net in a setup like this, the **Send Art-Net if Idle Master** setting needs to be turned On. If the station is in a session with other stations, then it is the **Global Master** in the session that transmits the Art-Net data.

The menu can be closed by tapping the cross (![](/img/grandma3/2-4/icon_cross_15px-9b559c.png)) in the upper right corner.
