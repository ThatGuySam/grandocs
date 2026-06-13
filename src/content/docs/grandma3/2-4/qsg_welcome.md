---
title: "00 - Welcome"
description: "This guide is a quick tour of some of the most used elements of the grandMA3 software. This guide is written using version 2.4. If you are on a different versio"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/qsg_welcome.html"
scrapedAt: "2026-06-12T21:25:15.289Z"
---
This guide is a quick tour of some of the most used elements of the grandMA3 software. This guide is written using version 2.4. If you are on a different version, then there might be elements that function slightly differently. The general functions and principles are the same. We will try to keep this guide up to date with the latest version.

It is meant to be a more personal and loose reading experience than the main manual. It is a collection of tutorials in which you (the reader) follow the steps I (the author) explain as we go along together. The main manual is better if you are looking for short explanations of how to do a specific thing. This guide has a lot of text and description behind the steps - hopefully, it is also a little fun to read.

It is highly recommended that you read the numbered chapters in order.

You should read this online since it is the most up-to-date version. But you can also create this as a PDF and maybe print it. You could save the paper, take the PDF, and read it on your favorite electronic device instead. One favorite option could be the console or onPC, where this guide is available in the help system, so you do not need to create a PDF.

The Quick Start Guide is meant to be read from start to finish and is for users new to the grandMA3 software. You should use the main manual if you are looking for help on a specific topic.

To get the best result, you should try to do precisely what is written. If you change something that is not described, you might get a different result.

We will create a new show with some fixtures with standard functions. We will create something with a cue sequence and some busking setup that can be used for a more dynamic live playback.

## Preface

This guide is primarily written using the grandMA3 onPC. The thought is that most users who go through this are on the onPC platform. You can go through this guide if you have a grandMA3 console or a grandMA3 onPC command wing. It will be explained if there is any difference in how to operate the onPC or console. The primary difference is that you do not need to open windows with virtual keys and executors if you have real hardware.

A mouse/trackball is recommended. Often, the guide will say something like "click the button". This is the same as tapping it on a console or a touch screen. We might need to "Right-click" something with the mouse. It is the same as pressing the Edit key and tapping the object on a console. You can use an external mouse/trackball on the console; it's up to you, but the interface is built to be touched.

If you are using the onPC, you will spend a lot of time on the "virtual displays". The screens on the console are numbered like this.

![](/img/grandma3/2-4/img_screen_order_fs_v1-1-6b954c.png)

The grandMA3 onPC is a little different:

- Display 1 is a combination of console screens 1 and 8.
- Display 2 is a combination of console screens 2 and 9.
- Display 3 is a combination of console screens 3 and 10.
- Display E4 is an external screen 4.
- Display E5 is an external screen 5.
- Display S6 is the console screen 6.
- Display S7 is the console screen 7.

The displays can be toggled using the **Display** pop-up found in the **Control Bar** on the left side of the displays. It is a button with a screen icon(![](/img/grandma3/2-4/icon_display_24_v1-9_1-20de27.png)). It is not possible to turn off Display 1.

The **Control Bar** also gives access to virtual controls. There is the virtual **Command Section**, the **Master Controls**, the **Playback Controls**, and the **Custom/Master Section**. These can also be toggled using the F3, F4, F5, and F7 keys on a keyboard. We will come back to all these controls later.

## Markup in the Quick Start Guide

In this guide, there are different markups in different situations.

Even though this is written using an onPC, there will be some (virtual) key presses. If you should press or click keys, then it is displayed like this: Store Cue 1 Please.

If we are just talking about a key, it will be written in single quotes like this: The 'Store' key.

If it is an area on the screens you need to click or press, it is written like this: Internal. This could be a tab in a menu, a button on the screen, or a clickable area.

If we are talking about a term, it will look like this: **Store** is a function to save something. 

If you need to use a keyboard and write something in the command line (we are going to look at what this is later), then it will look like this:

|                                                                    |                             |
| ------------------------------------------------------------------ | --------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | Admin\[Fixture]>Store Cue 1 |

All input like this should be executed with a press on the 'Enter' key on your keyboard. The Enter is not displayed. It is the same as the Please key on the grandMA3 hardware. 'Please' or 'Enter' is not a visible command - it is the key that executes the typed command. A default keyword is displayed in the command line input above. It is the yellow word inside the square brackets. You do not need to write this; it is already there - it might be different than the one displayed above.

Feedback from the system is displayed like this:

|      |             |
| ---- | ----------- |
| OK : | Store Cue 1 |

Notice that the Please or Enter is not displayed. The feedback can be seen in the Command Line Feedback window (more on this later).

If you need to write something on the keyboard that is not for the command line, the keyboard input will look like this: **My Favorite Cue**. This could, for instance, be a name.

There might be hints, important information, or restrictions throughout the guide. These are written in boxes with icons and a small headline showing the type of information.

|                                            |                                       |
| ------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                             |
|                                            | This is what a hint would look like.  |

---

## Recap

Each chapter ends with a short recap of what we did. It might also include links to relevant topics in the main manual. These links are meant as guides to relevant sections of the manual where you can find more detailed information on specific topics covered in the guide chapter. You can take a break from the guide and read the manual topics if you want to, but you do not need to read them to continue to the next chapter.

For this chapter and introduction, I could add the following links:

Learn how to install grandMA3 onPC in the [Installation of grandMA3 onPC topic](/grandma3/2-4/onpc_windows_installation/).

For details on setting up the console, see the [First Steps section](/grandma3/2-4/first_steps/).

If you want to learn more about the command line input, then read the [Command Line Topic](/grandma3/2-4/ws_ui_command_line/).

At the end of the recap, there is a link to [the next chapter](/grandma3/2-4/qsg_new_show_setup/) - go ahead and click it when you are ready.
