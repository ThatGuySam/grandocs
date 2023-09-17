---
originalUrl: 'http://help2.malighting.com/Page/MA_dot2/GSG_06_FixtureView/es/1.5'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ad2ce53c-ed3e-4b41-8b40-10b715804cd1">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_05_ControllingDimmers/es/1.5'; " title="Go to previous page '5 - Controlling dimmers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_07_Programmer/es/1.5';" title="Go to next page '7 - The programmer'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/ad2ce53c-ed3e-4b41-8b40-10b715804cd1">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/27822/16'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.5</span>
			</div>
		<h1>Guia de Introducción - Una mirada más cercana a la Vista de Aparatos</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">La barra de título y los controles</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Vista Layout de Aparatos</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Vista de Símbolo de Aparatos</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Vista de Hoja de Aparatos</a>
						</li>
				</ul>
			</div>

		<p>Hemos visto los aspectos más importantes de la vista de Aparatos, pero esta vista es muy potente y puede realizar cosas increíbles.&nbsp;</p>

<p>El propósito general de la vista es mostrar los aparatos. Te permite seleccionar el aparato y ver algunos o todos los atributos del mismo incluyendo sus valores.&nbsp;</p>

<p>Esta vista tiene muchas posibilidades. Existen varias maneras de mostrarte la información.&nbsp;&nbsp;</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>La barra de título y los controles</h2>

<p>La barra de título controla a qué parte de la vista Aparato estás mirando.&nbsp;</p>

<p>Esta es la barra de título:</p>

<figure class="caption"><img alt="" src="/Media/Image/Dot2_GettingStarted_FixtureView_01_1-2_2.png">
<figcaption><em>Imagen 1: Vista de Aparato – Barra de título</em></figcaption>
</figure>

<p>El lado derecho tiene un icono de un "pin". Puede usarse para bloquear la vista y no desplazarse automáticamente a los aparatos seleccionados.</p>

<p>El lado izquierdo tiene diferentes iconos que cambian la manera en que la vista funciona.</p>

<p>Los 5 iconos con números son 5 vistas diferentes llamadas Vistas Layout de Aparatos. Aquí puedes organizar los iconos de aparatos como quieras. Pueden contener todos o algunos de los aparatos. Pero cada aparato sólo puede estar una vez en cada una de las 5 vistas layout.</p>

<p>El icono que está resaltado en la figura de arriba es el que vimos en el capítulo anterior. Esta vista se llama Vista de Símbolo de Aparato, aquí puedes ver todos los aparatos añadidos al show. Están organizados automáticamente por tipo de aparato.&nbsp;</p>

<p>El último icono es la Vista de Hoja de Aparato. Aquí puedes ver todos los aparatos añadidos a tu show. Están organizados por ID de Aparato. Muestra además los diferentes atributos y sus valores.&nbsp;</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Vista Layout de Aparatos</h2>

<p>Vamos a intentar organizar nuestros aparatos en la primera vista layout de aparatos y colocarlos cómo se encuentran en nuestro plot.</p>

<p>Presionando&nbsp;<span class="hardkey">Clear</span> aseguras que no has seleccionado ninguno de los aparatos (esto vamos a verlo más detenidamente en el siguiente capítulo).</p>

<p>Presiona&nbsp;<span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">2</span> <span class="hardkey">Store</span> y luego pincha en el símbolo del número uno (el de más a la izquierda) en la barra de título de la pantalla izquierda.&nbsp;</p>

<p>Ahora pincha en cualquier lugar en el centro de la pantalla.</p>

<p>Esto añade los 12 símbolos de aparato en la primera vista layout.</p>

<p>Se encuentran todos en una línea y puede que no los veas todos.</p>

<p>La barra de título tiene ahora 3 nuevos botones en su lado derecho. La barra de título aparece ahora así:</p>

<figure class="caption"><img alt="" src="/Media/Image/Dot2_GettingStarted_FixtureView_02_1-2_2.png">
<figcaption><em>Imagen 2: Vista de Layout de Aparatos – barra de título.</em></figcaption>
</figure>

<p>Los 3 iconos son Editar Layout (el lápiz), Zoom para Ajustar (la lupa de aumento con 2 flechas) y Bloquear Layout (el candado).</p>

<p>Pincha el Zoom para Ajustar. Ahora puedes ver todos los Aparatos.</p>

<p>Para organizarlos necesitas pinchar en el icono Editar Layout. Entonces verás un grid en la vista, y si todavía tienes todos los aparatos seleccionados puedes, mientras mantengas pulsado mover los aparatos por la pantalla hasta situarlos donde necesites. Si pulsas, mantienes y arrastras abarcando varios aparatos se dibujará un marco de lazo. Si enlazas algunos aparatos entonces quedarán seleccionados. Sólo se moverán los aparatos seleccionados. También puedes cambiar los aparatos que has seleccionado, pulsando sobre ellos.&nbsp;</p>

<p>Cuando hayas terminado de mover los aparatos, recuerda pinchar el icono de Editar Layout de nuevo para desactivar el modo edición. Entonces puede que quieras pinchar de nuevo el icono Zoom.</p>

<p>También puedes usar la barra de zoom en el lado izquierdo de la vista y las dos barras de desplazamiento para moverte por la vista layout.</p>

<p>Este es mi resultado:</p>

<p><img alt="" src="/Media/Image/Dot2_GettingStarted_FixtureView_03_1-2_2.png"></p>

<p><em>Imagen 3: Vista 1 Layout de Aparatos - resultado&nbsp;</em></p>

<p>Esta es la vista de Layout de Aparatos. Puedes crear cinco vistas diferentes. Cada una de ellas puede contener todos o alguno de los aparatos.</p>

<p>Si mantienes presionada la tecla&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span> aparecerá el nombre de aparato y el color de cada uno de ello. La parte de color mejora cuando tenemos aparatos que pueden cambiar de color.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Vista de Símbolo de Aparatos</h2>

<p>La Vista de Símbolo de Aparato se parece mucho a la Vista de Layout de Aparato. La excepción es que no los puedes organizar y aparecen todos. Están organizados por tipo de aparato.</p>

<p>Así es como aparece ahora:</p>

<figure class="caption"><img alt="" src="/Media/Image/Dot2_GettingStarted_FixtureView_04_1-2_2.png">
<figcaption>Imagen 4: Vista de Símbolo de Aparato</figcaption>
</figure>

<p>&nbsp;</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Vista de Hoja de Aparatos</h2>

<p>La última versión de la Vista de Aparatos es la Vista de Hoja de Aparatos. Esta también mostrará todos los aparatos en tu show y estarán ordenados por el ID de Aparato. Esta vista también muestra todos los diferentes atributos de los aparatos. En estos momentos sólo tenemos aparatos con dimmers, con lo que es un poco aburrido. Cuando añadamos más aparatos con diferentes atributos, esta lista se ampliará.</p>

<p>Así es como aparece ahora:</p>

<figure class="caption"><img alt="" src="/Media/Image/dot2_getting-started_fixture-view05_v1-3_2.png">
<figcaption><em>Imagen 5: Vista de Hoja de Aparatos</em></figcaption>
</figure>

<p>Fíjate en el espacio negro entre el ID de Aparato y el Nombre de Aparato. En realidad esto es un pequeño cuadrado llamado “Symbol Output”. Funciona como los símbolos en la Vista de Layout de Aparatos y la Vista de Símbolo de Aparatos. Muestra el valor del aparato. Es una combinación del color, el gobo y la intensidad.&nbsp;</p>

<p>También cuenta con otras funciones e información importante que veremos con más detenimiento en el siguiente capítulo.&nbsp;</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ad2ce53c-ed3e-4b41-8b40-10b715804cd1">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_05_ControllingDimmers/es/1.5'; " title="Go to previous page '5 - Controlling dimmers'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_07_Programmer/es/1.5';" title="Go to next page '7 - The programmer'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/27822/16';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
