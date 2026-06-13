---
title: "DeleteShow"
description: "DeleteShows a function used to remove show files from hard drives."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_deleteshow.html"
scrapedAt: "2026-06-12T21:27:48.181Z"
---
**DeleteShow** is a function used to remove show files from hard drives.

To execute this keyword type **DeleteShow** or the shortcut **DeleteS** into the command line. 

## Syntax

DeleteShow \[filename]

DeleteShow \[filename] /noconfirm

DeleteShow \[filename] /backup

DeleteShow \[filename] /show

##  

## Options

To get a list of all options available for the keyword **DeleteShow** in the command line feedback window type the following into the command line.

\[Channel]> DeleteShow /?

The keyword **DeleteShow** has the following options:

| Option    | Shortcut | Option value    | Description                              |
| --------- | -------- | --------------- | ---------------------------------------- |
| backup    | b        | no option value | Deletes backup files ending in .backup.  |
| show      | s        | no option value | Deletes show files ending in .show\.gz.  |
| noconfirm | nc       | no option value | Suppresses confirmation pop-up.          |

 

This function deletes show files on the currently selected hard drive. Use wildcards (\*) in filename to delete multiple files. If /noconfirm option is included, the deletion of each file needs to be confirmed. To avoid constant confirmation add "nonconfirm" at the end of the command.

## Example:

 

\[Channel]> DeleteShow /backup

 

The corresponding shortcut

 

\[Channel]> DeleteShow /b

Deletes show file backups only (file ending .backup).

##  

\[Channel]> DeleteShow /show

 

The corresponding shortcut

 

\[Channel]> DeleteShow /s

Deletes show files only (file ending .show\.gz).
