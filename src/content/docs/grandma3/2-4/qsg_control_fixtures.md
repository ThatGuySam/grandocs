---
title: "04 - Control Simple Fixtures"
description: "In this chapter, we will look at controlling the dimmers we patched in Chapter 2."
product: grandma3
version: "2.4"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.4/HTML/qsg_control_fixtures.html"
scrapedAt: "2026-06-12T21:25:15.487Z"
---
In this chapter, we will look at controlling the dimmers we patched in Chapter 2.

The grandMA3 system uses a **Programmer** as a temporary memory to hold values until they are stored or released.

To do something with a fixture, we need to select it first. Click one of the fixtures in the **Fixture Sheet**.

Fixtures with a yellow ID text are selected fixtures.

![](/img/grandma3/2-4/qsg_04_selected-fixture_v2-4-e174b2.png)

Fixture 1 is selected in the image above.

Selected fixtures can get a dimmer value using many different methods.

If you have grandMA3 hardware, for example, from the console range or a grandMA3 onPC command wing model, there is a level wheel on the right side. This can be scrolled up and down to adjust the dimmer value.

A value can also be typed using the numeric keys. Type this: At 5 0 Please.

Now the fixture's dimmer value is 50%.

Other physical keys can be used to set a value. For instance, 'Full'. This will take the dimmer value to 100%. Pressing 'At' twice takes the dimmer to a defined value called **Normal**. The default for this is also 100%, but it can be modified. Double-pressing '.' (dot) sets the dimmer to **Zero**. Pressing the 'MA' key and the '.' (dot) simultaneously puts the **Default** keyword in the command line; this can be executed by 'Please'. The Default value is often 0% for dimmers.

Try these keys and see the results in the fixture sheet and the command line history. To click the 'MA' key and another key at the same time on the grandMA3 onPC, latch the 'MA' key by left-clicking it, then hold the mouse button, move the cursor out of the button area, and release the mouse button. Now, other buttons change their label and can be clicked to add the new keywords to the command line. To unlatch the 'MA' key, simply click it shortly again.

Another control option is the encoders. There are five dual encoders on the control hardware.

The **Encoder Bar** we saw in the last chapter shows us what the encoders are controlling. It should look something like this:

![](/img/grandma3/2-4/qsg_04_encoder-bar_v2-4-2a8755.png)

There are three rows in the encoder bar.

In the top row, there are **Feature Groups** - we will return to these when we have fixtures with more than dimmers. Right now, we only have a "Dimmer" feature group, and it is selected (yellow text). On the right side, there are buttons for quick access to various features. Ignore these for now.

We will also return to the second row in later chapters. It has buttons that do different things and a row of layer selection buttons.

At the bottom are the encoder labels. We also call this **Attribute Control** because it can be used to control various attributes of fixtures. Our current fixtures only have the dimmer attribute.

We can use this to control the dimmer value. If you have the physical hardware, you can turn the left-most encoder to change the value. The inner encoder changes the value in larger steps than the outer encoder.

If you use grandMA3 onPC, there are different ways to mimic the hardware.

You can place the mouse pointer in the white encoder icon and then scroll the mouse wheel (if you have one).

Another option is to use an invisible on-screen encoder. You can also click and hold the encoder icon and, while holding the mouse button, move the pointer to another area of the screen. This is now the center of the encoder. While keep holding the mouse button, you can now draw circles around the center of your invisible encoder. The farther away from the center you draw the circle, the finer the resolution. Smaller circles clustered around the center make the value change faster (lower resolution). You can release the mouse button when you are happy with the value.

Finally, you can click the red area or briefly press the inner encoder. This opens the **Calculator** pop-up.

![](/img/grandma3/2-4/qsg_04_calculator_v2-3-db255f.png)

The calculator pop-up gives access to type a value on the on-screen keypad.

There is also access to "Specials" (button in the middle of the calculator), with buttons for the keys we learned about above - 'Full', 'Default', 'Normal', and 'Zero'.

Fixture types might also have **Channel Sets**. These are named values defined in the fixture type. Dimmers often have 'Open' and 'Closed' to represent 100% and 0%, respectively.

This pop-up is named The Calculator because we can do some arithmetic with it. In my example, the dimmer is at 50%. If I click + 1 0 Please, I add 10 to the current value. We can also subtract, divide, and multiply.

If we have selected more than one fixture, we can even type a value range using 'Thru'. Clicking 'Please' closes the pop-up. You can also close it without making any changes by clicking ![](/img/grandma3/2-4/icon_cross_v0-1_1-e1c355.png) in the upper-right corner of the pop-up.

Try selecting multiple fixtures either by clicking and dragging on the fixture sheet or by typing. For instance, 1 Thru 1 0 Please.

Now open the calculator and click 1 0 Thru 1 0 0 Please.

The result should be a nice range of values from 10% to 100% across the selected fixtures.

This is also where the fixture selection order matters. The value is spread out across the fixtures in the selection order. So if we selected the same fixtures in a different order - for instance, 10 thru 1 - and then applied the same value range, then the result would be reversed.

 

The programmer has three levels of information. It is the **selected** fixtures, **activated **values, and **deactivated** values. We can remove each level by shortly pressing 'Clear'. A long press clears all three levels at once, and all values in our programmer are gone.

If we, on the other hand, just press 'Clear' once, then we release the selection of fixtures. This means that we do not have any selected fixtures, and trying to give a value does not change anything.

If we do not have a fixture selection and we press 'Clear', then we deactivate the active values. This means the value is still sent to the output, but is typically not stored if we try to.

If we press 'Clear' without a fixture selection and with no active values, then the deactivated values are cleared from the programmer.

![](/img/grandma3/2-4/qsg_04_programmer-levels_v2-4-2a4990.png)

The image above shows the programmer levels. Fixtures 1 and 5 are selected. Fixtures 2 and 5 have active values. Fixture 3 has deactivated values. Fixture 4 has nothing in the programmer. Notice the two colored indicators. They indicate the programmer status. Red represents active values, and white represents deactivated values.

 

A final programmer tool I will introduce you to is the **At Pop-up**. This is very useful, especially when you are using the grandMA3 onPC.

![](/img/grandma3/2-4/qsg_04_at-overlay_v2-4-beecc0.png)

It can be opened by clicking the At in the Control Bar or pressing F1 on a keyboard. It can also be opened using a command: Menu "AtOverlay"

The pop-up includes buttons for many useful commands, including Clear, Zero, Full, and Normal.

 

And remember that often-used keys can be added to the Quickey pool. I have added the 'Clear' key to my pool.

## Selecting Fixtures

We discussed selecting fixtures in the fixture sheet, but they can also be selected using the keypad in the command section.

When we look at the command line, it should look like this:

|                                                                    |                  |
| ------------------------------------------------------------------ | ---------------- |
| ![](/img/grandma3/2-4/icon_commandline-input_logo_v2-0-a59235.png) | Admin\[Fixture]> |

The yellow fixture part of this is the default keyword. This means that if we do not define a different beginning keyword, the system assumes we want to begin our command with **Fixture**.

Fixtures can be selected using their ID numbers. You can select fixture 1 simply by writing 1 in the command line and executing the command.

If you look at the **Command Line History** window. It says

|      |           |
| ---- | --------- |
| OK : | Fixture 1 |

You can add a fixture to the selection by writing + 2 and executing the command.

Removing a fixture from the selection can be done using minus. 

A range of fixtures can be selected using thru. Write the following in the command line and run the command:

9 Thru 14

As long as we have not assigned values to the fixtures, we keep adding fixtures to our selection. If you assign a value to the selected fixtures using any of the methods described above, the system assumes that the next fixture selection means you are done with the previous selection and automatically clears it before selecting the new fixtures.

A single 'Clear' will clear the fixture selection.

If numbers are not added on the sides of the "Thru" keyword, then the range will go as far as possible. This means that **Fixture Thru** selects from the lowest to the highest number. This is often all the fixtures.

 

The 14 blinders have their own individual FID numbers but are also children of the **Blinders** grouping fixture. We also call these **Sub-fixtures**.

This means that they can also be selected using a subfixture index number. **Fixture 20.11** is the same as **Fixture 31**.

There are a lot of different combinations of commands that allow you to use this recursive selection of subfixtures. We will explore a few of them. Start by clearing the programmer completely.

Select fixture 20. This selects only the grouping fixture, not the subfixtures. The grouping fixture has no attributes, but we can still change the dimmer attribute. This is because the children inherit the dimmer values. Try setting the fixture's dimmer value. You can see that all the children get the value without being selected. Press the Down key (not the down arrow). We have moved down the hierarchy, and all the children have been selected. Since multiple fixtures are selected, we can use the calculator to apply a range of values. Try to apply 0 Thru 65. Your result should look similar to this:

![](/img/grandma3/2-4/qsg_04_sub-fixture-levels_v2-4-a527d1.png)

Pressing Up moves back up the hierarchy to the grouping fixture.

Clear the programmer again.

Now do Fixture 20. (remember the dot at the end).

Adding the dot at the end will select the main fixture 20 and all the subfixtures. Clear the programmer again.

Now type Fixture 20.2 thru 10

This selects subfixtures 2 thru 10 in fixture 20.

Try other fixture selection combinations until you are comfortable selecting fixtures and subfixtures.

 

Finish this chapter by clearing the programmer.

---

## Recap

This topic taught us about the programmer, fixture selection, and how to assign dimmer values.

The primary manual has a section titled [Operate Fixtures](/grandma3/2-4/operate_fixtures/). This section of topics has information about the programmer and fixture control.

Noteworthy keywords from this chapter are [Fixture](/grandma3/2-4/keyword_fixture/), [Thru](/grandma3/2-4/keyword_thru/), [Clear](/grandma3/2-4/keyword_clear/), [ClearAll](/grandma3/2-4/keyword_clear_all/), [-\[minus\]](/grandma3/2-4/keyword_minus/), [+\[plus\]](/grandma3/2-4/keyword_plus/), [At](/grandma3/2-4/keyword_at/), [Down](/grandma3/2-4/keyword_down/), and [Up](/grandma3/2-4/keyword_up/).

In the [next chapter](/grandma3/2-4/qsg_3d_setup/), we will look at the 3D virtual space.
