//Exercício 12
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require ('prompt-sync')()
let tabuada = Number(prompt('Deseja saber a tabuada de qual número? '))
console.log(`Esta é a tabuada do ${tabuada}:`)
for (let i = 1; i <= 10; i++){
    let result = (i * tabuada)
    console.log(result) 
}
