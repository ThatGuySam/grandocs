---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/viewitem_speed/es/1.3'
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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="7c1f0153-925d-477b-9b74-20bbc04acc98">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Macro/es/1.3'; " title="Go to previous page 'Macros Pool'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_midiconfiguration/es/1.3';" title="Go to next page 'MIDI Configuration'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/7c1f0153-925d-477b-9b74-20bbc04acc98/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/18053/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Vista Magic Speed</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Funciones Barra Encoders</a>
						</li>
				</ul>
			</div>

		<p>Para acceder a la&nbsp;<strong>Vista Magic Speed </strong>presiona la tecla&nbsp;<span class="hardkey">Magic</span>&nbsp;en la consola o en la barra de vistas haz click&nbsp;en&nbsp;<span class="softkey">Mas...</span>&nbsp;y luego&nbsp;<span class="softkey">Magic Speed</span>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MagicSpeed_1-2.png"></p>

<p><em>Imagen 1: Vista&nbsp;Magic Speed</em></p>

<p>La vista Magic Speed incluye los cuatro Masters Especiales.</p>

<p>Si un master especial está habilitado, el fader se muestra en verde hierba.<br>
Si un master&nbsp; especial está deshabilitado, el fader se muestra en verde oliva.</p>

<p>Para más información sobre los botones con iconos y sus funciones&nbsp;consulte <a href="/Topic/4bdf0092-9184-4d12-bcf4-42b7a49ef170">Iconos</a>.</p>

<p><strong>Master Speed:</strong><br>
Controla la velocidad de los efectos en las cues y la velocidad de reproducción de los chasers.&nbsp;<br>
Si un ejecutor no debe ser controlado por el fader de Master Speed, ir a&nbsp;<a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">Ajustes del Ejecutor</a>.</p>

<p><strong>Master Rate:</strong><br>
Controla el ratio del trig time, fade y delay.<br>
Si usas el fader del Master Rate, los tiempos de trig,&nbsp;fade y delay en la cue list están indicados con un&nbsp;<strong>asterisco *</strong>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MagicSpeed02_1-2.png"></p>

<p><em>Imagen 2: Cue list principal afectado por el Master Rate.</em></p>

<p>Si un ejecutor no debe ser controlado por el fader de Master Speed, ir a&nbsp;<a href="/Topic/eea17a4c-1b42-406e-86d9-7e61b3a0bfdd">Ajustes del Ejecutor</a>.</p>

<p><strong>Exec Time</strong> (= Executor Time):<br>
Sobrescribe los tiempos de Fade y On/Off. Establece los tiempos de delay a cero.Se descartan los tiempos de Trig&nbsp;y el Trig Follow. Si se utiliza el Exec Time los tiempos de fade y delay se muestran con un signo<strong>&nbsp;"igual ="&nbsp;</strong>delante.</p>

<figure class="caption"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MagicSpeed04_1-2.png">
<figcaption><em>Imagen 3: Cue List principal utilizando Exec Time</em></figcaption>
</figure>

<p>&nbsp;</p>

<p><strong>Prog Time</strong> (= Programmer Time):<br>
Controla el tiempo de Fade para los cambios de valores en el programador.</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Funciones Barra Encoders</h2>

<p>La velocidad del encoder por defecto es sin decimales.<br>
Para cambiar la velocidad del encoder a lenta, presiona la tecla del encoder&nbsp;<span class="hardkey"><img alt="encoder" src="/Media/Mlg/encoder.png"></span> . La velocidad del encoder es ahora con decimales.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MagicSpeed03_1-1-3.png"></p>

<p><em>Imagen 4: Vista Magic Speed - Barra de Encoders</em></p>

<p><strong>Master Speed:</strong><br>
Para cambiar el Master Speed, gira el encoder a izquierda o derecha.<br>
Para abrir la&nbsp;<a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">calculadora</a>, presiona el encoder.</p>

<p><strong>Master Rate:</strong><br>
Para cambiar el Master&nbsp;Rate, gira el encoder a izquierda o derecha.<br>
Para abrir la&nbsp;<a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">calculadora</a>, presiona el encoder.</p>

<p><strong>Exec Time:</strong><br>
Para cambiar el Executor&nbsp;Time, gira el encoder a izquierda o derecha.<br>
Para abrir la&nbsp;<a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">calculadora</a>, presiona el encoder.</p>

<p><strong>Prog Time:</strong><br>
Para cambiar el Programmer&nbsp;Time, gira el encoder a izquierda o derecha.<br>
Para abrir la&nbsp;<a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">calculadora</a>, presiona el encoder.</p>

<p>&nbsp;</p>


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
		<input data-val="true" data-val-number="The field Int32 must be a number." data-val-required="The Int32 field is required." id="ProductId" name="ProductId" type="hidden" value="7">
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="7c1f0153-925d-477b-9b74-20bbc04acc98">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ViewItem_Macro/es/1.3'; " title="Go to previous page 'Macros Pool'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_midiconfiguration/es/1.3';" title="Go to next page 'MIDI Configuration'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/18053/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
