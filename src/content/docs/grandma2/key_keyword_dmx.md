---
title: "Dmx"
description: "Dmxs an object type representing the DMX outputs of the console."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_dmx.html"
scrapedAt: "2026-06-12T21:27:48.330Z"
---
**Dmx** is an object type representing the DMX outputs of the console.

To execute this keyword type **Dmx** or the shortcut **Dm** into the command line. 

## Syntax

Dmx \[Address]

Dmx \[Universe].\[Address]

 

## DMX Tester

Entering a DMX address opens the DMX encoder bar which may be used for testing. You may also set a test level directly by combining the DMX address with the keyword **At**.

For more information see [At](/grandma2/key_keyword_at/).

The DMX tester has priority over the normal output of the console (parked, executors, programmer) and HTP priority with DMX input.

 

## Patching

Assign \[Fixture-list] (At) \[DMX start]

Assigning fixtures to a DMX start address removes all existing patch for the fixtures, and assigns the new DMX addresses.

Assign \[DMX-list] (At) \[Fixture]

Assigning a list of DMX addresses adds them to the existing patch (multi patch) of the fixture. This does not add more fixtures to your grandMA2 3D visualizer.

Delete \[DMX-list]

Deletion of DMX addresses unpatches the fixtures using this addresses.

Delete \[Fixture-list]

Deletion of fixture unpatches all assigned DMX addresses.

 

## Patching of fixtures with multiple breaks

Assign \[DMX address] (At) \[Fixture] /break=n

Assigning a DMX address to a specific break.

 

## Examples

 

\[Channel]> ​Dmx 2.101

Selects address 101 on second universe in the DMX tester.

 

\[Channel]> ​Assign Dmx 2.101 At Channel 5

Patches DMX address 101 on the second universe to channel 5.

 

\[Channel]> Dmx 513 At 100

Sets the first address on the second universe to 100% in the DMX tester.

 

\[Channel]> ​Off Dmx Thru

Releases all values in the DMX tester.

 

\[Channel]> ​Assign Dmx 1.101 At Fixture 2 /break=1

Patches DMX address 101 to the first break of fixture 2 (i.e., the dimmer of a VL5).
