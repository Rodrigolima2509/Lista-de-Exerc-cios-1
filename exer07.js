//Exercício 07
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require('prompt-sync')()
let macas = Number(prompt('Insira a quantidades de maçãs desejada: '))
let valor1 = 0.25
let valor2 = 0.30
let total = 0

if(macas < 12){
total = (valor2 * macas)
console.log(`Você comprou ${macas} maçãs cada uma por R$ 0,30, o total ficou: R$ ${total}`)
}
else {(macas >= 12)    
total = (valor1 * macas)
console.log(`Você comprou ${macas} maçãs cada uma por R$ 0,25, o total ficou: R$ ${total}`)
}