---
title: "Appearance"
description: "You can change the frame color of pool objects and the background color of cues with the Appearanceeyword."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_appearance.html"
scrapedAt: "2026-06-12T21:27:44.954Z"
---
You can change the frame color of pool objects and the background color of cues with the **Appearance** keyword.

**Important:**\
**Appearance** is used directly on objects. Thus, changing the color in all user profiles.

To execute this keyword press Assign Assign Assign, type **Appearance** or the shortcut **Ap** into the command line.

To reset assigned colors repeat the appearance command and select color pop-up **Reset **in the edit, then tap **Please**.

## Syntax

Appearance \[Object-list]

**Appearance \[Object-list] At \[Source-object]**

## Options

To see a list of all options of the keyword Appearance in the command line feedback window, type the following into the command line:

\[Channel]> Appearance /?

The keyword Appearance has the following options:

| Option     | Shortcut    | Option value                                                                                        | Description                                                                            |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| reset      | r           | no option value                                                                                     | Resets appearance.                                                                     |
| color      | no shortcut | Gel name from the Swatch Book in the color picker, e.g., medium amber; or hex value (000000-FFFFFF) | Sets color appearance.                                                                 |
| red        | r           | 0-100                                                                                               | Sets red component of the color appearance (0 by default).                             |
| green      | g           | 0-100                                                                                               | Sets green component of the color appearance (0 by default).                           |
| blue       | b           | 0-100                                                                                               | Sets blue component of the color appearance (0 by default).                            |
| hue        | h           | 0-360                                                                                               | Sets hue of the color appearance (saturation and brightness 100 by default).           |
| saturation | s           | 0-100                                                                                               | Sets saturation of the color appearance (hue 0 by default; brightness 100 by default). |
| brightness | br          | 0-100                                                                                               | Sets brightness of the color appearance (saturation and hue 0 by default).             |

### Example: 1 - Change Frame Color of a Single Object

Assign preset object 1 a red frame in the preset pool.

1\. Press Assign Assign Assign (=Appearance) and tap preset 1 in the preset pool .

The Edit Color pop-up opens.

2\. Select a red color and tap **Please**.

Preset object 1 has a red frame around it.

**Hint:**\
Executors display the appearance of objects assigned. To view the appearance of objects on executors, open **Playback big**. For more information see [Executors on the screens](/grandma2/key_exec_on_screen/#playback_big). 

## Example: 2 - Change Frame Color of Several Objects

Assign group object 1 thru 5 a blue frame in the group pool.

1\. Press Assign Assign Assign (=Appearance) Group 1 Thru 5 Please.

The Edit Color pop-up opens.

2\. Select a blue color and tap **Please**.

Group objects 1 thru 5 have a blue frame around them.

## Example: 3 - Change Background Color of Cues

Change the background color of cue 1 of the selected executor. For more information see [change cue color](/grandma2/key_cs_renumber_cues/#cue_color).

**Important:**\
Cue color columns have to be enabled in the option menu. 

1\. Press Assign Assign Assign (=Appearance) Cue 1 Please.

The Edit Color pop-up opens.

2\. Choose the color and tap **Please**.

Cue 1 of the selected executor has a new background color. 

## Example: 4 - Cue Background Color same as Group Color

Cue 1 is to have the same color as group 2.

Press Assign Assign Assign (=Appearance) Cue 1 At Group 2 Please.

Cue 1 has the same color as group 2.

## Example: 5 - Use Command Line Only

Assign the All preset pool (0) object 1 a red frame using the command line only.

Type in the command line:

 

\[Channel]> Appearance Preset 0.1 /h=0 /s=100 /br=50

 

Press Please.

\- or -

 

\[Channel]> ​Appearance Preset 0.1 /r=100 /g=0 /b=0

 

Press Please.

Pool object 1 has a red frame around it.

## Example: 6 – Assign the Appearance from Source Object to Destination Object

Assign the appearance of one macro to another.

Type in the command line:

\[Channel]> Appearance Macro 2 At Macro 13

Press Please.

 Macro 2 receives the same appearance as macro 13.
