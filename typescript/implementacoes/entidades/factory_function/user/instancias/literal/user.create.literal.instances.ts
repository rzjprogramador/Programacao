import { createUser } from "../../user.entity.ts";

export const generico = createUser({
  primeiroNome: "generico",
  sobrenome: "foo jr",
  idade: 99,
});

export const reinaldo = createUser({
  primeiroNome: "reinaldo",
  sobrenome: "zachars jr",
  idade: 45,
});
