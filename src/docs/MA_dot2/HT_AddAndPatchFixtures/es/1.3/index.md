---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/HT_AddAndPatchFixtures/es/1.3'
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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="713c4cc8-7221-428e-a635-f3eca1f59635">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UpdatetheConsole/es/1.3'; " title="Go to previous page 'Update the console'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_SaveAndLoadShow/es/1.3';" title="Go to next page 'Save and load your show'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/713c4cc8-7221-428e-a635-f3eca1f59635/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/18031/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Como añadir aparatos y patch</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Un show nuevo y vacío</a>
								<ul>
										<li><a href="#toc_header_anchor_2">Tipo</a></li>
										<li><a href="#toc_header_anchor_3">Cantidad</a></li>
										<li><a href="#toc_header_anchor_4">ID</a></li>
										<li><a href="#toc_header_anchor_5">Nombre</a></li>
										<li><a href="#toc_header_anchor_6">Patch</a></li>
										<li><a href="#toc_header_anchor_7">Offset</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_8">Aparato con&nbsp;Multipatch.</a>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Añadir aparatos al show que has utilizado anteriormente</a>
						</li>
						<li>
							<a href="#toc_header_anchor_10">Cambiar el tipo de aparato</a>
						</li>
						<li>
							<a href="#toc_header_anchor_11">Eliminar tipos de aparatos que no utilizas</a>
						</li>
				</ul>
			</div>

		<p>En esta página trataremos todo el proceso que se lleva a cabo cuando añadimos y hacemos un patch en nuestro show. También veremos cómo eliminar aparatos que no utilizamos.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Un show nuevo y vacío</h2>

<p>En un show nuevo y vacío necesitamos añadir algunos aparatos antes de poder hacer nada con la dot2. Si ya cuentas con algún aparato en tu show entonces puedes ir directamente a&nbsp;<a href="#Adding fixture in a not empty show">Añadir aparatos al show utilizados anteriormente</a>&nbsp;en esta página de ayuda.</p>

<p>Presiona la tecla&nbsp;<span class="hardkey">Setup</span>, esto abrirá el menú&nbsp;<a href="/Topic/198599eb-ca20-4e60-b007-bb08cd2ce43b">Setup</a>. Aquí encontrarás un botón llamado&nbsp;<span class="softkey">Patch y Lista de Aparatos</span>. &nbsp;Pulsa este botón y ahora podrás ver una lista de todos los aparatos (que todavía no tenemos) en nuestro show. Ahora mismo está vacío por lo que necesitamos añadir alguno. Pulsa el botón llamado&nbsp; <span class="softkey">Añadir Nuevos Aparatos</span>&nbsp;en la parte derecha de la pantalla.</p>

<p>Esto abrirá la vista&nbsp;<a href="/Topic/dce789eb-89d8-49f1-aedc-bd9fbd45afa0">Añadir Nuevos Aparatos</a>. Aquí tenemos 6 campos de entrada diferentes en verde. Necesitamos ajustar su contenido. Las 6 cosas que necesitamos definir son:</p>

<ul>
	<li><strong>Tipo</strong>&nbsp;- Esto es el tipo de aparato que queremos añadir a nuestro show.</li>
	<li><strong>Cantidad</strong>&nbsp;- Esta es la cantidad que queremos añadir del tipo de aparato que hemos seleccionado.</li>
	<li><strong>ID</strong> - Este es el número de identificación del primer aparato que queremos seleccionar. Si añades más de un aparato entonces serán enumerados a partir de este número. Dos aparatos no pueden tener un mismo número de identificador y todos los aparatos necesitan tener uno.</li>
	<li><strong>Nombre</strong>&nbsp;- Este es el nombre sugerido para el aparato. Puedes cambiarlo y poner lo que quieras. Si finalizas el nombre con un espacio y un número entonces los aparatos serán enumerados a partir de ese número en caso de que añadas más de un aparato.</li>
	<li><strong>Patch</strong> - Esta es la dirección DMX para el aparato añadido. Si añades más de uno, los aparatos serán patcheados en la siguiente dirección disponible desde este número.</li>
	<li><strong>Offset</strong> - Utiliza este apartado para añadir automáticamente canales DMX vacíos entre tus aparatos.</li>
</ul>

<p>Algunos de los campos tienen un icono verde con tres puntos pequeños&nbsp; <img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">. Esto normalmente abre un menú de selección.</p>

<p>Los iconos de más/menos se utilizan para incrementar o disminuir el valor.</p>

<p>El pequeño icono del teclado&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ImportFixtureType01_1-0.PNG">&nbsp;abrirá un teclado virtual en la pantalla.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3>Tipo</h3>

<p>Si pulsas los tres puntos en el campo Tipo puedes ver una lista de tipos de aparatos importados a nuestro show. Esto incluye normalmente un simple dimmer y algunos aparatos LED. Puedes seleccionar uno de estos aparatos pero si el aparato que estás intentando añadir no está en la lista puedes pinchar el botón&nbsp;<span class="softkey">Seleccionar otro...</span></p>

<p>Esto abrirá la&nbsp;<a href="/Topic/a924561a-b1eb-4661-aa5f-99867413e4ea">librería tipos de Aparatos</a>. Aquí puedes seleccionar otros tipos de aparatos e importarlos a nuestro show. Esto significa que tomas una copia de un tipo de aparato de la librería de la consola y la pones en tu show. Puedes usar los encoders para cambiar de unidad.<strong> Internal </strong>es la unidad interna de la dot2. Si tienes una unidad USB conectada podrás utilizar la librería almacenada en la unidad USB.</p>

<p>Los otros encoders se usan para cambiar el fabricante del aparato, el tipo de aparato y, si el aparato utiliza más de un modo entonces puedes usar el encoder derecho para seleccionar con cual trabajar.</p>

<p>Puedes también teclear algo en el campo de búsqueda. Aquí puedes escribir el fabricante o el nombre del aparato o alguna combinación de los anteriores. La búsqueda se realizará en ambos, el fabricante y los aparatos.</p>

<p>Una vez que has localizado y seleccionado el aparato que quieres añadir, puedes pinchar el botón&nbsp;<span class="softkey">Ok</span> en la esquina superior derecha.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Cantidad</h3>

<p>Puedes ajustar la cantidad de aparatos que quieres añadir. Puedes pulsar en el campo de entrada y usar las teclas numéricas para cambiar el número o puedes usar el - y + en la parte derecha del campo de entrada para establecer el número. También puedes girar el encoder central izquierdo.</p>

<p>Fija la cantidad según el número de aparatos que quieras añadir.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>ID</h3>

<p>Todos los aparatos en nuestro show necesitan un único número de identificación. Dos aparatos no pueden tener el mismo número identificador y todos los aparatos deben tener uno.</p>

<p>Puedes ajustar el número ID de la misma manera que lo haces con la cantidad. Y tienes una opción extra. Si pulsas el botón&nbsp;<span class="softkey">Seleccionar...</span>&nbsp;abres la <a href="/Topic/01949542-9b01-4052-b2c5-ac718d5dbdfe">Ventana Seleccionar ID(s) Aparatos</a>.&nbsp;Esto te puede servir para visualizar qué ID está disponible y qué IDs se están usando. En estos momentos tienes un show nuevo con lo que no hay conflictos de ID o de IDs que estén ya usados. Volveremos a esto cuando añadamos aparatos a un show que ya tenga aparatos.</p>

<p>Selecciona el número de identificación del primer aparato.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Nombre</h3>

<p>Puedes darles un nombre a tus aparatos que te haga más fácil reconocerlos.</p>

<p>Pincha en el icono del teclado pequeño&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ImportFixtureType01_1-0.PNG">&nbsp;para abrir el teclado integrado en la pantalla o puedes usar un teclado externo. Si le das un nombre y luego un espacio y añades un número, entonces los aparatos se enumerarán a partir de ese número en caso que estés añadiendo más de un aparato.</p>

<p>El nombre no tiene que ser único.&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h3>Patch</h3>

<p>Los aparatos que añadimos necesitan una dirección DMX de patch para poder controlarlos. dot2 sugiere la primera dirección disponible después del último aparato patcheado.</p>

<p>Tienes varias opciones para ajustar este valor. Si pinchas el icono verde con los tres puntos&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">&nbsp;se despliega un menú que te permite ajustar el número del universo y la dirección DMX en el universo seleccionado.</p>

<p>Puedes pulsar el campo de entrada y usar las teclas numéricas para introducir una dirección DMX. Si la tecleas directamente entonces necesitas separar el número del universo y la dirección DMX utilizando un punto.</p>

<p>También puedes pulsar el botón&nbsp;<span class="softkey">Seleccionar...</span>&nbsp;en el lado derecho (junto al Offset) y abrir la&nbsp;<a href="/Topic/bfc8868e-9fe1-4364-be83-5f81994da9e8">Ventana Seleccionar Dirección DMX</a>. Esto te permite seleccionar el universo en la parte izquierda de la ventana, moverte y elegir una dirección en el universo seleccionado en la parte derecha de esta vista. Puedes usar los encoders izquierdo y derecho para seleccionar el universo y la dirección DMX. El encoder&nbsp;derecho del medio puedes utilizarlo para establecer el Offset&nbsp;(lee abajo sobre esto). Cuando has seleccionado una dirección DMX puedes pinchar el botón Ok en la esquina superior derecha para confirmar tu elección en la ventana de Selección de dirección DMX.</p>

<p>La dirección patch tiene que ser única. No puedes tener aparatos que usen las mismas direcciones DMX.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Offset</h3>

<p>Puedes utilizar el Offset para añadir automáticamente canales DMX libres entre tus aparatos. Si añades 10 aparatos que cada uno usa 16 canales DMX la consola los patcheará de manera lineal sin ningún espacio entre ellos. Si la primera dirección es el 1, la siguiente será 17, 34, etc. Si quieres un espacio puedes añadirlo automáticamente. Si estableces un offset mayor que la cantidad de canales que utiliza el aparato esta será la dirección de inicio para los aparatos. Ejemplo: Patcheamos 10 aparatos con 16 canales y establecemos el offset en 20, entonces el primer aparato estará en el 1, el siguiente estará en el 21, &nbsp;siguiente 41, siguiente 61, etc. Esto puede ser útil a menos que nos estemos quedando sin canales DMX libres</p>

<p>Cuando hayas ajustado los campos de entrada a tu gusto entonces puedes pinchar el botón Ok en la esquina superior derecha para confirmar tus elecciones. Esto te lleva de nuevo&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Patch y Lista de Aparatos</a>. Ahora puedes ver los aparatos que has añadido. Cada aparato tiene su propia fila, y sus columnas te permiten editar cualquier campo que desees.</p>

<p>Para finalizar los cambios en nuestro show y añadir el aparato, pulsa el botón “Hecho” en la esquina superior derecha. Aparecerá una ventana que te pide que confirmes que quieres aplicar los cambios en tu show. Pincha el botón grande que dice&nbsp;<span class="softkey">Aplicar todos los cambios</span>.</p>

<p>Ya has añadido algunos aparatos a tu show.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2>Aparato con&nbsp;Multipatch.</h2>

<p>Puedes crear Aparatos con Multipatch. Es una manera de tener diferentes direcciones DMX patcheadas al mismo ID de Aparato.</p>

<p>Selecciona el aparato al que quieres aplicar multipatch y pulsa&nbsp;<span class="softkey">Crear Multipatch</span>&nbsp;(en Setup - &gt; "Patch &amp; Lista de Aparatos"). Ahora escribe cuantas direcciones DMX extra quieres.</p>

<p>Esto te muestra unas líneas extra bajo el aparato seleccionado. Cada línea puede tener su propio nombre y dirección DMX.</p>

<p>dot2 creará un espejo de salida DMX para esas direcciones DMX. El aparato seleccionado y los multipatches comparten el mismo ID de Aparato.</p>

<p>Los aparatos Multipatch aparecen como un aparato extra para posicionarlos en el visualizador dot2 eD.</p>

<p>Para aceptar los nuevos aparatos multipatch necesitas salir de la&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Ventana Patch y Lista de Aparatos</a>&nbsp;pulsando&nbsp;<span class="softkey">Done</span>&nbsp;en la esquina superior derecha y en&nbsp;<span class="softkey">Aplicar todos los cambios</span>.</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2><a id="Adding fixture in a not empty show" name="Adding fixture in a not empty show"></a>Añadir aparatos al show que has utilizado anteriormente</h2>

<p>Si tu show ya tiene algunos aparatos pero necesitas añadir nuevos, entonces debes poner atención a los aparatos ya existentes en tu show. El proceso es prácticamente el mismo que el aplicado más arriba, pero en este caso tu show ya cuenta con algunos aparatos y, dado que algunos de los ajustes de los aparatos necesitan ser únicos, necesitarás añadir aparatos con identificación (ID) y dirección (address) de patch únicas.</p>

<p>Presiona la tecla&nbsp;<span class="hardkey">Setup</span>&nbsp;y luego el botón&nbsp;<span class="softkey">Patch y Lista de Aparatos</span>. Esto nos lleva a la&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Patch y Lista de Aparatos</a>. Aquí puedes ver los aparatos existentes. Para añadir más necesitas pinchar el botón&nbsp;<span class="softkey">Añadir Nuevos Aparatos</span></p>

<p>Ahora necesitas ajustar los cinco campos de entrada para establecer tus necesidades.</p>

<p>Algunas de las ventanas se mostrarán diferentes puesto que ahora ya tenemos aparatos en el show. Si pinchas el botón&nbsp;<span class="softkey">Seleccionar...</span>&nbsp;al lado del campo ID , verás que algunos de los campos ID en la&nbsp;<a href="/Topic/01949542-9b01-4052-b2c5-ac718d5dbdfe">Ventana Seleccionar ID(s) Aparatos</a>&nbsp;se encuentran ahora deshabilitados y hay un nombre de aparato en los IDs que están ocupados.</p>

<p>Lo mismo ocurre en la&nbsp;<a href="/Topic/bfc8868e-9fe1-4364-be83-5f81994da9e8">Ventana Seleccionar Dirección DMX</a>. Pulsa el botón&nbsp;<span class="softkey">Seleccionar...</span> al lado del campo de entrada Patch. Ahora puedes ver en el universo seleccionado en la parte izquierda de la pantalla, que los aparatos existentes están ocupando algunas de las direcciones DMX en los universos</p>

<p>Necesitas seleccionar números de ID de los aparatos y direcciones de&nbsp;patch. Necesitan ser números únicos.</p>

<p>Cuando hayas ajustado los campos de entrada que cumplan los requerimientos, entonces pincha el botón&nbsp;<span class="softkey">Ok</span>&nbsp;y sal de la&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Ventana Patch y Lista de Aparatos</a>&nbsp;pulsando&nbsp;<span class="softkey">Hecho</span>&nbsp;en la esquina superior derecha para confirmar estos nuevos ajustes en tus aparatos. Finalmente confirma pulsando&nbsp;<span class="softkey">Aplicar todos los cambios</span>.</p>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h2>Cambiar el tipo de aparato</h2>

<p>Puedes cambiar el tipo de aparato de los que ya has patcheado. La consola tratará de reemplazar de la mejor maneara posible los valores ya programados. Si cambias un tipo de aparato la consola mantendrá la mayor cantidad de datos posible o intentará convertir o adaptar al valor más cercano. Ej. Si tienes programados algunos aparatos LED wash y los remplazas por algún aparato que solo tenga rueda de color la consola tratará de encontrar el color de la rueda que más se parezca. Este no es un sistema a prueba de locos, por ello es una buena idea programar todo siempre utilizando presets. Esto hace mucho más fácil corregir la programación después de cambiar un tipo de aparato.</p>

<p>Si quieres cambiar un tipo de aparatos presiona&nbsp;<span class="hardkey">Setup</span>&nbsp;y luego&nbsp;<span class="softkey">Patch&nbsp;y Lista de Aparatos</span>. Entonces selecciona el aparato(s) que quieres cambiar y pulsa en&nbsp;<span class="softkey">Cambiar Tipo de Aparato</span>. Esto abrirá la&nbsp;<a href="/Topic/96c563e2-9cf8-4ebd-813a-8eead50ca853">Ventana seleccionar tipo de aparato</a>. Aquí puedes ver todos los tipos de aparatos actualmente en tu show. Aquí puedes seleccionar uno de estos tipos o pulsar donde dice&nbsp;<span class="softkey">Import</span>&nbsp;en la barra de título. Esto abrirá la&nbsp;<a href="/Topic/a924561a-b1eb-4661-aa5f-99867413e4ea">Ventana Importar Tipo de Aparato</a>&nbsp;- aquí puedes importar a tu show un nuevo tipo de aparato.</p>

<p>Cuando tengas seleccionado el tipo de aparato que quieras añadir pulsa <span class="softkey">Ok</span>&nbsp;en la esquina superior derecha.</p>

<p>Si cambias el tipo de aparato por alguno que utilice una cantidad diferente de canales DMX podrías necesitar re-patchear tus aparatos.</p>

<p>Pulsa&nbsp;<span class="softkey">Ok</span>&nbsp;para salir del patch y lista de aparatos y selecciona&nbsp;<span class="softkey">Aplicar todos los cambios</span>. Ahora has cambiado el tipo de aparato y debes probar tus cues.</p>

<a name="toc_header_anchor_11" id="toc_header_anchor_11" class="topic-toc-item"></a><h2>Eliminar tipos de aparatos que no utilizas</h2>

<p>Cuando hemos hablado sobre cambiar tipos de aparatos hemos trabajado en la&nbsp;<a href="/Topic/96c563e2-9cf8-4ebd-813a-8eead50ca853">Ventana Seleccionar Tipo de Aparato</a>. Aquí podemos también eliminar los tipos de aparato que no utilizamos. Ábrela como explicamos arriba, en la barra de título hay un icono de basura&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelectFixtureType07_1-1-3.png">. Si selecciona uno de los tipos de aparato y pulsas en el icono la consola te preguntará si realmente quieres eliminar este tipo de aparato. Tan solo debes confirmar o cancelar la operación.</p>

<div class="restriction">No puedes eliminar tipos de aparatos que están asignados y patcheados</div>

<p>&nbsp;</p>


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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="713c4cc8-7221-428e-a635-f3eca1f59635">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UpdatetheConsole/es/1.3'; " title="Go to previous page 'Update the console'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_SaveAndLoadShow/es/1.3';" title="Go to next page 'Save and load your show'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/18031/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
