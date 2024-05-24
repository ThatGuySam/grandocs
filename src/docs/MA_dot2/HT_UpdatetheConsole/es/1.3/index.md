---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/HT_UpdatetheConsole/es/1.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="1771b6fb-3f46-4840-a159-69db6fc031bc">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ht_turnonandoff/es/1.3'; " title="Go to previous page 'Encender y apagar la consola'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_AddAndPatchFixtures/es/1.3';" title="Go to next page 'Añadir aparatos y patch'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/1771b6fb-3f46-4840-a159-69db6fc031bc">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/27823/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Cómo actualizar la consola</h1>


		<p>Puedes actualizar el software de tu consola dot2 de dos maneras diferentes.</p>

<p><br>
La versión actual del software se muestra en la&nbsp;<a href="/Topic/aeea08ec-762b-4fbc-b77b-cb65a68e08ca">Ventana Información de Sistema</a>.</p>

<p><strong>1. Actualizar tu consola vía&nbsp;<span class="hardkey">Setup</span>:</strong></p>

<ol>
	<li>Descarga el último archivo&nbsp;<strong>dot2*.update</strong>&nbsp;en&nbsp;<a href="http://www.ma-dot2.com">www.ma-dot2.com</a>&nbsp;</li>
	<li>Copia el contenido en el directorio raíz de tu stick&nbsp;USB.</li>
	<li>Asegúrate que sólo hay un archivo de actualización en el directorio raíz.</li>
	<li>Introduce el&nbsp;stick&nbsp;USB&nbsp;en la parte trasera de la consola.</li>
	<li>Presiona&nbsp;<span class="hardkey">Setup</span>&nbsp;y pulsa&nbsp;<span class="softkey">Actualización de software</span>&nbsp;en la columna <strong>Consola</strong><br>
	Se abre la&nbsp;<a href="/Topic/aeea08ec-762b-4fbc-b77b-cb65a68e08ca">Actualización vía USB&nbsp;</a>.</li>
	<li>Pulsa&nbsp;<span class="softkey">Actualizar</span>.<br>
	La consola preguntará si quieres salvar el show file (archivo del show).</li>
	<li>Pulsa&nbsp;<span class="softkey">Salvar Showfile</span>.<br>
	La consola copia los archivos de actualización y pregunta si quieres reiniciar ahora.</li>
	<li>Pulsa&nbsp;<span class="softkey">Reiniciar Ahora</span>.<br>
	La consola se reinicia e instala los archivos de actualización.</li>
</ol>

<ul>
	<li>Después de actualizar la consola se reinicia otra vez.</li>
	<li>La consola ha sido actualizada y está lista para ser utilizada.</li>
</ul>

<p><strong>2. Actualizar tu consola vía stick&nbsp;USB&nbsp;Linux:</strong></p>

<ol>
	<li>Descarga el último archivo <strong>dot2*imgz</strong>&nbsp;y el <strong>MA StickMAker</strong>&nbsp;en&nbsp;<a href="http://www.ma-dot2.com/">www.ma-dot2.com</a>.</li>
	<li>Para instalar&nbsp;el&nbsp;MA&nbsp;StickMAker en tu pc, ejecuta el archivo&nbsp;<strong>StickMaker-x.x.x.x.exe</strong>. Serás guiado a través del proceso de instalación.</li>
	<li>Conecta un stick USB a tu PC.</li>
	<li>Para abrir el&nbsp;MA&nbsp;StickMAker haz doble click sobre su icono en el escritorio.</li>
	<li>Selecciona la <strong>unidad USB </strong>y pulsa en los tres puntos para seleccionar el archivo&nbsp;<strong>dot2*imgz.</strong></li>
	<li>Haz click en <strong>Start</strong>. El stick&nbsp;será formateado&nbsp;en formato Linux y se le grabará la imagen.</li>
	<li>Introduce el stick&nbsp;USB formateado&nbsp;en el puerto USB en la parte trasera de la consola.</li>
	<li>Conecta a la consola un monitor externo y un teclado USB.</li>
	<li>Enciende el monitor y luego enciende la consola.</li>
	<li>Presiona el <strong>botón de encendido</strong> en la parte trasera de la consola y presiona <strong>F10</strong> repetidamente hasta que aparezca una solicitud de password en el monitor externo.</li>
	<li>Presiona <strong>Enter.</strong></li>
	<li>Selecciona tu <strong>stick&nbsp;USB</strong> y presiona <strong>Enter</strong>.</li>
	<li>Se abrirá una ventana pop-up preguntando si deseas actualizar la consola o hacer un reset de fábrica.</li>
	<li>Selecciona<strong> Factory Reset&nbsp;</strong>(reset de fábrica).</li>
	<li>La consola se resetea y se reinicia.</li>
	<li>Para completar el reset de fábrica acepta el Acuerdo de Licencia.</li>
	<li>El reset de fábrica se ha completado y la consola te muestra las notas para la release&nbsp;instalada.</li>
	<li>La consola está ahora actualizada y preparada para ser utilizada.</li>
</ol>

<div class="important"><strong>Importante:</strong><br>
Todos los archivos de show&nbsp;y tipos de aparato importados serán eliminados de la unidad interna durante el reset de fábrica. La consola se restablecerá a su condición de entrega.</div>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="1771b6fb-3f46-4840-a159-69db6fc031bc">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ht_turnonandoff/es/1.3'; " title="Go to previous page 'Encender y apagar la consola'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_AddAndPatchFixtures/es/1.3';" title="Go to next page 'Añadir aparatos y patch'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/27823/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
