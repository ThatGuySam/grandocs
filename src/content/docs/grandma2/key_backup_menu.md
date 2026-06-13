---
title: "Using the Backup Menu"
description: "The Backup Menu is where show files are managed. It is also here shows are saves and loaded."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_backup_menu.html"
scrapedAt: "2026-06-12T21:28:06.110Z"
---
The Backup Menu is where show files are managed. It is also here shows are saves and loaded.

## What is show file management

Show file management is the handling of show files. Shows can be saved internally in the console, and there is also the option to save on USB sticks and file servers. Being able to save the show and load it again is a vital part of modern lighting consoles.

Show files can also be deleted to make more room on the hard drive or just to clean the console.

A show file can only be moved forward. A show saved on a USB stick that was programmed in a previous version can be loaded in a newer version. If the show is then re-saved on the stick in this new version, then it cannot be taken back to the old software. If this is important then it is needed to load the show and save it with a new name. Then the old version is not saved as the new version and it can still be accessed by an older version.

## Show file content

The show files contain all the data needed to run the show.

This includes all the Users and User Profiles in the show.

It also contains any 3D models that are used in MA 3D. 

If MA VPUs (= Video Processing Unit) are used, then the programming of the MA VPU is of cause store in the show, but the Media Files are not. Make sure they are backed up on an external device - just in case.

 

## The backup menu and the different tabs

The Backup Menu can be opened by pressing the Backup key or using the dedicated command:

\[Channel]> Menu "Backup"

The Backup Menu is organized in two section. The top section is for manual show file management. The bottom part is the Backup Options.

This is what it could look like:

![](/img/grandma2/menu_backup_v3-3-ffeeb5.png)

_Backup Menu_

The top part have a title bar that shows the file name and saved date of the current show. It also shows the current software version.

There is also the button that can be used to move the menu to a different screen and finally the button to close the menu.

Below this there are different tabs. There is always minimum three called "Internal", "Demoshows" and "Templates". There might be more. Each software version installed will have its own tab. This allows the option to load a show from a previous version. It is not possible to save a show from a newer software version in one of the tabs from previous versions.

If a USB stick is connect to the console/onPC, then it will get its own tab. Select this tab will change the default storage drive to the USB stick. Read the [Using a USB stick](/grandma2/key_backup_menu_usb_stick/) to learn more about specific USB stick handling. 

If a file server is added to the system, then this will also get its own tab. This tab can be selected to save or load shows using the storage space on the server. Read the [Setting up a file server](/grandma2/key_backup_menu_file_server/) to learn more about server setup. 

The selected tab is then the selected "drive" and the location where shows will be saved. The selected drive can also be selected using the command line - it is a command called SelectDrive or just SD - read more about it [here](/grandma2/key_keyword_selectdrive/).  

### Internal

This tab is the hard drive in the console or onPC. 

If you are working on an onPC solution, then the SelectDrive command can be used without setting a drive number to see the storage location in the computer.

The internal drive can do everything except ASCII Show Read.

If the console is updated then the current Internal tab is made a tab with the version number.

A full install that formats the drive will delete all show files and remove all previous version tabs.

### Demoshows

The demo show tab is a read only tab. It is only possible to load shows from the demo tab. It is possible to do a Partial Show Read from the shows in this folder.

If the console is updated, then the shows in this folder will be overwritten.

### Templates

The templates tab functions as the Demoshows with the exception that updating the console software will not overwrite the shows in the tab. A format and install still deletes the shows in this tab!

The idea behind this tab is that a place that have basically the same rig but do many shows, can copy a show with the patch and basic setup in this folder. This can then be loaded and stored as a new show in the Internal tab. Thus protecting the basic show from accidental changes. It is only possible to copy the shows into this tab using a [FTP connection](/grandma2/key_network_ftp/).

### Server tab

If a working connection is set up to a file server, then an extra tab with the defined name will appear. This functions as the internal tab.

This tab is only visible on the console that is the master in the session.

grandMA2 onPC as Master does not support server backup

Read [here](/grandma2/key_backup_menu_file_server/) for more about setting up a File Server.

### USB tabs

When a compatible USB stick is connected, then it gets its own tab named after the name of the USB stick. 

It works as the internal tab with the addition that it is possible to do an ASCII Show Read.

Doing a Quick Save will store the show on the USB stick **and** on the Internal drive.

Read [here ](/grandma2/key_backup_menu_usb_stick/)for more info about USB sticks and what advice and restrictions there might be.

### Version tabs

Previous versions installed on the console or computer will have their own tab. Shows can be loaded and delete in these tabs.

 

## Backup Options

The backup options allows access to setup a file server and activate Auto Save.

The server setup can be complicated, so it has it own help topic - please read about it [here](/grandma2/key_backup_menu_file_server/). 

### Auto Save

Auto Save can be set up to automatically store show file after a certain amount of time. 

The default setting is "Off". The other options are 15, 30, 60 and 120 minutes.

If auto save is activated - by selecting a time interval - then a count down can be seen next to the label.

When the count down reaches Zero, then it will save the show on the selected drive/tab. If a tab is selected that does not allow for saving, then it will save in the Internal drive.

Read the following pages to read about the different operations that can be done in the tabs.

## Subtopics

- [New show](/grandma2/key_backup_menu_new_show/)
- [Load show](/grandma2/key_backup_menu_load_show/)
- [Save show](/grandma2/key_backup_menu_save_show/)
- [Save show as...](/grandma2/key_backup_menu_save_show_as/)
- [Delete shows](/grandma2/key_backup_menu_delete_show/)
- [Using a USB stick](/grandma2/key_backup_menu_usb_stick/)
- [Setting up a file server](/grandma2/key_backup_menu_file_server/)
- [Partial show read](/grandma2/key_backup_menu_partial_show_read/)
- [ASCII show read](/grandma2/key_backup_menu_ascii_show_read/)
- [grandMA2 to grandMA3 show file converter](/grandma2/key_backup_menu_save_as_grandma3/)
