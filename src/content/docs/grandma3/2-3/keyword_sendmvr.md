---
title: "SendMVR"
description: "To enter the SendMVR keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_sendmvr.html"
scrapedAt: "2026-06-15T18:25:10.661Z"
pagefind: false
---
To enter the SendMVR keyword in the command line, use one of the options:

- Type **SendMVR**
- Type the shortcut **Sendmv**

## Description

The keyword SendMVR can be used to commit and request MVR files, or to join and leave the connection to other devices during MVR-xchange.

## Syntax

**SendMVR \["Connection\_Type"] \["Number]**

SendMVR "Commit" \["Path\_to\_Folder/Name"] \["Name"]

****

## Examples

- To establish a connection to the third service device, type:

|                                                                    |                                        |
| ------------------------------------------------------------------ | -------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>SendMVR "Join" "3" |

 

- To end connection to the the first service device, type:

|                                                                    |                                         |
| ------------------------------------------------------------------ | --------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>SendMVR "Leave" "1" |

- To commit the MVR file "BestShow\.mvr" (which is located on C:\ProgamData\MA Lighting Technology\gma3\_library\mvr) to the MVR-xchange group, type:

|                                                                    |                                                                                                                    |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>SendMVR "Commit" "C:\ProgramData\MA Lighting Technology\gma3\_library\mvr\BestShow" "BestShow" |

- To request the second file, type:

|                                                                    |                                           |
| ------------------------------------------------------------------ | ----------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>SendMVR "Request" "2" |
