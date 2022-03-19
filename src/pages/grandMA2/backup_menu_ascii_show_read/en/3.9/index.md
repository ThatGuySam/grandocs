
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="76ef99cc-ef50-4bc6-a668-abde3497e4ea">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/backup_menu_partial_show_read/en/3.9'; " title="Go to previous page 'Partial show read'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/backup_menu_save_as_grandMA3/en/3.9';" title="Go to next page 'Save as grandMA3'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/54810/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>ASCII Show Read</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">The Overview</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Attribute</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Adjusting the settings</a>
								<ul>
										<li><a href="#toc_header_anchor_4">Page Width setting</a></li>
										<li><a href="#toc_header_anchor_5">Universe size setting</a></li>
										<li><a href="#toc_header_anchor_6">Patch setting</a></li>
										<li><a href="#toc_header_anchor_7">Link setting</a></li>
										<li><a href="#toc_header_anchor_8">Effects priority setting</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Importing the Setup and Data</a>
						</li>
						<li>
							<a href="#toc_header_anchor_10">Log files</a>
						</li>
				</ul>
			</div>

		<p>The grandMA2 can currently import shows from <strong>Strand</strong>, <strong>Transtechnik</strong>,<strong> </strong>and <strong>ADB </strong>consoles, that have made an ASCII export of the show.</p>

<p>The import will read the ASCII file and and create fixture profiles based on the text. It does not import fixture profiles from the library.</p>

<p>ASCII importing does not give you a perfect show. You can get the setup and the show data, but might need to make a lot of adjustments to have a show that look the same.</p>

<p>It is only possible to import an ASCII show from the USB tab in the Backup Menu.</p>

<p>When the <span class="softkey">ASCII Show Read</span> button is selected in the tab, then a ASCII file needs to be selected.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>The Overview</h2>

<p>After a file have been selected, then the ASCII Show Read pop-up is displayed. This pop-up is separated into different tabs. The first one is called <strong>Overview</strong> and could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_ascii-show-read_overview_v3-2.png">
<figcaption><em>ASCII Show Read pop-up - Overview</em></figcaption>
</figure>

<p>&nbsp;</p>

<p>In the overview the console manufacturer and console type that made the export can been seen. It is also possible see the show file name from the ASCII file.</p>

<p>In the Overview tab it can be decided where the Default Sequence should be. And if should be created and assigned to an Executor and Executor page.</p>

<p>It can be decided if the submasters from the ASCII file are wanted and what page they are desired. It can be chosen from what group number the inhibits from the ASCII file are wanted.</p>

<p>It is also possible to choose the first sequence number from the Effects. And if they should be assigned to Executors and then the first Executor page.</p>

<p>Effects from ASCII shows are imported as sequences.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Attribute</h2>

<p>Before importing any data, you need to make sure the attributes from the ASCII file matches the attributes in the grandMA.</p>

<p>This can be matched and changed in the Attribute tab. It could look like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/popup_ascii-show-read_attribute_v3-2.png">
<figcaption><em>ASCII Show Read pop-up - Attribute</em></figcaption>
</figure>

<p>&nbsp;</p>

<p>If it is empty then you can try to press the <span class="softkey">Default</span> button.<br>
Now the attributes from the ASCII file can be matched with the grandMA2 attributes.</p>

<p>If this is not matched correctly show data will be lost.</p>

<p>Selecting one of the MA attribute allows this to be changed to any of the existing attributes in the MA.</p>

<p>Attributes that does not exist can be created in the <a href="/Topic/00f7d669-0181-4fe2-8645-30b3ed3d7d0f">Attributes and Encoder Grouping</a> window.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Adjusting the settings</h2>

<p>When the attributes matches, then you need to make sure the settings match the ASCII show file.</p>

<p>The settings are the ones in the lower right corner.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>Page Width setting</h3>

<p>The first setting is the Page Width - it does not have anything to do with the ASCII file, but it has to do with the console. If you are working on a grandMA2 light or grandMA2 ultra-light, then you might want to set the width to 15. If you are working on a grandMA2 full-size, then you could set the width to 30. Those are the two options.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Universe size setting</h3>

<p>Some older consoles are set to only have 500 DMX channels per Universe. This Universe setting allows you to change if the patch should be regarded as 500 or 512 DMX channels.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h3>Patch setting</h3>

<p>Some consoles allowed an alternative DMX address. This Patch setting allows you to import the primary patch "Patch 1" or the secondary patch "Patch 2". If you are in any doubt, then just leave this setting at "Patch 1".</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Link setting</h3>

<p>The Link setting has two options: "Go" or "Toggle". This decides whether the triggered effects gets a Go or Toggle commend in the CMD column in the Default sequence. All Effects are sequences that are executed from the CMD column.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h3>Effects priority setting</h3>

<p>The <strong>Effect Prio.</strong> setting have two options: "LTP" or "High". The imported effects will use the setting chosen here.</p>

<p>Remember that Effects are imported as sequences and depending on your settings in the Overview they are assigned to Executors.</p>

<p>It is always possible to change the priority later if needed.</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Importing the Setup and Data</h2>

<p>When the settings are correct then you can import setup and show data.</p>

<p>This can be done all at once by tapping the <span class="softkey">Complete</span> button. This will load the Setup and the Show Data. This is good if you know that it will work and there are no errors.</p>

<p>It is also possible to do it in two steps. If the <span class="softkey">Setup Only</span> button is tapped, then the fixture schedule and the patch is displayed. Then you can check that all is there and the patch is ok, simply by opening the setup.</p>

<div class="restriction"><strong>Restriction:</strong><br>
If the Setup is not correct, then the Show Data will not import correctly.</div>

<p>After you have checked the setup, then go back to the ASCII Show Read in the Backup Menu. You might be asked for the show file again. Please select the same file.</p>

<p>Now tap the <span class="softkey">Data Only</span> button, this imports the Show Data.</p>

<p>&nbsp;</p>

<p>Using the <span class="softkey">Setup Only</span> and <span class="softkey">Data Only</span> buttons also allows you to import the separate parts. For instance if you only need the setup and patch from a show or if you already have everything patched and just need the show data. The Data Only import is looking for the ID numbers when it imports. So if a fixture exists and is correctly patched then the data will import.</p>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h2>Log files</h2>

<p>Importing from the show file will create different log files. These files can be seen in the three remaining tabs. The log files also exists in the "temp" folder in the consoles structure. To get to them a FTP connection is needed. Read about it in the <a href="/Topic/4abae9d4-b0f3-4a83-a53e-5c4f8cc0e26c">FTP Connection to Console and NPU topic</a>.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="76ef99cc-ef50-4bc6-a668-abde3497e4ea">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/backup_menu_partial_show_read/en/3.9'; " title="Go to previous page 'Partial show read'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/backup_menu_save_as_grandMA3/en/3.9';" title="Go to next page 'Save as grandMA3'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/54810/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	