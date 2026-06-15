---
title: "/Type"
description: "To enter the /Type option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_type.html"
scrapedAt: "2026-06-15T18:25:17.412Z"
pagefind: false
---
To enter the **/Type **option keyword in the command line, use one of the options:

- Type **/Type**
- Type the shortcut** /Ty**

## Description

The /Type option keyword can have different values depending on the keyword it is combined with.

The Import keyword and the Export keyword can be both used with the /Type "User" and "System".\
The LoadShow keyword can be used with the /Type "Demo".\
In a nutshell – the Import and the Export keyword both use library files and the LoadShow keyword uses show files. \
The ChangeMulticastBase keyword uses the /Type "Default" and "Alternative".

When importing the desired file may be either a "User" file, which has been previously exported, or a "System" file, which is predefined and included with the system software. If this option is not defined within the import syntax, the console will first search the user library for the specified file name. If the file does not exist within the user library, the console will then search within the system files.

- **/Type "User"** restricts the console to only search within the user library of the selected drive.

- **/Type "System"** restricts the console to only search within the system files, ignoring the user library.

- **/Type "Demo"** restricts the console to only search within demo shows folder.

- **/Type "Template"** restricts the console to only search within the template shows folder.

- **/Type "NoReference"** deletes all objects that do not have any reference in the specified range. For example, "NoReference" will delete presets that are not used in cues or recipes.

- **/Type "Recipe"** deletes recipes in the specified object that do not generate output.

- **/Type "Default"** uses the default address of multicast base.

- **/Type "Alternative"** uses a different address should the default address cause any problems within the network environment. For more information see [Protocol Details](/grandma3/2-3/network_design_protocols/). 

- **/Type "GridPosition"** removes gaps in grid positions and resets the offset to origin in groups. It can only be used with the [CleanUp keyword](/grandma3/2-3/keyword_cleanup/).
