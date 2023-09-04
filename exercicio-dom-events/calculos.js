/* Desenvolva aqui a rotina */
function pegarValorElemento(elemento) {
  return parseInt(document.getElementById(elemento).value);
}

function calcularReceitasDescontos() {
  const valorBase = pegarValorElemento("valor_base");
  const valorTransporte = pegarValorElemento("valor_transporte");
  const valorAlimentacao = pegarValorElemento("valor_alimentacao");

  const somaReceitas = valorBase + valorTransporte + valorAlimentacao;

  const receitaTotal = document.getElementById("valor_receita");
  receitaTotal.setAttribute("value", `${somaReceitas.toFixed(2)}`);

  const descontoAutomovel = pegarValorElemento("valor_automovel");
  const faltas = pegarValorElemento("faltas");

  const somaDescontos = descontoAutomovel + faltas;

  const descontoTotal = document.getElementById("valor_descontos");
  descontoTotal.setAttribute("value", `${somaDescontos.toFixed(2)}`);

  const somaTotal = somaReceitas - somaDescontos;
  const total = document.getElementById("valor_total");
  total.setAttribute("value", `${somaTotal.toFixed(2)}`);
}

const inputs = document.getElementsByTagName("input");
function somarAutomativo(inputs) {
  for (const input of inputs) {
    input.addEventListener("blur", function () {
      calcularReceitasDescontos();
    });
  }
  document.getElementById("btn_calcular").remove();
}

somarAutomativo(inputs);
