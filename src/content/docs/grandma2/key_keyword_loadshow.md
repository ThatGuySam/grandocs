---
title: "LoadShow"
description: "To go to the LoadShow keyword, type LoadShowr the shortcut Loan the command line."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_loadshow.html"
scrapedAt: "2026-06-12T21:27:54.760Z"
---
To go to the LoadShow keyword, type **LoadShow** or the shortcut **Loa** in the command line.

## Description

The LoadShow keyword loads a show from the selected drive. For more information, see [SelectDrive keyword](/grandma2/key_keyword_selectdrive/).

If the show file does not exist on the selected drive, a new empty show file will be loaded.

If the console is in a session, the show file will be uploaded to all connected stations.

The LoadShow keyword is a function keyword.

## Syntax

**LoadShow "**Showname" / \[Option]

## Options

To get a list all available options to the LoadShow keyword, type in the command line:

\[Channel]> LoadShow /?

The LoadShow has the following options:

| Option         | Option shortcut       | Description                                                                                                                                                                                                                                      |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| full           | f                     | Clears the following data if from a new show will be loaded. Loads the following data if from an existing show will be loaded. - Show data - Global Settings - Network Protocols - User Profiles - Time Config - Local Settings - Network Config |
| globalsettings | g                     | Clears the global settings if from a new show will be loaded. Loads the global settings if from an existing show will be loaded.                                                                                                                 |
| localsettings  | l                     | Clears the local settings if from a new show will be loaded. Loads the local settings if from an existing show will be loaded.                                                                                                                   |
| network        | n                     | Clears the network configuration if from a new show will be loaded. Loads the network configuration if from an existing show will be loaded.                                                                                                     |
| noconfirm      | nc                    | Suppress the warning pop-up that asks if you want to save the show file first.                                                                                                                                                                   |
| nodata         | No shortcut available | Keeps the current show data in the new show (column one in the setup).                                                                                                                                                                           |
| nosave         | ns                    | Does not save the current show file.                                                                                                                                                                                                             |
| protocols      | p                     | Clears the network protocols if from a new show will be loaded. Loads the network protocols if from an existing show will be loaded.                                                                                                             |
| save           | s                     | Saves the current show file.                                                                                                                                                                                                                     |
| timeconfig     | t                     | Clears the time config.                                                                                                                                                                                                                          |
| user           | u                     | Clears the user profiles.                                                                                                                                                                                                                        |

##  Examples

- To load the show file with the file name "Macbeth", type in the command line:

\[Channel]> LoadShow "Macbeth"

 

- To load the show file with the file name "Macbeth" and clear the\
  \- Show data\
  \- Global Settings\
  \- Network Protocols\
  \- User Profiles\
  \- Time Config\
  \- Local Settings\
  \- Network Config ,\
  type in the command line:

\[Channel]> LoadShow "Macbeth" /full
