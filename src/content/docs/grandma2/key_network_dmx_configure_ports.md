---
title: "Setting up DMX ports on MA devices"
description: "If there is only one station (console or onPC) in the system, then only the DMX ports on the station can be used."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_network_dmx_configure_ports.html"
scrapedAt: "2026-06-12T21:28:07.757Z"
---
If there is only one station (console or onPC) in the system, then only the DMX ports on the station can be used.

If a session is running and other MA devices are in the session, then it is also possible to change the settings on the DMX ports on those devices.\
 

The operation is the same no matter the size of the system. It is done from the **MA Network Configuration**. This can be done by pressing the Setup key and then the MA Network Configuration button under "Network".

The MA Network Configuration is separated into different sections. One for each type of MA device. Read more about these section and adding devices in the [Adding devices to your session](/grandma2/key_network_session_add_device/) topic.

The station you are using is always in the system, no matter if it is a console or onPC.

All devices that have a DMX port will have columns for each port. The columns can be named from "XLR A" to "XLR H". The consoles also have a "XLR In".

They could look like this:

![](/img/grandma2/menu_ma-network-configuration_dmx-ports_v3-2-7846a4.png)

_DMX Ports in the MA Network Configuration_

If the mode or the universe of a port needs to be changed, then select the relevant cell in the window and edit the cell. This can be done by tapping the the screen encoder, if you are on a console. It is also possible to right click if a mouse or trackball is connected. Or press Edit followed by the cell you want to edit.

When editing a DMX port cell, a pop-up like this appears:

![](/img/grandma2/menu_ma-network-configuration_dmx-node_configure-port_v3-3-c38971.png)

_Configure DMX port pop-up - DMX node version_

### []()Port Mode

The "Port Mode" is a drop down list that has the following options:

- **Off** - The DMX port is turned off and the device will not input or output any DMX.
- **In** - The DMX port is functioning as an DMX input. It will merge values into the universe number typed in the green universe field - If "DMX In Merge" is activated in the Setup->Show->Patch only->[DMX List](/grandma2/key_patch_dmx_parameter_list/#dmx_list).
- **Out** - The DMX port is outputting the DMX universe set in the green universe field.

All DMX ports can be an Input or an Output. It is just a matter of maybe adding a XLR gender changer to the physical connector. The **exceptions** are:

- grandMA2 onPC Command Wing: The connector called "DMX B" / "XLR B" can NOT be input!
- MA NSP in **Art-Net mode** or **4-port mode**: The connector called "DMX A" / "XLR A" and "DMX B" / "XLR B" can NOT be input!

**Important:**\
If a DMX port is turned off or do not transmit DMX data (for any reason), then the port is in **High-Z** mode. This means that there is no data being transmitted at all!

### []()Other limitations with DMX input

There is limitations regarding the number of DMX sources per universe. It is only allowed that a maximum of **two outside sources** send DMX data to the same Universe -  this is **per universe**. It does not matter how the DMX is received. It can come from a DMX port on a console or from a Network Protocol. Only two outside sources per universe.

If there is both an Art-Net and sACN source merging data into the same universe, then the limit of two different sources have been reached.

There is also a limitation regarding the devices receiving the incoming DMX. Any grandMA2 device can only have one DMX port as input per universe. This means that for instance a 4 port can have the four DMX ports as input, but the ports need to send the DMX to different universes. It is the same if the DMX is connected to a console. The DMX ports can be set to receive DMX, but they need to merge it to different universes. A Master in a session can receive DMX data to universe 1 from Art-Net or sACN and use one of the DMX ports as input to universe 1.

### Universe

The green input field can be used to set the universe number.

### []()DMX Fail Mode - DMX nodes only

The nodes have an extra option called **DMX Fail Mode**.

This determine what should happen if the node loses connection to the session or the DMX stream is stopped. The DMX stream can stop if there is a show upload or the session has ended.

The options are:

- **Timeout 10s**
- **Timeout 20s**
- **Timeout 30s**
- **Timeout 1m**
- **Timeout 10m**
- **Timeout 30m**
- **Timeout 1h**
- **Hold**

The **Timeout** options are similar except the time. They will hold the DMX values for the chosen time and then stop the DMX stream (High-Z mode).

The **Hold** option will make the node continue to send the DMX values as long as it got power.

Read more about configuring the MA Nodes in the [Control the MA Node section](/grandma2/key_control_ma_xport_node/).

### Timeout outfade time

Here it is possible to set a fade time that will be used when a **Timeout** is selected. The DMX values will then fade from their last values to a value of 0. When it has completed the fade, then it will stop transmitting DMX (High-Z mode).

The maximum fade time is 10 seconds.

The **Hold** option also do not have a fade time option since it continues the DMX data stream.

### []()Merge Mode

The bottom drop down list is for setting how the device should merge incoming DMX data from outside sources, if the device is not under MA-Net control.

This could be DMX nodes that are set to a session number that does not exist. Then they can be used to transport DMX through an Ethernet network - without any consoles or onPCs.

The options in the drop down are:

- **None:**\
  There will be no merging.
- **LTP:**\
  The universes will merge following the LTP (Latest Takes Precedence) rules.
- **HTP:**\
  The universes will merge following the HTP (Highest Takes Precedence) rules.
- **LoTP:**\
  The universes will merge following the LoTP (Lowest Takes Precedence) rules.

 

When the settings are correct, tap the Please button to confirm the settings or tap the X in the upper right corner of the pop-up to cancel the change.

Please remember the limitations mentioned [above](#input_limitation).

## Where are the settings stored?

Changes to the DMX ports on Consoles, onPCs and NPUs are stored as a part of the show file. The settings will be loaded into the devices when a show is loaded, but only if the "Network Config" settings are included when loading from the show file. For more info on loading show files, please have a look at the [Using the Backup Menu](/grandma2/key_backup_menu/) topics.

 

The DMX nodes (MA nodes) and MA switches are different. Their settings are stored locally in the devices and a not loaded or changed with the show file.

The configuration of the DMX nodes and switches can be exported and imported. This can be done to/from the hard drive or a USB stick.

Please read the [Export and Import topics](/grandma2/key_export_and_import/) for more information about this.
