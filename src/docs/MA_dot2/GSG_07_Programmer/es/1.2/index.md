---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/GSG_07_Programmer/es/1.2'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f25728c2-b901-4940-b695-ffdaedfce1a2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_06_FixtureView/es/1.2'; " title="Go to previous page '6 - Fixture view'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_08_Groups/es/1.2';" title="Go to next page '8 - Creando y trabajando con Grupos'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/f25728c2-b901-4940-b695-ffdaedfce1a2">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17475/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
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

<p>Re habr??s dado cuenta que cuando cambi??bamos los valores del aparato hab??a una l??nea roja en el bot??n de Dimmer en el lado derecho de la pantalla 1. Aparec??a as??:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Programmer_01_1-0.png"></p>

<p><em>Imagen 1: Bot??n de dimmer&nbsp;con valores en el programador.</em></p>

<p>Y cuando pulsamos la tecla&nbsp;<span class="hardkey">Clear</span>&nbsp;desapareci??.</p>

<p>Esto nos indicaba que ten??amos valores de dimmer en el programador.</p>

<p>Si quieres ver con m??s detalle lo que en realidad tienes en tu programador necesitas mirar la <strong>Vista Hoja de Aparatos.</strong></p>

<p><br>
<img alt="" src="/Media/Image/Dot2_GettingStarted_Programmer_02_1-0.png"></p>

<p>Esto cambia la vista a algo as?? (dependiendo de qu?? tengas en tu programador)</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_Programmer_02_1-2.png"></p>

<p><em>Imagen 2: Vista Hoja de Aparatos con valores en el programador</em></p>

<p>Si te fijas en la imagen de arriba los aparatos 3 y 4 est??n al 50%.</p>

<p>Intenta fijar tus aparatos 3 y 4 al 50%.</p>

<p>F??jate c??mo el ID y el nombre se encuentran en amarillo en lugar de en gris. Esto nos muestra que esos aparatos est??n seleccionados (al igual que el marco de color amarillo en las vistas de Layout y S??mbolos) y que si cambias un valor, los aparatos se ver??n afectados.</p>

<p>El valor de dimmer tiene el fondo y est?? escrito en rojo. Esto indica que este valor est?? activo en nuestro programador y se salvar?? si lo guardamos en cualquier lugar.&nbsp;&nbsp;</p>

<p>En cap??tulos anteriores usamos mucho la tecla&nbsp;&nbsp;<span class="hardkey">Clear</span>. Esto tiene que ver con nuestro programador. Usamos Clear para eliminar cosas que se encuentran en nuestro programador.</p>

<p>Pulsa la tecla&nbsp;<span class="hardkey">Clear</span>&nbsp;una vez.</p>

<p>Ahora el ID y el nombre cambian a gris. Estos aparatos dejan de estar seleccionados. Cuando giras la rueda del nivel, no ocurre nada.</p>

<p>Pero a??n tenemos los valores en nuestro programador y se guardar??n, si elegimos que as?? sea.&nbsp;</p>

<p>Pulsa&nbsp;<span class="hardkey">Clear</span>&nbsp;una vez m??s.</p>

<p>Ahora hemos liberado los valores del programador y el fondo y el texto cambian a color gris. Esto significa que si ahora decides&nbsp;guardar (store) una cue, no guardar??as ning??n valor. Dicho de otra manera: Cada valor con fondo y texto en rojo se salvar?? cuando lo guardes, son lo que llamamos valores activos. Los valores con fondo rojo son los importantes.</p>

<p>F??jate que cuando guardas los valores, a??n los tendr??s en tu programador. El texto del valor est?? a??n en rojo para mostrar eso, pero el fondo ya no es rojo. Esto significa que si ahora lo intentas no se guardar??. Necesitar??s darle al aparato un valor activo de nuevo antes de volver a guardar.</p>

<p>En vez de pulsar la tecla <span class="hardkey">Clear</span> dos veces, puedes mantenerla pulsada durante 1 segundo, es exactamente lo mismo.</p>

<p>Te contar?? m??s sobre el programador cuando comencemos a guardar cues.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Highlight&nbsp;</h2>

<p>Me gustar??a presentar la funci??n Highlight antes de continuar. Limpia tu programador y despu??s pulsa la tecla&nbsp; <span class="hardkey">Highlt</span>. Ahora pulsa la tecla&nbsp;<span class="hardkey">Next</span>. Esto deber??a mostrar que el aparato 1 est?? seleccionado, pero f??jate que no tienes nada en tu programador. Si a??n est??s en la vista Hoja de Aparatos, puedes ver la salida actual de lo que est??s haciendo en "S??mbolo Salida" (Output Symbol), pero si vuelves al estilo "S??mbolo Aparato" (Fixture Symbol)&nbsp;podr??as verlo m??s claro. La Vista S??mbolo Aparato siempre te mostrar?? la salida actual (incluyendo el valor porcentual)&nbsp;y la Vista Hoja de Aparatos mostrar?? tu salida del programador y del ejecutor&nbsp;(despu??s te contar?? m??s sobre Ejecutores) en las diferentes columnas de los atributos. Confirma que est??s en la vista S??mbolos de Aparatos y luego pulsa&nbsp;&nbsp;<span class="hardkey">Next</span>&nbsp;otra vez.</p>

<p>Date cuenta que ahora el aparato 2 est?? seleccionado y al 100%, y el aparato 1 ha vuelto al 0%. Pulsa&nbsp;<span class="hardkey">Prev</span>.&nbsp;Ahora hemos vuelto al n??mero 1. Si pulsas&nbsp;&nbsp;<span class="hardkey">Prev</span> de nuevo, entonces el aparato 12 genera una salida.&nbsp;</p>

<p>Cuando Highlight no est?? activo y pulsas y mantienes la tecla&nbsp; <span class="hardkey">Highlt</span> entonces los aparatos seleccionados comenzar??n a destellar. Esto es muy ??til cuando intentas localizar un aparato en tu equipo.&nbsp;</p>

<p>Juega con las teclas&nbsp;<span class="hardkey">Next</span>&nbsp;y&nbsp;<span class="hardkey">Prev</span> y encender y apagar Highlight pulsando la tecla&nbsp; <span class="hardkey">Highlt</span>.&nbsp;Incluso intenta dar a los aparatos un valor en el programador y seguir usando la funci??n Highlight.</p>

<p>Cuando creas que has entendido bien tu programador y la funci??n Highlight, pasa al siguiente cap??tulo donde vamos a crear grupos.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f25728c2-b901-4940-b695-ffdaedfce1a2">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_06_FixtureView/es/1.2'; " title="Go to previous page '6 - Fixture view'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_08_Groups/es/1.2';" title="Go to next page '8 - Creando y trabajando con Grupos'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17475/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
