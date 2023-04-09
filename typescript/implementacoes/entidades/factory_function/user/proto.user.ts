// deno-lint-ignore-file no-unused-vars ban-unused-ignore

import { UserArgs, UserProto } from "./user.contracts.ts";

export const protoUser: UserProto = {
  nomeCompleto(this: UserArgs): string {
    return `${this.primeiroNome} ${this.sobrenome}`;
  },

  fazerAniversario(this: UserArgs): boolean {
    this.idade += 1;
    return true;
  },
};
