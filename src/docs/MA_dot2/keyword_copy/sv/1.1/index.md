---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_copy/sv/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="6f42e54b-e064-46ad-b3c5-c5341be8e50d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_cmddelay/sv/1.1'; " title="Go to previous page 'CmdDelay'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_cue/sv/1.1';" title="Go to next page 'Cue'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/6f42e54b-e064-46ad-b3c5-c5341be8e50d">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/15086/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Copy Command</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Beskrivning</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Syntax</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Exempel 1</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Exempel 2</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Exempel 3</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Exempel 4</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Exempel 5</a>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Relaterade Länkar</a>
						</li>
				</ul>
			</div>

		<p>Den här sidan beskriver syntaxen och användningen av kommandot&nbsp;Copy.</p>

<p>För att kalla upp kommandot Copy, tryck på knappen&nbsp;<span class="hardkey">Copy</span>&nbsp;på ljusbordet.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Beskrivning</h2>

<p>Med kommandot Copy kan du kopiera</p>

<ul>
	<li>en grupp till en annan grupp</li>
	<li>en cue till en annan cue</li>
	<li>en sida till en annan sida i&nbsp;<a href="/Topic/5525b66b-92c6-4e03-b351-3976dc15cb5b">page-poolen</a></li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Syntax</h2>

<p>1. Kopiera en grupp till en annan grupp.</p>

<div class="cl_input">Copy Group 1 At 2</div>

<p>2. Kopiera en cue till en annan cue i huvud-executorn.</p>

<div class="cl_input">Copy Cue 1 At 2</div>

<p>3. Kopiera en cue från huvud-executorn till en annan executor.</p>

<div class="cl_input">Copy Cue 1 At 2 Executor 4</div>

<p>4. Kopiera en cue till en annan cue i en normal executor.</p>

<div class="cl_input">Copy Exec 2 Cue 1 At Exec 2 Cue 3</div>

<p>5. Kopiera en sida till en annan i&nbsp;<a href="/Topic/5525b66b-92c6-4e03-b351-3976dc15cb5b">page-poolen</a>.</p>

<div class="cl_input">Copy Page 1 At Page 2</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Exempel 1</h2>

<p>Låt säga att du vill kopiera grupp 1 till grupp 2.</p>

<p>Det finns två sätt att göra detta:</p>

<p>a) Tryck&nbsp;<span class="hardkey">Copy</span> <span class="hardkey">Group</span> <span class="hardkey">1</span> <span class="hardkey">At</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>b) Tryck&nbsp;<span class="hardkey">Copy</span>, tryck sedan på grupp 1 i&nbsp;<a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">group-vyn</a> tryck sedan på grupp 2.</p>

<p>Grupp 1 är nu kopierad till grupp 2.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Exempel 2</h2>

<p>Låt säga tt du vill kopiera cue 1 till cue 10 i huvud-executorn.</p>

<p>Tryck&nbsp;<span class="hardkey">Copy</span> <span class="hardkey">1</span> (= Cue 1) <span class="hardkey">At</span> <span class="hardkey">10</span> <span class="hardkey">Please</span>.</p>

<p>Ljusbordet ber dig att&nbsp;<a href="/Topic/72491e09-96f4-41c6-a876-394ee91fecf2">välja kopieringsmetod</a>.</p>

<p>Cue 1 är nu kopierad till cue 10 i huvud-executorn.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Exempel 3</h2>

<p>Låt säga att du vill kopiera cue 1 från huvud-executorn till cue 2 i executor 4-</p>

<p>Tryck&nbsp;<span class="hardkey">Copy</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) <span class="hardkey">At</span> <span class="hardkey">2</span> <span class="hardkey">Exec</span> <span class="hardkey">4</span> <span class="hardkey">Please</span>.</p>

<p>Ljusbordet ber dig att&nbsp;<a href="/Topic/72491e09-96f4-41c6-a876-394ee91fecf2">välja kopieringsmetod</a>.</p>

<p>Cue 1 är nu kopierad från huvud-executorn till cue 2 i executor 4.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Exempel 4</h2>

<p>Låt säga att du vill kopiera cue 1 i executor 2 till cue 2 i executor 2.</p>

<p>Tryck&nbsp;<span class="hardkey">Copy</span> <span class="hardkey">Exec</span> <span class="hardkey">2</span> <span class="hardkey">Cue</span> <span class="hardkey">1</span> <span class="hardkey">At</span> <span class="hardkey">Exec</span> <span class="hardkey">2</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>Cue 1 från executor 2 är nu kopierad till cue 2 i executor 2.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Exempel 5</h2>

<p>Låt oss anta, att du har en repertoar av sidor med alla möjliga låtar och du kommer att plocka några sidor (låtar) för kvällens evenemang.</p>

<p>Det finns två sätt att göra detta:</p>

<p>a) Tryck&nbsp;<span class="hardkey">Copy</span> <span class="hardkey">Page</span> <span class="hardkey">100</span> <span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Tryck&nbsp;<span class="hardkey">Copy</span>, tryck på &nbsp;<span class="softkey">page 100</span> i&nbsp;<a href="/Topic/5525b66b-92c6-4e03-b351-3976dc15cb5b">page-poolen</a>, tryck&nbsp;<span class="hardkey">At</span>, tryck sedan&nbsp;<span class="softkey">page 1</span>.</p>

<p>Sidan 100 är kopierad till sida 1.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Relaterade Länkar</h2>

<ul>
	<li><a href="/Topic/4d177693-cdbd-4c33-a97d-3ca8a4740ecb">Knappen Copy</a></li>
	<li><a href="/Topic/0ee82d58-64bf-438a-b2e9-4c57b4bc1590">Knappen Group</a></li>
	<li><a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">Groups-Vyn</a></li>
	<li><a href="/Topic/edb295a7-2ac6-422b-8b05-213b59e575fb">AT-knappen</a></li>
	<li><a href="/Topic/5525b66b-92c6-4e03-b351-3976dc15cb5b">Page-Poolen</a></li>
</ul>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="6f42e54b-e064-46ad-b3c5-c5341be8e50d">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_cmddelay/sv/1.1'; " title="Go to previous page 'CmdDelay'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_cue/sv/1.1';" title="Go to next page 'Cue'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/15086/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
