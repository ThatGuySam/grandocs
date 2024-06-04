---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/keyword_park/en/1.4'
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
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="93d6094a-2d53-4c4e-a4f2-5fd63051fe5c">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_part/en/1.4'; " title="Go to previous page 'Part'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_paste/en/1.4';" title="Go to next page 'Paste'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="https://help.malighting.com/grandMA3/latest/?p=help.html">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/62395/37'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.4</span>
			</div>
		<h1>Park keyword</h1>

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

		<p>To enter the Park keyword in the command line, use one of the options:</p>

<ul>
	<li>Press <span class="hardkey">Pause</span> <span class="hardkey">Pause</span></li>
	<li>Type <strong>Park</strong></li>
</ul>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Description</h2>

<p>The Park keyword is a command keyword to prevent DMX channels of fixtures to change their value.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Syntax</h2>

<p><span class="syntax">Park [Object]</span></p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Examples</h2>

<ul>
	<li>To park fixture 1 with all its attributes, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; Park Fixture 1</div>

<ul>
	<li>To park the current selection, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt;&nbsp;Park</div>

<p>It is also possible to enter Park into the command line and tap a cell in the fixture sheet to park a certain attribute.</p>

<p>To unpark fixtures and/or attributes see the <a href="/Topic/9c80fab0-6a64-4e0b-9665-7d23a4b82d56">Unpark Keyword</a>.</p>

<div class="important"><strong>Important:</strong><br>
When parking a fixture and/or attribute it will park the corresponding DMX channel.</div>

<ul>
	<li>To park fixture 1 at a value 50, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; Park Fixture 1 At 50</div>

<div class="tip"><strong>Hint:</strong><br>
The command Park Fixture At will park all DMX channels of the fixture to the set value.</div>

<p>&nbsp;</p>

<ul>
	<li>To park only DMX channels for FeatureGroup 1 at 50, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; Park Fixture 1 At 50 If FeatureGroup 1</div>

<p>&nbsp;</p>

<ul>
	<li>To park DMX universe 2, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; Park DMXUniverse 2</div>

<p>To specify the desired universe:</p>

<ol>
	<li>Enter the Park keyword in the command line.</li>
	<li>Tap the universe in the universe pool.</li>
</ol>

<p>&nbsp;</p>

<ul>
	<li>To park DMX channel 20 on the first universe, type:</li>
</ul>

<div class="cl_input">&nbsp;User name[Fixture]&gt; Park DMXUniverse 1.20</div>

<p>To specify the desired DMX channel:</p>

<ol>
	<li>Enter the Park keyword in the command line.</li>
	<li>Tap the channel in the DMX sheet.</li>
</ol>

<div class="tip"><strong>Hint:</strong><br>
If there are parked channels in a universe, this will be indicated by a blue&nbsp;<strong>P</strong> icon in the universe pool.</div>


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
<option value="43">1.9</option>
<option value="44">2.0</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="93d6094a-2d53-4c4e-a4f2-5fd63051fe5c">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_part/en/1.4'; " title="Go to previous page 'Part'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_paste/en/1.4';" title="Go to next page 'Paste'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/62395/37';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
