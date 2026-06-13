---
title: "What are filters"
description: "The Filters are used to limit what can be stored, played back or retrieved using the \"At\" key."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_wfm_what_are_filters.html"
scrapedAt: "2026-06-12T21:28:18.074Z"
---
The Filters are used to limit what can be stored, played back or retrieved using the "At" key.

Filters contain a selection of Attributes and data Layers (Value, Value Times and Effects). It does not contain any fixture information.

Filters are organized in a Filter pool. Since this is a pool it might be a good idea to read to [Pools in General section](/grandma2/key_pools/).

The Filter Pool could look like this:

![](/img/grandma2/window_filter-pool_v3-3-434490.png)

_Filter pool - pool style_

It can be changed to "Sheet Style" in the pool options. Then it could look like this:

![](/img/grandma2/window_filter-pool_sheet-style_v3-3-bef586.png)

_Filter pool - sheet style_

The filter pool is a global pool that is shared by all users.

Filters in the pool are used when you store values ([Use filter when storing topic](/grandma2/key_wfm_use_filter/)), make a circular copy, retrieve data using the At key ([Use filter when grabbing values topic](https://help.malighting.com/grandMA2/en/help/ef223894-b4ed-4a33-8b8e-4e4340d91a4c.html)), or as a filter on Executors and Sequences ([Apply worlds and filters to executors and sequences topic](/grandma2/key_wfm_apply_to_exec_seq/)).

There is always one active filter. The first pool object is called "All" and it contains all attributes and layers. This means that it does not filter any data. It is also locked and cannot be edited.

A filter can be applied(called) and/or permanently selected. An applied filter have a green bar in the middle (behind the colored markers). A selected filter have a green background color in the name area (or number area in sheet style). You can select a different filter by pressing Select followed by the desired filter button. You can call a different filter temporarily by just pressing one of the filters.

A called filter overwrites the selected filter, but will only be used the next time an action is performed that uses the filter - then it will jump back to using the selected filter.

When a different filter than the "All" filter is selected, then the At key will flash and the filter icon ![](/img/grandma2/icon_filter_small_v3-2-a5501b.png) is in the command line and Message Center (default setting).

 

For more information about the colors and markers please read the [System Colors topic](/grandma2/key_ws_colors_system/).

The data Layer Markers are only visible if there is one or more being filtered. It will then display the allowed layers. If all layers are Off (filtered) then there is also no markers. This would block all value data from passing the filter!

---

## []()The Command Filter window

It is possible to create a window that displayed the filter settings. It's called **Command Filter** and can be found in the "Other" tab in the Create Basic Window pop-up.

It could look like this:

![](/img/grandma2/window_command-filter_v3-3-68c8d4.png)

_Command Filter window_

The primary functions of this window is described in the [Create filters topic](/grandma2/key_wfm_create_filters/).

This window will always show you the current filtering, and allow you to do temporary modifications.
