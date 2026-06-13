---
title: "Troubleshooting Update Process"
description: "During the update process, different problems may occur."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/update_troubleshooting.html"
scrapedAt: "2026-06-12T21:25:11.008Z"
---
During the update process, different problems may occur.

## Corrupted Files on USB Flash Drive

![](/img/grandma3/2-4/img_mode2_xportnode_package-corrupted_v3-5_1-7b1c3f.png)

_Corrupted installer package_

If the installer package is corrupted, try the following:

- Remove the USB flash drive from the grandMA3 device.
- Shut down the grandMA3 device.
- Format the USB flash drive (FAT32).
- Copy the folders EFI, ma, and the update.scr file into the root directory of your USB flash drive. 
- Update the grandMA3 device with the USB flash drive.

If the error message shows up again, try the following:

- Use a different USB flash drive.
- Format the USB flash drive (FAT32).
- Start a new download of the latest software version from www\.malighting.com.
- Extract the zip file before copying the folders EFI, ma, and the update.scr file into the root directory of your USB flash drive.

## Corrupted Show File

If the grandMA3 device does not stop updating, the show file saved on the grandMA3 device may be corrupted.

If the show file is corrupted, try the following:

- Remove the USB flash drive from the grandMA3 device.
- Reboot the grandMA3 device.
- Save the corrupted show file to another USB flash drive.
- Delete the corrupted show file from the grandMA3 device.
- Update the grandMA3 device with the other USB flash drive.

## Unrecognized USB Flash Drive

- Make sure to follow the sequence for connecting the USB flash drive as described in [Update grandMA3 Consoles](/grandma3/2-4/update_consoles/#h2__1509860294).

## Failures during the Update Process

If the grandMA3 device starts updating, but fails to update one of the hardware sections, try the following:

- Remove the USB flash drive from the grandMA3 device.
- Reboot the grandMA3 device.

If the measures above do not help, try the following:

- Save any show file to another USB flash drive.
- Delete any show file from the grandMA3 device.
- Update the grandMA3 device with the other USB flash drive.

To avoid failure when updating grandMA3 Nodes, make sure you use a USB flash drive that meets the USB, USB 2.0, or USB 3.0 standard.
