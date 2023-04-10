type UserType = UserArgs;

interface UserArgs extends UserProto {
  primeiroNome: string;
  sobrenome: string;
  idade: number;
}

interface UserProto {
  nomeCompleto?: () => string;
  fazerAniversario?: () => boolean;
}

export type { UserArgs, UserProto, UserType };
