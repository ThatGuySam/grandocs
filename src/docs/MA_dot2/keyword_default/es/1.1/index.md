---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_default/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f3de5256-51a6-443a-8a44-ab093898018c">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_cue/es/1.1'; " title="Go to previous page 'Cue'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_delay/es/1.1';" title="Go to next page 'Delay'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/f3de5256-51a6-443a-8a44-ab093898018c">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7299/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Comando Default</h1>

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
				</ul>
			</div>

		<p>Esta página describe la sintaxis y cómo usar el comando default.&nbsp;</p>

<p>Para acceder al comando Default presionan las teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;y&nbsp;<span class="hardkey">.</span>&nbsp;en la consola.<br>
Default está ahora en&nbsp;<a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">línea de comandos</a>.</p>

<div class="cl_input">Default</div>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando default puedes fijar los valores por defecto de todos los atributos</p>

<ul>
	<li>de los aparatos</li>
	<li>de los tipos de preset</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>1. Establece los valores por defecto de todos los atributos de los aparatos.</p>

<div class="cl_input">Fixture 1 Default</div>

<p>2. Establece los valores por defecto de todos los atributos de un tipo de preset para los aparatos seleccionados en la&nbsp; <a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a>.</p>

<div class="cl_input">Default PresetType "POSITION"</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que quieres fijar los valores por defecto de todos los atributos del aparato 1.</p>

<p>Hay tres maneras de hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">.</span> (=Default) y luego selecciona el aparato 1 en la vista de aparatos.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">.</span> (=Default).</p>

<p>c) Selecciona el aparato 1 en la vista de aparatos y presiona&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">.</span> (=Default) <span class="hardkey">Please</span>.</p>

<p><img alt="" src="/Media/Image/Dot2_Commands_Default01_1-0.PNG"></p>

<p>Se han fijado los valores por defecto para todos los atributos del aparato 1.<br>
Todos los atributos del aparato 1 están activos en el programador.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que quieres fijar los valores por defecto de los atributos del tipo de preset, para el aparato actualmente seleccionado.</p>

<p>Hay tres maneras de hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">.</span> (=Default) y pulsa&nbsp;<span class="softkey">Posición</span>&nbsp;en la&nbsp;<a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">Barra Tipo de Preset</a>.</p>

<p>b) Presiona&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">.</span> (=Default) <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Preset</span> (=PresetType) <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>c) Presiona&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">.</span> (=Default) <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Preset</span> (=PresetType) y escribe&nbsp;<span class="syntax">Position</span>&nbsp;en la línea de comandos con el teclado virtual.</p>

<p>Se han fijado los valores por defecto de los atributos del tipo de preset posición para todos los aparatos seleccionados.<br>
Los valores están activos en el programador.&nbsp;</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/204e781e-986f-4c9a-8af9-0022186dc7aa">Tecla MA</a></li>
	<li><a href="/Topic/7db985ea-89d5-4825-8469-42e3c4d43220">Tecla [dot] (punto)</a></li>
	<li><a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">Barra Tipo de Preset</a></li>
	<li><a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">¿Qué es el Programador?</a></li>
	<li><a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f3de5256-51a6-443a-8a44-ab093898018c">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_cue/es/1.1'; " title="Go to previous page 'Cue'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_delay/es/1.1';" title="Go to next page 'Delay'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7299/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
