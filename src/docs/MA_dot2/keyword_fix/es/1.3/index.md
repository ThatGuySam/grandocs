---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/keyword_fix/es/1.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="3fa7be26-ead4-44c6-98d5-f9d0eda903ff">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_fade/es/1.3'; " title="Go to previous page 'Fade'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_fixture/es/1.3';" title="Go to next page 'Fixture'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/3fa7be26-ead4-44c6-98d5-f9d0eda903ff">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/5974/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Comando Fix</h1>

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

		<p>Esta página describe la sintaxis y el uso del comando Fix.</p>

<p>Para acceder al comando Fix presiona la tecla&nbsp;<span class="hardkey">Fix</span>&nbsp;en la consola.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Descripción</h2>

<p>El comando Fix es una función toggle. Con el comando Fix puedes "fijar o desfijar" un ejecutor en la&nbsp;<a href="/Topic/af87cdc8-b54b-41ee-b614-26065230c7ec">Barra de Ejecutores</a>&nbsp;y&nbsp;en la&nbsp;<a href="/Topic/d8ca000e-cf13-448d-ac3e-129272e731d8">Vista Barra de ejecutores</a>&nbsp;sin importar la página en la que te encuentras.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>Sintaxis</h2>

<p>Fix y Unfix (fijar y desfijar) un ejecutor.</p>

<div class="cl_input">Fix Executor 1</div>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h2>Ejemplo 1</h2>

<p>Supongamos que quieres fijar el ejecutor 6 para tenerlo siempre visible en la&nbsp;<a href="/Topic/af87cdc8-b54b-41ee-b614-26065230c7ec">Barra de Ejecutores</a>&nbsp;sin importar la página en la que te encuentras.</p>

<p>Presiona&nbsp;<span class="hardkey">Fix</span> <span class="hardkey">Exec</span> <span class="hardkey">6</span> <span class="hardkey">Please</span>.</p>

<p>El ejecutor 6 está ahora fijado. Un ejecutor fijado se muestra con&nbsp;<a href="/Topic/581eb40a-40db-4a6f-90ec-1a31d96acbcc">rayas pequeñas</a>.</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h2>Ejemplo 2</h2>

<p>Supongamos que quieres Unfix ("desfijar") el ejecutor 6 porque ya no necesitas que esté visible en tu barra de ejecutores.</p>

<p>Presiona&nbsp;<span class="hardkey">Fix</span> <span class="hardkey">Exec</span> <span class="hardkey">6</span> <span class="hardkey">Please</span>.</p>

<p>El ejecutor 6 se ha Unfix ("desfijado")</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h2>Links relacionados</h2>

<ul>
	<li><a href="/Topic/581eb40a-40db-4a6f-90ec-1a31d96acbcc">Sistema de colores - Ejecutor</a></li>
	<li><a href="/Topic/af87cdc8-b54b-41ee-b614-26065230c7ec">Barra Ejecutores</a></li>
</ul>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="3fa7be26-ead4-44c6-98d5-f9d0eda903ff">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_fade/es/1.3'; " title="Go to previous page 'Fade'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/keyword_fixture/es/1.3';" title="Go to next page 'Fixture'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/5974/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
