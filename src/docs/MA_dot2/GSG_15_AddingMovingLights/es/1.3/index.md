---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_15_AddingMovingLights/es/1.3'
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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="a0d5edad-6d1a-49f9-a2a5-033547c76596">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_14_ExternalScreen/es/1.3'; " title="Go to previous page '14 - External screen'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_16_ControllingMovingLights/es/1.3';" title="Go to next page '16 - Controlling moving lights'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/a0d5edad-6d1a-49f9-a2a5-033547c76596">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17887/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Guía de Introducción - Añadiendo luces móviles</h1>


		<p>Vamos a añadir algunas luces móviles a nuestro patch. Vamos a añadir 6 unidades de GLP Impression&nbsp;X4&nbsp;en modo "Compressed" y 9 Clay Paky Alpha Profile 700 en modo "Standard Lamp on".</p>

<p>Este es nuestro nuevo plot:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_AddingMovingLights_01_1-0.png"></p>

<p><em>Imagen 1:&nbsp;Plot final</em></p>

<p>Vamos a añadir algunos aparatos juntos.</p>

<p>De nuevo necesitamos acceder a&nbsp;<span class="hardkey">Setup</span>&nbsp;y&nbsp;<span class="softkey">Patch&nbsp;y Lista de Aparatos</span>.</p>

<p>Añadir nuevos aparatos.</p>

<p>En el campo tipo hay un símbolo que necesitas aprender. Son tres puntos blancos verticales. (El icono se llama Ellipsis) Se muestra así:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_AddingMovingLights_02_1-0.png"></p>

<p>Cuando pulsas esto, entonces consigues una lista desplegable.</p>

<p>Si haces esto logras una lista de los tipos de aparatos que ya existen en nuestro show. Cuando añadimos el Cheuvert&nbsp;Colordash Hew 7's, cogimos una copia de la librería de aparatos para nuestro show.</p>

<p>Necesitamos hacer lo mismo con los GLP&nbsp;X4. Pulsa&nbsp;<span class="softkey">Seleccionar otros...</span>&nbsp;y busca las GLPs (Impression X4 – modo “Compressed”). Cuando los hayas encontrado entonces necesitas pulsar&nbsp;<span class="softkey">OK</span> en la esquina superior derecha.</p>

<p>La cantidad debería ser 6.</p>

<p>Necesitamos asignarles un ID de Aparato. Pulsa&nbsp;<span class="softkey">Seleccionar...</span> al lado del campo ID. Esto abre la ventana emergente Selección ID de Aparato. Aquí puedes ver los IDs de aparato ocupados y el nombre de los aparatos que los tienen. Selecciona <span class="softkey">31</span>&nbsp;y pulsa&nbsp;<span class="softkey">OK</span> en la esquina superior derecha.</p>

<p>No hemos tratado el tema del nombre y no lo vamos a hacer ahora. Pero te comentaré algo sobre la acción de poner nombre. Cuando escribes algo por un nombre, das un espacio y luego un número, entonces el resto de los aparatos serán enumerados desde ese número.</p>

<p>También vamos a asignarles un patch. Pulsa el símbolo de los tres puntos en el campo de entrada patch. Esto te permite seleccionar un universo y una dirección. Si sabes la dirección de inicio puedes simplemente teclearla usando el teclado numérico de la consola.</p>

<p>Necesitamos patchear los GLPs en el universe 3 dirección 1. Para ello teclea <strong>3.1.</strong></p>

<p>No vamos a añadir un Offset.</p>

<p>Ahora podemos pulsar el botón&nbsp; <span class="softkey">OK</span> en la esquina superior derecha.</p>

<p>Estos fueron los GLPs. Todavía necesitamos añadir los Clay Pakys.</p>

<p>El proceso es el mismo, así que te daré la información que necesitas:</p>

<ul>
	<li>Clay Paky - Alpha Profile 700 - Standard Lamp on</li>
	<li>9 aparatos</li>
	<li>El primer ID de aparato es el 41</li>
	<li>El patch DMX comenzará en el 4.1</li>
	<li>No Offset</li>
</ul>

<p>Cuando los hayas añadido, puedes dejar la vista Setup de Aparatos pulsando el botón&nbsp;<span class="softkey">Hecho</span>&nbsp;en la esquina superior derecha y&nbsp;<span class="softkey">Aplicar los cambios</span>.&nbsp;</p>

<p>Fíjate en los aparatos extra en la vista de aparatos.</p>

<p>Organiza los nuevos aparatos en la Vista&nbsp;Fixture Layout número 2 según el plot.</p>

<p>En el próximo capítulo vamos a tratar el tema del control de todas las características extra que hemos conseguido.</p>


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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="a0d5edad-6d1a-49f9-a2a5-033547c76596">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_14_ExternalScreen/es/1.3'; " title="Go to previous page '14 - External screen'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_16_ControllingMovingLights/es/1.3';" title="Go to next page '16 - Controlling moving lights'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17887/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
