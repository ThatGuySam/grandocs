---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/HT_AddAndPatchFixtures/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="713c4cc8-7221-428e-a635-f3eca1f59635">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UpdatetheConsole/es/1.1'; " title="Go to previous page 'Actualizar la consola'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_SaveAndLoadShow/es/1.1';" title="Go to next page 'Salvar y cargar tu show'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/713c4cc8-7221-428e-a635-f3eca1f59635">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13986/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Como a??adir aparatos y patch</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Un show nuevo y vac??o</a>
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
							<a href="#toc_header_anchor_8">A??adir aparatos al show que has utilizado anteriormente</a>
						</li>
						<li>
							<a href="#toc_header_anchor_9">Cambiar el tipo de aparato</a>
						</li>
						<li>
							<a href="#toc_header_anchor_10">Eliminar tipos de aparatos que no utilizas</a>
						</li>
				</ul>
			</div>

		<p>En esta p??gina trataremos todo el proceso que se lleva a cabo cuando a??adimos y hacemos un patch en nuestro show. Tambi??n veremos c??mo eliminar aparatos que no utilizamos.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Un show nuevo y vac??o</h2>

<p>En un show nuevo y vac??o necesitamos a??adir algunos aparatos antes de poder hacer nada con la dot2. Si ya cuentas con alg??n aparato en tu show entonces puedes ir directamente a&nbsp;<a href="#Adding fixture in a not empty show">A??adir aparatos al show utilizados anteriormente</a>&nbsp;en esta p??gina de ayuda.</p>

<p>Presiona la tecla&nbsp;<span class="hardkey">Setup</span>, esto abrir?? el men??&nbsp;<a href="/Topic/198599eb-ca20-4e60-b007-bb08cd2ce43b">Setup</a>. Aqu?? encontrar??s un bot??n llamado&nbsp;<span class="softkey">Patch y Lista de Aparatos</span>. &nbsp;Pulsa este bot??n y ahora podr??s ver una lista de todos los aparatos (que todav??a no tenemos) en nuestro show. Ahora mismo est?? vac??o por lo que necesitamos a??adir alguno. Pulsa el bot??n llamado&nbsp; <span class="softkey">A??adir Nuevos Aparatos</span>&nbsp;en la parte derecha de la pantalla.</p>

<p>Esto abrir?? la vista&nbsp;<a href="/Topic/dce789eb-89d8-49f1-aedc-bd9fbd45afa0">A??adir Nuevos Aparatos</a>. Aqu?? tenemos 6 campos de entrada diferentes en verde. Necesitamos ajustar su contenido. Las 6 cosas que necesitamos definir son:</p>

<ul>
	<li><strong>Tipo</strong>&nbsp;- Esto es el tipo de aparato que queremos a??adir a nuestro show.</li>
	<li><strong>Cantidad</strong>&nbsp;- Esta es la cantidad que queremos a??adir del tipo de aparato que hemos seleccionado.</li>
	<li><strong>ID</strong> - Este es el n??mero de identificaci??n del primer aparato que queremos seleccionar. Si a??ades m??s de un aparato entonces ser??n enumerados a partir de este n??mero. Dos aparatos no pueden tener un mismo n??mero de identificador y todos los aparatos necesitan tener uno.</li>
	<li><strong>Nombre</strong>&nbsp;- Este es el nombre sugerido para el aparato. Puedes cambiarlo y poner lo que quieras. Si finalizas el nombre con un espacio y un n??mero entonces los aparatos ser??n enumerados a partir de ese n??mero en caso de que a??adas m??s de un aparato.</li>
	<li><strong>Patch</strong> - Esta es la direcci??n DMX para el aparato a??adido. Si a??ades m??s de uno, los aparatos ser??n patcheados en la siguiente direcci??n disponible desde este n??mero.</li>
	<li><strong>Offset</strong> - Utiliza este apartado para a??adir autom??ticamente canales DMX vac??os entre tus aparatos.</li>
</ul>

<p>Algunos de los campos tienen un icono verde con tres puntos peque??os&nbsp; <img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">. Esto normalmente abre un men?? de selecci??n.</p>

<p>Los iconos de m??s/menos se utilizan para incrementar o disminuir el valor.</p>

<p>El peque??o icono del teclado&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ImportFixtureType01_1-0.PNG">&nbsp;abrir?? un teclado virtual en la pantalla.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h3>Tipo</h3>

<p>Si pulsas los tres puntos en el campo Tipo puedes ver una lista de tipos de aparatos importados a nuestro show. Esto incluye normalmente un simple dimmer y algunos aparatos LED. Puedes seleccionar uno de estos aparatos pero si el aparato que est??s intentando a??adir no est?? en la lista puedes pinchar el bot??n&nbsp;<span class="softkey">Seleccionar otro...</span></p>

<p>Esto abrir?? la&nbsp;<a href="/Topic/a924561a-b1eb-4661-aa5f-99867413e4ea">librer??a tipos de Aparatos</a>. Aqu?? puedes seleccionar otros tipos de aparatos e importarlos a nuestro show. Esto significa que tomas una copia de un tipo de aparato de la librer??a de la consola y la pones en tu show. Puedes usar los encoders para cambiar de unidad.<strong> Internal </strong>es la unidad interna de la dot2. Si tienes una unidad USB conectada podr??s utilizar la librer??a almacenada en la unidad USB.</p>

<p>Los otros encoders se usan para cambiar el fabricante del aparato, el tipo de aparato y, si el aparato utiliza m??s de un modo entonces puedes usar el encoder derecho para seleccionar con cual trabajar.</p>

<p>Puedes tambi??n teclear algo en el campo de b??squeda. Aqu?? puedes escribir el fabricante o el nombre del aparato o alguna combinaci??n de los anteriores. La b??squeda se realizar?? en ambos, el fabricante y los aparatos.</p>

<p>Una vez que has localizado y seleccionado el aparato que quieres a??adir, puedes pinchar el bot??n&nbsp;<span class="softkey">Ok</span> en la esquina superior derecha.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Cantidad</h3>

<p>Puedes ajustar la cantidad de aparatos que quieres a??adir. Puedes pulsar en el campo de entrada y usar las teclas num??ricas para cambiar el n??mero o puedes usar el - y + en la parte derecha del campo de entrada para establecer el n??mero. Tambi??n puedes girar el encoder central izquierdo.</p>

<p>Fija la cantidad seg??n el n??mero de aparatos que quieras a??adir.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>ID</h3>

<p>Todos los aparatos en nuestro show necesitan un ??nico n??mero de identificaci??n. Dos aparatos no pueden tener el mismo n??mero identificador y todos los aparatos deben tener uno.</p>

<p>Puedes ajustar el n??mero ID de la misma manera que lo haces con la cantidad. Y tienes una opci??n extra. Si pulsas el bot??n&nbsp;<span class="softkey">Seleccionar...</span>&nbsp;abres la <a href="/Topic/01949542-9b01-4052-b2c5-ac718d5dbdfe">Ventana Seleccionar ID(s) Aparatos</a>.&nbsp;Esto te puede servir para visualizar qu?? ID est?? disponible y qu?? IDs se est??n usando. En estos momentos tienes un show nuevo con lo que no hay conflictos de ID o de IDs que est??n ya usados. Volveremos a esto cuando a??adamos aparatos a un show que ya tenga aparatos.</p>

<p>Selecciona el n??mero de identificaci??n del primer aparato.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Nombre</h3>

<p>Puedes darles un nombre a tus aparatos que te haga m??s f??cil reconocerlos.</p>

<p>Pincha en el icono del teclado peque??o&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ImportFixtureType01_1-0.PNG">&nbsp;para abrir el teclado integrado en la pantalla o puedes usar un teclado externo. Si le das un nombre y luego un espacio y a??ades un n??mero, entonces los aparatos se enumerar??n a partir de ese n??mero en caso que est??s a??adiendo m??s de un aparato.</p>

<p>El nombre no tiene que ser ??nico.&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h3>Patch</h3>

<p>Los aparatos que a??adimos necesitan una direcci??n DMX de patch para poder controlarlos. dot2 sugiere la primera direcci??n disponible despu??s del ??ltimo aparato patcheado.</p>

<p>Tienes varias opciones para ajustar este valor. Si pinchas el icono verde con los tres puntos&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_AddNewFixturesWindow01_1-0.PNG">&nbsp;se despliega un men?? que te permite ajustar el n??mero del universo y la direcci??n DMX en el universo seleccionado.</p>

<p>Puedes pulsar el campo de entrada y usar las teclas num??ricas para introducir una direcci??n DMX. Si la tecleas directamente entonces necesitas separar el n??mero del universo y la direcci??n DMX utilizando un punto.</p>

<p>Tambi??n puedes pulsar el bot??n&nbsp;<span class="softkey">Seleccionar...</span>&nbsp;en el lado derecho (junto al Offset) y abrir la&nbsp;<a href="/Topic/bfc8868e-9fe1-4364-be83-5f81994da9e8">Ventana Seleccionar Direcci??n DMX</a>. Esto te permite seleccionar el universo en la parte izquierda de la ventana, moverte y elegir una direcci??n en el universo seleccionado en la parte derecha de esta vista. Puedes usar los encoders izquierdo y derecho para seleccionar el universo y la direcci??n DMX. El encoder&nbsp;derecho del medio puedes utilizarlo para establecer el Offset&nbsp;(lee abajo sobre esto). Cuando has seleccionado una direcci??n DMX puedes pinchar el bot??n Ok en la esquina superior derecha para confirmar tu elecci??n en la ventana de Selecci??n de direcci??n DMX.</p>

<p>La direcci??n patch tiene que ser ??nica. No puedes tener aparatos que usen las mismas direcciones DMX.</p>

<a name="toc_header_anchor_7" id="toc_header_anchor_7" class="topic-toc-item"></a><h3>Offset</h3>

<p>Puedes utilizar el Offset para a??adir autom??ticamente canales DMX libres entre tus aparatos. Si a??ades 10 aparatos que cada uno usa 16 canales DMX la consola los patchear?? de manera lineal sin ning??n espacio entre ellos. Si la primera direcci??n es el 1, la siguiente ser?? 17, 34, etc. Si quieres un espacio puedes a??adirlo autom??ticamente. Si estableces un offset mayor que la cantidad de canales que utiliza el aparato esta ser?? la direcci??n de inicio para los aparatos. Ejemplo: Patcheamos 10 aparatos con 16 canales y establecemos el offset en 20, entonces el primer aparato estar?? en el 1, el siguiente estar?? en el 21, &nbsp;siguiente 41, siguiente 61, etc. Esto puede ser ??til a menos que nos estemos quedando sin canales DMX libres</p>

<p>Cuando hayas ajustado los campos de entrada a tu gusto entonces puedes pinchar el bot??n Ok en la esquina superior derecha para confirmar tus elecciones. Esto te lleva de nuevo&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Patch y Lista de Aparatos</a>. Ahora puedes ver los aparatos que has a??adido. Cada aparato tiene su propia fila, y sus columnas te permiten editar cualquier campo que desees.</p>

<p>Para finalizar los cambios en nuestro show y a??adir el aparato, pulsa el bot??n ???Hecho??? en la esquina superior derecha. Aparecer?? una ventana que te pide que confirmes que quieres aplicar los cambios en tu show. Pincha el bot??n grande que dice&nbsp;<span class="softkey">Aplicar todos los cambios</span>.</p>

<p>Ya has a??adido algunos aparatos a tu show.</p>

<a name="toc_header_anchor_8" id="toc_header_anchor_8" class="topic-toc-item"></a><h2><a id="Adding fixture in a not empty show" name="Adding fixture in a not empty show"></a>A??adir aparatos al show que has utilizado anteriormente</h2>

<p>Si tu show ya tiene algunos aparatos pero necesitas a??adir nuevos, entonces debes poner atenci??n a los aparatos ya existentes en tu show. El proceso es pr??cticamente el mismo que el aplicado m??s arriba, pero en este caso tu show ya cuenta con algunos aparatos y, dado que algunos de los ajustes de los aparatos necesitan ser ??nicos, necesitar??s a??adir aparatos con identificaci??n (ID) y direcci??n (address) de patch ??nicas.</p>

<p>Presiona la tecla&nbsp;<span class="hardkey">Setup</span>&nbsp;y luego el bot??n&nbsp;<span class="softkey">Patch y Lista de Aparatos</span>. Esto nos lleva a la&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Patch y Lista de Aparatos</a>. Aqu?? puedes ver los aparatos existentes. Para a??adir m??s necesitas pinchar el bot??n&nbsp;<span class="softkey">A??adir Nuevos Aparatos</span></p>

<p>Ahora necesitas ajustar los cinco campos de entrada para establecer tus necesidades.</p>

<p>Algunas de las ventanas se mostrar??n diferentes puesto que ahora ya tenemos aparatos en el show. Si pinchas el bot??n&nbsp;<span class="softkey">Seleccionar...</span>&nbsp;al lado del campo ID , ver??s que algunos de los campos ID en la&nbsp;<a href="/Topic/01949542-9b01-4052-b2c5-ac718d5dbdfe">Ventana Seleccionar ID(s) Aparatos</a>&nbsp;se encuentran ahora deshabilitados y hay un nombre de aparato en los IDs que est??n ocupados.</p>

<p>Lo mismo ocurre en la&nbsp;<a href="/Topic/bfc8868e-9fe1-4364-be83-5f81994da9e8">Ventana Seleccionar Direcci??n DMX</a>. Pulsa el bot??n&nbsp;<span class="softkey">Seleccionar...</span> al lado del campo de entrada Patch. Ahora puedes ver en el universo seleccionado en la parte izquierda de la pantalla, que los aparatos existentes est??n ocupando algunas de las direcciones DMX en los universos</p>

<p>Necesitas seleccionar n??meros de ID de los aparatos y direcciones de&nbsp;patch. Necesitan ser n??meros ??nicos.</p>

<p>Cuando hayas ajustado los campos de entrada que cumplan los requerimientos, entonces pincha el bot??n&nbsp;<span class="softkey">Ok</span>&nbsp;y sal de la&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Ventana Patch y Lista de Aparatos</a>&nbsp;pulsando&nbsp;<span class="softkey">Hecho</span>&nbsp;en la esquina superior derecha para confirmar estos nuevos ajustes en tus aparatos. Finalmente confirma pulsando&nbsp;<span class="softkey">Aplicar todos los cambios</span>.</p>

<a name="toc_header_anchor_9" id="toc_header_anchor_9" class="topic-toc-item"></a><h2>Cambiar el tipo de aparato</h2>

<p>Puedes cambiar el tipo de aparato de los que ya has patcheado. La consola tratar?? de reemplazar de la mejor maneara posible los valores ya programados. Si cambias un tipo de aparato la consola mantendr?? la mayor cantidad de datos posible o intentar?? convertir o adaptar al valor m??s cercano. Ej. Si tienes programados algunos aparatos LED wash y los remplazas por alg??n aparato que solo tenga rueda de color la consola tratar?? de encontrar el color de la rueda que m??s se parezca. Este no es un sistema a prueba de locos, por ello es una buena idea programar todo siempre utilizando presets. Esto hace mucho m??s f??cil corregir la programaci??n despu??s de cambiar un tipo de aparato.</p>

<p>Si quieres cambiar un tipo de aparatos presiona&nbsp;<span class="hardkey">Setup</span>&nbsp;y luego&nbsp;<span class="softkey">Patch&nbsp;y Lista de Aparatos</span>. Entonces selecciona el aparato(s) que quieres cambiar y pulsa en&nbsp;<span class="softkey">Cambiar Tipo de Aparato</span>. Esto abrir?? la&nbsp;<a href="/Topic/96c563e2-9cf8-4ebd-813a-8eead50ca853">Ventana seleccionar tipo de aparato</a>. Aqu?? puedes ver todos los tipos de aparatos actualmente en tu show. Aqu?? puedes seleccionar uno de estos tipos o pulsar donde dice&nbsp;<span class="softkey">Import</span>&nbsp;en la barra de t??tulo. Esto abrir?? la&nbsp;<a href="/Topic/a924561a-b1eb-4661-aa5f-99867413e4ea">Ventana Importar Tipo de Aparato</a>&nbsp;- aqu?? puedes importar a tu show un nuevo tipo de aparato.</p>

<p>Cuando tengas seleccionado el tipo de aparato que quieras a??adir pulsa <span class="softkey">Ok</span>&nbsp;en la esquina superior derecha.</p>

<p>Si cambias el tipo de aparato por alguno que utilice una cantidad diferente de canales DMX podr??as necesitar re-patchear tus aparatos.</p>

<p>Pulsa&nbsp;<span class="softkey">Ok</span>&nbsp;para salir del patch y lista de aparatos y selecciona&nbsp;<span class="softkey">Aplicar todos los cambios</span>. Ahora has cambiado el tipo de aparato y debes probar tus cues.</p>

<a name="toc_header_anchor_10" id="toc_header_anchor_10" class="topic-toc-item"></a><h2>Eliminar tipos de aparatos que no utilizas</h2>

<p>Cuando hemos hablado sobre cambiar tipos de aparatos hemos trabajado en la&nbsp;<a href="/Topic/96c563e2-9cf8-4ebd-813a-8eead50ca853">Ventana Seleccionar Tipo de Aparato</a>. Aqu?? podemos tambi??n eliminar los tipos de aparato que no utilizamos. ??brela como explicamos arriba, en la barra de t??tulo hay un icono de basura&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_SelectFixtureType07_1-1-3.png">. Si selecciona uno de los tipos de aparato y pulsas en el icono la consola te preguntar?? si realmente quieres eliminar este tipo de aparato. Tan solo debes confirmar o cancelar la operaci??n.</p>

<div class="restriction">No puedes eliminar tipos de aparatos que est??n asignados y patcheados</div>

<p>&nbsp;</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="713c4cc8-7221-428e-a635-f3eca1f59635">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_UpdatetheConsole/es/1.1'; " title="Go to previous page 'Actualizar la consola'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_SaveAndLoadShow/es/1.1';" title="Go to next page 'Salvar y cargar tu show'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13986/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
