---
title: "07 - Appearances"
description: "Appearances are a defined look that can be applied to most objects. In this chapter, I will introduce you to appearances, but we will not create specific appear"
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/qsg_appear.html"
scrapedAt: "2026-06-12T21:25:15.629Z"
---
Appearances are a defined look that can be applied to most objects. In this chapter, I will introduce you to appearances, but we will not create specific appearances that we will use later.

You are, however, very welcome to continue to add appearances to objects in future chapters.

The appearances are organized in an **Appearance** pool. A new show already has some appearances in the pool. These can be used like any other appearance you create.

Most objects in the grandMA3 have the option to add an appearance. The purpose is to customize the look of the objects. This can be used as an indicator of different fixture types or special cues, or to add symbols or images to elements for faster identification.

### Symbols

Before creating an appearance, let us have a look at a different pool. Appearances can use user images, symbols, and even videos. We are going to load a symbol and use it in the appearance.

Clear some space in the user area and create a **Symbols** pool. It can be found in the **Pools** tab in the **Add Window** pop-up.

There are already some default symbols in the pool. These are auto-created in a new show.

There is a large symbol library in the software. We can import any of these symbols into the symbol pool and use them in appearances.

In the symbols pool, scroll down until you see an empty pool element. I had to scroll down to number 44. Right-click the empty pool element. This opens an **Edit Symbol** pop-up.

Click the Import button in the pop-up. This opens another pop-up called **Select Image for Import** (it may take a moment to load).  You can scroll through the library, or in the **Filter, **you can write lightbulb. We want the symbol called "lightbulb.png.xml". Select it and click Import.

Now, the editor should look like this:

![](/img/grandma3/2-4/qsg_07_symbol-editor_v2-3-9a1800.png)

Now close the symbol editor by clicking the ![](/img/grandma3/2-4/icon_cross_v0-1_1-e1c355.png)​ in the upper right corner. Now, the symbol is in the pool and can be used in appearances.

![](/img/grandma3/2-4/qsg_07_symbol-pool_v2-2-ee4f76.png)

### Back to Appearance

You create an appearance by editing an empty appearance object in the appearance pool. The **Appearances** pool can also be found in the **Pool** tab in the **Add Window**.

There are already some predefined appearances, so you might need to scroll through the pool to find an empty pool object. I had to scroll to number 16.

Edit an empty appearance pool object.

The editor looks like this:

![](/img/grandma3/2-4/qsg_07_appearance-editor_v2-4-398896.png)

The left side allows you to change the name, add an image, control how the image is adjusted to the size, and see a preview.

The right side has two sections with color selection. The top one adjusts the image color. The bottom one adjusts the background color. It can only subtract existing colors from the image. It can, however, add color to a transparent background.

Click Image.

It defaults to using the "Images" pool as the source. This can be changed. Click the ImageSouce button until it says "Symbols" - and most likely becomes bigger.

![](/img/grandma3/2-4/qsg_07_select-image_v2-3-469cf5.png)​

Select the lightbulb symbol we imported.

Now, adjust the colors to match your needs.

Close the editor when you are happy. Here is where I ended:

![](/img/grandma3/2-4/qsg_07_appearance-editor_result_v2-4-5f7cbf.png)

The appearance can be assigned to a lot of different objects.

In the previous chapter, we looked at the Swipey menu. One of the options here is 'Assign'. This can be used to assign the appearance. Let us try to assign the new appearance to the first group. You need to have the Appearances pool and Groups pool visible.

Open the Swipey menu on the appearance and select the Assign option. Now, click the first group. This assigns the appearance to the group.

Use the Swipey menu on the group and select the Edit Settings option. This opens the editor for the group pool object.

![](/img/grandma3/2-4/qsg_07_edit-group_v2-3-55a783.png)

Many editors have an appearance setting that can be used to select an appearance.

Tap the Appearance button. This opens a small select pop-up with all the appearances and the options to select 'None' and 'New'. Select the desired appearance - this closes the select pop-up. Close the **Edit Group** pop-up by clicking the ![](/img/grandma3/2-4/icon_cross_v0-1_1-e1c355.png) in the upper left corner.

You cannot assign an appearance to other appearance pool objects. Other pool objects that apply a look to an object, such as symbols, cannot have an appearance assigned.

---

## Recap

In this chapter, we looked at appearances and Symbols as tools to create custom indications and markings of objects.

The main manual also has a section for [Symbols](/grandma3/2-4/symbols/),  [Images](/grandma3/2-4/images/), and [Appearances](/grandma3/2-4/appear/). They have more details on the different functions.

We will not talk more about appearance, but feel free to add more and use them in the rest of the chapters.

The [next chapter](/grandma3/2-4/qsg_scribble/) is about another useful customization tool - Scribbles.
