---
title: "What are worlds"
description: "Worlds are a functionality in the grandMA2 that allows you to limit what is possible to access and what is displayed in windows."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_wfm_what_are_worlds.html"
scrapedAt: "2026-06-12T21:28:17.812Z"
---
Worlds are a functionality in the grandMA2 that allows you to limit what is possible to access and what is displayed in windows.

Worlds are organized in a World pool. Since it is a pool, it might be a good idea to read the [Pools in General section](/grandma2/key_pools/).

It could look like this:

![](/img/grandma2/window_world-pool_v3-3-d794af.png)

_World pool - pool style_

It can be changed to "Sheet Style" in the pool options. Then it could look like this:

![](/img/grandma2/window_world-pool_sheet-style_v3-3-9b8046.png)

_World pool - sheet style_

The first world in the pool is locked from the factory. It contains everything and is used when you do not want to exclude anything - it is called **Full**.

The world pool is shared among all users in the show, but each user can have different worlds selected.

You can select a different world by simply pressing the pool object. The green line indicates the selected world.

If a world, other than number one (Full), is selected, then there is a World Icon ![](/img/grandma2/icon_world_v3-2-34fa97.png) in the title bar of sheets and other windows that is affected by the world selection. The icon might also be in the Command Line Input - it depends on your Message Center settings. 

Worlds can contain a selection of fixtures and/or a selection of Attributes.

If a world only have some (not all) Attributes then the pool object will display the [Preset Type Marker](/grandma2/key_ws_colors_system/#preset_type_marker) at the bottom of the pool object.

 

Using different worlds can be a big help in multi user environment. It can be used to separate the lighting rig into different parts for different programmers.

Another good use is to be in a world without the attributes that is undesired to get programmed in sequences. This could be control channels to accidentally resets fixtures or turns off the lamps.

 

Selecting a world will hide fixtures, that are not a part of this world, in sheets and stage view/MA 3D. Attributes that are not in the world will not be visible in sheets.

It is important to know that you can only affect the fixtures and attributes in your selected world. This is valid for programming actions. Read more in the [Use worlds when programming topic](/grandma2/key_wfm_use_worlds/).

Playback actions (executors and sequences) are not directly affected by your selected world.

You can assign a world to an executor or a sequence - but it is not linked to the worlds your user has selected. Read more in the [Apply worlds or filters to executors and sequences topic](/grandma2/key_wfm_apply_to_exec_seq/).

Worlds can be assigned to User Profiles. Then the users, with this User Profile, will be limited to only the assigned world and cannot select a different world. Read about it in the [Create User Profiles and Users topic](/grandma2/key_single_multi_systems_create/).

 

Read the next page for more on how to [Create worlds](/grandma2/key_wfm_create_worlds/).
