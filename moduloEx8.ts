
import PromptSync from "prompt-sync" 

let prompt = PromptSync()

export function exercicio8() {

    console.log("funcao Exercicio 8 - while")

    // let prompt = require("prompt-sync")()

    let idade: number = parseInt(prompt("Digite a sua idade: "))

    while(idade <18 ){
    
        idade = parseInt(prompt("Digite a sua idade: "))
    
    }
    
    console.log("Sua idade é maior que 18 Anos: ")

}