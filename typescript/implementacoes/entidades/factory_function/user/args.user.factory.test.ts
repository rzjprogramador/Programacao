import { UserArgs } from "./user.contracts.ts";
import { argsUserFactory } from "./args.user.factory.ts";
import { objArgsUser } from "./helpers/objs.args.user.ts";

import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

type InputArgsUserTest = UserArgs;

const sut = function (i: InputArgsUserTest) {
  return argsUserFactory(i);
};

const sutInput = objArgsUser;

Deno.test("[argsUserFactory] deve retornar os args enviados para user", () => {
  const actual = sut(sutInput.user1);
  expect(actual).toEqual(sutInput.user1);
});

Deno.test("[argsUserFactory] deve deve conter estas propriedades", () => {
  const action = sut(sutInput.user1);

  const actual = action.primeiroNome;
  const expected = "reinaldo";

  expect(action).toHaveProperty("primeiroNome");
  expect(actual).toEqual(expected);
});
