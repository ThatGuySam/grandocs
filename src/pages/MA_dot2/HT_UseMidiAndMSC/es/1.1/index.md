
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="092db22a-d2f1-46ca-9a6e-a7c12c92f284">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalInput/es/1.1'; " title="Go to previous page 'Usar disparadores (triggers) externos'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalScreen/es/1.1';" title="Go to next page 'Usar la pantalla externa'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/092db22a-d2f1-46ca-9a6e-a7c12c92f284">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14650/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Use MIDI and MIDI Show Control (MSC)</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Entrada remota MIDI note</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Salida MIDI note</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">MIDI Show Control (MSC) Entrada (In)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">MIDI Show Control (MSC) Salida (Out)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">MIDI Time Code (MTC)</a>
						</li>
				</ul>
			</div>

		<p>Dot2 puede manejar distintos tipos de MIDI así como transmitir y recibir MIDI.</p>

<p>Puedes ver los datos de entrada y salida MIDI en la consola presionando&nbsp;<span class="hardkey">Tools</span>&nbsp;y luego&nbsp;<span class="softkey"><a href="/Topic/ae643503-568f-4073-b26f-223f4f1ae82a">MIDI Monitor</a></span>.</p>

<p>Si estas utilizando dot2 onPC necesitas configurar tus entradas y salidas MIDI. Esto lo haces también en el menú Tools. Aquí puedes pulsar en <a href="/Topic/6e181799-633c-4b7d-a700-2fb8f6a07d74">Configuración MIDI</a>&nbsp;y seleccionar que dispositivo MIDI utilizarás para transmitir y recibir MIDI.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Entrada remota MIDI note</h2>

<p>Este es un sistema de notas MIDI recibidas para disparar (trig) diferentes cosas en la consola. Todo se configura en la&nbsp;<a href="/Topic/abf8c6b2-dcd4-4f27-8381-8defa74eec66">Vista Configuración de entradas Remotas</a>.</p>

<p>Aquí tienes la opción para "patchear" ("routear") la entrada de señales de notas MIDI a ejecutores o para disparar (trig) un comando que has escrito en la configuración.</p>

<p>Puedes utilizar la Velocidad de MIDI para establecer la posición de un fader.&nbsp;</p>

<p>La entrada Remota de MIDI solo dispara los ejecutores que están visibles en la consola que recibe la señal MIDI.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Salida MIDI note</h2>

<p>Puedes enviar notas MIDI desde las cues o directamente desde la línea de comandos.</p>

<p>Puedes utilizar <a href="/Topic/bb896543-7a8d-488f-9d67-40c4b3802f4f">Comandos MIDI Note</a>&nbsp;para transmitir información MIDI note. Por favor lee más detalles sobre los comandos en la descripción de los comandos.</p>

<p>El comando MIDI Note es transmitido desde una consola independiente o si estás en una sesión, entonces a la&nbsp;master&nbsp;de la sesión (la consola con el icono de corazón azul&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png"><img alt="" height="15" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D" width="15">​junto a la línea de comandos)&nbsp;​ que transmite el&nbsp;MIDI.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>MIDI Show Control (MSC) Entrada (In)</h2>

<p>La consola puede ser controlada mediante cualquier dispositivo que pueda enviar MIDI Show Control. Hay muchos ajustes relacionados con MSC. Puedes encontrarlos en <span class="hardkey">Setup</span>&nbsp;y luego&nbsp;<span class="softkey"><a href="/Topic/9f4a7699-e22f-4316-9316-6b31746634da">MIDI Show Control</a></span>. Aquí puedes establecer los ajustes para que correspondan con la configuración del transmisor (a menudo un software de Control de Show o de Sonido).</p>

<p>Cuando usas MSC sólo puedes controlar los ejecutores de la primera página o el Ejecutor Principal.</p>

<p>Los datos MSC necesitan ser transmitidos a una consola independiente o si tienes una sesión, entonces a la master de la sesión (la consola con el icono de corazón azul&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png"><img alt="" height="15" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D" width="15">​junto a la línea de comandos) que reacciona al MIDI.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>MIDI Show Control (MSC) Salida (Out)</h2>

<p>Dot2 puede transmitir comandos MSC a un dispositivo. Esto se puede usar para controlar otros dispositivos (por ejemplo samplers de sonido). Todos los ajustes para esto se encuentran en&nbsp;<span class="hardkey">Setup</span>&nbsp;y luego&nbsp;<span class="softkey"><a href="/Topic/9f4a7699-e22f-4316-9316-6b31746634da">MIDI Show Control</a></span>. Aquí debes establecer tus ajustes para que correspondan con el receptor MSC.</p>

<p>Los datos MSC necesitan ser transmitidos a una consola independiente o si tienes una sesión, entonces a la master de la sesión (la consola con el icono de corazón azul&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png"><img alt="" height="15" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D" width="15">​junto a la línea de comandos) que reacciona al MIDI.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>MIDI Time Code (MTC)</h2>

<p>La consola puede recibir MTC y usarlo para disparar (Trig) automáticamente cues en los ejecutores.</p>

<p>El ejecutor que quieres controlar por MTC necesita tener MIDI seleccionado en la&nbsp;<a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">Ventana ajustes de Ejecutor</a>. Necesitas tener algunas cues en ese ejecutor que usa Timecode como&nbsp;trigger. Cuando Timecode es el trigger, entonces puedes fijar un tiempo en la columna "Trig Time". Cuando tu MTC entrante llega al tiempo que has fijado en la columna Trig Time se ejecutará la cue. No necesitas tener la cue como la siguiente, saltará a la cue que tenga el tiempo que corresponde con el MTC entrante. Sólo recuerda tener el fader hacia arriba.</p>

<p>Puedes introducir los tiempos manualmente o pulsar&nbsp;<span class="softkey">TC Record</span> en la barra de título de la Vista Cues. Esto hará que comience la función de grabación. Entonces puedes hacer un GO como siempre en tu cuelist y esto grabará el tiempo del código en el que te encuentres en ese momento en la columna Trig Time. También puedes usar el&nbsp;<a href="/Topic/1e90ffd8-ce1f-42a9-bda9-92c8e7bf83a0">Comando Record</a>&nbsp;para activar esta función de grabado Timecode. Cuando haya una grabación activa encontrarás un círculo rojo intermitente con un icono con una "T" blanca justo al lado de la entrada de la línea de comandos. Encontrarás también un círculo rojo intermitente en la vista Cues y en la Barra de Ejecutor. Puedes desactivar la función de grabación pulsando de nuevo&nbsp;<span class="softkey">TC Record</span>.</p>

<p>MTC se puede habilitar y deshabilitar en la&nbsp;<a href="/Topic/c22188fd-6831-4847-a24a-f9174ed48191">Ventana Configuración Timecode</a>&nbsp;en el&nbsp;Setup. Si has desactivado todos los timecodes entrantes entonces no puedes pulsar el botón&nbsp;<span class="softkey">TC Record</span>.</p>

<p>El MTC entrante puede provenir de cualquier consola/onPC en la sesión, no sólo la Master.</p>

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="092db22a-d2f1-46ca-9a6e-a7c12c92f284">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalInput/es/1.1'; " title="Go to previous page 'Usar disparadores (triggers) externos'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalScreen/es/1.1';" title="Go to next page 'Usar la pantalla externa'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14650/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	