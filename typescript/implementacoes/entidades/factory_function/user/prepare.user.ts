import { argsUserFactory } from "./args.user.factory.ts";
import { register } from "./helpers/registers.ts";
import { UserType } from "./user.contracts.ts";

const prepareUser = (u: UserType) => {
  const args = argsUserFactory(u);
  const model = { ...args, ...register };
  return model;
};

// const saveUser = (u: UserType) => {
//   const prepared = prepareUser(u);
//   return prepared;
// };

// const user = (u: UserType) => {
//   const save = saveUser(u);
//   return save;
// };

export { prepareUser };
