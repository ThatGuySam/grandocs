---
title: "zactrack"
description: "zactrack is an automated full-tracking follow system designed for open-air events, theater stages, and studios. Any number of performers can be placed in a 2D o"
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/osc_zactrack.html"
scrapedAt: "2026-06-15T18:25:37.834Z"
pagefind: false
---
[zactrack](https://www.zactrack.com/) is an automated full-tracking follow system designed for open-air events, theater stages, and studios. Any number of performers can be placed in a 2D or 3D space. zactrack precisely aligns output devices and special effects equipment and sends XYZ coordinates to grandMA3.

### Example 1:

Trigger cues on a grandMA3 console with a performance area defined by a 3x3 2D grid. The position will trigger cues in that specific zone number, when walking with a tracker.

1. Enter the console IP and Port.
2. Enter the exact string address and argument the console expects. In the example below on the console, it is executor 202 on page1.

![](/img/grandma3/2-3/img_osc-zactrack_1_v1-9-5172b5.png)

 

3. Define the Coordinate System using calibration points (via Pucks / Trackers / Disto).
4. Set the grid size and order.

![](/img/grandma3/2-3/img_osc-zactrack_2_v1-9-57eda9.png)\
The 2D grid is created.

 

### Example 2:

Trigger a fader on a grandMA3 console. When walking in defined axis with a Tracker the position will trigger for example, linear intensity, for that specific fader.

1. Enter the console IP and Port.
2. Enter the exact string address the console expects. In the example, it is the fader of executor 201 on page 1 of the grandMA3 software.
3. Set Range (int) as Mode.

![](/img/grandma3/2-3/img_osc-zactrack_4_v1-9-1e6397.png)

 

4. Define the Axis Output, X only.
5. Define the Coordinate System.
6. Set the X Range for the fader. These values must match the corresponding setting in the grandMA3 software. The default value is 0 to 100.

![](/img/grandma3/2-3/img_osc-zactrack_5_v1-9-e84b87.png)
