
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="1771b6fb-3f46-4840-a159-69db6fc031bc">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ht_turnonandoff/pt/1.3'; " title="Go to previous page 'Ligar e desligar o console'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_AddAndPatchFixtures/pt/1.3';" title="Go to next page 'Adicionar, Patchear, Alterar e Deletar Fixtures'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/1771b6fb-3f46-4840-a159-69db6fc031bc">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/24613/12'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.3</span>
			</div>
		<h1>Como fazer o Update do Console</h1>


		<p>Você pode atualizar o seu console dot2 de duas maneiras diferentes.</p>

<p>A versão atual do software é exibida na​ <a href="/Topic/aeea08ec-762b-4fbc-b77b-cb65a68e08ca">Janela de Sistema de Informação</a>.</p>

<p><strong>1. Opção 1: Atualizar seu console via</strong>&nbsp;<span class="hardkey">Setup</span><strong>:</strong></p>

<ol>
	<li>Faça o download do arquivo mais recente <strong>dot2* .update</strong> em <a href="http://www.ma-dot2.com/">www.ma-dot2.com</a>.&nbsp;</li>
	<li>Copie o conteúdo no diretório raiz num pen drive USB padrão.</li>
	<li>Certifique-se de que tenha apenas um arquivo de atualização no&nbsp;diretório raiz por vez.&nbsp;</li>
	<li>&nbsp;Insira o USB na parte de trás do console.</li>
	<li>Pressione&nbsp;<span class="hardkey">Setup</span>&nbsp;e clique em&nbsp;&nbsp;<span class="softkey">Software Update </span>&nbsp;na coluna&nbsp;<strong>Console</strong>.&nbsp;O&nbsp;<a href="/Topic/aeea08ec-762b-4fbc-b77b-cb65a68e08ca">Update do Software</a>&nbsp;via USB se abre.</li>
	<li>Clique em&nbsp;<span class="softkey">Update</span>.<br>
	O console pergunta se você deseja salvar o show file.</li>
	<li>Clique em&nbsp;<span class="softkey">Salvar&nbsp;Showfile</span>.<br>
	O console copia os arquivos de atualização e pergunta se você deseja reiniciar agora.</li>
	<li>Clique&nbsp;<span class="softkey">Reiniciar Agora</span>.<br>
	O console é reiniciado e instala os arquivos de update.</li>
	<li>Depois da atualização o console reinicia novamente.</li>
	<li>O console agora foi atualizado e está pronto para uso.​</li>
</ol>

<p><br>
<strong>2. Opção 2: Atualizar seu console via StickMAker com pen drive USB:&nbsp;</strong></p>

<ol>
	<li>Baixe a última versão do arquivo&nbsp;<strong>dot2*imgz</strong>&nbsp;e o<strong>&nbsp;</strong><strong>MA StickMAker</strong>&nbsp;em&nbsp;<a href="http://www.ma-dot2.com/">www.ma-dot2.com</a>.&nbsp;</li>
	<li>Para instalar o MA StickMAker&nbsp;no seu computador, dê dois cliques em&nbsp;<strong>StickMaker-x.x.x.x.exe</strong>.<br>
	Você será encaminhada para o processo de instalação.&nbsp;</li>
	<li>Insira um pen drive USB vazio em seu PC.&nbsp;</li>
	<li>Para abrir o MA StickMAker, clique com botão direito e execute ele como Administrador no ícone que se encontra na área de trabalho​.<br>
	O MA StickMAker&nbsp;se abrirá.&nbsp;</li>
	<li>Selecione o&nbsp;<strong>USB drive</strong>&nbsp;e então clique nos três pontos e selecione o arquivo&nbsp;<strong>dot2*imgz.</strong>&nbsp;</li>
	<li>Então clique em&nbsp;<strong>Start</strong>.<br>
	O pen drive será formatado para um pen drive Linux e a imagem será gravada no mesmo.&nbsp;</li>
	<li>Insira o pen drive USB formatado na entrada USB de trás do console.</li>
	<li>Conecte um monitor externo e um teclado USB ao console.&nbsp;</li>
	<li>Ligue o monitor e o console.&nbsp;</li>
	<li>Pressione o <strong>botão power</strong>&nbsp;na parte de trás do console e pressione&nbsp;<strong>F10</strong>&nbsp;no teclado algumas vezes até que a solicitação de senha apareça no monitor externo.</li>
	<li>Pressione&nbsp;<strong>Enter</strong>.&nbsp;</li>
	<li>Selecione seu <strong>pen drive</strong>&nbsp;<strong>USB</strong>&nbsp;e pressione <strong>Enter</strong>.</li>
	<li>Um pop-up abre após um tempo perguntando se você gostaria de atualizar o console ou se você gostaria de fazer o reset de fábrica.</li>
	<li>Selecione o <strong>&nbsp;Reset de fábrica</strong>.&nbsp;</li>
	<li>O console reseta &nbsp;e começa a reiniciar .&nbsp;</li>
	<li>Para completar o reset de fábrica, aceite o Acordo de Licença.</li>
	<li>O reset de fábrica foi concluído e o console exibe as notas da nova versão.</li>
	<li>O console foi atualizado e está pronto para ser usado.&nbsp;</li>
</ol>

<div class="important"><strong>Importante:</strong><br>
Todos os arquivos de show e tipos de fixture importados serão excluídos do disco rígido interno durante o reset de fábrica. O console será então redefinido para sua condição original.</div>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="1771b6fb-3f46-4840-a159-69db6fc031bc">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/ht_turnonandoff/pt/1.3'; " title="Go to previous page 'Ligar e desligar o console'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/HT_AddAndPatchFixtures/pt/1.3';" title="Go to next page 'Adicionar, Patchear, Alterar e Deletar Fixtures'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/24613/12';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	