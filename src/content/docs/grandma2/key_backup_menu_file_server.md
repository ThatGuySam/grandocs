---
title: "Setting up a file server"
description: "The session Master can be connected to a file server in the network."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_backup_menu_file_server.html"
scrapedAt: "2026-06-12T21:28:06.091Z"
---
The session **Master** can be connected to a file server in the network.

There are three different server systems that can be use. Each type is described below.

Generally you need to tap the Setup Server button in the **Backup Menu**. Then select the type wanted in the drop down menu called "Connection Type".

If the console succeeds connecting to the server, then it will create a new tab with the label you provide in the setup (read below).

**Restriction:**\
grandMA2 onPC cannot be a session Master and connect to a server.

**Restriction:**\
Consoles needs enough free memory to mount a file server. It will most likely not be able to successfully connect using a console with only 2GB RAM.

**Restriction:**\
The server tab is only available for the master in the session.

## FTP

In the FTP setup you need to connect to a FTP server (using port 21).

The pop-up looks like this (empty):

![](/img/grandma2/popup_file-server_ftp_v3-2-967d55.png)

_File Server Configuration pop-up - FTP mode_

Here you need to fill out the green input fields. The following is a short description of the different fields.

**Label:**

This is the text written on the tab used to select the server as a location or "drive".

**Server Name/IP:**

This is the name or IP address of the server.

**Subdirectory:**

Here it is possible to add a subdirectory in the server location. Leave it empty to use the location chosen in the server. Inside this location there will be created a gma2 folder and several folders will be create inside this. It is just like using a USB memory stick.

**Username:**

It is recommended to have a username and password on the FTP server. This input field can be used to write the username.

**Password:**

This field is to write the password for the FTP server.

 

When all fields are filled out correctly, then tap the Please button. If the console can mount/connect to the server, a new tab will appear in the Backup Menu and other places where it is possible to select a tab to store or export/import objects.

 

## Shared Folder (windows)

The Shared Folder option for windows.

A folder on the Windows computer needs to be shared for this to work. It is a good idea to have this folder on the primary drive on the computer

The File Server Configuration pop-up looks like this (empty):

![](/img/grandma2/popup_file-server_shared-folder_v3-2-5812d8.png)

_File Server Configuration pop-up - Shared Folder mode_

Many of the input fields are the same as in the FTP setup - read above for the description.

The "Subdirectory" is however replaced with "Sharename". Here you need to input the folder name. The location of the shared folder is also needed if it is not directly in the root of the hard drive.

When you are happy with your setting, then tap Please to mount the server. If successful then a tab will appear with the label specified.

 

## NFS

The NFS file share system was developed by Sun Microsystems. It is mostly used in Unix and Unix-like (For instance Linux) operating system.

There are less input fields with NFS. The pop-up looks like this (empty):

![](/img/grandma2/popup_file-server_nfs_v3-2-654547.png)

_File Server Configuration pop-up - NFS mode_

The **Label** and **Server Name/IP** are the same as above.

The special input field for NFS is **NFS Export Path**. It is the path or directory in your server where the files will be stored.

When you are happy with your setting, then tap Please to mount the server. If successful then a tab will appear with the label specified.
