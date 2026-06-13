---
title: "DMX sheet"
description: "The DMX sheet is used to see the actual DMX output from the system. It shows the result from the executors, programmer, incoming merged DMX and any Masters that"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_patch_dmx_sheet.html"
scrapedAt: "2026-06-12T21:28:09.541Z"
---
The DMX sheet is used to see the actual DMX output from the system. It shows the result from the executors, programmer, incoming merged DMX and any Masters that might limit the output.

The sheet can be created as a view on any empty space on you screens. Minimum size is 3 squares wide and 2 high.

It could look like this:

![](/img/grandma2/window_dmx_v3-3-f0e253.png)

_DMX Sheet window_

The main part of this window displays a big grid with every DMX address, represented by its own cell. This makes it a very long list (all 256 universes are there).

The DMX channel value is displayed in this cell.

The gray vertical bar on the left side displays the DMX address of the first column - there are two ways to see the DMX address: Absolute DMX address and the normal Universe divided. This can be changed in the Options (read below). The absolute address mode will display the DMX addresses as a continuous number. This means that the first address in the second universe will not be written as "2:1" but as "513" (512 addresses from the first universe + 1 from the second).

The top black bar displays the column number. The grid is a matrix, so the column number should be added to the address displayed in the gray vertical bar (except the first column).

Fixtures can be selected using a DMX address by pressing the Select key twice and then the DMX address in the sheet - Have a look at the [DMX keyword](/grandma2/key_keyword_dmx/).

The Assign key can be used in combination with the sheet to patch fixtures - please have a look at the [Live patching](/grandma2/key_patch_livepatch/) topic.

 

Each fixture have a frame around the DMX channels it uses. If the fixture is selected, then the frame is yellow. Non selected fixtures will have a gray frame.

![](/img/grandma2/window_dmx_detail_v3-2-f85d9f.png)

_DMX Sheet detail_

If a DMX channel is parked then there is a blue square in the cell.

If there is a white or yellow square then the DMX address is under influence of the [DMX Tester](/grandma2/key_patch_dmx_testing/).

 

If the cursor is moved to a cell then the information about the cell is displayed in a green line text at the bottom of the window.

The look of the sheet can be modified including what information it displays. This is controlled by the Sheet Options.

Some options can be in the Title Bar as title buttons. This gives fast access to these options.

 

## DMX Sheet Options

The options can be opened by tapping the yellow ball in the upper left corner.

The options are all described in the [Sheet Options topics](/grandma2/key_of_sheet_options/).
