// deno-lint-ignore-file no-unused-vars
// OBJETOS

const user = {
  nome: "Reinaldo",
  idade: 45,
  endereco: {
    rua: "rua foo",
    numero: 10,
  },
};

// Manipulacao Objeto

// operador_boleano 'in'  :: verifica se existe a informacao chave key dentro do objeto
// console.log("nome" in user);
// console.log("Reinaldo" in user.nome); // TODO: key.value por enquanto da erro.

// Object.keys(obj) // retorna um vetor com todas chaves do objeto passado
// console.log(Object.keys(user));

// Object.values(obj) // retorna um vetor com todos os valores do objeto passado - obs: os sub_objetos retornam um objeto com chave e valor.
// console.log(Object.values(user));

// Object.entries(obj) // retorna uma matriz, separando cada chave e valor em vetores/array de string
// console.log(Object.entries(user));

// Mostrar em JSON estruturas de Objeto com o metodo do Obj JSON :: JSON.stringify(alvo) ex: quando retornado objetos [ Object, Object ]
// console.log(JSON.stringify(Object.values(user)));

// DESESTRUTURACAO

/*
usabilidade: copia ou extrair valores selecionados de um objeto e adicionar em outras variaveis_novas.

extraindo do objeto suas props - obs: dentro de { o que vai ser extraido } = fonte
dica: quando os nomes das variaveis sao iguais coloque a primeira dentro de {} para extrair e elimine a segunda ex: de :: const endereco = user.endereco  para const { endereco } = user
*/
// const endereco = user.endereco // Forma tradicional
// const { endereco } = user; // forma moderna
// console.log(endereco);

// pegando outra prop. separe as desejadas por virgula
// const { nome, idade } = user;
// console.log(nome, idade);

/*
Operador rest ...variavelQueCopiaraORestante

sintaxe: { naoCopie, naoCopie2, ...varRestoCopiado } = desteObjetoFonte // use: varRestoCopiado

conceito:  variaveis passadas primeiro separadas por virgula indicam que serao retiradas da copia nao seram copiada ...e apos o operador rest 3 pontos <variavelUQevaiReceber o restante - menos os passados antes que nao serao copiados>.

 aplicabilidade: retirar, copiar alguma prop do objeto copiado
 dica: só sera copiado o que tiver após os 3 pontos para a variavelNova criada após estes 3 poontos, os props passadas anets dos 3 pontos nao serao copiadas.

*/

// const { nome, ...resto } = user; // ex: aqui o que tiver em nome nao sera copiado
// console.log(resto);

// ex: aqui nome e endereco nao sera copiado para a nova variavel resto que ficou com o restante
const { nome, endereco, ...resto } = user;
console.log(resto);
