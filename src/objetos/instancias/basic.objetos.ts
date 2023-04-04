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
});
console.log(basic_objetos);
