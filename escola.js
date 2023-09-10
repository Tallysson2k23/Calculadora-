const prompt = require ("prompt-sync")();

console.log("PROGRAMA 1:")
console.log("==================================================================")

let not1 = parseFloat(prompt("Digite a primeira nota:"));
let not2 = parseFloat(prompt("Digite a segunda nota:"));
let not3 = parseFloat(prompt("Digite a terceira nota:"));


let media = (not1 + not2 + not3) / 3;
let resultado = media >= 7 ? "Aprovado" : "Reprovado";

console.log(`O aluno está ${resultado} com média ${media.toFixed(2)}`);

console.log("PROGRAMA 2:");
console.log("=================================================================");


let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));


let mediaAtual = (nota1 + nota2) / 2;


let notaMinima = (7 - (mediaAtual * 2)) / 2;


if (notaMinima <= 10) {
  console.log(`Para passar com nota sete, você precisa tirar no mínimo ${notaMinima.toFixed(2)} na próxima prova.`);
} else {
  console.log("Você não pode passar com nota sete, pois a nota mínima necessária é maior que 10.");
}
