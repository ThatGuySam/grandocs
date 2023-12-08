---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_delete/es/1.2'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option selected="selected" value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="8cc291a9-2753-42f0-9ead-dc12613d80b0">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_delay/es/1.2'; " title="Go to previous page 'Delay'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_dmx/es/1.2';" title="Go to next page 'Dmx'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/8cc291a9-2753-42f0-9ead-dc12613d80b0">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/15345/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Comando Delete</h1>

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

		<p>Esta página describe la sintaxis y cómo usar el comando Delete.</p>

<p>Para acceder al comando Delete presiona&nbsp;<span class="hardkey">Delete</span>&nbsp;en la consola.<br>
Delete&nbsp;está ahora en&nbsp;la <a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">línea de comandos</a>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando Delete puedes:</p>

<ul>
	<li>Eliminar cues de un cuelist.</li>
	<li>Eliminar&nbsp;objetos (ej. tipos de presets, grupos) de su respectivo pool (ej.&nbsp;<a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">Pool&nbsp;tipo de preset</a>&nbsp;de posición,&nbsp;<a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">Pool de grupos</a>)</li>
	<li>Unpatch&nbsp;aparatos de un universo DMX</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>1. Eliminar cues de un cuelist.</p>

<div class="cl_input">Delete Cue 1 Executor 1</div>

<p>2. Eliminar objetos de su respectivo pool.</p>

<div class="cl_input">Delete Preset 1.1</div>

<p>3. Unpatch&nbsp;aparatos de un universo DMX</p>

<div class="cl_input">Delete Fixture 1</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que quieres eliminar la cue 1 del ejecutor principal.</p>

<p>Hay tres maneras diferentes de hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1)&nbsp;<span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) y pulsa sobre el&nbsp;<span class="softkey">Ejecutor principal</span>&nbsp;en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Barra Vista de Ejecutores</a>.</p>

<p>c) Presiona&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) presiona la tecla&nbsp;<span class="hardkey">Go</span>&nbsp;grande en la consola (control de ejecutor principal).</p>

<p>Si una cue list está guardada en el ejecutor principal, la consola te preguntará para&nbsp;<a href="/Topic/17e6e949-0ef5-43b4-b7f0-94a4270fc763">Elegir método de Eliminar</a>.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que vas a borrar la cue 1 del ejecutor 1</p>

<p>Hay tres maneras diferentes de hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) y pulsa sobre el&nbsp;<span class="softkey">ejecutor 1</span>&nbsp;en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Barra Vista de Ejecutores</a>.</p>

<p>c) Presiona&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) y presiona el respectivo botón ejecutor&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp;en la consola.</p>

<p>Si una cue list está guardada en el executor 1, la consola para&nbsp;<a href="/Topic/17e6e949-0ef5-43b4-b7f0-94a4270fc763">Elegir método de Eliminar</a>.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Ejemplo 3</h2>

<p>Supongamos que quieres borrar el preset de dimmer 1 de su respectivo Pool de preset.</p>

<p>1. Abre el&nbsp;<a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">Pool de preset de dimmer</a>.</p>

<p>Hay dos maneras para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Delete</span> <span class="hardkey">Preset</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Delete</span>&nbsp;y luego el preset 1 en el&nbsp;preset pool de dimmer.</p>

<p>Se ha borrado el Preset 1 del pool de preset de dimmer.</p>

<p>Si el preset se usa en una cue, la consola pide que confirmes el proceso.<br>
La conexión desde el preset a la cue se perderá y los valores del preset serán guardados directamente en la cue.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Ejemplo 4</h2>

<p>Supongamos que quieres unpatch (despatchear) un aparato del universo DMX 1.</p>

<p>Presiona&nbsp;<span class="hardkey">Delete</span>&nbsp;y luego pulsa sobre el aparato 1 en la vista de aparatos.</p>

<p>La consola pide que confirmes el proceso de unpatch.</p>

<p>Pulsa&nbsp;<span class="softkey">OK</span>.</p>

<p>El aparato 1 está ahora "unpatched" (despatcheado)</p>

<div class="tip">Revisa los aparatos sin patch en&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Patch y Lista de Aparatos</a>.</div>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option selected="selected" value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="8cc291a9-2753-42f0-9ead-dc12613d80b0">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_delay/es/1.2'; " title="Go to previous page 'Delay'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_dmx/es/1.2';" title="Go to next page 'Dmx'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/15345/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
