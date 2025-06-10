---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/HT_UseExternalInput/es/1.5'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option selected="selected" value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9230c022-d52a-49ed-899d-44dbcd3396ce">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_WingsNodes3DOnPC/es/1.5'; " title="Go to previous page 'Connect nodes, wings, 3D and onPC'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseMidiAndMSC/es/1.5';" title="Go to next page 'Use MIDI and MIDI Show Control (MSC)'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/9230c022-d52a-49ed-899d-44dbcd3396ce/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/18035/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Cómo usar disparadores (triggers) externos</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Entrada Analog</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Entrada MIDI</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Entrada DMX</a>
						</li>
				</ul>
			</div>

		<p>Las entradas remotas son entradas externas que puedes conectar y usar para disparar (trigger) eventos en la consola dot2. Actualmente hay tres entradas diferentes que puedes usar (Analógica (cierre de contactos), MIDI&nbsp;y DMX.</p>

<p>Puedes configurar las entradas remotas pulsando la tecla&nbsp;<span class="hardkey">Setup</span>&nbsp;y luego el botón&nbsp;<span class="softkey">Entradas remotas</span>&nbsp;.&nbsp;Aparece entonces la vista de Configuración de Entradas Remota.</p>

<p>En el lado izquierdo puedes elegir los tres tipos diferentes de entrada y puedes ver si están habilitados (marca de verificación en verde) o deshabilitados (señal de prohibición en rojo). Puedes cambiar esto usando el encoder izquierdo para seleccionar el tipo de entrada que quieres y luego presionar el encoder. Esto cambiará el status actual. También puedes cambiar esto pulsando el tipo de entrada. Para cada tipo de entrada hay también un pequeño recuadro gris que se remarcará en verde cuando la entrada esté activa.</p>

<p>En el lado derecho de cada una de las entradas puedes elegir lo que debería ocurrir cuando la entrada es disparada</p>

<p>Esta tabla tiene 5 columnas.</p>

<p><img alt="" src="/Media/Image/Dot2_HT_UseExternalInput_01_1-2.png"></p>

<p><em>Imagen 1: Tabla de columnas de Entradas Remotas</em></p>

<p>La primera columna es el <strong>número de entrada</strong> remota. Esta cambia el nombre en función de la entrada seleccionada.</p>

<p><strong>Tipo</strong> puede ser tres cosas diferentes:</p>

<ul>
	<li><strong>Ninguno</strong>&nbsp;- Si el tipo es “Ninguno” entonces la entrada remota no se usa.&nbsp;</li>
	<li><strong>Exec</strong> - Si eliges Ejecutor entonces tu entrada remota disparará algún ejecutor.</li>
	<li><strong>CMD</strong> - Si eliges Comando entonces puedes escribir un comando que el disparador debe ejecutar.&nbsp;</li>
</ul>

<p>Las otras cuatro columnas serán relevantes dependiendo del Tipo que hayas seleccionado.</p>

<p>Si has elegido&nbsp;<strong>Exec</strong>&nbsp;puedes tener acceso a las columnas <strong>Página, Ejecutor</strong>&nbsp;y <strong>Función</strong>. Necesitas especificar un número de página concreta o seleccionar "actual" en la columna <strong>Página.</strong>&nbsp;luego selecciona el número del <strong>Ejecutor</strong> que quieres disparar. La columna&nbsp;<strong>Función</strong>&nbsp;te permite seleccionar una de estas tres cosas:&nbsp;<strong>Botón&nbsp;2</strong>, <strong>Fader</strong>&nbsp;y&nbsp;<strong>Botón 1</strong> - Si eliges un ejecutor que sólo tiene una tecla, entonces sólo puedes seleccionar el&nbsp;<strong>Botón 1</strong>. Dependiendo del tipo de entrada, tus teclas y faders reaccionan diferente en la entrada. Pero esto ocurre básicamente con las teclas físicas y faders para el ejecutor seleccionado.</p>

<p>Si has elegido el tipo&nbsp;<strong>CMD</strong> entonces puedes acceder a la columna&nbsp;<strong>CMD</strong> Aquí puede teclear un comando que quieras que el disparador (trigger) ejecute. Echa un vistazo a la sección&nbsp;<a href="/Topic/8847bf4f-7a7f-45d0-9935-be8c896b8674">Comandos</a>&nbsp;de este manual para aprender más sobre los comandos.</p>

<p>Lo siguiente es una descripción de los tres tipos diferentes de entrada.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Entrada Analog</h2>

<p>Para usar la entrada del disparador analógico necesitarás conectar un dispositivo de otro fabricante con un conector D-sub 15 con teclas conectadas. Puedes tener 12 interruptores de cierre de contacto que envían entre 5 y 15 voltios a uno de los pins del d-sub 15. Uno de los pins suministra 5 voltios con lo que no necesitas una fuente de alimentación externa mientras no uses cables largos.&nbsp;</p>

<p>Los disparadores analógicos son sólo on/off. No soportan entradas variables.</p>

<p>Este es el esquema de conexión de los pines para un d-sub:</p>

<ul>
	<li>Pin 1 = Analog input 1</li>
	<li>Pin 2&nbsp;=&nbsp;Analog input 3</li>
	<li>Pin 3 =&nbsp;Analog input 5</li>
	<li>Pin 4 =&nbsp;Analog input 7</li>
	<li>Pin 5 =&nbsp;Analog input 9</li>
	<li>Pin 6 =&nbsp;Analog input 11</li>
	<li>Pin 7 = + 5 volts</li>
	<li>Pin 8 = Common Ground</li>
	<li>Pin 9 =&nbsp;Analog input 2</li>
	<li>Pin 10 =&nbsp;Analog input 4</li>
	<li>Pin 11 =&nbsp;Analog input 6</li>
	<li>Pin 12 =&nbsp;Analog input 8</li>
	<li>Pin 13 =&nbsp;Analog input 10</li>
	<li>Pin 14 =&nbsp;Analog input 12</li>
	<li>Pin 15 = Not used</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Entrada MIDI</h2>

<p>La entrada MIDI reacciona a las notas MIDI recibidas. Puedes asignar un disparador (trigger) para anotar de 0 a 127, con lo que hay 128 disparadores MIDI diferentes. Los triggers reaccionan a la información sobre la velocidad. Esto significa que el fader puede ser posicionado de acuerdo con la velocidad recibida. Los botones ejecutores también reaccionan a los comandos MIDI "On" y "Off".</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Entrada DMX</h2>

<p>La entrada DMX reacciona al conector de entrada DMX de la dot2. La entrada DMX remota puede usar los 512 canales DMX. Los botones ejecutores y comandos son ejecutados cuando la entrada DMX está en un rango entre 128 y 255. También es compatible con una entrada variable para que pueda controlar la posición del fader ejecutor (reaccionando en un rango entre 1 y 255). El indicador de actividad sólo se ilumina cuando la entrada está disparando (triggering) algo. De esta manera si sólo tienes botones ejecutores y comandos los valores de entrada necesitan estar en 127 o por encima para que el indicador esté activo. Para los faders ejecutores se activará cuando la entrada esté por encima de 0.</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option value="7">1.2</option>
<option value="12">1.3</option>
<option selected="selected" value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9230c022-d52a-49ed-899d-44dbcd3396ce">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_WingsNodes3DOnPC/es/1.5'; " title="Go to previous page 'Connect nodes, wings, 3D and onPC'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseMidiAndMSC/es/1.5';" title="Go to next page 'Use MIDI and MIDI Show Control (MSC)'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/18035/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
