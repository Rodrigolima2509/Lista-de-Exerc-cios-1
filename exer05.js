//Exercício 05
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require('prompt-sync')()
console.log('Calculadora de IMC')
let valor1 = Number(prompt('Insira o seu peso em kg: '))
let valor2 = Number(prompt('Insira sua altura em metros. Ex. 1.80: '))
let peso = valor1 
let altura = valor2 
let imc = (peso / (altura * altura))

if(imc < 18.5)
    console.log(`Seu IMC é de ${imc.toFixed(2)}. Você esta abaixo do peso.`)  
else if(imc >= 18.5 && imc <= 24.9)
    console.log(`Seu IMC é de ${imc.toFixed(2)}. Você está no peso ideal.`)
else if(imc >= 25 && imc <= 29.9)
    console.log(`Seu IMC é de ${imc.toFixed(2)}. Você está com sobrepeso.`)
else if(imc >= 30 && imc <= 34.9)
    console.log(`Seu IMC é de ${imc.toFixed(2)}. Você está com obesidade.`)
else if(imc >= 35)
    console.log(`Seu IMC é de ${imc.toFixed(2)}. Você está com obesidade mórbida.`)