---
title: "Copy"
description: "To enter the Copy keyword in the command line, use one of these options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_copy.html"
scrapedAt: "2026-06-15T18:24:58.950Z"
pagefind: false
---
To enter the Copy keyword in the command line, use one of these options:

- Press Copy
- Type **Copy**
- Type the shortcut **Co**

## Description

The Copy keyword** **is a function keyword which is used to create copies of an object.

If no object type is given and the command line destination is root (no destination), the default object type **–** **Cue – ** is used for this function.

## Syntax

Copy \[Object] \["Source\_Name" or Source\_Number] At \["Destination\_Name" or Destination\_Number] (/Option)

**Copy \[Object] \["Source\_Name" or Source\_Number] (/Option)**

## Option Keywords

The Copy keyword uses the following option keywords:

- [/CopyCueDestination](/grandma3/2-3/ok_copycuedestination/)
- [/CopyCueSource](/grandma3/2-3/ok_copycuesource/)
- [/Default](/grandma3/2-3/ok_default/)
- [/Merge](/grandma3/2-3/ok_mergehightpriority/)
- [/NoConfirmation](/grandma3/2-3/ok_noconfirmation/)
- [/Overwrite ](/grandma3/2-3/ok_overwrite/)
- [/Release](/grandma3/2-3/ok_release/)

## Examples

- To copy group 1 to group 5, type:

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Copy Group 1 At 5 |

 

- To copy group 1 to group 11; group 2 to group 12; and group 3 to group 13, type:

|                                                                    |                                               |
| ------------------------------------------------------------------ | --------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Copy Group 1 Thru 3 At 11 |

 

- To copy group 2 to group 6, 7, and 8, type:

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Copy Group 2 At 6 Thru 8 |

 

- To copy cue 2 to cue 6 of the selected sequence, type:

|                                                                    |                                      |
| ------------------------------------------------------------------ | ------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]> Copy Cue 2 At 6 |

 

- To copy macro 2 to macro 6, type:

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Copy Macro 2 At 6 |
