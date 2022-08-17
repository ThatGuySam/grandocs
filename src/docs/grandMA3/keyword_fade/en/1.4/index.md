---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/keyword_fade/en/1.4'
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
<option selected="selected" value="37">1.4</option>
<option value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="195771ca-6c37-4d46-92fa-93d6dd6e5f00">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_extension/en/1.4'; " title="Go to previous page 'Extension'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_fadermaster/en/1.4';" title="Go to next page 'FaderMaster'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/42/195771ca-6c37-4d46-92fa-93d6dd6e5f00">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/62276/37'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.4</span>
			</div>
		<h1>Fade Keyword</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Description</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Syntax</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Examples</a>
						</li>
				</ul>
			</div>

		<p>To enter the <strong>Fade</strong> keyword in the command line, use one of the options:</p>

<ul>
	<li>Press <span class="hardkey">Time</span> (If the Time Key Target is set to Fixture. For more information see&nbsp;<a href="/Topic/5e960b42-1e2d-49a6-a738-bb3ac9f023d7">User Settings</a>&nbsp;and&nbsp;<a href="/Topic/9269a267-cc3c-4312-a21e-85a968cac866">Time Key</a>.)</li>
	<li>Press <span class="hardkey">MA</span> <span class="hardkey">Time</span> <span class="hardkey">Time</span></li>
	<li>Type <strong>Fade</strong></li>
</ul>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Description</h2>

<p>The Fade keyword is a helping keyword to indicate&nbsp;fade&nbsp;times.</p>

<p>As a helping keyword for playback functions (for example Goto), this keyword sets the time used to execute the function.</p>

<p>As a helping keyword for programming functions (for example Store), this keyword sets the&nbsp;fade&nbsp;time of an object.</p>

<p>Used as a starting keyword,&nbsp;Fade&nbsp;applies individual timing in the programmer for the current selection and attributes.</p>

<div class="tip"><strong>Hint:</strong><br>
As long as the command line starts with a function, the&nbsp;fade&nbsp;keyword and value may appear anywhere in the command line.</div>

<p>To set the fade times for cues, read more in the <a href="/Topic/6794f5f5-817f-4963-be14-0af3721d5e39">CueFade keyword topic</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Syntax</h2>

<p><span class="syntax"><strong>Fade&nbsp;[Value List]</strong></span></p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Examples</h2>

<ul>
	<li>To crossfade&nbsp;to cue 3 in the selected sequence in 4 seconds, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; Goto Cue 3&nbsp;Fade&nbsp;4</div>

<p>&nbsp;</p>

<ul>
	<li>To set the individual&nbsp;fade&nbsp;time of 2 seconds to the dimmer of the current selection, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt;&nbsp;Fade&nbsp;2</div>

<p>&nbsp;</p>

<ul>
	<li>To set the dimmer value of the current fixture selection to 50 % and give them an individual&nbsp;fade&nbsp;time of 2 seconds to the dimmer of the current selection, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; At 50&nbsp;Fade&nbsp;2</div>


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
<option selected="selected" value="37">1.4</option>
<option value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="195771ca-6c37-4d46-92fa-93d6dd6e5f00">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_extension/en/1.4'; " title="Go to previous page 'Extension'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_fadermaster/en/1.4';" title="Go to next page 'FaderMaster'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/62276/37';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
