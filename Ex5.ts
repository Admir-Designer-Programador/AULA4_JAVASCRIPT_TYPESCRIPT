// 5. Imprimir os primeiros 10 números da sequência de Fibonacci //


// let prompt = require("prompt-sync")()

let numeroAnterior = 0
let numeroAtual = 1

console.log(numeroAnterior)
console.log(numeroAtual)


for(let contador = 3; contador <= 10; contador++) {
    let novo = numeroAnterior + numeroAtual

    console.log(novo)

    numeroAnterior = numeroAtual
    numeroAtual = novo
}

    // let proximoNumero = numeroAnterior + numeroAtual

    // numeroAnterior = numeroAtual

    //numeroAtual = numeroAnterior