local opt = vim.opt
local cmd = vim.cmd

-- CMD : COMANDOS VIMSCRIPT *****************************************

-- Global
cmd 'syntax enable'
cmd 'filetype plugin indent on'
cmd 'set nobackup'
cmd 'set guicursor= ' -- cursor sempre I-Beam - depois de reset no terminal

-- Comandos Front_styles_Css_Scss
cmd[[ 
  autocmd FileType css setl iskeyword+=-
  autocmd FileType scss setl iskeyword+=@-@

  autocmd FileType * setlocal formatoptions-=c formatoptions-=r formatoptions -=o
]]

-- ..
-- cmd [[ autocmd FileType * setlocal formatoptions-=c formatoptions-=r formatoptions -=o]] 



-- Terminal
cmd [[command! Term :botright split term://$SHELL]]
cmd [[
  autocmd TermOpen * setlocal listchars= nonumber norelativenumber nocursorline
  autocmd TermOpen * startinsert
  autocmd BufLeave term://* stopinsert
]]

-- Terminal : Floaterminal setup : Terminal Flutuante
cmd [[
  let g:floaterm_keymap_new = '<Leader>ft'
  let g:floaterm_keymap_prev = '<Leader>fp'
  let g:floaterm_keymap_next = '<Leader>fn'
  let g:floaterm_keymap_toggle = '<Leader>t'
  let g:floaterm_keymap_kill = '<Leader>fk'
  let g:floaterm_title='>( /ᐠ｡ꞈ｡ᐟ\ )<'
]]

