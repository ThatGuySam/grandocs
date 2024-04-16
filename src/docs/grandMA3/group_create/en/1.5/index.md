---
originalUrl: 'https://help2.malighting.com/Page/grandMA3/group_create/en/1.5'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="e6fcb09d-67ee-4f9c-b81d-8d331ef9390a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/group/en/1.5'; " title="Go to previous page 'Groups'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/group_edit/en/1.5';" title="Go to next page 'Edit groups'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/44/e6fcb09d-67ee-4f9c-b81d-8d331ef9390a">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/67601/38'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.5</span>
			</div>
		<h1>Create Groups</h1>


		<p>Groups are created by storing the group while having a selection of fixtures. Groups are stored in the <a href="/Topic/090be493-172a-4bcf-8d6d-7e4fae2e9260">Group Pool</a>.</p>

<p>The groups store the selection of fixtures, the grid information, and the fixtures' selection order (this is also a grid).</p>

<p>Grid information is a 3D position information that can indicate the position relationship between the fixtures. It is not the location on the 3D stage. For more information, see&nbsp;<a href="/Topic/b653b2ef-87ff-4c84-96fd-f186a9dd3bee">Selection Grid topic</a>.</p>

<p>The order and grid information is important for ranged value input or when creating <a href="/Topic/b1a2f8ac-0809-4528-95de-16ba0b209092">Phasers</a>.</p>

<div class="important"><strong>Important:</strong><br>
Groups do not store values! - Only the fixture selection, order, and grid.</div>

<p>These are the steps needed to create a new group:</p>

<ol>
	<li>Please make sure the correct fixtures are selected and they are in the correct order.</li>
	<li>Store the group using a syntax like this: <span class="syntax">Store Group [my_group_number]</span>. The two needed keywords are <a href="/Topic/64b90b15-0122-49d2-b9e4-598c747cfe42">Store</a> and <a href="/Topic/f1029257-a17a-4325-a04a-90d2fb7a363a">Group</a>.</li>
</ol>

<p>When storing to an existing group the store mode pop-up opens:</p>

<p><img alt="" src="/Media/Image/window_store_mode-pop-up.png"></p>

<p>When <span class="softkey">Grid Merge Mode</span> is set to <strong>Append X</strong> (this is the default setting), the selected fixtures will be added to the next available X coordinate.</p>

<p>Read the <a href="/Topic/b653b2ef-87ff-4c84-96fd-f186a9dd3bee">Selection Grid topic</a> for information about positioning the fixtures in a grid before storing the group.</p>

<p>Existing groups can be edited using the <a href="/Topic/ed56b577-e912-47d0-9f7b-02cedb7bfbb1">Edit Group pop-up</a>.</p>

<p>It is not required, but it is a good idea to label the group. It can be done using any of the methods described in <a href="/Topic/a5bcdc4b-a227-4fa4-8f3f-205212f095af">Label pool objects</a>, or the Edit Group pop-up.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="e6fcb09d-67ee-4f9c-b81d-8d331ef9390a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/group/en/1.5'; " title="Go to previous page 'Groups'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA3/group_edit/en/1.5';" title="Go to next page 'Edit groups'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/67601/38';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
