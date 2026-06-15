---
title: "UpdateContent"
description: "To enter the UpdateContent keyword in the command line, use one of the options:"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/keyword_updatecontent.html"
scrapedAt: "2026-06-15T18:25:13.027Z"
pagefind: false
---
To enter the UpdateContent keyword in the command line, use one of the options:

- Type **UpdateContent**
- Type the shortcut **UC** or **Updatec**

## Description

The UpdateContent keyword is used to scan a media pool, for example images, and create XML files for media files.

## Syntax

**UpdateContent \[Object] \["Object\_Name" or Object\_Number]**

****

## Example

The following example is explained using images. 

**Requirement:**

1. A media file, for example an image, was added to the corresponding media folder, for example in grandMA3\_lib/media/images, without an XML file.
2. Enter the media pool folder and then the image folder. \
   For more information see [ChangeDestination keyword](/grandma3/2-3/release_notes/). 

 

- To create the XML files that are missing in the image folder of the media pool, type:

|                                                                    |                                                            |
| ------------------------------------------------------------------ | ---------------------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\@ShowData/MediaPools/Images>UpdateContent Image  |
