---
title: "NewShow"
description: "To get the NewShow keyword in the command line, type NewShown the command line or use the shortcut New."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_newshow.html"
scrapedAt: "2026-06-12T21:27:56.832Z"
---
To get the NewShow keyword in the command line, type **NewShow** in the command line or use the shortcut **New**.

## Description

The NewShow keyword is a function keyword to create new shows.

## Syntax

**NewShow "**Showname" / \[Option]

## Options

To get a list all available options to the NewShow keyword, type in the command line:

\[Channel]> NewShow /?

The NewShow keyword has the following options:

| Option         | Option shortcut       | Description                                                                                                                   |
| -------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| full           | f                     | Clears the: - Show data - Global Settings - Network Protocols - User Profiles - Time Config - Local Settings - Network Config |
| globalsettings | g                     | Clears the global settings.                                                                                                   |
| localsettings  | l                     | Clears the local settings.                                                                                                    |
| network        | n                     | Clears the network config.                                                                                                    |
| noconfirm      | nc                    | Suppress the warning pop-up that asks if you want to save the show file first.                                                |
| nodata         | No shortcut available | Keeps the current show data in the new show (column one in the setup).                                                        |
| nosave         | ns                    | Does not save the current show file.                                                                                          |
| protocols      | p                     | Clears the network protocols.                                                                                                 |
| save           | s                     | Saves the current show file.                                                                                                  |
| timeconfig     | t                     | Clears the time config.                                                                                                       |
| user           | u                     | Clears the user profiles.                                                                                                     |

 

## Examples

- To create a new show file with the file name "Macbeth", type in the command line:

\[Channel]> NewShow "Macbeth"

 

- To create a new show file with the file name "Macbeth" and clear the\
  \- Show data\
  \- Global Settings\
  \- Network Protocols\
  \- User Profiles\
  \- Time Config\
  \- Local Settings\
  \- Network Config ,\
  type in the command line:

\[Channel]> NewShow "Macbeth" /full
