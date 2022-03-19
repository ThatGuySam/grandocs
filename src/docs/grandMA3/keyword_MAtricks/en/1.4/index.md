
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
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="11340790-318a-4537-913f-a9add0aae662">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_master/en/1.4'; " title="Go to previous page 'Master'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_MatricksPool/en/1.4';" title="Go to next page 'MAtricksPool'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/39/11340790-318a-4537-913f-a9add0aae662">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/66743/37'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.4</span>
			</div>
		<h1>MAtricks keyword</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Syntax</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Options</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Description</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Examples</a>
						</li>
				</ul>
			</div>

		<p>To enter the MAtricks keyword in the command line, use one of the following options:</p>

<ul>
	<li>Type&nbsp;<strong>MAtricks&nbsp;</strong></li>
	<li>Type the shortcut&nbsp;<strong>MAt</strong></li>
</ul>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Syntax</h2>

<p><span class="syntax"><strong>MAtricks ["Name"]</strong></span></p>

<p><span class="syntax">[Function] MAtricks</span></p>

<p><span class="syntax"><strong>MAtricks Active</strong></span></p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Options</h2>

<p>The MAtricks Overlay is structured like this:</p>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<tbody>
		<tr>
			<td>X</td>
			<td>Y</td>
			<td>Z</td>
		</tr>
		<tr>
			<td>XBlock</td>
			<td>YBlock</td>
			<td>ZBlock</td>
		</tr>
		<tr>
			<td>XGroup</td>
			<td>YGroup</td>
			<td>ZGroup</td>
		</tr>
		<tr>
			<td>XWings</td>
			<td>YWings</td>
			<td>ZWings</td>
		</tr>
		<tr>
			<td>XWidth</td>
			<td>YWidth</td>
			<td>ZWidth</td>
		</tr>
		<tr>
			<td>XShuffle</td>
			<td>YShuffle</td>
			<td>ZShuffle</td>
		</tr>
		<tr>
			<td>XShift</td>
			<td>YShift</td>
			<td>ZShift</td>
		</tr>
	</tbody>
</table>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Description</h2>

<p>The MAtricks keyword acts as an object type and as a mode.</p>

<p>Used with an ID, MAtricks represents MAtricks objects stored in the MAtricks Overlay.</p>

<p>With the helping keywords On, Off and Toggle, MAtricks may temporarily be enabled/disabled.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Examples</h2>

<ul>
	<li>To set the MAtricks X to 2, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; MAtricks "X" 2</div>

<p>&nbsp;</p>

<ul>
	<li>To set the MAtricks XBlock to 4, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt; MAtricks "XBlock" 4</div>

<p>&nbsp;</p>

<ul>
	<li>To switch the MAtricks off, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt;​ Off MAtricks</div>

<p>&nbsp;</p>

<ul>
	<li>To toggle MAtricks active, press <span class="hardkey">Set</span> or type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt;​ Toggle MAtricks</div>

<p>&nbsp;</p>

<ul>
	<li>To reset the MAtricks, type:</li>
</ul>

<div class="cl_input">User name[Fixture]&gt;​ Reset MAtricks</div>

<p>&nbsp;</p>


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
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="16">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="11340790-318a-4537-913f-a9add0aae662">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_master/en/1.4'; " title="Go to previous page 'Master'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/keyword_MatricksPool/en/1.4';" title="Go to next page 'MAtricksPool'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/66743/37';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	