---
title: "Parameters"
description: "Most people are used to thinking in DMX channels when considering the number of fixtures a system can control."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/system_parameter.html"
scrapedAt: "2026-06-12T21:24:17.254Z"
---
Most people are used to thinking in DMX channels when considering the number of fixtures a system can control.

MA Lighting cares more about **Parameters**.

## What are Parameters

Parameters are the different functions in the patched fixtures that the system needs to calculate to output DMX data to the fixture.

The different parameters in the show file can be seen in the [Parameter List](/grandma3/2-4/patch_parameter_list/). 

The software calculates the different parameters with a higher precision than what is output via DMX. So, the software calculates the parameter once, and it is then scaled to the number of DMX channels a fixture uses - typically one or two per attribute.

It is possible that several parameters are relevant for the same DMX channel. For instance, if XYZ is activated, then a fixture has more parameters. In this case, pan/tilt parameters or XYZ parameters are prioritized, and the DMX value is calculated and sent to the fixture's actual functions. So, a fixture might have virtual parameters.

Parameters are often compared with the control **Attributes** in the software. But there might be small differences. We consider attributes to be the different elements we can control in a fixture. The parameters are the elements the system needs to calculate to translate our control input into DMX values.

## Why Counting in Parameters and Not DMX

It is to your advantage. In the MA world, you do not pay extra for fixtures that are running 16-bit or 24-bit instead of the 8-bit used by one DMX channel.

More networked nodes or devices might be needed to output all the parameters that can be controlled.

**Example:**

A simple moving head with a dimmer might use 5 DMX channels. The channels can be defined like this:

| Definition: | DMX Channel: |
| ----------- | ------------ |
| Dimmer      | 1            |
| Pan         | 2            |
| Pan Fine    | 3            |
| Tilt        | 4            |
| Tilt Fine   | 5            |

The pan and tilt are one attribute each. Even though both pan and tilt each use two DMX channels, they are only counted as one each in the parameter count. This means that the fixture only costs 3 parameters.

| Definition: | DMX Channel: | Parameter cost: |
| ----------- | ------------ | --------------- |
| Dimmer      | 1            | 1               |
| Pan         | 2            | 2               |
| Pan Fine    | 3            | free            |
| Tilt        | 4            | 3               |
| Tilt Fine   | 5            | free            |

This can be a big advantage when many fixtures have 16-bit (or fine) channels.

## What about Preprogramming and Parameters?

The show can be preprogrammed and visualized in the [3D window](/grandma3/2-4/patch_3d_viewer/) without any parameter unlocking hardware. The lights are still visualized.

If third-party visualizers are used, then grandMA3 hardware is needed to give access to the parameters. The grandMA3 viz-key can be added to unlock visualization on a third-party visualizer. Learn more about the grandMA3 viz-key in the [Connect grandMA3 viz-key topic](/grandma3/2-4/fs_connect_viz_key/).

## Subtopics

- [Calculate Parameters](/grandma3/2-4/system_parameter_calculate/)
- [Expand the Number of Parameters](/grandma3/2-4/system_parameter_expand/)
