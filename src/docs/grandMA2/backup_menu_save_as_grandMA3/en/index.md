---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/backup_menu_save_as_grandMA3/en'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option selected="selected" value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="39c4ec10-4323-4380-8a56-077041be859d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/backup_menu_ascii_show_read/en/3.9'; " title="Go to previous page 'ASCII show read'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/single_multi_systems/en/3.9';" title="Go to next page 'Single User and Multi User Systems'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/89215/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>grandMA2 to grandMA3 Show File Converter</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Known Limitations</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Save as grandMA3</a>
						</li>
				</ul>
			</div>

		<p>A grandMA2 show file saved as a grandMA3 show file exports the following elements:</p>

<ol>
	<li>Patch (Fixture Types, Attributes, and Fixtures).</li>
	<li>DMX Profiles.</li>
	<li>DMX Universes.</li>
	<li>Multipatch Fixtures.</li>
	<li>Presets with values that include timings.</li>
	<li>Sequences, Cues, and Cue Timings.</li>
	<li>Groups, Worlds and Filters.</li>
	<li>Timecodes.</li>
	<li>Layouts.</li>
	<li>Macros.</li>
	<li>DMX-, MIDI-, and Analog Remotes.</li>
	<li>Special Masters are converted into Masters in grandMA3.</li>
	<li>Object appearances are converted into the grandMA3 appearance pool.</li>
	<li>Executors and Pages are converted.</li>
	<li>Selective effect pool objects are converted into preset pool 22 (All 2). This pool will be renamed to Effects. grandMA2 effects will be converted into acceleration and deceleration values.</li>
	<li>Barndoor attributes are converted to shaper attributes in grandMA3 for visualization.</li>
	<li>Infos in objects are converted to notes in grandMA3.</li>
</ol>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Known Limitations</h2>

<ul>
	<li>Embedded presets are not convertible, yet.</li>
	<li>Only the simple predefined forms of effects in grandMA2 are convertible, yet.</li>
	<li>Effect data in presets and presets that contain only timings without values are not convertible, yet.</li>
	<li>Only executors that have sequences or selective effects assigned are converted.</li>
	<li>Fixture types with more than 8 192 channel sets in an attribute do not convert the channel sets after the 8 192th channel set.</li>
	<li>The grandMA2 Xkeys&nbsp;<span class="hardkey">X5</span>,&nbsp;<span class="hardkey">X6</span>,&nbsp;<span class="hardkey">X15</span>, and&nbsp;<span class="hardkey">X16</span>&nbsp;are not converted.</li>
	<li>The option "Save to grandMA3" is not supported on grandMA2 onPC running in the Parallels Desktop application.</li>
	<li>Macro commands can not be converted. Macro syntax have to be verified manually by the user in grandMA3.</li>
	<li>Type and target of remotes are not converted.</li>
</ul>

<div style="page-break-after: always" class="ck_pagebreak"><span style="display:none">&nbsp;</span></div>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Save as grandMA3</h2>

<div class="important"><strong>Important:</strong><br>
The option "Save as grandMA3" works only on a grandMA2 onPC or in Mode2 on a grandMA3 console. For more information, see <a href="/Page/grandMA2/mode2_introduction/en" target="_blank">Mode2</a>.<br>
If the button <span class="softkey">Save as grandMA3 x.x.x</span> is not visible, the system requirements for this feature are not fulfilled. For more information, see <a href="/Topic/37438d21-afe5-467a-af96-ca23a3926bf9">system requirements</a>.</div>

<p><strong>Requirements:</strong> A created grandMA2 show file.</p>

<p>To save the currently open grandMA2 show file as a grandMA3 show file, follow the steps below:</p>

<ol>
	<li>Open the Backup menu, tap <span class="softkey">Backup</span> or press <span class="hardkey">Backup</span>. The <strong>Backup menu</strong> opens.

	<figure class="caption"><img alt="" src="/Media/Image/window_save_as_grandma3.png">
	<figcaption>Backup</figcaption>
	</figure>
	</li>
	<li>Tap <span class="softkey">Save as grandMA3 x.x.x</span> (x.x.x is a place holder for the installed grandMA3 version number). A pop-up opens.
	<figure class="caption"><img alt="" src="/Media/Image/popup_showconverter_3_9.png">
	<figcaption>Pop-up</figcaption>
	</figure>
	</li>
</ol>

<ol start="3">
	<li>Tap <span class="softkey">Ok</span> to confirm the pop-up.</li>
</ol>

<p>The current grandMA2 show file is saved in&nbsp;<strong>C:\ProgramData\MALightingTechnology\gma3_x.x.x\shared\shows</strong>.</p>

<p>When saving on an USB stick, the grandMA2 show file is saved in <strong>D:\grandMA3\shared\shows</strong>.</p>

<p>Now, this show file can be opened in the grandMA3 software.</p>

<p>&nbsp;</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="6">3.3</option>
<option value="14">3.4</option>
<option value="18">3.5</option>
<option value="21">3.6</option>
<option value="23">3.7</option>
<option value="27">3.8</option>
<option selected="selected" value="31">3.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="11">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="39c4ec10-4323-4380-8a56-077041be859d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/backup_menu_ascii_show_read/en/3.9'; " title="Go to previous page 'ASCII show read'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/single_multi_systems/en/3.9';" title="Go to next page 'Single User and Multi User Systems'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/89215/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
