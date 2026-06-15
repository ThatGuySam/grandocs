---
title: "Trackpad Window"
description: "The trackpad window allows precise control of a mouse cursor as well as an alternate method for controlling the position of selected fixtures."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ws_ui_trackpad.html"
scrapedAt: "2026-06-15T18:24:55.077Z"
pagefind: false
---
The trackpad window allows precise control of a mouse cursor as well as an alternate method for controlling the position of selected fixtures.

The trackpad window can appear within the user-defined area of screens 1 through 7. Views can store and recall the appearance and settings of the trackpad window. For more information on adding windows to the user-defined area, see the [Add windows](/grandma3/2-3/wvm_add_window/) topic.

Tap the Mode button in the upper-right corner of the trackpad window to toggle between mouse mode and pan/tilt mode, or tap and swipe to see a menu of available modes.

---

## Mouse Mode

![](/img/grandma3/2-3/window_trackpad_mouse_v1-9-13faf4.png)

Trackpad window in mouse mode

### Trackpad Mouse Cursor

While in mouse mode, tapping inside the main area of the trackpad window and swiping in any direction presents a dedicated cursor and moves that cursor in the direction of the swipe.

The main cursor in the user interface of the console appears as a black arrow with a white outline. This cursor is not affected by the trackpad window. A separate cursor appears when using the trackpad in mouse mode. The trackpad mouse cursor appears as a white arrow with a light gray outline.

![](/img/grandma3/2-3/window_trackpad_cursor_v1-2-1e1565.png)

Trackpad mouse cursor

The trackpad cursor initially appears slightly larger than normal. After three seconds, it reverts to its normal size. After five seconds of idle time, the trackpad cursor disappears.

The trackpad mouse cursor can move freely across the user interface of the console within screens 1 through 5. Although the trackpad window can appear on screen 6 and screen 7, the trackpad cursor cannot appear on these screens.

### Trackpad Window Buttons in Mouse Mode

The main area of the trackpad window in mouse mode includes two buttons:

- Left: Tap for a left mouse click. This selects the item under the point of the trackpad cursor. Tap and hold while swiping in the main area of the trackpad window with a second finger to mimic a 1 finger swipe gesture.
- Right: Tap for a right mouse click. This generates the same result as a 2 finger edit gesture.

The title bar of the trackpad in mouse mode includes tools, which control the behavior of the trackpad. These tools include:

- Reset Mouse: Tap to respawn the trackpad mouse cursor in the center of screen 1.
- Tap for Click: When enabled, tapping anywhere in the main area of the trackpad window, except for the Right button, executes a left mouse click. When disabled, only a tap on the Left button executes a left mouse click.
- Resolution: Tap to cycle through the available resolution options for the trackpad mouse, or tap and swipe to see a menu of available resolution options. This resolution setting is separate from the resolution setting in pan/tilt mode.

---

## Pan/Tilt Mode

![](/img/grandma3/2-3/window_trackpad_pan-tilt_v1-9-9b33b5.png)

Trackpad Pan/Tilt mode

While in pan/tilt mode, horizontal swipes within the main area of the trackpad window adjust the pan attribute of any selected fixtures. Vertical swipes adjust the tilt attribute. Diagonal and curved swipes adjust both pan and tilt accordingly. The main area of the trackpad window in pan/tilt mode displays a simple grid as a visual guide.

The title bar of the trackpad in pan/tilt mode includes tools, which control the behavior of the trackpad. These tools include:

- P/T Mode: Tap to cycle through the available pan/tilt modes, or tap and swipe to see a menu of available pan/tilt mode options. These options include:

  - Pan Only: This mode only allows adjustment of the pan attribute, ignoring any vertical movement.
  - Tilt Only: This mode only allows adjustment of the tilt attribute, ignoring any horizontal movement.
  - Both: This mode allows simultaneous adjustment of both the pan and tilt attributes.

- Invert Mode: Tap to cycle through the available invert modes, or tap and swipe to see a menu of available invert mode options. These options include:

  - Off: Both pan and tilt are adjusted normally.
  - Pan Invert: Pan inputs are interpreted in reverse of the normal direction. Tilt inputs remain normal.
  - Tilt Invert: Tilt inputs are interpreted in reverse of the normal direction. Pan inputs remain normal.
  - Both: Both pan and tilt inputs are interpreted in reverse of the normal direction.

- Resolution: Tap to cycle through the available resolution options for the trackpad control of pan and tilt, or tap and swipe to see a menu of available resolution options. This resolution setting is separate from the resolution setting in mouse mode.

|                                            |                                                                                                                                                                                                                                                                |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                                                                                                      |
|                                            | The **TrackpadMode**, **Mouse Resolution**, **P/T Resolution**, **P/T Invert Mode**, and **P/T Mode** settings are also available in the **Trackpad Window Settings** pop-up. To open this pop-up, tap MA in the upper-left corner of the **Trackpad** window. |
