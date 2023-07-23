---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_05_ControllingDimmers/es/1.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c5ea70af-022b-4ef9-a560-7dc6b068a49f">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_04_PatchDimmers/es/1.3'; " title="Go to previous page '4 - Adding and patching dimmers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_06_FixtureView/es/1.3';" title="Go to next page '6 - Fixture view'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/c5ea70af-022b-4ef9-a560-7dc6b068a49f">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17883/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Guía de introducción - Seleccionando y controlando dimmers</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Más opciones sobre la Selección</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Control del Atributo</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Align</a>
						</li>
				</ul>
			</div>

		<p>Tenemos nuestros 12 dimmers&nbsp;con patch en la consola&nbsp;y están identificados como aparatos. Todos deben tener un único ID de aparato que te permita seleccionarlos individualmente.</p>

<p>Vamos a echarles un ojo. Pulsa la tecla&nbsp;<span class="hardkey">Fixture</span></p>

<p>Tu pantalla 1 debe tener ahora una vista de Aparatos como esta:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_ControllingDimmers_01_1-2.png"></p>

<p><em>Imagen 1: Vista de Aparatos</em></p>

<p>Los rectángulos representa cada uno de nuestros 12 aparatos. Podemos ver que todos ellos actualmente tienen un valor del 0%, así que están apagados. Ese es su valor por defecto. Esto significa que si no se les pide nada se mantienen al 0%.</p>

<p>Bien, vamos a intentar cambiar el valor. Si mueves la rueda de nivel no ocurre nada con nuestros aparatos. Lo primero que necesitamos hacer es seleccionar los aparatos queremos cambiar.</p>

<p>Intenta tocar el número 1 en la pantalla. Esto debe cambiar el color del borde alrededor del rectángulo a amarillo, así:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_ControllingDimmers_02_1-2.png"></p>

<p><em>Imagen 2: Icono de Aparato&nbsp;</em></p>

<p>Esto indica que este aparato está seleccionado y si&nbsp;mueves la rueda de nivel, verás que el valor cambia.</p>

<p>Ya sabes cómo usar la rueda de nivel para cambiar el valor.</p>

<p>Vamos a aprender otras formas. Todavía con el aparato uno seleccionado, intenta pulsar las siguientes teclas:&nbsp;<span class="hardkey">At</span> <span class="hardkey">5</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>. Esto situará al aparato al 50%. Ahora pulsa&nbsp; <span class="hardkey">At</span> <span class="hardkey">-</span> <span class="hardkey">1</span>&nbsp;<span class="hardkey">5</span> <span class="hardkey">Please</span>. Esto resta el 15% a tu aparato, con lo que ahora estamos al 35%. Pulsa &nbsp;<span class="hardkey">+</span> dos veces. Esto ha añadido un 10%, y pulsando dos veces en&nbsp;&nbsp;<span class="hardkey">-</span> restará el 10%.</p>

<p>Si pulsas dos veces&nbsp; <span class="hardkey">&nbsp;. </span>&nbsp;(punto)&nbsp;situarás tu aparato al 0% y si pulsas la tecla&nbsp; <span class="hardkey">Full</span>&nbsp;llegas al 100%.</p>

<p>Prueba diferentes combinaciones hasta que te sientas cómodo.</p>

<p>Si cometes un error o pulsas una tecla incorrecta, puedes usar la tecla&nbsp; <span class="hardkey">Oops</span> como tecla de retroceso (backspace). Si quieres abandonar lo que estás haciendo (no la consola, sino lo que has empezado a teclear) puedes pulsar&nbsp; <span class="hardkey">Esc</span> para cancelar el comando que estás tecleando.</p>

<p>Cuando estés listo para continuar, debes pulsar la tecla&nbsp;&nbsp;<span class="hardkey">Clear</span>&nbsp;dos veces.</p>

<p>Ten en cuenta que esto borra el valor (si tienes alguno) y que el borde alrededor del aparato 1 se vuelve de nuevo gris. ¿Esto qué significa? Si crees que significa que deja de estar seleccionado y vuelve al 0%, ¡estás en lo cierto!&nbsp;</p>

<p>Es muy fácil seleccionar aparatos en las pantallas. Incluso puedes mover tu dedo para seleccionar un grupo de aparatos mayor. Cuando pinchas un aparato en la vista de &nbsp;Aparatos cambia el estado&nbsp;del mismo a seleccionado.</p>

<p>Puedes tocar aparatos aislados para deseleccionarlos o pulsar&nbsp; <span class="hardkey">Clear</span>&nbsp;una vez (cuando exista&nbsp;una selección) para borrar la selección entera.</p>

<p>Ahora vamos a usar las teclas para seleccionar los aparatos. Pulsa lo siguiente:</p>

<p><span class="hardkey">Clear</span>&nbsp;<span class="hardkey">Clear</span></p>

<p><span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p><span class="hardkey">At</span> <span class="hardkey">4</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>Esto debe seleccionar los diez primeros aparatos y ponerlos todos al 40%. Estamos tecleando&nbsp;más de lo que en realidad necesitábamos. A menudo esta operación se puede hacer más rápida. Pulsar la tecla&nbsp; <span class="hardkey">Clear</span> dos veces y luego pulsa lo siguiente:</p>

<p><span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">At</span> <span class="hardkey">4</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>Esto te da el mismo resultado. El camino largo es el comando más correcto y lo que la consola en realidad está haciendo, pero a menudo puedes hacer lo mismo con la versión corta. Si por alguna razón la versión corta no siempre te funciona, entonces debes probar con los comandos más correctos y largos antes de empezar a lanzar cosas por la habitación.</p>

<p>No necesitamos dar el mismo valor a todos los aparatos, podemos ampliarlos. Sin pulsar Clear, haz esto:&nbsp; <span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>Esto abrirá el abanico de valores desde el 10% al 100%. Por favor, echa un vistazo la vista Aparatos. Si todavía no lo has hecho, deberías poder mirar la barra del pequeño dimmer en el lado izquierdo de cada rectángulo. La barra de dimmer indica el valor de dimmer. El cuadrado muestra una combinación de información de intensidad de dimmer, color y gobo.</p>

<p>Incluso puedes ampliarlo a tres valores (o incluso más):&nbsp;<span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">5</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Más opciones sobre la Selección</h2>

<p>Como has hecho antes, puedes seleccionar aparatos usando rangos. También puedes usar&nbsp;<span class="hardkey">-</span>&nbsp;y&nbsp;<span class="hardkey">+</span>&nbsp;para borrar o añadir aparatos a tu selección. Intenta hacer esto:</p>

<p><span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">5</span> <span class="hardkey">-</span> <span class="hardkey">2</span> <span class="hardkey">+</span> <span class="hardkey">7</span> <span class="hardkey">Please</span>,&nbsp;entonces has seleccionado los aparatos 1, 3, 4, 5 y 7.</p>

<p>Pero el orden de selección también es importante. Pulsa&nbsp;<span class="hardkey">Clear</span>&nbsp;una vez y luego haz lo siguiente:</p>

<p><span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">2</span> <span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>, esto ampliará los valores teniendo el aparato 1 al 10% y el aparato 12 al 100%. Pero vamos a intentar otra cosa. Pulsa&nbsp; <span class="hardkey">Clear</span>&nbsp;dos veces y luego haz lo siguiente:</p>

<p><span class="hardkey">1</span>&nbsp;<span class="hardkey">2</span>&nbsp;<span class="hardkey">Thru</span> <span class="hardkey">1</span> &nbsp;<span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>,&nbsp;entonces se invierten los valores. Ahora el aparato 12 está al 10% y el aparato 1 al 100%.</p>

<p>Hemos seleccionado los aparatos en el orden contrario y luego aplicado el mismo rango de valores.</p>

<p>Si usas la pantalla para seleccionar los aparatos en orden aleatorio (quizás necesites pulsar primero&nbsp; <span class="hardkey">Clear</span>&nbsp;y luego&nbsp;<span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span> <span class="hardkey">Please</span>, verás cómo se distribuyen los valores.</p>

<p>Así que el orden en la selección es importante.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Control del Atributo</h2>

<p>Hay otras dos maneras para cambiar el valor sobre las que queremos hablarte</p>

<p>Si has pulsado Clear, entonces por favor selecciona del aparato 1 al 10.</p>

<p>Ahora necesitas pulsar donde dice&nbsp;<span class="softkey">Dimmer</span>&nbsp;en la parte derecha de la pantalla 1.&nbsp;</p>

<p>Esto abre una vista que nos permite hacer más cosas. Esto es muy útil para el futuro cuando añadamos aparatos más complejos. Esto se llama Vista de tipo de preset. Hablaremos sobre más Tipos de Preset más adelante.</p>

<p>Esta es la visualización para el dimmer:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_ControllingDimmers_04_1-1-3.png"></p>

<p><em>Imagen 3: Atributo de control</em></p>

<p>Aquí tendrás algunos valores de dimmer predefinidos que puedes seleccionar y cambiar en intervalos de + o – &nbsp;5% y 10%. Puedes ver que el slider modifica los valores, y también se puede usar para fijarlos.</p>

<p>Fíjate que ahora puedes usar el enconder de más a la izquierda para cambiar el valor del dimmer.</p>

<p>Puede que quieras abrir una vista Aparatos en alguna de las otras pantallas. Arriba en el lado derecho de la pantalla 2 debes pulsar el botón Aparatos. Esto abrirá una vista de Aparatos.</p>

<p>Ahora pulsa el encoder que se encuentra más a la izquierda. Esto abrirá <strong>La Calculadora</strong>. Así se visualiza:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_ControllingDimmers_03_1-1-3.png"></p>

<p><em>Imagen 4: Ventana Calculadora</em></p>

<p>Puedes teclear un valor en la pantalla o también usar algunos valores predefinidos. En el dibujo de arriba hay cuatro botones:&nbsp;<span class="softkey">Open</span>, <span class="softkey">75%</span>, &nbsp;<span class="softkey">50%</span>&nbsp;y&nbsp;<span class="softkey">25%</span>.</p>

<p>'Open' es lo mismo que 100% (abierto completamente). Pulsando una de las cuatro opciones cerrará La Calculadora y fijará los aparatos seleccionados a ese valor.&nbsp;</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Align</h2>

<p>Hasta ahora hemos usado las teclas para extender valores sobre más de un aparato. Pero en realidad esta es una función que llamamos Align. Descubrirás en futuros capítulos que la función Align se puede usar para casi todo. Pero por ahora sólo tenemos dimmer. Así que intenta seleccionar los aparatos del 1 al 10 (en ese orden) y dales a todos el 50%. Por favor pulsa el botón &nbsp;<span class="softkey">Dimmer</span>&nbsp;en la barra tipo de preset para tener el control dimmer en el encoder izquierdo. Ahora pulsa la tecla &nbsp;<span class="hardkey">Align</span>&nbsp;una vez. Una pequeña ventana de información emergente te dirá que ahora estás en el modo "Align &lt;" Hay cinco modos diferentes y vamos a explorarlos un poco. Es importante que mantengas el orden de selección en todos los ejemplos que se encuentran más abajo. Con el primer modo activado, intenta bajar el dimmer encoder y fíjate cómo el valor permanece al 50% para el aparato número 1 pero se extiende equitativamente al aparato número 10. Puede mostrarse como algo así:</p>

<p><br>
<img alt="" src="/Media/Image/Dot2_Keys_Align_Left.png"></p>

<p><em>Imagen 5: Align &lt;</em></p>

<p>Ahora vamos a reajustar y dar a todos los aparatos el 50% de nuevo (at 50 Please). Ahora pulsa la tecla Align hasta que una ventana emergente diga que estás en modo "Alig &gt;". Y ahora intenta bajar el dimmer encoder de nuevo. Ahora el resultado es el inverso al ejemplo anterior, cambiamos el aparato 1 y el valor se extiende hasta el aparato 10 que se mantiene igual. Puede mostrarse como algo así:</p>

<p><br>
<img alt="" src="/Media/Image/Dot2_Keys_Align_Right.png"></p>

<p><em>Imagen 6: Align &gt;.</em></p>

<p>Reajusta de nuevo todos los aparatos al 50%. Ahora pulsa la tecla Align hasta que el modo sea "Align &gt;&lt;". Y luego gira el encoder. Ahora es como si tenemos un eje central en el medio de nuestros 10 aparatos y podemos inclinar los valores hacia un lado u otro. Se muestra así:</p>

<p><br>
<img alt="" src="/Media/Image/Dot2_Keys_Align_Center.png"></p>

<p><em>Imagen 7: Align &gt;&lt;.</em></p>

<p>Reajusta una vez más los aparatos al 50%. Pulsa la tecla Align hasta que el modo sea "Align &lt;&gt;" y luego gira el encoder. Ahora el primer y el último aparato están fijados al 50% y el central se mueve el que más. Puede mostrarse así:</p>

<p><br>
<img alt="" src="/Media/Image/Dot2_Keys_Align_Sides.png"></p>

<p><em>Imagen 8: Align &lt;&gt;.</em></p>

<p>Pues bien, quizás quieras jugar un poco con los controles. Cuando estés cómodo y feliz, deberías pulsar&nbsp; <span class="hardkey">Clear</span> dos veces y continuar con el siguiente capítulo, donde vamos a explorar de manera un poco más profunda la&nbsp;<strong>Vista de Aparatos</strong>.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c5ea70af-022b-4ef9-a560-7dc6b068a49f">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_04_PatchDimmers/es/1.3'; " title="Go to previous page '4 - Adding and patching dimmers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_06_FixtureView/es/1.3';" title="Go to next page '6 - Fixture view'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17883/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
