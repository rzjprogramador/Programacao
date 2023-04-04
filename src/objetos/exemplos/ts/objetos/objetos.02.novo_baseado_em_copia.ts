// deno-lint-ignore-file no-unused-vars

/* Criar novo objeto com base em copia de outro objeto - escolhendo os membros desejados
*************************************************** */
const objeto2 = { campo10: "vcampo10", campo20: 10 };

// escolhendo os membros a serem copiados para o novo objeto - de proposito nao copiando o primeiro campo e pegando o resto
const { campo10, ...resto } = objeto2; 
const newObject = resto;
console.log(newObject);
