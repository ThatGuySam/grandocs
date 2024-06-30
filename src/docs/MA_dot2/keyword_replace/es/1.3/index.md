---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_replace/es/1.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="a1cb6158-ef18-4682-93a0-68f2761e4808">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_remove/es/1.3'; " title="Go to previous page 'Remove'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_select/es/1.3';" title="Go to next page 'Select'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/a1cb6158-ef18-4682-93a0-68f2761e4808">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/16831/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Comando Replace</h1>

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

		<p>Esta página describe la sintaxis y cómo usar el comando replace.</p>

<p>Para acceder al comando replace pulse las teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;y&nbsp;<span class="hardkey">Move</span>&nbsp;en la consola.<br>
Replace&nbsp;está ahora en la línea de comandos.</p>

<p>Si presionas <span class="hardkey">Move</span>&nbsp;después que&nbsp;<span class="syntax">Replace</span>&nbsp;esté en la línea de comandos, el comando será&nbsp;<span class="syntax">With</span>.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando Replace puedes reemplazar&nbsp;</p>

<ul>
	<li>Presets&nbsp;con&nbsp;Presets</li>
	<li>Aparatos con Aparatos</li>
	<li>Grupos con Grupos</li>
</ul>

<p>para un ejecutor o en todo un&nbsp;show.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>1. Reemplazar un preset si se utiliza en un ejecutor.</p>

<div class="cl_input">Replace Preset 1 With Preset 2 If ExecButton 1.2</div>

<p>2. Reemplazar un Aparato</p>

<div class="cl_input">Replace Fixture 1 With Fixture 2</div>

<p>3. Reemplazar un Grupo</p>

<div class="cl_input">Replace Group 1 With Group 2</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que quieres reemplazar el preset de posición&nbsp;4 "Singer" con el preset de posición 5&nbsp;"Piano" si es utilizado en el ejecutor 2.</p>

<ol>
	<li>Abre el pool de presets de posición.</li>
	<li>Presiona&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> + <span class="hardkey">Move</span> (=Replace), pulsa en&nbsp;<span class="softkey">preset 4</span>, presiona&nbsp;<span class="hardkey">Move</span> (=With), pulsa en&nbsp;<span class="softkey">preset 5</span>, presiona&nbsp;<span class="hardkey">If</span>&nbsp;y el botón ejecutor&nbsp;2 <span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span> <span class="hardkey">Please</span>.</li>
</ol>

<div class="cl_input">Replace Preset 2.4 With Preset 2.5 If ExecButton 1.2</div>

<p>La consola te presentará un resumen sobre cuantos objetos cambiarían y preguntará para confirmar la operación de reemplazo.</p>

<p>Para aplicar y abandonar la ventana pulsa&nbsp;<span class="softkey">Ok</span>.<br>
Para aplicar y obtener un informe detallado pulsa&nbsp;<span class="softkey">Ok Crear&nbsp;Informe</span>.</p>

<p>Se reemplaza el Preset 4 "Singer" con el&nbsp;preset 5 "Piano" si se ha utilizado en el ejecutor 2.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que quieres reemplazar el aparato 1 con el aparato 2 si se utiliza en el ejecutor 1.</p>

<p>Presiona&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> + <span class="hardkey">Move</span> (=Replace) <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Move</span> (=With) <span class="hardkey">Fixture</span> <span class="hardkey">2</span> <span class="hardkey">If</span>, presiona el botón ejecutor&nbsp;1 <span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>.</p>

<div class="cl_input">Replace Fixture 1 With Fixture 2 If ExecButton 1.1</div>

<p>La consola te presentará un resumen sobre cuantos objetos cambiarían y preguntará para confirmar la operación de reemplazo.<br>
Para aplicar y abandonar la ventana pulsa&nbsp;<span class="softkey">Ok</span>.<br>
Para aplicar y obtener un informe detallado pulsa&nbsp;<span class="softkey">Ok Crear&nbsp;Informe</span>.</p>

<p>Se reemplaza el aparato 1 con el aparatos 2 si se ha utilizado en ejecutor 1.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Ejemplo 3</h2>

<p>Supongamos que quieres reemplazar el grupo 1 con el grupo 2.</p>

<div class="important"><strong>Importante:</strong><br>
Reemplazar grupos no reemplazará el grupo en la vista de grupos.<br>
Esto reemplazará en el show los aparatos usados en el grupo. Es lo mismo que reemplazar un aparato con otro.</div>

<p>Hay dos maneras para hacer esto:</p>

<p>a) Presiona&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> + <span class="hardkey">Move</span> (=Replace) <span class="hardkey">Group</span> <span class="hardkey">1</span> <span class="hardkey">Move</span> (=With) <span class="hardkey">Group</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>b) Abre la <a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">vista de grupos</a>&nbsp;y presiona&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> + <span class="hardkey">Move</span> (=Replace), pulsa en&nbsp;<span class="softkey">Group 1</span>, presiona&nbsp;<span class="hardkey">Move</span> (=With), pulsa en&nbsp;<span class="softkey"> Group 2</span> <span class="hardkey">Please</span>.</p>

<p>La consola te presentará un resumen sobre cuantos objetos cambiarían y preguntará para confirmar la operación de reemplazo.<br>
Para aplicar y abandonar la ventana pulsa&nbsp;<span class="softkey">Ok</span>.<br>
Para aplicar y obtener un informe detallado pulsa&nbsp;<span class="softkey">Ok Crear&nbsp;Informe</span>.</p>

<p>Se reemplazan todos los aparatos almacenados en el grupo 1 con los aparatos almacenados en el grupo 2.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Ejemplo 4</h2>

<p>Supongamos que quieres eliminar el aparato 1 de todos los lugares donde está almacenado (grupos, presets y ejecutores).</p>

<p>Presiona&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> + <span class="hardkey">Move</span> (=Replace) <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Move</span> (=With) <span class="hardkey">Please</span>.</p>

<p>La consola te presentará un resumen sobre cuantos objetos cambiarían y preguntará para confirmar la operación de reemplazo.<br>
Para aplicar y abandonar la ventana pulsa&nbsp;<span class="softkey">Ok</span>.<br>
Para aplicar y obtener un informe detallado pulsa&nbsp;<span class="softkey">Ok Crear&nbsp;Informe</span>.</p>

<p>Se ha eliminado el Aparato 1 de todos los lugares del show donde estaba almacenado.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/f12e11a4-5376-4abb-b023-09c75a033a92">Tecla Move</a></li>
	<li><a href="/Topic/a28e845d-664a-4bff-8f81-d6039857b1de">Vista de Grupos</a></li>
	<li><a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">Vista Pool de Presets</a></li>
</ul>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="a1cb6158-ef18-4682-93a0-68f2761e4808">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_remove/es/1.3'; " title="Go to previous page 'Remove'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_select/es/1.3';" title="Go to next page 'Select'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/16831/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
