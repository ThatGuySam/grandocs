---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/window_midishowcontrol/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9f4a7699-e22f-4316-9316-6b31746634da">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_midimonitor/es/1.1'; " title="Go to previous page 'Monitor MIDI'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_networkinterface/es/1.1';" title="Go to next page 'Interfaz de Red'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/9f4a7699-e22f-4316-9316-6b31746634da">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14728/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>MIDI Show Control Window</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Funciones Barra Encoders</a>
						</li>
				</ul>
			</div>

		<p>Para abrir la&nbsp;<strong>Ventana MIDI Show Control</strong>, presiona&nbsp;<span class="hardkey">Setup</span>&nbsp;y en la columna Show, pulsa en&nbsp;<span class="softkey">MIDI Show Control</span>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MIDIShowControl01_1-1-3.png"></p>

<p><em>Imagen 1: Ventana MIDI Show Control</em></p>

<div class="important"><strong>Importante:</strong><br>
Si MIDI show control es utilizado en una red, sólo la consola Master enviará y recibirá comandos MIDI show control. Los comandos&nbsp;MIDI show control también funcionan si la consola es independiente.</div>

<div class="important"><strong>Importante:</strong>&nbsp;Enviar y recibir estos comandos puede crear un bucle infinito.</div>

<p>En la ventana MIDI Show Control (MSC) configuras los ajustes de MSC. Los ajustes MSC del emisor y el receptor MIDI deben ser los mismos para que puedan comunicarse.</p>

<div class="tip"><strong>Ayuda:</strong><br>
Para revisar los mensajes MSC de entrada y salida presiona&nbsp;<span class="hardkey">Tools</span>&nbsp;y pulsa en&nbsp;<span class="softkey">Monitor MIDI</span>. Para más información, consulta&nbsp;<a href="/Topic/ae643503-568f-4073-b26f-223f4f1ae82a">Monitor MIDI</a>.</div>

<p>Si pulsas en una línea de edición, una etiqueta muestra qué valores son válidos.</p>

<p><strong>Canal:</strong><br>
Muestra el canal MIDI.<br>
Para seleccionar un canal, pulsa el signo de + o -</p>

<p><strong>ID de dispositivo:</strong><br>
Muestra el ID de dispositivo.<br>
Para seleccionar&nbsp;un ID de dispositivo,&nbsp;pulsa el signo de + o -</p>

<p><strong>Group ID:</strong><br>
Muestra el ID de grupo.<br>
Para seleccionar&nbsp;un ID de grupo, pulsa el signo de + o -</p>

<p><strong>Puerto Ethernet:</strong><br>
Muestra el puerto de Ethernet.<br>
Para seleccionar a Ethernet port, pulsa el signo de + o -</p>

<p><strong>Modo:</strong><br>
Muestra el modo de MSC.<br>
Por defecto el modo de MSC está deshabilitado. Para seleccionar un modo de MSC pulsa en el icono de los tres puntos&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">.<br>
Se abre un menú desplegable. Hay tres modos MSC disponibles.</p>

<ul>
	<li>Deshabilitado - MSC no enviará o recibirá</li>
	<li>Ethernet - MSC enviará o recibirá vía el puerto Ethernet seleccionado.</li>
	<li>MIDI - MSC enviará o recibirá vía conector MIDI situado en la parte trasera de la consola.</li>
</ul>

<p><strong>Exec:</strong><br>
Muestra los comandos del ejecutor MSC.<br>
Por defecto está seleccionado "Sólo principal". Para seleccionar un ejecutor pulsa en el icono de los tres puntos&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">.&nbsp;<br>
Se abre un menú desplegable.&nbsp;Hay tres ejecutores disponibles.</p>

<ul>
	<li>Sólo principal - Desde o hacia el ejecutor principal.</li>
	<li>Página Exec. - Desde o hacia un ejecutor específico en la página 1. Separado por un punto (Hex = 2E).</li>
	<li>Página Exec - Desde o hacia un ejecutor específico en la página 1. Separado por un espacio (Hex = 20).</li>
</ul>

<p><strong>Command Format:</strong><br>
Muestra el formato del comando. El formato de comando se usa para indicar el tipo de equipamiento previsto para recibir los mensajes MSC.</p>

<p>Por defecto está seleccionado "Todo". Para seleccionar otro formato de comando pulsa en el icono de los tres puntos&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">.&nbsp;<br>
Se abre un menú desplegable.&nbsp;Hay tres formatos de comando disponibles.</p>

<ul>
	<li>Moving Light - El formato es Hex = 02</li>
	<li>General Light - El formato es Hex = 01</li>
	<li>Todo - El formato es Hex = 7F</li>
</ul>

<p><strong>Enviar a&nbsp;</strong>(sólo en salida MSC):<br>
Muestra a quién será transmitido los mensajes MSC.<br>
Por defecto está seleccionado "Todo". Para seleccionar otro formato de comando pulsa en el icono de los tres puntos&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">.&nbsp;<br>
Se abre un menú desplegable.&nbsp;Hay tres opciones de envío disponibles:</p>

<ul>
	<li>Grupo - Transmite los mensajes MSC al ID de grupo MSC Out seleccionado.</li>
	<li>Dispositivo - Transmite los mensajes MSC al ID de dispositivo MSC Out seleccionado.</li>
	<li>Todo - Transmite los mensajes MSC al ID de dispositivo e ID de grupo de MSC Out seleccionado.</li>
</ul>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Funciones Barra Encoders</h2>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_DMXView01_1-0.PNG"></p>

<p><em>Imagen 2: Ventana MIDI Show Control - Barra de Encoders.</em></p>

<p><strong>Scroll (desplazamiento):</strong><br>
Para seleccionar un ID o desplazarte en el menú desplegable gira el encoder a izquierda o derecha.</p>

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9f4a7699-e22f-4316-9316-6b31746634da">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_midimonitor/es/1.1'; " title="Go to previous page 'Monitor MIDI'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_networkinterface/es/1.1';" title="Go to next page 'Interfaz de Red'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14728/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
