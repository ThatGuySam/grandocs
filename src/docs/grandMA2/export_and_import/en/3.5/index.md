---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/export_and_import/en/3.5'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="6">3.3</option>
<option value="14">3.4</option>
<option selected="selected" value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2a78519e-98cd-46cc-8975-e062cba548c2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/ost_system_monitor/en/3.5'; " title="Go to previous page 'System monitor'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/ei_export_commandline/en/3.5';" title="Go to next page 'Export by using command line'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/2a78519e-98cd-46cc-8975-e062cba548c2">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/41534/18'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.5</span>
			</div>
		<h1>Export and Import</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">General Export and Import function</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Export and import objects</a>
						</li>
				</ul>
			</div>

		<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>General Export and Import function</h2>

<p>The export and import function is a tool to copy a part of the show file, and use it in another show. This may be an effect, a cue, a preset or something&nbsp;else.</p>

<p>Using the export and import function can be done, either by the&nbsp;<strong>Command Line</strong>&nbsp;or the Graphical User Interface&nbsp;<strong>(GUI)</strong>.&nbsp;</p>

<p>The exported content stores in a .XML file. This is located in an&nbsp;importexport&nbsp;directory on the console, an USB stick in gma2/importexport and on an&nbsp;onPC solution it might be located C:\ProgramData\MA Lighting Technologies\grandMA\gma2_V_3.3\importexport.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Export and import objects</h2>

<p>Almost all objects from the showfile&nbsp;can be exported and imported. For example:</p>

<ul>
	<li>Effects</li>
	<li>Macros</li>
	<li>Masks</li>
	<li>MAtricks</li>
	<li>Gobo bitmaps</li>
	<li>User Profiles</li>
	<li>Users</li>
	<li>Nodes</li>
	<li>Views</li>
	<li>Channels​</li>
	<li>Pages</li>
	<li>Presets</li>
	<li>Sequences</li>
	<li>Cues</li>
	<li>Executors</li>
	<li>Groups</li>
	<li>Filters</li>
	<li>Cameras</li>
	<li>Forms</li>
	<li>Timecodes</li>
	<li>​Fixtures</li>
	<li>Screens</li>
</ul>

<p>To export or import&nbsp;<strong>Macros</strong>,&nbsp;<strong>Effects</strong>,&nbsp;<strong>Masks</strong>,&nbsp;<strong>MAtricks</strong>,&nbsp;<strong>Gobo&nbsp;Bitmaps</strong>,&nbsp;<strong>User&nbsp;Profiles</strong>&nbsp;and&nbsp;<strong>DMX nodes</strong>, it is easier to use the&nbsp;GUI. For more information see the <a href="/Topic/c903fad4-117a-4e2f-a804-a6e9deabb200">Export by using user interface</a>&nbsp;and <a href="/Topic/aaa03090-ce7f-4e9e-953a-11feec4b5c6f">Import by using user interface</a>&nbsp;topics.</p>

<p>To Import an image to the Image Pool, read more in the <a href="/Topic/a1a1029c-bd35-4a70-ad10-ebe10ad56bc1">Import images and video</a>&nbsp;topic.</p>

<p>&nbsp;</p>

<div class="restriction"><strong>Restriction:</strong><br>
It is not possible to export or import the show, or a part of the show to any other console format for example other manufactures consoles. To handle a ASCII file, see the <a href="/Topic/76ef99cc-ef50-4bc6-a668-abde3497e4ea">ASCII Show Read</a>&nbsp;topic.</div>

<div class="tip"><strong>Hint:</strong><br>
It is possible to open show files from a dot2 console directly on a grandMA2&nbsp;console or&nbsp;onPC.</div>

<p>&nbsp;</p>

<p>&nbsp;</p>


				<br>
<div class="topic-navigation">
	<br>
	<hr>
	<h4>Sub topics</h4>
	<ul>
				<li><a href="/Page/grandMA2/ei_export_commandline/en/3.5">Export by using command line</a></li>
				<li><a href="/Page/grandMA2/ei_export_gui/en/3.5">Export by using user interface</a></li>
				<li><a href="/Page/grandMA2/ei_import_commandline/en/3.5">Import by using command line</a></li>
				<li><a href="/Page/grandMA2/ei_import_gui/en/3.5">Import by using user interface</a></li>
				<li><a href="/Page/grandMA2/ei_import_predefined/en/3.5">Import predefined objects</a></li>
	</ul>

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="6">3.3</option>
<option value="14">3.4</option>
<option selected="selected" value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2a78519e-98cd-46cc-8975-e062cba548c2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/ost_system_monitor/en/3.5'; " title="Go to previous page 'System monitor'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/ei_export_commandline/en/3.5';" title="Go to next page 'Export by using command line'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/41534/18';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
