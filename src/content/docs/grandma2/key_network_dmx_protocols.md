---
title: "Network DMX protocols"
description: "DMX can be transmitted or received using network DMX protocols instead of or together with the DMX ports in the system."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_network_dmx_protocols.html"
scrapedAt: "2026-06-12T21:28:08.230Z"
---
DMX can be transmitted or received using network DMX protocols instead of or together with the DMX ports in the system.

This is all controlled from the Network Protocols menu. The menu can be opened by pressing the Setup key followed by a tap on the Network Protocols button.

It could look like this:

![](/img/grandma2/menu_network-protocols_v3-3-bd3b9d.png)

_Network Protocols menu - Art-Net tap_

The grandMA2 supports the following network DMX protocols, each having their own tab in the **Network Protocols** view:

**Art-Net:**

Both transmit and receive. Several ranges of universes can have different settings.

**ETC-Net2:**

Transmit only. Only one range of universes.

**Pathport:**

Transmit only. Only one range of universes.

**sACN:** (streaming ACN)

Both transmit and receive. Several ranges of universes can have different settings.

**Shownet:**

Transmit only. Only one range of universes.

**KiNET:**

Transmit only. Several ranges of universes can have different settings.

 

It is always the Master in a session that transmit and receive the network DMX data.

Each of the different network protocols have at least one configuration line. If the protocols support it, then there might be more lines.

## []()General buttons in Network Protocols

There are up to three buttons on the right side of the view:

- **Network DMX if Alone** - When this is active (the text is yellow), then the station will output DMX via the network. All network protocols are sent from the master station in a session. If there is no connected stations, you need to turn this on to output network DMX. This toggles all network DMX outputs. If the frame is red, then this station does not output network DMX. If the frame is green then this station outputs network DMX. This setting is shared across all network DMX protocols.
- **\[Protocol name] Output Active** - When this is on (the text is yellow), then you can output the network DMX protocol. This needs to be enabled or disabled for each protocol.
- **\[Protocol name] Input Active** - When this is on (the text is yellow), then you can input the DMX protocol. This is only possible in Art-Net and sACN.

At the bottom of the view, there might be two buttons. They are only visible in Art-Net, sACN and Kinet1. They are used to **Add** and **Delete** lines in the table above. The three mentioned protocols can have more configurations lines.

## []()General settings in Network Protocols

Some settings are shared by the different protocols.

- **LocalStart** - This is the number of the first DMX universe in your console that you want to transmit, or the first universe you want to receive.
- **Amount** - This is the amount of universes you want to receive or transmit.
- **ExternStart** - Many of the protocols use this to set the protocol universe number. For example grandMA2 universe number 10 should be transmitted as Shownet universe 5, then the ExternStart should be 5 and LocalStart is 10. 
- **TTL (Time To Live)** - Specifies the number of routers (hops) that multicast traffic is permitted to pass through before expiring on the network. For each router (hop), the original specified TTL is subtracted by 1. When TTL reaches a value of 0, then the DMX data is no longer forwarded through the network.
- **Priority** - Many network protocols uses a Priority setting. This is used to tell the receiver how important the DMX data from this transmitter is. This is only relevant if the receiver have multiple DMX sources. Usually the highest number equals a higher priority.
- **Info** - In the Info cell you can write any relevant information.

 

## []()Art-Net

Art-Net is a royalty free protocol developed by Artistic Licence (http\://www\.artisticlicence.com).

MA supports Art-Net 1, 2 and 3.

Art-Net 3 provides 128 networks of 256 universes. If the Network number is set to 1, then it is compatible with Art-Net 1 and 2.

To add a line in the Art-Net window, tap **Add**. To remove a unwanted line, select it and tap **Delete**.

There several options for each line (here is only mentioned the ones that are not mentioned in [General Settings above](<#General Settings>)):

- **Valid** - This field is read only and tells if the line is valid. It is not allowed to transmit (or receive) the same universe more than once. A valid line will transmit or receive data.
- **Requested** - Here you can set if the line is requested or not. A line that is not requested get a status of **Not valid** and will not transmit or receive Art-Net data.
- **Mode** - Change between **OutputBroadcast**, **OutputUnicast**, **OutputAuto**, and **Input**. Read more below.
- **Destination IP** - Only available if the mode is OutputUnicast. This is the IP address of the receiver.
- **Network** - This is the Art-Net network setting (1-128).
- **Subnet** - This is the Art-Net subnet setting (0-F).
- **Universe** - This is the Art-Net universe setting (0-F).
- **Delay** - Adding a number here will add milliseconds delay between the packets. This can be needed in slow networks. Only for Art-Net output.

 

The **Mode** selection changes the functionality of the Art-Net line. Editing it opens a small pop-up giving the above mentioned options. The pop-up look like this:

![](/img/grandma2/popup_select-mode-artnet_v3-3-799724.png)

_Select Mode pop-up - Art-Net mode_

The last option is "Input". This makes the line merge incoming Art-Net DMX into your system.

DMX output via Art-Net supports Auto detection and manually setting of Broadcast or Unicast network traffic per universe.

- **OutputBroadcast** - sends the DMX Universes as broadcast.
- **OutputUnicast** - sends the DMX Universes as unicast to the IP address set in the **Destination IP** column.
- **OutputAuto** - sends each DMX Universe as Unicast to up to 5 receivers detected via ArtPoll. If more than 5 receivers, or if there are no detected receivers requesting the universe, then the universe will be send as broadcast!

  **Hint:**\
  The default limitation of 5 individual receivers can be changed to a maximum of 10. This can only be done using the command line configuration and by using the "MaxUnicast" property. 

**Important:**\
Art-Net is transmitted from Ethernet connector number 2. If you use a onPC, then you do not need to make a valid Art-Net IP address. The software will create one and use it. If your computer have a valid Art-Net address, then it will use it. If there are several valid addresses, then it will use the first it sees.

**Do not** give your Ethernet connector number 1 a valid Art-Net IP address.

## []()ETC-Net2

ETC-Net2 is developed by ETC (Electronic Theater Control - http\://www\.etcconnect.com). It was introduced in 1997.

MA supports transmission of one range of DMX universes as ETC-Net2. This was implemented to support communication to older ETC dimmers and DMX nodes. Using sACN might be a better option if the receivers supports it.

There are several options (here is only mentioned the ones that are not mentioned in [General Settings above](<#General Settings>)):

- **Active** - This is an 'On'/'Off' option. When 'On' the console will transmit ETCNet2. When it is 'Off', then the text is hidden. This can also be toggled by the button on the right side.
- **Groups** - ETC-Net2 uses multicast groups to simplify and optimize the transmission. Here you can select what group to transmit to.
- **Priority** - The lowest number has the highest priority.

## []()Pathport

Pathport is created by Pathway Connectivity (http\://www\.pathwayconnect.com).

MA supports transmission of one range of DMX universes as Pathport. This was implemented to support communication to older Pathway DMX nodes. Using sACN might be a better option if the receivers supports it.

There are several options (here is only mentioned the ones that is not mentioned in [General Settings above](<#General Settings>)):

- **Active** - This is an 'On'/'Off' option. When 'On' the console will transmit Pathport. When it is 'Off', the text is hidden. This can also be toggled by the button on the right side.

## []()sACN (streaming ACN)

ACN (and streaming ACN) is an ANSI/ESTA international standard. Further readings: http\://en.wikipedia.org/wiki/Architecture\_for\_control\_networks.

ACN (Architecture for Control Networks) is suite protocol. It uses a lot of elements that is currently not supported by grandMA. But the ACN protocols also have a lighter version for transporting DMX data. It is called 'Lightweight streaming protocol for transport of DMX512 using ACN' or more popular "streaming ACN" or "sACN". It is international standard number E1.31.

 

There are several options (here is only mentioned the ones that are not mentioned in [General Settings above](<#General Settings>)):

- **Valid** - This displays a "Yes" if the line is valid. Only valid lines transmit or receive data.
- **Requested** - Here you can set if the line is requested or not. A line that is not requested, get a status of **Not valid** and will not transmit or receive sACN data.
- **Mode** - Change between **OutputMulticast**, **OutputUnicast**, **InputMulticast**, and **InputUnicast**. Read more below.
- **Destination IP** - Only available if the mode is OutputUnicast. This is the IP address of the receiver.
- **sACN Universe** - This is the sACN universe the DMX data should be transmitted to or received from (1 - 64000).
- **Priority** - The allowed value is 0 to 200. The highest number has the highest priority. The default value should be 100.
- **Protocol** - Here you can select between two different variations of the sACN protocol. You can choose the "Draft" or "Final" release of the sACN protocol. Some equipment have implemented the draft version of sACN before the final version was released. You might need to change to "draft mode" for those devices to work.
- **Delay(ms)** - The delay can be used to slow down the traffic in the network. For some older and slower network nodes there is a big difference in receiving 10 universes in one burst or one by one.

### Mode

Editing the Mode cell will open a small select pop-up that allows you to choose the different input an output modes mentioned above.

The pop-up looks like this:

![](/img/grandma2/popup_select-mode-sacn_v3-3-ac43fc.png)

_Select Mode pop-up - sACN mode_

You can choose between input and output and each of them can be unicast or multicast.

- **OutputMulticast:**\
  When choosing Output Multicast, sACN will be sent as multicast to the relevant multicast addresses.
- **OutputUnicast:**\
  When choosing Output Unicast, a valid IP address has to be entered in the **Destination IP** column. Universes configured in this row will be sent as unicast to this IP address.
- **InputMulticast:**\
  Input Multicast will join the Multicast group of the relevant DMX Input Universe.\
  Input Multicast is limited to max. 10 Universes. If more than 10 rows are configured as Input Multicast, all rows beyond multicast input row 10 will be invalid.
- **InputUnicast:**\
  Input Unicast is not limited and receives sACN data for the relevant universe without joining any multicast group.

sACN input of grandMA2 console ignores sACN priorities.

## []()Shownet

Strand Shownet is created by Strand Lighting (http\://www\.strandlighting.com).

MA supports transmission of one range of DMX universes as Shownet. Using sACN might be a better option if the receivers supports it.

There are several options (here is only mentioned the ones that is not mentioned in [General Settings above](<#General Settings>)):

- **Active** - This is an 'On'/'Off' option. When 'On' the console will transmit Strand Shownet. When it is 'Off', then the text is hidden. This can also be toggled by the button on the right side.

**Important:**\
Shownet is a Broadcast protocol, but is transmitted from Ethernet connector 1.

## []()KiNET

KiNET is developed by Philips Color Kinetic (http\://www\.colorkinetics.com/).

MA supports transmission of several ranges of DMX universes.

There are several options (here is only mentioned the ones that are not mentioned in [General Settings above](<#General Settings>)):

- **Valid** - There will be a "Yes" for each line that is a valid line. Only valid lines will transmit data.
- **IP Address** - This is the IP address of the receiver.

**Important:**\
KiNET is a Broadcast protocol, but is transmitted from Ethernet connector 1.
