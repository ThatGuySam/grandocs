---
title: "Timecode Slots"
description: "A timecode slot is an integrated interface that interprets a timecode signal in hours (h), minutes (m), seconds (s), and frames (f)."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/timecode_slots.html"
scrapedAt: "2026-06-15T18:25:27.948Z"
pagefind: false
---
|                                            |                                                                             |
| ------------------------------------------ | --------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                   |
|                                            | The timecode slots can be edited but not added, copied, deleted, or moved.  |

A timecode slot is an integrated interface that interprets a timecode signal in hours (h), minutes (m), seconds (s), and frames (f).

The grandMA3 can receive up to eight different external timecode signals at the same time. 

Timecode slots are located in the Timecode Slots pool.

![Update this description text.](/img/grandma3/2-3/window_timecode-slots-pool_v2-2-c707a6.png)

The Timecode Slots pool.

Each pool object represents a timecode slot. The slot can listen to external time sources and start counting when a time signal is received. Each slot can also generate a time signal.

|                                                  |                                                                                                                            |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                             |
|                                                  | Timecode slot settings are not part of the show file and will not be transmitted to another station within the show file.  |

## Generator

The system can generate a time signal. Each slot is capable of generating a signal.

The generated signal can be used in the session or transmitted to external devices.

The generator can be controlled by sending commands to a timecode slot following this syntax:

\[Function] TimecodeSlot \[**"TimecodeSlot\_Name" or TimecodeSlot\_Number**]

The generator supports the following functions:

- **Select**:\
  Select the timecode slot pool object.
- **On**:\
  Starts the generator at the current time.
- **Go+**:\
  Starts the generator at the current time.
- **Pause**:\
  It turns off the generator and does not reset the time.
- **Off**:\
  Turns off the generator and resets the time.

## Edit a Timecode Slot

Edit a timecode slot pool object using any of the edit methods. This opens the editor:

![Timecode Slot Editor pop-up.](/img/grandma3/2-3/popup_edit-timecode-slot_v2-2-79a047.png)

Example of the Timecode Slot Editor.

The settings are separated into different sections.

### Label

This is a short description of the settings in the **Label** section.

- **Name**:\
  This is name of the timecode slot.
- **Scribble**:\
  A scribble can be added to the timecode slot. Learn more in the [Scribble topic](/grandma3/2-3/scribbles/).
- **Appearance**:\
  An appearance can be added to the timecode slot. Learn more in the [Appearance topic](/grandma3/2-3/qsg_appear/).
- **Tags**:\
  Tags can be added to the timecode slot. Learn more in the [Tags topic](/grandma3/2-3/tags/).
- **Note**:\
  A note can be added to the timecode slot. Learn more in the [Notes topic](/grandma3/2-3/notes/).

### Settings

This is a short description of the settings in the **Settings** section.

- **Pre Roll**:\
  States how long an external signal must be received before the timecode slot uses it. This is only relevant for external time sources.
- **After Roll**:\
  If the external time signal stops, the timecode runs internally in the After Roll. For example, if 10 seconds were set, the time runs for another 10 seconds, even though the external signal ceased. This can be useful if the source is a little unstable to prevent the slot from starting and stopping unintentionally.
- **Source IP**:\
  Displays the IP address of the grandMA3 device, which receives the running timecode signal.
- **User Bits**:\
  Besides the 32 Bit for 8-digit timecode time, timecode executes 32 User Bits (8-digit) per frame.\
  Use User Bits to mark a timecode signal. For example, use User Bit 1 for light and User Bit 2 for pyro. This is not available when using an internal timecode source.

|                                                  |                                                                                                                                                                                                             |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                                                                                                                                                              |
|                                                  | Do not change the user bits unless you are told to do so by the timecode supplier. If the user bits are changed and the timecode supplier does not know, the timecode signal will not be received anymore.  |

### Generator

This is a short description of the settings in the **Generator **section.

- **Generator Start Time**:\
  Sets the start time for the internal timecode generator. 
- **Generator End Time**:\
  Sets the end time for the internal timecode generator.
- **Generator Looped**:\
  Toggle this On to repeat the internal timecode range indefinitely. The time range is only generated once if this is Off.
- **Generator Frame Unit**:\
  Sets the frame unit for the generated signal.

### Colors

This is a short description of the settings in the **Colors **section. The color is applied to the time displayed in the Clock and in the pool object. Tapping any of the settings opens the Color Editor pop-up, where a color can be selected.

- **External Source Color**:\
  Defines the color when the time source is external.
- **Generator Color**:\
  Defines the color when the time source is the generator.
- **After Roll Color**:\
  Sets the color to indicate that the external signal was interrupted and that the timecode slot is in After Roll.
- **Off Color**:\
  Sets the color of the clock when no signal is coming in.

### Format

This is a short description of the settings in the **Format **section.

- **Time Display Format**:\
  This can be used to define how the time should be displayed. The following options exist:

  - **Default**:\
    This follows the user profile setting called **Time Readout**. Learn more in the [User Settings topic](/grandma3/2-3/user_settings/).
  - **10d11h23m45**:\
    The time is separated into days, hours, minutes, and seconds using letters as separators.
  - **251h23m45**:\
    This is separated into hours, minutes, and seconds using letters as separators. The hour number can become more than 24 if time is more than a day.
  - **10.11:23:45**:\
    The time is separated into days, hours, minutes, and seconds using a dot and colons as separators.
  - **251:23:45**:\
    This is separated into hours, minutes, and seconds using colons as separators. The hour number can become more than 24 if time is more than a day.

## Clock

To use the clock to display the timecode slot, open the clock window.

The Clock Viewer shows the time. It can be the system time, the time of a timezone, the timer of a timer, or timecode slot.\
Learn more in the [Clock viewer topic](/grandma3/2-3/si_clock/).

To display the timecode clock, tap and hold Clock Source in the title bar to open the drop-down menu, then select Timecode.

Tap and hold Timecode Slot in the title bar to open the drop-down menu, then select the desired timecode slot. When set to **\<Selected>** the selected timecode slot from the Timecode Slot Pool is displayed.

![](/img/grandma3/2-3/window_clock_tc-be123c.png)\
_Clock window with Clock Source set to Timecode_

The buttons in the title bar of the clock viewer can be used to control the timecode slot generator (Off, Pause, and Go+). These actions do not add Command Line History feedback. Learn about the generator [above](/grandma3/2-3/timecode_slots/#h2__2007147697).

For general information on the clock, see [System – Clock](/grandma3/2-3/si_clock/).
