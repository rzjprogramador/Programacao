import { argsUserFactory } from "./args.user.factory.ts";
import { register } from "./helpers/registers.ts";
import { saveUser } from "./save.repository.user.ts";
import { ArgsUser, TypeUser } from "./user.contracts.ts";

const prepareUser = (u: ArgsUser): TypeUser => {
  const args = argsUserFactory(u);
  const model = { ...args, ...register };
  const save = saveUser(model);
  return save;
};

export { prepareUser };
