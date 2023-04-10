import { repoInUso } from "./mediator.save.repository.user.ts";
import { TypeUser } from "./user.contracts.ts";

const saveUser = (u: TypeUser) => {
  const repository = repoInUso.production.create(u);
  return repository;
};

export { saveUser };
