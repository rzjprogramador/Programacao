
export type UserType = UserArgs & UserProto;

export interface UserArgs {
  primeiroNome: string;
  sobrenome: string;
  idade: number;
}

export interface UserProto {
  nomeCompleto: () => string;
  fazerAniversario?: () => boolean;
}