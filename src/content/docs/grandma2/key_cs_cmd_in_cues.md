---
title: "Commands in cues"
description: "Each cue can execute a command. The commands are written in the CMD column in the Sequence Executor Sheet."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_cs_cmd_in_cues.html"
scrapedAt: "2026-06-12T21:28:14.904Z"
---
Each cue can execute a command. The commands are written in the CMD column in the [Sequence Executor Sheet](/grandma2/key_cs_cue_sequence/).

 

The commands are executed as soon as the cue is triggered. It is possible to delay the command by adding a time in the CMD Delay column.

 

If you want to run multiple commands in the same cue, you can separate the commands with a semicolon.

As an alternative you could make cue parts and add each command in each part - remember to add a small CMD Delay, so all commands are not executed at the same time.

 

The commands are executed by the logged in user on the master station in a session. So be aware that it might not be the user who triggers the cue that runs the commands.

A useful keyword to know, if you need to trigger a command on a specific station, is the [RemoteCommand](/grandma2/key_keyword_remotecommand/).
