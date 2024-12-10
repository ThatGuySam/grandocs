---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/GSG_21_Chaser/es/1.5'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9b441763-1726-470c-80ce-7c26487a3c92">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_20_Macro/es/1.5'; " title="Go to previous page '20 - Fun with macros'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_22_Effect/es/1.5';" title="Go to next page '22 - Building dynamic effects'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/9b441763-1726-470c-80ce-7c26487a3c92">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17961/16'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.5</span>
			</div>
		<h1>Guía de Introducción - Creando chasers</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Construyendo el Cuelist</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Cambiar a Chaser</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Cambiar los ajustes del chaser</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Ejecutar chasers desde cues</a>
						</li>
				</ul>
			</div>

		<p>Ok, ahora que sabemos cómo hacer una copia circular, vamos a intentar usarlo para crear un chaser.</p>

<p>Vamos a añadirlo en una nueva página. Presiona&nbsp; <span class="hardkey">Page +</span> &nbsp;hasta que te encuentres en la página 3 y haz un “Apagar todo” usando la combinación de teclas&nbsp; <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> + <span class="hardkey">Off</span> para abrir la ventana Off.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Construyendo el Cuelist</h2>

<p>Chasers&nbsp;son&nbsp;cuelist&nbsp;ajustados para funcionar usando un tiempo diferente al guardado en las cues. A menudo funcionan como loops, pero hay otras opciones.</p>

<p>Lo primero que necesitamos hacer es construir el cuelist.</p>

<p>Selecciona todos los X4 usando el grupo.</p>

<p>Enciéndelos y dales color azul excepto al número 31 que debería ser blanco.</p>

<p>Guarda esto en el ejecutor número 1.</p>

<p>Asegúrate que todos los aparatos están seleccionados (usando el grupo) y pulsa la macro&nbsp; <span class="softkey">Circular Copy &gt;</span>&nbsp;una vez.</p>

<p>Guarda esto como cue número 2. Continúa usando la macro cicular copy y guardando cues hasta que tengas un total de 6.</p>

<p>Este es nuestro&nbsp;cuelist con los diferentes pasos para el chaser.</p>

<p>El único problema es que ahora tiene demasiada información. Cuando usas la macro circular copy toma todos los valores del aparato y los copia. Esto está bien pero no es lo que queremos en nuestro chaser, sólo dimmer y color. Vamos a borrar el resto. Selecciona todos los X4 y pulsa la tecla Please dos veces y activarás todos los atributos posibles en tu programador. Queremos mantener la información de&nbsp;dimmer y color en nuestras cues así que los desactivamos en nuestro programador. Presiona&nbsp;<span class="hardkey">Off</span>&nbsp;y luego&nbsp;<span class="softkey">Dimmer</span> en la barra de presets (en la parte derecha de la pantalla derecha) y otra vez&nbsp;<span class="hardkey">Off</span> y <span class="softkey">Color</span>&nbsp;en la barra. Esto debería borrar los marcadores rojos que se encuentran al lado del tipo de preset. Bien, ahora presiona&nbsp;<span class="hardkey">Store</span> <span class="hardkey">Cue</span> <span class="hardkey">Thru</span>&nbsp;y&nbsp;luego una de las dos teclas asociadas con el ejecutor. En la ventana de método de grabación pincha donde dice&nbsp; <span class="softkey">Remove</span>. Ahora hemos borrado todos los valores innecesarios de la cue list (todo menos dimmer y color).</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Cambiar a Chaser</h2>

<p>Ahora necesitamos cambiar el modo del cuelist. Debemos decirle a la consola que es un chaser.</p>

<p>Presiona la tecla&nbsp;<span class="hardkey"><img alt="view" src="/Media/Mlg/view.png"></span> y luego alguna de las teclas asociadas con el ejecutor donde guardaste las cues.</p>

<p>En la esquina superior derecha de la ventana cue verás el icono de Herramienta&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar05_1-0.PNG">,&nbsp;púlsalo.</p>

<p>Esto abre los ajustes para el ejecutor, igual que hicimos&nbsp;cuando activamos el MIB, ¿recuerdas?. Se muestra así:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Chaser_01_1-2.png"></p>

<p><em>Imagen 1: Ajustes para un ejecutor chaser</em></p>

<p>Ahora el marcador (check ) no se encuentra relleno así que no es un chaser. Pínchalo una vez y luego pincha en la esquina superior izquierda donde dice&nbsp;<span class="softkey">Esc</span>.</p>

<p>Date cuenta que el color ha cambiado para el ejecutor en la barra de ejecutores. Ahora se muestra así:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Chaser_02_1-0.png"></p>

<p><em>Imagen 2: Ejecutor de chaser&nbsp;coloreado</em></p>

<p>Prueba a mover el fader hacia abajo y luego hacia arriba hasta 100. Ahora tu chaser empieza a funcionar.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Cambiar los ajustes del chaser</h2>

<p>Si no puedes ver el cue list presiona la tecla&nbsp;<span class="hardkey"><img alt="view" src="/Media/Mlg/view.png"></span>&nbsp;otra vez y luego alguna de las asociadas con el ejecutor donde está activo el chaser.</p>

<p>Ahora la parte de abajo de la pantalla 1 nos da algunos nuevos ajustes específicos del chaser. Aparecen así:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Chaser_03_1-0.png"></p>

<p><em>Imagen 3: Opciones de chaser</em></p>

<p>Estos ajustes se dividen en dos partes, la mitad superior te da dos ajustes diferentes según cómo deben funcionar los diferentes pasos de las cues. Pulsando los tres puntos de la izquierda se despliega un menú con cuatro opciones.</p>

<ul>
	<li><strong>Forward</strong> - ejecutará los pasos desde el de número más bajo al de número más alto.&nbsp;</li>
	<li><strong>Backward</strong> - ejecutará desde el de número más alto hasta el de número más bajo.</li>
	<li><strong>Bounce</strong> - empezará ejecutando hacia adelante, y cuando logre el número más alto volverá hacia atrás.</li>
	<li><strong>Random</strong> - elije una cue al azar como siguiente cue.</li>
</ul>

<p>Los tres puntos de la derecha te dan los siguientes ajustes:</p>

<ul>
	<li><strong>Endless</strong> -&nbsp;el chaser se estará ejecutando hasta que lo pares.</li>
	<li><strong>Shoot-Off</strong> - ejecutará el chaser una vez y luego se apagará. Si el orden de funcionamiento es al azar, entonces ejecutará la cantidad de cues, pero no necesariamente todos.&nbsp;</li>
	<li><strong>Shoot-On</strong> - es lo mismo que Shoot-Off pero se pausará después de la última cue (se mantiene encendido).</li>
</ul>

<p>La mitad inferior te da los controles para encender el chaser (para cualquiera de los modos shoot) o pausarlo. Hay además tres botones que cambian la velocidad. Puedes reducir la velocidad a la mitad, doblarla o restablecer lo que el encoder&nbsp;que está debajo ha fijado.</p>

<p>¿Recuerdas que dije que todos los tiempos de las cues son ignorados? Esto significa que por defecto el tiempo de fade es 0 y el resultado es que el chaser se rompe entre los diferentes pasos. Si quisiéramos hacer un fade de un paso al siguiente, podemos hacerlo usando el segundo del encoder por la izquierda. Este se llama “Fade” y es un número en porcentaje. Este se usa para fijar cuánto tiempo se utilizará&nbsp;para fundir de un paso al siguiente. Cuanto más lo aumentes, más tiempo se usará para fade.</p>

<p>Al lado del encoder de Fade se encuentra el de Velocidad. Aquí puedes fijar una velocidad más detallada. Pero si estás intentando combinar el ritmo de alguna música, entonces puedes mantener pulsada la tecla&nbsp;<span class="hardkey">Speed</span> mientras pulsas una de las teclas asociadas con el chaser. Esto cambiará dinámicamente la velocidad del chaser a la velocidad de tus pulsaciones. Es una función llamada "aprender" y que también puedes ver en el Master&nbsp;de velocidad en la vista Magic Speed.</p>

<p>El MA dot2 gestiona la velocidad como BPM (Beats Por Minuto). Se usa para los chaser y los efectos y ambos pueden ser ajustados por el fader&nbsp;Master&nbsp;de velocidad en la vista&nbsp;Magic&nbsp;Speed.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejecutar chasers desde cues</h2>

<p>Uno de las limitaciones de los chasers es que no son fácilmente integrados con la reproducción de cues.&nbsp;</p>

<p>La única manera de hacer esto es añadir comandos en nuestro cuelist. Presiona la tecla&nbsp;<span class="hardkey">Cue</span> para abrir la vista del&nbsp;cuelist principal. Ahora desplázate hacía la derecha y ubícate en la columna “CMD”.</p>

<p>En la celda comando para la cue 4 queremos añadir un comando que active el chaser. Primero asegúrate que el fader del chaser se encuentra abajo y luego apunta la página y el número del ejecutor.&nbsp;</p>

<p>Escribe en la celda de Comandos (CMD): &nbsp;<span class="syntax">fader 3.1 at 100 fade 2</span></p>

<p>Y para apagarlo de nuevo en la cue 5 escribe: <span class="syntax">fader 3.1 at 0 fade 5</span></p>

<p>Ahora puedes probar el&nbsp;cuelist y cuando ejecutes la cue 4 el chaser arrancará y con la cue 5 se parará. Fíjate que bonito es el fade de entrada. El fade out no es tan bueno. Esto es porque los X4 todavía tienen valores dimmer del ejecutor principal. Con lo que después de 5 segundos de fade los colores cambian a verde. Para arreglar esto necesitarás crear una cue 5.5 con un tiempo fade&nbsp;de 2 y luego añadir los dimmer de los X4 al 0% sólo en la cue 5. Luego dar a la cue 5.5 un “seguir” como trigger. Te sugiero que hagas esto&nbsp;:-)</p>

<p>Esto es casi todo lo que necesitas saber sobre los chasers. Las cues pueden tener cualquier tipo de contenido, y pueden haber tantas cues como quieras. Es simplemente una cuestión de tu imaginación. En el próximo capítulo vamos a fijarnos en algunos efectos.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="9b441763-1726-470c-80ce-7c26487a3c92">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_20_Macro/es/1.5'; " title="Go to previous page '20 - Fun with macros'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_22_Effect/es/1.5';" title="Go to next page '22 - Building dynamic effects'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17961/16';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
