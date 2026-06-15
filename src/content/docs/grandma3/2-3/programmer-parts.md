---
title: "Programmer Parts"
description: "When presets are called into the programmer, the data is called into the selected programmer part unless the Cue Part setting of the preset pool or preset is ch"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/programmer-parts.html"
scrapedAt: "2026-06-15T18:25:21.409Z"
pagefind: false
---
When presets are called into the programmer, the data is called into the selected programmer part unless the Cue Part setting of the preset pool or preset is changed.

To change the Cue Part setting of a preset pool, follow the steps below.

Requirements:

1. Patched fixtures, see [Patch and Fixture Setup](/grandma3/2-3/patch/).
2. Stored and labeled dimmer and position presets. See [Create New Presets](/grandma3/2-3/presets_create/).
3. A visible dimmer preset pool.
4. A visible position preset pool.
5. A visible recipe editor.
6. A visible sequence sheet.

See [Add Window](/grandma3/2-3/wvm_add_window/) for steps 3 to 6.

Tap the MA logo on the dimmer preset pool title object to open the preset pool settings:

![](/img/grandma3/2-3/window_preset-pool_settings-b68e98.png)

Tap Cue Part and set it to 1.

Repeat the above procedure with the position preset pool and set Cue Part to 2.

1. Select some fixtures.
2. Tap one of the dimmer presets you have created.
3. Tap one of the position presets you have created.

The Recipe Editor could look like this:

![](/img/grandma3/2-3/window_recipe-editor_part-cue-777464.png)

Parts 1 and 2 have been added for the dimmer and position preset.

1. In the command line, type:

|                                                                    |                                             |
| ------------------------------------------------------------------ | ------------------------------------------- |
| ![](/img/grandma3/2-3/icon_commandline-input_logo_v2-0-59d23e.png) | User name\[Fixture]>Store Sequence 10 Cue 1 |
