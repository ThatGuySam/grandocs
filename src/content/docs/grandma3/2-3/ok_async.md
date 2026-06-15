---
title: "/Async"
description: "To enter the /Async option keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ok_async.html"
scrapedAt: "2026-06-15T18:25:13.920Z"
pagefind: false
---
To enter the **/Async **option keyword in the command line, use one of the options:

- Type **/Async**
- Type the shortcut** /Asy**

## Description

The /Async option keyword is used to asynchronously execute remote commands. 

## Syntax

RemoteCommand IP \[IP\_Address] \["Command to be Executed"] /Async

RemoteCommand \[DeviceType] \["Device\_Name" or Device\_Number] \["Command to be Executed"] /Async

## Example

- To asynchronously execute the command "Delete Macro 1" on the console named "DimmerBeach", type:

|                                                                    |                                                                                                 |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>RemoteCommand Console "DimmerBeach" "Delete Macro 1 /NoConfirmation" /Async |
