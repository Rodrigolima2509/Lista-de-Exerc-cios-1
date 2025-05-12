//Exercício 10
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require('prompt-sync')()
let i = Number(prompt('Insira um número inteiro: '))
for (let repeticao = 1; repeticao <= 10; repeticao++)
    console.log(i)
