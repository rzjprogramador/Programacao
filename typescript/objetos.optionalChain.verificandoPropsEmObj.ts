// deno-lint-ignore-file no-unused-vars no-explicit-any
// OBJETOS

const user = {
  nome: "Reinaldo",
  idade: 45,
  // endereco: {
  //   rua: "rua foo",
  //   numero: 10,
  // },
};

// forma manual legado: >> se no obj a prop existe faça isto, senao faça estaOutraOpcao
// console.log(user.endereco ? endereco : "nao existe");

/*
optionalChain
conceito: verificando se existe props no objeto para uso ... se nao existe a prop ele retorna undefined mas nao estoura erro e crachea trava o codigo.

dica: faça a verificacao optionalChain a cada profundidade do objeto.

sintaxe: objeto <?> <.>
narracao: seExistir ? abra<.> proximaProp
macete: é sempre a interrogacao antes do ponto ex: obj?.prop1
*/
console.log(user?.endereco);
