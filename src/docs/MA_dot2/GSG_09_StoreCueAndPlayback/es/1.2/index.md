---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_09_StoreCueAndPlayback/es/1.2'
---

<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option selected="selected" value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="916323be-8b86-402e-ab9d-5a7f530bed0a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_08_Groups/es/1.2'; " title="Go to previous page '8 - Creando y trabajando con Grupos'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_10_MakingMoreCues/es/1.2';" title="Go to next page '10 - Agregando más cues al cuelist'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/916323be-8b86-402e-ab9d-5a7f530bed0a">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/18002/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Guía de Introducción - Grabar una cue y reproducirla</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Vista Cues</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Vamos a crear más Cues</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Vista de tiempos</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Mover Ejecutores a páginas diferentes.</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Moviendo el Ejecutor Principal</a>
						</li>
				</ul>
			</div>

		<p>Vamos a crear una cue con algo dentro.</p>

<p>Limpia tu programador. Luego selecciona los aparatos del 5 al 7. Ponlos al 40%.</p>

<p>Ahora pulsa&nbsp; <span class="hardkey">Store</span> <span class="hardkey">Please</span>.</p>

<p>Hemos creado la cue número 1 en el ejecutor principal. Intenta limpiar tu programador. Si miras en la vista de Aparatos puedes ver que tus aparatos no generan el 40%. Necesitarás activar la cue y estar seguro que el fader está arriba para ver los valores que van a ser generados.</p>

<p>Guardamos la cue en el ejecutor principal por lo que este es el que necesitamos para ejecutar la cue.</p>

<p>Echa un vistazo a esta imagen:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_StoreCueAndPlayback_01_1-2.png"></p>

<p>&nbsp;</p>

<p><em>Imagen 1: Ejecutor Principal apagado.</em></p>

<p>Aquí puedes ver lo que la consola está haciendo en el ejecutor principal. Dice que el ejecutor está actualmente apagado.</p>

<p>El ejecutor principal tiene dos faders. El de la izquierda es el master y el de la derecha se usa para hacer un crossfade manual entre dos cues. Moviendo el fader a la posición opuesta fundiremos entre cues usando el tiempo de tu movimiento.</p>

<p>La dot2 no tiene faders motorizados. Por lo que podría haber alguna contradicción con respecto a dónde cree el software que debería estar el fader y donde realmente está. Si este es el caso verás una visualización gráfica de los faders con una marca en rojo. La marca te dirá donde está el fader físico. El fader gráfico muestra donde dice el software que debería estar el fader.</p>

<p>Si tu fader de la izquierda (Master) no está al 100, por favor muévelo&nbsp;ahí y asegúrate&nbsp;que el crossfade está a 0. Aún necesitaríamos activar la cue. Hacemos esto pulsando la tecla grande del&nbsp;<span class="hardkey">&nbsp;Go + </span>&nbsp;que está debajo de los faders.</p>

<p>Entonces tu vista del mini ejecutor debe presentarse así:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_StoreCueAndPlayback_02_1-2.png"></p>

<p><em>Imagen 2: Ejecutor Principal - Cue 1</em></p>

<p>&nbsp;</p>

<p>Date cuenta del color más brillante y la marca azul de la cue. Esto indica que el ejecutor está activo y que esa cue está activa.</p>

<p>También deberías ver que los aparatos tienen 40% de salida en la vista de Aparatos.</p>

<p>Intenta mover el Master&nbsp;Fader arriba y abajo para ver cómo esto se relaciona con la salida de nuestros canales.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Vista Cues</h2>

<p>Vamos a echar un vistazo a la cue list. Pulsando la tecla&nbsp; <span class="hardkey">Cue</span>&nbsp;podemos ver la vista Cues en la pantalla 1. Cada cue está representada por una fila horizontal. Las columnas son loa diferentes ajustes o información en relación con las cues.&nbsp;No quiero profundizar demasiado en los detalles, pero comentaré qué es cada columna. Algunas cosas son obvias pero otras no lo son tanto.</p>

<ul>
	<li><strong>'Número'</strong>&nbsp;Es el número de cue.&nbsp;</li>
	<li><strong>'Nombre'</strong>&nbsp;Es el nombre de la cue.</li>
	<li><strong>'Protegido'</strong>&nbsp;es una función para proteger la cue de cambios realizados en cues previas&nbsp;(tracking - llegaremos a ello...).</li>
	<li><strong>'Trig'</strong>&nbsp;Es la forma de ejecución de la cue. El trigger por defecto es "Go" pero hay otras posibilidades y hablaremos de ellas más adelante.</li>
	<li><strong>'Trig Time'</strong> Es relevante cuando usas time triggers en vez de Go</li>
	<li><strong>'Fade'</strong>&nbsp;Es el tiempo de fade para la cue.</li>
	<li><strong>'Out Fade'</strong> Se usa cuando necesitas un tiempo de fade diferente para los aparatos que disminuyen su valor de dimmer.</li>
	<li><strong>'Out Delay'</strong> Se usa cuando queremos retrasar el inicio del fade para los aparatos que disminuyen su valor de dimmer.</li>
	<li><strong>'All&nbsp;Fadey'</strong>&nbsp;Tiene un sombreado gris y no puede ser utilizado.</li>
	<li><strong>'All Delay'&nbsp;</strong>Tiene un sombreado gris y no puede ser utilizado.</li>
	<li><strong>'[Preset&nbsp;Type] Fade'</strong>&nbsp;Cada uno de los posibles tipos de preset tiene su propia columna de fade y se utiliza para establecer un tiempo de fade&nbsp;en concreto para ese tipo de preset. Algunos tipos de preset no permiten tiempos de fade, aparecen en gris y no se pueden cambiar. Mas adelante veremos más cosas sobre los tipos de preset. Si el fondo de una celda es oscuro y el número negro, entonces no es un valor activo y no tendrá influencia en como la cue es reproducida después. Valores en blanco están activos e influyen en la reproducción de la cue.</li>
	<li><strong>'[Preset Type] Delay'</strong> Cada uno de los&nbsp;posibles tipos de&nbsp;preset&nbsp;tiene su propia columna de delay y se utiliza para establecer un tiempo de delay&nbsp;en concreto para ese tipo de&nbsp;preset. Algunos tipos de&nbsp;preset&nbsp;no permiten tiempos de delay, aparecen en gris y no se pueden cambiar. Mas adelante veremos más cosas sobre los tipos de&nbsp;preset. Si el fondo de una celda es oscuro y el número negro, entonces no es un valor activo y no tendrá&nbsp;influencia en como la&nbsp;cue&nbsp;es reproducida después. Valores en blanco están activos e influyen en la reproducción de la&nbsp;cue.</li>
	<li><strong>'Cmd'</strong> Es un pequeño comando. Se usa cuando necesitamos ejecutar/activar algo más con la cue. Profundizaremos en esto más adelante.</li>
	<li><strong>'Snap Percent'</strong> Es una función especial usada con aparatos complejos que tienen funciones como ruedas de gobos. Algunas funciones están fijadas para actuar por "snap" (sin tiempo de fade) de la posición antigua a la nueva en vez de con un tiempo de fade entre una y otra. Snap Percent se usa para fijar el punto en el tiempo de fade de la cue en el que la rueda de gobos&nbsp;debería cambiar de posición. 0% es cuando el fade comienza, 100% es cuando todos los tiempos de fade están hechos.</li>
</ul>

<p>Cuando añadimos aparatos más avanzados a nuestro show las columnas grises de delay&nbsp;y&nbsp;fade para cada uno de los diferentes Tipos de Preset estarán disponibles.</p>

<p>La mayoría de los elementos se pueden cambiar usando la tecla&nbsp; <span class="hardkey">Edit</span>. También podemos usar el encoder que está más a la derecha. Púlsalo y mantenlo pulsado mientras rotas. Cuando tengas un fondo azul en el nombre, ya puedes soltar el encoder y sólo pulsarlo brevemente. Esto abrirá la ventana emergente Edit Name. Cambia el nombre a <strong>Behind Curtain</strong>. Si no puedes ver el nombre completo o simplemente quieres cambiar el ancho de las columnas lo puedes hacer pulsando sobre la línea negra entre las columnas del encabezado y después, mientras pulsas, mueve tu dedo para cambiar el ancho.</p>

<p>Cuando hayas terminado debería tener este aspecto:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_StoreCueAndPlayback_03_1-2.png"></p>

<p><em>Imagen 3: Vista de Cues</em></p>

<p>La vista Cues también se puede ver en&nbsp;las otras pantallas. En el lado derecho de las otras pantallas puedes encontrar un botón llamado&nbsp;&nbsp;<span class="softkey">Cues</span>.&nbsp;</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Vamos a crear más Cues</h2>

<p>Selecciona el grupo dos (All FOH) y ponlo a full (100%). Ahora presiona&nbsp;<span class="hardkey">Store</span>&nbsp;y luego la tecla&nbsp;<span class="hardkey"><img alt="go" src="/Media/Mlg/go_1.png"></span>&nbsp;asociada con el ejecutor número uno (si lo olvidaste, es el que se encuentra más cerca del ejecutor principal). Es probable que necesites mover el fader para que coincida con lo que la consola está haciendo.&nbsp;</p>

<p>Vamos a ver la relación entre el ejecutor y el programador.</p>

<p>Limpia tu programador y coloca tus ejecutores a cero. Confirma que tu ejecutor principal esta desactivado presionando la tecla Off y una de las teclas asociadas al ejecutor principal.</p>

<p>Cuando elevas el ejecutor uno entonces los aparatos del 1 al 4 se encienden. Cuando lo bajas, se apagan de nuevo..</p>

<p>Ahora mueve&nbsp;el fader alrededor de 50. Luego sitúa el grupo dos al 80% en tu programador. Intenta mover el fader de nuevo, los aparatos se mantienen al 80%. Esto es porque el programador tiene prioridad sobre el ejecutor.</p>

<p>Guarda tu programador en el ejecutor número 2. Ahora mueve el ejecutor número 2. Esto cambiará los valores para los cuatro aparatos. Así que cuando guardamos el contenido del programador en algún lugar, se transfiere al ejecutor y el programador pierde la prioridad (no se mantienen activos en el programador).</p>

<p>Sube ejecutor número 2 al 100. Esto eleva los aparatos al 80%. Ahora lleva el ejecutor número 1 a 0 y luego a 100. Verás como tus aparatos pasan del 80 al 100%. Esto es porque los ejecutores trabajan basándose en el principio de latest takes precedence (LTP) (El último valor recibido tiene prioridad) . Eso significa que los aparatos cambiarán al nuevo valor que hemos llamado. Baja el ejecutor número 2 y sube el ejecutor número 1. Ahora los aparatos están todavía al 100%. Ahora sube el ejecutor 2. Date cuenta que los valores ahora bajan al 80%, porque este es el último de los valore que han recibido.</p>

<p>Si quieres ver las cues de los otros ejecutores diferentes al principal, entonces necesitas pulsar la tecla&nbsp;&nbsp;<span class="hardkey"><img alt="view" src="/Media/Mlg/eye_1.png"></span>&nbsp;(llamada "Ojo") seguida de una de las teclas asociadas con el ejecutor en el que te quieres fijar.</p>

<p>Esto abre la vista Cue para el ejecutor en la pantalla 1. Si tienes una vista Cue en una de las otras pantallas entonces esto también te mostrará esta cue list. Puedes mantener esta vista Cue bloqueada para este ejecutor si pulsas el icono del “PIN” &nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar04_1-0.PNG">&nbsp;en la parte superior de la esquina derecha de la vista Cue. El fondo coloreado del icono aparece ahora más brillante. Esto te confirma que esta vista está fijada.&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Vista de tiempos</h2>

<p>Cuando grabamos nuestras cues&nbsp;obtenemos unos tiempos de cue&nbsp;por defecto. Estos tiempos por defecto pueden ser cambiados. Presiona la tecla&nbsp;<span class="hardkey">Time</span>.&nbsp;Ahora tienes una vista como esta:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_StoreCueAndPlayback_04_1-0.png"></p>

<p><em>Imagen 4: Ajustes de tiempos</em></p>

<p>Aquí podemos establecer un nuevo tiempo por defecto que será usado cuando grabemos una cue en un futuro.&nbsp;Cuando añadimos aparatos con mas tipos de preset&nbsp;aparecen a la derecha de esta vista.</p>

<p>Si cambias alguno de los tiempos por defecto la tecla time parpadeará cuando estés en "modo grabación". El pequeño icono con un circulo y una línea cruzándolo&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_Timedefaults02_1-0.PNG">restaurará los tiempos por defecto (de fábrica)</p>

<p>Antes de continuar asegúrate de que todos los ejecutores están apagados y los faders están abajo.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Mover Ejecutores a páginas diferentes.</h2>

<p>Puedes mover tus ejecutores a una página de ejecutores diferente.&nbsp;Si, es cierto, hay varias páginas de ejecutores. Presiona&nbsp;<span class="hardkey">Move</span>&nbsp;y luego una de las teclas&nbsp;asociadas con el ejecutor número 1.&nbsp;Ahora presiona&nbsp;<span class="hardkey">Page+</span>, esto te llevará a la siguiente página. Presta atención que nuestro cuelist ha desaparecido.&nbsp;Ahora presiona otra vez una de las teclas asociadas con el ejecutor 1. Habremos movido el cuelist&nbsp;que se encontraba en el ejecutor 1 de la página 1 al ejecutor 1 de la página 2.</p>

<p>Prueba a ejecutar la cue&nbsp;del ejecutor 1 en la página 2 y luego cambia de página. Observa como ahora hay un patrón (dibujo) en la parte alta del ejecutor y un texto que dice&nbsp;"+1 fijado desde otras página 1". Esto es porque todos los ejecutores activos deberían estar siempre visibles. Así que un ejecutor activo es "fijado" cuando cambias de página.&nbsp;Prueba a llevar el fader hasta abajo, ahora el ejecutor desaparece. Volvió de nuevo a su propia página.</p>

<p>También puedes elegir para mantener un ejecutor fijado continuamente incluso cuando está desactivado.&nbsp;Lo que ha sucedido hasta ahora se llama&nbsp;"Auto Fix". Esto significa que cuando tu apagas un ejecutor que viene de otra página diferente entonces vuelve atrás. Si quieres mantenerlo puedes presionar la tecla&nbsp;<span class="hardkey">Fix</span>&nbsp;y luego el ejecutor que quieres mantener fijado. Para desfijar (unfix) un ejecutor otra vez presiona&nbsp;<span class="hardkey">Fix</span>&nbsp;y el ejecutor fijado.</p>

<p>Puedes desactivar por defecto la función Auto Fix. Presiona&nbsp;<span class="hardkey">Setup</span>&nbsp;seguido de&nbsp;<span class="softkey">Ajustes globales</span>. Este menú te permite activar o desactivar la función Auto Fix. Si está desactivada, necesitarás fijar manualmente los ejecutores que quieras mantener visibles.</p>

<p>Por favor ve al siguiente capítulo sin ningún ejecutor fijado pero con la función Global Autofix activada.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Moviendo el Ejecutor Principal</h2>

<p>Puedes mover incluso el Ejecutor Principal</p>

<p>Si lo haces se mueve con todas las configuraciones que pudiesen tener (pueden haber pequeñas diferencias entre las posibles configuraciones de un cuelist en el ejecutor principal y los ejecutores normales).</p>

<p>En el próximo capítulo vamos a crear más cues en el ejecutor principal.&nbsp;</p>


				<br>
<div class="topic-navigation">

<div class="pull-right">
	<span class="pull-left">


<div class="pull-left">
<form action="/Topic/SetCurrentVersionNumber" class="form-inline" id="frmTagSelector" method="post">	<span class="form-mini">
		<div class="input-prepend"><span class="add-on">Select different version</span><select autocomplete="off" id="versionNumberId" name="versionNumberId" onchange="$(this).closest('#frmTagSelector').submit();" style="width: 120px;"><option value="">- latest -</option>
<option value="3">1.1</option>
<option selected="selected" value="7">1.2</option>
<option value="12">1.3</option>
<option value="16">1.5</option>
<option value="29">1.9</option>
</select></div>
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="916323be-8b86-402e-ab9d-5a7f530bed0a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_08_Groups/es/1.2'; " title="Go to previous page '8 - Creando y trabajando con Grupos'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_10_MakingMoreCues/es/1.2';" title="Go to next page '10 - Agregando más cues al cuelist'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/18002/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
