// Fazer um menu de exercícios utilizando exemplos dado em aula 
// (6 exercícios dentro de funções, e incluir nome ou algo de sua preferência para criar um objeto e manipulá-lo)


import PromptSync from "prompt-sync" 

let prompt = PromptSync()

import { exercicio1 } from "./moduloEx1"

import { exercicio2 } from "./moduloEx2"

import { exercicio3 } from "./moduloEx3"

import { exercicio4 } from "./moduloEx4"

import { exercicio5 } from "./moduloEx5"

import { exercicio6 } from "./moduloEx6"

import { exercicio7 } from "./moduloEx7"

import { exercicio8 } from "./moduloEx8"

import { exercicio9 } from "./moduloEx9"

import { exercicio10 } from "./moduloEx10"



let resposta:string 

do {

    console.log("Bem vindo ao menu de exercicios, escolha um exercicio")

    resposta = prompt("Digite um numero de 1 a 6, para escolhe um exercicio, ou sair para interrronper o programa: ")

    
    switch (resposta) {
        case "1":
            //chamar exercicio 1

            console.log('Voce escolheru o exercicio 1')
            exercicio1()

            break;

            case "2":
                //chamar exercicio 2
    
                console.log('Voce escolheru o exercicio 2')
                exercicio2()

                break;

                case "3":
                    //chamar exercicio 3
        
                    console.log('Voce escolheru o exercicio 3')
                    exercicio3()
    
                    break;

                    case "4":
                        //chamar exercicio 4
                        
            
                        console.log('Voce escolheru o exercicio 4')
                        exercicio4()
        
                        break;

                        case "5":
                            //chamar exercicio 5
                
                            console.log('Voce escolheru o exercicio 5')
                            exercicio5()
            
                            break;

                            case "6":
                                //chamar exercicio 6
                    
                                console.log('Voce escolheru o exercicio 6')
                                exercicio6()
                
                                break;

                                case "7":
                                    //chamar exercicio 7
                        
                                    console.log('Voce escolheru o exercicio 7')
                                    exercicio7()
                    
                                    break;

                                    case "8":
                                        //chamar exercicio 8
                            
                                        console.log('Voce escolheru o exercicio 8')
                                        exercicio8()
                        
                                        break;

                                        case "9":
                                            //chamar exercicio 9
                                
                                            console.log('Voce escolheru o exercicio 9')
                                            exercicio9()
                            
                                            break;

                                            case "10":
                                                //chamar exercicio 10
                                    
                                                console.log('Voce escolheru o exercicio 10')
                                                exercicio10()
                                
                                                break;
    
        default:
            console.log("Voce nao escolheu nem um dos exercicios")
            break;
    }

    
} while (resposta != "sair");