/*
 valor_direita: [
  < <operando> <operador> <operando2> >,
  <funcao que nela usa-se operacao e retorna um valor>,
  <referencia de um valor>,
  <tudo que traz um resultado> e é guardado na variavel_esquerda>,
 ]
*/

// variaveis-uso
const numero1 = 10;
const numero2 = 20;

// const funcaoOperacaoLogica = () => (Number(numero1) === numero2) ? true : false;
// const funcaoOperacaoComparacao = () => (Number(numero1) !== numero2) ? true : false;

// valor_operacao
const valorOperacaoSoma = 10 + 10;
const valorOperacaoLogica = Number(numero1) === numero2 ? true : false;
const valorOperacaoComparacao = Number(numero1) !== numero2 ? true : false;

console.log(valorOperacaoSoma, valorOperacaoLogica, valorOperacaoComparacao);
