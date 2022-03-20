---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_copy/es/1.1'
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
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_cmddelay/es/1.1'; " title="Go to previous page 'CmdDelay'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_cue/es/1.1';" title="Go to next page 'Cue'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/6f42e54b-e064-46ad-b3c5-c5341be8e50d">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7102/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Comando Copy</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Descripción</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Sintaxis</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Ejemplo 1</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Ejemplo 2</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Ejemplo 3</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">Ejemplo 4</a>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Ejemplo 5</a>
						</li>
				</ul>
			</div>

		<p>Esta página describe la sintaxis y como usar el comando <strong>Copy</strong></p>

<p>Para utilizar el comando Copy pulsa la tecla&nbsp;<span class="hardkey">Copy</span>&nbsp;en la consola.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando Copy puedes copiar:</p>

<ul>
	<li>un grupo a otro grupo.</li>
	<li>una cue a otra cue.</li>
	<li>una página a otra página en el Pool de páginas.</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>1. Copiar un grupo a otro grupo</p>

<div class="cl_input">Copy Group 1 At 2</div>

<p>2. Copiar una cue&nbsp;a otra&nbsp;cue en el ejecutor principal.</p>

<div class="cl_input">Copy Cue 1 At 2</div>

<p>3. Copiar una cue&nbsp;desde el ejecutor principal a otro ejecutor</p>

<div class="cl_input">Copy Cue 1 At 2 Executor 4</div>

<p>4. Copiar una cue a otra cue&nbsp;en un ejecutor normal.&nbsp;</p>

<div class="cl_input">Copy Exec 2 Cue 1 At Exec 2 Cue 3</div>

<p>5. Copiar una página a otra página en el Pool de páginas.</p>

<div class="cl_input">Copy Page 1 At Page 2</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que copiamos el grupo 1 al grupo 2</p>

<p>Hay dos maneras para hacerlo:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Copy</span> <span class="hardkey">Group</span> <span class="hardkey">1</span> <span class="hardkey">At</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Copy</span>, luego selecciona el grupo 1 en la&nbsp;<a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">vista de Grupos</a>&nbsp;y después pulsa el grupo 2.</p>

<p>Se ha copiado el grupo 1 al grupo 2</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Vamos a suponer que copiamos la cue 1 a la cue 10 en el ejecutor principal.</p>

<p>Presiona&nbsp;<span class="hardkey">Copy</span> <span class="hardkey">1</span> (= Cue 1) <span class="hardkey">At</span> <span class="hardkey">10</span> <span class="hardkey">Please</span>.</p>

<p>La consola te preguntará&nbsp;<a href="/Topic/72491e09-96f4-41c6-a876-394ee91fecf2">elegir método de copia</a></p>

<p>Cue&nbsp;1 ha sido copiada a la cue 10.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Ejemplo 3</h2>

<p>Supongamos que copiamos la cue 1 del ejecutor principal a la cue 2 del ejecutor 4</p>

<p>Presiona <span class="hardkey">Copy</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) <span class="hardkey">At</span> <span class="hardkey">2</span> <span class="hardkey">Exec</span> <span class="hardkey">4</span> <span class="hardkey">Please</span>.</p>

<p>La consola te preguntará&nbsp;<a href="/Topic/72491e09-96f4-41c6-a876-394ee91fecf2">elegir método de copia</a></p>

<p>Se ha copiado la cue 1 del ejecutor principal a la cue 2 del ejecutor 4</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Ejemplo 4</h2>

<p>Supongamos que quieres copiar la cue&nbsp;1 del ejecutor 2 a la cue 2 del mismo ejecutor.</p>

<p>Presiona&nbsp;&nbsp;<span class="hardkey">Copy</span>&nbsp;<span class="hardkey">Exec</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">Exec</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">Cue</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">Please</span><font color="#faba00">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</font></p>

<p>Se ha copiado la cue 1 del ejecutor 2 a la cue 2 del mismo ejecutor.<font color="#faba00">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</font></p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Ejemplo 5</h2>

<p>Supongamos que tienes un repertorio de páginas con cada una de las posibles canciones y necesitas copiar una de ellas para luego editarla.</p>

<p>Hay dos maneras para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Copy</span>&nbsp;<span class="hardkey">Page</span>&nbsp;<span class="hardkey">100</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">1Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Copy</span>, selecciona la&nbsp;<span class="softkey">página 100</span>&nbsp;en el&nbsp;<a href="/Topic/5525b66b-92c6-4e03-b351-3976dc15cb5b">pool de páginas</a>, presiona&nbsp;<span class="hardkey">At</span>, y selecciona&nbsp;<span class="softkey">página 1</span>.</p>

<p>La página 100 se ha copiado a la 1.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/4d177693-cdbd-4c33-a97d-3ca8a4740ecb">Tecla Copy</a></li>
	<li><a href="/Topic/0ee82d58-64bf-438a-b2e9-4c57b4bc1590">Tecla Grupo</a></li>
	<li><a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">Vista Grupos</a></li>
	<li><a href="/Topic/47efc201-7d5c-43c5-b59c-aa2a54e090df">Tecla At</a></li>
	<li><a href="/Topic/5525b66b-92c6-4e03-b351-3976dc15cb5b">Pool de páginas</a></li>
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
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_cmddelay/es/1.1'; " title="Go to previous page 'CmdDelay'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_cue/es/1.1';" title="Go to next page 'Cue'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7102/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
