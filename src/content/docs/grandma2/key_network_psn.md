---
title: "PosiStageNet (PSN)"
description: "PosiStageNet or PSN is a open protocol developed by MA Lighting and VYV Corporation - http://www.posistage.net/."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_network_psn.html"
scrapedAt: "2026-06-12T21:28:08.689Z"
---
PosiStageNet or PSN is a open protocol developed by MA Lighting and VYV Corporation - http\://www\.posistage.net/.

**Restriction:**\
grandMA2 supports PSN version 2.0

It uses a PSN server that transmit position information from different trackers connected to the server.

grandMA2 can connect to the server, as a client, and receive the position information from each tracker.

Usually you then connect the tracker information to a patched StageMarker. The StageMarker will then move around based on the incoming position data.

You can then tell the XYZ enabled fixtures to point their light at the moving StageMarker.

**Hint:**\
It is possible to patch up to 1024 StageMarkers.

## Connect to a PSN server

To add a PSN server you need to open PSN Network Configuration in Setup.

Tap the Add button at the bottom of the window. Then you get a row in the table in the window above.

The line needs to be enabled. Edit the **Enabled** cell in the configuration row until it says "Yes". Then you should get an IP address in the **IP** column - this is the IP address of the server. The **Name** will also change to name of the server. If the connection is good, then the name will also get a green background color.

The **World** column displays the PSN world the server is in. It is just for information. It is a setting in the server and is not used by the grandMA2.

It is possible to change the **Port** and PSN **Multicast** address if the server does not follow the standard port and multicast address.

If you want to use the PSN data, then you also need to turn on the general PSN function. This is the big Enabled button in the upper right side of the view.

When a valid PSN server is present, then the view could look like this:

![](/img/grandma2/menu_psn-network-configuration_v3-2-8def89.png)

_PSN Network Configuration with valid server connection_

 

## Connect tracker to a StageMarker

If you want to view the incoming tracking information, then tap the View Tracker button in the bottom of the screen.

This opens the **View Tracker window**. If you do not have a connection to a PSN server then this window is empty.

If you have a server, then a table with the information from the server is visible.

There are two things that can be edited in this view:

A **Fixture ID** can be attached to the tracker. Type the Fixture ID of the StageMarker you want to be moved by the tracker.

The **Predict** value can be changed. This will make the console try to predict the position of the tracker. The number type here is the number of seconds in the future the console should try to predict, based on the current speed and direction.

If this is left at "0.00" then it is up to the server to do the calculation and prediction.

It could look like this:

![](/img/grandma2/menu_psn-network-configuration_view-tracker_v3-2-f1b440.png)

_View Tracker - PSN information from server with attached Fixture ID_

 

In this example, the tracker with PSN ID number 0 is attached to the Fixture ID 4001 (a StageMarker). The current position and rotation is 0 meters and 0 degrees in all three planes.

When the tracker starts to move then the information will update and the StageMarker will move accordingly.

The 3D Text button in the picture above should just be ignored - it does not do anything and is not implemented.
