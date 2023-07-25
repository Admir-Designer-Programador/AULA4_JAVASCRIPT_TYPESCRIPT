// import PromptSync from "prompt-sync" 

// let prompt = PromptSync()



export function exercicio5() {

    console.log("funcao Exercicio 5 - FOR")

let numeroAnterior: number  = 0
let numeroAtual: number = 1

console.log(numeroAnterior)
console.log(numeroAtual)


for(let contador: number = 3; contador <= 10; contador++) {
    let novo : number  = numeroAnterior + numeroAtual

    console.log(novo)

    numeroAnterior = numeroAtual
    numeroAtual = novo
}
}
