---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/Error_Messages/en/1.1'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d943a6aa-e44c-412a-abd5-cee3d1b625be">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_crashloglist/en/1.1'; " title="Go to previous page 'CrashLogList'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Glossary/en/1.1';" title="Go to next page 'Glossary'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/d943a6aa-e44c-412a-abd5-cee3d1b625be">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/5748/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Error Messages</h1>


		<p>If the following error messages does not help to solve the problem, please call or write an e-mail to the dot2 support.</p>

<p>E-Mail: <a href="mailto:support@ma-dot2.com">support@ma-dot2.com</a><br>
Phone: +49 5251 688 865 27<br>
Emergency Phone: +49 5251 688 865 99 (If you are in the middle of a production with problems)</p>

<table border="1" cellpadding="5" cellspacing="5" style="width:500px">
	<thead>
		<tr>
			<th scope="col">Error</th>
			<th scope="col">Reason</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td># 0 Unknown error</td>
			<td>The console have an unknown error.</td>
		</tr>
		<tr>
			<td># 1 Unknown command</td>
			<td>The entered command is unknown.</td>
		</tr>
		<tr>
			<td># 2 Input too long</td>
			<td>The entered command is too long.</td>
		</tr>
		<tr>
			<td># 3 Illegal character</td>
			<td>The entered command is illegal.</td>
		</tr>
		<tr>
			<td># 4 Command not implemented</td>
			<td>The entered command is not supported from the console.</td>
		</tr>
		<tr>
			<td># 5 Number expected</td>
			<td>The console expects a number.</td>
		</tr>
		<tr>
			<td># 6 IP expected</td>
			<td>The console expects an IP address.</td>
		</tr>
		<tr>
			<td># 7 Number too long</td>
			<td>The entered number is too long.</td>
		</tr>
		<tr>
			<td># 8 Number to small</td>
			<td>The number for the entered command is too small (min = 1).</td>
		</tr>
		<tr>
			<td># 9 Number to big</td>
			<td>The number for the entered command is too big (max = 1).</td>
		</tr>
		<tr>
			<td># 10 Expected</td>
			<td>The console expects more input.</td>
		</tr>
		<tr>
			<td># 11 Expected argument</td>
			<td>The entered command is missing an argument.</td>
		</tr>
		<tr>
			<td># 12 Expected name</td>
			<td>The console expected a name, e.g. a canceled <a href="/Topic/42b43b45-2789-41c3-a999-b917b967a32c">label command</a>.</td>
		</tr>
		<tr>
			<td># 13 Illegal name</td>
			<td>The entered object name is not allowed. Use only English characters.</td>
		</tr>
		<tr>
			<td># 14 Object does not exist</td>
			<td>The object you tried to work with does not exist, e.g. assign a function to an executor with no cues stored.</td>
		</tr>
		<tr>
			<td># 15 Object not accessible</td>
			<td>The entered object is not accessible.</td>
		</tr>
		<tr>
			<td># 16 Resize forbidden</td>
			<td>The entered command to resize is forbidden.</td>
		</tr>
		<tr>
			<td># 17 Delete forbidden</td>
			<td>The entered command to delete this object is forbidden.</td>
		</tr>
		<tr>
			<td># 18 Create forbidden</td>
			<td>The entered command to create this object is forbidden.</td>
		</tr>
		<tr>
			<td># 19 Illegal range</td>
			<td>The entered value is outside of the range.</td>
		</tr>
		<tr>
			<td># 20 Multiuser access conflict</td>
			<td>Another user is currently trying the same action.</td>
		</tr>
		<tr>
			<td># 21 Can not leave current destination</td>
			<td>You can not leave the current destination. It could be a multiuser conflict.</td>
		</tr>
		<tr>
			<td># 22 Can not enter destination</td>
			<td>Another user is currently accessing the destination.</td>
		</tr>
		<tr>
			<td># 23 File not found</td>
			<td>You are trying to import a non-existing file.</td>
		</tr>
		<tr>
			<td># 24 File format invalid</td>
			<td>The format of the file is not correct for the destination.</td>
		</tr>
		<tr>
			<td># 25 No unique sequence given</td>
			<td>You are trying to access a cue of multiple sequences.</td>
		</tr>
		<tr>
			<td># 26 No unique page given</td>
			<td>The entered command needs a unique page number.</td>
		</tr>
		<tr>
			<td># 27 Syntax error</td>
			<td>The entered syntax is wrong.</td>
		</tr>
		<tr>
			<td># 28 No cue source given</td>
			<td>A cue number is missing for the source.</td>
		</tr>
		<tr>
			<td># 29 Illegal cue number</td>
			<td>The entered cue number is not valid.</td>
		</tr>
		<tr>
			<td># 30 No default executor</td>
			<td>You have tried to access a default executor, but have not selected one.</td>
		</tr>
		<tr>
			<td># 31 Limit exceeded</td>
			<td>You are trying to exceed the limit.</td>
		</tr>
		<tr>
			<td># 32 Unknown option</td>
			<td>The selected option does not exist.</td>
		</tr>
		<tr>
			<td># 33 Destination not empty, no copy mode given</td>
			<td>You are trying to copy something to an occupied destination, and you haven't specified how the console should react.</td>
		</tr>
		<tr>
			<td># 34 No cue for part given</td>
			<td>A cue number is missing and required.</td>
		</tr>
		<tr>
			<td># 35 Edit single object only</td>
			<td>You have tried to edit multiple objects, and you can only edit one.</td>
		</tr>
		<tr>
			<td># 36 Too many numbers</td>
			<td>There are to many numbers in the command.</td>
		</tr>
		<tr>
			<td># 37 Copy N to M elements not supported</td>
			<td>You are trying to copy a larger number of objects to a smaller number of objects.</td>
		</tr>
		<tr>
			<td># 38 Move N to M elements not supported</td>
			<td>You are trying to move a larger number of objects to a smaller number of objects.</td>
		</tr>
		<tr>
			<td># 39 Move 1 to M elements not supported</td>
			<td>You are trying to move one object to several destinations.</td>
		</tr>
		<tr>
			<td># 40 Missing Hardware</td>
			<td>You are trying to access hardware that aren't there.</td>
		</tr>
		<tr>
			<td># 41 Illegal layer</td>
			<td>The layer you are trying to access is illegal.</td>
		</tr>
		<tr>
			<td># 42 Illegal filename</td>
			<td>The entered filename is not valid.</td>
		</tr>
		<tr>
			<td># 43 Login needed</td>
			<td>A login is required.</td>
		</tr>
		<tr>
			<td># 44 Insufficient user rights</td>
			<td>You don't have the sufficient user rights.</td>
		</tr>
		<tr>
			<td># 45 Not a valid clone source</td>
			<td>The source for your clone action isn't valid. There might be a mismatch between the source and destination fixture.</td>
		</tr>
		<tr>
			<td># 46 Not a valid clone destination</td>
			<td>The destination for your clone action isn't valid. There might be a mismatch between the source and destination fixture.</td>
		</tr>
		<tr>
			<td># 47&nbsp; Clone source fixture list expected</td>
			<td>The console expects a source fixture list.</td>
		</tr>
		<tr>
			<td># 48 Clone destination fixture list expected</td>
			<td>The console expects a destination fixture list.</td>
		</tr>
		<tr>
			<td># 49 Expected object to be cloned</td>
			<td>The console expects more fixtures.</td>
		</tr>
		<tr>
			<td># 50 Invalid version</td>
			<td>This function is not supported by this version.</td>
		</tr>
		<tr>
			<td># 51 Illegal time format</td>
			<td>The entered time format is not valid.</td>
		</tr>
		<tr>
			<td># 52 Operation aborted by user</td>
			<td>You canceled the operation.</td>
		</tr>
		<tr>
			<td># 53 PSR not available</td>
			<td>You can't Partial Show Read the shows you've selected.</td>
		</tr>
		<tr>
			<td># 54 Variable not found</td>
			<td>The entered variable is empty or does not exist.</td>
		</tr>
		<tr>
			<td># 56 Preview is only for cues</td>
			<td>The entered object does not support a preview.</td>
		</tr>
		<tr>
			<td># 57 Object does not support info command</td>
			<td>The entered object has not an information.</td>
		</tr>
		<tr>
			<td># 58 Object is locked</td>
			<td>You tried to access a locked object.</td>
		</tr>
		<tr>
			<td># 59 Illegal destination</td>
			<td>The object can not be moved to the destination.</td>
		</tr>
		<tr>
			<td># 60 Edit not possible</td>
			<td>You can not edit the object.</td>
		</tr>
		<tr>
			<td># 61 Move not possible</td>
			<td>You can not move the object.</td>
		</tr>
		<tr>
			<td># 62 Copy not possible</td>
			<td>You can not copy the object.</td>
		</tr>
		<tr>
			<td># 64 Command not supported</td>
			<td>The entered command is not valid.</td>
		</tr>
		<tr>
			<td># 65 Insert forbidden</td>
			<td>You can not insert the object.</td>
		</tr>
		<tr>
			<td># 66 Can not assign</td>
			<td>You can not assign the object.</td>
		</tr>
		<tr>
			<td># 67 Value too small</td>
			<td>The entered value is too small.</td>
		</tr>
		<tr>
			<td># 68 Value too big</td>
			<td>The entered value is too big</td>
		</tr>
		<tr>
			<td># 69 No cut or copy buffer for paste</td>
			<td>You can not paste because nothing is in the clipboard.</td>
		</tr>
		<tr>
			<td># 70 Cut buffer is empty</td>
			<td>You can not paste because nothing is in the clipboard.</td>
		</tr>
		<tr>
			<td># 71 Paste not possible</td>
			<td>You can not paste because nothing is in the clipboard.</td>
		</tr>
		<tr>
			<td># 72 Command not executed</td>
			<td>The command you tried to execute can not be executed, e.g. execute an executor with no cues.</td>
		</tr>
		<tr>
			<td># 73 Illegal timer</td>
			<td>The selected timer is not valid.</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option selected="selected" value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d943a6aa-e44c-412a-abd5-cee3d1b625be">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_crashloglist/en/1.1'; " title="Go to previous page 'CrashLogList'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Glossary/en/1.1';" title="Go to next page 'Glossary'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/5748/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
