---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/GSG_12_WorkingWithColors/es/1.5'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ba0f3294-91ba-4c5d-9fff-154e31ac12b3">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_11_AddingLedFixtures/es/1.5'; " title="Go to previous page '11 - Adding LED fixtures'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_13_CreatingPresets/es/1.5';" title="Go to next page '13 - Creating presets'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/ba0f3294-91ba-4c5d-9fff-154e31ac12b3">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17885/16'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.5</span>
			</div>
		<h1>Guía de Introducción - Trabajando con colores</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Picker</a>
								<ul>
										<li><a href="#toc_header_anchor_2">Fader</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Swatchbook</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Raw</a>
						</li>
				</ul>
			</div>

		<p>Los aparatos que acabamos de añadir tienen seis&nbsp;LED's diferentes de color y un dimmer (también hay un canal de "curva" pero no vamos a hablar ahora de eso).</p>

<p>Antes de hacer nada con ellos deberíamos crear un grupo con todos. Llámalo All&nbsp;Hex7 y guárdarlo como grupo número 10.</p>

<p>Vamos a echar un vistazo al control de color. En el lado derecho de la pantalla 1 encontrarás un botón llamado&nbsp;​ <span class="softkey">Color</span>. Asegúrate que has seleccionado primero el grupo All&nbsp;Hex7 y luego pulsa este botón.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Picker</h2>

<p>Lo primero que vemos se llama Color Picker. Es una gran zona táctil coloreada que puedes pulsar para cambiar el color de salida de los LED's.</p>

<p>Hay dos faders en el lado derecho de la pantalla. El de la izquierda controla el brillo de los aparatos. El de la derecha se llama Calidad.&nbsp;</p>

<p>El fader de calidad merece su propia explicación. Funciona con aparatos que tienen más de tres colores. Puedes elegir cómo la consola debería mezclar los colores. En la parte superior del fader dice "Primario". Esto significa que el aparato sólo usará los tres LEDs primarios rojo, verde y azul para crear los colores deseados. En la parte baja del fader dice "Puro". Esto significa que la consola intentará mezclar el color más próximo al color deseado usando todos los LEDs de color disponibles en los aparatos.</p>

<p>La mejor manera de probar esto es elegir un color en el color picker. No elijas los colores primarios saturados sino algo del medio. Ahora mueve el quality fader mientras tienes visible la Vista Hoja de Aparatos. Fíjate cómo se mezcla el color mirando las diferentes columnas de color. Cada columna simboliza uno de los colores disponibles en el aparato (R, G, B, Ambar, Blanco y UV). Fíjate que los encoders te dan control sobre el Hue, Saturación, Brillo y Q (calidad). Esta es su función primaria. También tienen una función secundaria. Se puede lograr manteniendo pulsada la tecla <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>. Echa un vistazo a la imagen de abajo. Es el mismo encoder pero a la izquierda está la función primaria. El del medio es la función secundaria.</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_WorkingWithColors_01_1-0.png"></p>

<p>El tercer ejemplo en la imagen te muestra que es posible cambiar la resolución o la velocidad del encoder. El icono con un pequeño círculo con un punto dentro es la tecla Encoder, y su aspecto es:&nbsp; <span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span>. Pulsándolo cambia la resolución pudiendo ser despacio o normal. El tercer ejemplo que se encuentra arriba muestra cómo aparece cuando es despacio, y los otros dos muestran una velocidad normal.</p>

<p>Vamos a intentar algo divertido en el Color Picker, Selecciona todos los aparatos Hex7 y selecciona un color utilizando el Picker. Ahora presiona la tecla&nbsp;<span class="hardkey">Align</span> y manteniendo presionado selecciona otro color, Observa como se extiende el color. Ahora el color Picker está trabajando con la función Align. Prueba los diferentes modos de Align.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3>Fader</h3>

<p>Vamos a ver a otras maneras de seleccionar un color. En la parte de arriba de la pantalla 1 hay varias opciones para controlar los colores. Ahora mismo está seleccionado el que se llama&nbsp;<span class="softkey">Picker</span>. Prueba a pulsar el que dice Fader. Esto cambia la vista para mostrarnos tres sistemas diferentes de mezcla mediante faders. Son: “Hue, Saturación, Brillo”, “Cyan, Magenta, Amarillo” y “Rojo, Verde, Azul”. En la parte derecha se encuentra el quality fader de nuevo.</p>

<p>Estas tres secciones están conectadas entre sí. Significa que si tú cambias el color sobre uno de ellos, los otros también se mueven. Puedes cambiar al sistema que quieras porque los&nbsp;encoders están conectados automáticamente con cada opción que elijas. Pruébalo y también fíjate en las funciones primaria y secundaria de los encoders.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Swatchbook</h2>

<p>Ahora vamos a centrarnos en el&nbsp; <span class="softkey">Swatchbook</span> - púlsalo.</p>

<p>Esto nos permite elegir un color del catálogo de muchos de los principales fabricantes de gelatinas. No es un sistema exacto pero te da un color que se parece.</p>

<p>En la parte izquierda puedes elegir un fabricante. Posteriormente, el lado derecho te dará la lista de sus gelatinas. Puedes usar el encoder de la derecha y de la izquierda para desplazar las dos listas.&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Raw</h2>

<p>La última forma de controlar los colores es el Raw control con los canales actuales de color del aparato. Pulsa donde dice&nbsp; <span class="softkey">Raw:&nbsp;MixColor A</span>. Esto te da los 4 primeros canales de color. Al lado se encuentra&nbsp;<span class="softkey"> MixColor B</span>&nbsp;.Este es el siguiente set de 4 canales.</p>

<p>Aquí puedes cambiar el valor en la pantalla o con los encoders.</p>

<p>Cuando tenemos otros aparatos con menos opciones de color, deben también mostrar los raw color faders, pero si el color no está disponible, entonces los faders dicen “No matching fixture selected.</p>

<p>&nbsp;</p>

<p>Estos son los diferentes modos en los que podemos controlar los colores.</p>

<p>En el siguiente capítulo vamos a hablar sobre los “Presets”.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ba0f3294-91ba-4c5d-9fff-154e31ac12b3">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_11_AddingLedFixtures/es/1.5'; " title="Go to previous page '11 - Adding LED fixtures'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_13_CreatingPresets/es/1.5';" title="Go to next page '13 - Creating presets'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17885/16';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
