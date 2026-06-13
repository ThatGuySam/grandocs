---
title: "Goto"
description: "The Goto key will give you the Goto Command. It can be used to jump to a specific cue on your main executor or a different specified executor, using the cue tim"
product: dot2
lang: en
sourceUrl: "https://help.malighting.com/dot2/en/help/key_key_goto.html"
scrapedAt: "2026-06-12T21:29:39.099Z"
---
The Goto key will give you the [Goto Command](/dot2/key_keyword_goto/). It can be used to jump to a specific cue on your main executor or a different specified executor, using the cue timing of the cue you are going to. Unless you specify something else.

 

Here are some examples:

You want to go to cue number 4 in your main cue list using the cue timing of cue 4:

Goto 4 Please

Notice that you don't need to press the Cue key - the console figures out that you are calling a cue. 

 

If you need to use a different timing (let's say 1 second, because you don't want to wait the 30 minutes the cue originally have), then you could do this:

Goto 4 Time (gives you the Fade command) 1 before you press the Please key (to execute the command) have a look at your command line. It looks like this:

Goto Cue 4 Fade 1

That is the actual command that the console uses.  So even though you press the Time key you'll get the [Fade command](/dot2/key_keyword_fade/).

 

If you need to go to cue 2 in 4 seconds on executor 5 you can press the following keys:

Goto 2 Time (gives you the Fade command) 4 Exec 5 Please

Or you can do a mix.

Goto 2 Time (gives you the Fade command) 4 and then press a key associated with executor 5.
