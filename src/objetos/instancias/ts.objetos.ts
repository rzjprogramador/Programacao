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
});
console.log(ts_objetos);
