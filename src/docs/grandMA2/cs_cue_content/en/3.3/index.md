---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/cs_cue_content/en/3.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f99a92c3-f4b6-402d-a6f0-12131362ec7e">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/cs_playback/en/3.3'; " title="Go to previous page 'Playing back cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/cs_update_cues/en/3.3';" title="Go to next page 'Update cues'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/31/f99a92c3-f4b6-402d-a6f0-12131362ec7e">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/29949/6'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.3</span>
			</div>
		<h1>Looking at the cue content</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Sequence Content Sheet</a>
								<ul>
										<li><a href="#toc_header_anchor_2">Edit Cue Only</a></li>
										<li><a href="#toc_header_anchor_3">Cue Mode</a></li>
										<li><a href="#toc_header_anchor_4">Tracking</a></li>
										<li><a href="#toc_header_anchor_5">Link Mode</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Sequence Tracking Sheet</a>
								<ul>
										<li><a href="#toc_header_anchor_7">Selection Only</a></li>
										<li><a href="#toc_header_anchor_8">&nbsp;</a></li>
										<li><a href="#toc_header_anchor_9">Editing values in the Tracking Sheet</a></li>
								</ul>
						</li>
				</ul>
			</div>

		<p>There are two sheets that can be used to look at the content stored in cues - the stored values can also be edited using the sheet.</p>

<p>They are the Sequence Content Sheet and the Sequence Tracking Sheet. Both are windows that can be created and stored as views using the Create Basic Window pop-up.&nbsp;</p>

<p>Both sheets can be configured using the <a href="/Topic/5286cd3a-ef4e-458d-a622-98004deb304b">Sheet Options</a> - access by tapping the yellow ball in the upper left corner.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2><a id="content_sheet" name="content_sheet"></a>Sequence Content Sheet</h2>

<p>The Sequence Content Sheets is used to see the fixtures and values stored in cues. It looks a lot like the <a href="/Topic/b8cdf17f-2033-4fc0-a890-5640903a26c1">Fixture Sheet</a>, but it has a masking function that only displays what is stored in a cue. It is like a combined Sequence Tracking (read below) and Fixture Sheet.</p>

<p>It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/window_sequence-content-sheet_v3-3.png">
<figcaption><em>Sequence Content Sheet</em></figcaption>
</figure>

<p>The Title Bar show the number of the executor and the name and number of the sequence the sheet is displaying the content from. If a world other than the default Full world is selected, then this is also displayed in the title bar (Small World icon with a number underneath). The Title Bar will also display any masks assigned (small Ghost icon).</p>

<figure class="caption"><img alt="" src="/Media/Image/window_sequence-content-sheet_title-bar_v3-3.png">
<figcaption><em>Sequence Content Sheet - Title Bar example</em></figcaption>
</figure>

<p>There can be many <a href="/Topic/9867fb69-c562-4935-8b69-427bc60bd549">Title Buttons</a> in the Title Bar. These can be shown or hidden using the <a href="/Topic/5286cd3a-ef4e-458d-a622-98004deb304b">Sheet Options</a> - they are access by tapping the yellow ball in the upper left corner.</p>

<p>Some of these buttons and their functions are specific for the Content Sheet. Some are shared with the Sequence Tracking Sheet (reed below). This is short description of their function.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3>Edit Cue Only</h3>

<p>This function is shared with the Tracking Sheet. Turning it On will make any changes you make to values as cue only changes - otherwise it will be made as tracking changes. If you are in doubt about what this means then please read the <a href="/Topic/88bb0237-4b6e-4e99-b73d-8892c0915436">What is Tracking topic</a>.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3><a id="cue_mode" name="cue_mode"></a>Cue Mode</h3>

<p>The Cue Mode swipe button is unique for the Content Sheet. It changes what cue in the sequence is displayed.</p>

<p>It has four different options:</p>

<ul>
	<li><strong>Current Cue:</strong><br>
	This will make the sheet display the information related to the current active cue.</li>
	<li><strong>Previous Cue:</strong><br>
	This will display the values from the previous cue. This is the last cue that was active even if you jump in the cue sequence.</li>
	<li><strong>Next Cue:</strong><br>
	This displays the values for the next cue if you perform a Go to the sequence. If a cue is "Loaded" then this cue will be displayed.</li>
	<li><strong>Manual:</strong><br>
	This will add a vertical scroll bar on the right side of the sheet. This scroll bar can be used to scroll through the cues in the sequence and manually select the cue you want to see.</li>
</ul>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>Tracking</h3>

<p>This toggle button is also a setting in the Sheet Options in the <a href="/Topic/ce87e679-7e26-413a-b518-648ea7f69799">Layer Mask tab</a>.</p>

<p>This function will hide or show tracked values. If it is On then the tracked values will be shown. If a fixture only has tracked values, then it will also be shown in the sheet.</p>

<p>If this is Off then all tracked values will be hidden. If a fixture only has tracked values then the fixture will also be hidden in the sheet. Hiding the tracked values will make the sheet display only the data that is actually stored in the cue.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Link Mode</h3>

<p>The Link Mode swipe button is shared with the Tracking and Executor Sheets. It is used to select what sequence is displayed in the sheets. It has three options:</p>

<ul>
	<li><strong>Link Selected:</strong><br>
	This means that the sheet displays the sequence assigned to the selected executor.</li>
	<li><strong>Not Linked:</strong><br>
	This will stop automatic linking and display the sequence assigned to the executor selected in the <a href="/Topic/6cf5c471-3e18-4aa9-bb70-e1463d50f6b5">Assign Executor tab</a> in the sheet options.</li>
	<li><strong>Link Last Go:</strong><br>
	This will display the sequence assigned to the executor where you last performed a Go.</li>
</ul>

<p>It is also in the sheets options. In the <a href="/Topic/ce87e679-7e26-413a-b518-648ea7f69799">Layer Mask tab</a> - here it is described in a little more details.</p>

<p>&nbsp;</p>

<p>Values can be edited directly in the sheet. This will immediately change the values stored in the cues without using the programmer.</p>

<hr>
<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2><a id="tracking_sheet" name="tracking_sheet"></a>Sequence Tracking Sheet</h2>

<p>The Sequence Tracking Sheet is used to display all your fixtures and attributes stored in a sequence. It shows a spreadsheet type window where all the cues are rows and all the attributes stored are columns. In the intersection between the rows and column are the stored values displayed. This window allows for a nice overview and a visual flow of attributes through the cues.</p>

<p>An active cue will be displayed using a yellow frame around the row. If a cue is being previewed or edited then this cue will have a red frame.</p>

<p>It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/window_sequence-tracking-sheet_v3-3.png">
<figcaption><em>Sequence Tracking Sheet</em></figcaption>
</figure>

<p>The Title bar of the Tracking Sheet functions exactly as the Title Bar of the Content Sheet. There is one Title Button that is unique to the Tracking Sheet.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Selection Only</h3>

<p>This toggle button is a masking button that will hide non-selected fixtures in the sheet - but it also hides cues where the selected fixture only have tracked values. The result is that you only see the selected fixtures and where they have active stored values.</p>

<p>This function is also accessible in the <a href="/Topic/ce87e679-7e26-413a-b518-648ea7f69799">Layer Mask tab</a> in the Sheet Options. Remember that the Sheet Options can be access by tapping the yellow ball in the upper left corner.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h3>&nbsp;</h3>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h3>Editing values in the Tracking Sheet</h3>

<p>The cue numbers can be renumbered by editing the number. Read more about this function the <a href="/Topic/4b30f6a3-1cea-433f-9a8d-272ead4150c6">Looking at the cue sequence topic</a>.</p>

<p>The names can also be edited in this sheet.</p>

<p>The stored attribute values can also be edited. Doing so will immediately change the values in the cues, bypassing the use of the programmer.</p>

<p>If you edit any value in the sheet, then a Tracking Options pop-up appears. It can do a lot more than just edit the selected values. It looks like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_tracking-options_v3-3.png">
<figcaption><em>Tracking options pop-up</em></figcaption>
</figure>

<p>There are three parts of this pop-up.</p>

<p>The first is the "Destination". This drop down has three options:</p>

<ul>
	<li><strong>Attribute:</strong><br>
	Apply the changes to the selected attributes only (for example only tilt).</li>
	<li><strong>Encoder Grouping:</strong><br>
	Apply the changes to every attribute with the same encoder grouping (for example both pan and tilt).</li>
	<li><strong>Feature:</strong><br>
	Apply the changes to the entire feature (for example the entire shaper module).</li>
</ul>

<p>&nbsp;</p>

<p>The next part is the "Action" part. There are several buttons here:</p>

<ul>
	<li><strong>Remove individual Fade:</strong><br>
	Delete the individual fade times and set it back to the overall cue timing.</li>
	<li><strong>Remove individual Delay:</strong><br>
	Delete the individual delay times and assign the overall cue delay time.</li>
	<li><strong>Remove individual Effect values:</strong><br>
	Delete any individual effect values and assign the values from the effect.</li>
	<li><strong>Remove Effect:</strong><br>
	Remove any effects.</li>
	<li><strong>Extract Preset:</strong><br>
	Remove the reference to a preset, but keep the values essentially coping the values stored in the preset into the cue.</li>
	<li><strong>Block:</strong><br>
	Block the "Source" with regards to the "Destination". Tracked values (default colored magenta) are converted into stored values (default colored white).</li>
	<li><strong>Unblock:</strong><br>
	Unblock the "Source" with regards to the "Destination". Blocked values (default colored white) are converted into tracked values (default colored magenta).</li>
	<li><strong>Delete:</strong><br>
	Delete the "Source" with regards to tracking and the "Destination".</li>
	<li><strong>Delete Cue Only:</strong><br>
	Delete the value using cue only (and keep the original values in the following cue).</li>
</ul>

<p>The left action column can all be selected at the same time, but the right column is mutually exclusive allowing only one action being selected.</p>

<p>&nbsp;</p>

<p>The last part is the "Source". It is only selectable when an action is chosen. There are several buttons:</p>

<ul>
	<li><strong>Selection: </strong><br>
	Make the change in the selected cells (with regards to the "Destination"). Cells can be selected as individual, but it is also possible to lasso both vertical and horizontal in the sheet. It is even possible to selected multiple single cells by keeping the <span class="hardkey">Ctrl</span> key on the keyboard pressed while selecting cells. You can even do multiple lassos and single cells with the <span class="hardkey">Ctrl</span> key pressed.</li>
	<li><strong>Selected Cue(s): </strong><br>
	Make the change in the entire selected cues.</li>
	<li><strong>Complete:</strong><br>
	Make the change in the entire sequence.</li>
	<li><strong>Selected Channels for All Cues:</strong><br>
	Make the change for the selected attributes (with regards to the "Destination").</li>
</ul>

<p>Tapping a source button will perform the action and close the pop-up.</p>

<p>&nbsp;</p>

<p>Beside the three parts there is also a button called "Edit". This opens the calculator. Using this allows to change the selected values or assign any relevant presets (with respect to the destination setting). Valid presets are shown in the calculator pop-up. If you want to edit a value as Cue Only, then you need to remember to activate the Cue Only function before editing the value. This is easiest with the <span class="softkey">Cue Only</span> button visible in the Title Bar.</p>

<p>With a combination of the different parts and the <span class="softkey">Edit</span> button you can make almost any desired changes in the Tracking Sheet.</p>

<p>The pop-up can be closed by tapping the yellow X in the upper right corner of the pop-up. This will cancel any actions.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f99a92c3-f4b6-402d-a6f0-12131362ec7e">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/cs_playback/en/3.3'; " title="Go to previous page 'Playing back cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/cs_update_cues/en/3.3';" title="Go to next page 'Update cues'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/29949/6';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
