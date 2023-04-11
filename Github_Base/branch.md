---
marp: true
---

# Branch

1. Branch
1. importante: se for deletar fique na master- nao esteja logado na branch que est manipulando.
2.
3. Logar
   1. ver_todas_branchs: `git branch`
   2. ver_que_branch_estou_logado: `git checkout`
   3. logar_em_branch_especifica: `git checkout NOME_BRANCH // é o emsmo de criar sóq ue sem o -b`
   4. atalho_logar_branch_anterior: `git checkout -`
   5. ver_commits: `git log`

4. Deletar
   1. passos_deletar: SicronizarRemotasComLocais > deletarLocalMergiada > deletarRemota
   2. SicronizarRemotasComLocais: `git fetch -p`
   3. deletarRemota_MesmoMergiada: `git push origin :BRANCH`
   4. deletarLocal_MesmoMergiada: `git branch -D BRANCH // depois sincronize e Veja todas branchs `

5. Criar
   1. criar_branch_vinculada_com_a_branch_atual: `git checkout -b NOME_BRANCH`
   2. logar_em_branch_de_um_commit_especifico: `git checkout HASH_DO_COMMIT`
   3. desfazer_alteracoes: `git switch -`