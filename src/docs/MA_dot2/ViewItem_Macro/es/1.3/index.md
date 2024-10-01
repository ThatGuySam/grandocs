---
originalUrl: 'https://help2.malighting.com/Page/MA_dot2/ViewItem_Macro/es/1.3'
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c2173bc1-c86a-4c4f-b2d7-05a83f0e9b2a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Window_LoadShow/es/1.3'; " title="Go to previous page 'Load Show'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/viewitem_speed/es/1.3';" title="Go to next page 'Magic Speed'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

			<div class="infobox"><b>Hint:</b><br><b>New English version</b><br>The language you selected is outdated. <a href="/Topic/c2173bc1-c86a-4c4f-b2d7-05a83f0e9b2a/en">You may want to view the more up-to-date English version?</a></div>
		
			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/11692/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Vista Macros Pool</h1>


		<p>Para ir a la<strong> Vista&nbsp;de Macros Pool</strong>&nbsp;en la pantalla 1, presiona&nbsp;<span class="hardkey">Macro</span>&nbsp;en la consola.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MacrosPool01_1-0.PNG"></p>

<p>Los macros son comandos predefinidos y almacenados(grabados) que se usan para la automatización de tareas. Están organizados en orden alfabético.</p>

<p>Para desplazarte dentro de la vista de las Macros pool, desliza la barra vertical o sube y baja dentro de la vista.</p>

<p>Hay 26&nbsp;macros&nbsp;disponibles:</p>

<p><strong>1. +05:</strong><br>
Añade 5% de valor de dimmer al aparato seleccionado.</p>

<p><strong>2. -05:</strong><br>
Resta 5% de valor de dimmer al aparato seleccionado.</p>

<p><strong>3. Align &lt;:</strong><br>
Selecciona el modo Align &lt;. Consulta&nbsp;<a href="/Topic/653b1e1b-2bcd-4065-b918-bef12958ceb3">Tecla Align</a>.</p>

<p><strong>4. Align &gt;:</strong><br>
Selecciona el modo Align &gt;. Consulta <a href="/Topic/653b1e1b-2bcd-4065-b918-bef12958ceb3">Tecla Align</a>.</p>

<p><strong>5. Align &lt;&gt;:</strong><br>
Selecciona el modo Align &lt;&gt;. Consulta <a href="/Topic/653b1e1b-2bcd-4065-b918-bef12958ceb3">Tecla Align</a>.</p>

<p><strong>6. Align &gt;&lt;:</strong><br>
Selecciona el modo Align &gt;&lt;. Consulta <a href="/Topic/653b1e1b-2bcd-4065-b918-bef12958ceb3">Tecla Align</a>.</p>

<p><strong>7. Align Off:</strong><br>
Desactiva el modo Align. Consulta&nbsp;<a href="/Topic/653b1e1b-2bcd-4065-b918-bef12958ceb3">Tecla Align</a>.</p>

<p><strong>8. Circular Copy &gt;:</strong><br>
Copia todos los valores de los aparatos seleccionados un paso a la derecha. Esto es útil para crear un chase.</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MacrosPool02_1-0.PNG"></span></p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MacrosPool03_1-0.PNG"></span></p>

<p><strong>9. Circular Copy &lt;:</strong><br>
Copia todos los valores de los aparatos seleccionados un paso a la izquierda. Esto es útil para crear un chase.</p>

<p><strong>10. Clear Selection:</strong><br>
Borra la selección de aparatos. Consulta&nbsp;<a href="/Topic/c2b1c777-2cd1-46a2-83b3-20b6c6e59ff6">Tecla Clear</a>.</p>

<p><strong>11. Clear All:</strong><br>
Borra la selección y elimina todos los valores del programador. Consulta&nbsp;<a href="/Topic/c2b1c777-2cd1-46a2-83b3-20b6c6e59ff6">Tecla Clear</a>.</p>

<p><strong>12. Even:</strong><br>
Selecciona cada segundo aparato de la selección actual.&nbsp;La Función&nbsp;<a href="/Topic/7c60a033-c64a-4716-864c-3fc2388f6585">Tecla Next</a>&nbsp;y&nbsp;<a href="/Topic/0d486539-5711-470a-b703-e677320852f4">Tecla Previous</a>&nbsp;cambian a la función alternar entre even y odd (par e impar).&nbsp;<br>
Reinicia las teclas Next&nbsp;y&nbsp;Previous a por defecto usando <a href="#35. Reset Next/Previous Key">Macro 24&nbsp;Reset Next/Previous Key</a>.</p>

<p><strong>13. Even ID:</strong><br>
Selecciona solo los aparatos con un ID “par” (even) sobre la selección actual.<br>
<a href="/Topic/7c60a033-c64a-4716-864c-3fc2388f6585">Tecla Next</a>&nbsp;y&nbsp;<a href="/Topic/0d486539-5711-470a-b703-e677320852f4">Tecla Previous</a>&nbsp;selecciona los aparatos anteriores y posteriores con ID “par” (even).<br>
Reinicia las teclas Next and Previous a por defecto usando&nbsp;<a href="#35. Reset Next/Previous Key">Macro 24&nbsp;Reset Next/Previous Key</a>.</p>

<p><strong>14. IfActive:</strong><br>
Selecciona aparatos en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a>&nbsp;si tienen valores activos en el programador. Consulta&nbsp;<a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">¿Qué es el Programador?</a></p>

<p><strong>15. if output:</strong><br>
Selecciona aparatos en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a>&nbsp;si tienen el valor de dimmer por encima de 0.</p>

<p><strong>16. IfProg:</strong><br>
Selecciona aparatos en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a> si tienen valores en el programador. Consulta, <a href="/Topic/e740a39c-ef36-4081-9014-59e0a288711c">¿Qué es el Programador?</a></p>

<p><strong>17. Invert:</strong><br>
Introduce el <a href="/Topic/266392fd-fb16-47b6-a5a7-96dafe157d5c">Comando Invert</a>&nbsp;en la Línea de Comandos.</p>

<p><strong>18. Knockout Invert:</strong><br>
Invierte la selección y quita la selección invertida del programador. Esto es útil si tienes muchos valores en el programador pero quieres guardar sólo los valores actuales seleccionados.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MacrosPool04_1-0.PNG"></p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MacrosPool05_1-0.PNG"></p>

<p><strong>19. Knockout Selection:</strong><br>
Rechaza los aparatos seleccionados en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a>&nbsp;y elimina sus valores del programador.</p>

<p><strong>20. Odd:</strong><br>
Selecciona cada segundo aparato de la selección del aparato actual, comenzando con este primer aparato. La función&nbsp;<a href="/Topic/7c60a033-c64a-4716-864c-3fc2388f6585">Tecla Next</a>&nbsp;y&nbsp;<a href="/Topic/0d486539-5711-470a-b703-e677320852f4">Tecla Previous</a>&nbsp;cambia a la función alternar entre even y odd.<br>
Reinicia las teclas&nbsp;Next&nbsp;and&nbsp;Previous&nbsp;a por defecto usando&nbsp;<a href="#35. Reset Next/Previous Key">Macro 24&nbsp;Reset&nbsp;Next/Previous&nbsp;Key</a>.</p>

<p><strong>21. Odd ID:</strong><br>
Selecciona solo aparatos con un ID impar.&nbsp;<a href="/Topic/7c60a033-c64a-4716-864c-3fc2388f6585">Tecla Next</a>&nbsp;y&nbsp;<a href="/Topic/0d486539-5711-470a-b703-e677320852f4">Tecla Previous</a>&nbsp;selecciona ID impar anterior y posterior.<br>
Reinicia las teclas&nbsp;Next&nbsp;and&nbsp;Previous&nbsp;a por defecto usando&nbsp;<a href="#35. Reset Next/Previous Key">Macro 24&nbsp;Reset&nbsp;Next/Previous&nbsp;Key</a>.</p>

<p><strong>22. Off all executor:</strong><br>
Apaga todos los ejecutores excepto el ejecutor principal</p>

<p><strong>23. Oops Menu:</strong><br>
Abre la&nbsp;<a href="/Topic/6bf10f4b-ae6b-4365-a3b3-2a2bb89eed00">Vista Oops</a>&nbsp;en la pantalla 1.</p>

<p><strong>24. Quicksave the Show File:</strong><br>
Salvar/guardar el archivo de show. Consulta, <a href="/Topic/3ab167d1-496d-45f6-b1a5-910f0f924c1a">Tecla Backup</a></p>

<p><strong>25. Reset Next/Previous Key:</strong><a id="35. Reset Next/Previous Key" name="35. Reset Next/Previous Key"></a><br>
Reinicia la tecla Next and Previous&nbsp;a su función por defecto.<br>
Esto es necesario después de haber usado un Macro Even o Odd.</p>

<p><strong>26. Shuffle Selection:</strong><br>
El dot2 recuerda el orden de cómo seleccionaste los aparatos. Por ejemplo desde el aparato 1 al 10 ó desde el 10 al 1.<br>
Esto es necesario para por ejemplo crear efectos o utilizar la función highlight.</p>

<p>La selección shuffle (mezclar) del macro, mezcla el orden de selección de los aparatos.</p>

<p>Ejemplo sin Shuffle Selection Macro:<br>
Selecciona los aparatos en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a>&nbsp;del 1 al 8, presiona&nbsp;<span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MacrosPool06_1-0.PNG"></p>

<p>Los valores desde 10 a 100 son asignados a los aparatos en el orden de selección..</p>

<p>Ejemplo con Shuffle Selection Macro::<br>
Selecciona aparatos desde 1 a 8 en la&nbsp;<a href="/Topic/989f0b88-de3d-4818-8c0b-a69fa90b2106">Vista de Aparatos</a>, pulsa la macro&nbsp;<span class="softkey">Shuffle Selection</span>, presiona&nbsp;<span class="hardkey">At</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">Thru</span> <span class="hardkey">1</span> <span class="hardkey">0</span> <span class="hardkey">0</span>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MacrosPool07_1-0.PNG"></p>

<p>Los values desde 10 a 100 son asignados a los aparatos en orden mezclados (aleatorio).</p>

<p><strong>27. Shuffle Values:</strong><br>
Mezcla los values de los aparatos seleccionados.</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MacrosPool08_1-0.PNG"></span></p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_MacrosPool09_1-0.PNG"></span></p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="c2173bc1-c86a-4c4f-b2d7-05a83f0e9b2a">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/Window_LoadShow/es/1.3'; " title="Go to previous page 'Load Show'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/viewitem_speed/es/1.3';" title="Go to next page 'Magic Speed'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/11692/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	
