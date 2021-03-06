---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/GSG_19_BlindPreviewAndDmxTest/es/1.3'
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
		<h1>Gu??a de Introducci??n - Funciones Blind, Preview y DMX test</h1>

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

		<p>En este cap??tulo vamos a probar m??s funciones de la consola llamadas Blind,&nbsp;Vista Previa??? (Preview) y DMX test</p>

<p>En algunas ocasiones quieres ver el contenido de una cue o guardar algo en ella sin cambiar la salida actual de la consola.</p>

<p>Hay funciones diferentes que pueden ayudarnos con esto.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Blind</h2>

<p>Blind es una funci??n que oculta eficazmente el programador a la salida de la consola. Cambias a la funci??n Blind presionando la tecla&nbsp;<span class="hardkey">Blind</span></p>

<p>Si tienes contenido en tu programador cuando pulses Blind&nbsp;esto ya no ser?? parte de la salida.&nbsp; Igualmente si sales de la funci??n Blind cuando est??s trabajando con algo en tu programador, ser?? enviado a la salida.</p>

<p>Vista DMX</p>

<p>Antes de probar esto, hay una vista de la que no hemos hablado todav??a y que me gustar??a presentar. Se llama vista DMX&nbsp;y se muestra de esta manera:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_BlindPreviewAndDmxTest_01_1-0.png"></p>

<p>Esta vista te muestra la salida de la consola. Muestra el valor DMX actual de cada direcci??n DMX. Si una direcci??n tiene el valor 0 entonces no se muestra. Si hay algo patcheado a un canal DMX entonces tendr?? un marco gris alrededor. Si es un aparato que usa m??s de un canal DMX, entonces el marco agrupar?? los canales DMX usados.</p>

<p>No voy a dar muchos m??s detalles de esta vista pero s?? lo m??s destacado.</p>

<p>El fondo de cada direcci??n se vuelve m??s verde a la vez que el valor se hace mayor.</p>

<p>En la esquina derecha de la barra de t??tulo hay un bot??n <img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar06_1-0.PNG">&nbsp;que expande cada celda, y muestra no s??lo el valor sino tambi??n que tipo de par??metro es.</p>

<p>La vista se desplaza a los aparatos seleccionados. Estos aparatos se muestran con un marco amarillo.</p>

<p>Los canales en park tienen un fondo azul. Canales DMX que se encuentran bajo el control del Test DMX tienen un fondo rojo. Veremos el PARK y lo probaremos m??s adelante en este cap??tulo.</p>

<p>Puede mostrarse de esta manera:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_BlindPreviewAndDmxTest_02_1-0.png"></p>

<p>Manteniendo pulsada la tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;se mostrar?? la direcci??n DMX en vez del valor.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Blind</h2>

<p>Intenta tener las siguientes vistas visibles: Vista S??mbolos Aparato, Vista Hoja de Aparatos y Vista DMX.</p>

<p>Ejecuta la cue 1 en el cuelist principal. Esto encender?? los aparatos 5 y 7 al 40%, es lo mismo que un valor de&nbsp;DMX de 102.</p>

<p>Ahora selecciona el aparato 1 y dale un valor del 50%. Ahora esto deber??a estar visible en todas las pantallas. En ambas vistas de Aparatos y en la vista DMX (un valor de 128). Entonces cambia a modo Blind. F??jate que a??n puedes ver los valores en tu programador y en la vista hoja de Aparatos, pero la Vista S??mbolo de Aparato muestra el aparato al 0%. Tambi??n ocurre esto en la vista DMX donde&nbsp;tambi??n desaparece el valor.</p>

<p>As?? que los valores del programador s??lo pueden verse en la vista Hoja de Aparatos. Las otras vistas te muestran la salida real. Observe tambi??n la barra de t??tulo de las dos hojas de aparatos. La vista de s??mbolo dice "(Salida)" y la vista de hoja dice "(Blind)".</p>

<p>F??jate que si pulsas Blind de nuevo, entonces tus valores del programador se vuelven a activar. Esto se puede usar para preparar una escena en tu programador y salir del modo Blind para ponerlo en vivo en el escenario.</p>

<p>Ahora debes estar pensando: ???Esto est?? bien pero entonces simplemente lo sueltas bruscamente y puede no verse bien???. Y, tienes raz??n. D??jame que te ense??e el <strong>Master de Tiempo de Programador</strong>. Este es uno de masters que podemos ver en la <strong>Vista Magic Speed.&nbsp;</strong>Es un master especial que se puede usar para cambiar los tiempos de tu programador. Presiona&nbsp;<span class="hardkey">Store</span> <span class="hardkey">Time</span>&nbsp;&nbsp;<span class="softkey">Prog&nbsp;Time</span>&nbsp;y luego una de las tecla asociadas con el ejecutor n??mero 4.</p>

<p>Ahora mueve hacia arriba el nuevo fader hasta que diga 2.5 segundos y presiona la tecla&nbsp; <span class="hardkey">Blind</span> de nuevo. F??jate c??mo los valores toman este tiempo para sus fade in y out. Las dos teclas asociadas con el fader te permiten encender y apagar el Tiempo de Programador sin tener que mover el fader. Esto es muy ??til para shows en directo donde quieres preparar la siguiente escena.</p>

<p>Algo a tener en cuenta con la funci??n Blind es que no puedes tener nada en tu programador que quieras mantener en vivo mientras est??s trabajando con otra cosa de fondo. Aqu?? es donde la funci??n Vista Previa nos puede ayudar.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Preview</h2>

<p>Otra funci??n para poder visualizar algo sin darle salida real es la funci??n Vista Previa.</p>

<p>Con esta funci??n podemos ver y editar cues y probar c??mo se ven los tiempos fade de una cue a otra. Todo sin darle salida a nada.</p>

<p>Para explicarlo mejor usar?? un escenario. En nuestro teatro, el dise??ador est?? considerando a??adir el aparato 1 al 50% en la primera cue.</p>

<p>As?? que apagas todo y ejecutas la cue 1. Ahora a??ade el aparato 1 al 50% en tu programador. Ahora el director est?? sentado hablando con el escen??grafo sobre este cambio. Realmente quieres a??adir los Hex7's con un naranja brillante en la cue 3. Pero no puedes ir al modo Blind porque esto desactivar??a el aparato 1. ??Qu?? haces?</p>

<p>Prueba a presionar la tecla&nbsp;<span class="hardkey">Prvw</span> y luego la tecla grande&nbsp;&nbsp;<span class="hardkey">&nbsp; Go+ &nbsp;</span>&nbsp;que se encuentra debajo del ejecutor principal. Ahora tus vistas de aparato tienen un encabezado rojo. Esto es para avisar que lo que se est?? mostrando no es la salida real.</p>

<p>F??jate que el aparato n??mero 1 todav??a se encuentra activo en la salida. La vista DMX todav??a muestra la salida real de la consola. Pero el aparato 1 no est?? en tu programador. No est?? en ninguna de las vistas de aparato.&nbsp;</p>

<p>Nos encontramos en la cue n??mero uno, tanto en la realidad como en el modo de Vista Previa. Pero ahora queremos editar la cue 3.</p>

<p>Prueba a presionar la tecla peque??a&nbsp;<span class="hardkey">Go+</span>&nbsp; en la secci??n comandos (es importante que sea la peque??a y no la grande bajo los ejecutores principales) y luego&nbsp;<span class="hardkey">Prvw</span>. Ahora puedes ver el fade desde la cue 1 a la 2 y el seguimiento en la cue 3. Ahora podemos a??adir los Hex7's como lo har??amos normalmente.</p>

<p>Del aparato 21 al 24 necesitan estar al 15% en color naranja. Todo esto se encuentra ahora mismo en tu programador de la vista previa. F??jate que esto est?? visible es ambas vistas de aparato pero ninguno de los valores ha cambiado en la hoja DMX.</p>

<p>Ahora presiona&nbsp;<span class="hardkey">Update</span> <span class="hardkey">Please</span>&nbsp;y pulsa&nbsp;<span class="softkey">Ok</span>&nbsp;para actualizar la cue n??mero 3. Limpia tu programador y opera la siguiente cue en nuestra Vista Previa.</p>

<p>Esta es la cue 4. En este momento necesitamos apagar los Hex7's&nbsp;y a??adir el valor cero a la cue. Por favor hazlo.&nbsp;</p>

<p>Piensa que ahora el director y el escen??grado han terminado de hablar y deciden que no van a a??adir el aparato n??mero 1. Ahora podemos salir del modo Vista Previa. Presiona&nbsp;<span class="hardkey">Esc</span>. &nbsp;Si tienes algo en tu l??nea de comando podr??as necesitar pulsarlo dos veces.</p>

<p>De vuelta al mundo real, podemos ejecutar nuestras cues para verificar qu?? hemos programado en nuestra vista previa. Deja limpio el programador y ejecuta las cues.</p>

<p>La funci??n Vista Previa es una herramienta ??til para trabajar de fondo y verificar los tiempos de fade. Si quieres previsualizar otros ejecutores entonces necesitas presionar&nbsp;<span class="hardkey">Preview</span> y luego una tecla asociada con ese ejecutor.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>DMX Test</h2>

<p>Al principio de este cap??tulo he mencionado que los canales DMX que se encontraban bajo la influencia del Test DMX tienen un fondo rojo en la vista DMX. Vamos a echar un vistazo a esta opci??n.</p>

<p>Algunas veces es bueno poder simplemente probar un canal DMX sin tener que patchear nada. O podr??a ocurrir que tienes algunas luces azules que deber??an estar siempre encendidas.</p>

<p>Con la vista DMX abierta prueba a pulsar lo siguiente:&nbsp; <span class="hardkey">DMX</span> <span class="hardkey">1</span> <span class="hardkey">3</span> <span class="hardkey">At</span> <span class="hardkey">5</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>. F??jate que el fondo de este canal DMX se vuelve rojo y tiene un valor de 127 (DMX tiene un rango de 0 a 255, y el 50% se iguala con un valor de 127).</p>

<p>Puedes usar esto en cualquier canal DMX, con patch o sin ??l, no importa. No puedes ver en ninguna otra vista que tienes este canal DMX bajo control (excepto el icono <img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages18_1-0.png">&nbsp;al lado de la entrada de la l??nea de comandos en la pantalla izquierda. El DMX test tiene la mayor prioridad. Esto significa que no puedes controlar la salida del canal DMX desde tu programador o ejecutor.</p>

<p>Si quieres liberar un canal desde el DMX test puedes usar la tecla Off:&nbsp;<span class="hardkey">Off</span> <span class="hardkey">DMX</span> <span class="hardkey">1</span> <span class="hardkey">3</span> <span class="hardkey">Please</span>.&nbsp;</p>

<p>Si quieres liberar todos los canales que se encuentran bajo la influencia del DMX test, tienes dos opciones:&nbsp;<span class="hardkey">Off</span> <span class="hardkey">DMX</span> <span class="hardkey">Thru</span> <span class="hardkey">Please</span> o presiona&nbsp;<span class="hardkey">Tools</span> y luego<span class="softkey">Apagar</span><span class="softkey"> Test DMX</span>.</p>

<p>Ten cuidado con el DMX test y ??salo s??lo cuando sea apropiado. Puedes gastar mucho tiempo intentando averiguar por qu?? un aparato no est?? haciendo lo que deber??a estar haciendo para darte cuenta finalmente que el DMX test est?? activo y tiene su control.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>"Park" Aparatos</h2>

<p>Podemos elegir bloquear un aparato para no cambiar sus valores por accidente. Esto se llama Park (Pausa / Aparcar / Parkear). Prueba a fijar el aparato n??mero 1 al 50%. Ahora presiona&nbsp; <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>+<span class="hardkey">Pause</span>&nbsp;(Obtienes el comando Park) <span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>. Ahora limpia tu programador. No lo puedes ver en las vistas de aparato pero el aparato se encuentra todav??a al 50%. Echa un vistazo a la vista DMX. Puedes ver que el aparato tiene un valor DMX de 127. Este valor no cambiar??, da igual lo que tu programador o las cues le manden hacer. Incluso ignorar?? el grand master y la tecla de blackout.</p>

<p>Tambi??n hay un peque??o s??mbolo de parking &nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages10_1-0.png">&nbsp; al lado de la l??nea de comandos.</p>

<p>Para unpark el aparato de nuevo puedes presionar&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>+<span class="hardkey">GO+</span>&nbsp;(la peque??a y obtendr??s el comando Unpark)&nbsp;<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Please</span>. Ahora el aparato vuelve a su funcionamiento normal.</p>

<p>??Recuerdas cuando puls??bamos&nbsp;la tecla&nbsp; <span class="hardkey">Tools</span>? Uno de los botones en este men?? dice&nbsp;&nbsp;<span class="softkey">Unpark&nbsp;todos los canales DMX</span>. Esto desactiva la funci??n de Park para todos los canales DMX.</p>

<p>Si los aparatos no responden a tus comandos, deber??as ver si hay un s??mbolo parking o un icono de tester DMX&nbsp;al lado de tu l??nea de comandos.</p>

<p>&nbsp;</p>

<p>En el pr??ximo cap??tulo vamos a trabajar las macros.</p>


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

	
