---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/timecode_edit/en/1.6'
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
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="b73e80da-ddbb-460d-a60b-af783d2a68e0">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/timecode_record_external/en/1.6'; " title="Go to previous page 'Record an external timecode show'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/Layouts/en/1.6';" title="Go to next page 'Layouts'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/44/b73e80da-ddbb-460d-a60b-af783d2a68e0">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/71747/39'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.6</span>
			</div>
		<h1>Edit a  Timecode Show</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Edit Using Dual Encoders&nbsp;</a>
						</li>
				</ul>
			</div>

		<p><strong>Requirement:</strong></p>

<ul>
	<li>Record a timecode show.&nbsp;</li>
</ul>

<p>For more information, see <a href="/Topic/b2b8c515-9ac2-4a0d-9e40-a28a8f2d17ff">Record a Timecode Show</a>.&nbsp;</p>

<p>It is possible to edit an existing timecode show to adjust details and accuracy in time.&nbsp;&nbsp;</p>

<div class="important"><strong>Important:</strong><br>
A track is created for each sequence, and an event is created for each cue.</div>

<ol>
	<li>Tap <span class="softkey">Mode</span>&nbsp;in the title bar to enter <strong>Setup</strong> mode. The timecode encoder bar is displayed.</li>
	<li>Use the dual encoders to navigate the tracks and select events or time ranges.</li>
</ol>

<div class="tip"><strong>Hint:</strong><br>
It is possible to select multiple events, markers, or time ranges using the lasso selection method. The number on the right of the tool button&nbsp;<img alt="" src="/Media/Image/icon_select-15_v0-1.png">&nbsp;indicates the number of selected events.&nbsp;</div>

<figure class="caption"><img alt="" src="/Media/Image/window_timecode_encoder-bar.png">
<figcaption>Timecode encoder bar</figcaption>
</figure>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2><a id="edit_using_dual_encoders" name="edit_using_dual_encoders"></a>Edit Using Dual Encoders&nbsp;</h2>

<p><strong>Cursor:&nbsp;</strong>(First dual encoder)</p>

<ul>
	<li>Rotate the dual encoder inner ring clockwise or counterclockwise to move the cursor (green timeline) on the time axis.</li>
	<li>Press and rotate the dual encoder inner ring to move the cursor twice as fast.</li>
	<li>Press the dual encoder inner ring to open the calculator and enter a new value.</li>
</ul>

<p><strong>Marker:</strong>&nbsp;(First dual encoder)</p>

<ul>
	<li>Rotate the dual encoder outer ring clockwise or counterclockwise to select markers on the selected track group.</li>
	<li>Press the dual encoder key, and select a marker from the drop-down list.&nbsp;</li>
</ul>

<p><strong>Track:</strong>&nbsp;(Second dual encoder)</p>

<ul>
	<li>Rotate the dual encoder inner ring to select a track group or a track.</li>
	<li>Press the dual encoder inner ring, and select a track from the drop-down list.</li>
</ul>

<p><strong>TimeRange:</strong>&nbsp;(Second dual encoder)</p>

<ul>
	<li>Rotate the dual encoder outer ring to select a time range on the selected track or track group.</li>
	<li>Press the dual encoder key, and select a time range from the drop-down list.</li>
</ul>

<p><strong>Event:</strong>&nbsp;(Third dual encoder)</p>

<ul>
	<li>Rotate the inner or outer ring of the dual encoder to select an event on the selected track.</li>
	<li>Press the inner ring of the dual encoder and select a token from the drop-down list.</li>
	<li>Press the dual encoder key, and select an event from the drop-down list.</li>
</ul>

<p><strong>Time:</strong>&nbsp;(Fourth dual encoder)</p>

<ul>
	<li>When an event is selected, rotate the dual encoder inner ring to move the event on the timeline.</li>
	<li>When a marker or a time range is selected, rotate the dual encoder inner ring to adjust the starting point.&nbsp;</li>
</ul>

<p><strong>Duration:</strong>&nbsp;(Fourth dual encoder)</p>

<ul>
	<li>Rotate the dual encoder outer ring to adjust the duration of the selected marker or time range.</li>
</ul>


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
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="b73e80da-ddbb-460d-a60b-af783d2a68e0">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/timecode_record_external/en/1.6'; " title="Go to previous page 'Record an external timecode show'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/Layouts/en/1.6';" title="Go to next page 'Layouts'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/71747/39';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
