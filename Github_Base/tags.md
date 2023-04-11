---
marp: true
---

# Git_Tag

1. tagear
   1. tag_ar_commit_melhor:
      "`git tag v1.0.0 -m "mensagem release: informacao" <hashDoCommit_alvo>  // obs: esta é a melhor forma de tagear`"

1. visualizar
   1. local
      1. ver todas_tags: "`git tag`"
      1. ver todas_tags_local: "`git fetch`"

   1. deletar
      1. local
         1. deletar_todas_tags_locais: "`git tag -l | xargs git tag -d`",
         1. limpar_tags_locais: "`git tag -l | xargs git tag -d`",
         1. deletar_tag_especifica_local:
            "`git tag -d <nome da tag> // -d de delete`"
      2. remoto
         1. deletar_todas_tags_remotas:
            "`git tag -l | xargs -n 1 git push --delete origin`",
         1. deletar_tag_especifica_remota:
            "`git push origin :refs/tags/prod1.0`"
         1.

   1. push_subir_tags
      1. subir_tags_anotadas:
         "`git push origin release_ts --follow-tags  // obs: o git nao sobe tags com os push entao use este comando apra subir aa tags anotadas`"
