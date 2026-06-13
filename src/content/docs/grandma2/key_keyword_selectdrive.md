---
title: "SelectDrive"
description: "To get the SelectDrive keyword in the command line, type SelectDrive or the shortcut SD in the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_selectdrive.html"
scrapedAt: "2026-06-12T21:28:00.773Z"
---
To get the SelectDrive keyword in the command line, type **SelectDrive** or the shortcut **SD** in the command line.

## Description

The SelectDrive keyword select the drive in the [Backup Menu](/grandma2/key_backup_menu/), for the following functions:

- [SaveShow](/grandma2/key_keyword_saveshow/)
- [LoadShow](/grandma2/key_keyword_loadshow/)
- [Import](/grandma2/key_keyword_import/)
- [Export](/grandma2/key_keyword_export/)

If the SelectDrive keyword is executed standalone, the available showfile drives, mounted USB-sticks and earlier software installations will be listed along with their ID in the command line feedback window.

If a read only media (like older installations) is selected, write functions will change the selected drive to 1 (Internal).

The SelectDrive keyword is a function keyword.

## Syntax

SelectDrive \[ID]

## Examples

- Display all available drives in the command line feedback window.

\[Channel]> SelectDrive

 

- Load demoshow "demo dimmer and more".

\[Channel]> SelectDrive 2; LoadShow "demo dimmer and more"
