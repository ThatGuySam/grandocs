---
title: "Parameters"
description: "Most people are used to thinking in DMX channels when considering the number of fixtures a system can control."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/system_parameter.html"
scrapedAt: "2026-06-15T18:24:52.776Z"
pagefind: false
---
Most people are used to thinking in DMX channels when considering the number of fixtures a system can control.

MA Lighting cares more about **Parameters**.

## What are Parameters

Parameters are also called **Attributes** in the software. A dimmer function is a parameter, and a pan function is also a parameter.

The software calculates the different attributes with a higher precision than what is output via DMX. So, the software calculates the parameter or attribute once, and it is then scaled to the number of DMX channels a fixture uses - typically one or two per attribute.

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

The show can be preprogrammed and visualized in the [3D window](/grandma3/2-3/patch_3d_viewer/) without any parameter unlocking hardware. The lights are still visualized.

If third-party visualizers are used, then grandMA3 hardware is needed to give access to the parameters. The grandMA3 viz-key can be added to unlock visualization on a third-party visualizer. Learn more about the grandMA3 viz-key in the [Connect grandMA3 viz-key topic](/grandma3/2-3/fs_connect_viz_key/).

## Subtopics

- [Calculate Parameters](/grandma3/2-3/system_parameter_calculate/)
- [Expand the Number of Parameters](/grandma3/2-3/system_parameter_expand/)
