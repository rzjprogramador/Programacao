import { Objetos } from "../objetos.ts";

const basic_objetos = new Objetos({
  nome: "Objetos Basic",
  extrair_membros: {
    conceito: "",
    exemplo: `
    ~~~
    // exemplo
    const campo1 = objeto1.campo1 // extraindo do objeto1 o membro campo1
    ~~~
    `,
  },

  criacao_obj_apartir_de_copia: {
    conceito:
      "Criar novo objeto com base copiando o outro ... tem que remover as props do copiado primeiro , ...pegar o resto que deseja e deixar disponivel, criar o novo objeto e atribuir este resto disponivel...importante: só de usar os ...3pontos ja deixa no nome da varRest escolhida os campos no ar disponivel para recuperar.",
    exemplo: `
    ~~~
  /* Criar novo objeto com base em copia de outro objeto - escolhendo os membros desejados
  *************************************************** */

  const objeto2 = {
    campo10: "vcampo10",
    campo20: 10,
    campo30: true,
    campo40: "foo",
  };

  // escolhendo os membros a serem copiados para o novo objeto - de proposito nao copiando o primeiro campo e pegando o resto

  const objetoCopiado = {
    // obs: Nao copiado o primeiro campo chamado : campo10
    campo20: objeto2.campo20,
    campo30: objeto2.campo30,
    campo40: objeto2.campo40,
  };

  const newObject = objetoCopiado;
  console.log(newObject);
    ~~~
    `,
  },

  pesquisando_no_objeto: {
    conceito: ``,
    exemplo: `
    ~~~
    const objeto3 = { campo1: "valor_campo1", campo2: 10 };

    /* Pesquisando no Objeto :
    -
    *************************************************** */

    // pesquisando_chaves
    function pesquisaChaveNoObjeto(input: string) {
      if (Object.getOwnPropertyNames(objeto3)[1] === input) {
        return true;
      } else {
        return false;
      }
    }
    console.log(pesquisaChaveNoObjeto("campo20"));
    // console.log(Object.getOwnPropertyNames(objeto3)[1]); // pegando chave desejada manualmente por posicao no array que devolve o metodo

    // pesquisando_valor_das_chaves
    function pesquisaValorEmChaveDeObjeto(obj: any) {
      if (obj.campo1 === "valor_campo1") {
        return true;
      } else {
        return false;
      }
    }
    console.log(pesquisaValorEmChaveDeObjeto(objeto3));
    ~~~
    `,
  },
});
console.log(basic_objetos);
