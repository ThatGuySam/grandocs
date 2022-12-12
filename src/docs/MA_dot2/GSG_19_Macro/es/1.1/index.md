---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_19_Macro/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="13106658-a453-4bd2-af2f-e6fd38c848f2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_18_BlindPreviewAndDmxTest/es/1.1'; " title="Go to previous page '18 - Funciones Blind, Preview y DMX test'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_20_Chaser/es/1.1';" title="Go to next page '20 - Creando chasers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/13106658-a453-4bd2-af2f-e6fd38c848f2">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13918/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Guía de Introducción - Ayuda y diversión con Macros</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Circular Copy and Shuffle</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Odd, Odd ID,&nbsp;Even, Even ID&nbsp;and Invert</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Knockout</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Más IF</a>
						</li>
				</ul>
			</div>

		<p>MA dot2 viene con algunas Macros que puede ayudarte a trabajar mejor y más rápido.</p>

<p>Presiona la tecla&nbsp;<span class="hardkey">Macro</span>&nbsp;para verlas.&nbsp;Así es cómo aparecen:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Macros_01_1-1-3.png"></p>

<p>No puedes cambiar las macros o añadir la tuya propia en el software actual. Pero si pones en funcionamiento una de ellas verás que en realidad están ejecutando un comando o a veces una varios de ellos, que también puedes teclear tú mismo. Así que no hay más secretos en relación a las macros, simplemente es una manera más rápida y normalmente más conveniente de realizar (automatizar) alguna tarea. Algunos de los comandos sólo son accesibles usando las macros o la línea de comandos y el teclado.&nbsp;</p>

<p>Algunas de las funciones disponibles en el pool de Macros sólo podrás encontrarlas en dicho pool.</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Macros_02_1-1.png"></p>

<p>Te mostraré algunos de ellos para que los conozcas y los utilices.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Circular Copy and Shuffle</h2>

<p>Vamos a echar un vistazo a algo llamado&nbsp;Circular Copy.</p>

<p>Borra todo lo que tengas en tu programador y apaga todos los ejecutores que estén activos.</p>

<p>Ahora selecciona tus X4 usando el grupo&nbsp;<span class="softkey">All X4</span>.&nbsp;Enciéndelos y dales a todos color azul. Ahora selecciona uno de ellos y dale a ese aparato el color blanco.&nbsp;&nbsp;</p>

<p>Ahora vuelve a seleccionar todos tus X4. Presiona la tecla&nbsp;<span class="hardkey">Macro</span>&nbsp;y localiza el botón de la macro&nbsp;<span class="softkey">Circular Copy &gt;</span>&nbsp;y púlsalo. Date cuenta cómo el color blanco se mueve de un aparato a otro. Púlsalo varias veces. Prueba también con&nbsp;<span class="softkey">Circular Copy &lt;</span>. Toda la información en el aparato se mueve un nivel en nuestra selección. Esta es una forma rápida y buena de desplazar valores. En el próximo capítulo verás una de las grandes ventajas de usar esta aplicación.</p>

<p>Vamos a intentar combinar esto con una de las otras macros. Te has dado cuenta que Circular Copy mueve los sets de valores en nuestra selección. Como usaste el grupo, el orden de selección es 31 al 36 pero ahora pulsa la macro&nbsp;<span class="softkey">Shuffle Selection</span>.No parece que nada haya ocurrido pero prueba de nuevo la Circular Copy. Date cuenta que ahora parece un poco aleatorio qué aparato va a ser blanco la próxima vez. Esto es porque hemos mezclado el orden de selección de nuestros aparatos.</p>

<p>Prueba a seleccionar uno de los aparatos azules y conviértelo en rojo. Luego vuelve a seleccionarles todos de nuevo (aparatos 31 al 36). Ahora cuando pulses Circular Copy, el blanco y el rojo se moverán en la dirección esperada. Busca y selecciona la macro&nbsp; <span class="softkey">Shuffle Values</span>. Esto mueve los seis sets diferentes de valores que tenemos a uno de los seis aparatos de nuestra selección.&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Odd, Odd ID,&nbsp;Even, Even ID&nbsp;and Invert</h2>

<p>Ahora vamos a dejar limpio el programador e intentar algo más.</p>

<p>Selecciona los aparatos 1 al 10 en ese orden y localiza y pulsa la macro denominado&nbsp;<span class="softkey">Odd</span>. ¿Recuerdas cuando vimos las teclas&nbsp; <span class="hardkey">Next</span>, <span class="hardkey">Prev</span>&nbsp;y&nbsp;<span class="hardkey">Set</span> y se podía ir avanzando sobre los aparatos seleccionados? Esto es parecido, simplemente hemos seleccionado cada uno de los otros aparatos en nuestra selección. Así que ahora hemos seleccionado el 1 de cada 2 aparatos. Ahora pulsa la macro&nbsp;<span class="softkey">Even</span>&nbsp;, esto seleccionará los otros aparatos de nuestra selección. Esto ocurrirá sobre los aparatos con ID par o impar (odd-even). Pero esto es sólo por nuestro orden de selección inicial. Selecciona la macro&nbsp; <span class="softkey">Shuffle Selection</span>&nbsp;y luego prueba de nuevo con las macros de Odd y Even. Date cuenta que no tiene nada que ver con con los números e IDs de aparatos. Esto es por lo que hay también dos macros llamados&nbsp;<span class="softkey">Odd ID</span>&nbsp;y&nbsp;<span class="softkey">Even ID</span>. Si pruebas a pincharles ahora verás que se han aplicado en la parte de arriba de nuestras sub-selecciones actuales. Sí, sé que es un poco complicado y realmente no lo que queríamos. Primero necesitamos estar seguros que no tenemos ninguna sub-selección. Esto se puede hacer pulsando la macro <span class="softkey">Reset Next/Previous Key</span>. Y luego prueba las macros&nbsp;&nbsp;<span class="softkey">Odd ID</span>&nbsp;y&nbsp;<span class="softkey">Even ID</span>. Ahora puedes seleccionar los aparatos con el odd o even ID incluso después de haber hecho una selección aleatoria (shuffle selection).&nbsp;</p>

<p>Prueba a quitar y luego volver a seleccionar los aparatos 1 al 10. Ahora selecciona la macro&nbsp;<span class="softkey">Invert</span> y seguido pulsa la tecla&nbsp;<span class="hardkey">Please</span>. Ahora han quedado seleccionados el resto de aparatos y no nuestra primera selección del 1 al 10.&nbsp;</p>

<p>Limpia tu selección y selecciona los aparatos 5 y 6. Ahora pincha en el macro&nbsp; <span class="softkey">Invert</span> y luego&nbsp;<span class="hardkey">Group</span> y selecciona el primer grupo&nbsp;<span class="softkey">All Dimmers</span>. Ahora hemos seleccionado todos los aparatos en el grupo “All Dimmers” excepto el 5 y el 6. Por tanto, puedes usar Invert para hacer una selección de aparatos más compleja.</p>

<p>Una última información sobre invert. Si accidentalmente has realizado una Shuffle Selected (selección aleatoria) pero quieres volver a la selección en orden numérico, entonces puedes pulsar dos veces Invert (recuerda que debes pulsar Please entre medias). Recuperarás tu selección original en orden numérico.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Knockout</h2>

<p>Las dos macros knockout son muy útiles para borrar aparatos y sus valores del programador. Selecciona los aparatos 1 al 10 y ponlos a Full. Ahora selecciona sólo los aparatos 5 y 6 y luego la macro llamada&nbsp;<span class="softkey">Knockout Selection</span>. Esto borra tu selección y los valores del programador para esos dos aparatos. Vamos a probar con el otro. Presiona&nbsp;<span class="hardkey">Oops</span>. Ahora vuelves a tener los valores de los aparatos 5 y 6 y deberían estar seleccionados, &nbsp;pulsa en la macro&nbsp;<span class="softkey">Knockout Invert</span>. Nos hemos deshecho de todos los valores del programador distintos de los pertenecientes a los aparatos 5 y 6. Hemos borrado, además, la selección. Estos son dos buenos macros que pueden ayudarte mucho mientras programas.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Más IF</h2>

<p>Hay dos macros “If” que me gustaría explicarte. Se llaman “IfActive” e “IfProg”. Junto con nuestro IfOutput&nbsp;habitual de la tecla If, tenemos muchas opciones para seleccionar nuestros aparatos.</p>

<p>Vamos a borrar nuestro programador usando una buena herramienta. Presiona las teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;y&nbsp;<span class="hardkey">Off</span>&nbsp;. Esto abre la ventana&nbsp;Off...&nbsp; Aquí puedes apagar los ejecutores que están funcionando, dejar limpio el programador, reiniciar masters especiales o todo lo que está arriba. Queremos comenzar apagando y limpiando todo así que pincha donde dice <span class="softkey">Apagar&nbsp;todo</span>. Ahora pon en funcionamiento la cue 1 en el ejecutor principal.&nbsp;</p>

<p>Presionando las teclas&nbsp;<span class="hardkey">If</span>&nbsp;+&nbsp;<span class="hardkey">Please</span>&nbsp;ejecutas el comando IfOutput. Esto significa que todos los aparatos que en ese momento tienen una salida por encima del 0% quedan seleccionados. Si haces ahora un Invert, entonces tienes todos los aparatos que no están encendidos en ese momento.</p>

<p>Vamos a echar un vistazo a los otros dos. Pulsa&nbsp;<span class="softkey">IfActive</span>. No ocurre nada (bueno, deselecciona). Para que funcionen necesitamos tener algo en nuestro programador. Selecciona los aparatos 21 al 24 y ponles&nbsp;un bonito color. Presiona&nbsp;<span class="hardkey">Clear</span>&nbsp;una vez. Para volver a seleccionarlos puedes utilizar la macro IfActive. Esto es porque son valores activos en tu programador (hay un marcador rojo en la barra preset de color que muestra los valores activos). Ahora guarda esto en un ejecutor vacío y pulsa&nbsp;<span class="hardkey">Clear</span>&nbsp;una sola vez (esto es importante). Selecciona la macro&nbsp;<span class="softkey">IfActive</span>&nbsp;otra vez. Ahora no funciona. Los aparatos todavía tienen sus valores en el programador pero ya no están activos. Prueba a utilizar la macro IfProg y se volverán a seleccionar los aparatos.</p>

<p>Si quieres puedes borrar el ejecutor que acabamos de guardar, simplemente era para mostrártelo.</p>

<p>Esta ha sido una introducción a algunas de las macros. En el próximo capítulo vamos a usar algunas de ellas un poco más.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="13106658-a453-4bd2-af2f-e6fd38c848f2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_18_BlindPreviewAndDmxTest/es/1.1'; " title="Go to previous page '18 - Funciones Blind, Preview y DMX test'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_20_Chaser/es/1.1';" title="Go to next page '20 - Creando chasers'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13918/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
