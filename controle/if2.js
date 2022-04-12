function teste1 (num){
    if(num>7){
    console.log(num)
    console.log('Top')    
    }
}

teste1(8)
teste1(6)

function teste2(num){
    if(num>7); { // cuidado com o ;, não usar com estruturas de controle
        console.log(num)
    }
}

teste2(8)
teste2(6)