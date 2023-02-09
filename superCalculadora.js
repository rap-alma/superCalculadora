var num1 = document.getElementById('num1').value;
var num2 = document.getElementById('num2').value;
var resultado;

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
});
function validateForm() {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  //SOMA
  var resultadoSoma = parseInt(num1) + parseInt(num2);
  document.getElementById('soma').innerHTML = `${resultadoSoma}`;
  //SUBTRAÇÃO A POR B
  var resultadoSubtracaoAporB = parseInt(num1) - parseInt(num2);
  document.getElementById(
    'subtracaoAporB'
  ).innerHTML = `${resultadoSubtracaoAporB}`;
  //SUBTRAÇÃO B POR A
  var resultadoSubtracaoBporA = parseInt(num2) - parseInt(num1);
  document.getElementById(
    'subtracaoBporA'
  ).innerHTML = `${resultadoSubtracaoBporA}`;
  //MULTIPLICAÇÃO
  var resultadoMultiplicação = parseInt(num1) * parseInt(num2);
  document.getElementById(
    'multiplicação'
  ).innerHTML = `${resultadoMultiplicação}`;
  //DIVISÃO A POR B
  var resultadoDivisaoAporB = parseFloat(num1) / parseFloat(num2);
  resultadoDivisaoAporB = resultadoDivisaoAporB.toFixed(2);

  document.getElementById(
    'divisaoAporB'
  ).innerHTML = `${resultadoDivisaoAporB}`;
  //DIVISÃO B POR A
  var resultadoDivisaoBporA = parseFloat(num2) / parseFloat(num1);
  resultadoDivisaoBporA = resultadoDivisaoBporA.toFixed(2);

  document.getElementById(
    'divisaoBporA'
  ).innerHTML = `${resultadoDivisaoBporA}`;
  //POTENCIA DE A NA BASE B
  var resultadoPotenciaDeAnaBaseB = parseInt(num1) ** parseInt(num2);
  document.getElementById(
    'potenciaDeAnaBaseB'
  ).innerHTML = `${resultadoPotenciaDeAnaBaseB}`;
  //POTENCIA DE B NA BASE A
  var resultadoPotenciaDeBnaBaseA = parseInt(num2) ** parseInt(num1);
  document.getElementById(
    'potenciaDeBnaBaseA'
  ).innerHTML = `${resultadoPotenciaDeBnaBaseA}`;
  //RAIZ DE A
  var resultadoRaizDeA = Math.sqrt(parseInt(num1));
  resultadoRaizDeA = resultadoRaizDeA.toFixed(2);

  document.getElementById('raizDeA').innerHTML = `${resultadoRaizDeA}`;
  //RAIZ DE B
  var resultadoRaizDeB = Math.sqrt(parseInt(num2));
  resultadoRaizDeB = resultadoRaizDeB.toFixed(2);

  document.getElementById('raizDeB').innerHTML = `${resultadoRaizDeB}`;
  //FATORIAL DE A
  var resultadoFatorialDeA = fatorialDeA(num1);
  function fatorialDeA(num1) {
    if (num1 === 0 || num1 === 1) return 1;
    for (var i = num1 - 1; i >= 1; i--) {
      num1 *= i;
    }
    return num1;
  }
  document.getElementById('fatorialDeA').innerHTML = `${resultadoFatorialDeA}`;
  //FATORIAL DE B
  var resultadoFatorialDeB = fatorialDeB(num2);
  function fatorialDeB(num2) {
    if (num2 === 0 || num2 === 1) return 1;
    for (var i = num2 - 1; i >= 1; i--) {
      num2 *= i;
    }
    return num2;
  }
  document.getElementById('fatorialDeB').innerHTML = `${resultadoFatorialDeB}`;
  //PORCENTAGEM DE (A) EM RELAÇÃO A (B)
  var resultadoPorcentagemDeAemB = porcentagemDeAemB(num1, num2);
  function porcentagemDeAemB(num1, num2) {
    resultado = (num2 * 100) / num1;
    return resultado;
  }
  resultadoPorcentagemDeAemB = resultadoPorcentagemDeAemB.toFixed(0);

  document.getElementById(
    'porcentagemDeAemB'
  ).innerHTML = `${resultadoPorcentagemDeAemB}%`;
  //PORCENTAGEM DE (B) EM RELAÇÃO A (A)
  var resultadoPorcentagemDeBemA = porcentagemDeBemA(num1, num2);
  function porcentagemDeBemA(num1, num2) {
    resultado = (parseInt(num1) * 100) / parseInt(num2);
    return resultado;
  }
  resultadoPorcentagemDeBemA = resultadoPorcentagemDeBemA.toFixed(0);

  document.getElementById(
    'porcentagemDeBemA'
  ).innerHTML = `${resultadoPorcentagemDeBemA} %`;
  //MÉDIA
  var resultadoMedia = media(num1, num2);
  function media(num1, num2) {
    var resultado;
    resultado = (parseInt(num1) + parseInt(num2)) / 2;
    return resultado;
  }
  document.getElementById('media').innerHTML = `${resultadoMedia}`;
}
