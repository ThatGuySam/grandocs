---
originalUrl: 'http://help2.malighting.com/Page/grandMA2/05_groups/en/3.9'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option selected="selected" value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="20">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="89c6b2c0-e97f-42d4-9534-48776b0a720b">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/04_control_dimmers_or_channels/en/3.9'; " title="Go to previous page '04 Control Dimmers or Channels'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/06_store_the_first_cue/en/3.9';" title="Go to next page '06 Store the First Cue'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/55162/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Working with Groups</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Groups Pool</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">The first group</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">11 more groups</a>
						</li>
				</ul>
			</div>

		<p>Now it is time to have a look at groups.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Groups Pool</h2>

<p>Since we are going to make some groups it would be practical to be able to see them.</p>

<p>It would be nice to have it at the same screen (since there is enough room). So you need to make the&nbsp;Channel Sheet&nbsp;one line smaller and then press the new empty space on the left side.</p>

<p>Again you are presented with the "Create Basic Window" pop-up. This time you need to access the <span class="softkey">Pools</span> tab. Here you find the <span class="softkey">Groups</span> button - press it. Now you got some empty group buttons right at your fingertips.</p>

<p>You could store this as a new view or store the existing view again.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>The first group</h2>

<p>All the odd numbers in our light plot have a warm color and all the even ones have a cold color.</p>

<p>We are going to make some groups with those colors. The first one is all the warm colors from front of house (FOH). Press:&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">+</span>&nbsp;<span class="hardkey">7</span>&nbsp;<span class="hardkey">+</span>&nbsp;<span class="hardkey">9</span>&nbsp;<span class="hardkey">+</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Please&nbsp;</span>. Now you have selected channels 5, 7, 9 and 11. Then press&nbsp;<span class="hardkey">Store</span>&nbsp;followed by the first available group button. Groups cannot contain any value so we do not need to assign any.</p>

<p>Before you do anything else, use your keyboard to write:&nbsp;<span class="syntax">FOH Warm</span>&nbsp;- this automatically allows you to label the latest "touched" element. Should you have touched anything else (buttons, screens, anything) before typing, you can use a different method to name things (for instance groups).</p>

<p>The function is called "Label" and you access it by pressing the 'Assign' key twice. Do that and then press the first group button again. Now you have the option to change the name, delete it, or type it for the first time. When you are happy press&nbsp;<span class="hardkey">Please</span>.</p>

<p>Look at your&nbsp;Channel Sheet. Here you can see that the numbers 5, 7, 9 and 11 have the yellow color, meaning that they are still selected. We are done with those four channels, so press the 'Clear' key once.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>11 more groups</h2>

<p>All right, now you&nbsp;know everything you need to know about making groups. We need 12 groups. All the information you need for making the groups is displayed in the following table. You have already made group 1, but the rest is a nice little exercise.</p>

<table>
	<tbody>
		<tr>
			<th>Group number:</th>
			<th>Channels:</th>
			<th>Name:</th>
		</tr>
		<tr>
			<td>1</td>
			<td>5 + 7 + 9 + 11</td>
			<td>FOH Warm</td>
		</tr>
		<tr>
			<td>2</td>
			<td>17 + 19 + 21 + 23</td>
			<td>LX1 Warm</td>
		</tr>
		<tr>
			<td>3</td>
			<td>25 + 27 + 29 + 31</td>
			<td>LX2 Warm</td>
		</tr>
		<tr>
			<td>4</td>
			<td>33 + 35 + 37 + 39</td>
			<td>LX4 Warm</td>
		</tr>
		<tr>
			<td>5</td>
			<td>1 + 3 + 13 + 15</td>
			<td>Box Warm</td>
		</tr>
		<tr>
			<td>6</td>
			<td>All uneven numbers</td>
			<td>All Warm</td>
		</tr>
		<tr>
			<td>7</td>
			<td>6 + 8 + 10 + 12</td>
			<td>FOH Cold</td>
		</tr>
		<tr>
			<td>8</td>
			<td>18 + 20 + 22 + 24</td>
			<td>LX1 Cold</td>
		</tr>
		<tr>
			<td>9</td>
			<td>26 + 28 + 30 + 32</td>
			<td>LX2 Cold</td>
		</tr>
		<tr>
			<td>10</td>
			<td>34 + 36 + 38 + 40</td>
			<td>LX4 Cold</td>
		</tr>
		<tr>
			<td>11</td>
			<td>2 + 4 + 14 + 16</td>
			<td>Box Cold</td>
		</tr>
		<tr>
			<td>12</td>
			<td>All even numbers</td>
			<td>All Cold</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p>When you are done, your group pool should look something like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/qsg_05_groups_group-pool_v3-3_1.png">
<figcaption><em>Completed group pool</em></figcaption>
</figure>

<p><br>
&nbsp;</p>

<p>On the <a href="/Topic/d69b28f2-c3d6-4550-b0cd-e06bd0668955">next page</a>&nbsp;we will make the first cue.</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option selected="selected" value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="20">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="89c6b2c0-e97f-42d4-9534-48776b0a720b">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/04_control_dimmers_or_channels/en/3.9'; " title="Go to previous page '04 Control Dimmers or Channels'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/06_store_the_first_cue/en/3.9';" title="Go to next page '06 Store the First Cue'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/55162/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
