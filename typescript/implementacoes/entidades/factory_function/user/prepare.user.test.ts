import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { UserType } from "./user.contracts.ts";
import { prepareUser } from "./prepare.user.ts";
import { objArgsUser } from "./helpers/objs.args.user.ts";

type InputPrepareUserTest = UserType;

const sut = function (i: InputPrepareUserTest) {
  return prepareUser(i);
};

const sutInput = objArgsUser;

Deno.test("[ prepareUser] deve conter e ser do tipo string o campo ID", () => {
  const where = sut(sutInput.user1);
  const actual = where.ID;
  const tester = typeof actual === "string";
  const result = true;

  // console.log(typeof actual);

  expect(tester).toEqual(result);
});

Deno.test("[ prepareUser] deve conter e ser do tipo number o campo idade", () => {
  const where = sut(sutInput.user1);
  const actual = where.idade;
  const tester = typeof actual === "number";
  const result = true;

  expect(tester).toEqual(result);
});

Deno.test("[ prepareUser - noFail ] nao deve ter propriedades com valores invalidos", () => {
  const where = sut(sutInput.user1);
  const result = null;

  expect(where.ID).not.toEqual(result);
  expect(where.IDB).not.toEqual(result);
  expect(where.primeiroNome).not.toEqual(result);
  expect(where.sobrenome).not.toEqual(result);
  expect(where.idade).not.toEqual(result);
});
