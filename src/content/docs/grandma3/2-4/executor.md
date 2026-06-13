---
title: "Executors"
description: "The executors are handles and controls to other objects."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/executor.html"
scrapedAt: "2026-06-12T21:24:56.455Z"
---
The executors are handles and controls to other objects.

They are often used to control sequences, but they can control other objects.

The idea is that an object (for instance, a sequence) is assigned to the executor. The executor can then control the object. Several executors can control the same object.

A sequence assigned to an executor is running cues from the sequence pool. In essence, the executor is manipulating or sending commands to the sequence in the pool.

 

Executors are physical keys (executor buttons), knobs (executor knobs), and faders (executor faders) on the grandMA3 hardware. They can also be represented as on-screen virtual executors - these can be viewed and operated in the [Playback Window](/grandma3/2-4/executor/#playback_window) (see below).

Read more about the physical executor hardware in the [Executor Elements topic](/grandma3/2-4/do_control_executor/).

There are 4 rows of executors. The bottom row is numbered from 101 up to 190. This row only has a single executor button. The row above is numbered from 201 up to 290. This row has an executor button and an executor fader. The next row is from 301 up to 390. This row has an executor button and a rotating executor knob. The top row is from 401 up to 490. This row also has an executor button and a rotating executor knob.

The Xkeys are also executors. The executor buttons labeled X1 | Clone to X8 | DMX are executor 291 to 298. The executor buttons labeled X9 to X16 | Exec are executors 191 to 198.

Executors are organized in wings. There are vertically 15 columns of executors on a wing. The columns are organized in sections of 5. There are 60 (15 columns x 4 rows) executors on a wing. There are 6 wings for a total of 360 (6 wings x 60 executors) executors plus the 16 from the Xkeys - the total is 376.

The physical device might have fewer executors than the software's amount. For instance, the grandMA3 compact console has 2 x 5 columns of executors.

The executors can also be used from the command line using the [Executor keyword](/grandma3/2-4/keyword_executor/).

## []()Executor Pages

The 376 executors are just on one page. It is possible to create up to 9 999 executor pages in each [Data Pool](/grandma3/2-4/datapool/). Each page has its own setup of executors. Executors that are active on one page are still active when the selected page is changed to another.

The executor pages can be seen and labeled in the **Page Pool** - it can be [created as a window](/grandma3/2-4/wvm_add_window/).

![](/img/grandma3/2-4/window_pages-pool_v1-9-051df9.png)

_Page pool with page 1 selected._

The page pool is also available as a pop-up that can be opened by tapping the middle part of the page selector.

![](/img/grandma3/2-4/img_page-selector_v0-8-02c41e.png)

_Tap the middle part of the page selector to open the page pool pop-up_

There are no functional differences between the pool as a pop-up or window.

Pages are automatically created when the Page+ and Page- keys are used to change through the pages. The up and down arrows in the page selector can also be used to change the page, just like the physical keys.

A page can also be created using the following syntax:

Store Page \[Page\_Number] (\["Page\_Name"])

The page name is optional in the syntax above. Read more in the[ Page keyword](/grandma3/2-4/keyword_page/) topic.

## Executor Labels

The letterbox screens above the executors show the labels for the executors. The bottom of the left command screen shows the labels for the Xkeys.

![Example of the playback bar for the first section of 5 x 4 executors](/img/grandma3/2-4/img_playback-bar_executor-topic_v1-9-b2926f.png)

_Example of the playback bar for the first section of 5 x 4 executors_

The executor labels above the executors are a part of the Playback Bar. Read more about them in the [Playback bar topic](/grandma3/2-4/ws_playback_bar/).

The labels display how the encoders are grouped, what object they control, and what handle function each executor has.

Read more about how to change all these things in the [Assign Object to an Executor topic](/grandma3/2-4/executor_assign/).

The labels take appearance and scribbles from the object assigned. For example, if a sequence has a special appearance, this appearance is also displayed in the playback bar.

## []()Playback Window

The Playback window is a virtual representation of the physical executors.

![Playback window showing all four rows and both labels and executor handles](/img/grandma3/2-4/window_playback_v1-9-3-1653a1.png)

_Playback window showing all four rows and both labels and executor handles_

The window can automatically adjust the number of visible executors based on the window's width and the selected number of sections. This means that a window can minimum have 5 x 4 executors and a maximum of 15 x 4 (one wing). The window's minimum size to display a section of 15 executors is 10 squares wide on a screen.

The virtual executors can be operated on the screen.

### Playback Window Settings

The settings allow for customization of the window.

The settings can be accessed by tapping the MA logo in the upper left corner.

![Playback window settings](/img/grandma3/2-4/playback_window_settings-cbd966.png)

Playback window settings

There are toggle buttons that can show or hide the four executor rows. There are also settings to show or hide the labels and the executor handles. This makes it very flexible. For instance, it could just show the labels for the 200 row of executors or just the executor handles for the 100 row executors.

The Page and WingID settings are also described in the [Window Settings](/grandma3/2-4/wvm_settings/) topic.

The Executors setting toggles the displayed on-screen copies of the relevant faders, knobs, and keys. 

In additon, Labels shows or hides the executor or Xkeys labels.

The #Sections setting selects how many sections of five columns the window should display. The properties are:

- **Auto**:\
  The window displays as many sections as possible based on the width of the window and a minimum width of each column.
- **1**:\
  The window only shows the first section of executors - 5 columns.
- **2**:\
  The window shows the first and second sections of executors - 10 columns.
- **3**:\
  The window shows all three sections of executors in the wing - 15 columns.

The properties with a specified number of sections will always show the selected amount, even when the window width makes it hard to use.

Subtopics

- [Executor Configurations](/grandma3/2-4/executor_configurations/)
- [Assign Object to an Executor](/grandma3/2-4/executor_assign/)
- [Running Playbacks](/grandma3/2-4/executor_running_playbacks/)
- [Special Executors](/grandma3/2-4/executor_special/)
