//Exercício 02
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require('prompt-sync')()
let idade = Number(prompt('Insira sua idade: '))
if(idade <= 12)
    console.log('Esta pessoa é uma criança.')
else if(idade > 12 && idade <= 18)
    console.log('Esta pessoa é um(a) adolescente.')
else if(idade > 18 && idade <=25 )
    console.log('Esta pessoa é um(a) jovem adulto.')
else if(idade > 25 && idade <= 59)
    console.log('Esta pessoa é um(a) adulto.')
else if(idade >= 60)
    console.log('Esta pessoa é um(a) idoso.')