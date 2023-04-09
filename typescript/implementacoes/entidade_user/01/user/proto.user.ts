// deno-lint-ignore-file no-unused-vars

import { UserArgs, UserProto } from "./user.entity.ts";

export const protoUser: UserProto = {
  nomeCompleto(this: UserArgs): string {
    return `${this.primeiroNome} ${this.sobrenome}`;
  },

  fazerAniversario(this: UserArgs): number {
    return this.idade += 1
  }
};
