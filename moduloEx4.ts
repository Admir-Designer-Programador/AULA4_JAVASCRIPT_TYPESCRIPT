import PromptSync from "prompt-sync" 

let prompt = PromptSync()


export function exercicio4() {

  let numero: number  = parseInt(prompt("Digite um numero de 1 a 10: "))

for (let mult = 0; mult <=10; mult++){
    console.log(numero*mult)

}

}