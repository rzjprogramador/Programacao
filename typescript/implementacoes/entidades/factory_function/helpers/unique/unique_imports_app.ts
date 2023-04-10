import {
  IdentifiersType,
  importRegisters,
  ImportRegistersType,
} from "../modules_rzj_enviar_github/registers.ts";
import {
  ConsoleTestMod,
  ConsoleTestType,
} from "./../../helpers/modules_rzj_enviar_github/modules_rzj_enviar_github.ts";

interface ImportsUnique {
  ConsoleTest: ConsoleTestType;
  importRegisters: ImportRegistersType;
}

const importsUnique: ImportsUnique = {
  ConsoleTest: ConsoleTestMod,
  importRegisters: importRegisters,
};

export { importsUnique };
export type { IdentifiersType, ImportRegistersType };
