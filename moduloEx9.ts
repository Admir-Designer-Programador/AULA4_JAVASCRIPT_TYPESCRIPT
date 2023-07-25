import PromptSync from "prompt-sync" 

let prompt = PromptSync()

export function exercicio9() {

    console.log("funcao Exercicio 9 - while")

    // let prompt = require("prompt-sync")()

    let contagem: number = parseInt(prompt("Digite um Numero Inteiro: "))

while (contagem >= 0){

    console.log(contagem);
    contagem--;

}

}