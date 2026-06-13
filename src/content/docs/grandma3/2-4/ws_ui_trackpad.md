---
title: "Trackpad Window"
description: "The trackpad window allows precise control of the mouse cursor and serves as an alternative method for positioning selected fixtures."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ws_ui_trackpad.html"
scrapedAt: "2026-06-12T21:24:19.705Z"
---
The trackpad window allows precise control of the mouse cursor and serves as an alternative method for positioning selected fixtures.

The trackpad window can appear within the user-defined area of screens 1 through 7. Views can store and recall the appearance and settings of the trackpad window. For more information on adding windows to the user-defined area, see the [Add windows](/grandma3/2-4/wvm_add_window/) topic.

Tap the Mode button in the upper-right corner of the trackpad window to toggle between mouse mode and pan/tilt mode, or tap and swipe to see a menu of available modes.

---

## Mouse Mode

![](/img/grandma3/2-4/window_trackpad_mouse_v1-9-83d0ce.png)

Trackpad window in mouse mode

### Trackpad Mouse Cursor

While in mouse mode, tapping inside the main area of the trackpad window and swiping in any direction both show a cursor and move it in the direction of the swipe.

The main cursor in the console's user interface appears as a black arrow with a white outline. This cursor is not affected by the trackpad window. A separate cursor appears when using the trackpad in mouse mode. The trackpad mouse cursor appears as a white arrow with a light gray outline.

![](/img/grandma3/2-4/window_trackpad_cursor_v1-2-633404.png)

Trackpad mouse cursor

The trackpad cursor initially appears slightly larger than normal. After three seconds, it reverts to its normal size. After five seconds of idle time, the trackpad cursor disappears.

The trackpad mouse cursor can move freely across the console's user interface on screens 1 through 5. Although the trackpad window can appear on screens 6 and 7, the trackpad cursor cannot appear on these screens.

### Trackpad Window Buttons in Mouse Mode

The main area of the trackpad window in mouse mode includes two buttons:

- Left: Tap for a left mouse click. This selects the item under the trackpad cursor. Tap and hold while swiping in the main area of the trackpad window with a second finger to mimic a 1 finger swipe gesture.
- Right: Tap for a right mouse click. This generates the same result as a 2-finger edit gesture.

The trackpad title bar in mouse mode includes tools that control its behavior. These tools include:

- Reset Mouse: Tap to respawn the trackpad mouse cursor in the center of screen 1.
- Tap for Click: When enabled, tapping anywhere in the main area of the trackpad window, except for the Right button, executes a left mouse click. When disabled, only a tap on the Left button executes a left mouse click.
- Resolution: Tap to cycle through the available resolution options for the trackpad, or tap and swipe to see a menu of options. This resolution setting is separate from the resolution setting in pan/tilt mode.

---

## Pan/Tilt Mode

![](/img/grandma3/2-4/window_trackpad_pan-tilt_v1-9-ecb40a.png)

Trackpad Pan/Tilt mode

While in pan/tilt mode, horizontal swipes within the main area of the trackpad window adjust the pan attribute of any selected fixtures. Vertical swipes adjust the tilt attribute. Diagonal and curved swipes adjust both pan and tilt accordingly. The main area of the trackpad window in pan/tilt mode displays a simple grid as a visual guide.

The trackpad title bar in pan/tilt mode includes tools that control its behavior. These tools include:

- P/T Mode: Tap to cycle through the available pan/tilt modes, or tap and swipe to see a menu of available pan/tilt mode options. These options include:

  - Pan Only: This mode allows adjustment only of the pan attribute, ignoring vertical movement.
  - Tilt Only: This mode allows adjustment of the tilt attribute only, ignoring horizontal movement.
  - Both: This mode allows simultaneous adjustment of both the pan and tilt attributes.

- Invert Mode: Tap to cycle through the available invert modes, or tap and swipe to see a menu of available invert mode options. These options include:

  - Off: Both pan and tilt are adjusted normally.
  - Pan Invert: Pan inputs are interpreted in reverse of the normal direction. Tilt inputs remain normal.
  - Tilt Invert: Tilt inputs are interpreted in reverse of the normal direction. Pan inputs remain normal.
  - Both: Both pan and tilt inputs are interpreted in reverse of the normal direction.

- Resolution: Tap to cycle through the available resolution options for the trackpad's pan and tilt controls, or tap and swipe to see a menu of options. This resolution setting is separate from the resolution setting in mouse mode.

|                                            |                                                                                                                                                                                                                                                                |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                      |
|                                            | The **TrackpadMode**, **Mouse Resolution**, **P/T Resolution**, **P/T Invert Mode**, and **P/T Mode** settings are also available in the **Trackpad Window Settings** pop-up. To open this pop-up, tap MA in the upper-left corner of the **Trackpad** window. |
