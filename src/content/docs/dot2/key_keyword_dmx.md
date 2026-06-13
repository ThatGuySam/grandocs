---
title: "Dmx"
description: "This page describes the syntax and how to use thmx command."
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_keyword_dmx.html"
scrapedAt: "2026-06-12T21:29:48.417Z"
---
This page describes the syntax and how to use the**** Dmx command.

To go to the Dmx command, press DMX on the console.\
Dmx is in the [command line](/dot2/key_widget_commandlineinput/).

## Description

With the Dmx command you can:

- Make a DMX test.
- Turn off the DMX tester.
- Select a fixture on a DMX address.
- Patch fixture to a DMX address.
- Unpatch fixtures from a DMX address.

## Syntax

1\. Make a DMX test.

DMX 1.7 At 100

2\. Turn off the DMX tester.

Off DMX Thru

3\. Select a fixture on a DMX address.

DMX 2.2

4\. Patch fixtures to a DMX address.

Assign Fixture 1 At DMX 2.1

5\. Unpatch fixtures from a DMX address.

Delete DMX 1.7

## Example 1

**Important:**\
If the DMX tester is on, all parked values and values from the programmer will be blocked by the dmx test value.\
To turn off the DMX tester, refer to example 2 or open the [tools window](/dot2/key_window_tools/).

Let´s assume you will make a DMX test with the DMX address 1.7 and set the DMX value at 100 %.

Press DMX 1 . 7 At 1 0 0 Please.

The DMX value is 254 and is displayed with a red background in the [DMX View](/dot2/key_viewitem_dmx/).

## Example 2

Let´s assume you will turn off all DMX tester values by using the DMX command.

Press Off DMX Thru Please.

All DMX tester values are off.

**Hint:**\
You can also use the [tools window](/dot2/key_window_tools/) to turn off the DMX tester.

## Example 3

Let´s assume, you will figure out which fixture is patched at DMX address 2.2.

Press DMX 2 . 2 Please.

The fixture patched at DMX address 2.2 is selected.

**Hint:**\
If you are looking for a fixture patched at universe 1, just press DMX 2 Please. The universe is not necessary for universe 1.

## Example 4

Let´s assume you will patch fixture 1 to a the DMX address 2.1.

Press ![ma](/img/dot2/ma-36da5c.png) + Label (= [Assign](/dot2/key_keyword_assign/)) Fixture 1 At DMX 2 . 1 Please.

Fixture 1 is patched at DMX address 2.1.

**Hint:**\
Double-check the DMX address in the [DMX View](/dot2/key_viewitem_dmx/) or the [Patch and Fixture Schedule](/dot2/key_window_patchandfixtureschedule/).

## Example 5

Let´s assume you will unpatch the fixture with the DMX address 1.7.

Press Delete DMX 1 . 7 Please .

The fixture with the DMX address 1.7 is unpatched.

**Hint:**\
Double-check the DMX address in the [DMX View](/dot2/key_viewitem_dmx/) or the [Patch and Fixture Schedule](/dot2/key_window_patchandfixtureschedule/).
