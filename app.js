function soma(a, b) {
    return a + b;
  }
  
  function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = soma(num1, num2);
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const calcularButton = document.getElementById("calcular");
    calcularButton.addEventListener("click", calcular);
  });