//Exercício 06
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require('prompt-sync')()
let ladoA = Number(prompt('Insira o valor do primeiro lado do triângulo: '))
let ladoB = Number(prompt('Insira o valor do segundo lado do triângulo: '))
let ladoC = Number(prompt('Insira o valor do terceiro lado do triângulo: '))

if(ladoA === ladoB && ladoB === ladoC)
    console.log('Este triângulo possui os três lados iguais, é um triângulo equilátero.')
else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC)
    console.log('Este triângulo possui os dois lados iguais, é um triângulo isósceles.')
else if((ladoA != ladoB && ladoB != ladoC))
    console.log('Este triângulo possui os três lados diferentes, é um triângulo escaleno.')
