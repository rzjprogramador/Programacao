// deno-lint-ignore-file no-unused-vars no-explicit-any

// OBJETOS - optionalChain :: verificacao de campos de objeto para uso

const user = {
  nome: "Reinaldo",
  idade: 45,
  // endereco: {
  //   rua: "rua foo",
  //   numero: 10,
  // },
};

const obj2 = {
  nome: "Reinaldo",
  idade: 45,
  endereco: {
    rua: null,
  },
};

// forma manual legado: >> se no obj a prop existe faça isto, senao faça estaOutraOpcao
// console.log(user.endereco ? endereco : "nao existe");

/*
optionalChain
conceito: verificacao de campos de objeto para uso.

beneficio: vai verificar se existem as props no objeto usado e se nao existir nao vai travar/crachear a saida do codigo, vai somente retornar undefined se nao existir ou nulo senao tiver valorValido e podemos pegar estes retornos invalidos e fazer algum tratamento.

dica: faça a verificacao optionalChain a cada profundidade do objeto.

sintaxe: objeto <?> <.>

narracao: seExistir ? abra . proximaProp

macete: é sempre a interrogacao antes do ponto ex: obj?.prop1

*/

// verificando se as props existem no uso
console.log(user?.endereco);
console.log(obj2?.endereco?.rua);
console.log(obj2?.endereco?.naoExisteSubKey);
