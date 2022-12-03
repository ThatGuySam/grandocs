---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/window_networkprotocols/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="43e4d061-59ad-465f-a57b-789c74f9d181">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_networkinterface/es/1.1'; " title="Go to previous page 'Interfaz de Red'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_networksetup/es/1.1';" title="Go to next page 'Configuración de Red'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/43e4d061-59ad-465f-a57b-789c74f9d181">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14348/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Configuración Protocolos de Red</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Funciones Barra Encoders</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Desplazamiento (Scroll)</a>
						</li>
				</ul>
			</div>

		<p>&nbsp;</p>

<p>Para acceder a la Configuración de Protocolos de Red presiona la tecla&nbsp;<span class="hardkey">Setup</span>&nbsp;y luego en la columna&nbsp;<strong>DMX/RED</strong>&nbsp;en&nbsp;<span class="softkey">Protocolos de Red</span>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_NetworkProtocols01_1-1-3.png"></p>

<p><em>Imagen 1: Ventana Configuración Protocolos de Red</em></p>

<div class="important"><strong>Sesión requerida:</strong><br>
Para usar&nbsp;Art-Net o&nbsp;sACN, es necesario estar en una sesión. Para crear una sesión pulsa en&nbsp;<span class="softkey">Sesiones</span>&nbsp;en el&nbsp;<a href="/Topic/198599eb-ca20-4e60-b007-bb08cd2ce43b">Setup</a>. Se abre la&nbsp;<a href="/Topic/43894987-4e55-4de0-b124-c0bf3c2fd787">Configuración de red</a>.<br>
Si no estás en una sesión, Art-Net o&nbsp;sACN&nbsp;no están activos.</div>

<div class="important"><strong>Protocolos de Red y&nbsp;dot2 onPC:</strong><br>
Para usar&nbsp;Art-Net o&nbsp;sACN&nbsp;con un&nbsp;dot2 onPC, es necesario tener un&nbsp;Node4 (máximo 1024 canales DMX) o&nbsp;una consola&nbsp;dot2&nbsp;conectada.</div>

<div class="important"><strong>Windows® 8 o&nbsp;Windows® 8.1:</strong><br>
Para usar Art-Net&nbsp;en&nbsp;Windows® 8 o&nbsp;Windows® 8.1, es necesario iniciar la aplicación como administrador. Si no inicias la aplicación como administrador,&nbsp;Art-Net&nbsp;no está&nbsp;activo.</div>

<p>En esta ventana puedes activar o desactivar los protocolos Art-Net o sACN (=streaming ACN).<br>
Art-Net y sACN son protocolos de red adicionales al protocolo por defecto dot2-Net.<br>
Los protocolos de red transportan DMX utilizando la infraestructura de una red cableada (Ethernet).</p>

<p>El "tick" verde muestra que el protocolo de red está activo.<br>
El icono de prohibición rojo muestra que el protocolo de red está desactivado.<br>
Para activar o desactivar un protocolo de red selecciona los que necesites pulsando sobre ellos.</p>

<p>Debajo del tipo de protocolo se muestra la dirección IP con la cual se está enviando. La IP&nbsp;Art-Net es visible después de activar el protocolo&nbsp;Art-Net&nbsp;y la sesión está activa. Para cambiar la dirección IP, utiliza el&nbsp;<a href="/Topic/0e2669d7-2811-4939-9742-40a379116826">Comando SetIP</a>.</p>

<p>Las siguientes columnas están disponibles:</p>

<p><strong>Activo:</strong><br>
Muestra si&nbsp;Art-Net o&nbsp;sACN&nbsp;están encendidos o apagados para el respectivo universo<br>
Para encender o apagar&nbsp;Art-Net o&nbsp;sACN&nbsp;para el respectivo universo, mantén presionada la celda o presiona el encoder&nbsp;activo correspondiente.</p>

<p><strong>Modo:</strong><br>
Muestra el modo soportado por el protocolo de red.<br>
Art-Net = Output Broadcast (Art-Net&nbsp;1)<br>
sACN = Output Multicast</p>

<p><strong>Universo&nbsp;dot2:</strong><br>
Muestra los universos dot2 del 1 al 8.</p>

<p><strong>Universo Art-Net / Universo sACN:</strong><br>
Muestra el universo Ethernet.<br>
Art-Net = 0:0 - 0:7<br>
sACN = 1 - 8</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Funciones Barra Encoders</h2>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_NetworkProtocols02_1-1-3.png"></p>

<p><em>Imagen 2: Barra de Encoders - Ventana Configuración de Protocolos de Red.</em></p>

<p><br>
<strong>Protocolos de red</strong><br>
Para seleccionar un protocolo de red gire el encoder a izquierda o derecha.<br>
Para activar o desactivar un protocolo de red presiona el encoder. El estado actual se muestra entre paréntesis.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Desplazamiento (Scroll)</h2>

<p><strong>Activo:</strong></p>

<p>Para desplazarte en la columna activa, gira el encoder a izquierda o derecha.</p>

<p>Para seleccionar on/off&nbsp;en la columna activa presiona el encoder</p>

<p><strong>Selección Activa:</strong></p>

<p>Para seleccionar múltiples celdas, presiona la tecla &nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;y gira el encoder a izquierda o derecha.</p>

<p>La celda selecciona se muestra con un marco azul.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="43e4d061-59ad-465f-a57b-789c74f9d181">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_networkinterface/es/1.1'; " title="Go to previous page 'Interfaz de Red'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_networksetup/es/1.1';" title="Go to next page 'Configuración de Red'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14348/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
