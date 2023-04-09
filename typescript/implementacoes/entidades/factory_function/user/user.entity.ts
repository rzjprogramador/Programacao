import { UserArgs, UserType } from "./user.contracts.ts";
import { protoUser } from "./proto.user.ts";

export const createUser = (u: UserArgs): UserType => {
  const user = Object.create(protoUser);
  user.primeiroNome = u.primeiroNome;
  user.sobrenome = u.sobrenome;
  user.idade = u.idade;

  return user;
};
