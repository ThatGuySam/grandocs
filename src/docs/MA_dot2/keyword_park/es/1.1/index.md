---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_park/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="4f64e293-f606-4365-8813-71c3f60ffc9b">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_page/es/1.1'; " title="Go to previous page 'Page'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_pause/es/1.1';" title="Go to next page 'Pause'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/4f64e293-f606-4365-8813-71c3f60ffc9b">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/6518/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Comando Park</h1>

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

		<p>Esta página describe la sintaxis y cómo usar el comando<strong>&nbsp;</strong>Park.</p>

<p>Para acceder al comando Park, presiona las teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) en la consola<br>
Park está en la&nbsp;<a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">Línea de Comandos</a>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando Park, puedes park (pausar / aparcar / congelar /&nbsp;parkear)</p>

<ul>
	<li>los valores actuales de un aparato</li>
	<li>un valor específico de un aparato</li>
	<li>los valores de un tipo de preset de una selección de aparatos.</li>
	<li>un canal DMX específico.</li>
</ul>

<div class="tip">Los canales DMX Parkeados (Parked) se muestran con un fondo azul en la&nbsp;<a href="/Topic/2f939332-43b1-44f0-9a0e-3121d5083e70">Vista DMX</a></div>

<div class="tip">Si quieres unpark (des-pausar / des-aparcar / des-congelar / des-parkear) canales DMX abre la&nbsp;<a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">Ventana Tools</a></div>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>1. Park los valores actuales de un aparato.</p>

<div class="cl_input">Park Fixture 1</div>

<p>2. Park todos los atributos del aparato 1 al 100%.</p>

<div class="cl_input">Park Fixture 1 At 100</div>

<p>3. Park los valores del tipo de preset dimmer de la selección actual de aparatos.</p>

<div class="cl_input">Park PresetType Dimmer</div>

<p>4. Park un canal DMX específico.</p>

<div class="cl_input">Park DMX 1.1</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que quieres Park los valores actuales del aparato 1.</p>

<p>Hay dos maneras de hacer esto:</p>

<p>a) Presiona las teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) y selecciona el aparato 1 en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a></p>

<p>b) Presiona las teclas <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que quieres Park todos los atributos del aparato 1 al 100%.</p>

<p>Presiona las teclas <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>.</p>

<p>Se han Parkeado todos los atributos del aparato 1 al 100%.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Ejemplo 3</h2>

<p>Supongamos que quieres Park todos los valores de dimmer de la selección actual de aparatos.</p>

<p>Hay dos maneras de hacer esto:</p>

<p>a) Presiona las teclas <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) y pulsa&nbsp;<span class="softkey">Dimmer</span>&nbsp;en la&nbsp;<a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">Barra tipo de preset</a></p>

<p>b) Presiona las teclas <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Preset</span> (=PresetType) e introduce en la línea de comandos la palabra&nbsp;<span class="syntax">Dimmer</span>. Pulsa&nbsp;<span class="softkey">Enter</span>.</p>

<p>Se han Parkeado todos los valores de dimmer de la selección actual de aparatos.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Ejemplo 4</h2>

<p>Supongamos que quieres Park el canal DMX 1.2</p>

<p>Hay dos maneras de hacer esto:</p>

<p>a) Presiona las teclas <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) y pulsa el canal DMX 1.2 en la&nbsp;<a href="/Topic/2f939332-43b1-44f0-9a0e-3121d5083e70">Vista DMX</a>.</p>

<p>b) Presiona las teclas <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Pause</span> (=Park) <span class="hardkey">DMX</span> <span class="hardkey">1</span> <span class="hardkey">.</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>Se ha Parkeado el canal DMX 1.2.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/2f939332-43b1-44f0-9a0e-3121d5083e70">Vista DMX</a></li>
	<li><a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista Aparatos</a></li>
	<li><a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">Vista Tipo de Preset</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="4f64e293-f606-4365-8813-71c3f60ffc9b">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_page/es/1.1'; " title="Go to previous page 'Page'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_pause/es/1.1';" title="Go to next page 'Pause'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/6518/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
