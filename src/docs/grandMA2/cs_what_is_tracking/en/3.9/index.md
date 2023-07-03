---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/cs_what_is_tracking/en/3.9'
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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="88bb0237-4b6e-4e99-b73d-8892c0915436">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/cs_update_cues/en/3.9'; " title="Go to previous page 'Update cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/cs_what_is_mib/en/3.9';" title="Go to next page 'What is MIB'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/54920/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>What is Tracking</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_2">Cue Only</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Example</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Release</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Release First Step</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Turning Tracking On or Off</a>
						</li>
				</ul>
			</div>

		<p>Tracking is the principle to only store the <strong>changes</strong> in the cues.</p>

<p>If a fixture is turned on in a blue color, it will stay like this until it is told to change. It does not matter how many cues that are between it is told to turn On and the cue where it is told to turn Off.</p>

<p>Instead of each cue between turning it On and Off having the information that the fixture should be On in a blue color, we only have to store it once - from there it is tracked.</p>

<p>Quite simply, tracking is the idea that once a parameter is set to a level, it stays there until it is told to go somewhere else.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h3>Example</h3>

<p>Fixture number 1 is stored in a blue color, at 100 percent dimmer value in cue number 1. If the are 8 cues and fixture number 1 does not get any new information then it will stay at 100% in blue color in all 8 cues.</p>

<p>The best way to see this information is the <a href="/Topic/f99a92c3-f4b6-402d-a6f0-12131362ec7e#tracking_sheet">Tracking Sheet</a>. It would look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/window_sequence-tracking-sheet_eight-cues_cue-1_v3-3.png">
<figcaption><em>Sequence with 8 cues - fixture 1 stored values in cue 1</em></figcaption>
</figure>

<p>Notice the difference in text color between the values in cue 1 and the others. The magenta color indicates that the values are not actually stored in the cues, but it is a tracked value from a previous cue.</p>

<p>Now we change the color of the fixture to red and the dimmer is set to 100% again.</p>

<p>We store this as cue 4 (using Merge), it would look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/window_sequence-tracking-sheet_eight-cues_cue-4-blocked_v3-3.png">
<figcaption><em>Sequence with 8 cues - fixture 1 has a new color in cue 4 - blocked dimmer</em></figcaption>
</figure>

<p>The text color of the dimmer value is now white. This shows us that the values is stored here, but it is the same value as the tracked value. This is called a "Blocked" value. This would mean that if we change the value in any of the previous cues, then it would still be 100% in cue number 4. It is currently blocking the tracked value from cue 1 (the same value) and the value stored in cue 4 is tracking to the end.</p>

<p>Notice that the text color for the new RGB values in cue 4 are now cyan. This means that the value is stored here, it is a new value, and it will track the changed value into the rest of the cues.</p>

<p>If we remove the redundant stored value, then we remove the dimmer data from the cue - this is also called to "unblock".</p>

<figure class="caption"><img alt="" src="/Media/Image/window_sequence-tracking-sheet_eight-cues_cue-4_v3-3.png">
<figcaption><em>Sequence with 8 cues - fixture 1 has a new color in cue 4 - unblocked dimmer</em></figcaption>
</figure>

<p>There are several way to do this. One would be to simply edit the value in tracking sheet - follow the link above to read details about the tracking sheet.</p>

<p>Another way is to have the dimmer value for fixture number 1 as active value in your programmer and then store cue 4 with the "Remove" option. This would remove the dimmer value from the cue.</p>

<p>A third option could be using a command like this:</p>

<div class="cl_input">[Channel]&gt; Unblock Sequence 9</div>

<p>This would remove all redundant white values from the entire sequence number 9.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2><a id="cueonly" name="cueonly"></a>Cue Only</h2>

<p>When tracking is turned on and a value is stored in a cue, then the values tracks to the following cues. Just described above.</p>

<p>If a value is stored using <strong>Cue Only</strong>, the new values is not tracked if the attribute has previous tracking values. The old tracking values are automatically stored in the cue after the new values.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Example</h2>

<p>Have a look at the following sequence:</p>

<figure class="caption"><img alt="" src="/Media/Image/window_sequence-tracking-sheet_five-cue_before-change_v3-3.png">
<figcaption><em>Sequence before any changes</em></figcaption>
</figure>

<p>Now fixture number 2 gets a new intensity value and a new position. This is stored in cue number 1 using <strong>Cue Only</strong>.</p>

<p>This is the result:</p>

<figure class="caption"><img alt="" src="/Media/Image/window_sequence-tracking-sheet_five-cue_cue-only-change_v3-3.png">
<figcaption><em>New values stored using Cue Only</em></figcaption>
</figure>

<p>The new values are stored in cue 1. Notice that cue 2 and the following cues are not changed. This is the cue only function that stores the previous tracked intensity and position values for fixture 2 in cue 2.</p>

<p>If we had stored the values without Cue Only, it would have look like this:&nbsp;</p>

<figure class="caption"><img alt="" src="/Media/Image/window_sequence-tracking-sheet_five-cue_change-without-cueonly_v3-3.png">
<figcaption><em>Sequence changed without using Cue Only</em></figcaption>
</figure>

<p>Now number 2 looks different, and all the following cues uses the new position stored in cue 1.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2><a id="release" name="release"></a>Release</h2>

<p>It is possible to store using the <strong>Release</strong> option. This will put an <strong>(R)</strong> in the Sequence Tracking Sheet</p>

<p>When an attribute is released in the sequence then it is the same as the sequence no longer sending any information to the attribute.</p>

<p>If a different sequence is sending values to the attribute then these values are now used. Sequence priority can be important in this case - read about priorities in the <a href="/Topic/f07df390-5a1c-4f69-b608-49cb054133ba#priority">Playing back Cues topic</a>.&nbsp;</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2><a id="release_first_step" name="release_first_step"></a>Release First Step</h2>

<p>There is an option in the <a href="/Topic/473a6fcc-d3e5-48e7-b262-9bbb0916a25f">Executor Options</a>&nbsp;that is called <strong>Release Firststep</strong>. This becomes relevant if another option called <strong>Wrap Around</strong> is active.&nbsp;</p>

<p>You can enter the Executor options by pressing the <span class="hardkey">Assign</span> key and then one of the keys associated with an executor using a sequence - this opens the <strong>Assign Menu</strong>. Tap the <span class="softkey">Options</span> button on the right side of the menu.</p>

<p>Wrap Around allows the sequence to return to the top/first cue if you perform a Go (forward) command after you have reached the last cue in the sequence.</p>

<p>Release First Step controls what should happen with tracked values. They can track from the last cue to the first (Release First Step Off) or any tracked values can be released when the sequence is started from the top (Release First Step On).</p>

<p>Release first step is an option that effects the sequence. This means that this option is synchronized&nbsp;on all executors that uses the same sequence. Wrap around is a setting of the executor - so executors with the same sequence can have different options regarding Wrap Around.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Turning Tracking On or Off</h2>

<p>Also in the Executor Options there is the option to turn On or Off the tracking function.</p>

<p>This option belongs to the sequence, meaning that it will be synchronized across all executors that uses the sequence.</p>

<p>When Tracking is Off, the tracked values are gone and where the value was tracked it will be released instead.</p>

<p>If you look at the sequence used in the Cue Only example, it would look like this without Tracking:</p>

<figure class="caption"><img alt="" src="/Media/Image/window_sequence-tracking-sheet_five-cue_no-tracking_v3-3.png">
<figcaption><em>Sequence&nbsp;with Tracking turned Off</em></figcaption>
</figure>

<p>Fixtures 1 and 3 would only be On in cue 2. Fixture 2 would be On and in a position in cue 1. In cue 2 it would turn Off and the position would be released and go back to the default for the fixture. Fixture 2 would turn On again in cue 3 and Off in cue 4. You would not need to store the Off (closed) values, unless other sequences might also try to control the same fixtures and you want to make sure they turn Off.</p>


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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="88bb0237-4b6e-4e99-b73d-8892c0915436">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/cs_update_cues/en/3.9'; " title="Go to previous page 'Update cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/cs_what_is_mib/en/3.9';" title="Go to next page 'What is MIB'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/54920/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
