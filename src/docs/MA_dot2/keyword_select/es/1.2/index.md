---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_select/es/1.2'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="dadd1aa0-a504-4c7e-81e7-f8f501aeaca1">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_replace/es/1.2'; " title="Go to previous page 'Replace'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_selection/es/1.2';" title="Go to next page 'Selection'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/dadd1aa0-a504-4c7e-81e7-f8f501aeaca1">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/6998/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Comando Select</h1>

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
							<a href="#toc_header_anchor_5">&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Ejemplo 2</a>
						</li>
						<li>
							<a href="#toc_header_anchor_7">&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Ejemplo 3</a>
						</li>
				</ul>
			</div>

		<p>Esta página describe la sintaxis y como usar el comando Select</p>

<p>Para acceder al comando Select, presiona&nbsp;<span class="hardkey">Select</span>&nbsp;en la consola.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando Select puedes&nbsp;seleccionar aparatos:</p>

<ul>
	<li>según su dirección&nbsp;DMX</li>
	<li>desde un cuelist&nbsp;almacenado en un ejecutor</li>
	<li>desde una cue específica</li>
</ul>

<p>Los&nbsp;aparatos seleccionados se muestran en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>1. Seleccionar aparatos en la vista de aparatos según su dirección&nbsp;DMX.</p>

<div class="cl_input">Select Dmx 1.1</div>

<p>2. Seleccionar todos los aparatos de un cuelist&nbsp;almacenado en un ejecutor.</p>

<div class="cl_input">Select ExecButton1 1.1</div>

<p>3. Seleccionar todos los aparatos en una cue específica.</p>

<div class="cl_input">Select Cue 1 ExecButton1 1.2</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que seleccionas el aparato que usa el&nbsp;address DMX&nbsp;1.1</p>

<p>Presiona&nbsp;<span class="hardkey">Select</span>&nbsp;y selecciona la dirección <span class="softkey">1.1</span>&nbsp;en la vista DMX.</p>

<p>El aparato con la dirección DMX 1.1 está seleccionado.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que seleccionas todos los aparatos de un cuelist&nbsp;almacenado en el ejecutor 1.</p>

<p>Hay tres maneras para hacerlo:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Select</span>&nbsp;y luego presiona el respectivo botón ejecutor&nbsp;ej. <span class="hardkey"><img alt="Go" src="/Media/Mlg/go_1.png"></span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Select</span>&nbsp;y luego pulsa sobre&nbsp;<span class="softkey">Ejecutor&nbsp;1</span>&nbsp;en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Vista Barra Ejecutores</a>.</p>

<p>c) Presiona&nbsp;<span class="hardkey">Select</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>Todos los aparatos almacenados en el ejecutor 1 están seleccionados en la vista de Aparatos.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Ejemplo 3</h2>

<p>Supongamos que seleccionas todos los aparatos de la cue 1 en el ejecutor 1.</p>

<p>Hay tres maneras para hacerlo:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Select</span> <span class="hardkey">Cue</span> <span class="hardkey">1</span> y luego presiona el respectivo botón ejecutor&nbsp;ej. <span class="hardkey"><img alt="Go" src="/Media/Mlg/go_1.png"></span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Select</span> <span class="hardkey">Cue</span> <span class="hardkey">1</span>&nbsp;y luego pulsa sobre&nbsp;<span class="softkey">Ejecutor&nbsp;1</span>&nbsp;en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Vista Barra Ejecutores</a>.</p>

<p>c) Presiona&nbsp;<span class="hardkey">Select</span> <span class="hardkey">Cue</span> <span class="hardkey">1</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>Todos los aparatos de la cue 1 en el ejecutor 1 están seleccionados.</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/7a9a5314-9d16-47f5-8726-ebfecf3822d3">Tecla Select</a></li>
	<li><a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a></li>
	<li><a href="/Topic/af87cdc8-b54b-41ee-b614-26065230c7ec">Vista Barra Ejecutores</a></li>
	<li><a href="/Topic/2f939332-43b1-44f0-9a0e-3121d5083e70">Vista&nbsp;DMX</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="dadd1aa0-a504-4c7e-81e7-f8f501aeaca1">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_replace/es/1.2'; " title="Go to previous page 'Replace'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_selection/es/1.2';" title="Go to next page 'Selection'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/6998/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
