
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="e1f94bd5-1e46-4a43-8f28-abfc1f4fe431">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_blind/es/1.3'; " title="Go to previous page 'Blind'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_clone/es/1.3';" title="Go to next page 'Clone'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/e1f94bd5-1e46-4a43-8f28-abfc1f4fe431">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/17428/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Comando Call</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Descripción</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">Sintaxis</a>
						</li>
						<li>
							<a href="#toc_header_anchor_3">Ejemplo 1</a>
						</li>
						<li>
							<a href="#toc_header_anchor_4">Ejemplo 2</a>
						</li>
				</ul>
			</div>

		<p>Esta página describe la sintaxis y el uso del comando <strong>Call</strong></p>

<p>Para acceder al comando <strong>Call</strong>&nbsp;pulsa&nbsp;las teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span>&nbsp;y&nbsp;<span class="hardkey">On</span>&nbsp;en la consola<br>
<strong>Call&nbsp;</strong>está ahora en la&nbsp;<a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">línea de comandos</a>.</p>

<div class="cl_input">Call</div>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>Con el comando <strong>Call&nbsp;</strong>tu puedes llamar:</p>

<ul>
	<li>Presets desde el pool de presets al&nbsp;<a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">programador</a>&nbsp;para todos los aparatos que soporten esos atributos.</li>
	<li>Al estado de la cue&nbsp;como es su salida actual y los valores de la misma y los incluye&nbsp;en el programador como valores que se pueden almacenar, &nbsp;pero sin seleccionar los aparatos</li>
</ul>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>1. Llamar un preset al programador</p>

<div class="cl_input">Call Preset 1.1</div>

<p>2. Llamar una cue</p>

<div class="cl_input">Call Cue 3</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que llamas al programador al preset&nbsp;de dimmer 1 desde el pool de presets de dimmer (=1)</p>

<p>Pulsa las teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">On</span> (=Call) y&nbsp;<span class="hardkey">Preset</span> <span class="hardkey">1</span> <span class="hardkey">.</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</p>

<p>El preset de dimmer 1 está en el programador para todos los aparatos incluidos&nbsp;en ese tipo de preset.</p>

<div class="tip">Repasa los valores en el programador en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista&nbsp;Hoja de Aparatos</a>.</div>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que&nbsp;qrabas&nbsp;la&nbsp;cue&nbsp;4 (=fondo verde y actor en escena)<br>
La luz para el actor en escena está actualmente en el programador junto con los aparatos seleccionados. Ahora llamas a la&nbsp;cue&nbsp;3 (=fondo verde) a la selección actual de aparatos y valores en el programador.</p>

<p><img alt="" src="/Media/Image/Dot2_Commands_Call01_1-2.png">&nbsp;&nbsp;<img alt="" src="/Media/Image/Dot2_Commands_Call02_1-2.png"></p>

<p>Presiona las teclas&nbsp;<span class="hardkey"><img alt="ma" src="/Media/Mlg/ma.png"></span> + <span class="hardkey">On</span> (=Call) y&nbsp;&nbsp;<span class="hardkey">Cue</span> <span class="hardkey">3</span> <span class="hardkey">Please</span>.</p>

<p>Se ha llamado a la cue 3 y ves la salida actual junto con tu selección anterior de aparatos y sus valores</p>

<p>Todos los valores de la cue 3 están en el programador y se pueden almacenar<br>
Ningún aparato de la cue 3 está seleccionado<br>
Todavía puedes ajustar los valores de la selección de aparatos.<br>
Si te gusta todo lo que ves, graba la cue 4 (=fondo verde y &nbsp;el actor en escena) en un ejecutor.</p>

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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="e1f94bd5-1e46-4a43-8f28-abfc1f4fe431">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_blind/es/1.3'; " title="Go to previous page 'Blind'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_clone/es/1.3';" title="Go to next page 'Clone'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/17428/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	