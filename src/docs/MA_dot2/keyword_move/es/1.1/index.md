---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_move/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="210421fb-24b5-4a20-a719-c2ca85b8f002">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_midinote/es/1.1'; " title="Go to previous page 'MidiNote'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_off/es/1.1';" title="Go to next page 'Off'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/210421fb-24b5-4a20-a719-c2ca85b8f002">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/6496/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Comando Move</h1>

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
							<a href="#toc_header_anchor_3">Ejemplo 1</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Ejemplo 2</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Ejemplo 3</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Ejemplo 4</a>
						</li>
				</ul>
			</div>

		<p>Esta página describe la sintaxis y cómo usar el comando Move.</p>

<p>Para acceder al comando Move presiona la tecla&nbsp;<span class="hardkey">Move</span>&nbsp;en la consola.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando Move puedes mover objetos como por ejemplo:</p>

<ul>
	<li>grupos a otra posición en el <a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">Pool de Grupos</a></li>
	<li>presets a otra posición en el <a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">Pool de Presets</a></li>
	<li>ejecutores a otra posición en el <a href="/Topic/c1cec312-0cbe-4824-aa2a-1b23a81f9d9f">Pool de Ejecutores</a>&nbsp;u otra página en el&nbsp;<a href="/Topic/5525b66b-92c6-4e03-b351-3976dc15cb5b">Pool de páginas</a></li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>1. Mover un grupo a otra posición.</p>

<div class="cl_input">Move Group 1 At 3</div>

<p>2. Mover un preset a otra posición.</p>

<div class="cl_input">Move Preset 1 At 3</div>

<p>3. Mover un ejecutor a otra posición en la misma página.</p>

<div class="cl_input">Move Executor 1 At 3</div>

<p>4. Mover un ejecutor a otra posición en otra página.</p>

<div class="cl_input">Move Executor 1.1 At 2.1</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que quieres mover el grupo 50 al 1.</p>

<p>Hay dos maneras para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Move</span> <span class="hardkey">Group</span> <span class="hardkey">50</span> <span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Move</span>, pulsa el&nbsp;<span class="softkey">group 50</span>&nbsp;en el&nbsp;<a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">Pool de Grupos</a>, y luego sobre el tile libre&nbsp;<span class="softkey">&nbsp;número 1</span>.</p>

<p>Se ha movido el grupo 50 y ahora es el grupo 1.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que quieres mover el preset de color 2 al 5.</p>

<div class="tip">Si mueves un tipo de preset usado en una cue, la asignación en la cue se redirecciona automaticamente al nuevo número del preset.</div>

<p>1. Abre el&nbsp;<a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">Pool Presets de Color</a></p>

<p>Hay dos maneras para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Move</span> <span class="hardkey">Preset</span> <span class="hardkey">2</span> <span class="hardkey">At</span> <span class="hardkey">5</span> <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Move</span>, en el color&nbsp;<span class="softkey">preset 2</span>&nbsp;en el pool de presets de color, &nbsp;y luego sobre el tile libre&nbsp;<span class="softkey">&nbsp;número 5</span></p>

<p>Se ha movido el Preset de Color 2 y ahora es el Preset de Color 5.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Ejemplo 3</h2>

<p>Supongamos que quieres mover el ejecutor desde la posición 1 a la 6.</p>

<p>Hay tres maneras para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Move</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">At</span> <span class="hardkey">6</span> <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Move</span>, pulsa el&nbsp;<span class="softkey">ejecutor 1</span>&nbsp;en el <a href="/Topic/c1cec312-0cbe-4824-aa2a-1b23a81f9d9f">Pool de ejecutores</a>&nbsp;y luego pulsa el&nbsp;<span class="softkey">ejecutor 6</span>.</p>

<p>c) Presiona&nbsp;<span class="hardkey">Move</span>, presiona el botón ejecutor 1 <span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp;en la consola y luego presiona el botón ejecutor 6&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp;en la consola.</p>

<p>Se ha movido el ejecutor desde la posición 1 a la 6</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Ejemplo 4</h2>

<p>Supongamos que quieres mover el ejecutor 1 desde la página 1 a la 2.</p>

<p>Hay tres maneras para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Move</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> (=Page 1) <span class="hardkey">.</span> <span class="hardkey">1</span> (=Executor 1) <span class="hardkey">At</span> <span class="hardkey">Exec</span> <span class="hardkey">2</span> (=Page 2) <span class="hardkey">.</span> <span class="hardkey">1</span> (Executor 1) <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Move</span>, pulsa el&nbsp;<span class="softkey">ejecutor 1</span>&nbsp;en la página 1 en el&nbsp;<a href="/Topic/c1cec312-0cbe-4824-aa2a-1b23a81f9d9f">Pool de ejecutores</a>&nbsp;y luego pulsa el&nbsp;<span class="softkey">ejecutor 1</span>&nbsp;en la página 2.</p>

<p>c) Presiona&nbsp;<span class="hardkey">Move</span>, pulsa el &nbsp;<span class="softkey">ejecutor 1</span>&nbsp;en la página 2 en la&nbsp;<a href="/Topic/af87cdc8-b54b-41ee-b614-26065230c7ec">Vista Barra Ejecutores</a>&nbsp;y pulsa el&nbsp;<span class="softkey">ejecutor 1</span>&nbsp;en la página 2.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/f12e11a4-5376-4abb-b023-09c75a033a92">Tecla Mover</a></li>
	<li><a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">Pool de Grupos</a></li>
	<li><a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">Pool de Presets</a></li>
	<li><a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Pool de Ejecutores</a></li>
	<li><a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Vista Barra Ejecutores</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="210421fb-24b5-4a20-a719-c2ca85b8f002">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_midinote/es/1.1'; " title="Go to previous page 'MidiNote'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_off/es/1.1';" title="Go to next page 'Off'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/6496/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
