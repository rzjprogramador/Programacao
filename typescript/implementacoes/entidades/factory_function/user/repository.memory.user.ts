import { saveUser } from "./save.repository.user.ts";
import { TypeUser } from "./user.contracts.ts";

interface RepositoryUser {
  _items?: TypeUser[];
  create: (u: TypeUser) => TypeUser;
  list: () => TypeUser[];
}

const repositoryMemoryUser: RepositoryUser = {
  _items: [],

  create(u: TypeUser) {
    const item = u;
    // const item = saveUser(u);
    this._items?.push(item);
    return item;
  },

  list() {
    return this?._items!;
  },
};

export { repositoryMemoryUser };
