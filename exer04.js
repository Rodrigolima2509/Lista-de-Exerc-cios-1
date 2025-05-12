//Exercício 04
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require('prompt-sync')()
console.log('Bem vindo á Barbearia Don Horácio! Trabalhamos com os seguintes serviços.')
console.log('1- Corte')
console.log('2- Barba')
console.log('3- Sobrancelha')
let valor1 = Number (prompt('Insira o número que corresponde ao serviço desejado: '))
let servico = valor1

switch (servico) {
    case (servico = 1):
        console.log('Você escolheu corte. Aguardamos você.')
break
    case (servico = 2):
        console.log('Você escolheu barba. Aguardamos você.')
break
    case (servico = 3):
        console.log('Você escolheu sobrancelha. Aguardamos você.')
break
}