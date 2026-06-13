---
title: "What are channels &amp; fixtures"
description: "The two words Channel and Fixtures can be several things and it can be a little bit confusing. Even in this manual we might use both words."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_patch_what_are_channel_fixture.html"
scrapedAt: "2026-06-12T21:28:08.932Z"
---
The two words Channel and Fixtures can be several things and it can be a little bit confusing. Even in this manual we might use both words.

When talking (or writing) about the actual device that emits light, we are referring to that as a fixture. This might be all sorts of devices from different manufacturers. They may have one function or many different functions. All these functions are called [Attributes](/grandma2/key_patch_attributes/).

When you program a show, you will need to be able to select these devices, so they have an ID number - something we can type on a numeric keypad.

The grandMA2 have the option to give each device two ID numbers. They can be the same number or they can be different numbers for the same physical device. The ID numbers are called **Channel ID** and **Fixture ID**. A device needs at least one ID number to be select-able and programmable. Two different devices cannot have the same Channel ID or the same Fixture ID. But one device can have Channel ID number 1 and another device can have Fixture ID number 1.

A device with a **Channel ID** will be visible in the **Channel Sheet** and a device with a **Fixture ID** will be visible in a **Fixture Sheet**. If the device have two different ID numbers, then you can choose to hide one of the numbers in the sheets.

If you have already programmed something with a device and you later change the ID numbers, then you will not loose any programmed information. If you remove the ID number so the device does not have any, then the values are still there and it will still output DMX even though you cannot select the device. When you cannot select it, then you cannot edit it or the stored values. It is not visible in sheets. You cannot delete the values either.

You should pay attention to what your default beginning keyword is. You can see it in the Command Line input. The default on a new empty show is "Channel". Your Command Line input will look like this:

\[Channel]>

If you are trying to select a device that only have a Fixture ID, then you need to specify that it is a Fixture ID by pressing the Fixture key before entering the ID number.

You can change the default keyword by pressing the key corresponding to the one you want and the press Please.

 

 

So to sum up. We call each device a fixture and each fixture can have a Channel ID and/or a Fixture ID and to be able to control it it will need at least one ID number.

## Subtopics

- [Attributes](/grandma2/key_patch_attributes/)
- [DMX break](/grandma2/key_patch_dmx_break/)
