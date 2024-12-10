---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/WA_Ipv6/es/1.2'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f1b7cb49-645d-4aa2-b435-a852501289f0">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WA_Network/es/1.2'; " title="Go to previous page 'Red'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_DmxTester/es/1.2';" title="Go to next page 'DMX Tester'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/f1b7cb49-645d-4aa2-b435-a852501289f0">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/18010/7'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.2</span>
			</div>
		<h1>Qué es IPv6</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Utilizando un PC</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">¿Cómo comprobar esto?</a>
								<ul>
										<li><a href="#toc_header_anchor_3">Windows 10</a></li>
										<li><a href="#toc_header_anchor_4">Windows 8</a></li>
										<li><a href="#toc_header_anchor_5">Windows 7</a></li>
								</ul>
						</li>
				</ul>
			</div>

		<p>IPv6 es el sistema de lenguaje y de direcciones de red utilizado en el sistema dot2.</p>

<p>Todos los dispositivos de MA lighting tienen una dirección IPv6 única, un gran número. Esto significa que no tienes que preocuparte sobre ajustar una dirección en tu equipo.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Utilizando un PC</h2>

<p>Pero puede que necesites preocuparte sobre la dirección IPv6 de tus PC. Normalmente tu ordenador creará su propia dirección. Es un número que está escrito en 8 bloques separados por dos puntos. Cada bloque tiene 4 número hexadecimales. Una dirección IPv6 podría tener este aspecto:&nbsp;&nbsp;</p>

<pre>2001:0db8:4545:0000:0000:00ff:fe21:67cf</pre>

<p>También podría mostrarse de esta manera (la misma dirección):</p>

<pre>2001:db8:4545:ff:fe21:67cf</pre>

<p>Todos los PC que son compatibles con IPv6 tienen algo llamado Dirección de Link Local. Esta es una dirección que empieza con “fe80”. Los datos desde y hasta una dirección de link local sólo están siendo transmitidos en tu red local. No se transmitirán a través de un router o de&nbsp;internet.&nbsp;</p>

<p>Tu ordenador debería tener una Dirección de Link Local.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>¿Cómo comprobar esto?</h2>

<a name="toc_header_anchor_3" id="toc_header_anchor_3" class="topic-toc-item"></a><h3>Windows 10</h3>

<p>Haz click&nbsp;en el icono de búsqueda&nbsp;(una lupa) - por defecto en la barra de herramientas a la izquierda.</p>

<p>Busca por "cmd", esto te mostrará un ejecutable. Haz click sobre él.</p>

<p>Aquí puedes escribir&nbsp;<span class="syntax">ipconfig</span>. Esto te mostrará una lista de los ajustes actuales para tus interfaces de red y encontrarás una cosa llamada&nbsp;Link-local IPv6 Address siendo de esperar que tengas una dirección que comienza con "fe80".</p>

<a name="toc_header_anchor_4" id="toc_header_anchor_4" class="topic-toc-item"></a><h3>Windows 8</h3>

<p>Haz click en el icono de inicio de window. La posición por defecto se encuentra en la esquina inferior izquierda.</p>

<p>En el menu selecciona “Ejecutar” y luego teclea <strong>cmd </strong>en la ventana que se abre. Esto abre la interfaz de línea de comando para Windows.&nbsp;</p>

<p>Aquí puedes teclear <strong>ipconfig.</strong> Esto enumerará las configuraciones actuales para tus interfaces de red. Aquí deberías encontrar algo llamado Link-local IPv6 Address (Dirección de Link Local IPv6). Y con suerte tendrás una dirección que empieza con “fe80”.</p>

<a name="toc_header_anchor_5" id="toc_header_anchor_5" class="topic-toc-item"></a><h3>Windows 7</h3>

<p>Haz click en el icono de inicio de Windows. La posición por defecto se encuentra en la esquina inferior izquierda.</p>

<p>En el menú haz click en el campo de búsqueda y teclea <strong>cmd</strong>.&nbsp;</p>

<p>Esto abre la interfaz de línea de comando para Windows.</p>

<p>Aquí puedes teclear <strong>ipconfig.</strong> Esto enumerará las configuraciones actuales para tus interfaces de red. Aquí deberías encontrar algo llamado Link-local IPv6 Address (Dirección de Link Local IPv6). Y con suerte tendrás una dirección que empieza con “fe80”.</p>

<p>&nbsp;</p>

<p>Si tu PC no tiene dirección IPv6, necesitarás mirar el manual de tu ordenador o del sistema operativo. También puedes ir a la página web de Windows y buscar IPv6.&nbsp;</p>

<p>Tu sistema necesita ser compatible con el lenguaje y las direcciones IPv6. Por favor asegúrate que estás usando switches de red que soportan IPv6.&nbsp;</p>

<p>&nbsp;</p>

<a name="toc_header_anchor_6" id="toc_header_anchor_6" class="topic-toc-item"></a><h2>Links relacionados</h2>

<p><a href="/Topic/2f843708-403a-459b-acd3-d3a504e1dcd7">Qué es una Red</a></p>

<p><a href="/Topic/021f5292-de29-41b0-9552-3540e90ba5de">Cómo conectar nodos, wings, 3D y onPC&nbsp;</a></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="f1b7cb49-645d-4aa2-b435-a852501289f0">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WA_Network/es/1.2'; " title="Go to previous page 'Red'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/WI_DmxTester/es/1.2';" title="Go to next page 'DMX Tester'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/18010/7';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
