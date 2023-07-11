---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/Key_Store/es/1.2'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="fe86f610-db19-46d2-9476-2cdea338091b">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Speed/es/1.2'; " title="Go to previous page 'Speed'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Thru/es/1.2';" title="Go to next page 'Thru'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/fe86f610-db19-46d2-9476-2cdea338091b">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13839/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Tecla Store</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Funcionalidad Avanzada</a>
						</li>
				</ul>
			</div>

		<p>La tecla&nbsp;<span class="hardkey">Store</span>&nbsp;se utiliza cuando necesitas grabar (almacenar) algo.</p>

<p>Grabas el contenido de tu programador, que grabas depende de que presionas o pulsas después de&nbsp;<span class="hardkey">Store</span>.&nbsp;</p>

<p>Aquí tienes algunos ejemplos:</p>

<p><span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">1</span> <span class="hardkey">Please</span></p>

<p>Esto grabará los valores activos en tu programador en la cue número uno del ejecutor principal.</p>

<p><span class="hardkey">Store</span> <span class="softkey">Color</span> <span class="softkey">Pool Button 1</span></p>

<p>Esto grabará tus valores activos de color en el preset de color número 1.</p>

<p><span class="hardkey">Store</span> <span class="hardkey">Preset</span> <span class="hardkey">4</span> <span class="hardkey">.</span> <span class="hardkey">1</span> <span class="hardkey">Please</span></p>

<p>Grabará el preset número uno del tipo de preset cuatro (normalmente color cuando usas aparatos móviles).</p>

<p>&nbsp;</p>

<p>Cuando grabas algo en un lugar que ya contenga algo, la consola te preguntará qué quieres hacer. Se muestran las siguientes opciones:</p>

<p>Mezclar&nbsp;añadirá los valores al destino.</p>

<p><strong>Eliminar</strong>&nbsp;no grabará tus valores activos, pero eliminará cualquier valor ya existente.</p>

<p><strong>Sobrescribir</strong>&nbsp;grabará tus valores activos y eliminará el resto de valores.</p>

<p>Crear segunda cue&nbsp;grabará tus valores activos en una nueva segunda cue (esta opción aparece solo cuando grabas algo en un cuelist que tiene una sola cue)</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Funcionalidad Avanzada</h2>

<p>Manteniendo presionadas las teclas <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;y <span class="hardkey">Store</span>&nbsp;obtendrás el&nbsp;<a href="/Topic/71028c8f-b421-4426-9c6f-19a0ee7a09ec">Comando StoreLook</a>. Cuando grabas una cue con StoreLook entonces grabas los valores de dimmer actuales para todos los aparatos en la consola. Esto también grabará todos los atributos para los aparatos con valores de dimmer por encima de 0. Así que no sólo tus valores activos en el programador sino también todos los valores de dimmer y atributos para aparatos con salida de dimmer.</p>

<p><span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>+<span class="hardkey">Store</span>&nbsp;(Así obtienes el comando StoreLook)&nbsp;<span class="hardkey">Cue</span> <span class="hardkey">1</span> <span class="hardkey">Please</span></p>

<p>Crea la cue número uno con todos los atributos de los aparatos con dimmer por encima de 0 y todos los valores de dimmer (incluso los que tienen 0%) en el ejecutor principal.</p>

<p>Cuando grabas utilizando StoreLock también obtienes una cue protegida. Lee más sobre la protección de cues en&nbsp;<a href="/Topic/511081dd-5ffb-4aaa-8d09-a0859b0d0a19">Cómo trabajar con&nbsp;Cues</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Links relacionados</h2>

<p><a href="/Topic/97af99ef-e454-442e-9abc-5b71bf8cc974">Comando Store</a></p>

<p><a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">¿Qué es el Programador?</a></p>

<p><a href="/Topic/71028c8f-b421-4426-9c6f-19a0ee7a09ec">Comando StoreLook</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="fe86f610-db19-46d2-9476-2cdea338091b">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Speed/es/1.2'; " title="Go to previous page 'Speed'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Thru/es/1.2';" title="Go to next page 'Thru'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13839/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
