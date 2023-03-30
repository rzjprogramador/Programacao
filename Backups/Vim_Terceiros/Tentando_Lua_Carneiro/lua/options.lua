local opt = vim.opt

-- OPTIONS : OPCOES ************

-- ..
opt.shortmess:append { c = true }

-- Exibe linhas longas como apenas uma linha
opt.wrap = false

-- coluna para logs , depurador
opt.signcolumn = 'yes'

-- ..
opt.showmatch = true

-- ..
opt.showmode = false

-- ..
opt.foldmethod = 'marker'

-- As divisões verticais serão automaticamente à direita
opt.splitright = true

-- As divisões horizontais serão automaticamente
opt.splitbelow = true

-- Para que eu possa ver `` em arquivos markdown
opt.conceallevel = 0

-- mostrar cor em limite de colunas
opt.colorcolumn = '120'

-- ..
opt.scrolloff = 10

-- Converte tabulações em spa
opt.expandtab = true

-- Alterar o número de caracteres de espaço inseridos para indentação
opt.shiftwidth = 2

-- Inserir 2 espaços para tabulação
opt.tabstop = 2

-- Torna o recuo sm
opt.smartindent = true

-- ...
opt.list = true

-- ...
opt.compatible = false

-- habilita usar o mouse inserindo o valor 'a'
opt.mouse = 'a'

-- ...
opt.swapfile = false

-- para manter múltiplos buffers abertos buffer múltiplo 
opt.hidden = false

-- numero de historico 
opt.history = 100

-- ...
opt.lazyredraw = true

-- ..
opt.synmaxcol = 240

-- Torna o menu pop-up menor
opt.pumheight=10

-- mostrar régua
opt.ruler = true

-- Mais espaço para exibição de mensagens
opt.cmdheight=2

-- Torna a tabulação mais inteligente perceberá que você tem 2 v
opt.smarttab = true

-- Bom recuo automático
opt.autoindent = true

-- Sempre exibir o status l
opt.laststatus=0

-- mostrar numeros de linha
opt.number = true

-- Habilita o realce da linha atual
opt.cursorline = true

-- diga ao vim como é a cor de fundo
opt.background=dark

-- ..
opt.showtabline=2

-- Envolver selecionado e fechar com Tags Delimitadores escolhidos.
opt.whichwrap:append {
	['<'] = true,
	['>'] = true,
	[','] = true,
	h = true,
	l = true
}
