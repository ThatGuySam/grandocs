---
title: "Executor pages"
description: "The Executors are arranged in pages."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_adv_exec_pages.html"
scrapedAt: "2026-06-12T21:28:16.035Z"
---
The Executors are arranged in pages.

The pages gives access to several sets of Executors. Changing the page does not remove or turn off the Executors. It is just another set of Executors.

The pages are arranged in a pool. For more general information about pools please read the [Pools in General section](/grandma2/key_pools/).

The Executor pool could look like this:

![](/img/grandma2/window_exec-pool_v3-3-c924af.png)

_Executor pool - pool style_

It can be changed to Sheet Style in the options, then it looks like this:

![](/img/grandma2/window_exec-pool_sheet-style_v3-3-c01a5c.png)

_Executor pool - sheet style_

The pool show the different executor pages. The pool can be used to name the pages. The pool offers a visual indication of the currently active page for the Fader Executors and the Button Executors. Notice that they can be on two different pages. Their current page is indicated by an **F** and a **B**. If the **F** is gray, then a Channel page is currently active - Read more in the [Channel Pages topic](/grandma2/key_adv_exec_ch_pages/).

Pages that have something assigned will have a white label text when the pool is in pool style. Pages that have been accessed but is empty will have a gray text color. Pages that has not been accessed and does not have anything stored are empty in the pool.

## Change page

Pages can be access by tapping the pool objects. This will make both the Fader Executors and the Button Executors jump to this page.

 

Pages can also be changed using the dedicated Fd Pg + and Fd Pg - keys to change the page for the Fader Executors. Read about the keys in the [Fd Pg+](/grandma2/key_key_faderpageplus/) and [Fd Pg-](/grandma2/key_key_faderpageminus/) topics. Keeping the Fd Pg - key pressed for 2 seconds will jump to page 1 for the faders.

The Button Executor pages can be changed using the Bt Pg + and Bt Pg - keys. Read about the keys in the [Bt Pg+](/grandma2/key_key_buttonpageplus/) and [Bt Pg-](/grandma2/key_key_buttonpageminus/) topics. Keeping the Bt Pg - key pressed for 2 seconds will jump to page 1 for the buttons.

In **Setup ->  User -> Grand Master & Misc Keys** there is a setting called **Link Fader & Button Page**. If this is active then there is no separation between the Fader and Button page changes. Chaining pages using any the four keys mentioned above will change page for both Faders and Buttons at the same time.

 

Pages can also be changed using the command line. There are three different relevant commands: [FaderPage](/grandma2/key_keyword_faderpage/), [ButtonPage](/grandma2/key_keyword_buttonpage/), and [Page](/grandma2/key_keyword_page/). Click them to read the details about the commands.

There are three different commands to make it possible to change the Fader Executors and Button Executors independently using each of the two commands. But it is also possible to change both at the same time using the **Page** command.

Pages can be changed by using the page number or page name.

### Examples

Change the Fader Executors to page 5:

\[Channel]> FaderPage 5

 

Change the Button Executors to page 20:

\[Channel]> ButtonPage 20

 

Change both faders and buttons to a page called **Rainbow**:

\[Channel]> Page Rainbow
