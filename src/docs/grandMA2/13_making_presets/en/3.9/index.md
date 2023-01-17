---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/13_making_presets/en/3.9'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="435b364f-45c3-43ce-8f50-05ba3c65e685">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/12_preset_pool/en/3.9'; " title="Go to previous page '12 Preset Pool'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/14_second_sequence/en/3.9';" title="Go to next page '14 A Second Sequence'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/55170/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Making presets</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Some preparations</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Creating presets (finally)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Naming the presets</a>
						</li>
				</ul>
			</div>

		<p>Next we are going to make some presets.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Some preparations</h2>

<p>In just a few seconds we are going to store a preset. But to make sure we save them correctly we need to examine the "Store options". Press and hold the&nbsp;<span class="hardkey">Store</span>&nbsp;key for approximate&nbsp;1 second until the Store Options&nbsp;pop-up appears (on screen 1).</p>

<p>We need the "Preset Options" to look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/qsg_13_making-presets_preset-store-options_v3-2_1.png">
<figcaption><em>Preset Store options</em></figcaption>
</figure>

<p>Press the buttons until they are correct, then press the <span class="softkey">Save as Default</span> in the title bar.</p>

<p>Finish by pressing the&nbsp;<span class="hardkey">Esc</span>&nbsp;key twice (we are not storing anything right now).</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Creating presets (finally)</h2>

<p>All right, give your moving heads different values in the pan and tilt.</p>

<p>When you are happy, make sure you can see the preset pool called "Position". Press&nbsp;<span class="hardkey">Store</span>&nbsp;and then the first Position preset pool button.</p>

<p>Now instead of values your fixture sheet shows "P2.1". This refers to Preset Pool 2, Pool Button 1. When we name presets, then the name will appear instead of this number.</p>

<p>Move your lights to different position. Now press:&nbsp;<span class="hardkey">Store</span> <span class="hardkey">Preset</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">.</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">Please</span>. This creates a second position preset.</p>

<p>The "2 ." is a reference directly to the position presets (you may have noticed the pool window are called "2 Position").</p>

<p>Move your light, make one more position preset and clear your programmer.</p>

<p>&nbsp;</p>

<p>Select the first Mac 700 (Fixture 111). Change the color to a blue one using the Special Color Dialog. Now store the first color preset.</p>

<p>Notice how the position presets have a red "S" at the top of the pool button. This means that the position preset are locked to the fixtures that specifically had position values when the preset was stored - it is called a "Selective" preset. So if you add more moving lights later, then they cannot use the position preset already made.</p>

<p>The color preset you just made have an orange "G" in the top. This means that it is a "Global" preset. A global preset can be used by all the fixtures of the same fixture type. So all our Mac 700s can use the color preset even though we just had one fixture selected when we made it. If you later add more Mac 700s then they can also use the color preset.</p>

<p>There is a third preset option called "Universal". They are used to make presets that applies also to other fixture types than the ones used during the creation. So if we had made the color preset as a universal preset, then we could use the color preset on any fixture that have a MixColor system.</p>

<p>&nbsp;</p>

<p>Make 2 more color presets and make&nbsp;3 different gobo presets. When you are done, please clear your programmer.</p>

<p>&nbsp;</p>

<p>Press:&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Thru</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">3</span>&nbsp;<span class="hardkey">3</span>&nbsp;<span class="hardkey">Please</span> <span class="hardkey">Please</span> <span class="hardkey">Please</span> <span class="hardkey">Store</span> <span class="hardkey">Preset</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">.</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Please</span>.</p>

<p>Now you have made an "All" preset that contains all the default values of the fixtures. The "Please Please Please" activates all parameters of the selected fixtures. If you have a selection of fixtures and press 'Please' multiple times then you activate and deactivate all the attributes of the selected fixtures. So the first 'Please' made the selection. The two following 'Please's activated all possible attributes in the&nbsp;fixtures.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Naming the presets</h2>

<p>Did you notice that the Color and Gobo preset automatically named them self. When possible then the&nbsp;grandMA2 tries to add a descriptive name. When it does, then it adds a hashtag&nbsp;after the name.</p>

<p>It cannot guess the position the fixtures have in the Position and All presets. You need to add a name that makes&nbsp;sense. Press <span class="hardkey">Assign</span> <span class="hardkey">Assign</span> and then the first position preset. Type a name in pop-up.</p>

<p>Do the same for the other Position preset and the All preset.</p>

<p>You should have presets that look something like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/qsg_13_making-presets_final-presets_v3-3_1.png">
<figcaption><em>Final Presets</em></figcaption>
</figure>

<p>There are many details about presets. There is lot of information on a preset pool button and they can be used for many things - but it is outside the scope of this Quick Start Guide. Use the menu on the left side to read more about presets - but wait till you are done with this guide :-)</p>

<p>&nbsp;</p>

<p>This is the presets we need for making our new second sequence.&nbsp;Go to the <a href="/Topic/b90f013c-51d7-40ff-b8b4-e7f384036032">next page</a>&nbsp;to do that.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="435b364f-45c3-43ce-8f50-05ba3c65e685">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/12_preset_pool/en/3.9'; " title="Go to previous page '12 Preset Pool'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/14_second_sequence/en/3.9';" title="Go to next page '14 A Second Sequence'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/55170/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
