---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_12_CreatingPresets/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9e64f733-cc94-4181-8af1-d4fb5e640af7">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_11_WorkingWithColors/es/1.1'; " title="Go to previous page '11 - Trabajando con colores'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_13_ExternalScreen/es/1.1';" title="Go to next page '13 - Pantalla externa'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/9e64f733-cc94-4181-8af1-d4fb5e640af7">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13829/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Guía de Introducción - Creando los primeros presets</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Creando Presets</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Usando Presets</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">&nbsp;</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Creando más Ejecutores</a>
						</li>
				</ul>
			</div>

		<p>En el último capítulo hemos aprendido a controlar los colores de nuestros LEDs. Pero sería molesto tener que usar siempre este método cuando tenemos que seleccionar los colores que usamos en nuestro show.</p>

<p>Así que podemos guardar nuestros colores seleccionados en un&nbsp;<strong>Preset</strong> de color.</p>

<p>Los Presets están divididos en diferentes tipos. Existen Tipos de Preset, de acuerdo con los aparatos que hayas patcheado. Son los mismos Tipos de Preset que seleccionas en la parte derecha de la pantalla 1. Ahora tenemos “Dimmer”, “Color” y algo llamado "All".</p>

<p>En la pantalla 2 necesitas pulsar donde dice&nbsp;<span class="softkey">Presets</span>&nbsp;y esto abrirá su correspondiente&nbsp;vista. Esta vista es dinámica así que cuando seleccionas dimmer, color o All en la barra de&nbsp;presets a la derecha de la pantalla 1, entonces la vista preset cambiará. Haz pruebas.</p>

<p>La vista preset es como el pool de los Grupos. Cada cuadrado es un preset. El preset no sólo contiene una selección de aparatos sino también los valores de los mismos, pero sólo los valores dentro de ese tipo de preset. La excepción es el tipo "All". Aquí puedes grabar todo tipo de valores (Ej. Dimmer, color, posición, gobo, etc). El preset sólo funciona para los aparatos que has seleccionado cuando lo guardas. Más adelante podrás añadir más aparatos a ese mismo preset.</p>

<p>Cuando guardas presets en una cue, no guardas los valores que están guardados en el preset. En realidad guardas una referencia (o el link) al preset. De esta manera si posteriormente cambias el contenido del preset las cues donde hayas utilizado el preset se actualizarán automáticamente. Vamos a probar esto.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Creando Presets</h2>

<p>Selecciona cuatro LED's y dales color. Pulsa&nbsp; <span class="hardkey">Store</span> &nbsp;&nbsp;y luego la primera casilla de preset de color disponible en la vista preset.</p>

<p>Date cuenta que la consola automáticamente le da un nombre al preset. Puedes cambiar el nombre si quieres, igual que los grupos.</p>

<p>El preset que acabamos de almacenar está ahora en el programador. Ya no tenemos los valores sino un link al preset. Si grabamos ahora una cue, la información que almacenamos es la que contiene el preset.</p>

<p>La mejor manera de ver esto es en la vista de Aparatos en modo hoja.</p>

<p>Prueba a darle a tus aparatos un valor de dimmer y un color nuevo. Ahora guarda esto como un nuevo preset de color. Fíjate que aún tenemos los valores de dimmer en nuestro programador con color rojo en la barra preset en la parte derecha de la pantalla 1. Esto es porque no podemos almacenar valores de dimmer en un preset de color. Ahora en nuestro programador quedan los valores de dimmer originales y un link al nuevo preset de color.</p>

<p>Ahora prueba a pulsar&nbsp;<span class="softkey">All,</span>&nbsp;luego&nbsp;<span class="hardkey">Store</span>&nbsp;y pulsa sobre uno de los presets de All&nbsp;vacíos. Hemos grabado un preset&nbsp;que tiene el color rojo y un valor de dimmer.</p>

<p>Crea algunos&nbsp;presets más de color para que tengamos algo entre lo que elegir.&nbsp;</p>

<p>Crea un preset de color rojo y llámalo <strong>MyColor</strong>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Usando Presets</h2>

<p>Limpia tu programador y pulsa uno de los presets de color una vez. Esto no cambió el color, lo que hizo fue seleccionar los aparatos que pueden usar el preset que has pulsado, Pulsa de nuevo el preset. Ahora han cambiado de color.</p>

<p>Si no tienes una selección cuando pulsas un preset, entonces el o los aparatos que pueden usar ese preset quedan seleccionados. Si tienes una selección de aparatos y pulsas un preset, entonces los aparatos que pueden usar ese preset toman la referencia al preset en el programador y la salida. Recuerda que en realidad no estás consiguiendo los valores directamente en tu programador, sino que consigues la referencia o el link al preset y es esta referencia o link la que se ve reflejada en el programador.</p>

<p>Selecciona el preset MyColor y guarda una cue en el ejecutorr 101 (la fila de arriba más próxima al ejecutor principal).</p>

<p>Limpia el programador y ejecuta la cue. Ahora tus aparatos deberían estar en rojo.</p>

<p>Selecciona los aparatos y ponles&nbsp;un color azul. Ahora pulsa&nbsp; <span class="hardkey">Store</span>&nbsp;y luego sobre el preset&nbsp;<span class="softkey">MyColor.</span>&nbsp;Selecciona la opción&nbsp;<span class="softkey">Mezclar</span>&nbsp;en la ventana de opciones de grabación. Finaliza limpiando el programador.</p>

<p>Los aparatos están todavía en color azul. Eso es porque la cue que hemos guardado está todavía activa y aunque la cue fue guardada cuando el preset estaba en rojo, entonces cambiaste el preset&nbsp;así que ahora la cue nos dará los aparatos en azul.&nbsp;</p>

<p>Intenta borrar el preset MyColor. Dale a OK en la ventana de confirmación.</p>

<p>Los aparatos están todavía en azul!</p>

<p>Cuando borras un preset los valores (reales) del preset son guardados dentro de las cues donde fueron usados. Por ello pierdes el preset y su link pero tus cues&nbsp;siguen apareciendo igual.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>&nbsp;</h2>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Creando más Ejecutores</h2>

<p>Antes de continuar, vamos a crear más ejecutores y cambiar lo que hacen las teclas ejecutor.</p>

<p>Todavía tenemos la cue azul en el ejecutor 101. Selecciona tus cuatro aparatos y luego uno de los presets que has creado (no selecciones uno azul). Ahora guarda esto en el ejecutor 102.</p>

<p>Limpia tu programador y prueba qué pasa con el color de los aparatos cuando los ejecutas.</p>

<p>Ahora mismo las teclas ejecutores funcionan con una opción de toogle (on/off), lo que significa que puedes encender y apagar el ejecutor&nbsp;101 con la misma tecla. Hay algo más que añadir. Si todos los valores guardados en la cue activa se encuentran bajo el control de un ejecutor diferente, entonces el ejecutor anterior se apaga automáticamente.&nbsp;</p>

<p>En el siguiente capítulo vamos a profundizar en la pantallas externas.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9e64f733-cc94-4181-8af1-d4fb5e640af7">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_11_WorkingWithColors/es/1.1'; " title="Go to previous page '11 - Trabajando con colores'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_13_ExternalScreen/es/1.1';" title="Go to next page '13 - Pantalla externa'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13829/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
