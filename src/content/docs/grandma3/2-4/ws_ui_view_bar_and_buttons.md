---
title: "View Bar and View Buttons"
description: "Screens can have View Bars visible. The View bar can be on the right or at the top of the screen. The View Bar contains View Buttons."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/ws_ui_view_bar_and_buttons.html"
scrapedAt: "2026-06-12T21:24:19.552Z"
---
Screens can have View Bars visible. The View bar can be on the right or at the top of the screen. The View Bar contains View Buttons.

The view buttons can be used to store and recall views and clear the screen.

Other objects than views can be assigned. The following objects are supported:

- Encoder Bars
- Macros
- MAtricks
- Plugins
- Quickeys
- Screen Configurations
- Timers
- Users
- Views

If a store action is performed on an empty view button without a specified object, the default object is a new view.

The screen size might limit how many view buttons are visible, but the view bar can be scrolled. If the view bar is scrolled, then there is an arrow icon (![](/img/grandma3/2-4/icon_scroll-top_15_v2-0-3126cd.png) or ![](/img/grandma3/2-4/icon_playback-fastbackward_15_v2-1-4de609.png)) to scroll back to the first buttons. 

The screen on the consoles can show 10 view buttons in a single column, with the view bar on the right, and 19 view buttons in a row at the top.

## Configure the View Bar

Editing an empty area on the user-definable area opens the Configure Display pop-up:

![Configure Display Pop-up](/img/grandma3/2-4/popup_configure-display_v2-1-affd76.png)\
_Configure Display Pop-up_

This pop-up can also be opened using the Menu "DisplayConfig" command. [![](/img/grandma3/2-4/robot-icon_white-1ac0d2.png)       Paste to Command Line](#ma_cmd?Menu%20%22DisplayConfig%22)  

There are other methods to open the pop-up.

The right side of the pop-up has the option to toggle the view bar by tapping Show View Bar. There is an arrow icon (![](/img/grandma3/2-4/icon_view-bar-move_15_v2-0-cd455e.png)) that toggles the view bar position between the right and top sides of the screen. There is also the option to add up to three columns or three rows (depending on the view bar position) by tapping + or limiting again down to one by tapping - below the Show View Bar.

Each column or row begins with its own hundred number, so there can be a total of 300 view buttons on each screen. 

The downward-pointing triangle (![](/img/grandma3/2-4/icon_triangle-down_15_v1-8-783c4b.png)) adds a button (![](/img/grandma3/2-4/icon_triangle-down_15_v1-8-783c4b.png) or ![](/img/grandma3/2-4/triangle-right-4d3382.png)) to the last view button. Tapping this button scrolls the view buttons to the next set.

The view bars on each screen work independently, so they can have different sizes, locations, and scroll positions. View button 4 on screen 1 is "ViewButton 1.4". View button 4 on screen 2 would be "ViewButton 2.4". 

Tapping an empty view button clears the screen.

Tapping and holding a view button activates the store view function, which opens the Store View pop-up. Read more about storing views in the [Store and Recall Views topic](/grandma3/2-4/wvm_store_recall/).

## View Button Information

The view buttons show an icon in the upper right corner and a colored bar at the top indicating the object type.

![View Bar with different pool objects - showing icons](/img/grandma3/2-4/img_view-bar_diffrent-objects_v2-1-df3adf.png)

The example above shows different objects in the view bar.

Pressing and holding MA show the object number instead of the object icon.

![View Bar with different pool objects - showing numbers](/img/grandma3/2-4/img_view-bar_diffrent-objects_numbers_v2-1-1444aa.png)

Notice that the icon for the view object is only shown if the view contains information about just one screen. If the view contains information for two or more, then the icon is replaced by an icon showing which screens it relates to - see view button 6 above.

Tapping objects in the view bar is the same as tapping the object in the respective pool - It executes the default pool action. For instance, tapping view button 9 in the image above selects user number 2 in the user pool.
