---
title: "Select"
description: "To get the Select keyword in the command line, press Select."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_keyword_select.html"
scrapedAt: "2026-06-12T21:28:00.585Z"
---
To get the Select keyword in the command line, press Select.

You can also type **Select** or the shortcut **Se** in the command line.

## Description

The Select keyword, selects objects as default objects.

The **selected executor** is the target for all executor related commands, e.g. Store Cue 4. The selected executor is displayed in the [master section](/grandma2/key_widget_master_section/) in indicated by green color.\
The selected executor is displayed in the Sequence Executor and Sequence Tracking Sheet, if the **Link Mode** is **Link Selected**.

The **selected layout** is displayed in the Layout View, if the **Layout Selection** is **Link Selected**. For more information, see [layouts](/grandma2/key_layouts/).

The **selected mask** is used by any sheet (except DMX sheet), if the option **Follow Selected Mask** is **On**.

The **selected filter** is used by any action involving fixture parameters, e.g. store or delete a cue.

The **selected timer** is displayed in the clock, if the option **Select Timer** is **Link Selected**.

The **selected timecode slot** is displayed in the clock, if the option **Select TC Slot** is **Link Selected**.

The **selected timecode** is displayed in the timecode view, if the option **Timecode** is **Link Selected**.

The **selected camera** is displayed in the stage view and in the MA 3D, if the **Camera Selection** is **Link Selected**.

## Syntax

Select \[Executor-object]

Select Layout \[ID]

Select Mask \[ID]

Select Filter \[ID]

Select TimecodeSlot \[ID]

Select Timecode \[ID]

Select Timer \[ID]

Select Camera \[ID]

## Examples

- Select executor 5 as the default.

\[Channel]> Select Executor 5

 

- Select layout 2 in the layout view.\
  **Requirement:** Layout Selection is set to Link Selected.

\[Channel]> Select Layout 2
