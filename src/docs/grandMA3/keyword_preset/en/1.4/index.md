---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/keyword_preset/en/1.4'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="a83b8a30-dd58-4267-bbe6-3fc19ed076fb">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_pluginlibrary/en/1.4'; " title="Go to previous page 'PluginLibrary'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_press/en/1.4';" title="Go to next page 'Press'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/44/a83b8a30-dd58-4267-bbe6-3fc19ed076fb">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/62405/37'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.4</span>
			</div>
		<h1>Preset Keyword</h1>

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
							<a href="#toc_header_anchor_3">Objects</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Parameter</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Examples</a>
						</li>
				</ul>
			</div>

		<p>To enter the Preset keyword in the command line, use one of the options:</p>

<ul>
	<li>Press <span class="hardkey">Preset</span></li>
	<li>Type <strong>Preset</strong></li>
	<li>Type the shortcut <strong>Pres</strong></li>
</ul>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Description</h2>

<p>With the Preset keyword you can:</p>

<ul>
	<li>Select the fixtures stored in a preset</li>
	<li>Apply the At function in the preset within the fixture or channel selection</li>
</ul>

<p>If no fixtures or channels are selected in the programmer, the default function for preset pool objects will be<strong> SelFix</strong>. For more information see&nbsp;<a href="/Topic/387566bc-53dc-4526-acb2-43ade01a80ff">SelFix Keyword</a>.</p>

<p>If fixtures or channels are selected in the programmer, the default function will be<strong> At</strong>. For more information see&nbsp;<a href="/Topic/11230379-6621-422a-ac2e-ac0b1b23c45d">At Keyword</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Syntax</h2>

<p><span class="syntax">Preset&nbsp;[Feature Group].[ID]</span></p>

<p><span class="syntax">Preset [Feature Group]."Name"</span></p>

<p><span class="syntax">Set Preset [Feature Group].[ID] [Parameter] [Parameter Value]</span></p>

<p><span class="syntax">Assign [Object] [ID] At Preset [Feature Group].[ID]</span></p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Objects</h2>

<p>The following table displays the objects that can be assigned using the <a href="/Topic/1638ecf2-1ce8-4859-8511-404212f477e6">Assign Keyword</a>.</p>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<thead>
		<tr>
			<th scope="col">Object</th>
			<th scope="col">Object Value</th>
			<th scope="col">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Appearance</td>
			<td>"Appearance 1"</td>
			<td>Assigns the appearance for the pool object.</td>
		</tr>
		<tr>
			<td>InputFilter</td>
			<td>"Filter 12"</td>
			<td>Assigns the filter for the pool object.</td>
		</tr>
		<tr>
			<td>Scribble</td>
			<td>"Scribble 1"</td>
			<td>Assigns the scribble for the preset pool object.</td>
		</tr>
	</tbody>
</table>

<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Parameter</h2>

<p>The following table displays the available parameters that can be set using the <a href="/Topic/e92b40d4-4955-41a9-8b7f-2beefd5a6f10">Set Keyword</a>.</p>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<thead>
		<tr>
			<th scope="col">Parameter</th>
			<th scope="col">Parameter Value</th>
			<th scope="col">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Name</td>
			<td>"Preset Name"</td>
			<td>Sets the preset pool object name.</td>
		</tr>
	</tbody>
</table>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Examples</h2>

<ul>
	<li>To select the fixtures that can use preset 5 of the dimmer feature group, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; SelFix Preset 1.5</div>

<p>&nbsp;</p>

<ul>
	<li>To select the fixtures stored in any preset with the name "DarkRed", type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; SelFix Preset *."DarkRed"</div>

<p>&nbsp;</p>

<ul>
	<li>To set the name of the preset to the position preset 3, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; Set Preset 2.3 Name "Stage Left"</div>

<p>&nbsp;</p>

<ul>
	<li>To assign world 5 to the preset position 4, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; Assign World 5 At Preset 2.4</div>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="a83b8a30-dd58-4267-bbe6-3fc19ed076fb">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_pluginlibrary/en/1.4'; " title="Go to previous page 'PluginLibrary'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_press/en/1.4';" title="Go to next page 'Press'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/62405/37';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
