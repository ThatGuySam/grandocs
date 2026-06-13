---
title: "FTP connection to console and NPU"
description: "The consoles and the grandMA2 NPU can be accessed using a FTP client program."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_network_ftp.html"
scrapedAt: "2026-06-12T21:28:08.838Z"
---
The consoles and the grandMA2 NPU can be accessed using a FTP client program.

One such program could be FileZilla Client from the FileZilla Project (external link to internet webpage).

The FTP client needs to be installed on a computer in the same network as the console or NPU.

To access the console or NPU, the IP address of the device is needed. A user name and password is also required. Both username and password is: **data**.

**WARNING:**\
Be very careful making any changes in the folders or files. This is direct access into the device. Deleting or moving files may cause serious harm to the device.

Once the connection is made, it is possible to browse through the folders inside the device. The first level of folders should look something like this:

![](/img/grandma2/img_ftp_main-folder_v3-3-1a31c8.png)

_FTP main folders_

If the device has been updated, then there might be several version folders.

Most often the needed folder are found in the currently installed and active running software. These folders can be accessed using the "actual" link. This will give access to a new folder called **gma2**.

Accessing this folder will give access to the folders and files that constitutes the grandMA2. The first few of these folders could look like this:

![](/img/grandma2/img_ftp_gma-folder_v3-3-1a43a7.png)

_gMA2 folders_

Some off these folders are also present on a USB stick if it has been used to save a show.

There are many folders here that gives access to many of the elements that the grandMA2 software uses.

 

## Show folder

The folder called "shows" contain all the show files save in this version of the software. If show files from a previous software is needed, then you will need to navigate to the correct version folder and find the show folder in that version.

 

## Template show folder

The Template show folder is found in the first layer of folders. Show files can be copied to this folder. Show files in this folder are read only, and cannot be overwritten. They can be loaded from the grandMA2 software and stored as a new show either internal or on a USB stick.

Then only way to get show files into the template folder is using FTP access.

The template folder is not overwritten when the device is updated. It is only overwritten when a Full Install is performed.

 

## Import Export

If something is exported using the Export keyword, then it most often ends up in the "importexport" folder.

Depending on what it is it might end up in the "macro" folder or the "fixture\_layers" folder.

The internal fixture library are found in the "library" folder.

 

## Crashlogs

It can happen that a device crashes. If this should happen then a crashlog is written and stored in the "temp" folder.

On the consoles it is also possible to get these crash logs using the [CrashLogCopy](/grandma2/key_keyword_crashlogcopy/) keyword. This is not possible on the NPUs.

 

## Screenshots

It is possible to make a screenshot of the last touched screen by pressing the Prt Scr key on the keyboard. The screenshots are stored in the "temp" folder. It is a gz compressed tga file. It needs to be uncompressed before it can be opened.
