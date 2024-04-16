---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/keyword_timecode/en/1.5'
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
<option selected="selected" value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="70e561ed-d1ec-42c0-9cfd-24ca61292348">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_time/en/1.5'; " title="Go to previous page 'Time'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_toggle/en/1.5';" title="Go to next page 'Toggle'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/44/70e561ed-d1ec-42c0-9cfd-24ca61292348">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/67497/38'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.5</span>
			</div>
		<h1>Timecode Keyword</h1>

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
							<a href="#toc_header_anchor_3">Property</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Examples</a>
						</li>
				</ul>
			</div>

		<p>To enter the Timecode keyword in the command line, use one of the options:</p>

<ul>
	<li>Press&nbsp;<span class="hardkey">MA</span> + <span class="hardkey">X6</span></li>
	<li>Type&nbsp;<strong>Timecode</strong></li>
	<li>Type the shortcut&nbsp;<strong>TC</strong></li>
</ul>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Description</h2>

<p>The Timecode keyword is an object keyword used to select the timecode by default.</p>

<p>Using the Timecode keyword you can:</p>

<ul>
	<li>store</li>
	<li>play (go)</li>
	<li>record</li>
	<li>edit</li>
	<li>label</li>
	<li>set properties of</li>
	<li>rewind (top)</li>
</ul>

<p>timecode shows.</p>

<p>For more information see&nbsp;<a href="/Topic/9b6874ef-8acd-41d9-8cbb-03396fdec9fe">Timecode</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Syntax</h2>

<p><span class="syntax">[Function] Timecode [ID/"Name"]</span></p>

<p><span class="syntax">Set Timecode [ID/"Name"] ["Property"] ["Property Value"]</span></p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Property</h2>

<p>The following table displays the properties that can be assigned using the <a href="/Topic/e92b40d4-4955-41a9-8b7f-2beefd5a6f10">Set Keyword</a>.</p>

<table border="1" cellpadding="1" cellspacing="1">
	<thead>
		<tr>
			<th scope="col" style="text-align:left">Property</th>
			<th scope="col" style="text-align:left">Property Value</th>
			<th scope="col" style="text-align:left">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="text-align:left">Name</td>
			<td style="text-align:left">"Timecode show name"</td>
			<td style="text-align:left">Set the name of timecode show.</td>
		</tr>
		<tr>
			<td style="text-align:left">Time</td>
			<td style="text-align:left">&nbsp;</td>
			<td style="text-align:left">Set position of the time cursor.</td>
		</tr>
		<tr>
			<td style="text-align:left">Duration</td>
			<td style="text-align:left">0s to 255h59m58.96s</td>
			<td style="text-align:left">Set the entire lenght of timecode show.</td>
		</tr>
		<tr>
			<td style="text-align:left">Offset</td>
			<td style="text-align:left">0s to 255h59m58.96s</td>
			<td style="text-align:left">To move the entire timecode show forward, set an offset in the timecode show.</td>
		</tr>
		<tr>
			<td style="text-align:left">Loop Mode</td>
			<td style="text-align:left">Loop<br>
			Pause<br>
			Off</td>
			<td style="text-align:left">Basic settings for Loop and how to pause or stop.</td>
		</tr>
		<tr>
			<td style="text-align:left">Loop Count</td>
			<td style="text-align:left">"Endless Repeat" (0),<br>
			"No Repeat" (1),<br>
			2..1000</td>
			<td style="text-align:left">
			<p><strong>Only for timecode shows syncing to the internal clock.</strong><br>
			Set if the timecode show runs:<br>
			Endless (Endless Repeat)<br>
			Once and stop (No Repeat)<br>
			A specific number of times (number between 2 and 1000)</p>
			</td>
		</tr>
		<tr>
			<td style="text-align:left">TimeMarkers</td>
			<td style="text-align:left">&nbsp;</td>
			<td style="text-align:left">Timemarkers are used to selet the track. They will be stored.</td>
		</tr>
		<tr>
			<td style="text-align:left">TCSlot</td>
			<td style="text-align:left">"Internal" (-2), "Link Selected" (-1), "Slot1" (0), "Slot2" (1), "Slot3" (2),&nbsp; etc.</td>
			<td style="text-align:left">Set the timecode show to a timecode slot.</td>
		</tr>
		<tr>
			<td style="text-align:left">AutoStart (only available with external timecode slot)</td>
			<td style="text-align:left">"Yes", "No"</td>
			<td style="text-align:left"><strong>Only available when syncing to an external source.</strong><br>
			If a timecode signal is received, the timecode show switches from the off mode into the play mode.</td>
		</tr>
		<tr>
			<td style="text-align:left">AutoStop</td>
			<td style="text-align:left">"Yes", "No"</td>
			<td style="text-align:left"><strong>Only available when syncing to an external source.</strong><br>
			If a timecode signal is received, the timecode show switches from the play mode into the off mode.</td>
		</tr>
		<tr>
			<td style="text-align:left">User Bits</td>
			<td style="text-align:left">0 .. FFFFFFFF, 0 .. 4294967296</td>
			<td style="text-align:left"><strong>Only available when syncing to an external source.</strong><br>
			To transmit several kinds of information, for example, a second Timecode Stream, set user bits in hex or decimal. So several incoming Timecode Streams can be discerned.</td>
		</tr>
	</tbody>
</table>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Examples</h2>

<ul>
	<li>To set timecode show "Intro" to a duration of 55 seconds, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; Set Timecode "Intro" "Duration" "55"</div>

<p>&nbsp;</p>

<ul>
	<li>To store a new timecode show called "Napalm Skies" in the timecode pool, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; Store Timecode "Napalm Skies"</div>

<p>&nbsp;</p>

<ul>
	<li>To rename timecode show "Intro" to "Prelude", type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; Set Timecode "Intro" "Name" "Prelude"</div>

<p>&nbsp;</p>

<ul>
	<li>&nbsp;To start the timecode show "Prelude", type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; Go Timecode "Prelude"</div>

<p>&nbsp;</p>

<ul>
	<li>&nbsp;To rewind the timecode show "Prelude", type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; Top Timecode "Prelude"</div>

<p>&nbsp;</p>

<ul>
	<li>To label timecode show 3 in the timecode pool, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; Label Timecode 3</div>

<p>The label pop-up opens and you can now label the timecode show.</p>


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
<option selected="selected" value="38">1.5</option>
<option value="39">1.6</option>
<option value="40">1.7</option>
<option value="42">1.8</option>
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="70e561ed-d1ec-42c0-9cfd-24ca61292348">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_time/en/1.5'; " title="Go to previous page 'Time'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_toggle/en/1.5';" title="Go to next page 'Toggle'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/67497/38';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
