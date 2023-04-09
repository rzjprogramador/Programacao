import { UserArgs, UserType } from "./user.contracts.ts";
import { protoUser } from "./proto.user.ts";

const userFactory = (u: UserArgs): UserType => {
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
