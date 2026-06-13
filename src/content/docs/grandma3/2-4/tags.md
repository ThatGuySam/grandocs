---
title: "Tags"
description: "Tags allow you to organize, link and cross-reference objects throughout the software. They are also a great tool for busking shows. All objects that have the sa"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/tags.html"
scrapedAt: "2026-06-12T21:24:57.861Z"
---
Tags allow you to organize, link and cross-reference objects throughout the software. They are also a great tool for busking shows. All objects that have the same tag can be triggered or selected together.

Tags are organized in the tags pool. To open this pool, see the Pools tab in the [Add Window](/grandma3/2-4/wvm_add_window/) pop-up.

![Update this description text.](/img/grandma3/2-4/window_tags_01_v3-2-4-7949c1.png)

Tags pool

To access the settings for the pool, tap MA in the upper left corner of the pool.

---

## Assign Tags

Tags can be assigned to other objects, like sequences or groups. It is possible to assign a tag to another tag.

Multiple tags can be assigned to the same object.

There are multiple ways to assign tags to objects:

- **Tag Pool Objects**

1. Press Edit and tap on an object in the tags pool. The tag editor opens.
2. Tap Add New Tag Reference. A pop-up opens.
3. Select an object.
4. Tap Assign.

- **Pool Objects**

1. Open the [swipey commands](/grandma3/2-4/wvm_pool/#h2__1144791563) on the pool object and select Edit or Edit Setting​. A pop-up opens.\
   For some pool objects, for example sequences or macros, additionally tap Settings in the title bar of the pop-up.
2. Tap Tags. The **Edit Tags** pop-up opens.
3. Select a tag and tap Assign.

- **Other Objects**\
  This applies for example to recipes, cues, or macro lines.

1. Edit the cell in the **Tags** column. The **Edit Tags** pop-up opens.
2. Select a tag and tap Assign.

- **Command Line**\
  For more information on assigning tags using the command line, see [Tag Keyword](/grandma3/2-4/keyword_tag/).

Already assigned tags can also be unassigned using the options listed above.

![Update this description text.](/img/grandma3/2-4/window_tags_2_v3-2-4-420732.png)

Edit Tags pop-up

The left side of the **Edit Tags** pop-up displays tags that are assigned to the corresponding pool object. The right side displays tags that are not assigned.\
In the pop-up, tags can also be locked and unlocked and protected against **Kill Instant** and **Kill Delayed** (see [below](/grandma3/2-4/tags/#Tag_Types)).

When a tag is assigned to a pool object, ![](/img/grandma3/2-4/icon_tags_15px-46e799.png) is displayed on the pool object. The names and numbers of assigned tags are displayed on Tags in the pool object settings.

![Update this description text.](/img/grandma3/2-4/window_tags_02_v3-2-2-cbb21f.png)

Sequence pool with tags assigned to sequences 1 and 3

In the sequence sheet and editors like the sequence editor or the macro editor, the assigned tags are displayed in the area between the title bar and the grid. They can be edited and perform pool actions like the objects in the tags pool. The background color of the appearance assigned to the tag defines the background color of the tag displayed in the editor.

![Update this description text.](/img/grandma3/2-4/window_tags_04_v3-2-4-b99b7c.png)

Sequence sheet with two assigned tags

---

## Edit Tags

To edit a tag, press Edit and tap on an object in the tags pool.

The tag editor displays the objects the tag is assigned to and the following information:

- **Data Pool****:** The corresponding data pool.
- **Class****:** The object type of the assigned reference.
- **No:** The number of the corresponding pool object.
- **Name:** The name of the pool object.
- **Protect:** If set to **Yes**, **Kill Instant** and **Kill Delayed** do not affect the assigned reference. The default is **No**.

![Update this description text.](/img/grandma3/2-4/window_tags_05_v3-2-4-b84245.png)

Tag editor

Multiple objects can be assigned to a tag at the same time using Add New Tag Reference in the tag editor. In the **Add Tag References** pop-up, multiple objects can be selected and assigned consecutively. To do so, select an object line and tap Assign.

If you enable Settings in the title bar of tag editor, Name, Scribble, Appearance, Tags, Note, Tag Type, and Action can be set and Forward Commands can be toggled on or off. The actions that are selectable for the pool objects are the same as for the [pool](/grandma3/2-4/tags/#pool_action).

The following tag types are available:

- **Kill Instant:** Other playbacks using the same tag will start their OffCue immediately when starting the sequence.
- **Kill Delayed:** The sequence that was started will complete its fade in first and then the other playbacks using the same tags will start their OffCue.

For tag types to function, the tag and tag type need to be set before triggering the sequence. Otherwise, the tag type will work as soon as the corresponding sequences have been triggered once.

When a playback is started by a tag, the **Trigger** column in the [Off Menu](/grandma3/2-4/executor_running_playbacks/#h2__845100434) and [Running Playbacks](/grandma3/2-4/executor_running_playbacks/) window reports the tag.

|                                            |                                                                                                                                                                                                                                                                                        |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                                                                                                                                                              |
|                                            | **Kill Protect** does not protect a sequence from being disabled by **Kill Instant** or **Kill Delayed** executed from a tag. For more information on **Kill Protect** see [Sequence Settings](/grandma3/2-4/cue_sequence_settings/) and [Kill Keyword](/grandma3/2-4/keyword_kill/).  |

|                                            |                                                                                                                                                     |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-4/tip_gray-639af3.png) | **Hint:**                                                                                                                                           |
|                                            | For temporary playback actions (Flash, Temp, Swap, and Black) **Kill Instant** and **Kill Delayed** do not switch off other playbacks permanently.  |

If Forward Commands is toggled on, [playback commands](/grandma3/2-4/cue_playback/#h2__483879150) can be executed for all references of a tag at the same time. It is enabled by default.\
This applies to >>>, <<<, Go+, Go-, Goto, Halfspeed, Load, On, Off, Pause, Rate1, Speed1, Toggle, and Top.

---

## Example 1 – Apply Kill Instant and Kill Delayed

**Requirements:**

- Have a show with some lights patched, for example the demo show.
- An open 3D Viewer is recommended to see the effects of the tags more clearly.

Create three individual sequences 2, 3, and 4 for fixtures 9, 11, and 13 with the same cue:

- Dimmer 100%
- Fade 2 seconds

Set up tag 1:

1. Edit tag 1:

   1. Press Edit.
   2. Tap on the first pool object in the tags pool.

2. Add tag references:

   1. Tap Add New Tag Reference.
   2. Select sequences 2 thru 4.
   3. Tap Assign.

3. Tap Settings in the title bar of the editor.​

4. Set Tag Type to **Kill Instant**.

\[+] [Show Image](javascript:void\(0\))

\[-] [Hide Image](javascript:void\(0\))

![Update this description text.](/img/grandma3/2-4/window_tags_07_v3-2-4-e8a6ad.png)

Editor tag 1

Trigger one of the sequences that have tag 1 assigned.

**Result:** Other sequences that have tag 1 assigned are disabled immediately.

Edit tag 1 and change Tag Type to **Kill Delayed**.

**Result:** Other sequences are disabled after the triggered sequence has completed its fade in.

See the effects of the tag types **Kill Instant** and **Kill Delayed** in this video:

[Vimeo video](https://player.vimeo.com/video/1178813278?title=0\&byline=0\&portrait=0\&color=ffeb0f) 

Edit tag 1 and set **Protect** to **Yes** for sequence 3.

**Result:**

- If you trigger sequence 2, it deactivates sequence 4 but not sequence 3.
- Sequence 3 deactivates sequence 2 and sequence 4.

See how **Protect** is applied to a sequence in the following video:

[Vimeo video](https://player.vimeo.com/video/1178819209?title=0\&byline=0\&portrait=0\&color=ffeb0f)

---

## Example 2 – Apply Forward Commands

**Requirements:**

- Have a show with some lights patched, for example the demo show.
- An open 3D Viewer is recommended to see the effects of the tags more clearly.

Create two or more sequences with different groups of fixtures, for example all spots and LED wall:

- Dimmer 100%
- Color blue

Set up tag "Blue":

1. Press Edit.

2. Tap on an object in the tags pool.

3. Add tag references:

   1. Tap Add New Tag Reference.
   2. Select the sequences you created.
   3. Tap Assign.

4. Tap Settings in the title bar of the editor.

5. Set Name to "Blue".

6. Set Appearance to blue.

7. If Forward Commands is disabled, enable it.

\[+] [Show Image](javascript:void\(0\))

\[-] [Hide Image](javascript:void\(0\))

![Update this description text.](/img/grandma3/2-4/window_tags_6_v3-2-4-8ec21e.png)

Editor Tag "Blue"

Press Go+ and tap tag Blue.

**Result:** Go+ is executed for all sequences that have the tag Blue assigned.
