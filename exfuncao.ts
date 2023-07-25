// let prompt = require("prompt-sync")()
// let nome_recebido = prompt("Digite seu nome: ")
// let idade_recebida = parseInt(prompt("Digite sua idade: "))

// for( let contador = 0; contador <3; contador++){

// let pessoa  = {
//     nome: nome_recebido, 
//     idade: idade_recebida, 
  
// }

import promptSync from "prompt-sync"
let prompt = promptSync();

// console.log("Olá " + pessoa.nome + "! Voce está com " + pessoa.idade + "anos")

import { exercicio1 } from "./moduloEx1.js"


    
exercicio1()

function olaPessoa(nome_, idade_) {

    let pessoa  = {
        nome: nome_, 
        idade: idade_, 
}

// console.log("Olá " + pessoa.nome + "! Voce está com " + pessoa.idade + " anos")

}

// olaPessoa("Ademir", 40)
// olaPessoa("Rafael", 36)
// olaPessoa("Rafael", 25)