---
title: "Data Pools"
description: "Much of the different data belonging to the show file are stored in pools. Many of these pools exist as children inside a Data Pool parent object."
product: grandma3
version: "2.3"
lang: en
sourceUrl: "https://help.malighting.com/grandMA3/2.3/HTML/datapool.html"
scrapedAt: "2026-06-15T18:25:36.985Z"
pagefind: false
---
Much of the different data belonging to the show file are stored in pools. Many of these pools exist as children inside a **Data Pool** parent object.

A new show file creates a default **Data Pool**. The Data Pool object contains the other pools.

New **Data Pool** objects can be created, giving an entirely new set of pools.

This can be very useful if several shows or acts use the same patch; for instance, each song in an extensive band catalog can be in its own data pool.

These are the pools inside the Data Pool objects:

- [Bitmaps](/grandma3/2-3/bitmap/)
- [Executor Configurations](/grandma3/2-3/executor_configurations/)
- [Filters](/grandma3/2-3/worldfilter/)
- [Generators - Random](/grandma3/2-3/generator/)
- [Groups](/grandma3/2-3/group/)
- [Layouts](/grandma3/2-3/layouts/)
- [Macros](/grandma3/2-3/macros/)
- [MAtricks](/grandma3/2-3/matricks/)
- [Pages](/grandma3/2-3/executor/)
- [Plugins](/grandma3/2-3/plugins/)
- [PresetPools](/grandma3/2-3/presets/)
- [Quickeys](/grandma3/2-3/quickeys/)
- [Sequences](/grandma3/2-3/cue_sequence/)
- [Timecodes](/grandma3/2-3/timecode/)
- [Timers](/grandma3/2-3/timers/)
- [Worlds](/grandma3/2-3/worldfilter/)

Each window of pools can be linked to the selected data pool or a specific data pool. Learn more in the [Window Settings topic](/grandma3/2-3/wvm_settings/#pool_settings).

## Data Pools Window

The best way to see the different data pools is in the **Data Pools window**. This can be created like any other window - learn how in the [Add Windows topic](/grandma3/2-3/wvm_add_window/).

![](/img/grandma3/2-3/window_data-pool_v2-1-b39add.png)

Data pools with some data pool objects

The pool can be used to select the desired data pool by tapping it. Any of the different data pool operations mentioned below can be done using the appropriate keyword in combination with the pool window. But it can also be done using the command line and the [DataPool keyword](/grandma3/2-3/keyword_datapool/).

The data pools can also be found in Menu / Settings / User Configuration / Pools. This is a list form of the data pools.

## Create a New Data Pool Object

Data pools need to be stored to be created. These are different ways to create a new Data Pool.

- Press Store and then tap an empty pool object.
- Open the swipey commands on an empty pool object and choose Store.
- Using the command line: Store DataPool \[DataPool\_number]

Performing an "edit" command on an empty pool object also creates the data pool object.

## Copy a Data Pool Object

A data pool can be copied. This makes a copy of all the elements in the data pool. The copies are not linked, but objects inside the copy might be referencing objects in the source data pool. For instance, a copy of a sequence might contain links to presets in the source data pool - the presets are not copied automatically, and the references are not changed in the copy.\
Changing one of the copies after the copy action does not change the other.

- Press Copy, tap the source pool object, and then an empty pool object.
- Open the swipey commands on the source pool object, choose Copy, then tap an empty pool object.
- Using the command line: Copy DataPool \["DataPool\_Name" or DataPool\_Number] At \["DataPool\_Name" or DataPool\_Number]

|                                            |                                                                                                                                                                             |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/tip_gray-269535.png) | **Hint:**                                                                                                                                                                   |
|                                            | Objects inside a data pool can be copied from one pool to another using the normal [Copy](/grandma3/2-3/keyword_copy/) and [Paste](/grandma3/2-3/keyword_paste/) commands.  |

## Edit a Data Pool Object

Editing a data pool object opens an editor with a structured list of the elements in the data pool. Unfolding the elements in the list shows the settings for the elements.

![](/img/grandma3/2-3/menu_edit-pool_datapool_v2-2-9c24ef.png)

Data pool in edit mode - Sequence unfolded

This is a deep look into the structure of the data.

Changing a setting here changes the setting for the object.

Edit a pool object using one of these methods:

- Press Edit and then tap the desired pool object.
- Open the swipey commands on the pool object and choose Edit.
- Using the command line: Edit DataPool \["DataPool\_Name" or DataPool\_Number].

## Reference Data Pool Objects from a Different Data Pool

Other data pools can use a pool element inside a different data pool.

For instance, imagine a repertoire theater. All default elements are stored in the data pool one, including a sequence that controls the house lights. Tonight's show is programmed in data pool two. The sequence can be copied from data pool one, but if changes are made to it later, it would need to be copied again into the second data pool. Instead, the original sequence can be assigned to an executor in data pool two.

The image of the edit menu above shows that the structure in the data pool is numbered. So sequence 2 in this data pool is data pool object 1.6.2. The first number is the data pool number. The second number specifies that it is a sequence. The third number specifies that it is sequence number 2. If this element needs to be assigned somewhere, the data pool object must be included in the assign command. This can be done using the data pool object number or simply by adding the data pool information before the object - see the example below.

### Example

Data pool 1 has sequence 2. This needs to be used in data pool 2 on (page 1) executor 201.

Make sure data pool 2 is the selected pool.

The example can be achieved using the command line: Assign DataPool 1 Sequence 2 At Page 1.201.

Now the sequence in data pool 1 can be controlled by the executor in data pool 2.

Some menus give access to select the data pool. In the title bar of the menus, there is a button called DataPool that can toggle between the different data pools.

## Delete a Data Pool Object

|                                                  |                                                                            |
| ------------------------------------------------ | -------------------------------------------------------------------------- |
| ![](/img/grandma3/2-3/important_gray-f4dfbc.png) | **Important:**                                                             |
|                                                  | Deleting a data pool object also deletes everything inside the data pool!  |

Unlocked data pools can be deleted using any of the following methods:

- Press Delete and then tap the pool object.
- Open the swipey commands on the relevant pool object and choose Delete.
- Using the command line: Delete DataPool \["DataPool\_Name" or DataPool\_Number].
