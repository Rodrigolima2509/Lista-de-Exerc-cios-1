// //Exercício 13
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require ('prompt-sync')()
let contador = 0
let soma = 0
let numero

do {
    numero = parseFloat(prompt('Digite um número decimal (Ou digite 0 para sair): '))
    if (numero != 0){
        soma += numero
        contador++
    }
} while (numero != 0)
    if (contador > 0){
        let media = soma / contador
        console.log(`Média aritmética dos números digitados é ${media}.`)
    } else {
        console.log('Nenhum número válido digitado.')
    }
