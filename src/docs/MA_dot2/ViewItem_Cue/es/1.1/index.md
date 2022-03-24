---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/ViewItem_Cue/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="b8ab1bbb-182d-41d6-9a1e-52f5267922c7">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Control/es/1.1'; " title="Go to previous page 'Tipo de Preset Control'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Dimmer/es/1.1';" title="Go to next page 'Tipo de Preset Dimmer'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14376/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Vista Cues</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Barra Chaser</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Funciones Barra Encoders</a>
						</li>
				</ul>
			</div>

		<p>Para ir a la&nbsp;<strong>Vista de&nbsp;Cues</strong>&nbsp;para el&nbsp;<strong>&nbsp;Ejecutor Principal en la pantalla&nbsp;1</strong>: Presiona&nbsp;&nbsp;<span class="hardkey">Cue</span>&nbsp;en la consola.</p>

<p>Para ir a la <strong>Vista de&nbsp;Cues</strong><strong> </strong>para el&nbsp;<strong>&nbsp;Ejecutor Principal en la pantalla 2</strong>: Pulsa&nbsp;<span class="softkey">Cues</span>&nbsp;en la&nbsp;<a href="/Topic/aeb06b87-4def-4d5c-8ccd-fce24793de63">Barra de Vistas</a>.</p>

<p>Para ir a la&nbsp;<strong>Vista de&nbsp;Cues</strong>&nbsp;para cualquier otro ejecutor: Presiona la tecla&nbsp;<span class="hardkey"><img alt="view" src="/Media/Mlg/eye_1.png"></span>&nbsp;y luego el respectivo Botón Ejecutor en la Consola.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView02_1-1-3_1.png"></p>

<p><em>Imagen 1: Vista de Cues</em></p>

<p>En esta vista verás todas las cues y ajustes del respectivo ejecutor.</p>

<div class="tip"><strong>Informacion:</strong><br>
Todas las funciones de grabación, actualización o copia desbloquean (unblock)&nbsp;automáticamente el cuelist.&nbsp;&nbsp;Los valores que son idénticos con el valor de las cues&nbsp;previas no se grabarán otra vez en el cuelist. Esto produce una lista de tracking limpia. Para más información consulta&nbsp;<a href="/Topic/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">¿Qué es&nbsp;Tracking?</a>.</div>

<p>Si el ejecutor tiene establecido un tiempo de off se muestra en la barra de título.</p>

<p>Para cambiar el tiempo de Off pulsa en &nbsp;<span class="softkey">Off Time</span>&nbsp;en la barra de título. Se abre la ventana de ajustes del ejecutor.</p>

<p>Para comenzar una grabación de Timecode&nbsp;para un ejecutor pulsa en&nbsp;<span class="softkey">TC Record</span>&nbsp;(= timecode) en la barra de título. El&nbsp;<strong>icono de grabación</strong><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView05_1-1-3.png">&nbsp;se ilumina en la barra de título de la vista de Cues y en la&nbsp;<a href="/Topic/af87cdc8-b54b-41ee-b614-26065230c7ec">barra de ejecutores</a>. Sólo está disponible si al menos está activa una fuente de timecode en la <a href="/Topic/c22188fd-6831-4847-a24a-f9174ed48191">Ventana Configuración Timecode</a>. Si no hay ninguna fuente de Timecode activa, el botón de TC Record se muestra en gris y el icono del trigger timecode en rojo.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView06_1-1-3.png"></p>

<p><em>Imagen 2: Vista de Cues - La fuente de Timecode&nbsp;está apagada en la ventana de configuración de Timecode.</em></p>

<p>Para abrir los ajustes de la cue, presiona la<strong> herramienta </strong><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar05_1-0.PNG"> en la barra de título.&nbsp; Se abren los ajustes del respectivo ejecutor.</p>

<p>Bloquea tu vista y desactiva el modo vistas dinámicas pulsando en el icono del <strong>pin​ </strong><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar04_1-0.PNG">&nbsp;en la&nbsp;<a href="/Topic/a9e3dcd7-1fb1-4dab-8e42-03f9e0de3e99">Barra de título</a>.</p>

<p>Debajo de la barra de título&nbsp;está&nbsp;la tabla de cues. En esta tabla&nbsp;puedes editar:</p>

<ul>
	<li><a href="/Topic/55344644-8c65-4e59-ad6b-2aa988a28c88">Número</a>. Se abre la ventana para editar el número de cue</li>
	<li><a href="/Topic/26701109-1218-40c5-a9bc-26913cd9cb54">Nombre de la Cue</a></li>
	<li>Protegido</li>
	<li><a href="/Topic/d9c9d91d-b42b-4aae-8a17-58df82b91f46">Trig (Trigger)</a>. Se abre la ventana de selección de trig.</li>
	<li><a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">Trigger Time</a></li>
	<li><a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">Fade</a></li>
	<li><a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">Out Fade</a></li>
	<li><a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">Out Delay</a></li>
	<li><a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">Preset Type Timings</a></li>
	<li>Cmd (Command)</li>
	<li><a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">Snap Percent</a></li>
</ul>

<p>Para editar las celdas de la tabla de cues, pulsa (y mantén pulsada) la celda. La ventana de edición correspondiente se abre.</p>

<p>Una celda seleccionada en la tabla de cue tiene fondo azul con un marco blanco alrededor.</p>

<p>La cue que está ejecutándose se muestra en la tabla con un fondo verde.</p>

<p>La barra azul en la columna de nombre de una cue en ejecución muestra el tiempo de fade&nbsp;desde 0% a 100%.</p>

<p>Para más información sobre las cues consulta&nbsp;<a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">¿Qué es una Cue?</a>&nbsp;y&nbsp;<a href="/Topic/511081dd-5ffb-4aaa-8d09-a0859b0d0a19">¿Cómo trabajar con Cues?</a>.</p>

<p>Si la cue está protegida, se muestra una línea blanca para ver donde se detiene el tracking. Para más información consulta&nbsp;<a href="/Topic/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">¿Qué es Tracking?</a></p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Barra Chaser</h2>

<p>Si el ejecutor se establece como un chaser, todas las funciones y tiempos de las cues que no están disponibles para el modo&nbsp;chaser&nbsp;se muestran en gris. Para más información sobre chasers consulta&nbsp;<a href="/Topic/19bf97cc-217c-4f8c-83af-134aae3e3aed">¿Qué es un Chaser?</a>&nbsp;y&nbsp;<a href="/Topic/ec01d7b9-e0db-41e3-8371-b9f45736ed75">¿Cómo trabajar con Chasers?</a>.</p>

<p>Aparece una barra chaser adicional.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView03_1-0.PNG"></p>

<p><em>Imagen 3: Barra Chaser en la vista de Cues</em></p>

<p><strong>Hacia delante</strong>( cambia la dirección del chaser):&nbsp;</p>

<p>Pulsa en &nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">&nbsp;para seleccionar el modo de dirección del chaser.<br>
Hay varios modos de dirección posibles:</p>

<ul>
	<li>Hacia delante</li>
	<li>Hacia atrás</li>
	<li>Rebote (ej. comienza de la cue 1 a la 4 y vuelve hacia atrás desde la 4 a la 1)</li>
	<li>Aleatorio</li>
</ul>

<p><strong>Infinito (sin fin)&nbsp;</strong>(modo de ejecución del chaser):<br>
Pulsa en &nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG"> para seleccionar el modo de ejecución del chaser<br>
Existen 3 modos disponibles:</p>

<ul>
	<li>Infinito (sin fin)</li>
	<li>Shoot-Off<br>
	El chaser comienza en la cue seleccionada, ej. la cue 1, y se para al final de la cue 5. El ejecutor se apaga después de la última cue.</li>
	<li>Shoot-On<br>
	El chaser comienza en la cue seleccionada, ej. la cue 1, y se para al final de la cue 5. El ejecutor se mantiene encendido después de la última cue.</li>
</ul>

<p><strong>Play:</strong><br>
Pulse para iniciar el chaser.</p>

<p><strong>Pause:</strong><br>
Pulse para pausar el chaser.</p>

<p><strong>Half Speed:</strong><br>
Pulsa para dividir la velocidad actual del chaser a la mitad.</p>

<p><strong>1:1 Speed:</strong><br>
Pulsa para establecer la velocidad ajustada . Para variar la velocidad usa el encoder.</p>

<p><strong>Double Speed:</strong><br>
Pulsa para multiplicar por dos la velocidad actual del chaser.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Funciones Barra Encoders</h2>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_CuesView04_1-0.PNG"></p>

<p><em>Imagen 4: Funciones Barra de Encoders en la pantalla 1 si el Ejecutor es un Chaser</em></p>

<p><strong>Fade </strong>( solo disponible si el ejecutor es un chaser): &nbsp;<br>
Con este encoder estableces el porcentaje de fade de una cue a otra.<br>
Por defecto es un 0% y va aumentando hasta un 400%. &nbsp;<br>
Para establecer el porcentaje del fade sin ningún decimal, gira el encorder a derecha o izquierda.&nbsp;<br>
Para establecer&nbsp; el porcentaje del fade con decimales, realiza la misma acción manteniendo también presionada la tecla&nbsp; <span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span> .La definición del encordar es ahora más fina.</p>

<p><strong>Speed</strong> (solo disponible si el ejecutor es un chaser):<br>
Para establecer la velocidad del chaser mas alta o mas baja, gira el encoder a izquierda o derecha.</p>

<p><strong>Scroll:</strong><br>
Para desplazarte verticalmente, gira el encoder a izquierda o derecha.<br>
Para desplazarte horizontalmente, pulsa y gira el encoder a izquierda o derecha.</p>

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="b8ab1bbb-182d-41d6-9a1e-52f5267922c7">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Control/es/1.1'; " title="Go to previous page 'Tipo de Preset Control'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Dimmer/es/1.1';" title="Go to next page 'Tipo de Preset Dimmer'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14376/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
