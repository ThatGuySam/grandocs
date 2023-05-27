---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/qsg_presets/en/1.6'
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
<option selected="selected" value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="25">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="e19c626f-daab-4b96-95e1-eb5253ddcef6">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_add_moving/en/1.6'; " title="Go to previous page '09 Add Moving Lights'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_phasers/en/1.6';" title="Go to next page '11 Phasers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/43/e19c626f-daab-4b96-95e1-eb5253ddcef6">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/73355/39'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.6</span>
			</div>
		<h1>Presets</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Recap</a>
						</li>
				</ul>
			</div>

		<p>We have looked at storing values in cues.</p>

<p>There is another option - storing the values in presets.</p>

<p>Presets are pool objects that can contain values and a selection of fixtures that can use the values.</p>

<p>These are often created as building blocks in cues but can also be used for busking shows.</p>

<p>One of the advantages of using presets as building blocks in cues is that the cue stores a <strong>reference</strong> to the preset and not the value stored in the preset. Should the preset values change, then the cue will still look in the preset for the values. There is no need to update the cue.</p>

<p>A preset pool looks a lot like the other pools we have looked at. There are several preset pools, so they have their own tab in the Add Window pop-up. The preset pools are created as windows in the user-defined area.</p>

<p>Each feature group has its own preset pool. The default setting is that you can only store values from a feature group in its respective pool. There are also five All preset pools. They can store values from all feature groups.</p>

<p>Let us have a look at color presets.</p>

<p>Clear your programmer if you still have values there.</p>

<p>Create a color preset pool on your screen.</p>

<p>Press <span class="hardkey">Group</span> <span class="hardkey">6</span> <span class="hardkey">Please</span>.</p>

<p>Press <span class="hardkey">Full</span> to turn them On.</p>

<p>Tilt them forward a little.</p>

<p>Finally, give them a nice color.</p>

<p>Now we have active programmer values in dimmer, tilt, and colors.</p>

<p><img alt="" src="/Media/Image/qsg_10_fixture-sheet_active-values.png"></p>

<p>Notice that we have selected the "main" part of the X4 fixtures. The dimmer and tilt are part of this main part. The main part does not have any color attributes. The values shown for the row with the main part are slightly darker. This indicates that the value shown is actually from the child or sub-fixture. The colors are actually in the sub-fixtures. We do not need to select the sub-fixtures explicitly to apply the color. Since the main fixture does not have this attribute it is passed on to the sub-fixtures when applied to the main fixture. Have a look at the dimmer attribute. The main fixture and sub-fixtures all have dimmer attributes. The value is only applied to the actually selected (main) fixture. The sub-fixtures default dimmer value is at 100%, so the result is colored light is output.</p>

<p>Ok, back to presets.</p>

<p>Press <span class="hardkey">Store</span> and click the first preset pool object in the color preset pool - not the title field, but the one with a small "1" in the upper left corner.</p>

<p>Two things happened.</p>

<p>First, our fixture sheet changed.</p>

<p><img alt="" src="/Media/Image/qsg_10_fixture-sheet_inactive-values.png"></p>

<p>The color values are now inactive values in the programmer. The dimmer and tilt attributes are still active values. This indicates that the color values have gone somewhere and the dimmer and tilt have not.</p>

<p>Also, the color values have gone and are replaced with "4.1". This is the number of the preset where the color values have gone.</p>

<p>The first number is the feature group / preset pool number. The second number is the pool object.</p>

<p><img alt="" src="/Media/Image/qsg_10_preset-color_one.png"></p>

<p>So we got this new color preset.</p>

<p>Notice the small yellow "G" in the upper right corner of the preset. This indicates that the preset is a <strong>Global</strong> preset.</p>

<p>Let us have a look at what is actually stored in the preset.</p>

<p>Clear the programmer.</p>

<p>Press <span class="hardkey">Edit</span> and then click the preset.</p>

<p>Now the fixture sheet changes and look like this:</p>

<p><img alt="" src="/Media/Image/qsg_10_fixture-sheet_edit-global.png"></p>

<p>These are now values in our programmer and it is actually output.</p>

<p>What we see here is that the value is only stored for the first sub-fixture of the first X4 fixture and there is a small yellow marker above each value.</p>

<p>The marker indicates that a value is a global value.</p>

<p>Global values can be used by all fixtures of the same type. This means that all the sub-fixtures of the X4 bars can use this color.</p>

<p>Clear your programmer and press <span class="hardkey">Esc</span>.</p>

<p>Click the color preset.</p>

<p>This first preset "call" selects all the fixtures that can use a preset - when we do not already have a selection of fixtures. Notice that we select all the sub-fixtures.</p>

<p>Click the preset again.</p>

<p>Now we have called the preset reference into our programmer for the selected fixtures. This is also what happens if we had used a group or manual selection to select some of the sub-fixtures.</p>

<p>Notice that the preset number is showing in the value cells in the fixture sheet.</p>

<p>If we want to turn On and tilt the X4 bars again then we need to select the parent / main fixtures. We can do this easily by pressing the <span class="hardkey">Up</span> key. Now we have selected the main fixtures and we can press <span class="hardkey">Full</span> to turn them On and use the tilt encoder to tilt them forward.</p>

<p>Now we are going to store a couple of other presets. Please make a <strong>Position</strong> preset pool and a <strong>Dimmer</strong> preset pool.</p>

<p>Now press <span class="hardkey">Store</span> and click the first preset in the position pool. And we are immediately going to store the first dimmer preset as well.</p>

<p>Now you should have presets that looks like this (The color might not be the same):</p>

<p><img alt="" src="/Media/Image/qsg_10_presets.png"></p>

<p>The position preset got a small red "S". this tells us that it is a <strong>Selective</strong> preset. These presets only store active values that can be used by the fixtures that had the values when they were stored.</p>

<p>Try to clear your programmer and click the position preset once. Now you have selected all the X4 main fixtures. Clicking it again assigns the reference to the preset.</p>

<p>If you edit the preset you can see in the fixture sheet that the tilt value is stored for all the X4 fixtures.</p>

<p>Clear the programmer again and exit the edit mode by pressing <span class="hardkey">Esc</span>.</p>

<p>Let us have a look at the dimmer preset. Notice that this got a gray "U". Which tells us that it is a <strong>Universal </strong>preset. Press <span class="hardkey">Edit</span> and click the preset.</p>

<p>Notice that it has only stored values for the first X4&nbsp; and the value is marked as global.&nbsp; So it looks a lot like a global preset. But it is not global - it is universal. This is important when we call the preset.</p>

<p>Clear the programmer and exit the edit mode.</p>

<p>Now click the dimmer preset once.</p>

<p>This selects all the fixtures. That is because all the fixtures we have patched have a dimmer attribute and the preset can be applied to all dimmer attributes.</p>

<p>Clicking it again. Now all the fixtures are at full. Clear the programmer.</p>

<p>Why did the presets got stored with these different preset modes? It is because we did not change the default store settings. These say that the preset should be stored using the "Auto" option for the preset mode. Auto means that the preset pools mode is used.</p>

<p>Each preset pools title field also has one of the mode letters showing the mode for the entire pool. This can be changed by clicking the MA logo in the title field for the pool. This opens the pool settings.</p>

<p><img alt="" src="/Media/Image/qsg_10_preset-pool-settings.png"></p>

<p>I am not going to explain all the different settings. But there is the <strong>PresetMode</strong> for the entire pool. Clicking the button toggles between the three different modes. Please leave it in the mode it was.</p>

<p>Close the settings pop-up by clicking the 'X' in the upper right corner of the pop-up.</p>

<p>Let us move on.</p>

<p>Create an All preset pool. There are five different All preset pools. They do the same and it does not matter which one you choose to create. There are several so you can organize the pools and store different content in different pools - should you choose to.</p>

<p>If we want to recreate the first look with the X4 bar, then we need to select the X4 fixtures and then apply the three presets. You could do this by clicking group 6, but we can also click the position preset first to select the X4 bars.</p>

<p>After you have made the selection, then you can click the three presets.</p>

<p>Now we have the references to the three presets in our programmer.</p>

<p>We want to store this in an all preset, but we would like to keep the references to presets - just like if we stored a cue.</p>

<p>To do this we need to make a small change to the store settings.</p>

<p>Press and hold the <span class="hardkey">Store</span> key until the store options open.</p>

<p>The store options are separated into different areas. One of them is about the preset. In this area, there is a button called "Embedded". Click it to activate it. Now click the first preset in the all preset pool.</p>

<p>We are going to do this again - almost and create a second All preset and then we can have a look at what happened.</p>

<p>Clear the programmer. Click the position preset twice and then the dimmer and color preset.</p>

<p>Now store the second All preset without changing the store settings.</p>

<p>The result should look something like this:</p>

<p><img alt="" src="/Media/Image/qsg_10_presets-all.png"></p>

<p>The first all preset got an icon with a vertical line and arrow pointing right. This means that the preset is referencing other objects. The three presets we started with have a different icon with a horizontal line and an arrow pointing down. This means that the preset is used as a reference somewhere else.</p>

<p>Clearing the programmer and clicking any of the two All presets gives the same output. But try to use the edit method and have a look at the two preset in the fixture sheet.</p>

<p>The first All preset has the references as values and the second preset has the attribute values. This means that the default when storing presets is that we extract the values from any selected preset and store these values into the new preset.</p>

<p>To explore this further, clear your programmer.</p>

<p>Select group 6 and click the color preset.</p>

<p>Change the color to something different.</p>

<p>Now the "Update" key is flashing. This means that we can update something. Click the "Update" button.</p>

<p>This opens the update menu. The left side shows the color preset. Click the preset.</p>

<p>Now we have updated the color preset and it could look something like this:</p>

<p><img alt="" src="/Media/Image/qsg_10_presets-all-updated.png"></p>

<p>Notice that nothing in the two All preset has actually changed! But the output is obviously different. The first All preset is still just referencing the first color preset - and this color preset <em>has</em> changed. The second All preset has attribute values stored and these values have not changed.</p>

<p>&nbsp;</p>

<p>Alright, this was all the preset knowledge we need at the moment.</p>

<p>Please create 5 different color presets including all the fixtures that can change color.</p>

<p>Also, create 5 position presets, some gobo presets and some All presets. Please create the position preset for all the fixtures that can move.</p>

<p>It is always a good idea to have presets with the default values (Open white, No Gobo, Home position, etc).</p>

<p>When you have created the desired preset, please clear your programmer and do not forget to save the show once in a while.</p>

<hr>
<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Recap</h2>

<p>In this chapter, we had a look at different presets and we made some preset for use in later chapters.</p>

<p>We touched different areas including the <a href="/Topic/0da47696-b168-4483-bc1c-c1a8c06c744e" target="_blank">Update Menu</a> and the <a href="/Topic/76e4b931-c206-4d41-b25a-4f80c6ae8a6e" target="_blank">Store Settings</a>.</p>

<p>The manual has an entire section with details about <a href="/Topic/ff5e956a-2746-4a28-b79c-e7794bb054e1" target="_blank">presets</a>.</p>

<p>In the <a href="/Topic/8d2d988d-9bca-4276-8b57-c40b5831c490">Next Chapter</a>, we are going to look at Phasers.</p>


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
<option selected="selected" value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="25">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="e19c626f-daab-4b96-95e1-eb5253ddcef6">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_add_moving/en/1.6'; " title="Go to previous page '09 Add Moving Lights'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/qsg_phasers/en/1.6';" title="Go to next page '11 Phasers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/73355/39';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
