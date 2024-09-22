---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/HT_WingsNodes3DOnPC/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="021f5292-de29-41b0-9552-3540e90ba5de">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Effects/es/1.1'; " title="Go to previous page 'Trabajar con Efectos'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalInput/es/1.1';" title="Go to next page 'Usar disparadores (triggers) externos'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/021f5292-de29-41b0-9552-3540e90ba5de">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13941/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Cómo conectar nodos, wings, 3D y onPC</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">dot2 Wings</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">consolas dot2, dot2 onPC y visualizador dot2 3D.</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">dot2 Node4 (1k)</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">&nbsp;</a>
						</li>
				</ul>
			</div>

		<p>Hay muchas cosas que puedes conectar a la vez. Todo está conectado entre sí en una infraestructura de red ethernet. Esto significa que necesitas conectar todos tus dispositivos usando cables Ethernet (de calidad Cat.5e o superior) a un switch con un mínimo de 100MB de velocidad, y el switch necesita poder manejar Multicast. Todos los dispositivos en la red usan IPv6 para comunicarse entre ellos, con lo que el switch necesita poder funcionar con esto también.&nbsp;</p>

<p>Si no sabes lo que es IPv6 y tienes problemas con las conexiones, por favor lee&nbsp;<a href="/Topic/f1b7cb49-645d-4aa2-b435-a852501289f0">¿Qué es IPv6?</a>.</p>

<p>Si tienes alguna duda sobre qué switch usar, por favor contacta con tu distribuidor local. Te ayudarán a seleccionar el switch adecuado.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>dot2 Wings</h2>

<p>Puedes conectar wings a tu consola dot2 o a tu dot2 onPC. Los wings están asignadas a un dispositivo específico. Si este dispositivo se pierde en la red entonces el wing pierde su funcionalidad y espera a ser asignado a un dispositivo diferente.</p>

<p>Hay dos tipos de wings: dot2 Fader (F-wing) y dot2 Button (B-wing). Cada una te ofrece más ejecutores físicos y una pantalla extra.</p>

<p>Dado que los wings están conectados directamente a un dispositivo específico, necesitarás abrir el menú de ajustes en el dispositivo al que quieras conectar un wing. En el menú de setup encontrarás un botón llamado&nbsp;<span class="softkey">wings dot2</span>. Púlsalo.</p>

<p>Esto te da la&nbsp;<a href="/Topic/76a4961b-8fb5-4482-b0af-894a4a931aa9">Vista de Wings</a>.&nbsp;En esta vista puedes pulsar uno de los slots libres (barra amarilla en el lado izquierdo) del mismo tipo que tu wing. Hay sólo cinco slots para cada dispositivo. Dependiendo de tus dispositivos puede que tengas sólo unos pocos slots libres. Los slots que se encuentran ocupados por la consola tienen una barra roja en el lado izquierdo, y se denominan “fijos-internos”. Los slots que se encuentran ocupados por un wing externo tienen una barra verde en el lado izquierdo.</p>

<p>Cuando pulses un slot libre verás los wings disponibles en tu red. Si no ves ningún&nbsp;wing, entonces necesitas verificar tu red y las conexiones, además de asegurarte de que todo está encendido.</p>

<p>Cuando veas un wing en la parte izquierda de tu pantalla, entonces puedes pulsarlo. El wing que has seleccionado iluminará rápidamente todas las teclas. Esto es así para que puedas identificar el wing seleccionado en una configuración multi wings. Cuando el wing correcto está iluminada, entonces puedes pulsar el botón&nbsp;<span class="softkey">Asignar seleccionado</span></p>

<p>Ahora has asignado y conectado un wing y puedes salir del menú.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>consolas dot2, dot2 onPC y visualizador dot2 3D.</h2>

<p>Todo, excepto los wings, está conectado a una sesión. Los Wings&nbsp;están conectados a un dispositivo específico. Pueden existir 4 sesiones independientes funcionando en tu red.</p>

<p>El sistema de sesión te permite una mejor flexibilidad en relación con copias de seguridad y redundancia.</p>

<p>Presiona&nbsp;<span class="hardkey">Setup</span>&nbsp;y luego el botón&nbsp;<span class="softkey">Sesiones</span>. Esto te lleva a la&nbsp;<a href="/Topic/43894987-4e55-4de0-b124-c0bf3c2fd787">vista Configuración de Red</a>. Esta vista está separada en dos partes. La parte más alta muestra si tu consola o tu onPC está actualmente dentro de una sesión en red o no. Si el botón en la parte derecha dice&nbsp;<span class="softkey">Iniciar o unirse a una sesión existente</span>,&nbsp;entonces puedes pulsarlo para ver las cuatro sesiones diferentes. Si hay algunos dispositivos usando una de las sesiones, entonces el botón de sesión tendrá el nombre de la sesión y dirá&nbsp;<span class="softkey">Unirse a Sesión</span>. Si no hay ninguna sesión abierta, entonces puedes elegir y comenzar una de las sesiones. Ahora puedes añadir más dispositivos a tu sesión.</p>

<p>Si el botón en la parte superior dice &nbsp;<span class="softkey">Abandonar&nbsp;sesión</span>, la consola está conectada a una sesión y puedes añadir más dispositivos a la misma.</p>

<p>La parte más baja de la vista de Configuración de Red muestra los dispositivos en tu sesión. Están separados por tipos de dispositivos.</p>

<p>Si tienes aparatos en tu red y se encuentran en tu sesión, entonces tendrán un color verde de fondo. El dispositivo que estás mirando en ese momento tendrá un color verde de fondo más brillante. Si te falta un dispositivo que has tenido previamente en tu sesión, entonces toma un color rojo de fondo.</p>

<p>Puedes ver la dirección IPv6, el nombre y el número de versión de los dispositivos conectados.</p>

<p>Puedes pulsar el botón de &nbsp;<span class="softkey">Add</span>&nbsp;para ver todos los dispositivos desconectados&nbsp;en tu red. Aqui puedes seleccionar el dispositivo que quieras añadir a tu sesión. Cuando eliges uno, se conectará a tu sesión y tomará la información del show file ejecutado en esa sesión. Si no hay dispositivos en la vista de seleccionar estación, la consola no puede ver el dispositivo en la red. Si esperas ver un dispositivo primero debes revisar tus cables de red y power y confirmar que está todo bien conectado.</p>

<p>Si has conectado una consola con un onPC tendrás el control total de los 4096 canales&nbsp;DMX. Las funciones onPC son como una copia de seguridad para tu consola. Si por alguna razón tu consola deja de funcionar (podría ser si la corriente desaparece), entonces tu onPC se quedará a cargo y puedes aún controlar los 4096 canales DMX. La salida DMX de la consola no funciona si la consola no funciona. Puedes añadir dot2 Node4 (1K)s a tu red. Esto te permite tener una copia de seguridad o una salida DMX remota.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>dot2 Node4 (1k)</h2>

<p>Si conectas los Node4 a tu sistema va a funcionar como hemos explicado arriba. Los Nodos no pueden iniciar una sesión, están conectados y escuchan la conversación de la red. Toman la información DMX de la sesión y la convierten en una salida DMX real.</p>

<p>El dot2 Node4 (1K) te permite controlar 1024 canales DMX cuando conectas un dot2 onPC y un dot2 Node4 (1K). Un dot2 onPC puede controlar sólo 1024 canales cuando no está conectado a una consola dot2.</p>

<p>Los nodos son un poco diferentes en la vista de Configuración de Red. Puedes fijar qué universos genera el nodo. En la lista aparece de esta manera:</p>

<p><img alt="" src="/Media/Image/Dot2_HT_ConnectWingsNodes3dOnpc_01_1-0.png"></p>

<p>Aquí puedes ver que cada uno de los dos nodos conectados genera 4 universos. Un nodo sólo puede generar los universos del 1 al 4 o del 5 al 8. Puedes cambiar los universos usando el encoder para seleccionar el nodo y el campo que quieres cambiar (como el “Universo 1-4” que se muestra arriba). Cuando pulsas el encoder tienes dos botones disponibles en tu pantalla. Selecciona el set de universos que quieres que genere tu nodo. &nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>&nbsp;</h2>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="021f5292-de29-41b0-9552-3540e90ba5de">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Effects/es/1.1'; " title="Go to previous page 'Trabajar con Efectos'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UseExternalInput/es/1.1';" title="Go to next page 'Usar disparadores (triggers) externos'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13941/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
