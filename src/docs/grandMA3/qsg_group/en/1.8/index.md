---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/qsg_group/en/1.8'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="10">1.0</option>
<option value="32">1.1</option>
<option value="35">1.2</option>
<option value="36">1.3</option>
<option value="37">1.4</option>
<option value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option selected="selected" value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="25">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="0311ff7a-775e-42ef-a603-3279e63dd961">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_3d_setup/en/1.8'; " title="Go to previous page '05 3D Fixture Setup'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_appear/en/1.8';" title="Go to next page '07 Appearance'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/43/0311ff7a-775e-42ef-a603-3279e63dd961">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/79142/42'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.8</span>
			</div>
		<h1>Groups</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Create Group</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Recap</a>
						</li>
				</ul>
			</div>

		<p>Fixture selection can be made using the methods we explored in chapter 4, but when there are fixtures we often use together and need to select together, there is another option called <strong>Groups</strong>.</p>

<p>In a <strong>Group</strong>, we store the fixture selection and the fixture selection order.</p>

<p>Groups are organized in a <strong>Group Pool</strong>. This can be created as a window for easy creation, overview, and selection.</p>

<p>Make room in a user-defined area to create a group pool window. The <strong>Groups</strong> window is created like other windows and can be found in the <strong>Pool</strong> tab in the <strong>Add Window</strong> pop-up.</p>

<p>The pool looks like this when empty:</p>

<p><img alt="" src="/Media/Image/qsg_06_group-pool_empty_v1-4.png"></p>

<p>The square on the left is the <strong>Title Field</strong>. All pools have one of these. It tells you what kind of pool it is and the MA logo is used to access the settings - just like the logo in the left corner of other windows' title bar.</p>

<p>Pools often have fewer settings than more complex windows like the fixture sheet.</p>

<p>The other squares in the pool window are where we can store pool objects. The objects we store in the group pool are groups. A lot of the things we create are stored in pools. For instance, the views we have stored and modified are stored in a <strong>View</strong> pool.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Create Group</h2>

<p>We are going to create a few groups with our current fixtures.</p>

<p>The first group is going to be the front lights.</p>

<p>Make sure to start with an empty programmer and then select fixtures 1 thru 8. You do not need to give them a dimmer value.</p>

<p>Now click and hold the first group field until a group object appears.</p>

<p>Looking at the <strong>Command Line History</strong> window, you can see feedback like this:</p>

<div class="cl_response">OK: Store Group 1</div>

<p>Try to clear your programmer and then click the group. Now you have reselected the fixtures.</p>

<p>The group does not have a name, but we can label the group easily. The last thing we give focus to has a white frame. When a pool object has focus, and we start writing on our keyboard, the system assumes we give it a label.</p>

<p>So you can just start to type: <span class="syntax">Front</span> - this opens the "Edit Name" pop-up. Complete the labeling by pressing 'Enter' on the keyboard.</p>

<p>Now the group has a name. There are other ways to do this.</p>

<p>Pool objects have a special <strong>Swipey</strong> menu that gives access to some common functions. The menu is accessed by clicking and holding the group and then moving the pointer out of the group pool object.</p>

<p><img alt="" src="/Media/Image/qsg_06_swipey-menu_v1-8.png"></p>

<p>The menu has seven buttons that appear around the pool object. The top center button can be used to give the group a new label. The menu is visible as long as you hold the mouse button pressed or as long as you touch the screen. Move the pointer/finger to the desired button and release. You can release it outside the buttons if you do not want to do anything.</p>

<p>Create a second group with fixtures 9 thru 14. Label it "Sides". Make sure it only contains the desired fixtures.</p>

<p>Our third group is all the blinders (fixtures 21 thru 34).</p>

<p>We are going to make two more groups. It is two selections of blinders. These two groups are all blinders, but we will make two symmetrical selections.</p>

<p>Group four is fixtures 21, 24, 25, 27, 28, 30, 31, and 34 - label this "Even Blinders". It is not strictly the even numbers but just ignore this.</p>

<p>The last group is fixtures 22, 23, 26, 29, 32, and 33 - label this group "Odd Blinders".</p>

<p>Now we have the groups we need.</p>

<hr>
<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Recap</h2>

<p>In this chapter, we looked at groups as a selection tool. And created some useful groups.</p>

<p>Groups are described in detail in the <a href="/Topic/090be493-172a-4bcf-8d6d-7e4fae2e9260">Groups section</a> of the main manual.</p>

<p>The <a href="/Topic/7f512664-b7a0-4ff2-a76a-80a342421fd7">next chapter</a> is about Appearences.</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="10">1.0</option>
<option value="32">1.1</option>
<option value="35">1.2</option>
<option value="36">1.3</option>
<option value="37">1.4</option>
<option value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option selected="selected" value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="25">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="0311ff7a-775e-42ef-a603-3279e63dd961">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_3d_setup/en/1.8'; " title="Go to previous page '05 3D Fixture Setup'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_appear/en/1.8';" title="Go to next page '07 Appearance'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/79142/42';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
