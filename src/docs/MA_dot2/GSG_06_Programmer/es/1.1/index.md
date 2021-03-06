---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_06_Programmer/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f25728c2-b901-4940-b695-ffdaedfce1a2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_05_ControllingDimmers/es/1.1'; " title="Go to previous page '5 - Controlando los dimmers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_07_Groups/es/1.1';" title="Go to next page '7 - Creando y trabajando con Grupos'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/f25728c2-b901-4940-b695-ffdaedfce1a2">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13825/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Gu??a de introducci??n - El Programador - ??Qu?? es y por que lo necesitas?</h1>

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

		<p>En el cap??tulo anterior vimos c??mo cambiar los valores de los dimmers.</p>

<p>Lo que en realidad hicimos fue introducir valores dentro de nuestro Programador y desde ah?? tener esas salidas ???. (DMX fuera de nuestro sistema).</p>

<p>Funciona como un lugar temporal para los valores hasta que decides&nbsp;grabarlos en alg??n lugar o liberarlos (volver a los valores por defecto).</p>

<p>En el cap??tulo anterior te habr??s dado cuenta que cuando cambi??bamos los valores del aparato hab??a una l??nea roja en el bot??n de Dimmer en el lado derecho de la pantalla 1. Aparec??a as??:</p>

<p><br>
<img alt="" src="/Media/Image/Dot2_GettingStarted_Programmer_01_1-0.png"></p>

<p>Y cuando pulsamos la tecla&nbsp;<span class="hardkey">Clear</span>&nbsp;desapareci??.</p>

<p>Esto nos indicaba que ten??amos valores de dimmer en el programador.</p>

<p>Si quieres ver con m??s detalle lo que en realidad tienes en tu programador necesitas hacer una peque??a modificaci??n en la vista de Aparatos.&nbsp;</p>

<p>Hasta ahora hemos estado viendo la vista de Aparatos en estilo S??mbolos. Vamos a cambiar a estilo Hoja. Arriba en la esquina derecha de la vista hay tres botones. Necesitas pulsar el que se encuentra en medio.&nbsp;</p>

<p><br>
<img alt="" src="/Media/Image/Dot2_GettingStarted_Programmer_02_1-0.png"></p>

<p>Esto cambia la vista a algo as??:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Programmer_03_1-0.png"></p>

<p>Si te fijas en la imagen de arriba los aparatos 3 y 4 est??n al 50%. Si quieres volver a la vista de S??mbolos pulsa el bot??n de la izquierda, el que tiene cuatro cuadrados. Pero por ahora por favor permanece en esta vista.</p>

<p>Intenta fijar tus aparatos 3 y 4 al 50%.</p>

<p>F??jate c??mo el ID y el nombre se encuentran en amarillo en lugar de en gris. Esto nos muestra que esos aparatos est??n seleccionados y que si cambias un valor, los aparatos se ver??n afectados.</p>

<p>El valor de dimmer tiene el fondo y est?? escrito en rojo. Esto indica que este valor est?? activo en nuestro programador y se salvar?? si lo guardamos en cualquier lugar.&nbsp;&nbsp;</p>

<p>En el cap??tulo anterior usamos mucho la tecla&nbsp;&nbsp;<span class="hardkey">Clear</span>. Esto tiene que ver con nuestro programador. Usamos Clear para eliminar cosas que se encuentran en nuestro programador.</p>

<p>Pulsa la tecla&nbsp;<span class="hardkey">Clear</span>&nbsp;una vez.</p>

<p>Ahora el ID y el nombre cambian a gris. Estos aparatos dejan de estar seleccionados. Cuando giras la rueda del nivel, no ocurre nada.</p>

<p>Pero a??n tenemos los valores en nuestro programador y se guardar??n, si elegimos que as?? sea.&nbsp;</p>

<p>Pulsa&nbsp;<span class="hardkey">Clear</span>&nbsp;una vez m??s.</p>

<p>Ahora hemos liberado los valores del programador y el fondo y el texto cambian a color gris. Esto significa que si ahora decides&nbsp;guardar (store) una cue, no guardar??as ning??n valor. Dicho de otra manera: Cada valor con fondo y texto en rojo se salvar?? cuando lo guardes, son lo que llamamos valores activos.&nbsp;</p>

<p>F??jate que cuando guardas los valores, a??n los tendr??s en tu programador. El texto del valor est?? a??n en rojo para mostrar eso, pero el fondo ya no es rojo. Esto significa que si ahora lo intentas no se guardar??. Necesitar??s darle al aparato un valor activo de nuevo antes de volver a guardar.</p>

<p>En vez de pulsar la tecla <span class="hardkey">Clear</span> dos veces, puedes mantenerla pulsada durante 1 segundo, es exactamente lo mismo.</p>

<p>Te contar?? m??s sobre el programador cuando comencemos a guardar cues.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Highlight&nbsp;</h2>

<p>Me gustar??a presentar la funci??n Highlight antes de continuar. Limpia tu programador y despu??s pulsa la tecla&nbsp; <span class="hardkey">Highlt</span>. Y ahora pulsa la tecla&nbsp;<span class="hardkey">Next</span>. Esto deber??a mostrar que el aparato 1 est?? seleccionado, pero no tienes nada en tu programador. Si a??n est??s en el estilo Hoja en la vista de Aparatos, parece c??mo que no est??s produciendo nada, pero si vuelves al estilo S??mbolo ver??s que en realidad estamos generando valores dimmer en el aparato 1. El estilo S??mbolo siempre te mostrar?? la salida actual y el estilo Hoja te mostrar?? la salida del programador y del ejecutor&nbsp;(despu??s te contar?? m??s sobre Ejecutores). Confirma que la vista Aparatos est?? en estilo S??mbolo y luego pulsa&nbsp;&nbsp;<span class="hardkey">Next</span>&nbsp;otra vez.</p>

<p>Date cuenta que ahora el aparato 2 est?? seleccionado y al 100%, y el aparato 1 ha vuelto al 0%. Pulsa&nbsp;<span class="hardkey">Prev</span>.&nbsp;Ahora hemos vuelto al n??mero 1. Si pulsas&nbsp;&nbsp;<span class="hardkey">Prev</span> de nuevo, entonces el aparato 12 genera una salida.&nbsp;</p>

<p>Cuando Highlight no est?? activo y pulsas y mantienes la tecla&nbsp; <span class="hardkey">Highlt</span> entonces los aparatos seleccionados comenzar??n a destellar. Esto es muy ??til cuando intentas localizar un aparato en tu equipo.&nbsp;</p>

<p>Juega con las teclas&nbsp;<span class="hardkey">Next</span>&nbsp;y&nbsp;<span class="hardkey">Prev</span> y encender y apagar Highlight pulsando la tecla&nbsp; <span class="hardkey">Highlt</span>.&nbsp;Incluso intenta dar a los aparatos un valor en el programador y seguir usando la funci??n Highlight.</p>

<div class="tip">Recuerda que la vista Aparatos en el modo Hoja muestra los valores que tienes en tu programador pero la vista S??mbolo te mostrar?? la salida actual.</div>

<p>Cuando creas que has entendido bien tu programador y la funci??n Highlight, pasa al siguiente cap??tulo donde vamos a crear grupos.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f25728c2-b901-4940-b695-ffdaedfce1a2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_05_ControllingDimmers/es/1.1'; " title="Go to previous page '5 - Controlando los dimmers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_07_Groups/es/1.1';" title="Go to next page '7 - Creando y trabajando con Grupos'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13825/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
