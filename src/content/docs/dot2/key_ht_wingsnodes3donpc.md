---
title: "Connect nodes, wings, 3D and onPC"
description: "There are several things you can connect together. Everything is connected on an Ethernet network infrastructure. This means that you need to connect all device"
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_ht_wingsnodes3donpc.html"
scrapedAt: "2026-06-12T21:29:37.185Z"
---
There are several things you can connect together. Everything is connected on an Ethernet network infrastructure. This means that you need to connect all devices using Ethernet cables (of Cat.5E quality or higher) to a switch that has a bandwidth of a minimum of 100 Mbit/s and the switch needs to be able to handle multicast. All devices in the network use IPv6 to talk to each other – so the switch needs to be able to handle this as well. 

If you do not know what IPv6 is and you have trouble with the connections, please read the [What is IPv6 help page](/dot2/key_wa_ipv6/).

If you have any doubt about what switch to use, please contact your local distributor. They will help you to select an appropriate switch. 

## dot2 Wings

You can connect wings to your dot2 console or to dot2 onPC. The wings are assigned to a specific device. If this device is lost on the network then the wing loses its functionality and waits to be assigned to a different device.

There are two types of wings: the dot2 Fader wing (F-wing) and the dot2 Button wing (B-wing). Each provides more physical executors and an extra screen.

Since the wings are connected directly to a specific device you will need to open the setup menu on the device you want to connect a wing to. In the Setup menu you will find a button called dot2 Wings, tap this.

Then the [Wings view](/dot2/key_window_wings/) opens. Here you can tap one of the free slots (yellow bar on the left side) of the same type as your wing. There are only five slots for each device. Depending on your devices you might only have few free slots. Slots that are occupied by the console have a red bar on the left side – they are called "fixed, internally". Slots that are currently occupied by an external wing will have a green bar on the left side.

If you tap a free slot, you will see the wings that are available in your network. If you do not see any wings here, then you need to check your network and the connections. Also, make sure everything is powered on.

If you see a wing on the left side of the screen, then tap it. The wing you have selected will now flash all the keys. This makes it possible to identify the selected wing in a multi wings setup. When the correct wing is flashing, tap the Assign Selected button.  

You have assigned and connected a wing. You can now exit the menu.

## dot2 consoles, dot2 onPC and dot2 3D visualizer

Everything, except for wings, is connected to a session. Wings are connected to a specific device. It is possible to run 4 separate sessions in your network (session ID 1-4). Devices with the same session ID work with the same show file and session timeout takes place within a couple of seconds. Moreover, dot2 consoles and onPC work in Tracking Backup within the same session. Additionally, devices can be invited or they can intentionally join the session. 

**Important:**\
All session members have to have the same streaming version of the software. 

To use network protocols such as sACN and / or Art-Net, a session has to be started first. Furthermore, all protocols are sent by the session Master. 

**Important:**\
Two stations in Master with the same session ID will always cause a session collision. For more information see [Session Collision](/dot2/key_window_sessioncollision/). 

The session status is displayed in the message center. For more information see [Status and Messages](/dot2/key_window_statusandmessages/). 

The session system allows greater flexibility with regards to backup and redundancy.

Press Setup and then the Sessions button. This opens the [Network Setup view](/dot2/key_window_networksetup/). This view is separated into two parts. The top part shows if your console or onPC is currently in a network session or not.

If the button on the right side displays Start a new or join an existing session, then press it to see the 4 different sessions. If there are devices using one of the sessions, then the session button will have the session name and will display Join Session. If there is no session running, then choose one of the sessions and begin a new session. Now you can add more devices to your session.

If the button in the top part displays Stop/Leave session, then the console is already connected to a session and you can add more devices to your session.

The lower part of the Network Setup view shows the devices in your session. They are separated into each type of device. If you have devices in your network and they are in your session, then they have a green background color. The device you are currently looking at will have a brighter green background color. If you are missing a device that previously has been in your session, then it gets a red background color. You can see the IPv6 address, name and version number of the connected devices.

A device with a red text in the version number is a device that does not have the same version as you do.

You can tap the Add button to see all the unconnected devices in your network. Here you can select the device you want to add to your session. When you choose one, then it will be connected to your session and it will get the show file that the session is running. If there are no devices in the [Select a Station view](/dot2/key_window_selectstation/), then the console cannot see the device in the network. However, if you expect to see a device, then check your network cables and power first.

If you have connected a console with an onPC, then you have full control of 4096 DMX channels. The onPC functions as a backup for your console. So if your console  stops working for some reason (could be if the power disappears), then your onPC will take over and you can still control 4096 DMX channels. The DMX output of the console does not work if the console does not work. So you can add dot2 Node4 (1K)s to your network. This allows you to have a backup or remote DMX output. 

## dot2 Node4 (1K)

Connecting Node4s to your system works the same as described above.

Nodes cannot initialize a session, they are connected and listen to the conversation on the network. They then take the DMX information in the session and convert it into real DMX output.  

The dot2 Node4 (1K) allows you to control 1024 DMX channels if you connect a dot2 onPC and a dot2 Node4 (1K). A dot2 onPC can only control 1024 channels if it's not connected to a dot2 console. 

The nodes are little bit different in the Network setup view. You can set what universes the node outputs. In the list it could look like this:

![](/img/dot2/dot2_ht_connectwingsnodes3donpc_01_1-2-2085b9.png)

_Figure 1: Node setup._

Here you can see the connected node output 4 universes. You can change which universes each port is outputting by selecting the cell and tapping the right side encoder.

Each DMX port is independent from other ports. This means that each port can output any of the 8 available DMX universes.

You can change the Hostname of the node by selecting the cell and tapping the right side encoder. Then type a new name for the node.
