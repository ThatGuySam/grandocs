---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_19_BlindPreviewAndDmxTest/es/1.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2f250b7a-bf34-457e-bf9f-0aea2b2d9790">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_18_MoreAboutCuesAndPlayback/es/1.3'; " title="Go to previous page '18 - More about cues and playback'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_20_Macro/es/1.3';" title="Go to next page '20 - Fun with macros'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/2f250b7a-bf34-457e-bf9f-0aea2b2d9790">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17957/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Guía de Introducción - Funciones Blind, Preview y DMX test</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Blind</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Blind</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Preview</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">DMX Test</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">"Park" Aparatos</a>
						</li>
				</ul>
			</div>

		<p>En este capítulo vamos a probar más funciones de la consola llamadas Blind,&nbsp;Vista Previa​ (Preview) y DMX test</p>

<p>En algunas ocasiones quieres ver el contenido de una cue o guardar algo en ella sin cambiar la salida actual de la consola.</p>

<p>Hay funciones diferentes que pueden ayudarnos con esto.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Blind</h2>

<p>Blind es una función que oculta eficazmente el programador a la salida de la consola. Cambias a la función Blind presionando la tecla&nbsp;<span class="hardkey">Blind</span></p>

<p>Si tienes contenido en tu programador cuando pulses Blind&nbsp;esto ya no será parte de la salida.&nbsp; Igualmente si sales de la función Blind cuando estás trabajando con algo en tu programador, será enviado a la salida.</p>

<p>Vista DMX</p>

<p>Antes de probar esto, hay una vista de la que no hemos hablado todavía y que me gustaría presentar. Se llama vista DMX&nbsp;y se muestra de esta manera:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_BlindPreviewAndDmxTest_01_1-0.png"></p>

<p>Esta vista te muestra la salida de la consola. Muestra el valor DMX actual de cada dirección DMX. Si una dirección tiene el valor 0 entonces no se muestra. Si hay algo patcheado a un canal DMX entonces tendrá un marco gris alrededor. Si es un aparato que usa más de un canal DMX, entonces el marco agrupará los canales DMX usados.</p>

<p>No voy a dar muchos más detalles de esta vista pero sí lo más destacado.</p>

<p>El fondo de cada dirección se vuelve más verde a la vez que el valor se hace mayor.</p>

<p>En la esquina derecha de la barra de título hay un botón <img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar06_1-0.PNG">&nbsp;que expande cada celda, y muestra no sólo el valor sino también que tipo de parámetro es.</p>

<p>La vista se desplaza a los aparatos seleccionados. Estos aparatos se muestran con un marco amarillo.</p>

<p>Los canales en park tienen un fondo azul. Canales DMX que se encuentran bajo el control del Test DMX tienen un fondo rojo. Veremos el PARK y lo probaremos más adelante en este capítulo.</p>

<p>Puede mostrarse de esta manera:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_BlindPreviewAndDmxTest_02_1-0.png"></p>

<p>Manteniendo pulsada la tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;se mostrará la dirección DMX en vez del valor.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Blind</h2>

<p>Intenta tener las siguientes vistas visibles: Vista Símbolos Aparato, Vista Hoja de Aparatos y Vista DMX.</p>

<p>Ejecuta la cue 1 en el cuelist principal. Esto encenderá los aparatos 5 y 7 al 40%, es lo mismo que un valor de&nbsp;DMX de 102.</p>

<p>Ahora selecciona el aparato 1 y dale un valor del 50%. Ahora esto debería estar visible en todas las pantallas. En ambas vistas de Aparatos y en la vista DMX (un valor de 128). Entonces cambia a modo Blind. Fíjate que aún puedes ver los valores en tu programador y en la vista hoja de Aparatos, pero la Vista Símbolo de Aparato muestra el aparato al 0%. También ocurre esto en la vista DMX donde&nbsp;también desaparece el valor.</p>

<p>Así que los valores del programador sólo pueden verse en la vista Hoja de Aparatos. Las otras vistas te muestran la salida real. Observe también la barra de título de las dos hojas de aparatos. La vista de símbolo dice "(Salida)" y la vista de hoja dice "(Blind)".</p>

<p>Fíjate que si pulsas Blind de nuevo, entonces tus valores del programador se vuelven a activar. Esto se puede usar para preparar una escena en tu programador y salir del modo Blind para ponerlo en vivo en el escenario.</p>

<p>Ahora debes estar pensando: “Esto está bien pero entonces simplemente lo sueltas bruscamente y puede no verse bien”. Y, tienes razón. Déjame que te enseñe el <strong>Master de Tiempo de Programador</strong>. Este es uno de masters que podemos ver en la <strong>Vista Magic Speed.&nbsp;</strong>Es un master especial que se puede usar para cambiar los tiempos de tu programador. Presiona&nbsp;<span class="hardkey">Store</span> <span class="hardkey">Time</span>&nbsp;&nbsp;<span class="softkey">Prog&nbsp;Time</span>&nbsp;y luego una de las tecla asociadas con el ejecutor número 4.</p>

<p>Ahora mueve hacia arriba el nuevo fader hasta que diga 2.5 segundos y presiona la tecla&nbsp; <span class="hardkey">Blind</span> de nuevo. Fíjate cómo los valores toman este tiempo para sus fade in y out. Las dos teclas asociadas con el fader te permiten encender y apagar el Tiempo de Programador sin tener que mover el fader. Esto es muy útil para shows en directo donde quieres preparar la siguiente escena.</p>

<p>Algo a tener en cuenta con la función Blind es que no puedes tener nada en tu programador que quieras mantener en vivo mientras estás trabajando con otra cosa de fondo. Aquí es donde la función Vista Previa nos puede ayudar.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Preview</h2>

<p>Otra función para poder visualizar algo sin darle salida real es la función Vista Previa.</p>

<p>Con esta función podemos ver y editar cues y probar cómo se ven los tiempos fade de una cue a otra. Todo sin darle salida a nada.</p>

<p>Para explicarlo mejor usaré un escenario. En nuestro teatro, el diseñador está considerando añadir el aparato 1 al 50% en la primera cue.</p>

<p>Así que apagas todo y ejecutas la cue 1. Ahora añade el aparato 1 al 50% en tu programador. Ahora el director está sentado hablando con el escenógrafo sobre este cambio. Realmente quieres añadir los Hex7's con un naranja brillante en la cue 3. Pero no puedes ir al modo Blind porque esto desactivaría el aparato 1. ¿Qué haces?</p>

<p>Prueba a presionar la tecla&nbsp;<span class="hardkey">Prvw</span> y luego la tecla grande&nbsp;&nbsp;<span class="hardkey">&nbsp; Go+ &nbsp;</span>&nbsp;que se encuentra debajo del ejecutor principal. Ahora tus vistas de aparato tienen un encabezado rojo. Esto es para avisar que lo que se está mostrando no es la salida real.</p>

<p>Fíjate que el aparato número 1 todavía se encuentra activo en la salida. La vista DMX todavía muestra la salida real de la consola. Pero el aparato 1 no está en tu programador. No está en ninguna de las vistas de aparato.&nbsp;</p>

<p>Nos encontramos en la cue número uno, tanto en la realidad como en el modo de Vista Previa. Pero ahora queremos editar la cue 3.</p>

<p>Prueba a presionar la tecla pequeña&nbsp;<span class="hardkey">Go+</span>&nbsp; en la sección comandos (es importante que sea la pequeña y no la grande bajo los ejecutores principales) y luego&nbsp;<span class="hardkey">Prvw</span>. Ahora puedes ver el fade desde la cue 1 a la 2 y el seguimiento en la cue 3. Ahora podemos añadir los Hex7's como lo haríamos normalmente.</p>

<p>Del aparato 21 al 24 necesitan estar al 15% en color naranja. Todo esto se encuentra ahora mismo en tu programador de la vista previa. Fíjate que esto está visible es ambas vistas de aparato pero ninguno de los valores ha cambiado en la hoja DMX.</p>

<p>Ahora presiona&nbsp;<span class="hardkey">Update</span> <span class="hardkey">Please</span>&nbsp;y pulsa&nbsp;<span class="softkey">Ok</span>&nbsp;para actualizar la cue número 3. Limpia tu programador y opera la siguiente cue en nuestra Vista Previa.</p>

<p>Esta es la cue 4. En este momento necesitamos apagar los Hex7's&nbsp;y añadir el valor cero a la cue. Por favor hazlo.&nbsp;</p>

<p>Piensa que ahora el director y el escenógrado han terminado de hablar y deciden que no van a añadir el aparato número 1. Ahora podemos salir del modo Vista Previa. Presiona&nbsp;<span class="hardkey">Esc</span>. &nbsp;Si tienes algo en tu línea de comando podrías necesitar pulsarlo dos veces.</p>

<p>De vuelta al mundo real, podemos ejecutar nuestras cues para verificar qué hemos programado en nuestra vista previa. Deja limpio el programador y ejecuta las cues.</p>

<p>La función Vista Previa es una herramienta útil para trabajar de fondo y verificar los tiempos de fade. Si quieres previsualizar otros ejecutores entonces necesitas presionar&nbsp;<span class="hardkey">Preview</span> y luego una tecla asociada con ese ejecutor.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>DMX Test</h2>

<p>Al principio de este capítulo he mencionado que los canales DMX que se encontraban bajo la influencia del Test DMX tienen un fondo rojo en la vista DMX. Vamos a echar un vistazo a esta opción.</p>

<p>Algunas veces es bueno poder simplemente probar un canal DMX sin tener que patchear nada. O podría ocurrir que tienes algunas luces azules que deberían estar siempre encendidas.</p>

<p>Con la vista DMX abierta prueba a pulsar lo siguiente:&nbsp; <span class="hardkey">DMX</span> <span class="hardkey">1</span> <span class="hardkey">3</span> <span class="hardkey">At</span> <span class="hardkey">5</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>. Fíjate que el fondo de este canal DMX se vuelve rojo y tiene un valor de 127 (DMX tiene un rango de 0 a 255, y el 50% se iguala con un valor de 127).</p>

<p>Puedes usar esto en cualquier canal DMX, con patch o sin él, no importa. No puedes ver en ninguna otra vista que tienes este canal DMX bajo control (excepto el icono <img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages18_1-0.png">&nbsp;al lado de la entrada de la línea de comandos en la pantalla izquierda. El DMX test tiene la mayor prioridad. Esto significa que no puedes controlar la salida del canal DMX desde tu programador o ejecutor.</p>

<p>Si quieres liberar un canal desde el DMX test puedes usar la tecla Off:&nbsp;<span class="hardkey">Off</span> <span class="hardkey">DMX</span> <span class="hardkey">1</span> <span class="hardkey">3</span> <span class="hardkey">Please</span>.&nbsp;</p>

<p>Si quieres liberar todos los canales que se encuentran bajo la influencia del DMX test, tienes dos opciones:&nbsp;<span class="hardkey">Off</span> <span class="hardkey">DMX</span> <span class="hardkey">Thru</span> <span class="hardkey">Please</span> o presiona&nbsp;<span class="hardkey">Tools</span> y luego<span class="softkey">Apagar</span><span class="softkey"> Test DMX</span>.</p>

<p>Ten cuidado con el DMX test y úsalo sólo cuando sea apropiado. Puedes gastar mucho tiempo intentando averiguar por qué un aparato no está haciendo lo que debería estar haciendo para darte cuenta finalmente que el DMX test está activo y tiene su control.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>"Park" Aparatos</h2>

<p>Podemos elegir bloquear un aparato para no cambiar sus valores por accidente. Esto se llama Park (Pausa / Aparcar / Parkear). Prueba a fijar el aparato número 1 al 50%. Ahora presiona&nbsp; <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>+<span class="hardkey">Pause</span>&nbsp;(Obtienes el comando Park) <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>. Ahora limpia tu programador. No lo puedes ver en las vistas de aparato pero el aparato se encuentra todavía al 50%. Echa un vistazo a la vista DMX. Puedes ver que el aparato tiene un valor DMX de 127. Este valor no cambiará, da igual lo que tu programador o las cues le manden hacer. Incluso ignorará el grand master y la tecla de blackout.</p>

<p>También hay un pequeño símbolo de parking &nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages10_1-0.png">&nbsp; al lado de la línea de comandos.</p>

<p>Para unpark el aparato de nuevo puedes presionar&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>+<span class="hardkey">GO+</span>&nbsp;(la pequeña y obtendrás el comando Unpark)&nbsp;<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Please</span>. Ahora el aparato vuelve a su funcionamiento normal.</p>

<p>¿Recuerdas cuando pulsábamos&nbsp;la tecla&nbsp; <span class="hardkey">Tools</span>? Uno de los botones en este menú dice&nbsp;&nbsp;<span class="softkey">Unpark&nbsp;todos los canales DMX</span>. Esto desactiva la función de Park para todos los canales DMX.</p>

<p>Si los aparatos no responden a tus comandos, deberías ver si hay un símbolo parking o un icono de tester DMX&nbsp;al lado de tu línea de comandos.</p>

<p>&nbsp;</p>

<p>En el próximo capítulo vamos a trabajar las macros.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="2f250b7a-bf34-457e-bf9f-0aea2b2d9790">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_18_MoreAboutCuesAndPlayback/es/1.3'; " title="Go to previous page '18 - More about cues and playback'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_20_Macro/es/1.3';" title="Go to next page '20 - Fun with macros'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17957/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
