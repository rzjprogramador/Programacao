source ~/.config/nvim/settings/sets.vim
source ~/.config/nvim/settings/plugins.vim
source ~/.config/nvim/settings/themes.vim

"Transparent background. Only for nvim
if (has("nvim")) 
  highlight Normal guibg=NONE ctermbg=NONE
  highlight EndOfBuffer guibg=NONE ctermbg=NONE
endif

let g:airline_theme = 'sonokai'

" setar tema theme colorscheme
colorscheme dracula 