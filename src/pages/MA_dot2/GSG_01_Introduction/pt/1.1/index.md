
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="b3900090-7787-4a5f-a6a2-5691606afee3">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_00_Main/pt/1.1'; " title="Go to previous page 'Guia de Introdução'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_02_PhysicalSetupAndLayout/pt/1.1';" title="Go to next page '2 - Setup Físico e Layout'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/b3900090-7787-4a5f-a6a2-5691606afee3">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/12888/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Guia de Introdução - Introdução</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Bem-vindo(a) ao guia da&nbsp;dot2.</a>
						</li>
						<li>
							<a href="#toc_header_anchor_2">As marcações diferentes neste guia</a>
						</li>
				</ul>
			</div>

		<p><strong>"Não se assuste"</strong><br>
<em>&nbsp; &nbsp;- Douglas Adams, O Guia do Mochileiro das Galáxias</em></p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Bem-vindo(a) ao guia da&nbsp;dot2.</h2>

<p>Vamos dar uma olhada na maioria das funções do console dot2.</p>

<p>Isso será uma curva de aprendizado e sugerimos que você siga as etapas deste guia de forma precisa e, em seguida, possa experimentar por você mesmo.</p>

<p>Também é recomendado que você leia este guia do início ao fim. Não faz muito sentido se você pular entre os capítulos.</p>

<p>O projeto e a ideia do console é que ele deve ser fácil de usar e fácil de entender.</p>

<p>Quando você é apresentado com diferentes possibilidades no console, você também verá uma breve explicação das opções no console. Neste guia, vamos explicar um pouco mais e explorar algumas das diferenças.</p>

<p>Este guia foi escrito como se você estivesse sentado de frente a um console físico. Eu vou sugerir que você use um teclado USB externo e uma tela externa - de preferência, uma touchscreen, se você não tem uma, então você também pode ser feliz com um mouse USB.</p>

<p>Você pode seguir este guia usando apenas um console, mas você terá uma melhor experiência com uma tela externa. Há mais informações sobre como conectar esses dispositivos externos no próximo capítulo.</p>

<a name="toc_header_anchor_2" id="toc_header_anchor_2" class="topic-toc-item"></a><h2>As marcações diferentes neste guia</h2>

<p>Ao longo deste guia eu vou usar algumas marcações diferentes no texto.</p>

<p>Se você precisa pressionar uma tecla ou eu estou apenas me referindo a uma tecla no console, ela se parecerá com esta: <span class="hardkey">Help</span></p>

<p>Algumas teclas têm símbolos e quando precisamos falar sobre elas, irei lhe mostrar a tecla e também introduzir a palavra escrita dessas teclas.</p>

<p>Você também precisa tocar em botões na tela. Eles serão parecidos com este:&nbsp;&nbsp;<span class="softkey">Relógio do Sistema</span>.</p>

<p>Se eu preciso que você escreva alguma coisa no teclado, escreverei assim:&nbsp;<span class="syntax">f 42&nbsp;at&nbsp;full</span>&nbsp;talvez eu também use isso para uma demonstração rápida de sintaxe e comandos.</p>

<p>Se você precisa escrever algo na linha de comando usando um teclado (eu sei que talvez você ainda não saiba o que é a linha de comando) ou apenas olhar para o comando real que o console está prestes a executar, ficará assim:</p>

<div class="cl_input">&nbsp;Fixture 42 At Full</div>

<p>E a resposta do console ficará assim:</p>

<div class="cl_response">Fixture 42 At Full</div>

<p>&nbsp;</p>

<p>Por favor, siga os passos deste guia e eu espero que você tenha uma ótima experiência com a&nbsp;dot2.</p>

<p>&nbsp;</p>

<p>É isto! Acho que estamos prontos para o próximo capítulo.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="b3900090-7787-4a5f-a6a2-5691606afee3">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_00_Main/pt/1.1'; " title="Go to previous page 'Guia de Introdução'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/GSG_02_PhysicalSetupAndLayout/pt/1.1';" title="Go to next page '2 - Setup Físico e Layout'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/12888/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	