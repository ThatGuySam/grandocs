
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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ff2ec6f4-e916-4a21-9550-2901612402ea">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_soundinput/pt/1.1'; " title="Go to previous page 'Configuração de Entrada de Som'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_systemclock/pt/1.1';" title="Go to next page 'Relógio do Sistema'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

					<div class="infobox"><b>Hint:</b><br><b>New help version</b><br>The help version you selected belongs to an older software version. <a href="/Topic/SetCurrentVersionNumber/29/ff2ec6f4-e916-4a21-9550-2901612402ea">You may want to view the latest help version.</a></div>

			<div class="pull-right">
					<button class="btn btn-mini" style="margin-right: 10px; height: 30px;" onclick="location.href = '/Media/TopicPdf/13129/3'; " title="Open/Save this topic as PDF document for viewing or printing">
						<img src="/Content/images/icons/filetype_pdf.png" style="height: 24px;"> Open topic as PDF
					</button>
				<span class="badge badge-info">Version 1.1</span>
			</div>
		<h1>Janela Status e Mensagens</h1>

			<div class="topic-table-of-contents">
				<h2>Table of contents of this topic</h2>
				<div class="topic-toc-toggler topic-toc-toggler-hide"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').hide(); $('.topic-toc-toggler-show').show(); return false;">hide</a></div>
				<div class="topic-toc-toggler topic-toc-toggler-show" style="display: none;"><a href="#" onclick="$('.topic-toc-ul').toggle(); $('.topic-toc-toggler-hide').show(); $('.topic-toc-toggler-show').hide(); return false;">show</a></div>
				<ul class="topic-toc-ul">
						<li>
							<a href="#toc_header_anchor_1">Status e Mensagens em Detalhes</a>
						</li>
				</ul>
			</div>

		<p>Para abrir a <strong>Janela Status e Mensagens</strong>, toque em um ícone bem ao lado da <a href="/Topic/330c5d26-3bcd-4d9c-a448-d89cc7a6d5f1">linha de comando</a>.</p>

<p><span class="image_gray_border"><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages01_1-1-3.png" style="height:auto"></span><em>Figura 1: Janela Status e&nbsp;Mensagens - Show All</em></p>

<p>A janela de status e mensagens fornecem informações sobre os ícones exibidos ao lado da linha de comando.</p>

<p>Todos os status ativos atuais e as mensagens são exibidas em letras brancas.</p>

<p>Para obter uma visão geral sobre todos os status possíveis e as mensagens, toque em ​<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages02_1-1-3.png" style="height:auto">&nbsp;na barra de título. Todos os status e mensagens possíveis serão exibidas.</p>

<p>A tabela tem quatro colunas.</p>

<p><strong>ícone:</strong><br>
Exibe o ícone do status ou mensagem. Este é o ícone que aparece ao lado da linha de comando​.</p>

<p><strong>Nome:</strong><br>
Exibe o nome do status ou mensagem.</p>

<p><strong>Categoria:</strong><br>
Exibe a categoria do status ou mensagem. Existem duas categorias disponíveis: Show e Net (Rede). Todas as mensagens da categoria show são armazenadas no arquivo de show e serão carregadas com o arquivo de show. Todas as mensagens da categoria net são independentes do arquivo de show e estão disponíveis com diferentes arquivos de show.</p>

<p><strong>Descrição:</strong><br>
Exibe informações detalhadas do status ou mensagem.</p>

<p>Para sair da janela Status e Mensagem, toque em&nbsp;<img alt="" src="/Media/Image/Dot2_ViewsandWindows_ControlElements_TitleBar08_1-0.PNG">&nbsp;na barra de título ou pressione&nbsp;<span class="hardkey">Esc</span> no console.</p>

<a name="toc_header_anchor_1" id="toc_header_anchor_1" class="topic-toc-item"></a><h2>Status e Mensagens em Detalhes</h2>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages03_1-0.png"><br>
<strong>Session Status Master:</strong><br>
A&nbsp;dot2 é o&nbsp;master de uma sessão.<br>
O coração azul é visível depois que uma sessão é iniciada na​ <a href="/Topic/43894987-4e55-4de0-b124-c0bf3c2fd787">Configuração de Rede</a>.<br>
<br>
<img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages04_1-0.png"><br>
<strong>Session Status Standalone:</strong><br>
O coração vermelho partido é visível se a dot2 está no modo autônomo​.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages17_1-0.png"><br>
<strong>Smiley:</strong><br>
Bem ao lado da linha de comando está o rosto feliz.<br>
O rosto feliz indica o modo autônomo e que tudo está OK.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages07_1-0.png"><br>
<strong>Console in a Session:</strong><br>
A dot2 juntou-se a uma sessão.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages05_1-0.png"><br>
<strong>Network loss:</strong><br>
Cabo de rede ou conexão está em falta ou com defeito. Verifique a conexão de rede​.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages18_1-0.png"><br>
<strong>DMX Tester Output:</strong><br>
A saída do tester de DMX está ativa. Para desligar o tester de DMX off, abra a&nbsp;<a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">janela tools</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages19_1-1-3.png" style="height:auto"><br>
<strong>Timecode Record:</strong><br>
Timecode record&nbsp;está sendo executado para uma lista de cue. Para desligar o timecode record, abra a&nbsp;<a href="/Topic/b8ab1bbb-182d-41d6-9a1e-52f5267922c7">vista de cues</a>&nbsp;respectiva e toque em <span class="softkey">TC Record</span>&nbsp;na barra de título.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages06_1-0.png"></p>

<p><strong>Something is not patched:</strong><br>
Existem fixtures <a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Menu de Patch</a>&nbsp;sem endereço de patch. Verifique os fixtures&nbsp;do Menu de Patch.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages08_1-0.png"><br>
<strong>Unassigned Ports:</strong><br>
Fixtures&nbsp;no&nbsp;<a href="/Topic/272be3c8-e297-4e8a-902a-01916763f043">Menu de Patch</a> estão atribuídos a um universo que não está disponível, por exemplo, universo 5 em um única dot2 core.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages09_1-0.png"><br>
<strong>Not enough Parameters:</strong><br>
Está faltando um dispositivo conectado ao dot2 onPC para ter uma saída de DMX.<br>
Um console dot2 conectado ou um Node4 conectado é necessário para que o dot2 onPC tenha uma saída de DMX.&nbsp;<br>
Mais de 1024 canais de DMX são patcheados em um dot2 onPC.​.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages10_1-0.png"><br>
<strong>Parked:</strong><br>
Canais DMX estão parkeados. Canais parkeados tem um fundo azul na​ <a href="/Topic/2f939332-43b1-44f0-9a0e-3121d5083e70">vista de DMX</a>.<br>
Para desparkear todos os canais de DMX, abra a&nbsp;<a href="/Topic/e5c9bd78-bb42-4cb3-aa88-a844659b59cc">janela tools</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages11_1-0.png"><br>
<strong>Preview:</strong><br>
Preview&nbsp;está ligado. Consulte, <a href="/Topic/1c4f9e79-3b28-437c-825e-0939174e045e">Tecla Prvw (Preview)</a> e <a href="/Topic/ccf585a5-a42f-4c45-8881-7ed203817ded">Comando Preview</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages12_1-0.png"><br>
<strong>Blind:</strong><br>
Blind está ligado. Consulte, <a href="/Topic/3e42903b-afc7-44da-a4ed-3df190f4d517">Tecla Blind</a>&nbsp;e&nbsp;<a href="/Topic/ea71e376-c320-4cc7-9c13-8e64b39603f8">Comando Blind</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages20_1-1-3.png" style="height:auto"><br>
<strong>Global Autofix:</strong><br>
Global autofix&nbsp;está desligado. Para ligar o global autofix, consulte&nbsp;<a href="/Topic/13f3b4a4-bfc6-4893-9a29-b9e5c3a404ad">Configurações Globais</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages13_1-0.png"><br>
<strong>Group/Grand Master:</strong><br>
Um grupo ou o grand master&nbsp;está menos que 100%. Consulte,&nbsp;<a href="/Topic/6bb6eb55-85ee-40b3-8670-672394179c6f">janela Executor Vazio</a>&nbsp;e&nbsp;<a href="/Topic/f05738f2-0e05-46c2-8a20-88c0852321e8">Guia de Introdução - Setup Físico e Layout</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages14_1-0.png"><br>
<strong>Highlight:</strong><br>
O modo highlight está ligado. Consulte, <a href="/Topic/b1f282ee-fff9-4459-853d-422bef14b885">Tecla Highlt (Highlight)</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages15_1-0.png"><br>
<strong>Missed Stations:</strong><br>
Uma estação disponível anteriormente está ausente. Verifique os dispositivos conectados na​ <a href="/Topic/43894987-4e55-4de0-b124-c0bf3c2fd787">Configuração de Rede</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages16_1-0.png"><br>
<strong>IP Conflict:</strong><br>
Dois consoles com o mesmo endereço de IPv4&nbsp;estão disponíveis.Altere o endereço de IP.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages22_1-1-3.png" style="height:auto"><br>
<strong>Speed 1 (Velocidade 1):</strong><br>
Master&nbsp;Speed&nbsp;(velocidade master) está ligado. Para desligar o Master Speed, consulte&nbsp;<a href="/Topic/7c1f0153-925d-477b-9b74-20bbc04acc98">janela Velocidade Magic</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages23_1-1-3.png" style="height:auto"><br>
<strong>Rate 1 (Ritmo 1):</strong><br>
Master&nbsp;Rate (ritmo master) está ligado. Para desligar Master Rate, consulte&nbsp;<a href="/Topic/7c1f0153-925d-477b-9b74-20bbc04acc98">janela Velocidade Magic</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages24_1-1-3.png" style="height:auto"><br>
<strong>Exec Time:</strong><br>
Executor time está sendo usado. Para colocar o exec time em 0.0 s, consulte&nbsp;<a href="/Topic/7c1f0153-925d-477b-9b74-20bbc04acc98">janela Velocidade Magic</a>.</p>

<p><img alt="" src="/Media/Image/Dot2_ViewsandWindows_StatusMessages25_1-1-3.png" style="height:auto"><br>
<strong>Prog Time:</strong><br>
Programmer Time está sendo usado. Para colocar o&nbsp;programmer time em 0.0 s, consulte&nbsp;<a href="/Topic/7c1f0153-925d-477b-9b74-20bbc04acc98">janela Velocidade Magic</a>.</p>


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
		<input id="CurrentGuid" name="CurrentGuid" type="hidden" value="ff2ec6f4-e916-4a21-9550-2901612402ea">
	</span>
</form></div>&nbsp;	</span>
	<span class="pull-right" style="white-space: nowrap;">
			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_soundinput/pt/1.1'; " title="Go to previous page 'Configuração de Entrada de Som'">
				<i class="icon-arrow-left"></i> previous
			</button>

			<button class="btn btn-mini" onclick="location.href='/Page/MA_dot2/window_systemclock/pt/1.1';" title="Go to next page 'Relógio do Sistema'">
				next <i class="icon-arrow-right"></i> 
			</button>
	</span>
</div>
	<div class="clear-fix"></div>
	<div class="pull-right">
	
			<button class="btn btn-mini" onclick="location.href='/Media/TopicPdf/13129/3';" title="Open/Save this topic as PDF document for viewing or printing">
				<img src="/Content/images/icons/filetype_pdf.png"> Open topic as PDF
			</button>
	</div>
<div class="clear-fix" style="margin-bottom: 10px"></div>
</div>

	