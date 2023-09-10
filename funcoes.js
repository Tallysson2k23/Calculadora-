
function saudacao() {
    console.log("Olá, bem-vindo!");
  }
    function soma(a, b) {
    return a + b;
  }
  
  // Arrow function
  const subtracao = (a, b) => a - b;
  
  saudacao();
  
  const resultadoSoma = soma(5, 3); // Chamando a função de soma
  console.log("Resultado da soma: " + resultadoSoma);
  
  const resultadoSubtracao = subtracao(10, 4); // Chamando a função de subtração
  console.log("Resultado da subtração: " + resultadoSubtracao);
  