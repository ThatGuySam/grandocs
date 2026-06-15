---
title: "View Bar and View Buttons"
description: "Screens can have View Bars visible on screens. The View bar can be on the right side of the screen or at the top of the screen. The View Bar contains View Butto"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/ws_ui_view_bar_and_buttons.html"
scrapedAt: "2026-06-15T18:24:54.933Z"
pagefind: false
---
Screens can have View Bars visible on screens. The View bar can be on the right side of the screen or at the top of the screen. The View Bar contains View Buttons.

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

If a store action without a specified object is performed on an empty view button, the default object is a new view.

The screen size might limit how many view buttons can be seen, but the view bar can be scrolled. If the view bar is scrolled, then there is an arrow icon (![](/img/grandma3/2-3/icon_scroll-top_15_v2-0-2b8606.png) or ![](/img/grandma3/2-3/icon_playback-fastbackward_15_v2-1-ef0826.png)) to scroll back to the first buttons. 

The screen on the consoles can show 10 view buttons in a single column with the view bar on the right side and 19 view buttons on a row when at the top.

## Configure the View Bar

Editing an empty area on the user-definable area opens the Configure Display pop-up:

![Configure Display Pop-up](/img/grandma3/2-3/popup_configure-display_v2-1-5975eb.png)\
_Configure Display Pop-up_

This pop-up can also be opened using the Menu "DisplayConfig" command. [![](/img/grandma3/2-3/robot-icon_white-274940.png)       Paste to Command Line](#ma_cmd?Menu%20%22DisplayConfig%22)  

There are other methods to open the pop-up.

The right side of the pop-up has the option to toggle the view bar by tapping Show View Bar. There is an arrow icon (![](/img/grandma3/2-3/icon_view-bar-move_15_v2-0-91ba93.png)) that toggles the position of the view bar between the right side of the screen and the top of the screen. There is also the option to add up to three columns or three rows (depending on the view bar position) by tapping + or limiting again down to one by tapping - below the Show View Bar.

Each column or row begins with its own hundred number, so there can be a total of 300 view buttons on each screen. 

The downward pointing triangle (![](/img/grandma3/2-3/icon_triangle-down_15_v1-8-da38f5.png)) adds a button (![](/img/grandma3/2-3/icon_triangle-down_15_v1-8-da38f5.png) or ![](/img/grandma3/2-3/triangle-right-38abb5.png)) at the last view button. Tapping this button scrolls the view buttons to the next set of view buttons.

The view bars on each screen work independently, meaning that the view bar can have different sizes, locations, and scroll positions on each screen. View button 4 on screen 1 is "ViewButton 1.4". View button 4 on screen 2 would be "ViewButton 2.4". 

Tapping an empty view button clears the screen.

Tapping and holding a view button activates the store view function, which opens the Store View pop-up. Read more about storing views in the [Store and Recall Views topic](/grandma3/2-3/wvm_store_recall/).

## View Button Information

The view buttons show an icon in the upper right corner and a colored bar at the top indicating the object type.

![View Bar with different pool objects - showing icons](/img/grandma3/2-3/img_view-bar_diffrent-objects_v2-1-41c2f8.png)

The example above shows different objects in the view bar.

Pressing and holding MA show the object number instead of the object icon.

![View Bar with different pool objects - showing numbers](/img/grandma3/2-3/img_view-bar_diffrent-objects_numbers_v2-1-3b94ca.png)

Notice that the icon for the view object is only shown if the view contains information about just one screen. If the view contains information for two or more, then the icon is replaced by an icon showing which screens it relates to - see view button 6 above.

Tapping objects in the view bar is the same as tapping the object in the respective pool - It executes the default pool action. For instance, tapping view button 9 in the image above selects user number 2 in the user pool.
