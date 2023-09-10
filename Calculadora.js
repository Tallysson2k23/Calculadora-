
const prompt = require ("prompt-sync")();

let num1 = parseFloat(prompt ("Digite um numero: "));
let operacao = prompt ("Escolha a operação: +, -, /, *: ");
let num2 = parseFloat(prompt ("Digete um numero: "));


let soma = num1 + num2;
let sub = num1 - num2;
let divisao = num1 / num2;
let resto = num1 % num2;
let multiplicacao = num1 * num2;

if (operacao === "+"){
    console.log(`A soma dos valores ${num1} e ${num2} é:` + soma)
}else if(operacao === "-"){
    console.log(`A subtração dos numeros ${num1} e ${num2} é: ${sub}`);
}else if(operacao === "/"){
    console.log(`A divisao dos numeros ${num1} e ${num2} é: ${divisao}`)
    console.log(`O resto da divisão é ${resto}`);
}else if (operacao === "*"){
    console.log(`A multilicação dos numeros ${num1} e ${num2} é: ${multiplicacao}`);
}