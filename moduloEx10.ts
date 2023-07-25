import PromptSync from "prompt-sync" 

let prompt = PromptSync()

export function exercicio10() {

    console.log("funcao Exercicio 10 - while")

    let numero: number = parseInt(prompt("Digite um numero: "))

while(numero != 0){

numero = parseFloat(prompt("Digite um numero")) 

}

console.log("OK")

}

