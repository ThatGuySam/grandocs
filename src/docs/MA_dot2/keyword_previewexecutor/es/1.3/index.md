---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_previewexecutor/es/1.3'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option selected="selected" value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ccf585a5-a42f-4c45-8881-7ed203817ded">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_presettype/es/1.3'; " title="Go to previous page 'PresetType'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_rate/es/1.3';" title="Go to next page 'Rate '">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/ccf585a5-a42f-4c45-8881-7ed203817ded">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13808/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Comando Preview</h1>

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

		<p>Esta página describe la sintaxis y cómo usar el comando&nbsp;preview.</p>

<p>Para acceder al comando&nbsp;preview&nbsp;presiona&nbsp;<span class="hardkey">Prvw</span>&nbsp;en la consola.<br>
Preview&nbsp;está en la&nbsp;<a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">línea de comandos</a>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando&nbsp;Preview&nbsp;obtienes una vista previa de la salida programada en la <a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">vista de aparatos</a> y en dot2 3D&nbsp;sin tener una salida DMX real.</p>

<p>Puedes usar el comando&nbsp;Preview&nbsp;para obtener una vista previa de:</p>

<ul>
	<li>ejecutores</li>
	<li>cues</li>
</ul>

<div class="tip">Si la consola está en modo vista previa, la tecla&nbsp;<span class="hardkey">Prvw</span>&nbsp;está parpadeando y la barra de título de la hoja de aparatos cambia a color rojo.</div>

<div class="tip">Para abandonar el modo de vista previa presiona&nbsp;<span class="hardkey">Esc</span>&nbsp;u&nbsp;<span class="hardkey">Off</span> <span class="hardkey">Prvw</span>&nbsp;en la consola.</div>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>1. Para obtener una vista previa del ejecutor 102.</p>

<div class="cl_input">Preview ExecButton1 1.102</div>

<p>2. Para obtener una vista previa de la cue 1 del ejecutor principal.</p>

<div class="cl_input">Preview Cue 1</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que quieres tener una vista previa de lo que está programado en el ejecutor 102 sin tener una salida DMX real.</p>

<p>Hay cinco maneras para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Prvw</span>&nbsp;y pulsa el ejecutor 102 en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">ventana barra de ejecutores</a>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Prvw</span> y pulsa el ejecutor 102 en la <a href="/Topic/c1cec312-0cbe-4824-aa2a-1b23a81f9d9f">vista pool de ejecutores</a>.</p>

<p>c) Presiona&nbsp;<span class="hardkey">Prvw</span> y pulsa el ejecutor 102 en la <a href="/Topic/1e6e8a74-a73d-48b7-bd99-458248dc9a87">vista de&nbsp;playbacks virtuales</a>.</p>

<p>d) Presiona&nbsp;<span class="hardkey">Prvw</span>&nbsp;y presiona el&nbsp;<span class="hardkey">botón ejecutor</span>&nbsp;del ejecutor 102 en la consola.</p>

<p>e) Presiona&nbsp;<span class="hardkey">Prvw</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>La vista previa del ejecutor 102 está visible en la <a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">vista de aparatos</a>&nbsp;sin tener una salida DMX real.</p>

<div class="tip">Para obtener un pequeño resumen en el modo vista previa sobre diferentes ejecutores al mismo tiempo mantén pulsada la tecla&nbsp;<span class="hardkey">Prvw</span>&nbsp;y luego los diferentes&nbsp;<span class="hardkey">botones ejecutores</span>&nbsp;en la consola.</div>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que quieres obtener una vista previa de la cue 1 del ejecutor principal sin tener una salida DMX real.</p>

<p><strong>Requerimiento:</strong>&nbsp;El ejecutor principal está apagado.</p>

<p>Hay tres maneras para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Prvw</span>&nbsp;y pulsa en la cue 1 en la&nbsp;<a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">vista de cues</a>&nbsp;del ejecutor principal.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Prvw</span> <span class="hardkey">Cue</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>c) Presiona&nbsp;<span class="hardkey">Prvw</span> <span class="hardkey">Please</span>.</p>

<p>La vista previa de la cue 1 del ejecutor principal está visible en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">vista de aparatos</a>&nbsp;sin tener una salida DMX real.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Ejemplo 3</h2>

<p>Supongamos que quieres pasar por diferentes cues del cuelist en el ejecutor principal con los tiempos de las cues pero sin tener una salida DMX real.</p>

<p>1. Abre el ejecutor principal en el modo vista previa y presiona&nbsp;<span class="hardkey">Prvw</span> <span class="hardkey">Please</span>.<br>
Se previsualiza la Cue 1 del ejecutor principal.</p>

<p>2. Presiona la tecla pequeña&nbsp;<span class="hardkey">Go+</span> (=Go) y&nbsp;<span class="hardkey">Prvw</span>.<br>
Se previsualiza la Cue 2 del ejecutor principal con los tiempos de cue. Ej: fade.</p>

<div class="tip">Para volver atrás desde la cue 2 a la 1 en el modo de vista previa utiliza la tecla pequeña&nbsp;<span class="hardkey">Go-</span>&nbsp;y&nbsp;<span class="hardkey">Prvw</span>&nbsp;en la consola.</div>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Ejemplo 4</h2>

<p>Supongamos que quieres pasar por diferentes cues&nbsp;de un cuelist&nbsp;almacenado en el ejecutor&nbsp;2 sin tener una salida DMX real.</p>

<p>1. Abre el ejecutor 2 en modo vista previa presionando la tecla&nbsp;<span class="hardkey">Prvw</span>&nbsp;y el botón ejecutor del ejecutor 2&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span><br>
La cue 1 del Ejecutor 2 se previsualiza.</p>

<p>2. Presiona&nbsp;<span class="hardkey">Prvw</span>&nbsp;y luego&nbsp;<span class="hardkey">Next</span>.<br>
La cue 2 del Ejecutor 2 se previsualiza.</p>

<p>3. Repite el paso 2 hasta llegar al final del cuelist.</p>

<div class="tip">Para saltar hacía atrás en el cuelist presiona&nbsp;<span class="hardkey">Prvw</span> <span class="hardkey">Prevw</span></div>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option selected="selected" value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ccf585a5-a42f-4c45-8881-7ed203817ded">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_presettype/es/1.3'; " title="Go to previous page 'PresetType'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_rate/es/1.3';" title="Go to next page 'Rate '">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13808/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
