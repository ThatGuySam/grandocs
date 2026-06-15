---
title: "Update the Software"
description: "Every grandMA3 device is delivered with the latest version of the grandMA3 software."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/update.html"
scrapedAt: "2026-06-15T18:25:38.253Z"
pagefind: false
---
Every grandMA3 device is delivered with the latest version of the grandMA3 software.

All devices in a network with software versions higher than 1.0 can see and update each other.

This is to give you information on how to update or downdate the grandMA3 software if needed. For more information, see [Network Update](/grandma3/2-3/update_network/).

To check which version your device is currently running, use the [Version keyword](/grandma3/2-3/keyword_version/) in the command line (does not work with PUs and Nodes).

## Check for Updates and Download the Latest Version

To check if there is a new grandMA3 software update:

1. Go to [www.malighting.com](https://www.malighting.com/), click **Downloads. **

![](/img/grandma3/2-3/img_downloads_v2-2-092cc8.png)

Website malighting.com Downloads

2. Click **grandMA3** in the bar on the left.

![](/img/grandma3/2-3/img_downloads_2_v2-2-75664c.png)

grandMA3 section

3. Click **Software + Release Notes** to find the latest software version.

![](/img/grandma3/2-3/img_downloads_3_v2-3-cf3158.png)

grandMA3 Software section

4. Click the current version to download the desired installation package. The download process starts.

## Available Installation Packages

There are six installation packages available, as shown in the table below:

| Software / Package                                                                                              | Device                                                                                                            |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| grandMA3 Software x.x.x.x / grandMA3\_stick\_vx.x.x.x.zip                                                       | Console, RPU, processing unit, xPort Node, and I/O Node                                                           |
| grandMA3 onPC Software x.x.x.x for windows / grandMA3\_onPC\_win\_vx.x.x.x.zip                                  | Windows operating systems, e.g., PC or laptop, command wing XT, rack-unit, viz-key                                |
| grandMA3 onPC Software x.x.x.x for macOS / grandMA3\_onPC\_mac\_vx.x.x.x.zip                                    | macOS                                                                                                             |
| grandMA3 Software x.x.x.x for grandMA3 viz-key, grandMA3 net duct / grandMA3\_viz\_key\_net\_duct\_vx.x.x.x.zip | viz-key only, grandMA3 net duct                                                                                   |
| grandMA3 Full Package / grandMA3\_vx.x.x.x\_full\_package.zip                                                   | Contains all the installation packages listed above (\_stick, \_onPC\_win, \_onPC\_macOS, \_viz\_key\_net\_duct)  |
| grandMA3 onPC Windows Hardware Image x.x.x.x / grandMA3\_Windows\_Hardware\_Image\_vx.x.x.x.zip                 | Windows system recovery of command wing XT and rack-unit, including grandMA3 onPC                                 |

|                                                  |                                                                                                                                                 |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                  |
|                                                  | For network updates, the target software installation package must also be downloaded. For example, when updating a console via grandMA3 onPC.  |

## Store the Installation Packages 

All files for each device type are included in the corresponding zip-file.

To update the software via network from an onPC station:

1. Open the installation package zip-file. 
2. Open the ma folder:

- For Windows systems, copy the files from the ma folder into the directory C:\ProgramData\MALightingTechnology\installation\_packages.
- For macOS systems, copy the files from the ma folder into the directory \~/MALightingTechnology/installation\_packages.

To create a USB flash drive containing all the installation files, see [Update grandMA3 Consoles](/grandma3/2-3/update_consoles/).

- For information about windows grandMA3 onPC installation, see [Windows™® Installation](/grandma3/2-3/onpc_windows_installation/).
- For information about macOS grandMA3onPC installation see [macOS® Installation](/grandma3/2-3/onpc_macos_installation/).

Follow all the onscreen instructions that appear during the update.

## Download an Older Version

To downdate a grandMA3 device to an older software version, e.g. in a permanent installation, follow these steps:

1. Follow steps 1 through 3 above. 
2. Scroll down and click **Archive** to find older software versions.

![](/img/grandma3/2-3/img_downloads_archive_v2-3-79db02.png)

grandMA3 Software archive

To open the folder, click the desired version, e.g. Version 2.1.1.2.

![](/img/grandma3/2-3/img_downloads_archive_files_v2-3-55c369.png)

grandMA3 Software archive versions

The download process starts.

#### Subtopics* [Update grandMA3 Consoles](/grandma3/2-3/update_consoles/)
* [Update grandMA3 Nodes](/grandma3/2-3/update_nodes/)
* [Update grandMA3 onPC Windows Hardware](/grandma3/2-3/update_windows_hardware/)
* [Update grandMA3 viz-key](/grandma3/2-3/update_viz_key/)
* [Network Update](/grandma3/2-3/update_network/)
* [grandMA3 net duct](/grandma3/2-3/update_net_duct/)
* [Delete Update Files](/grandma3/2-3/update_delete_files/)
* [Troubleshooting Update Process](/grandma3/2-3/update_troubleshooting/)
