---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/agenda_create_appointment/en/3.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="0488e20b-141b-4345-8c27-9e6cb8584269">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/agenda_what_is/en/3.3'; " title="Go to previous page 'What is agenda'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/macro/en/3.3';" title="Go to next page 'Macros'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/0488e20b-141b-4345-8c27-9e6cb8584269">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/29520/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1>Create an appointment in the agenda</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Start</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Time</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Duration</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Repeat</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Info</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">First</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Last</a>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Encoderbar</a>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Yellow Ball</a>
						</li>
				</ul>
			</div>

		<p>To create an appointment in the agenda, tap on a date in the Agenda window. To get to the <strong>Agenda window</strong>, see the <a href="/Topic/d20595b2-f6fa-43b0-977b-941bc9973254">What is agenda</a> topic.</p>

<p>The Agenda window will now change, and it could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/window_agenda_appointment_v3_3.png">
<figcaption><em>Agenda appointment window</em></figcaption>
</figure>

<p>In the left side of the window, 4 new buttons become visible:</p>

<ul>
	<li>Add - will add a new appointment to the schedule</li>
	<li>Delete - will delete the highlighted appointment</li>
	<li>Edit - will edit the highlighted appointment</li>
	<li>​Test - will test the CMD in the highlighted appointment</li>
</ul>

<p>When adding a new appointment, it is possible to fill in 8&nbsp;fields. Tap on the fields to edit them.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Start</h2>

<p>The field Start handles what time the appointment should start. This could be at an exact time (Absolute) or it could be set to Dawn, Sunrise, Sunset or Dusk according to the time and place the console is set to.</p>

<p>For more information about time and place, see the <a href="/Topic/686ec573-6a2e-47a9-bf12-fd8214164bb1">Date &amp; time</a>&nbsp;topic.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Time</h2>

<p>If the Start field is set to Absolute, then it is possible to enter a specific time for the appointment&nbsp;by using the&nbsp;Calculator in the Time field.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Duration</h2>

<p>The Duration field will manage how long time the appointment is active. For most commands, this is not relevant. It has to be at least 1 second.</p>

<div class="tip">Hint:<br>
It is not possible to make a duration on a flash button. It will take a Flash Off command to turn it off.</div>

<p>&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Repeat</h2>

<p>This field will manage how often the appointment will be repeated. Tap on the field and a pop-up will appear with different options:</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_agenda_repeat_v3_3.png">
<figcaption><em>Repeat options</em></figcaption>
</figure>

<p>Select the interval you need.</p>

<p>&nbsp;</p>

<p>CMD</p>

<p>This is the command that will be executed for this appointment.</p>

<p>For more information about commands and keywords, see the <a href="/Topic/81739f41-5fc3-47a0-9625-331b8948eca8">Command Syntax and Keywords</a>&nbsp;topic.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Info</h2>

<p>This field is free to use for information about the appointment. It has no relevance for the appointment, but can be used to remember what it will execute.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>First</h2>

<p>This is the first day the appointment will be executed.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Last</h2>

<p>This is the last day the appointment will be executed.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Encoderbar</h2>

<p>​When starting an appointment, the encoderbar&nbsp;will change.</p>

<figure class="caption"><img alt="" src="/Media/Image/img_agenda_encoder_v3_3.png">
<figcaption><em>Agenda encoderbar</em></figcaption>
</figure>

<p>Here it is possible to navigate in the calendar by using the encoders.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Yellow Ball</h2>

<p>Tap the yellow ball in the upper left corner to get a list of all scheduled appointments.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="0488e20b-141b-4345-8c27-9e6cb8584269">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/agenda_what_is/en/3.3'; " title="Go to previous page 'What is agenda'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/macro/en/3.3';" title="Go to next page 'Macros'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/29520/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
