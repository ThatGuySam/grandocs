---
title: "MAtricks groups"
description: "This topic illustrates how to use MAtricksGroups based on an example."
product: grandma2
lang: en
sourceUrl: "https://help.malighting.com/grandMA2/en/help/key_matricks_groups.html"
scrapedAt: "2026-06-12T21:28:19.024Z"
---
This topic illustrates how to use MAtricksGroups based on an example. 

For information on the keyword see [MAtricksGroups](/grandma2/key_keyword_matricksgroups/). 

**Requirement:**

- Fixtures are selected via the command line or keys. 

For more information on how to select fixtures for the usage of MAtricks see [MAtricks](/grandma2/key_matricks/). 

### 1. Example

- Set the fan function in fixtures that are not grouped

1. Use the command line as follows:

\[Channel]> At 0 Thru 100

2. ** **Press Please.

**Result:**

The fan function is applied on the fixtures selected. 

![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_10percent_v3-3-68b049.png)![](/img/grandma2/img_bulb_20percent_v3-3-e1b227.png)![](/img/grandma2/img_bulb_40percent_v3-3-87457f.png)![](/img/grandma2/img_bulb_50percent_v3-3-f46cad.png)![](/img/grandma2/img_bulb_60percent_v3-3-fe0580.png)![](/img/grandma2/img_bulb_80percent_v3-3-dfe12d.png)![](/img/grandma2/img_bulb_on_v3-3-5a69c3.png)

### 2. Example

- Apply groups with 4 fixtures in each group and set the fan function. 

1. To apply groups, use the command line as follows:

\[Channel]> MAtricksGroups 4

2. Press Please. 
3. To set the fan function within the groups with 4 fixtures, use the command line as follows:

\[Channel]> At 0 Thru 100 

4. Press Please. 

**Result:**

The fan function is applied within the MAtricksGroups. 

![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_40percent_v3-3-87457f.png)![](/img/grandma2/img_bulb_60percent_v3-3-fe0580.png)![](/img/grandma2/img_bulb_on_v3-3-5a69c3.png)![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_40percent_v3-3-87457f.png)![](/img/grandma2/img_bulb_60percent_v3-3-fe0580.png)![](/img/grandma2/img_bulb_on_v3-3-5a69c3.png)

### 3. Example

- Apply the MAtricksInterleave and use the fan function 

1. To apply an interleave, for example of 4, use the command line as follows:

\[Channel]> MAtricksInterleave 4

2. Press Please. 

**Result:**

MAtricksInterleave of 4 is now applied. 

![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)

![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)

![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)

3. To apply the fan function within the MAtricksInterleave, use the command line as follows:

\[Channel]> At 0 Thru 100

4. Press Please.

**Result:**

The fan function starts in the upper corner on the left and fans out toward the lower corner on the right.

![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_10percent_v3-3-68b049.png)![](/img/grandma2/img_bulb_20percent_v3-3-e1b227.png)![](/img/grandma2/img_bulb_40percent_v3-3-87457f.png)

![](/img/grandma2/img_bulb_10percent_v3-3-68b049.png)![](/img/grandma2/img_bulb_20percent_v3-3-e1b227.png)![](/img/grandma2/img_bulb_40percent_v3-3-87457f.png)![](/img/grandma2/img_bulb_60percent_v3-3-fe0580.png)

![](/img/grandma2/img_bulb_20percent_v3-3-e1b227.png)![](/img/grandma2/img_bulb_40percent_v3-3-87457f.png)![](/img/grandma2/img_bulb_60percent_v3-3-fe0580.png)![](/img/grandma2/img_bulb_on_v3-3-5a69c3.png)

### 4. Example 

- Align groups with an interleave on the x or the y-axis using periods  

For the example on the alignment of the x-axis see the [example Align Group X in the MAtricks toolba](/grandma2/key_matricks_toolbar/#align_x_axis)[r](/grandma2/key_matricks_toolbar/#align_x_axis).

1. To apply 3 groups on the y-axis and setting the fan function within this group, successively type the following into the command line:

\[Channel]> MAtricksGroups 1.3

2.  Press Please. 

\[Channel]> At 0 Thru 100

3. Press Please.  

**Result:**

The fan starts in the first group and fans out toward the third group. 

![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)![](/img/grandma2/img_bulb_off_v3-3-96d7c9.png)

![](/img/grandma2/img_bulb_50percent_v3-3-f46cad.png)![](/img/grandma2/img_bulb_50percent_v3-3-f46cad.png)![](/img/grandma2/img_bulb_50percent_v3-3-f46cad.png)![](/img/grandma2/img_bulb_50percent_v3-3-f46cad.png)

![](/img/grandma2/img_bulb_on_v3-3-5a69c3.png)![](/img/grandma2/img_bulb_on_v3-3-5a69c3.png)![](/img/grandma2/img_bulb_on_v3-3-5a69c3.png)![](/img/grandma2/img_bulb_on_v3-3-5a69c3.png)

The fan function is set within the group.
