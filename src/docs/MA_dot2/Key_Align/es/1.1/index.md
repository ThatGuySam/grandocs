---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/Key_Align/es/1.1'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="653b1e1b-2bcd-4065-b918-bef12958ceb3">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Keys/es/1.1'; " title="Go to previous page 'Teclas'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_At/es/1.1';" title="Go to next page 'At'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/653b1e1b-2bcd-4065-b918-bef12958ceb3">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/7744/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Tecla Align</h1>


		<p>La tecla&nbsp;<span class="hardkey">Align</span>&nbsp;se utiliza para alinear los valores entre múltiples aparatos seleccionados.</p>

<p>La función&nbsp;Align&nbsp;tiene cinco modos diferentes:</p>

<ul>
	<li><strong>Align Off</strong>: Todos los valores son los mismos. Este es el modo por defecto. &nbsp;</li>
	<li><strong>Align &lt;</strong>: Este modo mantendrá el valor del primer aparato seleccionado y alinea los valores hasta el último aparato seleccionado.
	<ul>
		<li>En este ejemplo los diez aparatos (seleccionados del 1 al 10) se establecen al 50% y luego la función align es aplicada y el encoder girado (hacia abajo). Este es el resultado:<br>
		<img alt="" src="/Media/Image/Dot2_Keys_Align_Left.png"></li>
		<li>Este resultado también se puede conseguir con las teclas:&nbsp;<span class="hardkey">Fixture</span> <span class="hardkey">1</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">At</span> <span class="hardkey">5</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">Please</span>.</li>
	</ul>
	</li>
	<li><strong>Align &gt;</strong>: Este modo mantiene el valor para el último de los aparatos seleccionados y alinea los valores hasta el primer aparato seleccionado.
	<ul>
		<li>En este ejemplo los diez aparatos (seleccionados del 1 al 10) se establecen al 50% y luego la función align es aplicada y el encoder girado (hacia arriba). Este es el resultado:<br>
		<img alt="" src="/Media/Image/Dot2_Keys_Align_Right.png"></li>
		<li>Este resultado también se puede conseguir con las teclas:&nbsp;<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Thru</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Thru</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">0</span> <span class="hardkey">Please</span>.</li>
	</ul>
	</li>
	<li><strong>Align &gt;&lt;</strong>: Este modo mantiene el valor de la mitad de tu selección y alinea los valores hacia el primero y el último. Como si hubiese un punto de balancín &nbsp;o un pivote central.
	<ul>
		<li>En este ejemplo los diez aparatos (seleccionados del 1 al 10) se establecen al 50% y luego la función align es aplicada y el encoder girado (hacia abajo). Este es el resultado:<br>
		<img alt="" src="/Media/Image/Dot2_Keys_Align_Center.png"></li>
		<li>Este resultado también se puede conseguir con las teclas:&nbsp;<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Thru</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">1</span> <span class="hardkey">0</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Thru</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Please</span>.</li>
	</ul>
	</li>
	<li><strong>Align &lt;&gt;</strong>: Este modo mantiene los valores en el primer y último aparato en tu selección y alinea los valores hacia el centro de tu selección como una flecha.
	<ul>
		<li>En este ejemplo los diez aparatos (seleccionados del 1 al 10) se establecen al 50% y luego la función align es aplicada y el encoder girado (hacia abajo). Este es el resultado:<br>
		<img alt="" src="/Media/Image/Dot2_Keys_Align_Sides.png"></li>
		<li>Este resultado también se puede conseguir con las teclas:<span class="hardkey">Fixture</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">Thru</span>&nbsp;<span class="hardkey">1</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">At</span>&nbsp;<span class="hardkey">5</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Thru</span>&nbsp;<span class="hardkey">0</span>&nbsp;<span class="hardkey">Thru</span> <span class="hardkey">5</span> <span class="hardkey">0</span>&nbsp;<span class="hardkey">Please</span>.</li>
	</ul>
	</li>
</ul>

<p>Cuando presionas la tecla&nbsp;<span class="hardkey">Align</span>&nbsp;alternas entre los cinco modos. Un pequeño pop-up de información aparece en la pantalla 1 recordando el modo seleccionado.</p>

<p>Tan pronto como comienzas a cambiar otra cosa (por ejemplo cambiar de parámetro) la función Align saltará vuelta a "Align Off". &nbsp;</p>

<div class="important">Esta tecla no interactua con la entrada de tu línea de comandos.</div>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="653b1e1b-2bcd-4065-b918-bef12958ceb3">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Keys/es/1.1'; " title="Go to previous page 'Teclas'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Key_At/es/1.1';" title="Go to next page 'At'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/7744/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
