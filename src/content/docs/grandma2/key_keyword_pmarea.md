---
title: "PMArea"
description: "To get the PMArea (= Pixel Mapper Area) keyword in the command line, type PMArea or the shortcut PMn the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_pmarea.html"
scrapedAt: "2026-06-12T21:27:57.878Z"
---
To get the PMArea (= Pixel Mapper Area) keyword in the command line, type **PMArea** or the shortcut **PM** in the command line.

## Description

The PMArea keyword is an object keyword to access pixel mapper areas and pixel mapper outputs. You can store, copy, and delete pixel mapper setups. For more information, see [MA VPU pixel mapper](/grandma2/key_keyword_vpupixelmapperview/).

The default function for the PMArea keyword is SelFix. For more information, see [SelFix keyword](/grandma2/key_keyword_selfix/).

## Syntax

\[Store / Copy / Delete] PMArea \[pixel mapper area ID].\[pixel mapper output ID] / \[option]

Assign PMArea \[pixel mapper area ID].\[pixel mapper output ID] / \[parameter] = \[parameter value]

## Options

To get a list of all available options to the PMArea keyword, type in the command line:

\[Channel]> PMArea /?

| Option                                   | Option Shortcut       | Option Value                                           | Description                                                                     |
| ---------------------------------------- | --------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------- |
| merge                                    | m                     | no option value                                        | Adds to the existing content. By default, the 3D coordinates will be used.      |
| overwrite                                | o                     | no option value                                        | Replace the existing content. By default, the 3D coordinates will be used.      |
| remove                                   | r                     | no option value                                        | Removes the selected content.                                                   |
| autoalign                                | aa                    | no option value                                        | Ignores the 3D position data and stores as a matrix (equal to the layout view). |
| x (only if the option autoalign is used) | no shortcut available | 1.000...500.000                                        | Defines the position of the x axis in the pixel mapper area.                    |
| y (only if the option autoalign is used) | no shortcut available | 1.000...500.000                                        | Defines the position of the y axis in the pixel mapper area.                    |
| axis                                     | no shortcut available | All possible combination with + and -, e.g. +x+y, +x+z | Defines the horizontal and vertical axis.                                       |
| 3dcoordinates                            | no shortcut available | no option value                                        | Uses the 3D position coordinates of the fixture. See Patch & Fixture Schedule.  |
| noconfirm                                | nc                    | no option value                                        | Suppress the storing output pop-up.                                             |

## Parameter

The following table displays the assignable parameter for **pixel mapper areas** via command line.

| Parameter | Parameter Value | Description                                  |
| --------- | --------------- | -------------------------------------------- |
| Name      | "Area 1"        | Assign the pixel mapper area name.           |
| DimX\[m]  | 1.000...500.000 | Assign the dimension of the x axis in meter. |
| DimY\[m]  | 1.000...500.000 | Assign the dimension of the y axis in meter. |

The following table displays the assignable parameter for **pixel mapper outputs** via command line.

| Parameter                                             | Parameter Value                                   | Description                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name                                                  | "Output 1"                                        | Assign the pixel mapper output name.                                                                                                                                                                                                                                                                                                                               |
| RenderIP                                              | "192.168.0.4"                                     | Assign the VPU IP address.                                                                                                                                                                                                                                                                                                                                         |
| Camera                                                | "Camera 4"                                        | Assign one of the patched cameras.                                                                                                                                                                                                                                                                                                                                 |
| ResX\[Px]                                             | 1...4096                                          | Assign the resolution of the x axis in pixel.                                                                                                                                                                                                                                                                                                                      |
| ResY\[Px]                                             | 1...4096                                          | Assign the resolution of the y axis in pixel.                                                                                                                                                                                                                                                                                                                      |
| VirtOut                                               | "None", "Virtual Output 1"... "Virtual Output 16" | Assign if the camera, and resolution in pixel should be use for a virtual output.                                                                                                                                                                                                                                                                                  |
| Protocol                                              | "Art-Net", "sACN", "MA-Net2"                      | Assign the protocol.                                                                                                                                                                                                                                                                                                                                               |
| Priority                                              | "Super", "Swp", "HTP", "High", "LTP", "Low"       | Assign the pixel mapper priority.                                                                                                                                                                                                                                                                                                                                  |
| Art-NetMode (only if the protocol is Art-Net)         | "Broadcast", "Unicast", "Auto"                    | Assign the Art-Net mode.                                                                                                                                                                                                                                                                                                                                           |
| Art-NetStartAddress (only if the protocol is Art-Net) | 1...128 : 0..F : 0..F                             | Assign the Art-Net start address.                                                                                                                                                                                                                                                                                                                                  |
| sACNMode (only if the protocol is sACN)               | "Multicast", "Unicast"                            | Assign the sACN mode.                                                                                                                                                                                                                                                                                                                                              |
| sACNVersion (only if the protocol is sACN)            | "Final", "Draft"                                  | Assign the sACN version.                                                                                                                                                                                                                                                                                                                                           |
| sACNPriority (only if the protocol is sACN)           | 0...200                                           | Assign the priority. The highest number has the highest priority.                                                                                                                                                                                                                                                                                                  |
| sACN TTL (only if the protocol is sACN)               | 0...255                                           |  TTL = Time to liveAssign the number of routers (hops) that multicast traffic is permitted to pass through before expiring on the network. For each router (hop), the original specified TTL is decremented by one (1). When its TTL reaches a value of zero (0), each multicast datagram expires and is no longer forwarded through the network to other subnets. |
| sACN Start (only if the protocol is sACN)             | 0...63999 or "Original"                           | Assign the sACN universe. Original uses the same as patched.                                                                                                                                                                                                                                                                                                       |
| Delay(ms) (only if the protocol is sACN or Art-Net)   | 0.000...2.500                                     | Assign the packet delay.                                                                                                                                                                                                                                                                                                                                           |
| FrameDelay (1/30s)                                    | 0...8                                             | Assign the frame delay.                                                                                                                                                                                                                                                                                                                                            |

## Examples

- To store the selected fixtures in the existing pixel mapper area 1 output 2 with a horizontal +x axis and a vertical +z axis, type in the command line:

\[Channel]> Store PMArea 1.2 /axis=+X+Z /noconfirm

---

- To assign the pixel mapper area 1 the name "Sunstrips", type in the command line:

\[Channel]> Assign PMArea 1 /name="Sunstrips"
