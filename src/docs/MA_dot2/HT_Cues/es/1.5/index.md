---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/HT_Cues/es/1.5'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="511081dd-5ffb-4aaa-8d09-a0859b0d0a19">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Presets/es/1.5'; " title="Go to previous page 'Work with presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Chasers/es/1.5';" title="Go to next page 'Work with chasers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/511081dd-5ffb-4aaa-8d09-a0859b0d0a19/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/14652/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Cómo trabajar con Cues</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Crear cues</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Actualizar una cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Etiquetar (nombrar) una cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Cambiar los tiempos de cue</a>
								<ul>
										<li><a href="#toc_header_anchor_5">Tiempos por defecto</a></li>
										<li><a href="#toc_header_anchor_6">Asignar tiempos cuando grabas</a></li>
										<li><a href="#toc_header_anchor_7">Cambiar tiempos en la vista Cues</a></li>
										<li><a href="#toc_header_anchor_8">Cue triggers (disparadores)</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Ir a una cue específica en un cuelist</a>
						</li>
						<li>
							<a href="#toc_header_anchor_10">Copiar una cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_11">Mover una cue</a>
						</li>
						<li>
							<a href="#toc_header_anchor_12">Renumerar la cuelist</a>
						</li>
						<li>
							<a href="#toc_header_anchor_13">Eliminar una Cue</a>
						</li>
				</ul>
			</div>

		<p>Las Cues contienen valores para algunos o todos los aparatos. Si necesitas saber más sobre lo que son las cues, acude a la página de ayuda&nbsp;<a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">¿Qué son cues?</a>.</p>

<p>En esta página puedes encontrar cómo trabajar con cues.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Crear cues</h2>

<p>Las Cues están organizadas en un cuelist en un ejecutor. Puedes guardar cues en cualquier ejecutor que no sea un master de grupo o un master especial.</p>

<p>Necesitas algunos aparatos y valores en tu programador. Si no sabes de lo que hablo, echa un vistazo a las páginas de ayuda&nbsp;<a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">¿Qué es el Programador?</a>&nbsp;y&nbsp;<a href="/Topic/713c4cc8-7221-428e-a635-f3eca1f59635">Cómo añadir aparatos y patch</a>.</p>

<p>Con algunos valores activos en tu programador puedes elegir guardar esta información en una cue. Puede ser en el ejecutor principal o en uno de los otros ejecutores. Si no sabes qué son los ejecutores, puedes acudir a la página de ayuda&nbsp;<a href="/Topic/839f039d-2e75-4ed2-a4be-0ff458dec63d">¿Qué son ejecutores?</a>.</p>

<p>Si quieres grabar tus valores en una cue en el ejecutor principal, presiona <span class="hardkey">Store</span> <span class="hardkey">Please</span>. Esto grabará el primer número de cue disponible. Si no tienes nada en el ejecutor principal antes de hacer esto, entonces tendrás la cue número 1. Si ya tienes la cue número 1 no se grabarán los valores directamente. En vez de eso, te preguntará qué quieres hacer con ellos. Normalmente este es el caso la segunda vez que guardas una cue en un ejecutor. Aparecerá la ventana de Elegir método de grabación:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseStoreMethod01_1-0.PNG"></p>

<p>&nbsp;<em>Imagen 1: Seleccionar método de grabación&nbsp;</em></p>

<p>Aquí tienes cuatro opciones:</p>

<ul>
	<li><strong>Mezclar</strong>&nbsp;- Esta opción añadirá los valores a los ya existentes en la cue.</li>
	<li><strong>Eliminar</strong>&nbsp;- Esta opción eliminará los valores existentes del mismo tipo que tienes activos en tu programador.</li>
	<li><strong>Sobrescribir</strong>&nbsp;- &nbsp;Esto borrará el contenido actual de la cue y añadirá tus valores activos a la cue.</li>
	<li><strong>Crear Segunda Cue</strong>&nbsp;- Esta opción sólo está disponible cuando tienes una cue list con una sola cue. Pulsando esto añadirás tus valores activos actuales a una nueva cue número 2.</li>
</ul>

<p>Si quieres grabar un número de cue específico puedes puedes hacerlo con un comando. Por ejemplo, quieres guardar la cue número 5. Debes presionar las siguientes teclas:&nbsp;<span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">5</span> <span class="hardkey">Please</span>. Incluso puedes añadir un tiempo de cue mientras lo estás guardando. Por ejemplo, quieres grabar la cue número 5 con un fade time de 3 segundos. Para hacer esto debes presionar las siguientes teclas:&nbsp;<span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">5</span> <span class="hardkey">Time</span> (= Comando&nbsp;<a href="/Topic/96b21ed2-804c-42e6-9765-5f101405945d">Fade</a>) <span class="hardkey">3</span> <span class="hardkey">Please</span>.</p>

<p>Si no especificas un tiempo de cue específico cuando grabas la cue entonces usa los tiempos por defecto fijados en la&nbsp;<a href="/Topic/04de1013-9420-4ed7-91c6-0f1cc58d6b71">Ventana Tiempos por Defecto</a>. Puedes fijarlos presionando la tecla&nbsp;<span class="hardkey">Time</span> (con la línea de comandos vacía). Se muestra de esta manera:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_Timedefaults01_1-0.PNG"></p>

<p><em>&nbsp;Imagen 2: Ventana Tiempos por defecto</em></p>

<p>Si quieres almacenar tu cue en un ejecutor diferente (no en el ejecutor principal), necesitas presionar una tecla asociada con el ejecutor. Por ejemplo, si quieres grabar la cue número 2 en un ejecutor específico. Necesitarás presionar las siguientes teclas:&nbsp;<span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> y luego presiona una de las teclas asociadas con el ejecutor donde quieres guardar la cue.</p>

<p>Cuando guardas una cue se hace un Auto-desbloqueo (Auto Unblock). Esto significa que después de que hayas grabado la cue todos los valores que no han cambiado se eliminan. Usa la función Protect (lee más abajo) si quieres "bloquear" (block) una cue.</p>

<p>El dot2 es una consola tracking. Si no sabes qué significa esto, echa un vistazo a la página de ayuda&nbsp;<a href="/Topic/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">¿Qué es Tracking?</a>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Actualizar una cue</h2>

<p>Siempre puedes guardar el contenido de tu programador activo en cualquier cue.</p>

<p>Pero si una cue se está ejecutando, tienes la posibilidad de utilizar la tecla&nbsp;<span class="hardkey">Update</span> y el proceso será más rápido. Si pulsas Update Please actualizas la cue activa en el ejecutor principal.</p>

<p>Si presionas&nbsp;<span class="hardkey">Update</span> seguido de una tecla en uno de los otros ejecutores, entonces actualizas la cue activa en ese ejecutor. Si no hay ninguna cue activa, no ocurre nada.</p>

<p>El botón Actualizar (Update) te mostrará una ventana que pregunta cómo actualizar. Hay dos modos llamados Normal y Cue Only. Normal realizará una actualización del tracking para la siguiente cue mientras que Cue Only mantendrá los valores actuales de la siguiente cue.</p>

<p>Cuando actualizas una cue se hace un Auto-desbloqueo (Auto Unblock). Esto significa que después que hayas actualizado la cue todos los valores que no han cambiado se eliminan. Usa la función Protect (lee más abajo) si quieres "bloquear" (block) una cue.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Etiquetar (nombrar) una cue</h2>

<p>Justo después de guardar una cue aparece la ventana emergente para especificar su nombre. Si la pulsas te lleva a la&nbsp;<a href="/Topic/26701109-1218-40c5-a9bc-26913cd9cb54">Ventana Introducir Nombre</a>.&nbsp;</p>

<p>Si necesitas etiquetar a una cue después de haber sido creada puedes usar la tecla <span class="hardkey">Label</span>&nbsp;. Por ejemplo, si quieres especificar un nombre a la cue número 2 en el ejecutor principal:&nbsp;<span class="hardkey">Label</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">Please</span>.</p>

<p>También puedes abrir la&nbsp;<a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">Vista Cues</a>&nbsp;y pulsar en el nombre de la cue que quieres cambiar. Si mantienes pulsado durante 2 segundos se mostrará la ventana para introducir nombre.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Cambiar los tiempos de cue</h2>

<p>Hay muchos tiempos diferentes en una cue. Los puedes ver en la vista de Cues.</p>

<p>Los valores habituales In Fade y Out Fade fijan los tiempos usados respectivamente por los atributos que aumentan su valor y/o los que lo disminuyen.&nbsp;Por defecto OutFade se encuentra asignado al tiempo Fade (o InFade). Por ello no importa a qué asignas el fade time pues el OutFade será el mismo. Pero tienes la posibilidad de separarlos.</p>

<p>Puedes, además, fijar un delay para el OutFade. Esto es el tiempo que la consola esperará antes de empezar con el OutFade.</p>

<p>Todos los Tipos de Preset tienen sus propios tiempos para el fade y el delay. Fijando esto se sobrescribirán los tiempos de las cues para los valores en ese Tipo de Preset.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Tiempos por defecto</h3>

<p>Puedes presionar la tecla&nbsp;<span class="hardkey">Time</span>&nbsp;para abrir la&nbsp;<a href="/Topic/04de1013-9420-4ed7-91c6-0f1cc58d6b71">ventana Tiempos por Defecto</a>. Aquí puedes fijar los tiempos que se utilizarán por defecto cuando creas nuevas cues.</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h3>Asignar tiempos cuando grabas</h3>

<p>Puedes sobrescribir los tiempos por defecto cuando grabas una cue. Por ejemplo, quieres grabar la cue 3 con un tiempo de fade de 5 segundos:&nbsp;<span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">3</span> <span class="hardkey">Time</span> (= Comando Fade) <span class="hardkey">5</span> <span class="hardkey">Please</span>.</p>

<p>La tecla&nbsp;<span class="hardkey">Time</span> tiene una función especial cuando se usa en un comando. En el ejemplo de arriba, puedes presionar varias veces la tecla&nbsp;<span class="hardkey">Time</span>&nbsp;para cambiar entre los diferentes tiempos disponibles en la cue, aunque no los tiempos de los tipos de preset.&nbsp;</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Cambiar tiempos en la vista Cues</h3>

<p>Cuando tienes la vista Cues visible, puedes mantener pulsado un valor en la vista para cambiar el valor de tiempo.</p>

<p>También puedes usar el encoder de desplazamiento para seleccionar el campo de tiempo que quieres cambiar y luego pulsarlo. Te mostrará la&nbsp;<a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">vista de calculadora</a>&nbsp;para fijar el nuevo valor.</p>

<p>También puedes presionar la tecla&nbsp;<span class="hardkey">Edit</span> y luego el campo en la vista Cues que quieres cambiar. Esto también te mostrará la vista de calculadora.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h3>Cue triggers (disparadores)</h3>

<p>Cada cue tiene un trigger. Esto es lo que hace que la cue se ejecute de una manera u otra. Hay varios triggers:</p>

<ul>
	<li><strong>Go</strong> - La cue solo se ejecutará cuando sea disparada por un comando Go.</li>
	<li><strong>Time</strong> - Cuando seleccionas&nbsp;Time,&nbsp;necesitas especificar el tiempo en la columna Tiempo Trig. El tiempo que fijes empezará a descontarse cuando la cue anterior se haya ejecutado.&nbsp;</li>
	<li><strong>Follow</strong> - Una cue en Follow&nbsp;se ejecuta cuando la cue previa a terminado todos sus tiempos.</li>
	<li><strong>Sound</strong> - La opción disparar por sonido ejecuta la cue cuando la consola recibe picos de sonido. Encontrarás diferentes opciones de sonido en la columna Tiempo Trig. Las opciones llamadas Snd y luego un número son las diferentes frecuencias fijadas. Puedes ver los sonidos entrantes en la&nbsp;<a href="/Topic/96acbacc-1ad3-41a0-8908-47107a0d8cfa">Ventana Configuración Entradas de Sonido</a>, que se encuentra en el&nbsp;<a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">Menu Tools</a>.&nbsp;</li>
	<li><strong>BPM</strong> - La cue puede ser ejecutada basándose en los BPM medidos desde las entradas de sonido. También puedes ver esto en la ventana configuración entradas de sonido.</li>
	<li><strong>Timecode</strong> - Tu cue puede ser disparada por una señal de código de tiempo entrante. Necesitas fijar el tiempo de trigger en la columna Trig Time. El Timecode utilizado se establece en la&nbsp;<a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">Ventana Configuración de Ejecutor</a>. El Timecode puede ser grabado, por favor lee más sobre esto en&nbsp;<a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">Vista Cue</a>.</li>
</ul>

<p>Puedes proteger tus cues de valores tracking que cambien la apariencia de la cue.</p>

<p>Hay una columna llamada "protegido" en la vista Cue. Esta trazará una línea blanca sobre la cue para indicar que el tracking se detiene ahí.</p>

<p>Una cue protegida funciona como una cue "bloqueada" o "cue de marca (mark)". Esto significa que mantendrá los valores de la cue (incluso los valores arrastrados de tracking) cuando la ejecutas.</p>

<p>Si ejecutas hacia atrás fuera de una cue protegida los aparatos volverán a los valores que tenían en las cues previas. Si es un valor tracked, entonces usará el tiempo Fade de la cue de la que originalmente obtuvo los valores. Por ejemplo, Aparato 1 obtiene valor de 100% en la cue 1 y de 50% en la cue 2 (tiempo fade 5 segundos). Además tienes la cue 3 (tiempo fade 1 segundo) sin cambios para el Aparato 1. Entonces guardas cue 4 con el aparato 1 al 0% y un tiempo fade de 0 segundos. Cue 4 es una cue protegida. Si estás en Cue 4 y pulsas Go- y cambias a la cue 3, entonces el aparato 1 cambiará al 50% (valor desde la cue 2) y usará el tiempo fade de la cue 2. Por tanto, otros aparatos y cambios guardados en cue 3 usarán el fade time de cue 3.</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Ir a una cue específica en un cuelist</h2>

<p>También puedes ir a una cue específica presionando la tecla&nbsp;<span class="hardkey">Goto</span> Irás a la cue tan pronto como ejecutes el comando&nbsp;(con&nbsp;<span class="hardkey">Please</span>)</p>

<p>Ej. si quieres ir a la cue número 3 pero no quieres pasar por todas las otras cues para llegar a ella:&nbsp;<span class="hardkey">Goto</span> <span class="hardkey">Cue</span> <span class="hardkey">3</span> <span class="hardkey">Please</span>.</p>

<p>Esto también se puede hacer usando un tiempo fade específico. Por ejemplo, quieres ir a la cue número 10 pero ésta tiene 2 minutos de fade. Sólo necesitas estar en la cue 10 así que te gustaría sobrescribir el tiempo fade de la cue:&nbsp;<span class="hardkey">Goto</span> <span class="hardkey">Cue</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Time</span> (= Comando Fade) <span class="hardkey">1</span> <span class="hardkey">Please</span>. Ahora fundes a la cue 10 en 1 segundo.</p>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h2>Copiar una cue</h2>

<p>Puedes copiar una cue a otra cue diferente usando la tecla&nbsp;<span class="hardkey">Copy</span> Existen dos opciones para copiar, "CueOnly" copiará los valores introducidos en la cue de origen, sin valores de tracking en los valores copiados pero dejando a las cues seguir a la nueva cue sin cambiar su apariencia. "Status" se usa para incluir valores trackeados (tracked) de la cue original. Si esto no está activado sólo copiarás los valores del atributo que en realidad están guardados en la cue de origen.</p>

<p>Dependiendo del destino de tu copia tienes diferentes opciones. Si estás copiando a una cue nueva y no existente, puedes simplemente copiarla. Si copias a una cue ya existente, entonces puedes elegir entre mezclar los nuevos valores en destino o sobrescribir los valores existentes con los nuevos. Esto borrará los valores existentes y aplicará los nuevos valores.</p>

<p>Ej. quieres copiar tu cue 2 en un nuevo lugar. Va a ser la cue número 3.5. Quieres que los valores arrastrados (tracked) de la cue número 1 sean incluidos y no quieres cambiar la cue número 4:&nbsp;<span class="hardkey">Copy</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">At</span> <span class="hardkey">3</span> <span class="hardkey">.</span> <span class="hardkey">5</span> <span class="hardkey">Please</span>. Se mostrará una ventana para eligir un Método de Copia:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_ChooseCopyMethod01_1-0.PNG"></p>

<p>&nbsp;</p>

<p><em>Imagen 3: Seleccionar método de copia.</em></p>

<p>Esto puede tener una apariencia un poco diferente dependiendo si ya tenemos la cue 3.5 o si es una nueva cue que estamos creando. Asegúrate que Status tiene una marca de verificación, y si puedes ver la opción de "CueOnly,&nbsp;asegúrate que también la tiene. Ahora pulsa&nbsp;<span class="softkey">Copiar</span>&nbsp;o&nbsp;<span class="softkey">Mezclar</span>&nbsp;dependiendo de tus necesidades.</p>

<p>Copiando una Cue haremos un&nbsp;Auto-Desbloquear (Auto Unblock). Esto significa que después de copiar todos los valores que no han cambiado son eliminados. Por favor utiliza la función Protect&nbsp;(leer arriba) si quieres "bloquear" (block) una cue.</p>

<a name="toc_header_anchor_11" id="toc_header_anchor_11" class="topic-toc-item"></a><h2>Mover una cue</h2>

<p>Puedes mover una cue usando la tecla&nbsp;<span class="hardkey">Move</span> Por ejemplo, quieres mover la cue 2 a la cue 6 (no existe por el momento):&nbsp;<span class="hardkey">Move</span> <span class="hardkey">Cue</span> <span class="hardkey">2</span> <span class="hardkey">At</span> <span class="hardkey">6</span> <span class="hardkey">Please</span>.&nbsp;Esto moverá la cue sin hacer ninguna pregunta.</p>

<p>Si mueves una cue a una cue ya existente, te preguntará si realmente quieres realizar la acción. Los valores existentes en la cue destino serán sobrescritos.</p>

<a name="toc_header_anchor_12" id="toc_header_anchor_12" class="topic-toc-item"></a><h2>Renumerar la cuelist</h2>

<p>Puedes volver a numerar una sola cue o un rango de cues. Mantén pulsado un número de cue en la vista Cues. Esto abre la&nbsp;<a href="/Topic/55344644-8c65-4e59-ad6b-2aa988a28c88">ventana Editar Numero de Cue</a>. La apariencia será similar a esta:</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_EditCueNumbers01_1-0.PNG"></p>

<p><em>Imagen 4: Ventana editar Numero de Cue.</em></p>

<p>En la parte superior de esta ventana puedes fijar el rango de cue que quieres volver a numerar. Después fijas el nuevo número de inicio y la anchura de los pasos para las cues. Cuando estés de acuerdo con tus ajustes, pulsas el botón&nbsp;<span class="softkey">Renumerar</span>.</p>

<p>No puedes usar renumerar para mover una cue, y el cuelist siempre tiene un&nbsp;orden numérico. Así que sólo puedes renumerar las cues dentro de los límites de cualquier cue antes y/o después del rango fijado.</p>

<a name="toc_header_anchor_13" id="toc_header_anchor_13" class="topic-toc-item"></a><h2>Eliminar una Cue</h2>

<p>Puedes eliminar una cue utilizando la tecla&nbsp;<span class="hardkey">Delete</span>. Cuando eliminas una cue te preguntará si quieres eliminar la cue de manera "Normal" o usando "CueOnly". Sólo te preguntará si borras una cue que no es la última. "Normal" eliminará valores tracking desde la cue anterior hasta la siguiente. Valores que deberían ser cambiados en la cue que estás borrando. "CueOnly" dejará a las siguientes cues con la misma apariencia que tenían antes de que borraras la cue.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_14" id="toc_header_anchor_14" class="topic-toc-item"></a><h2>Links relacionados</h2>

<p><a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">¿Qué es el Programador?</a></p>

<p><a href="/Topic/d0a671eb-91c4-45b5-bba6-aa5138f0e343">¿Qué son Cues?</a></p>

<p><a href="/Topic/dbf1ee09-43cb-48a1-9e9d-6d0bc5c8feb6">¿Qué es Tracking?</a></p>

<p><a href="/Topic/839f039d-2e75-4ed2-a4be-0ff458dec63d">¿Qué son ejecutores?</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="511081dd-5ffb-4aaa-8d09-a0859b0d0a19">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Presets/es/1.5'; " title="Go to previous page 'Work with presets'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Chasers/es/1.5';" title="Go to next page 'Work with chasers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/14652/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
