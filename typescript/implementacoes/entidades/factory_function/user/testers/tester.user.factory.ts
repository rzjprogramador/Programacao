import { UserArgs } from "../user.contracts.ts";
import { userFactory } from "../user.entity.ts";
import { argsUser_UseObj } from "./seed.obects_tester_use/args.user.seed.object.testers.ts";

// testers

const obj1: UserArgs = argsUser_UseObj.user1;

const u1 = userFactory(obj1);
console.log(u1);
console.log("idade comecou com 45 ok >> ", u1.idade);
console.log(u1.nomeCompleto?.());
console.log(u1.fazerAniversario?.());
console.log(u1.fazerAniversario?.());
console.log("depois de 2 aniver a idade tem que ser 47 ok >> ", u1.idade);
console.log(u1);
