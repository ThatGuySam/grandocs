---
title: "DMX Priorities"
description: "Multiple DMX sources can affect values to the same parameter, and the console resolves competing values using the following source priority order, followed by o"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/dmx_priorities.html"
scrapedAt: "2026-06-12T21:24:46.253Z"
---
Multiple DMX sources can affect values to the same parameter, and the console resolves competing values using the following source priority order, followed by output modifiers and selection overrides.

## DMX Data Source Priorities

1. External input sources like sACN, Art-Net, DMX In, and PSN.

2. DMX Tester.

3. Parked values.

4. Playbacks with Super priority.

5. Programmer (Freeze enabled).

6. Standard playback priorities.

   1. Swap
   2. HTP
   3. Highest
   4. High
   5. LTP
   6. Low
   7. Lowest

7) Programmer (Freeze disabled).

### Merge Behaviors

1\. HTP: Highest dimmer value takes precedence.\
2\. LTP: Latest attribute value takes precedence.

### Output Modifiers

1\. Grand Master\
2\. World Masters\
3\. Group Masters

### Selection Overrides

1\. Highlight\
2\. Lowlight\
3\. Solo

## Explanation of Each Layer

### 1. External Input Sources (sACN / Art-Net / PSN / DMX In)

External inputs like sACN, Art-Net, and DMX In take the highest priority depending on how they are merged in. Their behavior depends on Merge Mode and Input Priority. 

Merge Mode includes Prio, HTP, LowTP, and Off.

Input Priority includes Super, Prog, Highest, High, LTP, Low, and Lowest.

For more information see [DMX Port Configuration](/grandma3/2-4/dmx_port_config/).

PSN continuously injects position data and behaves like a high-priority position source depending on the merge setting of the universe the linked MArkers are patched to.

For more information see [PSN](/grandma3/2-4/remote_inputs_psn/).

### 2. DMX Tester

Overrides almost everything on the console. Used for troubleshooting and direct address output. DMX Tester takes priority over programmer, playbacks, and parked values.

For more information see  [DMX Tester](/grandma3/2-4/patch_dmx_sheet/#h2_1956195346) in the [DMX Sheet ](/grandma3/2-4/patch_dmx_sheet/)topic.

These values are kept until the DMX Tester is cleared using the command line or the Tester Encoder Bar.

### 3. Parked Values

Hard locks a DMX value until Unpark is used. Often used for: Work lights, stuck channels, protecting dimmers.

For more information see [Park Keyword](/grandma3/2-4/keyword_park/).
