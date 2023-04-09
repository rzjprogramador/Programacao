import { UserArgs, UserType } from "./user.contracts.ts";
import { protoUser } from "./proto.user.ts";

const userFactory = (u: UserArgs): UserArgs => {
  const user = Object.create(protoUser);
  user.primeiroNome = u.primeiroNome;
  user.sobrenome = u.sobrenome;
  user.idade = u.idade;

  return user;
};

const prepareUser = (u: UserType) => {
  const factory = userFactory(u);
  const complet = { ...factory, id: "1" };
  return complet;
};

const saveUser = (u: UserType) => {
  const prepared = prepareUser(u);
  return prepared;
};

const user = (u: UserType) => {
  const save = saveUser(u);
  return save;
};

export { user };

// testers
const obj1: UserArgs = {
  primeiroNome: "reinaldo",
  sobrenome: "zachars jr",
  idade: 45,
};
const u1 = userFactory(obj1);
console.log(u1);
console.log("idade comecou com 45 ok >> ", u1.idade);
console.log(u1.nomeCompleto?.());
console.log(u1.fazerAniversario?.());
console.log(u1.fazerAniversario?.());
console.log("depois de 2 aniver a idade tem que ser 47 ok >> ", u1.idade);
console.log(u1);
