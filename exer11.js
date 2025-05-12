//Exercício 11
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require ('prompt-sync')()
let soma = 0
for(let i = 1; i <= 5; i++){
    let entrada = (prompt(`Insira o ${i}º número: `))
    let numero = parseFloat(entrada)
    if(numero != 0){
        soma += numero
    }
}
console.log(`A soma total é: ${soma}`)
