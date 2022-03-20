---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/Key_Copy/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="4d177693-cdbd-4c33-a97d-3ca8a4740ecb">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Clear/es/1.1'; " title="Go to previous page 'Clear'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Cue/es/1.1';" title="Go to next page 'Cue'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/4d177693-cdbd-4c33-a97d-3ca8a4740ecb">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14656/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Tecla Copy</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Funcionalidad Avanzada</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Link relacionado</a>
						</li>
				</ul>
			</div>

		<p>La tecla <span class="hardkey">Copy</span>&nbsp;se utiliza para copiar algo desde una localización a otra localización (válida).</p>

<p>Ej. Quieres copiar el grupo 1 al grupo 2</p>

<p><span class="hardkey">Copy</span> <span class="hardkey">Group</span> <span class="hardkey">1</span> <span class="hardkey">At</span> <span class="hardkey">2</span> <span class="hardkey">Please</span></p>

<p>Si quieres hacer una copia de la cue 2 a una nueva&nbsp;cue 9 en el cuelist principal puedes utilizar las siguientes teclas:</p>

<p><span class="hardkey">Copy</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">At</span> <span class="hardkey">9</span> <span class="hardkey">Please</span>&nbsp;esto te mostrará una ventana de selección en la pantalla 1 donde debes elegir&nbsp;<span class="softkey">Copiar</span>.</p>

<p>Si necesitas copiar la cue número 2 del cuelist principal a un ejecutor diferente tienes que especificar el ejecutor. El mismo ejemplo pero copiando para el ejecutor número 4:</p>

<p><span class="hardkey">Copy</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> ​<span class="hardkey">At</span>&nbsp;<span class="hardkey">9</span> <span class="hardkey">Exec</span> <span class="hardkey">4</span> <span class="hardkey">Please</span>, misma ventana de selección donde debes elegir <span class="softkey">Copiar</span>.</p>

<p>También puedes utilizar rangos.</p>

<p><span class="hardkey">Copy</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">Thru</span> <span class="hardkey">4</span> <span class="hardkey">At</span> <span class="hardkey">Cue</span> <span class="hardkey">9</span> <span class="hardkey">Please</span>&nbsp;creará las cues 9, 10 y 11 (si tienes las cues 2, 3 y 4). La Cue 9 será la misma que la 2, 10 como la 3 y 11 como la 4.</p>

<p>Si copias un rango desde un origen a un destino, entonces creas varias cues iguales.</p>

<p>Ej. copiando la cue 2 a la cue 15, 16 y 17 crearás tres copias de la cue 2 situadas en las cues 15, 16 y 17. Estas son las teclas que debes presionar:</p>

<p><span class="hardkey">Copy</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">at</span> <span class="hardkey">1</span> <span class="hardkey">5</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">7</span> <span class="hardkey">Please</span>&nbsp;otra vez necesitarás seleccionar copiar en la ventana de selección.</p>

<p>&nbsp;</p>

<p>Si tratas de copiar información a una localización que ya existe tienes dos opciones: Sobrescribir o Mezclar</p>

<p>Sobrescribir eliminará los valores actuales. Mezclar añadirá los nuevos valores y sobrescribiendo los valores existentes.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Funcionalidad Avanzada</h2>

<p>Si presionas las teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;y&nbsp;<span class="hardkey">Copy</span>&nbsp;obtienes el&nbsp;<a href="/Topic/05dfd246-0945-44e5-90a5-402818b1aaed">Comando Clone</a>.</p>

<p>Este comando se utiliza para hacer que un aparato haga exactamente lo mismo que hace otro aparato. Si el aparato número 1 es utilizado en varios grupos, presets y cuelist, puede ser un problema si necesitas que el aparato número 5 haga exactamente las mismas cosas. Tendrias que manualmente revisar donde se utiliza el aparato 1 y reprogramar el aparato 5 para que haga lo mismo. La función clonar puede ayudarte con esto.</p>

<p>Cuando clonas algo se te presentan varias opciones en la pantalla 1.</p>

<ul>
	<li>'Cancelar' se utiliza para cancelar la operación de Clonar.</li>
	<li>'Baja Prio Mezclar' es la opción por defecto. Significa Mezclar con Baja Prioridad. Sólo clonará los valores del aparato 1 cuando hayan valores &nbsp;y cuando el aparato 5 no tenga ningún valor. De esta manera no destruimos ninguna programación existente para el aparato 5.</li>
	<li>'Mezclar' clonará todos los valores del aparato 1 en el aparato 5. Si el aparato 5 tiene algo programado donde el aparato 1 también, entonces los valores serán los mismos que el aparato 1. Si el aparato 5 tiene algo programado que el aparato 1 no tiene, entonces se mantendrán los valores.</li>
	<li>'Sobrescribir' eliminará todos los valores existentes para el aparato 5 y clonará los valores del aparato 1.</li>
</ul>

<p>Aquí tienes varios ejemplos:</p>

<p>En todo tu show necesitas que el aparato 5 sea una copia del aparato 1:</p>

<p><span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>+<span class="hardkey">Copy</span>&nbsp;(te muestra el comando Clone)&nbsp;<span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">At</span> <span class="hardkey">5</span> <span class="hardkey">Please</span>&nbsp;ahora selecciona&nbsp;<span class="softkey">Sobrescribir</span>&nbsp;en la pantalla 1.</p>

<p>En el ejecutor 3 necesitas que el aparato 5 sea una copia del aparato 1:</p>

<p><span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>+<span class="hardkey">Copy</span>&nbsp;(te muestra el comando Clone)&nbsp;<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">If</span> <span class="hardkey">Exec</span> <span class="hardkey">3</span>&nbsp;<span class="hardkey">Please</span>&nbsp;ahora selecciona&nbsp;<span class="softkey">Sobrescribir</span>&nbsp;en la pantalla 1.</p>

<p>En el ejecutor 3 necesitas que los aparatos del grupo 2 sean una copia del aparato 1&nbsp;y como no estamos completamente seguros de si los aparatos en el grupo 2 ya han sido utilizados, entonces deberemos seleccionar Mezclar Baja Prioridad.</p>

<p><span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>+<span class="hardkey">Copy</span>&nbsp;(te muestra el comando Clone)&nbsp;<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">Group</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">If</span>&nbsp;<span class="hardkey">Exec</span>&nbsp;<span class="hardkey">3</span>&nbsp;<span class="hardkey">Please</span>&nbsp;ahora selecciona&nbsp;<span class="softkey">Mezclar Baja Prioridad</span>&nbsp;en la pantalla 1.&nbsp;</p>

<p>Existe gran abanico de posibilidades cuando clonas, por favor revisa la descripción del <a href="/Topic/05dfd246-0945-44e5-90a5-402818b1aaed">Comando Clone</a>.&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Link relacionado</h2>

<p><a href="/Topic/6f42e54b-e064-46ad-b3c5-c5341be8e50d">Comando Copy</a></p>

<p><a href="/Topic/05dfd246-0945-44e5-90a5-402818b1aaed">Comando Clone</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="4d177693-cdbd-4c33-a97d-3ca8a4740ecb">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Clear/es/1.1'; " title="Go to previous page 'Clear'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Cue/es/1.1';" title="Go to next page 'Cue'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14656/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
