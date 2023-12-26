---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/Key_Plus/es/1.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="8de313c0-11c4-45df-8aaf-381fc46b3ec4">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Please/es/1.3'; " title="Go to previous page 'Please'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Preset/es/1.3';" title="Go to next page 'Preset'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/8de313c0-11c4-45df-8aaf-381fc46b3ec4">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7746/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Tecla [Plus] +</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Selección de Aparatos</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Asignar valores</a>
								<ul>
										<li><a href="#toc_header_anchor_3">Valor Absoluto o Relativo</a></li>
								</ul>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Selección de página</a>
						</li>
				</ul>
			</div>

		<p>La tecla&nbsp;<span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;tiene dos funciones principales.</p>

<p>Se puede utilizar para la selección de aparatos y para asignar valores.</p>

<p>Otro uso es cambiar de página de ejecutores.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Selección de Aparatos</h2>

<p>E.j. Quieres seleccionar los aparatos del grupo cinco y el aparato número 2 (no es parte del grupo cinco).</p>

<p><span class="hardkey">Group</span> <span class="hardkey">5</span> <span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;<span class="hardkey">Fixture</span> <span class="hardkey">2</span> <span class="hardkey">Please</span></p>

<p>Si ya tienes seleccionado el grupo cinco puedes hacer esto para añadir el aparato dos a tu selección.</p>

<p><span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;<span class="hardkey">2</span> <span class="hardkey">Please</span></p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Asignar valores</h2>

<p>La tecla&nbsp;<span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;se puede utilizar para asignar un valor mayor que el actual - Recuerda no el dimmer no puedes por encima de 100%.</p>

<p>Ej. tienes una selección de aparatos con valor de dimmer 50% y quieres aumentarlo un 20%. Esto es lo que tienes que teclear (teniendo los aparatos seleccionados):</p>

<p><span class="hardkey">At</span> <span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;<span class="hardkey">2</span> <span class="hardkey">0</span> <span class="hardkey">Please</span></p>

<p>Hay una pequeña función extra para la tecla&nbsp;<span class="hardkey">&nbsp;+&nbsp;</span>. Si la presionas dos veces (como un doble click) automáticamente añades un 10% al valor.</p>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Valor Absoluto o Relativo</h3>

<p>La descripción anterior es sobre la configuración de un valor relativo.&nbsp;También puede establecer un valor absoluto positivo.</p>

<p>La diferencia entre un valor relativo o absoluto es el espacio entre el signo más (plus) y el número.</p>

<p>Para establecer un valor relativo puedes escribir&nbsp;<span class="syntax">at + 5 </span>&nbsp;en la línea de comandos (comando ejecutado presionando&nbsp;<span class="hardkey">Please</span>). Un valor absoluto se escribiría&nbsp;<span class="syntax">at +5</span> (comando ejecutado presionando&nbsp;<span class="hardkey">Please</span>).</p>

<p>El valor positivo es generalmente sobrentendido a menos que especifiques algo diferente - Así solo necesitas escribir&nbsp;<span class="syntax">at 5</span> <span class="hardkey">Please</span>.</p>

<p>Utilizando las teclas sólo tienes que presionar&nbsp;<span class="hardkey">At</span> <span class="hardkey">5</span> <span class="hardkey">Please</span>. Si por alguna razón necesitas añadir el signo "mas" puedes hacerlo presionando&nbsp;<span class="hardkey">At</span> <span class="hardkey">+</span>&nbsp;<span class="hardkey">5</span> <span class="hardkey">Please</span>, presionando el "mas" mientras tecleas el valor eliminas el espacio entre el signo y el valor.</p>

<p>Ambos establecerán el valor 5 en positivo.</p>

<p>Utilizando la calculadora (puedes obtenerla con una breve pulsación del encoder sobre el que quieres ajustar el valor) puedes pulsar el botón&nbsp;<span class="softkey">+/-</span>&nbsp;para añadir el signo sin un espacio. Para valores relativos puedes utilizar el botón&nbsp;<span class="softkey">+</span>.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Selección de página</h2>

<p>Puedes utilizar la tecla&nbsp;<span class="hardkey">&nbsp;+ </span>&nbsp;para la página activa. Si quieres ir a la siguiente página puedes utilizar las siguientes teclas:</p>

<p><span class="hardkey">Page</span> <span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;<span class="hardkey">Please</span></p>

<p>También puedes utilizar un cálculo. Si estás en la página dos y quieres ir a la página cinco puedes utilizar las siguientes teclas.</p>

<p><span class="hardkey">Page</span> <span class="hardkey">&nbsp;+&nbsp;</span>&nbsp;<span class="hardkey">3</span> <span class="hardkey">Please</span></p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Links relacionados</h2>

<p><a href="/Topic/dcc4bfcc-ffea-4538-8dc4-3090dc5d06b5">Comando + [Plus]&nbsp;</a></p>

<p><a href="/Topic/014d961b-8de1-4f48-92de-e6da3cc6a15f">Ventana Calculadora</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="8de313c0-11c4-45df-8aaf-381fc46b3ec4">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Please/es/1.3'; " title="Go to previous page 'Please'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_Preset/es/1.3';" title="Go to next page 'Preset'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7746/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
