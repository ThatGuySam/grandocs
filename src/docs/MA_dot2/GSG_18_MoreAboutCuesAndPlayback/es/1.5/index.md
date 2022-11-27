---
originalUrl: >-
  http://help2.malighting.com/Page/MA_dot2/GSG_18_MoreAboutCuesAndPlayback/es/1.5
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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="656501ea-6e36-417d-9774-b6ccc8e10e1a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_17_MakingMoreGroupsAndPresets/es/1.5'; " title="Go to previous page '17 - Making more groups and Presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_19_BlindPreviewAndDmxTest/es/1.5';" title="Go to next page '19 - A look at Blind, Preview and DMX tester'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/656501ea-6e36-417d-9774-b6ccc8e10e1a/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/18028/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Guía de Introducción - Más sobre cues y playbacks</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Actualizar nuestras Cues</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Otra alternativa</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Mas cambios y pequeñas correcciones</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Tiempos de Cues</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Master de Grupo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_6">Master Rate and Magic Speed</a>
						</li>
				</ul>
			</div>

		<p>Vamos a añadir los nuevos aparatos a nuestro show, veremos también algunos tiempos de cue y examinar el tracking. Supongo que has creado los presets con los mismos nombres que yo.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Actualizar nuestras Cues</h2>

<p>Vamos a la cue número 5 del cuelist principal.</p>

<p>Selecciona todos los X4 y&nbsp;los presets&nbsp;<span class="softkey">All Stage Wash</span>&nbsp;y&nbsp;<span class="softkey">Green</span>, <span class="softkey">Wide Zoom</span>&nbsp;y finalmente dales intensidad&nbsp;al 60%.</p>

<p>Presiona la tecla&nbsp;<span class="hardkey">Update</span>&nbsp;seguida de&nbsp;<span class="hardkey">Please</span>&nbsp;y selecciona "normal" y pulsa &nbsp;<span class="softkey">Ok</span>&nbsp;&nbsp;en la ventana que aparece. Esto añadirá los valores a la cue activa número 5.</p>

<p>Necesitamos que el grupo <span class="softkey">Hex 7</span>&nbsp;se encuentre al 20% y con el mismo preset green. Esto puedes actualizarlo en la cue 5.</p>

<p>También queremos añadir algunos de los nuevos profiles. Los aparatos 44 al 49 necesitan estar al 40% y con el preset de posición:&nbsp;<span class="softkey">All Stage Profile</span>. Por favor añade un gobo y un color cálido o naranja. Luego también los presets&nbsp; <span class="softkey">Wide Zoom</span>&nbsp;y&nbsp;<span class="softkey">Soft Gobo</span>&nbsp;. Finalmente añadiremos el preset de shaper&nbsp;<span class="softkey">Forrest</span>&nbsp;. Todo queda actualizado también en la cue 5.</p>

<p>Ahora ejecuta la cue 6. Ten en cuenta que esto ya no es un blackout . Los aparatos que acabamos de añadir todavía están encendidos. Sabemos que están activos en la cue 7 (cue protegida), pero los aparatos se han encendido en la cue 6 y no lo están en la 7. La razón es que dot2 es una consola tracking. Si pedimos al aparato que haga algo, lo seguirá haciendo hasta que le digamos otra cosa. La cue 7 fue marcada como protegida por lo que todo el tracking que viene de la cue 6 no afecta a la 7.</p>

<p>Así que necesitamos modificar las cues 6 y 7. Selecciona todos los aparatos que hemos encendido en la cue 5 y dales el 0%. Ahora esto tenemos que guardarlo en la cue 6, presiona&nbsp; <span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">6</span> <span class="hardkey">Please</span>&nbsp;<span class="softkey">Merge</span>.&nbsp;</p>

<p>También necesitamos que la cue 7 sea como la cue 5, podemos conseguirlo copiándola de nuevo&nbsp;&nbsp;<span class="hardkey">Copy</span>&nbsp;<span class="hardkey">Cue</span>&nbsp; &nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">7</span>&nbsp;<span class="hardkey">Please</span>&nbsp;<span class="softkey">Merge</span>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Otra alternativa</h2>

<p>Esta fue una forma de hacerlo, hay una alternativa para conseguir el mismo resultado.</p>

<p>Podríamos haber desactivado la protección en la cue&nbsp;7. Terminar todas las modificaciones en la cue 5 (arrastrando tracking a las cues 6 y 7). Le damos 0% a los aparatos y grabamos los valores en la cue&nbsp;6 pero en lugar de hacer nuestra grabación habitual seleccionando el modo de grabación "normal", podríamos haber utilizado el modo de grabación "Cue Only".</p>

<p>Esta opción nos asegura que no arrastraremos el nuevo valor de 0% a la&nbsp;cue&nbsp;7 y permanecerá en el estado que se encuentra actualmente.</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_MoreCuesAndPlayback_01_1-0.png"></p>

<p><em>Imagen 1: Seleccionar método de grabación.</em></p>

<p>Este es un ejemplo de alguna de las muchas maneras que puedes trabajar con dot2. A menudo hay más de una manera de hacer las cosas.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Mas cambios y pequeñas correcciones</h2>

<p>De cualquier manera, esto debería haber modificado el final de nuestra pequeña cuelist. Puedes probarla,&nbsp;<span class="hardkey">Goto</span> <span class="hardkey">Cue</span> <span class="hardkey">5</span> <span class="hardkey">Please</span> te llevará de vuelta a la cue 5 con el tiempo fade de la cue. Ahora prueba las cues 6 y 7.</p>

<p>Siguiendo adelante, deberíamos cambiar la cue número 4. Salta (Goto) a la cue número 4. Aquí necesitamos el aparato 41 en la posición del preset&nbsp;<span class="softkey">Chair</span>&nbsp;y el aparato 43 en la posición&nbsp;<span class="softkey">Speaker</span>. Ambos al 80% y con un color azul claro.&nbsp;</p>

<p>Ahora guarda esto como “Cue Only” en la cue 4 y vuelve a la cue 3. Echa un vistazo a tu Vista Símbolo de Aparatos. Todos los aparatos que hemos añadido están ahora en su posición y color por defecto. Presiona&nbsp;&nbsp;<span class="hardkey">&nbsp;Go+&nbsp;</span>.</p>

<p>Date cuenta que los aparatos van a la posición y cambian de color con fade. Eso también ocurre cuando ejecutamos la cue 5. Esto puede no ser muy bonito, podemos arreglarlo utilizando una función llamada&nbsp;Move&nbsp;In Black(MIB).&nbsp;La consola está siempre analizando los posibles siguientes pasos y con esta función mueve los aparatos a la siguiente posición (No sólo valores de Pan y Tilt, también el resto de atributos excepto el dimmer).</p>

<p>Para activar esta función, presiona&nbsp;<span class="hardkey">Cue</span>&nbsp;y luego pulsa el icono de herramientas&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar05_1-0.PNG">. Esto abrirá los ajustes para nuestro ejecutor principal. Hay muchas opciones, nos interesa la que se llama&nbsp;MIB. Por defecto está desactivada. Por favor pulsa el recuadro verde para activarla (una marca blanca de check) y cierra la ventana de ajustes (<span class="softkey">Esc</span>&nbsp;en la esquina superior izquierda).</p>

<p>Ahora vamos a probar nuestro cue list otra vez. Presiona&nbsp;<span class="hardkey">Off</span>&nbsp;y uno de los botones de control bajo los dos ejecutores grandes. Esto desactivará el ejecutor principal. Ahora presiona el botón&nbsp;<span class="hardkey">&nbsp;Go+&nbsp;</span>&nbsp;y ejecuta la cue 1 - Esto se ve como siempre, ejecuta la Cue 2 y automáticamente la cue 3. En la cue 3 podemos ver que los aparatos 41 y 43 ejecutan su posición y color. Ahora ya están preparados para la cue 4.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Tiempos de Cues</h2>

<p>Ahora ejecuta la cue 4. Esto le dará valores a todos los aparatos que hemos programado en la cue 5 por lo que están preparados y date cuenta que los aparatos 41 y 43 están encendidos. Continúa observándolos mientras pulsas&nbsp; <span class="hardkey">&nbsp;Go + </span>&nbsp;Mira cómo cambian de color y se mueven mientras se van apagando. Por lo que&nbsp;MIB&nbsp;soluciona el problema pre-situando los aparatos pero desde que grabamos como Cue&nbsp;Only se mueven de nuevo a su posición y color cuando avanzamos a la cue 5. Pero esto no es lo que queremos. En realidad queremos retrasar el cambio de color y el movimiento hasta que haya terminado de apagarse.</p>

<p>Echa un vistazo a la cuelist. Dado que hemos añadido muchos aparatos nuevos, ahora podemos usar la mayoría de las columnas de tiempos. Sitúate en la columna Position Delay y mantén pulsada la celda donde interacciona con la cue 5. Esto debería mostrarte la Calculadora donde puedes fijar el tiempo de Delay para la transición desde la cue 4 a la 5. Fija el delay en 5 segundos. Haz lo mismo en la columna Color Delay e incluso podemos ajustarlo un poco más. Dado que tenemos que esperar hasta que el dimmer se apague del todo, no necesitamos realizar un cambio de posición y color en 5 segundos. El color es simplemente una pequeña parte interna de todos los aparatos, así que se pueden mover en cero segundos. El movimiento de pan/tilt es más visible y debemos darle un poco más de tiempo para realizar el movimiento. Dale 1 segundo de Fade. Este debería ser tu resultado final:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_MoreCuesAndPlayback_02_1-2.png"></p>

<p><em>Imagen 2: Cue List con Tiempos de Tipos de Preset</em></p>

<p>Esto funciona porque nada más se mueve o cambia de color en esta cue. Si no deberíamos haber tenido que crear una cue entre la 4 y la 5.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Master de Grupo</h2>

<p>Imagina que vamos a mostrar este show y que a la audiencia le encanta, por lo que querrán muchas subidas y bajadas de telón. Nuestro teatro imaginario, pequeño pero genial, tiene una cortina y el stage manager quiere usarla en vez de ir hacia atrás a nuestra cue de Blackout.&nbsp;Así que necesitamos quitar todas nuestras luces frontales y la mejor manera para hacer esto es usando un Master de Grupo que puede limitar la salida para el grupo FOH.</p>

<p>Limpia tu programador y activa el grupo&nbsp; <span class="softkey">All FOH</span> Con esta selección en nuestro programador, presiona&nbsp; <span class="hardkey">Store</span> <span class="hardkey">Group</span>&nbsp;y luego una de las teclas asociadas al ejecutor número 6. Ahora esto funciona como un grupo inhibidor. Esto significa que las salidas de los aparato del grupo FOH están limitadas por este master. Cuando se encuentra al 100% entonces todos alcanzan su nivel máximo. Si pones el master al 50%, entonces este es su límite de salida.&nbsp; La salida está escalada, esto significa que si un aparato está guardado al 50% en la cue y sitúas&nbsp;el master al 50%, entonces la salida va al 50% de 50%, es decir al 25%. Es muy importante que recuerdes colocar de nuevo todos los Master de Grupo al 100% para tu show.&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Master Rate and Magic Speed</h2>

<p>En algunas ocasiones es bueno modificar dinámicamente los tiempos entre cues. Quizás quieras ajustar la velocidad de una actuación con los tiempos de cues guardados. O tienes unos fades realmente largos que quieres ver pero no esperar media hora con esa bonita puesta de sol que has programado. Entonces puedes usar el Master&nbsp;Rate. Presiona&nbsp;<span class="hardkey">Store</span> <span class="hardkey">Speed</span> y luego cualquier tecla asociada con el ejecutor número 5. En la ventana que aparece necesitas seleccionar&nbsp;<span class="softkey">Master Rate</span>. Esto te proporciona un fader Master Rate.</p>

<p>La posición normal del Master Rate se encuentra en la mitad del recorrido del fader. Todos los tiempos de cues son de 1 a 1. Así que un Fade de 5 segundos opera en 5 segundos. El valor del fader Master Rate divide los tiempos de las cues entre el valor del fader. Con lo que si el tiempo de Fade es de 5 segundos y deslizas&nbsp;hacia arriba el fader de tal manera que dice 2 el resultado es un fade de 2.5 segundos. Por otro lado, si deslizas&nbsp;el fader hacia abajo hasta que diga 0.5 el resultado es un Fade de 10 segundos.</p>

<p>Presiona la tecla&nbsp;<span class="hardkey">Magic</span>&nbsp;. Esto abrirá una ventana como esta:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MagicSpeed_1-1-3.png"></p>

<p><em>Imagen 3: Vista Mágica</em></p>

<p>Esta puede ser seleccionada como una vista en tus pantallas.</p>

<p>Prueba a ejecutar tus cues con el Master Rate en diferentes posiciones. Cuando hayas terminado deberías mover tu fader al medio y pulsar la tecla&nbsp; <span class="hardkey"><img alt="flash" src="/Media/Mlg/flash_1.png"></span> para&nbsp; reajustar el Master Rate a 1:1.</p>

<p>En el próximo capítulo vamos a trabajar un poco la programación en ciego (blind).</p>


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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="28">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="656501ea-6e36-417d-9774-b6ccc8e10e1a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_17_MakingMoreGroupsAndPresets/es/1.5'; " title="Go to previous page '17 - Making more groups and Presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_19_BlindPreviewAndDmxTest/es/1.5';" title="Go to next page '19 - A look at Blind, Preview and DMX tester'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/18028/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
