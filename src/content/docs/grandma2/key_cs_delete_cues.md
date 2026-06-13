---
title: "Delete cues"
description: "Deleting a cue will remove the values stored in the cue."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_cs_delete_cues.html"
scrapedAt: "2026-06-12T21:28:14.438Z"
---
Deleting a cue will remove the values stored in the cue.

The easy way to delete a cue is using the keys or keyboard.

The syntax to delete a cue on the selected executor is: Delete Cue \[cue number].

If it is a different executor then you can tap a key associated to the executor after the above syntax or add the information in the syntax: Delete Cue \[cue number] Executor \[executor number].

When this command is run then a pop-up will appear. It could look like this:

![](/img/grandma2/popup_delete-cue_v3-3-d7525a.png)

_Delete Cue pop-up_

There are two mutually exclusive options here. They are called **Normal** and **Cue Only**.

**Normal** delete will remove the cue and all values stored in the cue. This will effect stored values that normally tracks through the sequence.

**Cue Only** delete will remove the cue and all the values stored in the cue. It will store values that would track into the following cues if they otherwise would be lost by the deletion of the cue.

### Example

We have the following sequence:

![](/img/grandma2/img_delete-cue_before-delete_v3_3-938034.png)

_Sequence with 5 cues before deletion_

Now we are going to delete cue number 3.

This is the result with **Normal** delete:

![](/img/grandma2/img_delete-cue_normal-delete_v3_3-5b304d.png)

_Sequence after a Normal delete_

Cue number 3 is gone. The orange color stored in the cue is deleted and the orange values that normally tracked from cue 3 into cue 4 and 5 are gone. Now it is the blue color stored in cue 1 that tracks through the sequence. The result is that cue 4 and 5 are now blue.

This is the result if we deleted with **Cue Only**:

![](/img/grandma2/img_delete-cue_cueonly-delete_v3_3-dca105.png)

_Sequence after a Cue Only delete_

Cue number 3 is gone. The orange color stored in the cue is now stored in cue number 4. This means that cue number 4 and 5 are still orange.\
 

Tracking is discussed in details in the [What is Tracking topic](/grandma2/key_cs_what_is_tracking/).
