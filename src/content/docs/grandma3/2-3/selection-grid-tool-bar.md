---
title: "Selection Grid Tool Bar"
description: "When the Selection Grid Tool Bar is enabled, it is visible on the left side of the Selection Grid window. The tools can be used to modify the arrangement of the"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/selection-grid-tool-bar.html"
scrapedAt: "2026-06-15T18:25:22.166Z"
pagefind: false
---
### Selection Grid Tool Bar

When the Selection Grid Tool Bar is enabled, it is visible on the left side of the Selection Grid window. The tools can be used to modify the arrangement of the selected fixtures.

![](/img/grandma3/2-3/window_selection-grid_tool-20bar-ad5ef2.png)\
_Selection Grid toolbar_

Here's a description of what the tools can do:

- ![](/img/grandma3/2-3/icon_linearize_24_v1-8-6573d8.png) **Linearize Grid Numerical**: The currently selected fixtures are rearranged into a line starting at Grid 0/0/0. The new order of the fixtures is in ascending order by their Fixture IDs (and secondarily by the CIDs).
- ![](/img/grandma3/2-3/icon_left-to-right_24_v1-8-15ed70.png) **Linearize Grid Left To Right, then Top to Bottom**: The currently selected fixtures are rearranged into a line starting at Grid 0/0/0. Based on the current grid arrangement, the new order of the fixtures is determined to work from left to right first and then from top to bottom.
- ![](/img/grandma3/2-3/icon_top-to-bottom_24_v1-8-ee00ef.png) **Linearize Grid Top to Bottom, then Left to Right**: The currently selected fixtures are rearranged into a line starting at Grid 0/0/0. Based on the current grid arrangement, the new order of the fixtures is determined to work from top to bottom first and then from left to right.
- ![](/img/grandma3/2-3/icon_compress_24_v1-8-96e3ad.png) **Remove Gaps:** Removes gaps between fixtures.
- **![](/img/grandma3/2-3/icon_15_remove_offset_v2_0-de366e.png) Remove Offset:** Removes the offset between the origin and the selection**.**
- **![](/img/grandma3/2-3/icon_15_align_left_v2_0-896d90.png) Apply Left Alignment to Grid:** Align the selection to the left of the whole selection.
- **![](/img/grandma3/2-3/icon_15_align_center_v2_0-f98e88.png) Apply Center Alignment to Grid:** Align the selection to the center of the entire selection. 
- **![](/img/grandma3/2-3/icon_15_align_right_v2_0-9c116c.png) Apply Right Alignment to Grid:** Align the selection to the right of the whole selection. 
- ![](/img/grandma3/2-3/icon_transpose_24_v1-8-e542fe.png) **Transpose Grid**: Interchanges every selected fixture's X and Y grid coordinates.
- ![](/img/grandma3/2-3/icon_rotate-cw_24_v1-8-b71cc0.png) **Rotate Grid by 90 Degrees to the right**: Rotate the currently selected fixtures 90 ° clockwise along the XY plane.
- ![](/img/grandma3/2-3/icon_rotate-ccw_24_v1-8-a27dc9.png) **Rotate Grid by 90 Degrees to the left**: Rotate the currently selected fixtures 90 ° counterclockwise along the XY plane.
- ![](/img/grandma3/2-3/icon_mirror-x_24_v1-8-785723.png) **Mirror Grid at X-axis**: Mirrors the fixtures in the grid along a vertical mirror line.
- ![](/img/grandma3/2-3/icon_mirror-y_24_v1-8-691fa3.png) **Mirror Grid at Y-axis**: Mirrors the fixtures in the grid along a horizontal mirror line.
- \*2 **Multiply Grid Coordinates by 2:** Relatively multiplies the space between fixtures on the x-axis.
- /2 **Divide Grid Coordinates by 2: **Relatively divide the space between fixtures on the x-axis. 
- **![](/img/grandma3/2-3/icon_15_grid_symmetrical_v2_0-91b843.png) Make Grid Symmetrical:** Transforms the current selection to be symmetrical. 
- **![](/img/grandma3/2-3/icon_15_matricks_v2_0-c82d04.png) Use MAtricks Positions and Reset MAtricks:** keep the fixtures at their MAtricks transformed coordinates and remove MAtricks. 

Use the Grid keyword to trigger the grid tools from the command line. For example, to trigger the **Transpose** tool, type:

|                                                                    |                                      |
| ------------------------------------------------------------------ | ------------------------------------ |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Grid "Transpose" |

These are the commands for each tool:

- Linearize Grid Numerical: **Grid "Linearize" "Numerical"**
- Linearize Grid Left To Right, then Top to Bottom: **Grid "Linearize" "LeftToRight"**
- Linearize Grid Top to Bottom, then Left to Right: **Grid "Linearize" "TopToBottom"**
- Remove Gaps: **Grid "RemoveGaps"**
- Remove Offsets: **Grid "RemoveOffset"**
- ****Apply Left Alignment to Grid:** Grid "Align" "Left"**
- Apply Center Alignment to Grid: **Grid "Align" "Center"**
- Apply Right Alignment to Grid: **Grid "Align" "Right"**
- Transpose Grid: **Grid "Transpose"**
- Rotate Grid by 90 Degrees to the right: **Grid "Rotate" "Right"**
- Rotate Grid by 90 Degrees to the left: **Grid "Rotate" "Left"**
- Mirror Grid at X-axis: **Grid "Flip" "X"**
- Mirror Grid at Y-axis: **Grid "Flip" "Y"**
- Multiply grid coordinates by 2: **Grid "Multiply" 2**
- Divide grid Coordinate by 2: **Grid "Divide" 2**
- Make grid symmetrical: **Grid "MakeSymmetrical"**
- Use matricks positions and reset matricks: **Grid "UseMatricksPositions"**

Grid Coordinates can be multiplied or divided by values other than 2. For example, to multiply the grid coordinates by the factor 6, type:

|                                                                    |                                       |
| ------------------------------------------------------------------ | ------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Grid "Multiply" 6 |
