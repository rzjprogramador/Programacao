---
marp: true
---

# OBJETO

1. # Desestruturacao
   1. _conceito_: "desestruturacao é extrair props de um objeto e deixa-las
      livre no escopo para reuso, tambem podemos fazer copias do objeto e
      decidir se nesta copia adicionamos ou removemos campos."

   2. _exemplo_:
      ```
      // exemplo Desestruturacao 

      const objeto1 = {
      campo1: "vcampo1", campo2: 10 };

       const { campo1 } = objeto1;
       console.log(campo1);
      ```
