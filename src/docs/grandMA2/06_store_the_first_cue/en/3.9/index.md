---
originalUrl: 'https://help2.malighting.com/Page/grandMA2/06_store_the_first_cue/en/3.9'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d69b28f2-c3d6-4550-b0cd-e06bd0668955">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/05_groups/en/3.9'; " title="Go to previous page '05 Working with Groups'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/07_create_more_cues/en/3.9';" title="Go to next page '07 Create More Cues'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/55163/31'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 3.9</span>
			</div>
		<h1>Storing the first cue</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">First a little theory and setup</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Creating the cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">&nbsp;</a>
						</li>
				</ul>
			</div>

		<p>It is time to make the first cue.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>First a little theory and setup</h2>

<p>A light cue is saved in a sequence. The grandMA can handle an almost unlimited number of sequences.</p>

<p>We only need a few for this tutorial. All cue numbers have to be in numeric order. This means that cue number 4 cannot be before cue number 3. The cue can have any name.</p>

<p>First of all, you need a window where you can see the sequence. Click on the top-left cell on one of your empty screens. If you only have one screen you need to clear it first (by deleting the windows already there) and then press the top-left cell.&nbsp;</p>

<p>The window you need is called&nbsp;the Sequence Executor Sheet. In the <strong>"Create Basic Window"</strong> pop-up, select the <span class="softkey">Sheets</span> tab and tap the button called <span class="softkey">Sequence Executor</span>. It is very empty right now, but there will appear content as you create the cues</p>

<p>You should save this as a new view and give it a name - not just "View 2".</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Creating the cue</h2>

<p>The first thing you need to do is to select the first executor. Press the following keys:&nbsp;<span class="hardkey">Select</span>&nbsp;<span class="hardkey">Exec</span>&nbsp;<span class="hardkey">1</span> <span class="hardkey">Please</span>. The executor is currently empty, but when you store the cue then it will appear.</p>

<p>Let us make the first cue. Press:&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">4</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Please</span>. Then&nbsp;<span class="hardkey">Store</span>&nbsp;<span class="hardkey">Please</span>. That was it! You have now saved channel 20 at 40% in cue 1 in sequence 1 at executor 1.</p>

<p>If you do not specify anything else, the console assumes you are referring to your selected executor and the sequence assigned to that executor. You can always locate your selected executor by its green background color where it displays the sequence name (now it says "Sequ").</p>

<p>You also got a line in your&nbsp;Sequence Executor&nbsp;window. Most of the columns are self-explanatory - but we should look at some of them.</p>

<p>"Number" is, of course, the cue numbers.</p>

<p>"Name" is the cue name.</p>

<p>"Trig" describes what triggers the cue. If you look at the first cue, the trigger is "Go". This means that to execute the cue, you need to press a Go key.</p>

<p>"Delay", "Fade", "Out Delay" and "Out Fade" shows you the respective times.</p>

<p>Before we make more cues, we should change the cue name. If you do not specify anything the desk names it "Cue" followed by the cue number. Press&nbsp;<span class="hardkey">Assign</span>&nbsp;<span class="hardkey">Assign</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Please</span>. Use the keyboard to write&nbsp;<span class="syntax">Behind Curtain</span>&nbsp;followed by a 'Please'/enter. A different way to change the cue name is to right-click on the name with the mouse. No matter what way you choose - your first cue should now have the name "Behind Curtain". And since we have not given the sequence a name, then it also displays the name of the first cue in the title area of the executor (the one that said "Sequ" before).</p>

<p>Let us also give the sequence a name. Tap the command line and write the following:</p>

<div class="cl_input">[Channel]&gt; Label seq 1 "Main Show"</div>

<p>And finish with a 'Please'/Enter. We do not need to write "Sequence" we can just write "seq". Most of the keywords we use have a short version. The best way to learn the short version is to read about the keyword in the "Command Syntax and Keywords" section of this manual.</p>

<p>When you give something a name or you are referencing to the name of something, then you need to put it in quotation marks. That will make the software interpret it as names.</p>

<p>Back to the cues. If you cannot see the entire cue name, you can expand the column width by placing the mouse cursor on the line that divides "Name" and "Trig". When you are at the right place, your cursor changes so it now also has a little horizontal double-ended arrow. Click and hold the left mouse button while you drag the mouse to your right. Then release the mouse button again. You can adjust all the columns width like this. You need to store the view again to keep the changes.</p>

<p>Now your&nbsp;Sequence Executor sheet should look something like this:</p>

<figure class="caption"><img alt="" src="/Media/Image/qsg_06_store-the-first-cue_seq-exec-sheet_v3-3_1.png">
<figcaption><em>Sequence Executor Sheet with one cue</em></figcaption>
</figure>

<p>&nbsp;</p>

<p>On the <a href="/Topic/13e37310-0d02-4705-8593-697a635cc326">next page</a>,&nbsp;we are going to create more cues.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>&nbsp;</h2>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d69b28f2-c3d6-4550-b0cd-e06bd0668955">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/05_groups/en/3.9'; " title="Go to previous page '05 Working with Groups'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/grandMA2/07_create_more_cues/en/3.9';" title="Go to next page '07 Create More Cues'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/55163/31';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
