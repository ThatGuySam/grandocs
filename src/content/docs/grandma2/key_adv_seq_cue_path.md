---
title: "Cue path"
description: "Each cue and cue part can have a path assigned. It is done in the Sequence Executor Sheet, where there is a Path column."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_adv_seq_cue_path.html"
scrapedAt: "2026-06-12T21:28:15.877Z"
---
Each cue and cue part can have a path assigned. It is done in the [Sequence Executor Sheet](/grandma2/key_cs_cue_sequence/), where there is a **Path** column.

The path is used by attributes fading from a value and into the value stored in the cue where the path is assigned. The path defines the transition form/path.

Editing a cell in this column will open a **Select Fade Path pop-up** like this:

![](/img/grandma2/popup_select-fade-path_v3-3-5b380e.png)

_Select Fade Path pop-up_

This lists the predefined fade paths including the **No Path** option. Most of the paths in this list only exist as fade paths. They cannot be imported or edited.

Read below for a description of the predefined paths for cues and cue parts.

The path is assigned different than most other elements. This is because the fade path is an object that is assigned to a different object. Use the following syntax:

Assign Fadepath \[path number] (At) Cue \[cue number] (Part \[par number] )

Once a fade path is assigned to a cue, then it cannot be removed. Assigning the **Linear** path will give the same result as not having a path defined.

 

Custom paths can be made in the [DMX Profiles Graph Editor](/grandma2/key_dmx_profiles/). If there are customs paths, then they will appear at the bottom of the **Select Fade Path pop-up**.

---

## []()Predefined Fade Paths

There are some predefined paths in the pop-up pictured above.

The **No Path** option is actually not a path but selecting this will remove any path assigned to the cue or cue part.

The **Linear** path is the same as not having a path assigned. This path can be assigned using the command line. This means that it can be used to replace any other paths.

There are four different forms. Each form can be at the beginning at the fade and at the ending of the fade. Resulting in the list of combination in the predefined fade path pop-up.

The beginning of the path defines the acceleration of the fade. The end of the path is the de-acceleration of the fade.

The **Normal** form is the same as linear. Having this at either end will not add any softening of the fade.

The **Low** form offers the lowest or slowest acceleration/de-acceleration. 

The **Mid** form is between the Low and High forms.

The **High** form offers the highest or fastest acceleration/de-acceleration. It is still a softening of the fade compared to the linear path.

 

The following picture displays four different paths for comparison. They might not be completely correct but is exaggerated to make the differences more visible.

The white path is the **Linear** path - this is the same as having the Normal form at both the beginning and the ending.

The blue path is the **High-High** path. The green path is the **Mid-Mid** path. Finally the red path is the **Low-Low** path.

![](/img/grandma2/img_path-comparison_v3-3-cebcea.png)

_Four paths for comparison_

The vertical axis is the fade time. The horizontal axis describes the fade from one value to the next.
