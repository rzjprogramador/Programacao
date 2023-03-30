import { cart } from "@src/testers/legacy_cart_version_1/factory"
import { responseJson } from "@src/app/helpers/makes/makeConvert"
import { ok } from "@src/app/helpers/responses/http_request_response"
import { compra } from "@src/testers/legacy_cart_version_1/client_compra"

// TESTES
/* compra e após compra: console Puro */

console.log("inicial statusCarrinho: ", cart.orderStatus)
compra()

const cartData = {
  items: responseJson(cart.items),
  total: cart.total(),
  checkout: responseJson(cart.checkout()),
}

function cartDataConsole(data: any) {
  return data
}

console.log(cartDataConsole(cartData))
// console.log(cart.checkout())
