---
title: "Clone"
description: "It is possible to clonerom fixture to fixture; from fixture to fixture type; from fixture type to fixture; or from fixture type to fixture type."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_clone.html"
scrapedAt: "2026-06-12T21:27:47.004Z"
---
It is possible to **clone** from fixture to fixture; from fixture to fixture type; from fixture type to fixture; or from fixture type to fixture type. 

To execute this keyword, press Copy twice, type **Clone** or the shortcut **Clo **into the command line. 

**Note:**\
Cloning to fixtures adds selective data to presets. \
Cloning to fixture types adds global data to presets. 

## Syntax

Clone \[Source Selection-list] At \[Destination Selection-list]

Clone \[Source Selection-list] At \[Destination Selection-list] If \[Scope Object-list]

 

## Options

To get a list of all options available for the keyword **Clone** in the command line feedback window, type the following into the command line:

\[Channel]> Clone /?

The keyword **Clone** has the following options:

| Option                | Shortcut | Option value    | Description                                                             |
| --------------------- | -------- | --------------- | ----------------------------------------------------------------------- |
| overwrite             | o        | no option value | Removes and replaces original data of the destination by new data.      |
| merge                 | m        | no option value | Adds data to existing content.                                          |
| lowmerge              | lm       | no option value | Adds data to existing content and never destroys the existing content.  |
| disablecolortransform | dct      | no option value | Disables transformation of color (fetches hard attribute values).       |
| prefercolorwheel      | pcw      | no option value | Prefers transforming color to color wheel.                              |
| prefermixcolor        | pmc      | no option value | Prefers transforming color to MIXColor.                                 |
| prefercolorboth       | pcb      | no option value | Prefers transforming color to both MIXColor and color wheel.            |
| noconfirm             | nc       | no option value | Suppresses confirmation pop-up.                                         |

 

**Important:**\
However, using the keyword If may limit the scope of cloning to just cloning parts of your show file.

 

**Note:**\
The keyword clone obeys the world and does not change data outside your current world. For more information see [World](/grandma2/key_keyword_world/). 

 

---

## 1.Example:

**Cloning fixtures to fixtures**

 

\[Channel]> Clone Fixture 1 At Fixture 2

 

Creates selective data for fixture 2. Fixture 2 now does the exact same thing it did before cloning. Additionally, fixture 2 keeps the data of fixture 1 in case fixture 2 should not have any data for specific objects. 

 

\[Channel]> Clone Fixture 1 + 2 At Group 10 If Sequence 1 Thru 10

 

Copies data from fixture 1 and 2 to fixtures in Group 10 within sequence 1 thru 10 only.

 

\[Channel]> Clone Fixture 1 At Fixture 2 /merge

 

Creates selective data for fixture 2. Fixture 2 now does the exact same thing as fixture 1. Additionally, fixture 2 keeps its data in case fixture 1 should not have any data for specific objects. 

 

\[Channel]> ​Clone Fixture 1 At Fixture 2 /overwrite

 

Creates selective data for fixture 2. Fixture 2 now does the exact same thing as fixture 1.

---

## 2.Example:

**Cloning fixture to fixture type **

 

\[Channel]> Clone Fixture 1 At FixtureType 2

 

Creates global data for fixture type 2. Fixture type 2 now does the exact same thing it did before cloning. Additionally, fixture type 2 keeps the data of fixture 1 in case fixture type 2 should not have any data for specific objects. 

 

\[Channel]> Clone Fixture 1 At FixtureType 2 /merge

 

Creates global data for fixture type 2. Fixture type 2 now does the exact same thing as fixture 1. Additionally, fixture type 2 keeps its data in case fixture 1 should not have any data for specific objects. 

 

\[Channel]> Clone Fixture 1 At FixtureType 2 /overwrite

 

Creates global data for fixture type 2. Fixture type 2 now does the exact same thing as fixture 1.

 

---

## 3. Example:

**Cloning fixture type to fixture**

 

\[Channel]> Clone FixtureType 1 At Fixture 2

 

Creates selective data for fixture 2. Fixture 2 now does the exact same thing it did before cloning. Additionally, fixture 2 keeps the data of fixture type 1 in case fixture 2 should not have any data for specific objects. 

 

 \[Channel]> Clone FixtureType 1 At Fixture 2 /merge

 

Creates selective data for fixture 2. Fixture 2 now does the exact same thing as fixture type 1. Additionally, fixture 2 keeps its data in case fixture type 1 should not have any data for specific objects. 

 

\[Channel]> ​Clone FixtureType 1 At Fixture 2 /overwrite

 

Creates selective data for fixture 2. Fixture 2 now does the exact same thing as fixture type 1. 

 

---

## 4.Example:

**Cloning fixture type to fixture type **

 

\[Channel]> Clone FixtureType 1 At FixtureType 2 

 

Creates global data for fixture type 2. Fixture type 2 now does the exact same thing it did before cloning. Additionally, fixture type 2 keeps the data of fixture type 1 in case fixture type 2 should not have any data for specific objects. 

 

\[Channel]> Clone FixtureType 1 At FixtureType 2 /merge

 

Creates global data for fixture type 2. Fixture type 2 keeps its data in case fixture type 1 should not have any data for specific objects. 

 

\[Channel]> ​Clone FixtureType 1 At FixtureType 2 /overwrite

 

Creates global data for fixture type 2. Fixture type 2 now does the exact same thing as fixture type 1.

 

**Note:**\
It is also possible to clone using the screen. For more information on how to clone on screen see [Clone – Clone using screens](/grandma2/key_clone_clone_in_user_interface/).
