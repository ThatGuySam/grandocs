---
title: "Screenshots"
description: "Screenshots can be created by pressing the Print Screen key or the shortcut F11 on a built-in or external keyboard. A green flash on all screens indicates that "
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/screenshot.html"
scrapedAt: "2026-06-12T21:24:50.253Z"
---
Screenshots can be created by pressing the Print Screen key or the shortcut F11 on a built-in or external keyboard. A green flash on all screens indicates that the screenshot has been taken.

An image from each screen is stored as an individual PNG file in the image folder. The file names are generated using this template: YYYYMMDD\_hhmmss\_displayX.png

Images can be imported into the [image pool]() or copied from a console via an SFTP connection. For more information, see [Networking ─ SFTP connection](/grandma3/2-4/fm_sftp/).

---

## Storing Screenshots on a USB Stick

Screenshots can be stored on a USB memory stick. They are stored as PNG files.

The USB drive needs to be the selected drive when the Print Screen key is pressed.

A list of the drives can be seen in the [Command Line History window](/grandma3/2-4/ws_ui_command_line/) by running the following command:

|                                                                    |                                |
| ------------------------------------------------------------------ | ------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>List Drive |

It is drive number two if no other USB devices are connected.

Select the drive using this syntax: Select \["Drive\_Name" or Drive\_Number]

Now press Print Screen.

Bring the USB to a computer. Screenshots are saved to the **/gma3\_library/media/images** folder. On USB drives, the **gma3\_library** folder is located in the **grandMA3** folder.

## Copy Screenshots using SFTP

When accessing the console's internal drive using SFTP, the **gma3\_library** folder is located at the root of the visible folder structure.

Open an [SFTP connection](/grandma3/2-4/fm_sftp/), navigate to the images folder, and copy the relevant files from the console.

For more information on folder structure, see the [Folder Structure](/grandma3/2-4/fm_folder_structure/) topic.

---

Screenshots of views and NDI streams can be stored directly as images. For more information about NDI Streams, see [Video](/grandma3/2-4/videos/).

To store screenshots and NDI stream as an image:

Use the [/Screen](/grandma3/2-4/ok_screen/) or [/NDI](/grandma3/2-4/ok_ndi/) option keyword in combination with the [Store](/grandma3/2-4/keyword_store/) and [Image](/grandma3/2-4/keyword_image/) keywords.

The [/ScreenOnly](/grandma3/2-4/ok_screenonly/) option keyword allows to define which part of the screen will be used.

- /ScreenOnly "Yes"

The screenshot only includes the user-definable area. This is the default, or if /ScreenOnly is not defined.

- /ScreenOnly "No"

The entire screen, including the view bar, encoder bar, and other elements, is used to take the screenshot.

To store a screenshot of screen 1 as image 5 of the area that can be defined by the user, type:

|                                                                    |                                                 |
| ------------------------------------------------------------------ | ----------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Image 3.5 /Screen "1" |
