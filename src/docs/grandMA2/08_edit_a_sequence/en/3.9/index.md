---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/08_edit_a_sequence/en/3.9'
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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="20">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ec08932c-0ebf-462b-932c-23d96a7dbde7">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/07_create_more_cues/en/3.9'; " title="Go to previous page '07 Create More Cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/09_add_moving_lights/en/3.9';" title="Go to next page '09 Add Moving Lights'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/55165/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Editing a sequence</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Make a "Follow"</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Changing the cue names</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Updating a cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Editing the times</a>
						</li>
				</ul>
			</div>

		<p>Now we are going to make some changes to the sequence.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Make a "Follow"</h2>

<p>We would like to change cue 3 to automatically run when cue 2 is done.</p>

<p>Look at the Sequence Executor Sheet. Each cue have its own row in the sheet. The columns are the different properties a cue can have. It is not the <strong>content</strong> in the cue, but the <strong>cue</strong> properties.</p>

<p>The trig column is the one that governs how the cues are triggered. We need to change the setting for cue number 3.&nbsp;You do this by right-clicking with the mouse (or pressing Edit and then tap) on the screen where it says "Go" in the "Trig" column in the row for cue 3.</p>

<p>This gives you a small pop-up with the following choices: Go, Time, Follow, Sound, BPM, Timecode. Select <span class="softkey">Follow</span> by clicking or tapping it.</p>

<p>Now when cue 2 is done, the desk automatically activates the fade to cue 3.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Changing the cue names</h2>

<p>Let us change the cue names. You know how to do this, so here is a table with the new names:</p>

<table>
	<tbody>
		<tr>
			<th>Cue Number:</th>
			<th>Name:</th>
		</tr>
		<tr>
			<td>1</td>
			<td>Behind Curtain</td>
		</tr>
		<tr>
			<td>2</td>
			<td>With Curtain Up</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Build</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Darker</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Cold</td>
		</tr>
		<tr>
			<td>6</td>
			<td>B.O.</td>
		</tr>
	</tbody>
</table>

<p>If you need to, then expand the "name" column in your&nbsp;Sequence Executor Sheet, so you can see the entire names.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Updating a cue</h2>

<p>Let us imagine that we got a lighting designer who has changed his mind. He wants 5% more on the group called "LX 1 Warm" in cue 3. Go to cue 3:&nbsp;<span class="hardkey">Goto</span>&nbsp;<span class="hardkey">3</span>&nbsp;<span class="hardkey">Time</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Please</span>.</p>

<p>What happened? We went to a cue and activated the executor. And now there is a yellow frame around cue 3 in the Sequence Executor Sheet. To go to cue 3 you only need to write "Goto 3 Please". We added "Time 0". This ignores the fade times stored in the cue and we do not have to wait for the cue to fade in. It does not change the stored fade time.</p>

<p>Let us continue:&nbsp;<span class="hardkey">Group</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">+</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">Please</span>.</p>

<p>Now the 'Update' button lights up. This means you can update the active cue. Press&nbsp;<span class="hardkey">Update</span>&nbsp;and without worrying about anything press the <span class="hardkey">U3</span> key (or where it says: <span class="softkey">Tracking Update</span>) so the button changes to "Update Cue Only". Now press the&nbsp;<span class="hardkey">X6</span>&nbsp;key (or where it says <span class="softkey">Update Cue</span>) to update the cue.</p>

<p>To exit the cue and deactivate the sequence you need to press the top button above executor fader 1 - in the onPC you could open the Executor view and tap where it says "Off" above executor 1.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Editing the times</h2>

<p>Let us change some of the times in the cue list. This is how your times should end up:</p>

<table>
	<tbody>
		<tr>
			<th>Fade</th>
			<th>Out Fade</th>
			<th>Delay</th>
			<th>Out Delay</th>
		</tr>
		<tr>
			<td>0</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>15</td>
			<td>&nbsp;</td>
			<td>3</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>20</td>
			<td>25</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>10</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>15</td>
			<td>10</td>
			<td>&nbsp;</td>
			<td>5</td>
		</tr>
		<tr>
			<td>0</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
	</tbody>
</table>

<p>Look at the&nbsp;Sequence Executor&nbsp;Sheet. Right click on the cells and type in the new value either on "the calculator" pop-up on the screen, the buttons on your console, or using the keyboard. If a cell is empty then it can be a zero time or in the case of the "OutFade" it is actually the same as the (In)fade. If the in and out fade is the same then you do not need to specify an outfade - only when there is a difference. It is the same with&nbsp;in and out delay.</p>

<p>The final result should look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/qsg_08_edit-a-sequence_final-seq-exec-sheet_v3-3_1.png">
<figcaption><em>The Sequence Executor Sheet with new timings</em></figcaption>
</figure>

<p>Try pressing the big 'Go+' key to see how your channels react to the different times. You find this in the "Masters" section on the right side of your onPC.</p>

<p>Press:&nbsp;<span class="hardkey">Backup</span>&nbsp;<span class="hardkey">Backup</span>&nbsp;(as double-clicking a mouse button). This is the fast way to store your show (with the same name).</p>

<p>&nbsp;</p>

<p>On the <a href="/Topic/cef1b2ff-0f83-4084-a7d7-6bbbd04ab276">next page</a> we are going to look at adding some moving lights.</p>


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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="20">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ec08932c-0ebf-462b-932c-23d96a7dbde7">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/07_create_more_cues/en/3.9'; " title="Go to previous page '07 Create More Cues'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/09_add_moving_lights/en/3.9';" title="Go to next page '09 Add Moving Lights'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/55165/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
