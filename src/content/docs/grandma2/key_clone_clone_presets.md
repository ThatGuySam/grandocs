---
title: "Clone presets"
description: "Table of content:"
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_clone_clone_presets.html"
scrapedAt: "2026-06-12T21:28:16.847Z"
---
Table of content:

- [Clone fixture to fixture](<#Clone fixture to fixture>)
- [Clone fixture to fixture type](<#Clone fixture to fixture type>)
- [Clone fixture type to fixture](<#Clone fixture type to fixture>)
- [Clone fixture type to fixture type](<#Clone fixture type to fixture type>)
- [Clone to universal fixture type](<#Clone to universal fixture type>)

 

**Important:**\
As mentioned in **Examples **cloning from or to fixture types is only possible in presets.

 

---

## Where to Use Clone 

It is possible:

- To clone from fixture to fixture
- To clone from fixture to fixture type
- To clone from fixture type to fixture
- To clone from fixture type to fixture type

**Important:**\
Cloning to fixtures adds selective data to presets.\
Cloning to fixture types adds global data to presets.

 

 **Requirements:**

- Create a show file with presets
- Prepare cloning

For more information on how to prepare cloning see [Clone using screens](/grandma2/key_clone_clone_in_user_interface/).

 

---

## [Clone Fixture to Fixture]()

### Example

- **Clone fixture 1 to fixture 11**

1. Initial situation before cloning:\
   -Fixture 1 with pan and tilt values of min. 

![](/img/grandma2/window_prog-only_clone-to-fixture-type_initial-situation_v3-3-91cf34.png)

_Clone Fixture to Fixture – Initial Situation_

 

2. Initial preset situation before cloning:\
   -The preset contains selective data for fixture 1. 

![](/img/grandma2/image_preset-pool_selective-data_v3-3-a85b6a.png)

_Preset Pool – Selective Data_

 

3. Final result after cloning:\
   -This process created selective data for fixture 11. \
   -Fixture 11 now has the exact same pan and tilt values as fixture 1. 

![](/img/grandma2/window_prog-only_clone-fixture-to-fixture_final-sitation_v3-3-d2f69f.png)

_Clone Fixture to Fixture – Final Situation_

 

4. Final result after cloning:\
   -The preset now contains selective data for fixture 11. 

![](/img/grandma2/image_preset-pool_selective-data_v3-3-a85b6a.png)

_Preset Pool – Selective Data_

 

---

## [Clone Fixture to Fixture Type]()

### Example

- **Clone fixture 1 to fixture type 4.1**

1. Initial preset situation before cloning:\
   -Fixture 1 with pan and tilt values of min.

![](/img/grandma2/window_prog-only_clone-to-fixture-type_initial-situation_v3-3-91cf34.png)

_Clone Fixture to Fixture Type – Initial Situation_

 

2. Initial preset situation before cloning:\
   -The preset contains selective data for fixture 1.

![](/img/grandma2/image_preset-pool_selective-data_v3-3-a85b6a.png)

_Preset Pool – Selective Data_

 

3. Final result after cloning:\
   -This process created global data for fixture type 4.1. \
   -Fixture type 4.1 now has the exact same pan and tilt values as fixture 1.

![](/img/grandma2/window_prog-only_clone-to-fixture-type-with-merge_final-result_v3-3-b282a8.png)

_Clone from Fixture to Fixture Type – Final Result_

 

4. Final result after cloning:\
   -The preset now contains global data for fixture type 4.1.

![](/img/grandma2/image_preset-pool_selective-and-global-data_v3-3-d5392d.png)

_Preset Pool – Selective and Global Data_

 

---

## [Clone Fixture Type to Fixture]()

 

## Example

- **Clone fixture type 4.1 to fixture 1**

1. Initial preset situation before cloning:\
   -Fixture type 4.1 with pan and tilt values of min. 

![](/img/grandma2/window_prog-only_clone-fixture-type-to-fixture_initial-situation_v3-3-a338d1.png)

_Clone Fixture Type to Fixture – Initial Situation_

 

2. Initial preset situation:\
   -The preset contains global data for fixture type 4.1.

![](/img/grandma2/image_preset-pool_global-data_v3-3-4549ec.png)

_Preset Pool – Global Data_

 

3. Final result after cloning:\
   -This process created selective data for fixture 1.\
   -Fixture 1 now has the exact same pan and tilt values as fixture type 4.1

![](/img/grandma2/window_prog-only_clone-to-fixture-type-with-merge_final-result_v3-3-b282a8.png)

_Clone Fixture Type to Fixture – Final Result_

 

4. Final result:\
   -The preset now contains selective data for fixture 1.

![](/img/grandma2/image_preset-pool_selective-and-global-data-after-cloning_v3-3-c7d2d7.png)

_Preset Pool – Global and Selective Data_

 

---

## [Clone Fixture Type to Fixture Type]()

### Example

- **Clone fixture type 4.1 to fixture type 7.1**

1. Initial situation:\
   -Fixture type 4.1 with pan and tilt values of min. 

![](/img/grandma2/window_prog-only_clone-fixture-type-to-fixture_initial-situation_v3-3-a338d1.png)

_Clone Fixture Type to Fixture Type – Initial Situation_

 

2. Initial situation:\
   -The preset contains global data for fixture type 4.1. 

![](/img/grandma2/image_preset-pool_global-data_v3-3-4549ec.png)

_Preset Pool - Global Data_

 

3. Final result after cloning:\
   -This process created global data for fixture type 7.1.\
   -Fixture type 7.1 now has the exact same pan and tilt values as fixture type 4.1.

![](/img/grandma2/window_prog-only_clone-fixture-type-to-fixture-type_final-result_v3-3-30fa06.png)

_Clone Fixture Type to Fixture Type – Final Result_

 

4. Final result:\
   -The preset now contains global data for fixture type 7.1.

![](/img/grandma2/image_preset-pool_global-data_v3-3-4549ec.png)

Preset Pool - Global Data

 

---

## []()Clone to Universal Fixture Type

 

**Important:**\
Universal data is data of all fixtures that have the same attribute. Also, it is redundant to clone universal preset data.

If the target data is to be universal, then clone to fixture type 1.1. 

\[Channel]> Clone Fixture 1 At FixtureType 1.1 If Preset 2.4
