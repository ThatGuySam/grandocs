---
title: "Use MIDI and MIDI Show Control (MSC)"
description: "The dot2 can handle different types of MIDI and it can both transmit and receive MIDI."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_ht_usemidiandmsc.html"
scrapedAt: "2026-06-12T21:29:37.261Z"
---
The dot2 can handle different types of MIDI and it can both transmit and receive MIDI.

You can see the incoming and outgoing MIDI data on a console by pressing Tools and then [MIDI Monitor](/dot2/key_window_midimonitor/).

If you are using a dot2 onPC, then you need to setup your MIDI in and outputs. This is also done in Tools menu. Here you can tap [MIDI Configuration](/dot2/key_window_midiconfiguration/) and select what MIDI devices you use to receive and transmit MIDI.

## MIDI note remote input

This is a system to use received MIDI notes to trigger different things in the console. It's all set up in the [Remote Inputs Configuration view](/dot2/key_window_remote/).

Her you have the option to map incoming MIDI Note signals to executors or to trigger a command that you write in the configuration.

You can use the MIDI Velocity to set the position of a fader. 

MIDI Remote Input only triggers the executors on the console that receives the MIDI signal.

## MIDI note output

You can send MIDI notes from cues or directly from the command line.

You can use the [MIDI Note command](/dot2/key_keyword_midinote/) to transmit MIDI Note data. Please read more details about the command in the command description.

The MIDI Note command is transmitted from a standalone console or if you have a session, then it's the session master (the console with the Blue Heart icon ![](/img/dot2/dot2_viewsandwindows_statusmessages03_1-0-9ac292.png) next to the command line input) that transmit the MIDI.

## MIDI Show Control (MSC) input

The console can be controlled by any device that can send MIDI Show Control. There's a lot of settings regarding MSC. You can find them in Setup and then [MIDI Show Control](/dot2/key_window_midishowcontrol/). Her you can change the settings to match the settings in the transmitter (often a Show Control software or some Sound software).

When you use MSC you can only control executors on the first page or the Main Executor.

The MSC data needs to be transmitted to a standalone console or if you have a session, then it's the session master (the console with the Blue Heart icon ![](/img/dot2/dot2_viewsandwindows_statusmessages03_1-0-9ac292.png) next to the command line input) that  reacts to the MIDI.

Read more about the MSC concept [below](#msc_concept).

## MIDI Show Control (MSC) output

The dot2 can transmit MSC commands to a device. This can be used to control other devices (like sound samplers). All the settings for this is found in Setup and then [MIDI Show Control](/dot2/key_window_midishowcontrol/). Here you need to set your settings to match the MSC receiver.

The MSC data is transmitted from a standalone console or if you have a session, then it's the session master (the console with the Blue Heart icon ![](/img/dot2/dot2_viewsandwindows_statusmessages03_1-0-9ac292.png) next to the command line input) that transmit the MIDI.

Read more about the MSC concept [below](#msc_concept).

## MIDI Time Code (MTC)

The console can receive MTC and use that to automatically run cues on executors.

The executor you want to be controlled by MTC needs to have "MIDI" selected in the [Settings of Executor window](/dot2/key_window_settingsofexecutor/). Then you need to have some cues in that executor that uses Timecode as the trigger. When Timecode is the trigger, then you can set a time in the "Trig Time" column. When your incoming MTC reaches the time you have set in the Trig Time column, then the cue is triggered. You don't need to have the cue as the next cue, it'll jump to the cue that have the time that matches the incoming MTC. Just remember to have the fader up.

You can type the times manually or you can tap TC Record in the Cues view title bar. This will start a recording function. Then you can do a normal Go to the Timecode cues and it will record the time into the Trig Time column. You can also use the [Record command](/dot2/key_keyword_record/) to activate this timecode record function. When you have an active recording going on then you'll have a flashing red circle with a white "T" icon  next to the Command line input. There'll also be a flashing red circle in the Cues view and in the Executor Bar. You turn off the Record function by tapping the TC Record again.

 

MTC can be enabled and disabled in the [Timecode Configuration window](/dot2/key_window_timecode/) in Setup. If you have turned off all the incoming timecodes then you can't tap the TC Record button.

The incoming MTC can come into the system from any console/onPC in the session - not just the master.

 

## []()The MSC Concept

The MSC command structure and syntax is based on the general SysEx structure defined by MMA (MIDI Manufacturers Association). It was released in 1991 as an extension to the general MIDI.

The raw MIDI information is written in hex octets (two hexadecimal numbers). Different software manufacturers might present the MSC in an interpreted way and show the data in a more human readable form. This can of course be nice, but since we cannot describe every way this can be presented, this manual is looking at the raw data.

The message format looks like this:

| F0 7F | Device ID | 02 | Command Format | Command | Data | F7 |
| ----- | --------- | -- | -------------- | ------- | ---- | -- |
|       |           |    |                |         |      |    |

- **F0 7F** is the header that identifies the message as "universal system exclusive" and a "real time" message.
- **Device ID** is the device or group number.
- **02** is a hex octet specifying that the message is MSC.
- **Command Format** is an octet that specifies the equipment type.
- **Command** is an octet that defines the command type
- **Data** is the actual data. This might change depending on the command type.
- **F7** is a closing octet finishing the message.

### Device ID

The device ID is an octet actually divided into three different sections:

- **00 to 6F**:\
  This is the 112 different specific devices that can be identified.
- **70 to 7E**:\
  This is the 15 group numbers.
- **7F**:\
  This is a broadcast ID that all devices listen to.

In dot2 the device ID and group ID can be set for both incoming and outgoing messages.

For transmitting MSC it can only transmit one octet in the **Device ID** location. The **Send to** setting (described above) selects which one of the three different sections ID that should be transmitted. 

### Command Format

The command format octet denotes the type of equipment that should receive the message (or at least respond). dot2 only transmit and respond to three different formats:

- **01**:\
  This is the **General Lighting** format
- **02**:\
  This is **Moving Lights** format.
- **7F**:\
  This is an **All** format that all equipment should respond to.

### Command

The command octet denotes the type of command in the message. The command type will dictate the data information.

dot2 supports 7 different command types:

- **01 (Go)**:\
  This is the same as a Goto command in dot2. It needs to be followed by a cue number.
- **02 (Stop)**:\
  This is the same as a Pause command in dot2. This can be followed by a cue number.
- **03 (Resume)**:\
  This will "un-plause" a cue. If a specific cue has been paused, then the cue number needs to be specified with this command.
- **04 (Timed\_Go)**:\
  This can be used to perform a Goto with a specific fade time. It needs both the time and the cue number - in that order.
- **06 (Set)**:\
  Set can be used to set the position of faders. It needs the fader number and page followed by the position.
- **07 (Fire)**:\
  This can be used to trigger macros. The macro number needs to follow the command. Only macro 1 to 255 can be triggered.
- **0B (Go\_Off)**:\
  This command can be used "Off" executors. This needs to followed by a cue number.

### Data

**01 (Go):**

As stated above: This is interpreted as a GOTO command. A cue number needs to be specified. The cue number also needs to be transmitted in hex octets and the complete cue number including the decimals needs to be transmitted. If cue number 4 is to be triggered then the complete number is **4.000** - the number with all decimal numbers separated by a dot (Hex value 2E). Decimal numbers in hex is some of the easiest to convert. It needs a "3" in front. This means that decimal **4** becomes **34** in hex. The complete cue number including the dot is then: **34 2E 30 30 30**.

If the station is set to **Default Only** in the Send MSC In Exec option, then this all that needs to be added after the command.

**Example:** Triggering cue number **21.5** on the default executor (**All Devices**, **All Format**, and **Default Only** setting):

| F0 7F | Device ID | 02 | Command Format | Command | Data              | F7 |
| ----- | --------- | -- | -------------- | ------- | ----------------- | -- |
| F0 7F | 7F        | 02 | 7F             | 01      | 32 31 2E 35 30 30 | F7 |

If the setting is not Default Only, then an executor and page needs to be specified. There are two options for separating the executor number and the page number. It can be separated by a dot (hex = 2E) or by a space (hex = 20). The cue number and the executor/page data needs to be separated by a hex value **00**.

**Example:** Triggering cue number **37.2** on executor 5 on page 1 (**All Devices**, **All Format**, and **Exec.Page** setting):

| F0 7F | Device ID | 02 | Command Format | Command | Data                          | F7 |
| ----- | --------- | -- | -------------- | ------- | ----------------------------- | -- |
| F0 7F | 7F        | 02 | 7F             | 01      | 33 37 2E 32 30 30 00 35 2E 31 | F7 |

Same example but with a space separated executor and page:

| F0 7F | Device ID | 02 | Command Format | Command | Data                          | F7 |
| ----- | --------- | -- | -------------- | ------- | ----------------------------- | -- |
| F0 7F | 7F        | 02 | 7F             | 01      | 33 37 2E 32 30 30 00 35 20 31 | F7 |

 

**02 (Stop):**

This is like hitting the pause button. Please read the section above for a better understanding of the hex cue numbering system.

With the **Default Only** option there does not need to be any extra data since it is the executor that is paused.

**Example:** Stopping the default executor (**All Devices**, **All Format**, and **Default Only** setting):

| F0 7F | Device ID | 02 | Command Format | Command | Data | F7 |
| ----- | --------- | -- | -------------- | ------- | ---- | -- |
| F0 7F | 7F        | 02 | 7F             | 02      |      | F7 |

If the station is transmitting MSC, then it will transmit a cue number **0.000**. This is like sending a “pause running cue” command.

If the settings are not **Default Only** but one of the two Exec/Page options, then the cue 0 also needs to be transmitted. 

**Example:** Stopping executor 5 on page 1 (**All Devices**, **All Format**, and **Exec.Page** setting):

| F0 7F | Device ID | 02 | Command Format | Command | Data                       | F7 |
| ----- | --------- | -- | -------------- | ------- | -------------------------- | -- |
| F0 7F | 7F        | 02 | 7F             | 02      | 30 2E 30 30 30 00 35 2E 31 | F7 |

 

**03 (Resume):**

This is the only way to continue a paused cue. The only difference between the Stop and Resume commands are the “02” and “03”.

**Example:** Continuing the fade paused above (**All Devices**, **All Format**, and **Exec.Page** setting):

| F0 7F | Device ID | 02 | Command Format | Command | Data                       | F7 |
| ----- | --------- | -- | -------------- | ------- | -------------------------- | -- |
| F0 7F | 7F        | 02 | 7F             | 03      | 30 2E 30 30 30 00 35 2E 31 | F7 |

If the Default Only setting is chosen then the command is **F0 7F 7F 02 7F 03 F7** to continue the fade.

 

**04 (Timed\_Go):**

This is the same as the **01 (Go)** command but with a specified time. Please read (and understand) about the **01 (GO)** command and data above. Just to make this a bit simpler we are going to pretend that the “Default Only” option is turned on in the MSC options in Setup.

To transmit a timed Goto the time needs to be specified first and then the cue number. The time is specified by five hex octets. They represent (in order) **Hour**, **Minute**, **Second**, **Frame**,**** and **Fraction**.

The hour, minute, and second sections are very strait forward. The number needs to be transmitted in hex numbers. It is possible to transmit a value above the normal limit for example 64 seconds (hex = 40). The station will transmit this as 1 minute and 4 seconds.

Right now the console will not accept any time specified in the Frame and Fraction sections. But it transmit values below a second in the Frame section. The console divides the second into 24 frames. So 0.5 seconds is 12 Frames and the received hex number would be **0C**.

**Example:** Goto cue 75 with the fade time of 20 seconds (**All Devices**, **All Format**, and **Default Only** setting):

| F0 7F | Device ID | 02 | Command Format | Command | Data                             | F7 |
| ----- | --------- | -- | -------------- | ------- | -------------------------------- | -- |
| F0 7F | 7F        | 02 | 7F             | 04      | 00 00 14 00 00 37 35 2E 30 30 30 | F7 |

**Example:** Goto cue 5.4 with the fade time of 1 minute on executor 3 on page 1 (**All Devices**, **All Format**, and **Exec.Page** setting):

| F0 7F | Device ID | 02 | Command Format | Command | Data                                      | F7 |
| ----- | --------- | -- | -------------- | ------- | ----------------------------------------- | -- |
| F0 7F | 7F        | 02 | 7F             | 04      | 00 01 00 00 00 35 2E 34 30 30 00 33 2E 31 | F7 |

 

**06 (Set):**

The set command is used to move a fader to specific position. The 06 command is followed by two hex octets that indicates the fader and then two more octets that dictates the position.

 

The first of the two numbers for the fader is the fader number (on a page). The fader number 1 is hex number **00**, the second is **01** and so on. Remember that this is a hex number so fader 16 have hex number **0F** and decimal 17 is hex **10**.

The second of the two numbers for the faders are the page number. This is a little different page 1 is hex number **01**and page 2 is hex **02** and so on.

So executor 1 on page 1 is **00 01**.

 

Calculating the position in hex numbers is a bit more tricky. The faders position is defined by a coarse and fine value. The scale for both values is 128 steps (most MIDI is in 128 steps). The fine value is transmitted first followed by the coarse value.

The desired fader position (in decimal) need to be multiplied by 1.28. The resulting integer is the coarse value. The remainder (everything on the right side of the separator) should be multiplied by 128 to get the fine value. The two decimal numbers then needs to be converted to hex.

**Example:**

The fader 3 on page 2 needs to be moved to 45%. First convert the position.

1. Multiply 45 by 1.28 = 57.6
2. Coarse value is 57.
3. Multiply 0.6 by 128 = 76.8
4. Fine value is 76.
5. Convert decimal 57 to hex = 39.
6. Convert decimal 76 to hex = 4C.
7. Fine is transmitted before coarse so the position is: 4C 39

The MSC message is (**All Devices** and **All Format** setting):

| F0 7F | Device ID | 02 | Command Format | Command | Data        | F7 |
| ----- | --------- | -- | -------------- | ------- | ----------- | -- |
| F0 7F | 7F        | 02 | 7F             | 06      | 02 02 4C 39 | F7 |

 

A fade time can be added after the fader and position data. The time format explained in the 04 command is used.

**Example:** Moving fader 15 on page 1 to 100% in 5 seconds (**All Devices** and **All Format** setting):

| F0 7F | Device ID | 02 | Command Format | Command | Data                       | F7 |
| ----- | --------- | -- | -------------- | ------- | -------------------------- | -- |
| F0 7F | 7F        | 02 | 7F             | 06      | 0E 01 7F 7F 00 00 05 00 00 | F7 |

 

The console only transmit the position of some faders - executors with sequences and all the green colored special masters (for the selected executor), but it accepts positions for all faders that have something assigned.

 

**07 (Fire):**

Macros can be fired by this command. It needs to be followed by a single octet specifying the macro number.

Macro number 1 is hex number **01**. Hex number **FF** is macro number 255.

**Example**: Triggering macro number 24 (**All Devices** and **All Format** setting):

| F0 7F | Device ID | 02 | Command Format | Command | Data | F7 |
| ----- | --------- | -- | -------------- | ------- | ---- | -- |
| F0 7F | 7F        | 02 | 7F             | 07      | 18   | F7 |

 

**0B (Go\_Off):**

Executors can be turned off using the **0B** command. A cue number needs to be transmitted - cue 0 can be used.

**Example**: Send an Off command to executor 9 on page 5 (**All Devices**, **All Format**, and **Exec.Page** setting):

| F0 7F | Device ID | 02 | Command Format | Command | Data                       | F7 |
| ----- | --------- | -- | -------------- | ------- | -------------------------- | -- |
| F0 7F | 7F        | 02 | 7F             | 0B      | 30 2E 30 30 30 00 39 2E 35 | F7 |

### MIDI via Ethernet

MSC can sent using Ethernet. It is transmitted as a UDP message.

The MSC message is the same as described above, but the MSC message needs a header for the date to be accepted by the dot2.

The header is separated into two parts. The first is identifying the message as a dot2 MSC message: **47 4D 41 00 4D 53 43 00** - it translates to GMA MSC.

The second part is four octets describing the length of the message - including the header. It is written as little endian byte format (least significant first).

This is calculated by counting the number of octets and then convert the decimal number into hex. Usually we only needs the first octet (it allows for messages up to 255 octets) although all four needs to be sent.

 

**Examples:**

Send a go command to cue 35. The MSC message is: **F0 7F 7F 02 7F 01 33 35 2E 30 30 30 F7**.

This is 13 octets. The header is always 12 octets. So the combined length is 25 octets. Decimal 25 is **18** in hex. The entire message is:

**47 4D 41 00 4D 53 43 00 18 00 00 00 F0 7F 7F 02 7F 01 33 35 2E 30 30 30 F7**

 

Trigger macro 1 is: **F0 7F 7F 02 7F 07 01 F7** - 8 octets.

Plus the 12 from the header is decimal 20 = 13 hex.

The message is:

**47 4D 41 00 4D 53 43 00 13 00 00 00 F0 7F 7F 02 7F 07 01 F7**
