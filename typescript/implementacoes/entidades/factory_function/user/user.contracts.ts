import { RegisterPerson } from "./helpers/registers.ts";

type TypeUser = ArgsUser & RegisterPerson;

interface ArgsUser extends UserProto {
  primeiroNome: string;
  sobrenome: string;
  idade: number;
}

interface UserProto {
  nomeCompleto?: () => string;
  fazerAniversario?: () => boolean;
}

export type { ArgsUser, TypeUser, UserProto };
