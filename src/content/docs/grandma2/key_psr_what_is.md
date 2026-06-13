---
title: "What is partial show read (PSR)"
description: "The Partial Show Read (PSR) is a function that allows you to load or import elements from one show into another."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_psr_what_is.html"
scrapedAt: "2026-06-12T21:28:23.360Z"
---
The Partial Show Read (PSR) is a function that allows you to load or import elements from one show into another.

The following elements can be imported from the source show:

- Macros
- Presets
- Filters
- Groups
- Effects
- Sequences
- Timers
- Executors and ExecutorPages
- Layouts

Partial Show Read respects the worlds. This means that elements will only be imported if the selected world allows to do so.

If objects imported need other elements, these elements are also imported. For example, if a sequence uses presets, these presets are automatically imported as well.

 

PSR is a two-step process. First, the two shows are compared and it is chosen which fixtures from the two shows need to be used. It is also possible to choose the 3D environment and the fixtures´ 3D positions.

After the prepare phase, it is possible to open the PSR menu and choose the elements that are to be imported.

Store the source show in the same version number as the destination show.

If you load a previous version, a warning pop-up appears:

![](/img/grandma2/popup_psr-prepare-not-possible_v3-3-5d2cba.png)

_Warning pop-up_

To save the show, please load the source show and store it in the latest version.

Import single executors or entire executor pages.

---

## Limitations

- Special Master cannot be imported.
- Executors with a width exceeding 1 will only be imported correctly if the entire executor page is imported.

The current Partial Show Read cannot be done on a station that is in a session. Please leave the session before doing the Partial Show Read.
