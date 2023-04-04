import { Objetos } from "../objetos.ts";

const ts_objetos = new Objetos({
  nome: "Objetos Ts",
  extrair_membros: {
    conceito: "",
    exemplo: `
    ~~~
    // exemplo
    // Desestruturacao
    const objeto1 = { campo1: "vcampo1", campo2: 10 };

    const { campo1 } = objeto1;
    console.log(campo1);
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
    const objeto2 = { campo10: "vcampo10", campo20: 10 };

    // escolhendo os membros a serem copiados para o novo objeto - de proposito nao copiando o primeiro campo e pegando o resto
    const { campo10, ...resto } = objeto2; 
    const newObject = resto;
    console.log(newObject);
    ~~~
    `,
  },

  pesquisando_no_objeto: {
    conceito:
      `- com operador 'in' verifica somente se tem a chave passada no objeto.
    - com metodoProto 'obj.prop.includes("pesquisa")' verifica somente se tem o 'valor pesquisado na chave do objeto passado`,
    exemplo: `
    ~~~
    // exemplo
    const objeto3 = { campo1: "valor_campo1", campo2: 10 };
    
    // pesquisando_chaves
    const existeEstaChave1 = "campo1" in objeto3;
    const existeEstaChave2 = "campo_foo" in objeto3;

    // pesquisando_valor_das_chaves
    const existeEsteValorNaChave1 = objeto3.campo1.includes("valor_campo1");
    const existeEsteValorNaChave1_2 = objeto3.campo1.includes("foo");

    console.log(existeEstaChave1);
    console.log(existeEstaChave2);
    console.log(existeEsteValorNaChave1);
    console.log(existeEsteValorNaChave1_2);
    ~~~
    `,
  },
});
console.log(ts_objetos);
