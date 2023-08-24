---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/ost_sound_input_window/en/3.3'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="b8f34487-162e-4057-ae06-70502c439a21">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/ost_clock/en/3.3'; " title="Go to previous page 'Clock'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/keyword_vpupixelmapperview/en/3.3';" title="Go to next page 'VPU pixel mapper view'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/b8f34487-162e-4057-ae06-70502c439a21">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/27994/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1>Sound input window</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">The upper left section</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">The lower left section</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">The upper right section</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">The lower right section</a>
						</li>
				</ul>
			</div>

		<p>To access the&nbsp;<strong>Sound Input Window</strong>, tap on an empty part of a screen. This must be at least 2 columns wide and 2 rows high. Tap&nbsp;<span class="softkey">System</span>&nbsp;and then&nbsp;<span class="softkey">Sound Input</span>.</p>

<p>This will open the <strong>Sound Input Window</strong>.</p>

<figure class="caption"><img alt="" src="/Media/Image/window_sound-input_v3_3.png">
<figcaption><em>Sound input window</em></figcaption>
</figure>

<p>&nbsp;</p>

<p>The window is divided&nbsp;in four sections.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>The upper left section</h2>

<p>This section displays the different frequencies of the incoming signal. The first row is an overall summary. The next three rows splits the signal in <strong>Bass</strong>, <strong>Medium</strong> and <strong>High</strong> frequencies.</p>

<p>The seven last rows splits the signal in&nbsp;frequencies of 75 Hz to 3.7 KHz.</p>

<div class="tip"><strong>Hint:</strong><br>
It is possible to assign the different frequencies to an <strong>Effect</strong>. Select the form <strong>Sound</strong> and a pop-up will display the possibilities.&nbsp;</div>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>The lower left section</h2>

<p>This section displays the sound wave, received&nbsp;from the sound source.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>The upper right section</h2>

<p>This section is a BMP (Beats per minute) counter. This section shows how the incoming sound is interpreted&nbsp;in BMP.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>The lower right section</h2>

<p>This is the fader and button section. There are three faders:</p>

<ul>
	<li><strong>Snd In</strong> sets the gain of the incoming sound signal</li>
	<li>The <strong>Snd Fade</strong> fader is used with effects. When assigning one of the <strong>Sound Forms</strong> (form 20.x) to an effect, this fader will adjust how "hard" the effect will follow the sound. If <strong>Snd&nbsp;Fade</strong> is at 0 it will be hard and will smoothly fade up to be softer and softer, until the fader is set to 100. To read more about effects, see the <a href="/Topic/bd21a747-5ef9-4402-9fcd-1e312555ae5c">Effect</a>&nbsp;topic.</li>
	<li>The <strong>BPM fader</strong> will adjust itself to the BPM from the incoming sound signal.</li>
</ul>

<div class="tip">Hint:<br>
These three faders can also be assigned to executor faders as <strong>Special Masters</strong>. To read more about Special Master, see the <a href="/Topic/9ee59427-0cdc-49a6-a070-2783710ef610">Special Master</a>&nbsp;topic.</div>

<p>The three buttons to the right are responding to the BPM.</p>

<ul>
	<li><span class="softkey">DS</span> will double the value of the BPM counter.</li>
	<li><span class="softkey">Learn</span> will allow you to tap the beat manually, and adjust the BPM to this level.</li>
	<li><span class="softkey">HS</span> will half the value of the BPM counter.</li>
</ul>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="b8f34487-162e-4057-ae06-70502c439a21">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/ost_clock/en/3.3'; " title="Go to previous page 'Clock'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/keyword_vpupixelmapperview/en/3.3';" title="Go to next page 'VPU pixel mapper view'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/27994/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
