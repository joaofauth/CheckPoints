function microondas(pratoEscolhido, tempoDoCliente){
    let comida = pratoEscolhido
    let tempo = 0
    let prato = "\nPrato pronto, bom apetite!!!"

    if(typeof pratoEscolhido== "number"){
    switch (comida){
        case 1 :
            tempo = 10
        break
        case 2 :
            tempo = 8
        break
        case 3 :
            tempo = 15
        break
        case 4 :
            tempo = 12
        break
        case 5 :
            tempo = 8
        break
        default:
            
            return "Prato Inexistente, não se esqueça dos acentos!"
    }
    }
    else{

switch (comida.toLowerCase()){
    case "pipoca":
        tempo = 10
    break
    case "macarrão":
        tempo = 8
    break
    case "carne":
        tempo = 15
    break
    case "feijão":
        tempo = 12
    break
    case "brigadeiro":
        tempo = 8
    break
    default:
        
        return "Prato Inexistente, não se esqueça dos acentos!"
}
}
return tempoDoCliente >= 0 && tempoDoCliente < tempo ? "Tempo Insuficiente!" + prato 
:tempoDoCliente >= tempo && tempoDoCliente <= (tempo*2) ? "Prato pronto, bom apetite!!"
:tempoDoCliente >= (tempo*2) && tempoDoCliente < (tempo*3) ? "A Comida Queimou!" + prato
:tempoDoCliente >= (tempo*3) ? "KABUUUUM!!!": prato
}

console.log(microondas("FEIJÃO" , 25))