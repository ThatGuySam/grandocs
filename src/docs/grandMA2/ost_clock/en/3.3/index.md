---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/ost_clock/en/3.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d1f773e1-bdbf-4b35-9a45-cb66b940f7e6">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/ost_help_viewer/en/3.3'; " title="Go to previous page 'Help'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/ost_sound_input_window/en/3.3';" title="Go to next page 'Sound input window'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/d1f773e1-bdbf-4b35-9a45-cb66b940f7e6">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/30307/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1>Clock</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">System Clock</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Timecode</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Timer</a>
						</li>
				</ul>
			</div>

		<p>To access the&nbsp;<strong>Clock&nbsp;</strong>window, tap on an empty part of a screen. This must be at least 2 columns wide and 2 rows high. Tap&nbsp;<span class="softkey">Other</span>&nbsp;and then&nbsp;<span class="softkey">Clock</span>.</p>

<p>This will open the <strong>Clock</strong> window.</p>

<figure class="caption"><img alt="" src="/Media/Image/windiw_clock-time_v3_3.png">
<figcaption><em>Clock window</em></figcaption>
</figure>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>System Clock</h2>

<p>As default, the <strong>Clock</strong> will open as System Clock (yellow digits). This will display the current time, according to the console time. For more information see the <a href="/Topic/686ec573-6a2e-47a9-bf12-fd8214164bb1">Date and Time</a>&nbsp;topic.</p>

<p>It is possible to change the settings and readout of the clock by tapping the yellow ball in the upper left corner of the clock window.</p>

<p>This will open a Clock Option window.</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_clock-options_v3_3.png">
<figcaption><em>Clock option window</em></figcaption>
</figure>

<p>In the System Clock there are different readout options. To list these, tap the yellow box:</p>

<ul>
	<li><strong>Analog</strong>&nbsp;displays the current time as an analog watch.</li>
	<li><strong>Digital AM/PM</strong>&nbsp;displays the current time as a 12-hour clock. This is a time convention in which the 24 hours of the day are divided into two periods: a.m. (from the Latin, ante meridiem, meaning before midday) and p.m. (post meridiem, meaning after midday)​&nbsp;</li>
	<li><strong>Digital 24h</strong>&nbsp;displays the current time as a 24-hour clock.</li>
	<li>​<strong>Date DD-MM-YYYY</strong>&nbsp;displays the date in a day, month and year format. This is the most common&nbsp;format in Europe, Asia, Africa and South America.</li>
	<li><strong>Date MM-DD-YYYY</strong>&nbsp;displays the date in a month, day and year format. This is the most common format in North America.</li>
	<li><strong>Dawn</strong>&nbsp;counts up or counts down until dawn.</li>
	<li><strong>Sunrise</strong>&nbsp;counts up or counts down until sunrise.</li>
	<li><strong>Sunset</strong>&nbsp;counts up or counts down until sunset.</li>
	<li><strong>Dusk</strong>&nbsp;counts up or counts down until dusk.</li>
</ul>

<p>For more information about dawn, dusk, sunrise and sunset see the <a href="/Topic/686ec573-6a2e-47a9-bf12-fd8214164bb1">Date and Time</a>&nbsp;topic.</p>

<p>It is also possible to offset the clock&nbsp;compared to the system time. To do this, tap the green square labeled <strong>Offset from System Clock Time</strong>. This will open a calculator where the time can be offset from -23.59. 995 hours&nbsp;to +23.59.995 hours. This setting is individual for every clock, so it is possible to have different clocks with different&nbsp;time zones for example.</p>

<p>To label the clock, tap the green square&nbsp;labeled&nbsp;<strong>Label of System Clock</strong>. This will open a pop-up where it is possible to label each clock individually.</p>

<figure class="caption"><img alt="" src="/Media/Image/img_clock-labled_v3_3.png">
<figcaption><em>Clocks with offset and label</em></figcaption>
</figure>

<p>&nbsp;</p>

<div class="tip"><strong>Hint:</strong><br>
In the top of the Clock Option window, it is possible to save the settings as default and load the default settings.</div>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Timecode</h2>

<p>To display the timecode, tap the button in the upper right corner until it says <span class="softkey">Timecode</span></p>

<p>This will display the selected timecode&nbsp;in gray digits.&nbsp;If the&nbsp;timecode&nbsp;is running, the digits turn green.&nbsp;</p>

<p>&nbsp;</p>

<figure class="caption"><img alt="" src="/Media/Image/img_clock-timecode_v3_3.png">
<figcaption><em>Timecode&nbsp;window</em></figcaption>
</figure>

<p>For more information about <strong>Timecodes</strong>&nbsp;see the <a href="/Topic/a0f5f662-0371-48a0-816c-a00ea5554ab0">Timecode</a> topic.</p>

<p>In the top of the window, there are four different action buttons:</p>

<figure class="caption"><img alt="" src="/Media/Image/img_clock-tcbuttons_v3_3.png">
<figcaption><em>Action buttons</em></figcaption>
</figure>

<ul>
	<li>Skip backwards</li>
	<li>Pause</li>
	<li>Play</li>
	<li>Skip forwards</li>
</ul>

<p>These can be used to control&nbsp;the internal <strong>Timecode&nbsp;</strong>generator.</p>

<p>&nbsp;</p>

<p>Use&nbsp;<strong>Link Selected Timecode</strong>&nbsp;button to select one of the 8 timecode slots as default or the selected slot.</p>

<p>For more information about timecodes&nbsp;see the <a href="/Topic/a0f5f662-0371-48a0-816c-a00ea5554ab0">Timecode</a>&nbsp;topic.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Timer</h2>

<p>To get to the stopwatch, tap the button in the upper right corner until it says <span class="softkey">Timer</span>.</p>

<p>This will display the Stopwatch 1 (blue digits).</p>

<figure class="caption"><img alt="" src="/Media/Image/img_clock-timer_v3_3.png">
<figcaption><em>Timer window</em></figcaption>
</figure>

<p>To <strong>Start</strong> or <strong>Stop</strong> the Timer, tap <span class="softkey">Start/Stop</span>. This can also be done by entering the following syntax in the command line:</p>

<div class="cl_input">[Fixture]&gt; Toggle Timer 1</div>

<p>To <strong>Reset</strong> the timer, tap the reset key or enter the following syntax in the command line:</p>

<div class="cl_input">[Fixture]&gt; Reset Timer 1</div>

<p>&nbsp;</p>

<p>For more information about Timers see the <a href="/Topic/0b0b6ab3-5220-48d7-844a-6277a2f62f1a">Timers</a>&nbsp;topics</p>

<p>&nbsp;</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d1f773e1-bdbf-4b35-9a45-cb66b940f7e6">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/ost_help_viewer/en/3.3'; " title="Go to previous page 'Help'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/ost_sound_input_window/en/3.3';" title="Go to next page 'Sound input window'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/30307/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
