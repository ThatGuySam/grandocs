---
title: "OSC (Open Sound Control)"
description: "Open Sound Control, or OSC, is a client and server system that defines a message address pattern used to address elements in the receiving server. Open Sound Co"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/remote_inputs_osc.html"
scrapedAt: "2026-06-15T18:25:37.557Z"
pagefind: false
---
Open Sound Control, or OSC, is a client and server system that defines a message address pattern used to address elements in the receiving server. Open Sound Control allows devices of different types to control other devices via a peer-to-peer messaging protocol. OSC messages are human-readable, so they are more than just numbers and strings (unlike, for example, MIDI Show Control, or MSC).

The grandMA3 software supports OSC 1.1. For more general information about OSC, e.g. OSC Packets, see [https://ccrma.stanford.edu/groups/osc/spec-1\_0.html.](https://ccrma.stanford.edu/groups/osc/spec-1_0.html)

---

## OSC Structure

OSC messages follow a specific pattern:

"(/prefix)/\[OSC Address],\[OSC Type],\[Value]"

###

**Prefix:** This is optional, depending on your system setup. It can be used in a more complex OSC network to distinguish messages intended for one set of devices (e.g., lighting consoles) from others (e.g., sound consoles). If a prefix is specified, only OSC messages beginning with the specified prefix are processed, and the prefix is prepended to outgoing OSC messages.

|                                            |                                                 |
| ------------------------------------------ | ----------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                       |
|                                            | The prefix must not contain any slashes ("/").  |

**OSC Address:** This is the target you are controlling on the receiving device(s), for example /Fader201 would be the address to move the fader for executor 201 in grandMA3. Sometimes the address will be more complex, for example /Page1/Fader201 would be the address to move the fader for executor 201 on page 1 in grandMA3.

|                                                    |                                                                                                                           |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                                                                                          |
|                                                    | Only OSC messages are supported when receiving or sending an OSC packet. OSC Bundle messages are currently not supported. |

**OSC Type:** This is the type of value you're sending, for example:

i = integer

f = float

s = string

T = true

F = false

**Value:** This is the value you send to the target.

An example OSC command to set the fader for executor 201 to 100 might be:

- "/Page1/Fader201,i,100"
- or with a prefix to specify only, e.g. grandMA3 devices: "/gma3/Page1/Fader201,i,100"

---

## OSC Menu

To open the OSC Menu:

- Menu - In & Out - OSC.

The OSC Menu opens:

![Open OSC Menu without any values.](/img/grandma3/2-3/menu_osc_v2-2-0586b8.png)

OSC Menu

At the top of the menu, the following four options can be set:

- Preferred IP: This is the preferred IP address or address range used by the OSC protocol.
- Interface: Tap this button to open the **Select Interface pop-up** to select the desired network interface. For more information, see [Interfaces and IP](/grandma3/2-3/network_interface/).
- Enable Output: This toggle button must be enabled to transmit OSC. See [Station Control](/grandma3/2-3/network_station_control/) in Network preferences for more information.
- Enable Input: This toggle button must be enabled to receive OSC. See [Station Control](/grandma3/2-3/network_station_control/) for more information.

|                                            |                                                                                                                                                                   |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                         |
|                                            | When receiving OSC messages, Enable Input will highlight its title bar in yellow. When sending OSC messages, the title bar of Enable Output will be highlighted.  |

The following are the specific parameters that can be set in the OSC menu:

- Name: Sets the name for this configuration.
- Destination IP: Sets the IP address for sending OSC data. A specific IP address or a broadcast IP can be set.
- Tags: Opens the Tags editor.
- Mode: OSC packets can be sent via UDP or TCP.
- Port: Specifies the network port of the incoming and/or outgoing OSC packets.
- Prefix: A prefix can be set by the user if he needs to. A prefix can be used for example as a criterion for limiting the range of possible receivers, e.g. /lighting would only take packets with /lighting into account, and discard OSC packets with the /sound-prefix.
- Page: Specifies which OSC Address of incoming OSC messages is routed to pages.
- Fader: Specifies which OSC Address of incoming OSC messages is routed to faders.
- ExecutorKnob: Specifies which OSC Address of incoming OSC messages is routed to the mini encoders.
- Key: Specifies which OSC Address of incoming OSC messages is routed to keys.
- FaderRange: Specifies which OSC value range is used for the fader, e.g. FaderRange 255 sets OSC 0-255 to 100%.
- Receive: Specifies if OSC data (but no commands) shall be received.
- Send: Specifies if this OSC configuration sends OSC data (but no commands).
- Receive Command: Specifies if commands for the command line will be received via OSC. This setting is independent of the general receive setting.
- Send Command: Specifies if commands of the command line will be sent via OSC. This setting is independent of the general send setting.
- EchoInput: Specifies if the input data shall be displayed in the system monitor.
- EchoOutput: Specifies if the output data shall be displayed in the system monitor.
- Note: Sets a note for this configuration.

With the buttons Receive All, Receive None, Send All, Send None, Receive Command All, Receive Command None,Send Command All, and Send Command None all OSC configuration lines can be modified together for the properties Receive, Send, Receive Command and Send Command.

---

## Receive OSC

**Requirement:**

- A network connection is established and the Interface is on both devices. For more information, see [Enabling or Disabling the Network Connection](/grandma3/2-3/network/#h3_800718561).

- Make sure that the network protocol (UDP, TCP), and the port are set correctly. Please note that the port configuration is used for sending and receiving OSC data.

|                                            |                                                                                                            |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                  |
|                                            | If you want to use different ports for sending and receiving, you can create multiple configuration lines. |

### Example



Example to receive OSC packets on a grandMA3 light console:

1. Open the In & Out menu / OSC.
2. Tap Enable Input. The input is enabled.
3. Two-finger tap the first row below Receive in the grid. The parameter is set to **Yes**.

|                                            |                                                                                    |
| ------------------------------------------ | ---------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                          |
|                                            | When receiving OSC messages, Enable Input will highlight its title bar in yellow.  |

|                                            |                                                               |
| ------------------------------------------ | ------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                     |
|                                            | Please note that in the example above, no prefix is defined.  |

For more examples, see [Advanced Examples](/grandma3/2-3/osc_advanced_examples/#h2_977962818).

## Command Line Control

The entirety of the grandMA3 command line can be accessed via OSC by using the "/cmd" OSC Address and the string 's' OSC Type.

|                                            |                                                                                                                           |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                 |
|                                            | To receive OSC messages for the command line, set Receive Command to **Yes** in the corresponding OSC configuration line. |

Examples that can be sent from another console to the receiving console:

- _SendOSC 1 "/cmd,s,FaderMaster Page 1.201 At 50"_: Brings fader 201 on page 1 to 50% (same as the examples above but using gMA3 command line syntax instead).
- _SendOSC 1 "/cmd,s,FaderMaster Page 1.201 At 50 Fade 5"_: Brings fader 201 on page 1 to 50% and additionally adds a fade time of five seconds
- _SendOSC 1 "/cmd,s,Fixture 1 At 75_": grandMA3 command line syntax is used to execute the command "Fixture 1 At 75" in the command line.
- _SendOSC 1 "/cmd,s,Go+ Exec 402"_: Triggers executor 402.
- _SendOSC 1 "/cmd,s,Patch Fixture 1 3.42"_: Patches fixture 1 to address 42 in Universe 3.  ​

### Object Playback Control

The Playback of the following pool objects are controlled through OSC:

- Sequences
- Masters
- Groups
- Presets
- Sounds
- Worlds
- Plugins
- Screen Configuration
- Timers

Pool objects are addressed by their enumerated address in the grandMA3 directory structure. For more information about the grandMA3 structure, see [List keyword](/grandma3/2-3/keyword_list/). 

| Target     | Addresses    | Type Tags | Arguments                            | Results                                                                           | Example                 |
| ---------- | ------------ | --------- | ------------------------------------ | --------------------------------------------------------------------------------- | ----------------------- |
| Sequence X | /13.13.1.6.X | si        | \<Key function>,1                    | Press the Key of the given Key function.                                          | /13.13.1.6.1,si,Flash,1 |
| -          | -            | si        | \<Key function>,0                    | Release the Key of the given Key function                                         |                         |
| -          | -            | sif       | \<Fader function>,3,0 … 100          | Set the Fader of the given Fader function to the given value in percent.          |                         |
| -          | -            | sii       | \<Fader function>,0 … 3, -100 … 100  | Incrementally move the Fader of the Fader function by the given value in percent. |                         |

|                                                  |                                                                                                                                                          |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                           |
|                                                  | The address in the grandMA3 directory structure may change between software versions. Be sure to check the addresses when performing a software update.  |

All playback functions that can be used when assigning the object type to an Executor can also be controlled through OSC. For more information, see [Assign Object to an Executor](/grandma3/2-3/executor_assign/#h2_420566424).

### Example

To display the argument of a playback control function in the System Monitor:

1. On the reciving device, press Menu - tap In & Out - tap OSC menu.
2. Tap Enable Input.
3. Set Receive to **Yes** in the corresponding OSC configuration Line.
4. Set Echo Input to **Yes**.
5. Tap to close the In & Out menu.
6. Open Add Window - More - System Monitor.
7. Execute a playback command, e.g. move Fader201 on the sending device. The argument of the playback is displayed in the System Monitor of the receiver.

![System Monitor is shown.](/img/grandma3/2-3/window_system_monitor_osc_v2-1-dac1d0.png)

System Monitor

To retrieve the enumerated address of an object and display it in the Command Line History:

1. Tap the command line.
2. Type  _Lua "Printf( ObjectList( 'Master 1' )\[ 1 ]:Addr() )"_ and press Please ( Replace the _Master 1_ in the example with another object). The enumerated address is shown in the command line history.

   ![Update this description text.](/img/grandma3/2-3/window_commandline_osc_v2-1-420e32.png)

   Command Line History

For more information, see the [Printf(string)](/grandma3/2-3/lua_objectfree_printf/) Lua function.

---

## Send OSC

|                                            |                                                                                                 |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                       |
|                                            | For more information about sending OSC, see [SendOSC keyword](/grandma3/2-3/keyword_sendosc/).  |

### Example 1

To send OSC packets from a grandMA3 onPC station:

1. Open the In & Out Menu / OSC.
2. Tap Enable Output. The output is enabled.
3. Two-finger tap Destination IP in the first row of the grid. The editor opens.
4. Set the Destination IP of the receiving device and then press Please.
5. Two-finger tab the first row below Send Command. The parameter is set to **Yes.**
6. Send data to the receiving device, e.g by using the command: _SendOSC 1 "/Page1/Fader201,i,50"_.
7. The title bar of Enable Output turns yellow** **and OSC packets are sent from grandMA3 onPC to the grandMA3 light console.

   ![Title bar of the OSC Menu is shown with Enable Output in yellow.](/img/grandma3/2-3/menu_osc_enable_input_v2-1-1ae869.png)

   Title Bar of the Enable Output button is yellow when sending data

|                                            |                                                                                 |
| ------------------------------------------ | ------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                       |
|                                            | When sending OSC messages, the title bar of Enable Output will be highlighted.  |

### Object Playback Feedback

|                                            |                                                                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                   |
|                                            | To send OSC messages for playback action, set Send to **Yes** in the corresponding OSC configuration line.  |

Playback actions generate OSC output on the following objects, which can be used in the System Monitor when Echo Output is enabled:

- Sequences
- Masters
- Groups
- Presets
- Sounds
- Worlds
- Plugin Components
- Screen Configuration
- Timers

For more information on Plugin Components, see [Plugins](/grandma3/2-3/plugins/).

### Example 2



To send a command, e.g., a playback control function, to a grandMA3 console:

1. On the sending device, press Menu - tap In & Out - tap OSC menu.
2. Tap Enable Output.
3. Set Send to **Yes** in the corresponding OSC configuration line.
4. Set Echo Output to **Yes**.
5. Tap X to close the In & Out menu.
6. Open Add Window - More - System Monitor.
7. Execute a playback command, e.g. move Fader201. The command is send to the receiver.

### Example 3

To send OSC data from a grandMA3 onPC workstation and receive it on a console:

**Requirement**:

- The IP addresses are set up correctly and the network is enabled on both devices .
- Some Fixtures are patched on the receiving console.

**Sender:**

1. Open the In & Out Menu / OSC.
2. Tap Enable Output. The output is enabled.
3. Set Send Command to Yes.
4. Tap the command line in grandMA3 onPC:
5. Type __SendOSC 1 "/cmd,s,Fixture 1 At 75_" _ and press Please.****

**Receiver:**

1. Open the In & Out Menu / OSC.
2. Tap Enable Input. The input is enabled.
3. Set Receive Command to **Yes**.
4. If the command is received, Fixture 1 on the console is dimmed down to 75%.

### Example 4

To send OSC data from a grandMA3 onPC workstation to a third party device, e.g., a videoserver:

**Requirement**:

- The IP addresses are set up correctly on both devices 

**Sender:**

1. Open the In & Out Menu / OSC.
2. Tap Enable Output. The output is enabled.
3. Set Send Command to **Yes**.
4. Tap the command line in grandMA3 onPC:
5. Type ___SendOSC 1 "/Videoserver/Master,i,100_"__ and press Please.

For more examples, see [Advanced Examples](/grandma3/2-3/osc_advanced_examples/#h2__2094987871).

## Subtopics

- [Advanced Examples](/grandma3/2-3/osc_advanced_examples/)
- [Use Cases](/grandma3/2-3/osc_examples/)
