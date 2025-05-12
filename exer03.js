//Exercício 03
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require('prompt-sync')()
let nota = Number(prompt('Insira a nota: '))
let faltas = Number(prompt('Insira o número de faltas: '))
if(nota < 5 || faltas > 5)
    console.log('Aluno reprovado!')
else if(nota >= 5 && nota <= 6 && faltas <= 5 )
    console.log('Aluno em recuperação.')
else if(nota >= 7 || faltas <= 5)
    console.log('Aluno aprovado! Parabéns!')