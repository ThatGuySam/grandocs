---
title: "Key"
description: "To enter the Key keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_key.html"
scrapedAt: "2026-06-15T18:25:04.762Z"
pagefind: false
---
To enter the Key keyword in the command line, use one of the options:

- Type **Key**
- Type the shortcut **K**

## Description

The Key keyword is used to address the network keys.

For more information on what network keys are see [Create a Custom Key](/grandma3/2-3/network_session_key/). 

## Syntax

\[Function] Key \["Key\_Name" or Key\_Number] (Property \["Property\_Name" ] \["Value"])

## Examples

- To store a new key, type:

|                                                                    |                                 |
| ------------------------------------------------------------------ | ------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Key 2 |

 

- To list all keys, type:

|                                                                    |                              |
| ------------------------------------------------------------------ | ---------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>List Key |

 

- To set a different password for a newly created key, type:

|                                                                    |                                                              |
| ------------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Set Key 2 Property "Seed" "Concord Dawn" |

 

- To not use key 2 for MAnet, type:

|                                                                    |                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Set Key 2 Property "MANET" "No" |
