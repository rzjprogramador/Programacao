#include <iostream>
// #include <string>

int constantes() {
  const std::string meu_texto_constante {"valor da constante texto 2"};

  std::cout << meu_texto_constante << "\n";

  return 1;
}

/*
conceito: constante apos a primeira atribuicao nao posso mais mudar o valor,

legado: posso criar constante no cabecalho de importacao ex: #define PI 3.14 e usar esta constante PI 
mas nao é recomendavel.
melhor criar as constantes com const tipo e valor
*/