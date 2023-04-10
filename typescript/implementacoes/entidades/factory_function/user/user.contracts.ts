import { IdentifiersType } from "../helpers/unique/unique_imports_app.ts";

type TypeUser = ArgsUser & IdentifiersType;

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
