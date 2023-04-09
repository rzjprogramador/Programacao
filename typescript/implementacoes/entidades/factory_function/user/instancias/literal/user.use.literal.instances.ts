import { generico, reinaldo } from "./user.create.literal.instances.ts";

console.log(
  generico,
  "\n",
  reinaldo,
  "\n",
  "A idade do user [ Reinaldo ] comecou com >> ",
  reinaldo.idade,
  "\n",
  generico.nomeCompleto?.(),
  "\n",
  reinaldo.nomeCompleto?.(),
  "\n",
  reinaldo.fazerAniversario?.(),
  "\n",
  reinaldo.fazerAniversario?.(),
  reinaldo,
);
