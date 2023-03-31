// import { useSoma } from "./deps.ts";
import { UseCalculos } from "./deps.ts";

function main() {
  // console.log(useSoma(100, 10));
  console.log(UseCalculos.soma(10, 5));
  console.log(UseCalculos.sub(10, 5));
  console.log(UseCalculos.mult(10, 5));
}

main();
