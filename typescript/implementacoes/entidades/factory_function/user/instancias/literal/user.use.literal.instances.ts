import {
  objArgsUser_Generico,
  objArgsUser_Reinaldo,
} from "./object_args_literal.user.ts";

console.log(
  objArgsUser_Generico,
  "\n",
  objArgsUser_Reinaldo,
  "\n",
  "A idade do user [ Reinaldo ] comecou com >> ",
  objArgsUser_Reinaldo.idade,
  "\n",
  // OBS: ESTES METODOS PROTO VOU CONSEGUIR ACESSAR NO USER FINAL

  // objArgsUser_Generico.nomeCompleto?.(),
  // "\n",
  // objArgsUser_Reinaldo.nomeCompleto?.(),
  // "\n",
  // objArgsUser_Reinaldo.fazerAniversario?.(),
  // "\n",
  // objArgsUser_Reinaldo.fazerAniversario?.(),
  // objArgsUser_Reinaldo,
);
