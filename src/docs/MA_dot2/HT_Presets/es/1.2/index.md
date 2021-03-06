---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/HT_Presets/es/1.2'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Groups/es/1.2'; " title="Go to previous page 'Work with groups'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Cues/es/1.2';" title="Go to next page 'Work with cues'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13947/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>C??mo trabajar con Presets</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Crear algunos Presets</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Etiquetando (nombrar) Presets</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">LLamar/Utilizar/Seleccionar un Preset</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Actualizar un Preset</a>
						</li>
						<li>
							<a href="#toc_header_anchor_5">Eliminar un Preset</a>
						</li>
				</ul>
			</div>

		<p>Los presets son un conjunto de valores que puede usar una selecci??n espec??fica de aparatos. Este conjunto de valores se guarda en una preset pool especial que te permite usar los mismos conjuntos de valores una y otra vez. Si guardas el preset en una cue significa que guardas un link al preset para algunos atributos de algunos aparatos espec??ficos. Esto significa que en realidad no guardas los valores en la cue si no un link al preset. Entonces si actualizas los valores en el preset, la apariencia de tus cues cambiar??. Si quieres aprender m??s sobre qu?? son los presets, puedes leer la p??gina de ayuda&nbsp;<a href="/Topic/740955a8-3b27-4e50-b35c-7a728c1d9c38">??Qu?? son Presets?</a>.</p>

<p>Ahora vamos a ver c??mo trabajar con los presets.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Crear algunos Presets</h2>

<p>Partimos de un show con algunos aparatos que tienen diferentes tipos de atributos.</p>

<p>Hay diferentes tipos de presets. Los tipos de presets cambian dependiendo de qu?? aparatos has a??adido a tu show. Puedes ver los diferentes tipos de presets en la parte derecha de la pantalla 1.</p>

<p>Puedes crear una vista de Preset en una de las otras pantallas utilizando la barra de vista o puedes abrirla en la pantalla derecha pulsando la tecla&nbsp;<span class="hardkey">Preset</span>. Tiene m??s sentido crear la vista preset en una pantalla que no sea la derecha. Haz esto y observa c??mo la barra de t??tulo de la vista preset cambia cuando seleccionas los diferentes tipos de presets en la parte derecha de la pantalla uno. Cada Tipo de Preset tiene su propio pool. Esto tambi??n significa que s??lo puedes guardar valores Dimmer en el Pool de Presets de Dimmer. La excepci??n a esto es el tipo de preset All. En los presets de tipo All puedes guardar todo tipo de valores de diferentes atributos.</p>

<p>Vamos a crear algunos presets de dimmer (asumo que has a??adido algunos aparatos que tienen un canal dimmer). Selecciona algunos de los aparatos, apl??cales&nbsp;un valor de&nbsp;dimmer en tu programador (si no sabes qu?? es el programador deber??as echar un vistazo primero&nbsp;<a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">aqu??</a>). Ahora presiona la tecla&nbsp;<span class="hardkey">Store</span> y luego un objeto vac??o del Pool de Presets de Dimmer. Ahora puedes ver que has creado un Preset de Dimmer.</p>

<p>Puedes hacer lo mismo con cualquiera de los Tipos de Presets disponibles. Recuerda que s??lo puedes guardar valores Dimmer en un Preset de Dimmer. Lo mismo es v??lido para cada uno de los diferentes Tipos de Presets (Excepto los presets de All).</p>

<p>Prueba a tener valores de dimmer y color en tu programador. Luego pulsa&nbsp;<span class="softkey">All</span>&nbsp;en el men?? de la pantalla derecha. Presiona&nbsp;<span class="hardkey">Store</span>&nbsp;y luego sobre uno de los Presets de All vac??os. Ahora has grabado un preset con ambos valores de dimmer y color.</p>

<p>Observa que pulsando el bot??n de&nbsp;<span class="softkey">All</span>&nbsp;abres el pool de presets de All en la pantalla 1. Puedes tambi??n abrir este Pool presionando las teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma_1.png"></span>&nbsp;+&nbsp;<span class="hardkey">0</span>.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Etiquetando (nombrar) Presets</h2>

<p>Si empiezas a escribir en un teclado externo directamente despu??s de guardar un preset, estar??s etiquet??ndolo. Aparecer?? una ventana emergente cuando guardes el preset, pincha y se abrir?? la ventana para escribirlo. Si necesitas darle nombre a un preset despu??s de haberlo guardado, puedes pulsar la tecla Label y luego el preset al que quieres poner nombre. Esto tambi??n abrir?? la ventana para etiquetar.</p>

<p>La dot2 intentar?? asignarle nombre al preset basado en su mejor suposici??n. Esto no funciona si no hay valores definidos. Un ejemplo son los presets de posici??n. La&nbsp;dot2 simplemente no sabe d??nde est??n se??alando los aparatos, entonces el auto-nombre no tiene sentido.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>LLamar/Utilizar/Seleccionar un Preset</h2>

<p>Si guardas un preset, consigues directamente un link al preset en tu programador. Esto te permite guardar directamente despu??s una cue y tener el preset en la cue.</p>

<p>Si necesitas utilizar un preset&nbsp;despu??s de haberlos creado, tienes las siguientes opciones. Si no has seleccionado ning??n aparato entonces puedes pinchar en el preset que quieres usar. La primera vez que pinchas seleccionas todos los aparatos que pueden utilizarlo. Necesitar??s pinchar de nuevo para conseguir que el preset est?? en tu programador.</p>

<p>Si tienes una selecci??n de aparatos y pulsas un preset, entonces son s??lo los aparatos que en realidad pueden usar ese preset los que lo consiguen en el programador.</p>

<p>Una vez que tienes los valores preset en tu programador, puedes guardar una cue, un nuevo preset o sacar los valores del programador de nuevo.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Actualizar un Preset</h2>

<p>Si necesitas actualizar los valores en el preset necesitas seleccionar los aparatos que quieres actualizar y modificar el valor que quieras. Luego pulsa la tecla&nbsp;<span class="hardkey">Update</span> y selecciona el preset que quieres actualizar.</p>

<p>Esto es lo mismo que presionar&nbsp;<span class="hardkey">Store</span>&nbsp;seguido del preset que quieres actualizar y luego elige&nbsp;<span class="softkey">Mezclar</span>&nbsp;en la&nbsp;<a href="/Topic/662173f7-aa38-4f78-b6da-7d357eace37d">ventana seleccionar m??todo de grabaci??n.</a></p>

<p>Ahora los valores en tu preset han cambiado. Si usas el preset en una cue, en alg??n lugar esta cue aparecer?? diferente puesto que usa los valores actualizados.</p>

<p>Si has utilizado un preset en una cue y a??ades nuevos valores (sin cambiar los existentes) o a??ades m??s aparatos al preset, esta nueva informaci??n no se a??ade a la cue previa salvada. La cue s??lo busca los valores que fueron guardados originalmente en la cue.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Eliminar un Preset</h2>

<p>Puedes eliminar un preset presionando&nbsp;&nbsp;<span class="hardkey">Delete</span>&nbsp;y luego el preset que quieres eliminar. Si el preset est?? siendo utilizado en alg??n lugar, entonces te aparecer?? una ventana de aviso preguntando si realmente quieres eliminar el preset.</p>

<p>Si decides eliminar un preset utilizado, los valores que se encuentran en la actualidad en el preset se copian en las cues donde se est?? utilizando, con lo que las cues todav??a trabajan.</p>

<p>Si realizes un Oops (undo) el preset se recupera pero el link entre la cue y el preset a??n est?? roto y no lo recuperar??s.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Links relacionados</h2>

<p><a href="/Topic/740955a8-3b27-4e50-b35c-7a728c1d9c38">??Qu?? son Presets?</a></p>

<p><a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">??Qu?? es el programador?</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="1d3c4f8d-0d36-44da-9f6d-fa91f0db3024">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Groups/es/1.2'; " title="Go to previous page 'Work with groups'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_Cues/es/1.2';" title="Go to next page 'Work with cues'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13947/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
