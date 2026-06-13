---
title: "06 - Groups"
description: "Fixture selection can be made using the methods explored in Chapter 4. However, when fixtures are often used together and need to be selected together, there is"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/qsg_group.html"
scrapedAt: "2026-06-12T21:25:15.583Z"
---
Fixture selection can be made using the methods explored in Chapter 4. However, when fixtures are often used together and need to be selected together, there is another option called **Groups**.

In a **Group**, we store the fixture selection and the order of the fixture selection.

Groups are organized in a **Group Pool**. This can be created as a window for easy creation, overview, and selection.

Make room in a user-defined area to create a group pool window. The **Groups** window is created like other windows and can be found in the **Data Pools** tab in the **Add Window** pop-up.

The pool looks like this when empty:

![](/img/grandma3/2-4/qsg_06_group-pool_empty_v2-1-3d9bc1.png)

The square on the top left is the **Title Field**. All pools have one of these. It tells you what kind of pool it is, and the MA logo is used to access the settings - just like the logo in the left corner of other windows' title bar.

Pools often have fewer settings than more complex windows, like the fixture sheet.

The other squares in the pool window are where we can store pool objects. The objects we store in the group pool are groups. A lot of the things we create are stored in pools. For instance, the views we have stored and modified are stored in a **Views** pool. The quickeys we have created are also in a pool.

## Create Group

We are going to create a few groups with our current fixtures.

The first group will be the front lights.

Make sure to start with an empty programmer and then select fixtures 1 thru 8. You do not need to give them a dimmer value.

Now, click and hold the first group field until a group object appears.

Looking at the **Command Line History** window, you can see feedback like this:

|      |               |
| ---- | ------------- |
| OK : | Store Group 1 |

Try to clear your programmer and then click the group. Now you have reselected the fixtures.

The group does not have a name, but we can easily label the group. The last thing we touch or click gets focus. This is indicated with a white frame. When a pool object has focus, and we start writing on our keyboard, the system assumes we are giving it a label.

You can simply start typing: Front - this opens the "Label" pop-up. Complete the labeling by pressing 'Enter' on the keyboard.

Now, the group has a name. There are other ways to do this.

Pool objects have a special **Swipey** menu that gives access to some common functions. The menu is accessed by clicking and holding the group and then moving the pointer out of the group pool object.

![](/img/grandma3/2-4/qsg_06_swipey-menu_v2-3-987eea.png)

The menu has seven buttons that appear around the pool object. The top center button can be used to give the group a new label. The menu is visible as long as you hold the mouse button pressed or as long as you touch the screen. Move the pointer/finger to the desired button and release. You can release it outside the buttons if you do not want to do anything.

Create a second group with fixtures 9 thru 14. Label it "Sides". Make sure it only contains the desired fixtures.

Our third group is all the blinders (fixtures 21 thru 34). Label it "All Blinders".

We are going to make two more groups. It is two selections of blinders. These two groups are all blinders, but we will make two symmetrical selections.

Group four is fixtures 21, 24, 25, 27, 28, 30, 31, and 34 - label this "Even Blinders". It is not strictly the even numbers, but just ignore this.

The last group contains the remaining blinders, which are not a part of group four. We can make this selection using a different selection method.

Clear the programmer and then write the following command in the command line and execute it:

|                                                                    |                                   |
| ------------------------------------------------------------------ | --------------------------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | Admin\[Fixture]>Group 3 - Group 4 |

Let us break down this command and look at what happens.

"Group 3" selects the fixtures in group number three (all the blinders).

"- Group 4" subtracts the fixtures that are in group four (the "Even Blinders").

The result is that we have a selection containing the blinders that are not in group four. Store this as group five and label this "Odd Blinders".

Now we have the groups we need.

---

## Recap

In this chapter, we looked at groups as a selection tool and created some useful groups.

Groups are described in detail in the [Groups section](/grandma3/2-4/group/) of the main manual.

The [next chapter](/grandma3/2-4/qsg_appear/) is about appearance.
