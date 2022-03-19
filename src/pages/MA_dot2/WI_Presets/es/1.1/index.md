
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="740955a8-3b27-4e50-b35c-7a728c1d9c38">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Groups/es/1.1'; " title="Go to previous page 'Grupos'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Tracking/es/1.1';" title="Go to next page 'Tracking'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/740955a8-3b27-4e50-b35c-7a728c1d9c38">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14269/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>¿Qué son Presets?</h1>


		<p>Los presets se usan para guardar valores para los aparatos en las pools&nbsp;correspondientes a cada tipo de preset además de un pool especial donde puedes guardar todos los valores</p>

<p>Es muy útil cuando quieres volver a usar un valor. Puede ser una posición, color u otra cosa que uses.</p>

<p>Si usas un Preset en una cue no guardas los valores almacenados en el Preset sino un link al mismo. Si actualizas los valores en el Preset tus cues automáticamente usarán los valores actualizados.</p>

<p>Piensa en los presets como cajones donde guardar información sobre valores. Contamos con un baúl para cada tipo de preset que vemos en el lado derecho de la pantalla 1. Y cada baúl tiene un nombre “Dimmer”, “Posición”, “Gobo”, etc.&nbsp;</p>

<p>Ahora puedes meter algo en los cajones de cada baúl (tipo de preset). Si seleccionas un aparato y le das un color, puedes guardarlo en un cajón del baúl del color. Es como escribir una pequeña nota y ponerla dentro de uno de los cajones. Lo que escribes es el número de ID del aparato activo y los valores que has activado.</p>

<p>Entonces, esta información se coloca en el cajón, y se le da un nombre. Si el color era rojo, se denomina “Rojo”. No todos los cajones son etiquetados tan hábilmente. dot2 no sabe cuáles son las diferentes posiciones, así que simplemente las denomina “Posiciones”.</p>

<p>Puedes poner otras notas en el mismo cajón, pero sólo puede haber una nota para cada aparato. El mismo aparato no puede tener una nota que diga “Rojo” y una que diga “Azul” en el mismo cajón. Pero el aparato 1 puede ser “Rojo” y el aparato 2 puede ser “Azul” utilizando el mismo cajón.</p>

<p>Ahora, si seleccionamos un aparato y luego un preset y lo guardamos en una cue, lo que hacemos en realidad es que la cue busque el valor en el cajón. Sólo se guarda esta referencia para el aparato que se ha guardado en esa cue. Esto significa que si más adelante añades más notas para otros aparatos en el mismo cajón, esto no cambia la cue. La cue buscará sólo en el cajón las notas para los aparatos específicos guardados en la cue.</p>

<p>Si cambias los valores escritos en la nota para los aparatos usados, entonces tus cues usarán las valores actualizados. Podría ser que necesitaras cambiar los valores en la nota si el color no era el correcto o si la posición cambia para el cantante o por cualquier otra razón.</p>

<p>Existe un grupo especial de presets llamado ALL en donde podrás grabar en cada uno de ellos todos los valores de diferentes parámetros que necesites.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Links relacionados</h2>

<p><a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">¿Qué son Cues?</a></p>

<p><a href="/Topic/1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">¿Cómo trabajar con presets?</a></p>

<p><a href="/Topic/c8e38ca3-4da4-4a62-b631-099908716e53">Tecla preset</a></p>

<p><a href="/Topic/4e726532-88c5-4bb8-ac83-85baaa66e3f3">Comando preset</a></p>

<p><a href="/Topic/c3fb198e-9577-4dae-981c-601829997529">Vista de preset Pools</a></p>

<p>&nbsp;</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="740955a8-3b27-4e50-b35c-7a728c1d9c38">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Groups/es/1.1'; " title="Go to previous page 'Grupos'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_Tracking/es/1.1';" title="Go to next page 'Tracking'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14269/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	