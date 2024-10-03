---
originalUrl: >-
  https://help2.malighting.com/Page/MA_dot2/GSG_22_ConnectOnpc3dWingsAndNodes/es/1.1
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="03f179cf-2b46-4e3f-9974-679994c20edc">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_21_Effect/es/1.1'; " title="Go to previous page '21 - Crear Efectos'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_23_HappyProgramming/es/1.1';" title="Go to next page '23 - Feliz Programación'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/03f179cf-2b46-4e3f-9974-679994c20edc">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13931/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Guía de Introducción - Conectar a onPC, 3D, Wings y Nodos</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">dot2 Wings</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Consolas dot2, dot2 onPC, dot2 Node4 (1K) y visualizadores dot2 3D</a>
						</li>
				</ul>
			</div>

		<p>Ahora que estamos muy cerca del fin de esta guía de introducción, voy a explicarte el proceso para añadir algún equipo externo.</p>

<p>La familia dot2 consiste en tres consolas diferentes. La más pequeña se llama “dot2 core”. Consta de sección de comandos y una sección especial de Core Fader. Luego se encuentra “dot2 XL-F”. Esta es igual que una “core” pero con un wing extra de faders incorporado. El “dot2 XL-B” es igual que una “core” pero con un wing extra de botones. Un “dot2 F-Wing” tiene 8 ejecutores con faders y 16 ejecutores extra sin faders. Un”dot2 B-Wing” tiene 48 ejecutores sin faders.</p>

<p>Una core dot2 puede tener un máximo de dos dot2 F-Wings y dos dot2 B-Wings conectados. La misma cantidad se usa con las consolas&nbsp;dot2 XL pero su configuración de wings cuenta como uno desde el principio, así que sólo puedes conectar tres wings más.</p>

<p>Puedes conectar 10 dot2 Node4 (1K) a tu sistema. Los nodos se usan para generar universos DMX. Están conectados a la red ethernet y pueden estar posicionados en lugares remotos. 5 nodos pueden generar los universo 1 al 4 y los otros 5 pueden generar universos 5 al 8.</p>

<p>Puedes conectar hasta 5 consolas dot2 u onPCs y hasta 5 visualizadores 3D en un sistema.&nbsp;</p>

<p>Todos estos dispositivos se conectan juntos usando un switch Ethernet de 100 MB (mínimo) de velocidad. Necesitas usar un switch de calidad que permita algo llamado multicast. Hoy por hoy la mayoría de los switches lo tienen. Además, por favor, usa cables Ethernet de buena calidad de un mínimo de especificaciones cat.5e. Los dispositivos dot2&nbsp;se comunican entre ellos usando IPv6. Este es un único número que funciona como una dirección para cada dispositivo. Tu ordenador necesita tener una dirección IPv6. Todos los ordenadores nuevos tienen esto por defecto, pero si el tuyo no lo tiene necesitarás instalarlo. Hay otra página de ayuda llamada&nbsp;<a href="/Topic/f1b7cb49-645d-4aa2-b435-a852501289f0">What is IPv6</a>&nbsp;que puede ofrecerte ayuda con esto.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>dot2 Wings</h2>

<p>Cuando hayas hecho todas las conexiones físicas, necesitas conectar el equipo a la consola. Presiona&nbsp;<span class="hardkey">Setup</span>&nbsp;y luego&nbsp;<span class="softkey">Wings dot2</span>.&nbsp;</p>

<p>La ventana puede aparecer así:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_ConncetOnpc3dWingsAndNodes_01_1-0.png"></p>

<p>Aquí puedes elegir un slot libre (del tipo correcto) para conectar un wing.</p>

<p>Cuando seleccionas el slot libre, entonces logras una lista de wings disponibles en tu red. Cuando seleccionas un wing en la lista, comienza a destellar. Esto identifica qué wing has seleccionado. Selecciona el dispositivo que quieres y pulsa&nbsp; <span class="softkey">Asignar seleccionado</span>.</p>

<p>Esto es para wings.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Consolas dot2, dot2 onPC, dot2 Node4 (1K) y visualizadores dot2 3D</h2>

<p>La historia es un poco diferente para el resto de dispositivos dot2.</p>

<p>Para conectar consolas al PC, nodos y visualizadores 3D, necesitamos tener una sesión iniciada. Presiona&nbsp; <span class="hardkey">Setup</span>&nbsp;y luego&nbsp;<span class="softkey">Sesiones</span>. Si tu consola ya es parte de una sesión, entonces el botón superior derecho dirá&nbsp;<span class="softkey">Abandonar sesión</span>&nbsp;y el texto al lado te dice de qué sesión eres parte. Si no tienes una sesión activa, entonces el botón dice&nbsp; <span class="softkey">Iniciar o unirse a una sesión existente</span>. Puede haber cuatro sesiones diferentes operando en una red. Para conectar tus consolas, onPC , nodos y 3D, necesitan encontrarse en la misma red y contar con el mismo número de sesión. Cuando pulsas el botón&nbsp;<span class="softkey">Iniciar o unirse a una sesión existente&nbsp;</span>&nbsp;logras cuatro botones, uno por cada una de las sesiones. Si el número de sesión está siendo utilizado, entonces el botón dirá&nbsp; <span class="softkey">Unirse a sesión</span>. Si no hay ninguna sesión tienes la opción de pulsar en&nbsp;<span class="softkey">New Session</span>&nbsp;y comenzar tu nueva sesión.</p>

<p>Puedes añadir Consolas, onPCs,&nbsp;3D&nbsp;y nodos DMX a tu sesión teniendo una sesión activa, y luego, en la vista de&nbsp;<span class="softkey">Sesiones</span> debajo de “Dispositivos conectados” puedes pulsar la pestaña del dispositivo que quieres añadir y finalmente el botón&nbsp;<span class="softkey">Añadir</span>. Aparecerá una lista con todos los dispositivos del tipo seleccionado disponibles en tu red. Si no hay ningún dispositivo del tipo seleccionado la vista aparecerá vacía, si hay alguno pincha el que quieras añadir. Se añadirá a la lista correspondiente del tipo de dispositivo.</p>

<p>Cuando pulsas cada sección puedes ver los diferentes dispositivos en cada una de ellas. Si la consola u onPC tiene un fondo verde brillante, entonces es el dispositivo que tienes delante. Un fondo verde oscuro es un dispositivo que es parte de tu sesión. Fondos rojos son dispositivos que deberían estar en tus redes pero no lo están.&nbsp;</p>

<p>Puedes eliminar un dispositivo de tu red seleccionándolo y pulsando&nbsp;<span class="softkey">Eliminar</span>.</p>

<p>El límite para cada sesión son 5 consolas dot2 / onPCs, cinco visualizadores dot2 3D y diez dot2 Node4 (1K)s. Cinco en cada set de universos.&nbsp;</p>

<p>Puedes fijar qué universo debería generar un nodo conectado. Puedes cambiar esto seleccionando el nodo que quieres cambiar en la columna DMX Ports y luego pulsar el encoder. Esto te da dos botones. Cada uno representa el set de universos DMX que puedes seleccionar. Pulsa en el que necesites.</p>

<p>El show recuerda a qué dispositivos debe conectar.</p>

<p>¡Llega el último capítulo!</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="03f179cf-2b46-4e3f-9974-679994c20edc">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_21_Effect/es/1.1'; " title="Go to previous page '21 - Crear Efectos'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_23_HappyProgramming/es/1.1';" title="Go to next page '23 - Feliz Programación'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13931/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
