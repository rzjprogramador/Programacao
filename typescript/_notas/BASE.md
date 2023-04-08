---
marp: true
---

# Base com Typescript

# Valores validos truthy

| Valores validos | representacoes                              |
| --------------- | ------------------------------------------- |
| texto:          | abc um espaço ou qualquer caracter é valido |
| numero:         | qualquer numero positivo ou negativo.       |
| boleano:        | true                                        |

| valoresNaoValidos_falsy | representacoes                                       |
| ----------------------- | ---------------------------------------------------- |
| texto:                  | "" string vazia                                      |
| numero:                 | -0, obs: zero 0 retorna false quando verificados.    |
| variavelNaoSetada:      | null                                                 |
| variavelNaoDefinida:    | undefined                                            |
| estruturasVazias:       | [], {} tetornam true mas nao aproveitavel como valor |

---

# Exemplos

valor_default_variavel_em_uso_como_valor: `

```
// operador de coalescencia - caso o operando nao tenha valor_valido é assumido o valor passado apos os ??
const idade = 0;
console.log(`Sua idade é ${idade ?? "nao informado"}`);
```

`,

---

# Operadores

| Operadores    | representacao                                         |
| ------------- | ----------------------------------------------------- |
| valor_default | `operando ?? valorDefaultCasoValorDaVarNaoSejaValido` |
