//Necessário rodas NPM Install para garantir que as dependências sejam carregadas
//Exercício 01
// let valor1 = 10
// if (valor1 % 2 === 0)
//     console.log(`O número ${valor1} é par.`)
// else (console.log(`o Número ${valor1} é ímpar.`) )

//______________________________________________________

//Exercício 02
// let idade = 30
// if(idade <= 12)
//     console.log('Esta pessoa é uma criança.')
// else if(idade > 12 && idade <= 18)
//     console.log('Esta pessoa é um(a) adolescente.')
// else if(idade > 18 && idade <=25 )
//     console.log('Esta pessoa é um(a) jovem adulto.')
// else if(idade > 25 && idade <= 59)
//     console.log('Esta pessoa é um(a) adulto.')
// else if(idade > 60)
//     console.log('Esta pessoa é um(a) idoso.')

//______________________________________________________

//Exercício 03
// let nota = 2
// let faltas = 1
// if(nota < 5 || faltas > 5)
//     console.log('Aluno reprovado!')
// else if(nota >= 5 && nota <= 6 && faltas <= 5 )
//     console.log('Aluno em recuperação.')
// else if(nota >= 7 || faltas <= 5)
//     console.log('Aluno aprovado! Parabéns!')

//______________________________________________________

//Exercício 04
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
// const prompt = require('prompt-sync')()
// console.log('Bem vindo á Barbearia Don Horácio! Trabalhamos com os seguintes serviços.')
// console.log('1- Corte')
// console.log('2- Barba')
// console.log('3- Sobrancelha')
// let valor1 = Number (prompt('Insira o número que corresponde ao serviço desejado: '))
// let servico = valor1

// switch (servico) {
//     case (servico = 1):
//         console.log('Você escolheu corte. Aguardamos você.')
// break
//     case (servico = 2):
//         console.log('Você escolheu barba. Aguardamos você.')
// break
//     case (servico = 3):
//         console.log('Você escolheu sobrancelha. Aguardamos você.')
// break
// }

//______________________________________________________

//Exercício 05
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
// const prompt = require('prompt-sync')()
// console.log('Calculadora de IMC')
// let valor1 = Number(prompt('Insira o seu peso em kg: '))
// let valor2 = Number(prompt('Insira sua altura em metros. Ex. 1.80: '))
// let peso = valor1 
// let altura = valor2 
// let imc = (peso / (altura * altura))

// if(imc < 18.5)
//     console.log(`Seu IMC é de ${imc.toFixed(2)}. Você esta abaixo do peso.`)  
// else if(imc >= 18.5 && imc <= 24.9)
//     console.log(`Seu IMC é de ${imc.toFixed(2)}. Você está no peso ideal.`)
// else if(imc >= 25 && imc <= 29.9)
//     console.log(`Seu IMC é de ${imc.toFixed(2)}. Você está com sobrepeso.`)
// else if(imc >= 30 && imc <= 34.9)
//     console.log(`Seu IMC é de ${imc.toFixed(2)}. Você está com obesidade.`)
// else if(imc >= 35)
//     console.log(`Seu IMC é de ${imc.toFixed(2)}. Você está com obesidade mórbida.`)

//______________________________________________________

//Exercício 06
// let ladoA = 15
// let ladoB = 15
// let ladoC = 15

// if(ladoA === ladoB && ladoB === ladoC)
//     console.log('Este triângulo possui os três lados iguais, é um triângulo equilátero.')
// else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC)
//     console.log('Este triângulo possui os dois lados iguais, é um triângulo isósceles.')
// else if((ladoA != ladoB && ladoB != ladoC))
//     console.log('Este triângulo possui os três lados diferentes, é um triângulo escaleno.')

//______________________________________________________

//Exercício 07
// let macas = 8
// let valor1 = 0.25
// let valor2 = 0.30
// let total = 0

// if(macas < 12){
// total = (valor2 * macas)
// console.log(`Você comprou ${macas} maçãs, o total ficou: R$ ${total}`)
// }
// else if (macas >= 12)    
// total = (valor1 * macas)
// console.log(`Você comprou ${macas} maçãs, o total ficou: R$ ${total}`)

//______________________________________________________

//Exercício 08
// let valor1 = 126
// let valor2 = 15

// if (valor1 === valor2){
//     console.log('Insira valores diferentes!')}

// else if (valor1 < valor2){
//     console.log(valor1, valor2)}

// else if (valor2 < valor1)
//     console.log(valor2, valor1)

//______________________________________________________

//Exercício 09
// for (let i = 10; i >= 1; i--)
//     console.log(i)

//______________________________________________________

//Exercício 10
// let i = 150
// for (let repeticao = 1; repeticao <= 10; repeticao++)
//     console.log(i)

//______________________________________________________

//Exercício 11
// const prompt = require ('prompt-sync')()
// let soma = 0
// for(let i = 1; i <= 5; i++){
//     let entrada = (prompt(`Insira o ${i}º número: `))
//     let numero = parseFloat(entrada)
//     if(numero != 0){
//         soma += numero
//     }
// }
// console.log(`A soma total é: ${soma}`)

//______________________________________________________

//Exercício 12
// const prompt = require ('prompt-sync')()
// let tabuada = Number(prompt('Deseja saber a tabuada de qual número? '))
// console.log(`Esta é a tabuada do ${tabuada}:`)
// for (let i = 1; i <= 10; i++){
//     let result = (i * tabuada)
//     console.log(result) 
// }

//______________________________________________________

// //Exercício 13
// const prompt = require ('prompt-sync')()
// let contador = 0
// let soma = 0
// let numero

// do {
//     numero = parseFloat(prompt('Digite um número decimal (Ou digite 0 para sair): '))
//     if (numero != 0){
//         soma += numero
//         contador++
//     }
// } while (numero != 0)
//     if (contador > 0){
//         let media = soma / contador
//         console.log(`Média aritmética dos números digitados é ${media}`)
//     } else {
//         console.log('Nenhum número válido digitado.')
//     }

//______________________________________________________

// //Exercício 14
// const prompt = require('prompt-sync')()
// let n = Number(prompt('Insira o número que deseja saber o fatorial: '))

// if (n < 0)
//     console.log('Fatorial não definido para números negativo.')

// let fatorial = 1
// for (let i = 1; i <= n; i++){
// fatorial *= i
// }

// console.log(fatorial)

//______________________________________________________

//Exercício 15
// let fibo = 10 //10 primeiros da sequência de fibonacci
// let a = 0
// let b = 1
// console.log('Primeiros 10 números da sequência de Fibonacci:')

// for (let i = 0; i < fibo; i++){
//     console.log(a)
//     let proximo = a + b
//     a = b
//     b = proximo
// }