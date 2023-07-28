---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_21_Effect/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="0b640789-2f5f-4e40-bf31-2124c818c5b5">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_20_Chaser/es/1.1'; " title="Go to previous page '20 - Creando chasers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_22_ConnectOnpc3dWingsAndNodes/es/1.1';" title="Go to next page '22 - Conectar a onPC, 3D, Wings y Nodos'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/0b640789-2f5f-4e40-bf31-2124c818c5b5">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13929/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Guía de Introducción - Efectos</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Efectos de Dimmer y teoría de los efectos.</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Efectos de Color</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Efectos de Posición</a>
						</li>
				</ul>
			</div>

		<p>En este capítulo vamos a trabajar los efectos en MA dot2.</p>

<p>Apaga todo y restablece todos los master especiales.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Efectos de Dimmer y teoría de los efectos.</h2>

<p>Vamos a empezar con algunos de los efectos más básicos. Selecciona los aparatos 1 al 10.</p>

<p>Selecciona&nbsp;<span class="softkey">Dimmer</span>&nbsp;en la Barra Tipo de Preset y presiona la tecla&nbsp;<span class="hardkey">Effect</span>.</p>

<p>Esto abre la vista de Efectos de Dimmer. Encontrarás una selección de posibles efectos para los atributos del dimmer. La parte izquierda de la pantalla muestra los posibles efectos y la parte derecha las diferentes herramientas como “Selección aleatoria” y todos los Aligns.</p>

<p>Pulsa en el efecto llamado&nbsp;<span class="softkey">Soft Dimmer</span>&nbsp;y mira en la vista de Aparatos. Nos ha dado un efecto con una curva de movimiento sinusal en nuestros diez aparatos. Va desde el 0% al 100%.</p>

<p>Los efectos son la transición de un valor a otro. Siempre nos movemos entre dos valores. Podemos controlar cómo deberíamos ir de un valor a otro, la velocidad y si todos deben seguir los mismos puntos de la onda o o si deben extenderse (desfasarse).</p>

<p>Vamos a examinar algunos de los ajustes. Empezamos con los dos valores. En la barra de título del efecto en azul encontrarás dos botones llamados&nbsp; <span class="softkey">Valor bajo</span>&nbsp;and <span class="softkey">Valor alto</span>. Se usan para acceder y cambiar esos valores.</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Effect_01_1-0.png"></p>

<p>Presiona donde dice&nbsp;<span class="softkey">Valor bajo</span>. Esto te muestra el aspecto standard para el valor dimmer. Pulsa el botón de&nbsp;<span class="softkey">25%</span>. Fíjate cómo esto cambia el valor más bajo en la vista de Aparatos. Date cuenta que la barra de título Dimmer es ahora también azul y hay dos botones extra:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Effect_02_1-0.png"></p>

<p>El botón que se encuentra más a la izquierda es un pequeño seno curvo. Esto no cambia porque cambiemos el tipo de efecto. El botón de&nbsp;<span class="softkey">Valor Normal</span>&nbsp;te dejará controlar de nuevo el valor normal. Veremos qué significa esto más tarde.</p>

<p>Pulsa donde dice&nbsp;<span class="softkey">Valor alto</span>&nbsp;y cambia el valor a&nbsp;<span class="softkey">75%</span>. Now we have limited the effect to only run from 25% to 75%. Estos son los valores alto y bajo. Ahora pincha el icono Sinus y estamos de vuelta a en la vista de efectos.</p>

<p>Podríamos también haber fijado los valores Alto y Bajo usando el encoder de la izquierda.</p>

<p>Prueba a girar el encoder número 2. Esto cambia la velocidad del efecto.</p>

<p>El tercer encoder controla algo llamado Phase. Este es el nombre de lo que utilizamos para desfasar los aparatos durante un ciclo del efecto. Pulsa el encoder y fija el valo a 0. Ahora los diez aparatos tienen la misma salida. En otras palabras, se encuentran al mismo tiempo en el mismo punto del ciclo del efecto. Incluso si ahora giras el encoder, no parece ocurrir nada. Si queremos volver a crear el efecto que teníamos antes, necesitamos desfasar los aparatos a lo largo del ciclo. Este ciclo se describe a menudo también como un círculo. Esto es por lo que el ciclo se divide en grados. Hay 360 grados en un círculo por lo que si queremos desfasar todos los aparatos a través del ciclo, entonces necesitan tener un desfase (phase) de 0 a 360 grados debido a las matemáticas (un poco complicado para explicarlo aquí) y parezca que se el efecto se ejecuta de izquierda a derecha. Pulsa el encoder y selecciona el botón llamado&nbsp;<span class="softkey">0..-360</span>&nbsp;para estar como al principio.&nbsp;</p>

<p>Antes de continuar, por favor pulsa en&nbsp;<span class="softkey">Hard Dimmer</span>. Esto nos dará un efecto dimmer estilo chaser. El encoder que se encuentra más a la derecha controla la <strong>anchura y suavidad (</strong>Width&nbsp;y&nbsp;Softness), prueba a girarlo. Una anchura pequeña te da menos aparatos encendidos al mismo tiempo. Cuanto más alto sea el número, más aparatos estarán encendidos.</p>

<p>Con una anchura de alrededor del 20%, mantén pulsada la tecla&nbsp; <span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> mientras giras el encoder. Esto hace los valores con fade in, out o snap. Dependiendo del porcentaje. Intenta dar suavidad (softness) al 100% y ancho al 50%. ¿Reconoces el efecto?</p>

<p>Prueba los dos efectos ramp y juega con el ancho.</p>

<p>Vamos a intentar usar esto, elige el efecto&nbsp; <span class="softkey">Hard Dimmer</span>&nbsp;y ajusta el ancho a 50%. &nbsp;Ahora pulsa&nbsp;<span class="softkey">Selección aleatoria</span>. Presiona&nbsp;<span class="hardkey">Store</span> y luego una de las teclas asociadas con el ejecutor número 1 de la página 1. Limpia el programador e intenta operar la cue. Si has fijado un tiempo de cue por defecto entonces el efecto lo usa como fade in del efecto.</p>

<p>Vamos a crear la cue número dos donde el efecto se detenga con fade. Selecciona los 10 aparatos de nuevo y pulsa la tecla&nbsp;<span class="hardkey">Effect</span> Ahora puede parecer lógico que debas pulsar Apagar (Off) en la vista de Efectos pero esto solo hace desaparecer el efecto de nuestro programador y ahora se encuentra en la cue. El cuelist es tracking así que necesitamos decirles a los aparatos que paren el efecto (necesitamos programar un stop). Esto en MA se llama "Stomp". Así que pulsa donde dice Stomp y puedes comprobar que se ha parado el efecto. Vamos a guardar esto como cue 2 con un fade time de 5 segundos. &nbsp;Ya sabes cómo hacerlo.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Efectos de Color</h2>

<p>Vamos a crear algunos efectos de color.</p>

<p>Selecciona los X4 y pulsa sobre&nbsp;<span class="softkey">Color</span> en la barra de tipos de preset y luego el icono Sinus en la barra de título.&nbsp;</p>

<p>Pulsa el botón de&nbsp;<span class="softkey">2 Color Hard</span>. Esto se parece mucho al chaser que hicimos en el capítulo anterior.</p>

<p>Los valores Bajo y Alto controlan los dos colores entre los que tu efecto cambia. Intenta cambiarlos. También juega con la ancho y el softness (suavidad.</p>

<p>Vamos a crear un efecto que mueva de fuera al centro. Limpia tu programador. Selecciona todos los X4 utilizando el grupo y ejecuta el efecto&nbsp; <span class="softkey">2 Color Hard</span>. Usa los valores bajo y alto para seleccionar los colores que te gusten. Presiona el encoder de la Phase&nbsp;y establece 0 para todos los aparatos. Ahora pulsa el botón &nbsp;<span class="softkey">Align &lt;&gt;</span>&nbsp;y gira el encoder&nbsp;de la Phase&nbsp;en la dirección del reloj hasta que el efecto se mueva desde el exterior hasta el centro. Si lo giras en la otra dirección el efecto se moverá en la dirección contraria. Establece el valor en un punto que te guste y graba el resultado como cue 1 en el ejecutor 2 de la página 1.</p>

<p>Cuando estés satisfecho con tus colores, entonces puedes pulsar&nbsp;<span class="hardkey">Update</span> y luego una de las teclas asociadas con el ejecutor número 2.</p>

<p>Hay un efecto de color especial. El efecto RGB Rainbow. Selecciona los X4 y pruébalo. Guárdalo como cue 2 con un fade time para ver la transición desde la cue 1 a la 2.</p>

<p>El efecto "Colorwheel 2 color" se usa para los efectos con las ruedas de color. Es un efecto entre dos colores de una rueda.</p>

<p>No hay mucho más que decir sobre los efectos de color. Vamos a pasar a otra cosa.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Efectos de Posición</h2>

<p>¿Recuerdas que prometí explicarte el “Valor Normal”? Muchos efectos de posición sólo tienen sentido si los aparatos ya tienen posición de comienzo. Esto significa que podemos tener una cue donde los aparatos apuntan al cantante de una banda. En la siguiente cue el aparato comienza a hacer un efecto de círculo alrededor del cantante. En la siguiente los aparatos se mueven hacia el guitarrista mientras hacen el círculo. En la siguiente, los aparatos vuelven hacia el cantante mientras el efecto se para. Este escenario es porque hay también un Valor Normal&nbsp;y porque los efectos (valores) están situados en la parte superior de los valores normales.&nbsp;</p>

<p>Vamos a intentar hacer esto. Primero crea dos presets de posición con los Alpha Profiles. Deberían llamarse “Singer” y “Guitar”. Enciende los aparatos y ponlos en el singer. Guarda esto como cue 1 en el ejecutor 3 (página 1).</p>

<p>Ahora necesitamos un efecto círculo. Selecciona&nbsp;<span class="softkey">Position</span> en la barra de tipos preset y luago el icono Sinus en la barra de título. Aquí encontraremos un efecto círculo. Vamos a hacerlo un poquito más complejo. Usa la macro&nbsp;<span class="softkey">Odd</span> para seleccionar la mitad de los aparatos y regresa a la vista de efectos y pulsa en el botón&nbsp;<span class="softkey">Direction &lt;&gt;</span> Termina esto presionando la tecla&nbsp;<span class="hardkey">Set</span> &nbsp;(vuelve a seleccionar todos los aparatos). Ahora la mitad de los aparatos cambian al lado contrario. Ajusta el tamaño un poco más pequeño. El encoder de más a la izquierda controla el <span class="softkey">Size</span>. Girándolo puedes hacer el círculo menor o mayor. Muestra dos números diferentes en porcentaje. Esto es porque hay dos tamaños diferentes, uno para el pan y otro para el tilt. Girando el encoder cambias estos dos valores juntos. Crea el efecto con el tamaño que te gusta (a mi me gusta 3.6%...10%). Este es nuestro efecto de círculo, grábalo como cue 2 con un tiempo fade de 3 segundos.</p>

<p>Para la siguiente cue necesitamos mover los aparatos a la posición del guitarrista. Selecciona los aparatos y luego la posición de preset de guitarra, grábalo como cue 3.</p>

<p>Con los aparatos seleccionados abre la ventana de efectos de posición y pulsa&nbsp;<span class="softkey">Stomp</span>&nbsp;y luego el preset de posición&nbsp;<span class="softkey">Singer</span>. Graba esto como cue 4.</p>

<p>Creo que deberías añadir un tiempo de fade de 3 segundos a todas las cues. Limpia tu programador y pruébalas.</p>

<p>Puedes ver el movimiento de círculo en la vista de Aparatos (modo símbolo) y también los presets de posición en la vista de aparatos (modo hoja).</p>

<p>Los efectos de posición utilizan los valores de Size y Center en lugar de los valores Bajo&nbsp;y Alto. Esto es porque tenemos una posición base y creamos el tamaño del efecto alrededor de la base. Puedes utilizar el valor de Centro para offset el efecto desde la posición base.</p>

<p>Esto ha sido una introducción básica a los efectos. Puedes crear muchos otros efectos también con otros tipos de preset. Esto solo ha sido una demostración con uno de los más comunes.&nbsp;</p>

<p>Estamos llegando al final de esta guía pero antes debemos echar un vistazo a la conexión de equipos externos.</p>

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="0b640789-2f5f-4e40-bf31-2124c818c5b5">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_20_Chaser/es/1.1'; " title="Go to previous page '20 - Creando chasers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_22_ConnectOnpc3dWingsAndNodes/es/1.1';" title="Go to next page '22 - Conectar a onPC, 3D, Wings y Nodos'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13929/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
