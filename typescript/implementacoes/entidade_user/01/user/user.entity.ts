import { protoUser, protoUserReinaldo } from "./proto.user.ts";

export interface UserType {
  args: UserArgs;
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

const createUser = (args: UserArgs, proto: UserProto) => {
  const user = Object.create(proto);
  user.primeiroNome = args.primeiroNome;
  user.sobrenome = args.sobrenome;
  user.idade = args.idade;

  return user;
};

const setGenerico = () => {
  const generico = createUser({
    primeiroNome: "generico",
    sobrenome: "foo jr",
    idade: 99,
  }, protoUser);

  return generico;
};

const setReinaldo = () => {
  const reinaldo = createUser({
    primeiroNome: "reinaldo",
    sobrenome: "zachars jr",
    idade: 45,
  }, protoUserReinaldo);

  return reinaldo;
};

console.log(
  setGenerico(),
  "\n",
  setReinaldo(),
  "\n",
  setGenerico().nomeCompleto(),
  "\n",
  setReinaldo().nomeCompleto(),
);

/*
 obs:
 - nao tipar  o retorno da factory da entidade - porEnquanto - ao menos que coloque os metodos no type deste retorno...mas sem o this nos params
 - ao chamar metodo proto na Instancia nao precisa do nome do objeto.

 */
