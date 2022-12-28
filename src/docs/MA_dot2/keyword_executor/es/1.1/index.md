---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_executor/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="956920be-cc03-4323-b261-45a8c7a229d0">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_effect/es/1.1'; " title="Go to previous page 'Effect'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_fade/es/1.1';" title="Go to next page 'Fade'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/956920be-cc03-4323-b261-45a8c7a229d0/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/6806/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Comando Executor</h1>

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

		<p>Esta página describe la sintaxis y cómo usar el comando Executor.</p>

<p>Para acceder al comando Executor presiona&nbsp;<span class="hardkey">Exec</span>&nbsp;en la consola.<br>
Executor está ahora en la&nbsp;<a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">línea de comandos</a>.</p>

<div class="cl_input">Executor</div>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando Executor puedes por ejemplo:</p>

<ul>
	<li>seleccionar todos los aparatos almacenados en un ejecutor.</li>
	<li>eliminar ejecutores del pool de ejecutores y su respectivo botón ejecutor en la consola.</li>
	<li>eliminar cues de un ejecutor.</li>
	<li>ajustar la intensidad de un ejecutor.</li>
	<li>activar un ejecutor.</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>1. Seleccionar todos los aparatos almacenados en un ejecutor.</p>

<div class="cl_input">Executor 1</div>

<p>2. Eliminar ejecutores del pool de ejecutores y su respectivo botón ejecutor en la consola.</p>

<div class="cl_input">Delete Executor 1</div>

<p>3. Eliminar cues de un ejecutor.</p>

<div class="cl_input">Delete Cue 1 Executor 1</div>

<p>4. Ajustar la intensidad de un ejecutor al 50%</p>

<div class="cl_input">Executor 1 At 50</div>

<p>5. Activar un ejecutor con un GO.</p>

<div class="cl_input">Go Executor 1</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que quieres seleccionar todos los aparatos utilizados en la cue list del executor 1.</p>

<p>Hay dos maneras de hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Exec</span>&nbsp;y pulsa sobre la&nbsp;<span class="softkey">casilla del ejecutor 1</span>.</p>

<p>Todos los aparatos almacenados en la cue list del ejecutor 1 están seleccionados en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a>.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que vas a borrar el ejecutor 1 de la página actual del&nbsp;<a href="/Topic/c1cec312-0cbe-4824-aa2a-1b23a81f9d9f">Pool de Ejecutores</a>.</p>

<p>Hay dos maneras de hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Delete</span> <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Delete</span> <span class="hardkey">Exec</span>&nbsp;y pulsa sobre la&nbsp;<span class="softkey">casilla del ejecutor 1</span>.</p>

<p>El ejecutor 1 queda borrado de la página actual del pool de ejecutores.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Ejemplo 3</h2>

<p>Supongamos que quieres borrar la cue 1 del botón ejecutor 1.</p>

<p>Hay tres maneras diferentes de hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>b) Presiona&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) y pulsa sobre el&nbsp;<span class="softkey">ejecutor 1</span>&nbsp;en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Vista Barra de Ejecutores</a></p>

<p>c) Presiona&nbsp;<span class="hardkey">Delete</span>&nbsp;<span class="hardkey">1</span> (= Cue 1) y presiona el respectivo botón ejecutor&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp;en la consola.</p>

<p>Si un&nbsp;cuelist está almacenado en el ejecutor 1, la consola te preguntará para&nbsp;<a href="/Topic/17e6e949-0ef5-43b4-b7f0-94a4270fc763">Elegir Método Eliminar</a></p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Ejemplo 4</h2>

<p>Supongamos que vas a fijar la intensidad del ejecutor 1 al 50%.</p>

<div class="important">Recuerda que los faders físicos no se mueven.<br>
Para tener control otra vez con el fader debes moverlo hasta la posición del valor actual.</div>

<div class="tip">Para aplicar el valor al ejecutor principal no escribas ningún número de ejecutor, sólo&nbsp;<span class="hardkey">Exec</span>.</div>

<p>Presiona&nbsp;<span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">At</span> <span class="hardkey">50</span> <span class="hardkey">Please</span>.</p>

<p>El ejecutor está ahora al 50 %. Esto es lo mismo que si subes el fader hasta la mitad del recorrido (50%).</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Ejemplo 5</h2>

<p>Vamos a suponer que quieres ejecutar el ejecutor 1 mediante un&nbsp;<a href="/Topic/09fcbb48-813b-45e2-b737-a652eb042d06">Comando Go</a>.</p>

<p>Presiona la tecla pequeña de&nbsp;<span class="hardkey">Go +</span> (=Go ) <span class="hardkey">Exec</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>El ejecutor 1 es ejecutado con un comando GO. Esto es lo mismo que pulsar el botón ejecutor configurado como Go.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/4c551247-c22e-4c8b-a255-c38c1caee863">Tecla Exec</a></li>
	<li><a href="/Topic/5525b66b-92c6-4e03-b351-3976dc15cb5b">Vista Pool de Páginas</a></li>
	<li><a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a></li>
	<li><a href="/Topic/09fcbb48-813b-45e2-b737-a652eb042d06">Comando Go</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="956920be-cc03-4323-b261-45a8c7a229d0">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_effect/es/1.1'; " title="Go to previous page 'Effect'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_fade/es/1.1';" title="Go to next page 'Fade'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/6806/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
