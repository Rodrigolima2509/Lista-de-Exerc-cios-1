//Exercício 01
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require('prompt-sync')()
let valor1 = Number(prompt('Insira um número: '))
if (valor1 % 2 === 0)
    console.log(`O número ${valor1} é par.`)
else (console.log(`o Número ${valor1} é ímpar.`) )