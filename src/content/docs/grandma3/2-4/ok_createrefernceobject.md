---
title: "/CreateReferenceObject"
description: "To enter the /CreateReferenceObjectption keyword in the command line, use one of the options:"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ok_createrefernceobject.html"
scrapedAt: "2026-06-12T21:24:40.029Z"
---
To enter the **/CreateReferenceObject **option keyword in the command line, use one of the options:

- Type **/CreateReferenceObject**
- Type the shortcut **/Creater**

## Description

The /CreateReferenceObject option keyword creates a referenced object when an object is imported. For example, an appearance which uses the imported image. 

For more information on importing references see [Import/Export Menu](/grandma3/2-4/import-export/). 

## Syntax

Import \[Object Type] Library "File Name.file\_type" At \[Object Type] (\[Object\_Number] \[Object\_ID]) /CreateReferenceObject

## General Keywords

General keywords that use the /CreateReferenceObject option keyword:

- [Import keyword](/grandma3/2-4/keyword_import/)
- [Image keyword](/grandma3/2-4/keyword_image/)

## Example

- To import an image and automatically create an appearance which references to the imported image, type:

|                                                                    |                                                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Import Image Library "Cloud.png" At Image 3.11 /CreateReferenceObject  |
