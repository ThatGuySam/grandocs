---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_if/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f0c1544b-bbc8-4273-87eb-84a35b970063">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_help/es/1.1'; " title="Go to previous page 'Help'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_IfOutput/es/1.1';" title="Go to next page 'IfOutput'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/f0c1544b-bbc8-4273-87eb-84a35b970063">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7301/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Comando If</h1>

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

		<p>Esta página describe la sintaxis y cómo usar el comando If.</p>

<p>Para acceder al comando If presiona las teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png" style="height:auto">&nbsp;</span>&nbsp;+&nbsp;<span class="hardkey">If</span>&nbsp;en la consola.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando If puedes por ejemplo:</p>

<ul>
	<li>deseleccionar aparatos de la selección actual si no están en un grupo.</li>
	<li>limitar el <a href="/Topic/05dfd246-0945-44e5-90a5-402818b1aaed">comando clone</a>&nbsp;y clonar solo los aparatos almacenados en un ejecutor.</li>
	<li>limitar el <a href="/Topic/8cc291a9-2753-42f0-9ead-dc12613d80b0">comando delete</a>&nbsp;y eliminar solo un aparato de una cue.</li>
	<li>seleccionar aparatos solo si no están solapados.</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>1. Deseleccionar aparatos de la selección actual si no están en el grupo 1</p>

<div class="cl_input">If Group 1</div>

<p>2. Limitar el comando clone.</p>

<div class="cl_input">Clone Fixture 33 If Executor 1</div>

<p>3. Limitar el comando delete.</p>

<div class="cl_input">Delete Cue 3 If Fixture 1</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que quieres deseleccionar los aparatos actualmente seleccionados si no están almacenados en el grupo 1.</p>

<p>Presiona &nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png" style="height:auto"></span>&nbsp;+&nbsp;<span class="hardkey">If</span> <span class="hardkey">Group</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>Se han deseleccionado todos los aparatos que no están almacenados en el grupo 1.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que quieres clonar el aparato 1 sólo en el ejecutor 2, porque necesitas algunos aparatos más para la luz del actor.</p>

<p>Presiona&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">Copy</span> (= Clone) <span class="hardkey">Fixture</span> <span class="hardkey">1</span>&nbsp;<span class="hardkey">At</span> <span class="hardkey">33</span> <span class="hardkey">Thru</span> <span class="hardkey">35</span>&nbsp;&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png" style="height:auto"></span>&nbsp;+&nbsp;<span class="hardkey">If</span> y el respectivo botón ejecutor&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp; <span class="hardkey">Please</span>.</p>

<p>La consola te preguntará para <a href="/Topic/d7d95a17-f797-4bab-b65c-3feb192bf1f3">elegir un método de clonación</a>.</p>

<p>Se ha clonado el Aparato 1 con los Aparatos del 33 al 35 sólo en el ejecutor 1</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Ejemplo 3</h2>

<p>Supongamos que quieres borrar sólo el aparato 1 de la cue 2 del ejecutor principal.</p>

<p>Presiona&nbsp;<span class="hardkey">Delete</span> <span class="hardkey">2</span> (=Cue 2) &nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png" style="height:auto"></span>&nbsp;+&nbsp;<span class="hardkey">If</span> <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>Se ha eliminado el Aparato 1 de la Cue 2 del ejecutor principal.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Ejemplo 4</h2>

<p>Supongamos que quieres seleccionar los aparatos sólo si están en el grupo 1 (front truss) o el grupo 2 (wash lights).</p>

<p>Presiona&nbsp;<span class="hardkey">Group</span> <span class="hardkey">1</span>&nbsp;&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png" style="height:auto"></span>&nbsp;+&nbsp;<span class="hardkey">If</span> <span class="hardkey">Group</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>Se seleccionan en la vista de aparatos todos los que están solapados en los grupos 1 y 2.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/8a9b3abb-3119-443d-a55e-36b89b0bf73c">Tecla If</a></li>
	<li><a href="/Topic/05dfd246-0945-44e5-90a5-402818b1aaed">Comando Clone</a></li>
	<li><a href="/Topic/8cc291a9-2753-42f0-9ead-dc12613d80b0">Comando Delete</a></li>
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f0c1544b-bbc8-4273-87eb-84a35b970063">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_help/es/1.1'; " title="Go to previous page 'Help'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_IfOutput/es/1.1';" title="Go to next page 'IfOutput'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7301/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
