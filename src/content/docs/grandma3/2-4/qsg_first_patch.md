---
title: "02 - First Patch"
description: "The new show file we created is empty!"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/qsg_first_patch.html"
scrapedAt: "2026-06-12T21:25:15.369Z"
---
The new show file we created is empty!

We need to add some devices to our **Patch** to do something meaningful with the grandMA3.

We are going to create a mock-up festival rig. It will not be the perfect rig, but it will give us a very diverse and flexible rig that we can use to try some of all the features in the software.

The setup will have 7 "pods", each with the same fixtures. But before we add many complex fixtures, we will start with the conventional fixtures in our setup.

The conventional fixtures will be front light, some sidelight, and blinders. We will start with these simple fixtures to get a basic understanding of the workspace and how to structure the patch and show file.

 

Everything about fixture setup is done in the patch. Some tools might give us easier access to fixture properties (we will get back to these in future chapters), but every fixture property ultimately lives in the patch.

Fixture properties include the fixture type and mode, the DMX patch address, and the fixture's position in a virtual 3D space.

There are different tools available to us for organizing the fixture setup. I am going to explain some of them before we start adding fixtures.

### Grouping Fixtures

A fixture is typically represented as a single row in a **Fixture Sheet**. This makes it possible to see all the different values a fixture may have. If we have a lot of fixtures, it might be a very long list.

Fixtures can be grouped inside a special grouping fixture. This is especially nice for fixtures that often do the same thing. The grouping fixture is a virtual fixture that can have an ID number. Using this ID to select fixtures actually applies the values to the fixtures inside. The grouping fixture itself does not contain any values. Fixtures within a grouping fixture must have their own ID and can be accessed individually by their ID.

Having fixtures inside grouping fixtures creates a hierarchy. There are many hierarchies in grandMA3, and they can have many layers. Two terms often used with hierarchies are **Parent** and **Child**. When talking about grouping fixtures, the actual fixtures are the children inside the parent (the grouping fixture). The child fixtures can be selected by their unique ID, as mentioned above, or by the parent ID and a child index number. We'll explore this more in Chapter 4.

### Subfixtures

Some fixtures have subfixtures. This is often the case when a fixture has multiple elements that do the same. For instance, an LED fixture with multiple LED cells that can be controlled individually. There would be a parent fixture with all the shared functions, for instance, pan and tilt. Then, there would be a child or subfixture for each LED element. These subfixtures are addressed as a sub-ID from the parent fixture ID. The parent and child IDs are separated by a dot (.).

For example, a Clay Paky A.leda B-EYE K10 can have the LEDs separated into 19 different individually controlled LEDs (Standard RGB mode). If the fixture has ID 17, selecting 17 would only select the main parent fixture. If the main and all the subfixtures need to be selected, then you need to select "17." - that is the ID followed by a dot. Selecting fixture 17.1 would only select the first LED element - the first subfixture.

### IDTypes

The fixtures can be organized in different **IDTypes**. There are eight different types that we can use. Two of those are **Fixture** and **Channel**. The other six can be renamed to match our needs. The default names are **Houselights**, **NonDim**, **Media**, **Fog**, **Effect**, and **Pyro**.

Each IDType has its own number range starting at 1.

A fixture can have two different ID numbers. The first one is always the **Fixture** IDType, which is called **FID**. The second can be one of the other IDTypes and is called **CID**. A fixture needs at least one ID so we can select and ultimately control it.

## Enter the Patch

Here is the goal for this chapter:

- Add 14 standard dimmer channels that we can control.
- Add another 14 dimmer channels that are audience blinders.
- Organize the blinders in a Grouping fixture.

We need to get to the patch. Press Menu (or the Gear Icon ![](/img/grandma3/2-4/icon_gear_24_v1-9-17627a.png) in the onPC) and then click Patch.

### Insert New Fixtures Wizard

The first time we open the patch, it is empty, and we are presented with the **Insert New Fixture wizard**, which helps us provide the necessary information to add** **fixtures.

![](/img/grandma3/2-4/qsg_02_empty-patch_v2-4-73982a.png)

The cursor is ready in the **Filter** input field and can be used to filter the list presented to us.

The list is the **Library**. The default is the MA and user fixtures on the local hard drive (Internal). Other libraries can be chosen, but this is fine for the first fixtures.

We need dimmers, so type dim in the filter.

Now, the list is limited to fixtures that have **"dim" **somewhere in the manufacturer name, fixture name, or fixture mode.

It might look like this:

![](/img/grandma3/2-4/qsg_02_filtered-list_v2-4-081631.png)

The library has three columns. The left column shows the different manufacturers. The center column is the fixture models from the selected manufacturer. The right column lists the different modes available for the selected fixture model.

We need the Generic Dimmer in "Mode 0". Make sure the correct elements are selected (with a darker gray background and yellow text, as in the image above), then click Select in the lower-right corner.

Now, you can give the fixtures a name. If the name ends with a space and a number, the fixtures are automatically numbered starting from the number you type.

Just leave it as the default "Dim 1" and click Please.

Next is the quantity, meaning how many fixtures we want to add.

Type 28 and click Create ! in the lower right corner (not the 'Please' in the number input).

Now we have 28 dimmers named "Dim" followed by a number. They are patched to DMX address 1 in DMX universe 1 and upwards.

They have an FID from 1 to 28.

![](/img/grandma3/2-4/qsg_02_first-fixtures_v2-4-c63bcb.png)

This solves some of our goals for this chapter. Next, we need to add the grouping fixture.

Scroll to the end of the list, select the cell called "New Fixture", and click Insert New Fixture in the menu. We are now back at the **Insert New Fixture wizard**.

We can take a quick look at the other tab by clicking Show. There is only the generic dimmer, which is nice if we want to add more dimmers.

The idea is that there are different fixture types across different libraries, and we import a copy of each fixture type from a library into our show.

We need to add a new fixture type, the grouping fixture, to our show. This is in the Library, so click the Library tab below the filter input.

Now type group in the filter input, select the Generic Grouping fixture in "Default" mode, and click Select.

Name the fixture Blinders. We only need 1, but we want it to have FID 20 - type 20 in the FID input. This gives us a red background in the FID input to show us that there is a problem:

![](/img/grandma3/2-4/qsg_02_add-grouping_v2-2-a92f0d.png)

Ignore the problem for now and click Create !.

The problem was that we already had a fixture with FID 20, and since FIDs must be unique, the previous fixture 20 now has "None" in the FID column.

We need to fix this and will renumber all the blinder fixtures. The blinders are the last 14 dimmer fixtures on the list. We need to select the FID for these fixtures.

Left-click and hold the FID 15 and drag down to FID 28 and release. It should look like this:

![](/img/grandma3/2-4/qsg_02_blinder-fixtures_v2-4-c48275.png)

Now, we need to edit this. It is easy to do with a mouse; just right-click in the blue area. On the console, you can press Edit and then tap in the blue area.

A number pop-up appears where we need to click 2 1 and confirm with Please. Now, the fixtures are renumbered. We also need to move them to be children of the grouping fixture.

To keep the selection, simply click Cut to cut them from the list into the clipboard. The result is that they are now marked with a red background in the fixture list.

We need to paste them to the new location.

Click the triangle arrow next to the Blinders fixture to unfold it, then select **New Fixture** within "Blinders". Like this:

![](/img/grandma3/2-4/qsg_02_blinder-unfolded_v2-4-db66b1.png)

It is important that you do not select the lowest **New Fixture** as this is outside the "Blinders".

Now click Paste. You are now asked about the fixtures' position and rotation in the 3D virtual space.

![](/img/grandma3/2-4/qsg_02_move-fixtures_pop-up_v2-3-059634.png)

At the moment, all the fixtures are at the zero position in the 3D virtual space. So, it does not matter whether you select 'Absolute' or 'Relative'. But select one of them. 

In chapter 5, we will examine the 3D virtual space and the positioning of the fixtures.

After the move, the fixtures are now children of the blinder grouping fixture.

These were all the goals for the chapter, but there is one more thing we should do now that we are in the patch.

The fixtures have a shape in a 3D virtual space. This shape is defined by the fixture type we select. Let us change the fixture for the blinders and find another fixture.

Select the 14 fixtures again, but this time in the **FixtureType** column, and edit the value by right-clicking.

Now, we are back to the fixture-finding pop-up. Here, we must select the Library tab and type blinder in the filter.

Select the "Briteq" manufacturer, the "COB Blinder 2x100W," and the "1 channel" mode. Confirm the choice by clicking Select.

Finally, let us change the name of the blinders.

Select all the blinders in the name column and edit the name. Type Blinder 1 and confirm with Enter/Please.

The patch should look something like this:

| FID | Name       | FixtureType          | Mode        | Patch |
| --- | ---------- | -------------------- | ----------- | ----- |
| 1   | Dim 1      | 1 Dimmer             | 2 Mode 0    | 1.001 |
| 2   | Dim 2      | 1 Dimmer             | 2 Mode 0    | 1.002 |
| 3   | Dim 3      | 1 Dimmer             | 2 Mode 0    | 1.003 |
| 4   | Dim 4      | 1 Dimmer             | 2 Mode 0    | 1.004 |
| 5   | Dim 5      | 1 Dimmer             | 2 Mode 0    | 1.005 |
| 6   | Dim 6      | 1 Dimmer             | 2 Mode 0    | 1.006 |
| 7   | Dim 7      | 1 Dimmer             | 2 Mode 0    | 1.007 |
| 8   | Dim 8      | 1 Dimmer             | 2 Mode 0    | 1.008 |
| 9   | Dim 9      | 1 Dimmer             | 2 Mode 0    | 1.009 |
| 10  | Dim 10     | 1 Dimmer             | 2 Mode 0    | 1.010 |
| 11  | Dim 11     | 1 Dimmer             | 2 Mode 0    | 1.011 |
| 12  | Dim 12     | 1 Dimmer             | 2 Mode 0    | 1.012 |
| 13  | Dim 13     | 1 Dimmer             | 2 Mode 0    | 1.013 |
| 14  | Dim 14     | 1 Dimmer             | 2 Mode 0    | 1.014 |
| 20  | Blinders   | 2 Grouping           | 1 Default   |       |
| 21  | Blinder 1  | 3 COB Blinder 2x100w | 1 1 Channel | 1.015 |
| 22  | Blinder 2  | 3 COB Blinder 2x100w | 1 1 Channel | 1.016 |
| 23  | Blinder 3  | 3 COB Blinder 2x100w | 1 1 Channel | 1.017 |
| 24  | Blinder 4  | 3 COB Blinder 2x100w | 1 1 Channel | 1.018 |
| 25  | Blinder 5  | 3 COB Blinder 2x100w | 1 1 Channel | 1.019 |
| 26  | Blinder 6  | 3 COB Blinder 2x100w | 1 1 Channel | 1.020 |
| 27  | Blinder 7  | 3 COB Blinder 2x100w | 1 1 Channel | 1.021 |
| 28  | Blinder 8  | 3 COB Blinder 2x100w | 1 1 Channel | 1.022 |
| 29  | Blinder 9  | 3 COB Blinder 2x100w | 1 1 Channel | 1.023 |
| 30  | Blinder 10 | 3 COB Blinder 2x100w | 1 1 Channel | 1.024 |
| 31  | Blinder 11 | 3 COB Blinder 2x100w | 1 1 Channel | 1.025 |
| 32  | Blinder 12 | 3 COB Blinder 2x100w | 1 1 Channel | 1.026 |
| 33  | Blinder 13 | 3 COB Blinder 2x100w | 1 1 Channel | 1.027 |
| 34  | Blinder 14 | 3 COB Blinder 2x100w | 1 1 Channel | 1.028 |

Exit the patch by clicking ![](/img/grandma3/2-4/icon_cross_v0-1_1-e1c355.png) in the upper right corner. You are now asked whether you want to keep the changes. Confirm this by clicking Save and Exit.

Finally, save the show. Let us do this by using the command line.

Type the following keyword shortcut:

|                                                                    |                    |
| ------------------------------------------------------------------ | ------------------ |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | Admin\[Fixture]>sa |

And execute the command with 'Enter'/Please.

Now, the show is saved with the same name. We used the short version of the **SaveShow** keyword.

---

## Recap

In this chapter, we have added simple dimmer fixtures to the patch, and we can now begin learning to control them.

You could look at some sections of the manual to learn more details about the patch.

The topic titled [Add Fixtures to the Show](/grandma3/2-4/patch_add_fixtures/) covers what we did and includes detailed information. We will return to the patch in a later chapter and look closely at some of its functions.

If you want to learn about fixture types, there is a whole section called [Fixture Types](/grandma3/2-4/fixture_types/).

We used one keyword in the command line - follow this link to learn a little more about it: [SaveShow Keyword](/grandma3/2-4/keyword_saveshow/).

I suggest simply continuing to the [next chapter](/grandma3/2-4/qsg_first_view/) in this guide.
