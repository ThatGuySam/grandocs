---
title: "Screenshots"
description: "Screenshots can be created by pressing the Print Screen key or the shortcut F11 on a built-in or external keyboard. A green flash on all screens indicates that "
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/screenshot.html"
scrapedAt: "2026-06-15T18:25:23.047Z"
pagefind: false
---
Screenshots can be created by pressing the Print Screen key or the shortcut F11 on a built-in or external keyboard. A green flash on all screens indicates that the screenshot has been taken.

An image from each screen is stored as an individual PNG file in the image folder. The file names are generated using this template: YYYYMMDD\_hhmmss\_displayX.png

The images can be imported into the [image pool](/grandma3/2-3/images/) or copied from a console using an SFTP connection. For more information, see [Networking ─ SFTP connection](/grandma3/2-3/fm_sftp/).

|                                                    |                                                        |
| -------------------------------------------------- | ------------------------------------------------------ |
| ![](/img/grandma3/2-3/restriction_gray-3bb57e.png) | **Restriction:**                                       |
|                                                    | There is no keyword or command to create screenshots.  |

## Storing Screenshots on a USB Stick

Screenshots can be stored on a USB memory stick. They are stored as PNG files.

The USB needs to be the selected drive when Print Screen is pressed.

A list of the drives can be seen in the [Command Line History window](/grandma3/2-3/ws_ui_command_line/) by running the following command:

|                                                                    |                                |
| ------------------------------------------------------------------ | ------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>List Drive |

It is drive number two if no other USB devices are connected.

Select the drive using this syntax: Select Drive \[drive\_number]

Now press Print Screen.

Bring the USB to a computer. Screenshots are saved to the **/gma3\_library/media/images** folder. On USB drives, the **gma3\_library** folder is located in the **grandMA3** folder.

## Copy Screenshots using SFTP

When accessing the console's internal drive using SFTP, the **gma3\_library** folder is located at the root of the visible folder structure.

Open an [SFTP connection](/grandma3/2-3/fm_sftp/), navigate to the images folder, and copy the relevant files from the console.

For more information on folder structure, see the [Folder Structure](/grandma3/2-3/fm_folder_structure/) topic.
