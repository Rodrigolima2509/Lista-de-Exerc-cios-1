// //Exercício 14
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require('prompt-sync')()
let n = Number(prompt('Insira o número que deseja saber o fatorial: '))

if (n < 0)
    console.log('Fatorial não definido para números negativo.')

let fatorial = 1
for (let i = 1; i <= n; i++){
fatorial *= i
}

console.log(fatorial)
