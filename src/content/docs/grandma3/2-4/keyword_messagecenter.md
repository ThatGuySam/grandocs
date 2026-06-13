---
title: "MessageCenter"
description: "To enter the MessageCenter keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_messagecenter.html"
scrapedAt: "2026-06-12T21:24:32.017Z"
---
To enter the MessageCenter keyword in the command line, use one of the options:

- Type **MessageCenter**
- Type the shortcut **Mes**

## Description

The MessgeCenter keyword is an object keyword which is used to address the message center.

Syntax

Call MessageCenter (\["Category.Priority"])

## Examples

- To confirm all messages in the message center, type:

|                                                                    |                                        |
| ------------------------------------------------------------------ | -------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Call MessageCenter |

 

- To confirm all messages of the priority Error in MA-Net, type:

|                                                                    |                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Call MessageCenter "MA-Net.Errors" |

- To confirm all messages of the category Warning, type:

|                                                                    |                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Call MessageCenter ".Warning" |

- To confirm all messges of the category Power and of the priority Error, type:

|                                                                    |                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Call MessageCenter "Power.Error" |

- To confirm all messages of the category Power, type:

|                                                                    |                                                 |
| ------------------------------------------------------------------ | ----------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Call MessageCenter "Power." |
