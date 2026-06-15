---
title: "Executor Configurations"
description: "Executor key and fader configurations can be saved and reused. Read the Assign Object to an Executor topic for information on changing the assignment."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/executor_configurations.html"
scrapedAt: "2026-06-15T18:25:25.508Z"
pagefind: false
---
Executor key and fader configurations can be saved and reused. Read the [Assign Object to an Executor topic](/grandma3/2-3/executor_assign/) for information on changing the assignment.

The configurations are stored in an Executor Configuration pool. This can be created as any other window. Read the [Add Window topic](/grandma3/2-3/wvm_add_window/) to learn how.

![Executor Configuration pool with a selected configuration ](/img/grandma3/2-3/window_configs-pool_v1-9-3-251ffc.png)

_Executor Configuration pool with a selected configuration_

Each object type that can be assigned to an executor has a default executor configuration used if nothing changes. This is described below.

The selected pool object is used as the default for sequences.

This configuration can be changed in the **Assign Menu.**

The Assign Menu can be opened by pressing Assign and then an executor button. The menu is used to set up executors. Learn more in the [Assign Object to an Executor topic](/grandma3/2-3/executor_assign/).

![Key and Fader configurations](/img/grandma3/2-3/key_and_fader_configs_v-2-1-8f2b01.png)

_Key and Fader configurations_

In the example above, there are several Keys and Encoders that have a different assignment than the original saved configuration. The different assignments are marked with a cyan color bar.

In the title bar of the assign menu, is Executor Config. button.

![](/img/grandma3/2-3/menu_assign_titlebar_v2-0-f9f044.png)

_Title bar of the assign menu_

Executor Config. shows the currently selected configuration, and tapping it opens a small select pop-up where any existing executor configurations can be selected or a new one can be created.

Load is used to load the selected configuration onto the keys, encoders, and faders. Save can be used to save the currently assigned functions to the selected configuration.

For more information on the pop-up and creating and editing executor configurations in the handle tab of the assign menu, read [Assign Object to an Executor](/grandma3/2-3/executor_assign/#h2_420566424).

---

Editing the configuration pool object opens an editor like this:

![](/img/grandma3/2-3/popup_edit-configuration_v2-0-5571bd.png)

_Edit configuration pop-up for the first pool object_

Here it is possible to change the name of the executor configuration.

This is also where the executor configuration's width and height are set. It is not shown here, but the configuration also knows the starting row for the configuration. This means that a configuration of 1x1 can be different for each of the four rows.

The ExecConfigType defines what type of object the setting is relevant for. Tapping the button opens a small pop-up with all the possible objects.

The executor configuration can also have an appearance and scribble assigned. This is only visible in the pool.

A note can be added to the executor configuration.

Tapping List References opens an info pop-up showing the objects that reference the configuration and what other objects this configuration might depend on.

Recast Config is used when a configuration has been saved with changes, and these changes should also be applied to the other executors that use this configuration. Saving a change to a configuration does not automatically apply the changes to other executors.

Pressing Recast Config applies the changes to all the executors using the configuration. The recast can also be applied using the [Recast keyword](/grandma3/2-3/keyword_recast/).

---

## []()Executor Configuration Preferences

The default executor configuration for each object is stored in the Preference and Timing.

This is accessed by pressing Menu /![](/img/grandma3/2-3/icon_gear_15px-1dd78f.png) and then Preference and Timings, and finally Executor Config.

![](/img/grandma3/2-3/executor_config_pref_and_timings_menu_v2-1png-275b6f.png)

Preferences and Timings - Executor Config menu

This menu has a setting for each object type that can be assigned to an executor. Tapping each of these settings opens a small select pop-up where any of the executor configurations can be selected as the default settings for the object type.
