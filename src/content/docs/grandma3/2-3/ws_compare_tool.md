---
title: "Compare Tool"
description: "The color theme compare tool is part of the Desk Lights & Color Theme menu."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ws_compare_tool.html"
scrapedAt: "2026-06-15T18:24:55.952Z"
pagefind: false
---
The color theme compare tool is part of the Desk Lights & Color Theme menu.

The compare tool is a useful feature when it comes to:

- Comparing color themes with each other.
- Easily find distinctions when comparing color themes via color indicators and colored rows.
- Transfer colors between one color theme and another.
- Live color editing.

The color indicators and colored rows are defined as the following:

- **Orange**: This color exists in the base color theme, but is missing in the compared color theme, or vice versa.
- **Green**: This color was transferred from the base to the compared color theme, or vice versa. 

For more information about color themes, see [Color Theme](/grandma3/2-3/ws_colors_color_theme/) topic.

To open the compare tool:

1. Open the Menu.
2. Tap Desk Lights & Color Theme.
3. Tap Compare. The compare tool opens. The currently active color theme will be taken as the base for comparison.
4. When opening the compare tool for the first time, a import pop-up opens. Select a color theme, for example defaultDAYLIGHT, and tap Import.

![](/img/grandma3/2-3/window_compare_1_v2-2-3af0d7.png)

Compare tool is open

The different buttons of the compare tool are described below:

- Filter:\
  Filters the color name**.**\
   
- Clear Filter**:**\
  Clears the filter.\
   
- Select Base Theme:\
  Opens the import base color theme pop-up.\
   
- Select Compare Theme**:**\
  Opens the import compare color theme pop-up.\
   
- ![](/img/grandma3/2-3/arrow_up_15px-358749.png) (Arrow up):\
  Shows previous missing or merged color in the theme.\
   
- ![](/img/grandma3/2-3/icon_filter_15px-3d7e4b.png) (Object Filter):\
  Shows only unmatched colors.\
   
- ![](/img/grandma3/2-3/icon_arrow_down_15_v1-5-a942f9.png) (Arrow down):\
  Shows next missing or merged color in the theme.\
   
- **![](/img/grandma3/2-3/icon_merge_all_left_15px-53a2e9.png)** (Merge all left):\
  Merges all unmatched colors from the right into the left theme.\
   
- **![](/img/grandma3/2-3/icon_merge_all_right_15px-455faf.png)** (Merge all right)**:**\
  Merges all unmatched colors from the left into the right theme.\
   
- **![](/img/grandma3/2-3/icon_merge_left_15px-663ede.png)** (Merge left):\
  Merges only selected unmatched colors from the left into the right theme.\
   
- **![](/img/grandma3/2-3/icon_merge_right_15px-5ded17.png)** (Merge right):\
  Merges only selected unmatched colors from the right into the left theme.

|                                            |                                                                                                  |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                        |
|                                            | To change the direction of the merge arrows, tap into the grid area of the specific color theme. |

The grid is categorized in different columns:

- **Lock**:\
  When it is set to "Yes", no color values can be changed.
- **No**:\
  This is the color index number. Value in the bracket (x) shows the amount of colors in the particular structure tree.
- **Name**:\
  Color name.
- **RGBA**:\
  Shows the color definition.
- **Used**:\
  This is the amount of color related references.
- **ColorDefRef**:\
  See [Color Theme](/grandma3/2-3/ws_colors_color_theme/).
- **Auto Generated**:\
  Displays "Yes" in green within the configuration line when a color is merged.\
  Alternatively, the value can be manually set to "Yes", for example, to visually highlight configuration lines that still require review.
- **Unmatched**:\
  Is set to "Yes" and indicated in orange when a color is not matching the compared theme.

## Example for a Color Theme Merge

**Requirements:**

- Default is selected as base color theme.
- DefaultDAYLIGHT is selected as compare color theme.
- A color is deleted in the DefaultDAYLIGHT color theme. In the example below, FullBreak.

1. To quickly move the scroll bar to the next unmatched color in the color theme, tap ![](/img/grandma3/2-3/icon_arrow_down_15_v1-5-a942f9.png).  The unmatched color is marked in orange, as shown below:

![](/img/grandma3/2-3/window_compare_scroll-bar_v2-3-e291a5.png)

Unmatched colors are marked in orange.

2. To merge all unmatched colors,  tap ![](/img/grandma3/2-3/icon_merge_all_right_15px-455faf.png).\
   All merged colors are displayed in green rows. Notice that the column Auto Generated is set to Yes and the column Unmatched is set to No automatically in the defaultDAYLIGHT color theme as shown below:\
    

![](/img/grandma3/2-3/window_compare_scroll-bar_2_v2-3-5a28c6.png)

Missing colors merged into defaultDAYLIGHT color theme are shown in green.

3. To show only Auto Generated and Unmatched colors, tap ![](/img/grandma3/2-3/icon_filter_15px-3d7e4b.png).  When enabling filter, the button turns yellow and the columns names "Auto Generated" and "Unmatched" get a yellow filter icon as well: 
4. To change RGBA values for "FullBreak", right click the color in the RGBA column. The color editor opens.
5. Change the R value to 20 by using the dynamic color scroll bar. Tap Ok to close the editor. The color value has changed:

## Export Color Theme

If closing the color editor without exporting the color theme first, the following pop- up with opens:

![](/img/grandma3/2-3/pop-up_compare_exit_v1-9-d26e6f.png)

Export color theme pop-up.

- Stay in Editor:\
  Pop-up closes and the color theme editor stays open.\
   
- Export and Exit:\
  Changes are exported to the color theme**** listed above.\
   
- Exit:\
  Closes the color theme editor. Changes will get lost after a shutdown.\
   

To export the defaultDAYLIGHT.xml color theme as a new theme:

1. Tap into the right grid area of the compare tool to link the Export button to the corresponding defaultDAYLIGHT.xml file.
2. Tap Export Compare Theme as .... The Export Compare Theme pop-up opens.
3. Type defaultDAYLIGHT\_new\.xml and then tap Export. The color theme is exported.
