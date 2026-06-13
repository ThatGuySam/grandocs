---
title: "Export by using command line"
description: "It is possible to use the Command Line to export all objects. For more information about the keyword and syntax, see the Export keyword topic."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_ei_export_commandline.html"
scrapedAt: "2026-06-12T21:28:25.566Z"
---
It is possible to use the **Command Line** to export all objects. For more information about the keyword and syntax, see the [Export keyword](/grandma2/key_keyword_export/) topic.

 

## Example 1

The **Command Line** syntax to export group 1 thru 4 to a file named Front\_groups.xml

\[Channel]> Export Group 1  Thru 4 "Front\_groups"

## Example 2

The **Command Line** syntax to export a User Profile named Designer and overwrite the existing Designer.xml file

\[Channel]> Export UserProfile "Designer" /Overwrite

 

## Export objects to a USB stick

To export objects to a USB stick, in this example a color,  a USB stick has to be plugged in the console or onPC. A Command Line Feedback window has to be open.

### Steps:

1. To find the drive to export the objects to, type "SelectDrive" in the Command Line. The Command Line Feedback displays a list of the available  drives.
2. \[Channel]> SelectDrive
3. Select the USB stick (it might be number four), typing "SelectDrive 4". Drive number 4 is now the default drive.
4. \[Channel]> SelectDrive 4
5. Export the color named cyan.
6. \[Channel]> export preset 4 "Cyan"
