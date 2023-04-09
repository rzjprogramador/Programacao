import { UserArgs, UserType } from "./user.contracts.ts";
import { protoUser } from "./proto.user.ts";

// import { reinaldo } from "./instancias/literal/user.create.literal.instances.ts";

export const userFactory = (u: UserArgs): UserType => {
  const user = Object.create(protoUser);
  user.primeiroNome = u.primeiroNome;
  user.sobrenome = u.sobrenome;
  user.idade = u.idade;

  return user;
};

// const prepareUser = (u: UserType) => {
//   const factory = userFactory(u);
//   const complet = { ...factory, id: "1" };
//   return complet;
// };

// const user = (u: UserType) => {
//   const prepared = prepareUser(u);
//   return prepared;
// };

// console.log(user(reinaldo));
