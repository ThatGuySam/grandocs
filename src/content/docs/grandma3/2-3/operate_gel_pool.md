---
title: "Gels Pool"
description: "The Gels Pool displays manufacturers and their corresponding gel series. Each gel series has different amounts of gel in its pool. Manufacturer gel pools are lo"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/operate_gel_pool.html"
scrapedAt: "2026-06-15T18:25:21.861Z"
pagefind: false
---
The Gels Pool displays manufacturers and their corresponding gel series. Each gel series has different amounts of gel in its pool. Manufacturer gel pools are locked by default. Gels can be added and edited in a custom gel pool. For more general information about pools, see [Pool Windows](/grandma3/2-3/wvm_pool/).

- If you want to know about the gel keyword, see [Gel Keyword](/grandma3/2-3/keyword_gel/).
- The Color Picker uses a Book list with many filter options for gels. See [Using the Color Picker](/grandma3/2-3/operate_color_picker/) for more information.

Each gel in the manufacturer pool displays:

1. Gel name.
2. Key catalog number.
3. Appearance.

![Update this description text.](/img/grandma3/2-3/window_pools_gels_v2-1-3a0943.png)

Gels Pool

To open the Gels Pool:

- Tap Pools and Gels in the [Add Window pop-up](/grandma3/2-3/wvm_add_window/).

To select a specific manufacturer catalog:

1. Tap \<MA> under the MA Logo in the top left corner. A dropdown menu opens.
2. Select a manufacturer. The dropdown menu closes and the corresponding gel pool is shown in the Gel Window.

---

Edit a Gel Color

The following video shows an example of editing a color using the Custom Gel Pool:

[Vimeo video](https://player.vimeo.com/video/1026121766?title=0\&byline=0\&portrait=0\&color=ffeb0f)

Press Edit and tap a gel pool object to open the gel editor.

The Gel Editor is divided into two areas, the **Label** area (left) and the **Gel** area (right).

![Update this description text.](/img/grandma3/2-3/popup_editgel_v2-2-961e8f.png)

Gels Pool - Editor

To edit the gel color to green:

1. Tap Color. The color editor opens. 
2. Set the RGB faders to **000/100/000**. The color has changed to green.

   ![Update this description text.](/img/grandma3/2-3/popup_colorgel_scaled_v2-2-f44350.png)

   Gels Pool - Color Editor
3. Tap Ok. The editor closes and the gel color has changed.

---

Custom Gel Pool

The Custom Gel Pool allows you to store gels according to your personal preferences. In the custom gel pool, you can create your own gels or copy from existing manufacturer gel pools.

To copy gels in the custom gel pool:

1. Open a manufacturer gel pool and a custom pool next to each other.
2. Use the copy function in the swipey command. For more information, see Swipey Commands in [Pool Windows](/grandma3/2-3/wvm_pool/). The gel is copied into the custom gel pool.

To edit a gel in the custom pool:

1. Do the Swipey Command on the corresponding gel pool. 
2. Swipe to Edit. The editor opens.
3. Edit the pool object. 
4. Tap X. The editor closes and the gel has been edited.

To store the color of the last selected fixture as a new gel pool object:

1. Open the Custom gel pool.
2. Press Store and then tap an empty pool object in the gel pool. The color is stored as a new gel pool object. The pop-up closes and the gel is stored.

---

Gels Pool Settings

To open the Pool settings, tap MA in the top left corner. The Pool Settings pop-up opens.

- **Show Empty**: This toggle button can hide or show empty pool objects.
- **Appearance**: The appearance is applied behind the pool objects.
- **Pool Columns**: This defines the width for the pool objects. It does not change the size of the window. It defines how many columns of pool objects are in the window. If the window is wider than the number of columns, then the extra space is displayed as black (default color). If the window is smaller than the number of columns, the pool window can be scrolled horizontally. If the pool has a set width, then there is an icon (![](/img/grandma3/2-3/icon_pool-limited_12_v2-0-fc2d0c.png)) in the upper right corner of the title field.\
  The **Not Defined** value dynamically sets the width to match the window size even when the window is resized.\
  The **Take Current Width** sets the width to match the current size of the window. It does not dynamically change if the window is resized.
- **Font Size**: There are some different font size properties from 10 to 32. There is also a default property. This is the same as size 18. This simply changes the font size on the pool objects.
- **Pool Color**: This is the color for the title button in the pool.
- **Empty Color**: This color is applied to empty pool objects.
- **Reset Colors**: This resets the colors to the colors in the default color theme.
