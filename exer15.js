//Exercício 15
let fibo = 10 //10 primeiros da sequência de fibonacci
let a = 0
let b = 1
console.log('Os 10 primeiros números da sequência de Fibonacci são:')

for (let i = 0; i < fibo; i++){
    console.log(a)
    let proximo = a + b
    a = b
    b = proximo
}