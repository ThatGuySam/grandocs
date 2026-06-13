---
title: "RdmSetParameter"
description: "To get the RdmSetParameter keyword in the command line, type RdmSetParameter in the command line or use the shortcut RdmS."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_rdmsetparameter.html"
scrapedAt: "2026-06-12T21:27:59.252Z"
---
To get the RdmSetParameter keyword in the command line, type **RdmSetParameter** in the command line or use the shortcut **RdmS**.

## Description

With the RdmSetParameter keyword you can set RDM parameters by using the command line.

If no Unique ID is given, the fixture selection will be used.

The RdmSetParameter keyword is a function keyword.

## Syntax

RdmSetParameter \[Parameter ID ] \[Parameter Value] / \[Option] = \[Option value]

## Parameter ID (= PID)

You can enter the PIDs in the command line by using the PID name or the PID hex number.

**Important:**\
If you enter manufacturer specific PIDs or PID values in the command line, it is necessary to use the hex value. A manufacturer specific PID name or PID value name can not be processed from a grandMA2 command line.

The following table lists the supported PIDs along with the command line and the parameter value.

The PIDs will be processed only, if the RDM device supports the PID.

| PID name              | PID hex value | PID value name                                                                                                             | PID value hex value                        | Description                                                                                                                                                                   |
| --------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CLEAR\_STATUS\_ID     | 0x0032        | No value.                                                                                                                  | ---                                        | Clears the status message queue.                                                                                                                                              |
| DEVICE\_HOURS         | 0x0400        | 32 bit number.                                                                                                             | ---                                        | Retrieves or sets the number of hours of operation.                                                                                                                           |
| DEVICE\_LABEL         | 0x0082        | ASCII text label. Up to 32 characters.                                                                                     | ---                                        | Provides a means of setting a descriptive label for each device.                                                                                                              |
| DEVICE\_POWER\_CYCLES | 0x0405        | Power Cycle Count (32-bit)                                                                                                 | ---                                        | Retrieves or sets the number of power-up cycles. Some devices may only support the GET\_COMMAND for this operation and not allow the device’s power-up cycles to be set.      |
| DISPLAY\_INVERT       | 0x0500        | Off On Auto                                                                                                                | 0x00 0x01 0x02                             | Retrieves or changes the display invert setting. Invert is often used to rotate the display image by 180 degrees.                                                             |
| DISPLAY\_LEVEL        | 0x0501        | Display Level                                                                                                              | Manufacturer specific. See fixture manual. | Retrieves or changes the display intensity setting.                                                                                                                           |
| DMX\_PERSONALITY      | 0x00E0        | Current Personality # of Personalities                                                                                     | ---                                        | Sets the responder’s DMX512 personality. Many devices such as moving lights have different DMX512 personalities. Many RDM parameters may be affected by changing personality. |
| DMX\_START\_ADDRESS   | 0x00F0        | DMX512 Address (16-bit).                                                                                                   | ---                                        | Sets the DMX512 start address                                                                                                                                                 |
| FACTORY\_DEFAULTS     | 0x0090        | False True                                                                                                                 | 0x00 0x01                                  | Reverts the device to its factory default user settings or configuration.                                                                                                     |
| IDENTIFY\_DEVICE      | 0x1000        | Off, Stop On, Start                                                                                                        | 0x00 0x01                                  | Physically identifies the device represented by the UID.                                                                                                                      |
| LAMP\_HOURS           | 0x0401        | Lamp Hours (32-bit)                                                                                                        | ---                                        | Retrieves the number of lamp hours or to sets the counter to a specific start value.                                                                                          |
| LAMP\_ON\_MODE        | 0x0404        | LAMP\_ON\_MODE\_OFF LAMP\_ON\_MODE\_DMX LAMP\_ON\_MODE\_ON LAMP\_ON\_MODE\_AFTER\_CAL Manufacturer-Specific Modes          | 0x00 0x01 0x02 0x03 0x80 – 0xDF            | Retrieves or changes the current Lamp On Mode. The Lamp On Mode defines the conditions under which a lamp will be struck.                                                     |
| LAMP\_STATE           | 0x0403        | LAMP\_OFF LAMP\_ON LAMP\_STRIKE LAMP\_STANDBY LAMP\_NOT\_PRESENT LAMP\_ERROR Manufacturer Specific States                  | 0x00 0x01 0x02 0x03 0x04 0x7F 0x80 – 0xDF  | Retrieves or changes the current operating state of the lamp.                                                                                                                 |
| LAMP\_STRIKES         | 0x0402        | Lamp Strikes (32-bit)                                                                                                      | ---                                        | Retrieves the number of lamp strikes or to sets the counter to a specific start value.                                                                                        |
| LANGUAGE              | 0x00B0        | 2 character alpha code for ISO 639-1                                                                                       | ---                                        | Changes the language of the messages.                                                                                                                                         |
| PAN\_INVERT           | 0x0600        | Off On                                                                                                                     | 0x00 0x01                                  | Retrieves or changes the pan invert setting.                                                                                                                                  |
| PAN\_TILT\_SWAP       | 0x0602        | Off On                                                                                                                     | 0x00 0x01                                  | Retrieves or changes the pan/tilt swap setting.                                                                                                                               |
| PERFORM\_SELFTEST     | 0x1020        | SELF\_TEST\_OFF Manufacturer Tests SELF\_TEST\_ALL                                                                         | 0x00 0x01 – 0xFE 0xFF                      | Executes any built in self-test routine that may be present.                                                                                                                  |
| POWER\_STATE          | 0x1010        | POWER\_STATE\_FULL\_OFF POWER\_STATE\_SHUTDOWN POWER\_STATE\_STANDBY POWER\_STATE\_NORMAL                                  | 0x00 0x01 0x02 0xFF                        | Retrieves or changes the power state.                                                                                                                                         |
| REAL\_TIME\_CLOCK     | 0x0603        | Year (16-bit), Month, Day, Hour, Minute, Second                                                                            | ---                                        | Retrieves or set the real-time clock in a device.                                                                                                                             |
| RECORD\_SENSORS       | 0x0202        | Sensor Number                                                                                                              | ---                                        | Instructs devices such as dimming racks that monitor load changes to store the current value for monitoring sensor changes.                                                   |
| RESET\_DEVICE         | 0x1001        | Warm Reset Cold Reset                                                                                                      | 0x01 0xFF                                  | Resets the responder.                                                                                                                                                         |
| SENSOR\_VALUE         | 0x0201        | Sensor #, Present Value (16-bit), Lowest Detected Value (16-bit), Highest Detected Value (16-bit), Recorded Value (16-bit) | ---                                        | Retrieves or reset sensor data.                                                                                                                                               |
| TILT\_INVERT          | 0x0601        | Off On                                                                                                                     | 0x00 0x01                                  | Retrieves or changes the tilt invert setting.                                                                                                                                 |

## Options

To get a list all available options to the RdmSetParameter keyword, type in the command line:

\[Channel]> RdmSetParameter /?

The RdmSetParameter has the following options:

| Option     | Option shortcut       | Option value                                                             | Description                                           |
| ---------- | --------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------- |
| multipatch | m                     | 0 = multipatch for all fixtures 1 = multipatch for one fixture and so on | Sets the multipatch index.                            |
| UID        | No shortcut available | e.g. "43500F019FCB"                                                      | Sets the RDM UID to send RDM Parameter to the device. |

## Examples

- To set the DMX start address to 3 of a RDM device, type in the command line:

\[Channel]> RdmSetParameter dmx\_start\_address 3 / UID =  43500F019FCB

---

- To invert the display of a RDM device for the selected fixture, type in the command line:

\[Channel]> RdmSetParameter display\_invert 1
