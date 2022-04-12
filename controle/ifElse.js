const ImprimirResultado = function(nota){
    if(nota>=6){
        console.log('Aprovado!')
    } 
    else {
        console.log('Reprovado!')
    }
}

ImprimirResultado(8)
ImprimirResultado(5)

ImprimirResultado('Eita!!!') //Cuidado!!!!!!!!