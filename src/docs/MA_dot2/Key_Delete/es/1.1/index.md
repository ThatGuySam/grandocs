---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/Key_Delete/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="02aad508-ad75-4c9d-b8d3-5e65dcc1a6f6">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Cue/es/1.1'; " title="Go to previous page 'Cue'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_DMX/es/1.1';" title="Go to next page 'DMX'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/02aad508-ad75-4c9d-b8d3-5e65dcc1a6f6">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7703/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Tecla Delete</h1>

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

		<p>La tecla&nbsp;<span class="hardkey">Delete</span>&nbsp;se utiliza para eliminar algo en tu show.</p>

<p>&nbsp;Ej. Quieres eliminar el grupo 2:</p>

<p><span class="hardkey">Delete</span> <span class="hardkey">Group</span> <span class="hardkey">2</span> <span class="hardkey">Please</span></p>

<p>Si eliminas una cue en medio de un cuelist te aparecerá una ventana que te permite elegir como deberían verse afectadas el resto de cues. Las opciones son&nbsp;<span class="softkey">Eliminar Normal</span>&nbsp;o&nbsp;<span class="softkey">Eliminar cue only</span>. La opción "Eliminar Normal" es posible que cambie como se verán las siguientes cues y la opción "Eliminar cue only" no afectará a las siguientes cues.</p>

<p>Ej. En tu cuelist principal no necesitas más la cue número 3, pero necesitas que la cue número 4 continúe igual:</p>

<p><span class="hardkey">Delete</span> <span class="hardkey">Cue</span> <span class="hardkey">3</span> <span class="hardkey">Please</span>&nbsp;y selecciona la opción&nbsp;<span class="softkey">Eliminar cue only</span>.</p>

<p>Si necesitas eliminar una cue en otro cuelist entonces necesitas especificar cuál.</p>

<p>Ej. Quieres eliminar la cue 5 en el cuelist del ejecutor 3 y que los cambios se arrastren (Tracking) a la cue 6:</p>

<p><span class="hardkey">Delete</span> <span class="hardkey">Cue</span> <span class="hardkey">5</span>&nbsp;y presiona una de las teclas asociadas con el ejecutor 3. La consola te mostrará una ventana con las opciones&nbsp;<span class="softkey">Eliminar Normal</span>&nbsp;o&nbsp;<span class="softkey">Eliminar cue only</span>. Pulsa&nbsp;<span class="softkey">Eliminar Normal</span>.</p>

<p>&nbsp;</p>

<p>Si quieres entender más sobre el tracking &nbsp;y como los valores se ven afectados por el paso de las cues, puedes leer sobre el tracking&nbsp;<a href="/Topic/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">aquí</a>&nbsp;o siguiendo los diferentes links al final de esta página.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Funcionalidad Avanzada</h2>

<p>Presionando la tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;junto con la tecla&nbsp;<span class="hardkey">Delete</span>&nbsp;tienes acceso al&nbsp;<a href="/Topic/fd313a7b-20a4-4cea-894b-68eb4cb4a61c">Comando Remove</a></p>

<p>Se utiliza si necesitas remover valores almacenados en una cue.</p>

<p>Ej. Quieres remover los valores de dimmer del aparato 4 de la cue número 2.</p>

<p><span class="hardkey">Fixture</span> <span class="hardkey">4</span> <span class="hardkey">Please</span>&nbsp; Esto selecciona el aparato número 4 para que sólo se vea afectado este aparato.</p>

<p><span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>+<span class="hardkey">Delete</span>&nbsp;(te da acceso al comando Remove) ahora presiona&nbsp;<span class="softkey">Dimmer</span>&nbsp; en la barra Tipo de Preset en la parte derecha de la pantalla 1 - Esto proporciona el valor de dimmer especial "Remove" (mira la vista de Aparatos en modo Hoja)</p>

<p><span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">Please</span> - Esto remueve los valores de dimmer de la cue 2 dejando los valores arrastrados por el tracking desde cues anteriores a la 2.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Links relacionados</h2>

<p><a href="/Topic/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">¿Qué es Tracking?</a></p>

<p><a href="/Topic/fd313a7b-20a4-4cea-894b-68eb4cb4a61c">Comando Remove</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="02aad508-ad75-4c9d-b8d3-5e65dcc1a6f6">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Cue/es/1.1'; " title="Go to previous page 'Cue'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_DMX/es/1.1';" title="Go to next page 'DMX'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7703/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
