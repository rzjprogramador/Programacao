// deno-lint-ignore-file no-explicit-any

export type ConsoleAppType = (...d: any[]) => void;
export type ConsoleTestType = (...d: any[]) => void;

export const ConsoleAppMod: ConsoleAppType = (...d) => console.log(d);
// export const ConsoleApp = (d: any): void => console.log("Test >>>>: ", d);
// ConsoleApp -- para evitar console.log na app

export const ConsoleTestMod: ConsoleTestType = (...d) => console.log(d);
// export const ConsoleTest = (d: any): void => console.log("Test >>>>: ", d);
// ConsoleTest -- para evitar console.log em varios tests

// SUBIR PARA RZJ_MODULES_GIT
