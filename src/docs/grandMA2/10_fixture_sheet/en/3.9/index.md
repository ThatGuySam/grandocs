---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/10_fixture_sheet/en/3.9'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="15297011-ae57-4c15-984c-ea9defb94cdc">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/09_add_moving_lights/en/3.9'; " title="Go to previous page '09 Add Moving Lights'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/11_control_fixtures/en/3.9';" title="Go to next page '11 Control Fixtures'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/55167/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Working with the Fixture Sheet</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Creating the Fixture Sheet Window</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Sheet Options</a>
						</li>
				</ul>
			</div>

		<p>The Fixture Sheet is used for displaying all the attributes of the fixtures. The Channel Sheet only shows the dimmer attribute.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Creating the Fixture Sheet Window</h2>

<p>Now that we have fixtures it would be nice to see what they are doing. To do this we need the&nbsp;<strong>Fixture Sheet&nbsp;window</strong>.</p>

<p>It might be a good idea to have the fixture sheet on a screen that is close to the encoders. If you are on a&nbsp;console it would be a suggestion to have it on screen 2. If you are using the onPC, then you could try to put it on screen 1.</p>

<p>To empty a screen and start on a fresh, press and hold the <span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder_1.png"></span> (you do not have to "hold" in the onPC). Now you got a small pop-up in the lower right corner of your screens. It looks like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/qsg_10_fixture-sheet_encoder-settings_v3-2.png">
<figcaption><em>Small Encoder Settings</em></figcaption>
</figure>

<p>Tap where it says <span class="softkey">Clear Screen</span>. This will delete any windows you have on that screen. If you tap "Clear All Screen" then you empty all your screens.</p>

<p>Now you need to add the Fixture Sheet.The <strong>Fixture</strong> Sheet is in the <strong>Sheet</strong> tab in the <strong>Create Basic Window</strong>.</p>

<p>In the Fixture sheet your fixtures are (as a default) represented as a list. Your fixtures are in rows and the different attributes (like Dimmers, Pan/Tilt, Gobos, etc.) are sorted in columns.</p>

<p>Also notice that you now got three "FT" fixtures at the bottom of the list. These are the automatically created "Fixture Type" fixtures - that you do not have to worry about.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sheet Options</h2>

<p>When you press the yellow ball in the upper left corner of the sheet you get the sheet options (it is also here you can delete a single window - if you have not noticed).</p>

<p>The options are separated into different areas. Each area have a tab.</p>

<p>The <strong>Tools</strong> tab gives you the option to add different elements to your view - scrollbars etc.</p>

<p>The <strong>LayerMask</strong> options allows you to activate and control some masking in your sheet (masking hides different elements).</p>

<p>The <strong>Display</strong> controls how your Fixture sheet looks.</p>

<p>In <strong>Title Buttons</strong> you can turn on or off the different buttons in the sheets title bar.</p>

<p><strong>Mask (Local)</strong> is a mask you can apply to this specific sheet (if activated in the LayerMask tab).</p>

<p>In some sheets there might be more tabs and other options then the ones you can see in the options for the Fixture Sheet.</p>

<p>Most of these options are outside the scope of this Quick Start Guide. But there are some that you should change.</p>

<p>Open the Display tab and make the following changes:</p>

<ul>
	<li>Symbol Output - Auto</li>
	<li>Symbol Feature - On</li>
	<li>Feature Sort - On</li>
	<li>Hide Empty Cells - On</li>
	<li>Merge Same Values - Off</li>
</ul>

<p>Now tap the <span class="softkey">Save to Default</span> button the title bar of the options.</p>

<p>What did all this mean? Well, let us have a look each of them.</p>

<p><strong>Symbol Output</strong> is a small square in the Name cells. This square is displaying the current output (Dimmer and Color) of the fixture.</p>

<p><strong>Symbol Feature</strong> is symbols in many of the cells. This shows you what the current Color, Gobo, Dimmer value and so on are in each of the relevant columns.</p>

<p><strong>Feature Sort</strong> will move the selected feature/preset type (next page deals with these) next to the Name column. This means that you do not need to scroll left and right in your fixture sheet to see what you are currently changing on the fixture.</p>

<p><strong>Hide Empty Cells</strong> can be very useful if you have a show with different fixture types. Then some fixtures will have some functions that others do not. Removing the empty cells can increase the readability of the sheet.</p>

<p><strong>Merge Same Values</strong> is a function that will only write a value once in some columns, if the current value is the same for all elements. If for instance you have a RGB fixture and all three colors are at "Full", then it will combine the three RGB columns and just write "Full" once. When the cells are not combines then it will write "Full" three time. Having combined values can make it a little hard to see what each of the RGB colors are doing. In the RGB example, try to imagine that the column displays "Full Closed". Now you need to find out what two colors are at "Full" or "Closed". Having all three values visible all time means that you do not have to think about it. Sorry for the long explanation :-)</p>

<p>'Save to Default' means that the changes you just made, will be used every time you create a new Fixture sheet.</p>

<p>The Fixture Sheet should now look something like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/qsg_10_fixture-sheet_result_v3-3_1.png">
<figcaption><em>The Fixture sheet</em></figcaption>
</figure>

<p>&nbsp;</p>

<p>On the <a href="/Topic/8688ffa5-e3e9-4e94-b05d-7de9d26b477d">next page</a> we are going to have a look at how to control fixtures.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="15297011-ae57-4c15-984c-ea9defb94cdc">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/09_add_moving_lights/en/3.9'; " title="Go to previous page '09 Add Moving Lights'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/11_control_fixtures/en/3.9';" title="Go to next page '11 Control Fixtures'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/55167/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
