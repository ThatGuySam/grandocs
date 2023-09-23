---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_label/es/1.2'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="42b43b45-2789-41c3-a999-b917b967a32c">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_invert/es/1.2'; " title="Go to previous page 'Invert'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_learn/es/1.2';" title="Go to next page 'Learn'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/42b43b45-2789-41c3-a999-b917b967a32c">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/6334/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Comando Label</h1>

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
				</ul>
			</div>

		<p>Esta página describe la sintaxis y cómo usar el comando Label.</p>

<p>Para acceder al comando Label presiona la tecla&nbsp;<span class="hardkey">Label</span>&nbsp;en la consola.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando Label puedes nombrar por ejemplo:</p>

<ul>
	<li>aparatos en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista hoja de aparatos</a></li>
	<li>grupos en el&nbsp;<a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">Pool de grupos</a></li>
	<li>presets en el <a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">Pool de presets</a></li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>1. Nombrar un aparato.</p>

<div class="cl_input">Label Fixture 1</div>

<p>2. Nombrar un grupo.</p>

<div class="cl_input">Label Group 1</div>

<p>3. Nombrar un preset&nbsp;</p>

<div class="cl_input">Label Preset</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que quieres nombrar los aparatos del 1 al 10 como Mac700 con números consecutivos.</p>

<p>Hay dos maneras de hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Label</span> <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">10</span> <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Label</span>&nbsp;y selecciona los aparatos del 1 al 10 en la vista de aparatos</p>

<p>La&nbsp;<a href="/Topic/26701109-1218-40c5-a9bc-26913cd9cb54">ventana para introducir nombre</a>&nbsp;se abre.<br>
Escribe "Mac700 1".</p>

<p>Has nombrado los aparatos 1 al 10 como Mac700 con un número consecutivo al final.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que quieres nombrar el grupo 1 como "All Studio Colors" en el Pool de grupos.</p>

<p>Hay dos maneras para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Label</span> <span class="hardkey">Group</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Label</span>&nbsp;y selecciona el grupo 1 en el pool de grupos.</p>

<p>La&nbsp;<a href="/Topic/26701109-1218-40c5-a9bc-26913cd9cb54">ventana para introducir nombre</a>&nbsp;se abre.<br>
Escribe "All Studio Colors".</p>

<p>Has nombrado el grupo de color como"All Studio Colors".</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Ejemplo 3</h2>

<p>Supongamos que quieres nombrar un preset como "Dark Red".</p>

<p>Hay dos maneras para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Label</span> <span class="hardkey">Preset</span> <span class="hardkey">4</span> (=Color Preset Pool) <span class="hardkey">.</span> <span class="hardkey">1</span> (=Preset Object 1) <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Label</span>&nbsp;y pulsa sobre el preset 1 en el pool de preset de colores.</p>

<p>La&nbsp;<a href="/Topic/26701109-1218-40c5-a9bc-26913cd9cb54">ventana para introducir nombre</a>&nbsp;se abre.<br>
Escribe "Dark Red".</p>

<p>Has nombrado el preset de color como "Dark Red".</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/6bc37c47-2874-4a54-9cfa-b6f825b40b69">Tecla Label</a></li>
	<li><a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a></li>
	<li><a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">Pool de Grupos</a></li>
	<li><a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">Pool de Presets</a></li>
</ul>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="42b43b45-2789-41c3-a999-b917b967a32c">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_invert/es/1.2'; " title="Go to previous page 'Invert'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_learn/es/1.2';" title="Go to next page 'Learn'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/6334/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
