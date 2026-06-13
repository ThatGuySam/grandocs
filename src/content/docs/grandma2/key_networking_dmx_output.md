---
title: "What affects my DMX output?"
description: "Important:"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_networking_dmx_output.html"
scrapedAt: "2026-06-12T21:28:07.939Z"
---
## The following affects the DMX output:

- A crash or a failure – this discontinues DMX output.
- Show upload – this stops DMX output.
- Changing the value of a fixture **–** this changes the DMX output.

**Important:**\
In case of a failure or crash, the DMX lines should go off. This is called High-Z. 

### What happens to the fixtures?

Fixtures have a function called the DMX hold.

### What is a DMX hold?

The end-device physically emits the latest value, e.g., the fixture is on or off.

**Note: **\
DMX hold is the function of the end-device only, e.g., a fixture.

How do I set the DMX hold on my end-device? 

- Set it either individually on your end-device **–** on or off.
- The end-device goes back to default automatically **– **off.
- If you have two individual inputs in your end-device, the DMX input automatically chooses the second input in case of a crash or failure. 

**Note:**\
If your end-device does not support the feature DMX hold, add a DMX booster or splitter featuring DMX hold.

### How does the output behave in case of a single console?

If a problem occurs, the console´s DMX outputs should go High-Z. 

### How do I create backup?

With the grandMA2 system you have a seamless switch between the transmitting console (master) and the back-up console (connected) in case of a failure or crash. 

Here are three examples on how to create backup:

- Use the grandMA2 console as master and the grandaMA2 onPC software version as connected, and DMX nodes for emission of the signal. 
- Use the grandMA2 console as master with a second grandMA2 console as connected, and DMX nodes for emission of the signal. 
- Use the grandMA2 replay unit (RPU) as master together with the grandMA2 onPC software as connected, and DMX nodes for emission of the signal.
