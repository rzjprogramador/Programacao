export type UserType = UserArgs;

export interface UserArgs extends UserProto {
  primeiroNome: string;
  sobrenome: string;
  idade: number;
}

export interface UserProto {
  nomeCompleto?: () => string;
  fazerAniversario?: () => boolean;
}

/*

*/
