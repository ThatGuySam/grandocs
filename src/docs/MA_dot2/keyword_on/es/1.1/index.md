---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_on/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d85eba0d-711b-4b27-87a5-0e1c05148074">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_off/es/1.1'; " title="Go to previous page 'Off'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_outdelay/es/1.1';" title="Go to next page 'OutDelay'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/d85eba0d-711b-4b27-87a5-0e1c05148074">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/6507/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Comando On</h1>

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
						<li>
							<a href="#toc_header_anchor_7">Ejemplo 5</a>
						</li>
				</ul>
			</div>

		<p>Esta página describe la sintaxis y cómo usar el comando On.</p>

<p>Para acceder al comando On presiona la tecla&nbsp;<span class="hardkey">On</span>&nbsp;en la consola.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando On puedes:</p>

<ul>
	<li>encender un ejecutor</li>
	<li>encender un ejecutor con tiempo de Fade.</li>
	<li>encender todos los ejecutores normales con una cuelist asignada.</li>
	<li>activar todos los valores de un aparato en el programador.</li>
	<li>activar todos los valores de un tipo de preset para los aparatos seleccionados en el programador.&nbsp;</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>1. Encender un ejecutor.</p>

<div class="cl_input">On</div>

<p>2. Encender un ejecutor con tiempo de Fade.</p>

<div class="cl_input">On Executor 1 Fade 2</div>

<p>3. Encender todos los ejecutores normales con una cuelist asignada.</p>

<div class="cl_input">On Thru</div>

<p>4. Activar todos los valores de un aparato en el programador.</p>

<div class="cl_input">On Fixture 1</div>

<p>5. Activar todos los valores de un tipo de preset para los aparatos seleccionados en el programador.&nbsp;</p>

<div class="cl_input">On PresetType 1</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que quieres encender el ejecutor 1.</p>

<p>Hay tres maneras para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">On</span>, y el respectivo botón ejecutor&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">On</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>c) Presiona&nbsp;<span class="hardkey">On</span>, y el respectivo botón ejecutor en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Vista Barra Ejecutores</a>.</p>

<p>Se ha encendido el ejecutor 1</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que quieres encender un ejecutor con un tiempo de Fade de 2 segundos.</p>

<p>Presiona&nbsp;<span class="hardkey">On</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Time</span> (=Fade) <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>Se enciende el ejecutor 1 con un tiempo de Fade de 2 segundos</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Ejemplo 3</h2>

<p>Supongamos que quieres encender todos los ejecutores normales con cuelist en la página actual.</p>

<p>Presiona&nbsp;<span class="hardkey">On</span> <span class="hardkey">Thru</span> <span class="hardkey">Please</span>.</p>

<p>Se han encendido todos los ejecutores normales con&nbsp;cuelist en la página actual</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Ejemplo 4</h2>

<p>Supongamos que quieres activar en el programador todos los valores de los aparatos 1 al 10.</p>

<p>Hay dos maneras para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">On</span> <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">10</span> <span class="hardkey">Please</span>.</p>

<p>b) Selecciona los aparatos del 1 al 10 en la vista de aparatos y presiona dos veces la tecla&nbsp;<span class="hardkey">Please</span>.</p>

<p>Todos los valores de los aparatos 1 al 10 están activos en el programador.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Ejemplo 5</h2>

<p>Supongamos que quieres activar en el programador todos los valores de dimmer para los aparatos seleccionados.</p>

<p>Hay tres maneras para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">On</span>&nbsp; <span class="hardkey"><img alt="MA" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Preset</span> (= PresetType) <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">On</span>&nbsp; <span class="hardkey"><img alt="MA" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Preset</span> (= PresetType) <span class="syntax">Dimmer</span> <span class="hardkey">Please</span>.</p>

<p>c) Presiona dos veces sobre&nbsp;<span class="softkey">Dimmer</span>&nbsp;en la&nbsp;<a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">Barra Preset de Tipo</a>.</p>

<p>Los valores de dimmer de los aparatos seleccionados están activos en el programador.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/959124b6-21e1-4fce-8b54-921cd18f232a">Tecla On</a></li>
	<li><a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Vista Barra Ejecutores</a></li>
	<li><a href="/Topic/b22280c5-a31f-40a8-8e8d-fe1e91df2214">Tecla Please</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="d85eba0d-711b-4b27-87a5-0e1c05148074">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_off/es/1.1'; " title="Go to previous page 'Off'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_outdelay/es/1.1';" title="Go to next page 'OutDelay'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/6507/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
