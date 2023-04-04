// deno-lint-ignore-file no-unused-vars

/* Desestruturacao *************************************************** */
const objeto1 = { campo1: "vcampo1", campo2: 10 };

const { campo1 } = objeto1;
// console.log(campo1);

/* Criar novo objeto com base copiando o outro *************************************************** */
const objeto2 = { campo10: "vcampo10", campo20: 10 };

const { campo10, ...resto } = objeto2;
const newObject = resto;
console.log(newObject);
