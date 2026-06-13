---
title: "Selection Grid"
description: "Fixtures can have information about their position in a 3D selection grid."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/operate_selection.html"
scrapedAt: "2026-06-12T21:24:49.229Z"
---
Fixtures can have information about their position in a 3D selection grid.

Each fixture is represented by a box in the grid, which establishes the spatial relationships between fixtures for use with MAtricks, phasers, selection order, and effects. 

The grid organizes the fixtures relative to each other, but not necessarily their positions in the 3D Viewer. Tap ![](/img/grandma3/2-4/icon_3d_selgrid-376363.png) in the 3D Viewer toolbar to apply the current selection in 3D perspective to the selection grid. See [3D Viewer](/grandma3/2-4/patch_3d_viewer/) for more information.

Tap a space on one of the screens to add the **Selection Grid** window. See [Add Window](/grandma3/2-4/wvm_add_window/).

## Adjust the Selection Grid

The grid can be rotated by pressing the window with a single finger and moving the finger around the screen.

The grid can be zoomed using a pinch gesture with two fingers on a touchscreen or by scrolling the wheel on a mouse.

The grid can be moved by touching the screen with two fingers and dragging them across it. Alternatively, you can move it with the mouse by holding down the right mouse button while moving it.

### Grid Cursor

Fixtures are positioned based on the grid cursor's position, which is the blue cell.

The grid origin, 0/0/0, is marked with a white frame.

![](/img/grandma3/2-4/window_selection-grid_v1-9-222-6-6d9d85.png)\
_Selection Grid window_

When a cell other than the origin 0/0/0 is selected, Preserve GridPositions in the title bar will be enabled. When it's disabled, all gaps and offsets to the origin will be removed.\
The state of Preserve GridPosition can be recalled if it is disabled before storing the selection into an object.

When selecting fixtures, the Move Grid Cursor setting in the title bar will work as specified in the user profile. For more information, see [User Settings](/grandma3/2-4/user_settings/).

These are the three modes for the Move Grid Cursor.

After a selection is made:

1. **None**: The cursor will stay at its position when the selection is made.
2. **Append X**: The Cursor will move to the next available X-axis cell on the grid.
3. **Newline**: The cursor moves to X=0 on the following line.

Small icons in the upper left corner of the Selection button in the encoder bar display the used axes and the selected Move Grid Cursor  setting:

- ![](/img/grandma3/2-4/icon_axis_x_15_v3-2-4-7d227f.png):  x-axis
- ![](/img/grandma3/2-4/icon_axis_y_15_v3-2-4-1bd3a4.png): y-axis
- ![](/img/grandma3/2-4/icon_axis_z_15_v3-2-4-5590ee.png): z-axis
- ![](/img/grandma3/2-4/icon_cursor_none_15_v3-2-4-f957db.png) : None
- ![](/img/grandma3/2-4/icon_cursor_appendx_15_v3-2-4-8fa29c.png) : Append X
- ![](/img/grandma3/2-4/icon_cursor_newline_15_v3-2-4-2ed933.png) : Newline

Tapping the Selection button in the encoder bar opens a temporary selection grid window.

Tap** ![](/img/grandma3/2-4/icon_show_grid_15px-e46475.png) **in the title bar to toggle the grid's visibility.

When tapping in the title bar**, ![](/img/grandma3/2-4/icon_fit-15_v0-9-484448.png) **the window is reset to fit all the fixtures and the grid cursor in the selection grid window.

---

Tap the MA logo on the left side of the Selection Grid window's title bar to open the **Selection Grid Window Settings**.

![](/img/grandma3/2-4/window_selection_grid_settings-b52fa1.png)\
_Selection Grid Window Settings_

Buttons in the display column:
