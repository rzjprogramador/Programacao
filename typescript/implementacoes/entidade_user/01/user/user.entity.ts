import { protoUser } from "./proto.user.ts";

export interface UserType {
  args: UserArgs;
  nomeCompleto?(): string;
}

export interface UserArgs {
  primeiroNome: string;
  sobrenome: string;
  idade: number;
}

export interface UserProto {
  nomeCompleto: (this: UserArgs) => string; // proto - repetido do UserProto porEnquanto TODO.
  fazerAniversario?: (this: UserArgs) => number;
}

const createUser = (args: UserArgs): UserType => {
  const user = Object.create(protoUser);
  user.primeiroNome = args.primeiroNome;
  user.sobrenome = args.sobrenome;
  user.idade = args.idade;

  return user;
};

const generico = createUser({
  primeiroNome: "generico",
  sobrenome: "foo jr",
  idade: 99,
});

const reinaldo = createUser({
  primeiroNome: "reinaldo",
  sobrenome: "zachars jr",
  idade: 45,
});

console.log(
  generico,
  "\n",
  reinaldo,
  "\n",
  generico.nomeCompleto?.(),
  "\n",
  reinaldo.nomeCompleto?.(),
  "\n",
);

/*
 obs:
 - nao se tipar  o retorno da factory da entidade - tem que tipar neste reotrno os metodos proto - pode ser opcionais... para desencadea-los no uso tem que verificar e pontoDesencadear a execucao.

 */
