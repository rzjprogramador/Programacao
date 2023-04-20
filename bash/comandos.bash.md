---
marp: true
---

# comandos_bash

1. listar
1. funcoes_bash:
   `compgen -A function  ... OU ... declare -F  // obs: declare vai imprimir declare na frente.. e esta obsolento em 2023`
1. funcoes_bash_por_inicio_nome_argumente: `set | grep "NomeInicioDaFuncao"`

---
auto_complete_bash: 
```
sudo apt update
sudo apt upgrade
sudo apt install bash-completion

// visualizar script adicionado :
cat /etc/profile.d/bash_completion.sh
```
