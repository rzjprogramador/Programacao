import { UserArgs } from "./user.contracts.ts";
import { argsUserFactory } from "./args.user.factory.ts";
import { objArgsUser } from "./aux/objs.args.user.ts";

import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

type InputArgsUserTest = UserArgs;

const sut = function (i: InputArgsUserTest) {
  return argsUserFactory(i);
};

const sutInput = objArgsUser;

Deno.test("argsUserFactory", () => {
  const action = sut(sutInput.user1);
  console.log(action);
  expect(action).toEqual(sutInput.user1);
});
