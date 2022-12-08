---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/GSG_07_Programmer/es/1.5'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f25728c2-b901-4940-b695-ffdaedfce1a2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_06_FixtureView/es/1.5'; " title="Go to previous page '6 - Fixture view'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_08_Groups/es/1.5';" title="Go to next page '8 - Making and working with groups'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/f25728c2-b901-4940-b695-ffdaedfce1a2">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17475/16'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.5</span>
			</div>
		<h1>Guía de introducción - El Programador - ¿Qué es y por que lo necesitas?</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Highlight&nbsp;</a>
						</li>
				</ul>
			</div>

		<p>En el capítulo anterior vimos cómo cambiar los valores de los dimmers.</p>

<p>Lo que en realidad hicimos fue introducir valores dentro de nuestro Programador y desde ahí tener esas salidas …. (DMX fuera de nuestro sistema).</p>

<p>Funciona como un lugar temporal para los valores hasta que decides&nbsp;grabarlos en algún lugar o liberarlos (volver a los valores por defecto).</p>

<p>Re habrás dado cuenta que cuando cambiábamos los valores del aparato había una línea roja en el botón de Dimmer en el lado derecho de la pantalla 1. Aparecía así:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Programmer_01_1-0.png"></p>

<p><em>Imagen 1: Botón de dimmer&nbsp;con valores en el programador.</em></p>

<p>Y cuando pulsamos la tecla&nbsp;<span class="hardkey">Clear</span>&nbsp;desapareció.</p>

<p>Esto nos indicaba que teníamos valores de dimmer en el programador.</p>

<p>Si quieres ver con más detalle lo que en realidad tienes en tu programador necesitas mirar la <strong>Vista Hoja de Aparatos.</strong></p>

<p><br>
<img alt="" src="/Media/Image/Dot2_GettingStarted_Programmer_02_1-0.png"></p>

<p>Esto cambia la vista a algo así (dependiendo de qué tengas en tu programador)</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Programmer_02_1-2.png"></p>

<p><em>Imagen 2: Vista Hoja de Aparatos con valores en el programador</em></p>

<p>Si te fijas en la imagen de arriba los aparatos 3 y 4 están al 50%.</p>

<p>Intenta fijar tus aparatos 3 y 4 al 50%.</p>

<p>Fíjate cómo el ID y el nombre se encuentran en amarillo en lugar de en gris. Esto nos muestra que esos aparatos están seleccionados (al igual que el marco de color amarillo en las vistas de Layout y Símbolos) y que si cambias un valor, los aparatos se verán afectados.</p>

<p>El valor de dimmer tiene el fondo y está escrito en rojo. Esto indica que este valor está activo en nuestro programador y se salvará si lo guardamos en cualquier lugar.&nbsp;&nbsp;</p>

<p>En capítulos anteriores usamos mucho la tecla&nbsp;&nbsp;<span class="hardkey">Clear</span>. Esto tiene que ver con nuestro programador. Usamos Clear para eliminar cosas que se encuentran en nuestro programador.</p>

<p>Pulsa la tecla&nbsp;<span class="hardkey">Clear</span>&nbsp;una vez.</p>

<p>Ahora el ID y el nombre cambian a gris. Estos aparatos dejan de estar seleccionados. Cuando giras la rueda del nivel, no ocurre nada.</p>

<p>Pero aún tenemos los valores en nuestro programador y se guardarán, si elegimos que así sea.&nbsp;</p>

<p>Pulsa&nbsp;<span class="hardkey">Clear</span>&nbsp;una vez más.</p>

<p>Ahora hemos liberado los valores del programador y el fondo y el texto cambian a color gris. Esto significa que si ahora decides&nbsp;guardar (store) una cue, no guardarías ningún valor. Dicho de otra manera: Cada valor con fondo y texto en rojo se salvará cuando lo guardes, son lo que llamamos valores activos. Los valores con fondo rojo son los importantes.</p>

<p>Fíjate que cuando guardas los valores, aún los tendrás en tu programador. El texto del valor está aún en rojo para mostrar eso, pero el fondo ya no es rojo. Esto significa que si ahora lo intentas no se guardará. Necesitarás darle al aparato un valor activo de nuevo antes de volver a guardar.</p>

<p>En vez de pulsar la tecla <span class="hardkey">Clear</span> dos veces, puedes mantenerla pulsada durante 1 segundo, es exactamente lo mismo.</p>

<p>Te contaré más sobre el programador cuando comencemos a guardar cues.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Highlight&nbsp;</h2>

<p>Me gustaría presentar la función Highlight antes de continuar. Limpia tu programador y después pulsa la tecla&nbsp; <span class="hardkey">Highlt</span>. Ahora pulsa la tecla&nbsp;<span class="hardkey">Next</span>. Esto debería mostrar que el aparato 1 está seleccionado, pero fíjate que no tienes nada en tu programador. Si aún estás en la vista Hoja de Aparatos, puedes ver la salida actual de lo que estás haciendo en "Símbolo Salida" (Output Symbol), pero si vuelves al estilo "Símbolo Aparato" (Fixture Symbol)&nbsp;podrías verlo más claro. La Vista Símbolo Aparato siempre te mostrará la salida actual (incluyendo el valor porcentual)&nbsp;y la Vista Hoja de Aparatos mostrará tu salida del programador y del ejecutor&nbsp;(después te contaré más sobre Ejecutores) en las diferentes columnas de los atributos. Confirma que estás en la vista Símbolos de Aparatos y luego pulsa&nbsp;&nbsp;<span class="hardkey">Next</span>&nbsp;otra vez.</p>

<p>Date cuenta que ahora el aparato 2 está seleccionado y al 100%, y el aparato 1 ha vuelto al 0%. Pulsa&nbsp;<span class="hardkey">Prev</span>.&nbsp;Ahora hemos vuelto al número 1. Si pulsas&nbsp;&nbsp;<span class="hardkey">Prev</span> de nuevo, entonces el aparato 12 genera una salida.&nbsp;</p>

<p>Cuando Highlight no está activo y pulsas y mantienes la tecla&nbsp; <span class="hardkey">Highlt</span> entonces los aparatos seleccionados comenzarán a destellar. Esto es muy útil cuando intentas localizar un aparato en tu equipo.&nbsp;</p>

<p>Juega con las teclas&nbsp;<span class="hardkey">Next</span>&nbsp;y&nbsp;<span class="hardkey">Prev</span> y encender y apagar Highlight pulsando la tecla&nbsp; <span class="hardkey">Highlt</span>.&nbsp;Incluso intenta dar a los aparatos un valor en el programador y seguir usando la función Highlight.</p>

<p>Cuando creas que has entendido bien tu programador y la función Highlight, pasa al siguiente capítulo donde vamos a crear grupos.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f25728c2-b901-4940-b695-ffdaedfce1a2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_06_FixtureView/es/1.5'; " title="Go to previous page '6 - Fixture view'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_08_Groups/es/1.5';" title="Go to next page '8 - Making and working with groups'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17475/16';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
