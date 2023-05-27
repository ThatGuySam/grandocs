---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_unpark/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2e6967bb-9452-47a7-a8e5-be04c7b51ecd">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_top/es/1.1'; " title="Go to previous page 'Top'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_update/es/1.1';" title="Go to next page 'Update'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/2e6967bb-9452-47a7-a8e5-be04c7b51ecd">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/6749/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Comando Unpark</h1>

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

		<p>Esta página describe la sintaxis y cómo usar el comando<strong>&nbsp;</strong>unpark (des-aparcar/des-congelar/des-pausar).</p>

<p>Para acceder al comando Unpark&nbsp;presiona la tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;+ la tecla pequeña&nbsp;<span class="hardkey">Go+</span>&nbsp;(=Unpark) en la consola.<br>
Unpark&nbsp;está en la&nbsp;<a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">línea de comandos</a>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando Unpark, puedes unpark&nbsp;(des-aparcar/des-congelar/des-pausar)&nbsp;canales DMX parkeados anteriormente.</p>

<ul>
	<li>de un aparato</li>
	<li>de los atributos de un tipo de preset para una selección de aparatos.</li>
</ul>

<div class="tip">Los canales Parkeados se muestran con un fondo azul en la&nbsp;<a href="/Topic/2f939332-43b1-44f0-9a0e-3121d5083e70">Vista DMX</a>.</div>

<div class="tip">Para Unpark todos los canales DMX parkeados anteriormente abre la&nbsp;<a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">ventana Tools</a>.</div>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>1. Unpark un aparato previamente parkeado.</p>

<div class="cl_input">Unpark Fixture 1</div>

<p>2. Unpark un canal DMX previamente parkeado.</p>

<div class="cl_input">Unpark Dmx 1.34</div>

<p>3. Unpark atributos de un tipo de preset para la actual selección de aparatos.</p>

<div class="cl_input">Unpark PresetType Dimmer</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que quieres unpark el fixture 1 parkeado previamente.</p>

<p>Hay dos maneras para hacer esto:</p>

<p>a) Presiona la tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;+ la tecla pequeña de&nbsp;<span class="hardkey">Go+</span>&nbsp;(=Unpark) y selecciona el aparato 1 en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a>.</p>

<p>b) Presiona la tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;+&nbsp;la tecla pequeña de&nbsp;<span class="hardkey">Go+</span>&nbsp;(=Unpark)&nbsp;<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Please</span>.</p>

<p>Aparato 1 está&nbsp;unparked.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que quieres unpark el canal DMX 1.34 parkeado previamente</p>

<p>Hay dos maneras para hacer esto:</p>

<p>a)&nbsp;&nbsp;Presiona las tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;+&nbsp;la tecla pequeña de&nbsp;<span class="hardkey">Go+</span>&nbsp;(=Unpark) y pulsa en el canal DMX 1.34 en la&nbsp;<a href="/Topic/2f939332-43b1-44f0-9a0e-3121d5083e70">Vista DMX</a>.</p>

<p>b)&nbsp;&nbsp;Presiona las tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;+&nbsp;la tecla pequeña de&nbsp;<span class="hardkey">Go+</span>&nbsp;(=Unpark)&nbsp;<span class="hardkey">DMX</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">.</span>&nbsp;<span class="hardkey">3</span>&nbsp;<span class="hardkey">4</span>&nbsp;<span class="hardkey">Please</span>.</p>

<p>El canal DMX 1.34 está unpark..</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Ejemplo 3</h2>

<p>Supongamos que quieres unpark los atributos de dimmer parkeados previamente para la selección actual de aparatos.</p>

<p>Hay dos maneras para hacer esto:</p>

<p>a)&nbsp;Presiona las tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;+&nbsp;la tecla pequeña de&nbsp;<span class="hardkey">Go+</span>&nbsp;(=Unpark) y pulsa&nbsp;<span class="softkey">Dimmer</span>&nbsp;en la&nbsp;<a href="/Topic/60e350ef-d825-4072-a644-ed2430d82522">barra tipo de preset</a>.</p>

<p>b)&nbsp;Presiona las tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;+&nbsp;la tecla pequeña de&nbsp;<span class="hardkey">Go+</span>&nbsp;(=Unpark)&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;+&nbsp;<span class="hardkey">Preset</span>&nbsp;e introduce la palabra&nbsp;<span class="syntax">Dimmer</span>&nbsp;en la línea de comandos, Pulsa&nbsp;<span class="softkey">Enter</span>.</p>

<p>Se realiza unpark sobre los atributos de dimmer parkeados previamente</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">Ventana Tools</a></li>
	<li><a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista Aparatos</a></li>
	<li><a href="/Topic/2f939332-43b1-44f0-9a0e-3121d5083e70">Vista DMX</a></li>
	<li><a href="/Topic/3156c266-1baa-4627-91b7-1cb1273bdab6">Tecla Go+ Key (tecla pequeña)</a></li>
	<li><a href="/Topic/204e781e-986f-4c9a-8af9-0022186dc7aa">Tecla MA</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2e6967bb-9452-47a7-a8e5-be04c7b51ecd">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_top/es/1.1'; " title="Go to previous page 'Top'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_update/es/1.1';" title="Go to next page 'Update'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/6749/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
