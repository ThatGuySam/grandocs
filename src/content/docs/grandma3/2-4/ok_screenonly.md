---
title: "/ScreenOnly"
description: "To enter the /ScreenOnlyption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_screenonly.html"
scrapedAt: "2026-06-12T21:24:43.078Z"
---
To enter the **/ScreenOnly **option keyword in the command line, use one of the options:

- Type **/Screen**
- Type the shortcut** /Screeno**

## Description

The /ScreenOny option keyword defines which parts of the screen will be used when taking screenshots. It is used in conjunction with the [/Screen option keyword](/grandma3/2-4/ok_screen/), the [/XResolution option keyword](/grandma3/2-4/ok_xresolution/) and the [/YResolution option keyword](/grandma3/2-4/ok_yresolution/). 

## Syntax

Store Image \["MediaPool\_Name" or MediaPool\_Number].\["Image\_Name" or Image\_Number] /ScreenOnly \["Value"]

## General Keywords

General keywords that use the /ScreenOnly option keyword:

- [Image keyword](/grandma3/2-4/keyword_image/)
- [Store keyword](/grandma3/2-4/keyword_store/)

## Values

The /ScreenOnly option keyword uses these values:

- Yes - This is the default if /ScreenOnly is not defined. The screenshot only includes the area that can be defined by the user. 
- No - The entire screen will be used, including view bar, encoder bar and other.

## Example

- To store a screenshot of the entire screen 1 as image 6, including view bar, encoder bar, and other, type:

|                                                                    |                                                                  |
| ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Store Image 3.6 /Screen "1" /ScreenOnly "No" |
