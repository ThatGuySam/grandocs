---
title: "Clone"
description: "Clone is used to add fixtures to the rig which suppose to behave exactly the same as existing fixtures."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_clone.html"
scrapedAt: "2026-06-12T21:28:16.648Z"
---
## Function

Clone is used to add fixtures to the rig which suppose to behave exactly the same as existing fixtures.

**Requirements:**

- Program your show using presets.
- Program relevant parameters in your presets.

**Important:**\
Avoid using fixture specific functions, e.g. build-in fixture macros. Use generic functions only. 

 

---

## How to Use Clone

###  It is possible:

1. To clone in order to copy values from fixture to fixture.
2. To clone a selection of fixtures to another selection of fixtures. 
3. To clone using the [keyword Clone](/grandma2/key_keyword_clone/) or the [screen](/grandma2/key_clone_clone_in_user_interface/). 

**Important:**\
It is not possible to clone values from several fixtures to a single fixture. Cloning is only possible with one set of values. 

**Important:**\
It is possible to limit the scope of cloning by using the [keyword If](/grandma2/key_keyword_if/).

 

By default, the cloning is done with low priority. This means that data is preserved wherever the destination fixtures or fixture types already contain data. The data from the source fixtures or fixture types is added to objects such as presets, cues, effects etc. where data does not exist yet. 

 

**Hint:**\
The console automatically clones dependencies, e.g. presets and effects by reference to the cloned sequence whenever cloning with a limited scope. To protect existing data these dependencies are cloned with the default low priority clone option. 

 

---

## Replace

Contrary to clone, replace does not preserve data, i.e. data is overwritten.  

For more information on replace see [Search and Replace](/grandma2/key_search_replace/).

## Subtopics

- [Clone in user interface](/grandma2/key_clone_clone_in_user_interface/)
- [Examples](/grandma2/key_clone_examples/)
- [Clone presets](/grandma2/key_clone_clone_presets/)
