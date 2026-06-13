---
title: "Color Theme"
description: "Color themes allow for the customization of a wide variety of colors within the graphical user interface of the console. Alternate color themes can be activated"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ws_colors_color_theme.html"
scrapedAt: "2026-06-12T21:24:20.598Z"
---
Color themes allow for the customization of a wide variety of colors within the graphical user interface of the console. Alternate color themes can be activated quickly, changing the look of the interface on demand. Color themes can be exported to and imported from external sources. The console initially includes two color themes. The "default" color theme provides optimal readability when using the console under most lighting conditions. The "defaultDAYLIGHT" color theme creates a bolder interface for use in brighter conditions, such as daylight.

 

## Activating Alternate Color Themes

Color themes can be imported using the menu.

1. Open the Menu.
2. Tap Desk Lights & Color Theme in the top-right corner.
3. Tap Active Color Theme. This button will also display the name of the current color theme. For example, 'default'.\
   The Import Color Theme pop-up opens.
4. Tap the desired color theme. If the color theme is on a USB drive, tap Internal in the title bar to select the drive.
5. Tap Import. The color theme is imported.

Color themes can also be imported using the command line. For example, use the following command to activate the "defaultDAYLIGHT" color theme:

|                                                                    |                                                                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | User name\[Fixture]>Import ColorTheme Library "defaultDAYLIGHT.xml" AT ColorTheme /NoConfirmation |

 

## Editing the Current Color Theme

Press Menu, tap Desk Lights & Color Theme and then tap Edit in the bottom-right corner. The color theme editor opens:

![](/img/grandma3/2-4/menu_color-theme-editor_v2-2-9f5713.png)

Color theme editor

The left side of the color theme editor includes a list of color definitions. These function like color presets for user interface elements. Any changes to color definitions will be reflected in all of the UI elements referencing those definitions. Find an explanation for each column in the grid, such as Name or RGBA, in the [Compare Tool](/grandma3/2-4/ws_compare_tool/) topic.

####

The right side of the color theme editor includes a list of user interface elements. This list shows the name of the UI color, a reference to a color definition, and the actual color defined by that reference. Changing the color definition reference to reference another color definition changes the color used for that element without altering any other elements. Deleting the reference for a UI element allows for a direct color definition for that element. This is analogous to storing a cue with hard values instead of referencing a preset.

Tap Export As... at the bottom of the menu to export the current color theme, either to the internal drive or to an external USB drive. To delete a color, tap a color configuration line and tap Delete.
