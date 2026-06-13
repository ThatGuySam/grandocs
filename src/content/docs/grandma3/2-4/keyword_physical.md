---
title: "Physical"
description: "To enter the Physical keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/keyword_physical.html"
scrapedAt: "2026-06-12T21:24:33.693Z"
---
To enter the Physical keyword in the command line, use one of the options:

- Type **Physical**
- Type the shortcut **Phy**

## Description

The Physical keyword is used to set the physical values of a fixture selection using the Physical notation. It comprises RPM (rounds per minute), Hz (Hertz), degrees, or intensity.

## Syntax

**(Attribute \["Attribute\_Name" or Attribute\_Number]) At (\[Layer]) Physical \[Value]**

## Examples

- To set the dimmer value to 1.0 in the absolute layer using Physical, type:

|                                                                    |                                              |
| ------------------------------------------------------------------ | -------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>At Absolute Physical 1.0 |

 

- To set the pan value in the absolute layer to 75.60 degrees using Physical, type:

|                                                                    |                                                                  |
| ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Attribute "Pan" At Absolute Physical 75.60   |
