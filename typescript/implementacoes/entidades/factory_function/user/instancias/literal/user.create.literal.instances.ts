import { UserType } from "../../user.contracts.ts";
import { userFactory } from "../../user.entity.ts";

export const generico = userFactory({
  primeiroNome: "generico",
  sobrenome: "foo jr",
  idade: 99,
});

export const reinaldo = userFactory({
  primeiroNome: "reinaldo",
  sobrenome: "zachars jr",
  idade: 45,
});

// inserindo prepare para nao dar erro de referencia

const prepareUser = (u: UserType) => {
  const factory = userFactory(u);
  const complet = { ...factory, id: "1" };
  return complet;
};

const user = (u: UserType) => {
  const prepared = prepareUser(u);
  return prepared;
};

// console.log(prepareUser(reinaldo));
console.log(user(reinaldo));
