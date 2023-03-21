#include <iostream>

// using namespace std;

int main() {
  std::string texto {"meu texto"};
  std::string textoSemValorAinda {};
  int numInteiro {10};
  double numReal {11.77};
  std::size_t tamanhoNumeroOk {99};
  bool boleano {false};

  std::cout << "o valor de texto é " << texto << '\n';
  std::cout << "o valor de textoSemValorAinda é " << textoSemValorAinda << '\n';
  std::cout << "o valor de numInteiro é " << numInteiro << '\n';
  std::cout << "o valor de numReal é " << numReal << '\n';
  std::cout << "o valor de tamanhoNumeroOk é " << tamanhoNumeroOk << '\n';
  std::cout << "o valor de boleano é " << boleano << '\n';
  
  return 1;
}

/*
compilar_no_term:
  compilar: g++ arquivo.ext
  rodar: ./a.out

abandone_legado:
 namespace: nao precisa mais de explicitar using namespace std; , use: std::
 quebra_de_linha_com_endline: "nao use mais endline para quebrar linha, use: << '\n';"
 atribuicao: "sem sinal de igual coloque dentro de chaves"


sintaxe:
  regras: "apos cada instrucao ponto e virgula",
  variavel: tipo nome valor

namespace: 
conceito: o namespace era para destinguir de onde estamos usando.
só adicionar antes do comando de saida: std::

quebra_de_linha: "<< '\n';",

valores: com escopo_explicito dentro de chaves ex: {"meu texto"}, semValorAinda {}, 

nimeros:
numerosInteiros: para inteiro prefira o tipo std::size_t do que inteiro para fins de comparacoes.
 numerosReais: utilizar double que é mais preciso do que float que arredonda pra cima.

boleano:
  verdadeiro: "retorna 1",
  falso: "retorna 0",

*/